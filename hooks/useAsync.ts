/**
 * Custom hook for handling async operations with loading and error states
 */

'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

interface UseAsyncOptions<T> {
  asyncFunction: () => Promise<T>;
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useAsync<T>({
  asyncFunction,
  immediate = false,
  onSuccess,
  onError,
}: UseAsyncOptions<T>) {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const data = await asyncFunction();
      
      if (isMountedRef.current) {
        setState({ data, loading: false, error: null });
        onSuccess?.(data);
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Unknown error');
      
      if (isMountedRef.current) {
        setState({ data: null, loading: false, error: err });
        onError?.(err);
      }
    }
  }, [asyncFunction, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
