import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import { errorHandler, notFoundHandler, requestLogger } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Health check route
app.get('/', (_req: Request, res: Response): void => {
  res.send('AutoServis Backend API is running!');
});

// API Routes
app.use('/api', apiRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
