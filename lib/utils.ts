import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function externalLinkProps(href: string) {
  const isExternal = href.startsWith('http');
  return isExternal ? { target: '_blank', rel: 'noreferrer' } : {};
}
