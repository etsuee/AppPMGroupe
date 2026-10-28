export type itemStatus = 'available' | 'maintenance' | 'loan';
export type category = 'ordinateur' | 'tablette' | 'video' | 'audio';

export interface Item {
  id: number;
  name: string;
  category: string;
  serialNumber: string;
  status: itemStatus;
}
