// Shared TypeScript types for the AutoServis backend

export interface Customer {
  id?: number;
  nama: string;
  no_hp: string;
  alamat?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Vehicle {
  id?: number;
  customer_id: number;
  no_polisi: string;
  merk: string;
  tipe?: string;
  tahun?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ServiceStatus = 'waiting' | 'in-progress' | 'completed' | 'cancelled';

export interface ServiceOrder {
  id?: number;
  ticket_no: string;
  customer_id: number;
  vehicle_id: number;
  keluhan: string;
  mechanic_id?: number;
  status: ServiceStatus;
  estimated_time?: string;
  total_cost?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface Mechanic {
  id?: number;
  nama: string;
  spesialisasi?: string;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface InventoryItem {
  id?: number;
  name: string;
  sku: string;
  category: string;
  stock: number;
  min_stock: number;
  price: number;
  unit: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface SparePartRequest {
  id?: number;
  service_order_id: number;
  inventory_item_id: number;
  quantity: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at?: Date;
  updated_at?: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
