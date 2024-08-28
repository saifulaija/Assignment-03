import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { CardControllers } from './card.controller';

const router = express.Router();

router.post(
  '/',

  //   validateRequest(CardValidations.CreateCardValidationSchema),
  CardControllers.createCard,
);

router.get(
  '//:title',

  CardControllers.getSingleCard,
);

router.get(
  '/',

  CardControllers.getAllCards,
);

export const CardsRoutes = router;
