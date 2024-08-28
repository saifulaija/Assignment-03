import { Router } from 'express';

import { ProductsRoutes } from '../modules/products/product.route';
import { CardsRoutes } from '../modules/Card/card.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/cards',
    route: CardsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
