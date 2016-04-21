import { Router } from 'express';
export interface IModule {
  baseUrl: string,
  init(container): void
}
