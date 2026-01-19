/**
 * Community/neighborhood type definitions
 */

import type { BaseEntity } from './common';

export interface Community extends BaseEntity {
  name: string;
  slug: string;
  city: string;
  state: string;
  description: string;
  image: string;
  coordinates?: Coordinates;
  averagePrice?: number;
  medianPrice?: number;
  pricePerSquareFoot?: number;
  schools?: School[];
  amenities?: string[];
  demographics?: Demographics;
  marketStats?: MarketStats;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface School {
  name: string;
  type: 'elementary' | 'middle' | 'high';
  rating?: number;
  distance?: number; // in miles
}

export interface Demographics {
  population?: number;
  medianAge?: number;
  medianIncome?: number;
  homeOwnershipRate?: number;
}

export interface MarketStats {
  averageDaysOnMarket?: number;
  salesLastMonth?: number;
  salesLastYear?: number;
  priceChange?: {
    period: string;
    change: number;
    direction: 'up' | 'down' | 'stable';
  };
}
