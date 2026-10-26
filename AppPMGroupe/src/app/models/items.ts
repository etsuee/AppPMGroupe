export type itemStatus = 'available' | 'maintenance' | 'loan';
export interface item {
  id: number;
  name: string;
  category: string;
  serialNumber: string;
  status: itemStatus;
}
