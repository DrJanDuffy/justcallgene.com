/**
 * API request/response type definitions
 */

import type { Lead, LeadFormData, LeadSubmissionResponse } from './lead';
import type { BaseEntity } from './common';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  statusCode?: number;
}

export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number>;
}

// Lead API types
export type CreateLeadRequest = LeadFormData;
export type CreateLeadResponse = ApiResponse<LeadSubmissionResponse>;

export type GetLeadRequest = {
  leadId: string;
};
export type GetLeadResponse = ApiResponse<Lead>;

export type GetLeadsRequest = {
  page?: number;
  limit?: number;
  status?: string;
  source?: string;
};
export type GetLeadsResponse = ApiResponse<{
  leads: Lead[];
  total: number;
  page: number;
  limit: number;
}>;

// Valuation API types
export interface ValuationRequest {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
}

export interface ValuationResponse {
  estimatedValue: number;
  valueRange: {
    min: number;
    max: number;
  };
  confidence: 'high' | 'medium' | 'low';
  comparables?: ComparableProperty[];
  marketTrends?: MarketTrend;
}

export interface ComparableProperty {
  address: string;
  salePrice: number;
  saleDate: Date;
  squareFeet: number;
  distance: number; // in miles
}

export interface MarketTrend {
  direction: 'up' | 'down' | 'stable';
  changePercent: number;
  period: string;
}
