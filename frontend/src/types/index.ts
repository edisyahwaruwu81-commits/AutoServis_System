// ============================================
// Shared TypeScript types for AutoServis Frontend
// ============================================

// --- Service Status Types ---
export type ServiceStatus = 'waiting' | 'in-progress' | 'completed' | 'cancelled';
export type MekanikStatus = 'waiting' | 'in-progress' | 'waiting-part' | 'done';

// --- Queue / Dashboard Types ---
export interface QueueItem {
  id: string;
  ticketNo: string;
  customer: string;
  vehicle: string;
  plateNo: string;
  status: ServiceStatus | 'done';
  time: string;
}

export interface StatusConfig {
  label: string;
  variant: 'default' | 'secondary' | 'outline' | 'destructive';
  color: string;
}

// --- Inventory Types ---
export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
  unit: string;
}

// --- Mechanic / Job Types ---
export interface Job {
  id: string;
  licensePlate: string;
  carModel: string;
  status: 'waiting' | 'in-progress' | 'completed';
  customerName: string;
  estimatedTime?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

export interface SparePart {
  id: string;
  name: string;
  quantity: number;
  available: boolean;
}

// --- Service Registration Types ---
export interface ServiceFormData {
  nama: string;
  noPolisi: string;
  noHp: string;
  alamat: string;
  merk: string;
  keluhan: string;
}

// --- Vehicle Info Types ---
export interface VehicleInfo {
  plateNo: string;
  type: string;
  complaint: string;
  mechanic: string;
  timeIn: string;
}

// --- Status Button Config ---
export interface StatusButtonConfig {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// --- Chart Data Types ---
export interface SalesDataPoint {
  month: string;
  revenue: number;
}

// --- Stat Card Types ---
export interface StatItem {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

// --- API Response Types ---
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
