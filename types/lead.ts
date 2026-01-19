/**
 * Lead-related type definitions
 */

export interface Lead extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  source: LeadSource;
  status: LeadStatus;
  propertyAddress?: string;
  propertyType?: PropertyType;
  estimatedValue?: number;
  timeline?: string;
  notes?: string;
}

export type LeadSource =
  | 'website'
  | 'google-ads'
  | 'facebook'
  | 'referral'
  | 'direct'
  | 'other';

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'nurturing'
  | 'converted'
  | 'lost';

export type PropertyType =
  | 'single-family'
  | 'condo'
  | 'townhouse'
  | 'multi-family'
  | 'commercial'
  | 'land'
  | 'other';

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  propertyAddress?: string;
  propertyType?: PropertyType;
  estimatedValue?: number;
  timeline?: string;
  consent: boolean;
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  message: string;
  errors?: Record<string, string[]>;
}
