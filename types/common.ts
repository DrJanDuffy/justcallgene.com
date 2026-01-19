/**
 * Common types used throughout the application
 */

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type Status = 'active' | 'inactive' | 'pending' | 'archived';

export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export type SortOrder = 'asc' | 'desc';

export interface SortParams {
  field: string;
  order: SortOrder;
}

/**
 * Property type definitions - shared across lead and listing types
 */
export type PropertyType =
  | 'single-family'
  | 'condo'
  | 'townhouse'
  | 'multi-family'
  | 'commercial'
  | 'land'
  | 'other';
