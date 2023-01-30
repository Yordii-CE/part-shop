import { generateResources } from './helpers/resource'

//Here type ApiRest endpoints
export const services = [
  'brands',
  'classifications',
  'clients',
  'products',
  'employees',
  'models',
  'providers',
  'tickets',
  'repayments',
  'sales',
  'quotations',
] as const
export const resources = generateResources(services)
