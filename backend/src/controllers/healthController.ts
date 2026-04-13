import { Request, Response } from 'express';
import { ApiResponse } from '../models/types';

/**
 * Health check controller
 */
export function getHealthCheck(_req: Request, res: Response<ApiResponse>): void {
  res.json({
    success: true,
    message: 'AutoServis Backend API is running!',
    data: {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    },
  });
}
