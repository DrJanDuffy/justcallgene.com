/**
 * Form-related type definitions
 */

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  placeholder?: string;
  options?: FormOption[];
  validation?: ValidationRule[];
}

export type FormFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'file';

export interface FormOption {
  value: string;
  label: string;
}

export interface ValidationRule {
  type: ValidationType;
  message: string;
  value?: string | number;
  pattern?: RegExp;
}

export type ValidationType =
  | 'required'
  | 'email'
  | 'phone'
  | 'minLength'
  | 'maxLength'
  | 'min'
  | 'max'
  | 'pattern'
  | 'custom';

export interface FormErrors {
  [fieldName: string]: string | string[];
}

export interface FormState<T> {
  values: T;
  errors: FormErrors;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}
