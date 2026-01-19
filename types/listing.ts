/**
 * Real estate listing type definitions
 */

import type { BaseEntity } from './common';

export interface Listing extends BaseEntity {
  mlsNumber?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  propertyType: PropertyType;
  listingType: ListingType;
  status: ListingStatus;
  description: string;
  images: ListingImage[];
  features: string[];
  yearBuilt?: number;
  garage?: number;
  pool?: boolean;
  coordinates?: Coordinates;
  schoolDistrict?: string;
  hoaFee?: number;
  taxes?: number;
}

export type PropertyType =
  | 'single-family'
  | 'condo'
  | 'townhouse'
  | 'multi-family'
  | 'commercial'
  | 'land'
  | 'other';

export type ListingType = 'sale' | 'rent' | 'lease';

export type ListingStatus =
  | 'active'
  | 'pending'
  | 'sold'
  | 'withdrawn'
  | 'expired'
  | 'coming-soon';

export interface ListingImage {
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface ListingSearchParams {
  city?: string;
  state?: string;
  zipCode?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  propertyType?: PropertyType;
  listingType?: ListingType;
  status?: ListingStatus;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'date' | 'squareFeet';
  sortOrder?: 'asc' | 'desc';
}
