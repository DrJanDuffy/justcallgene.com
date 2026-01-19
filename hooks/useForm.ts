/**
 * Custom hook for form management with validation
 */

'use client';

import { useState, useCallback } from 'react';
import type { FormState, FormErrors, ValidationRule } from '@/types/form';

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => FormErrors;
  onSubmit: (values: T) => Promise<void> | void;
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (name: keyof T) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : e.target.value;

      setValues((prev) => ({ ...prev, [name]: value }));
      
      // Clear error when user starts typing
      if (errors[name as string]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name as string];
          return newErrors;
        });
      }
    },
    [errors]
  );

  const handleBlur = useCallback((name: keyof T) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate on blur
    if (validate) {
      const validationErrors = validate(values);
      if (validationErrors[name as string]) {
        setErrors((prev) => ({ ...prev, [name]: validationErrors[name as string] }));
      }
    }
  }, [values, validate]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      
      // Validate all fields
      if (validate) {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) {
          // Mark all fields as touched
          const allTouched = Object.keys(values).reduce((acc, key) => {
            acc[key] = true;
            return acc;
          }, {} as Record<string, boolean>);
          setTouched(allTouched);
          return;
        }
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, onSubmit]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setFieldValue = useCallback((name: keyof T, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
    isValid: Object.keys(errors).length === 0,
  };
}
