import { DOMAttributes } from 'react';

export type * from './common';

// Required pick keys
export type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>>;

// Partial omit keys
export type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;

// only keys in K are required, other keys are partial.
export type RequiredOnly<T, K extends keyof T> = RequiredPick<T, K> & PartialOmit<T, K>;

// Pick DOMAttributes.
export type DOMAttributesWithoutRef<T> = Omit<DOMAttributes<T>, 'ref'>;
export type DOMAttributesWithoutChildren<T> = Omit<DOMAttributes<T>, 'children'>;
export type DOMAttributesWithoutRefAndChildren<T> = Omit<DOMAttributes<T>, 'ref' | 'children'>;
