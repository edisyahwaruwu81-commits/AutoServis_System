import { Router } from 'express';
import { getHealthCheck } from '../controllers/healthController';

const router: Router = Router();

router.get('/', getHealthCheck);

export default router;
