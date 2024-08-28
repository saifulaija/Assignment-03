import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CardServices } from './card.service';

const createCard = catchAsync(async (req, res) => {
  const result = await CardServices.createCardIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card is created successfully',
    data: result,
  });
});

const getAllCards = catchAsync(async (req, res) => {
  const result = await CardServices.getAllCardsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cards are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleCard = catchAsync(async (req, res) => {
  const { title } = req.params;

  const result = await CardServices.getSingleCard(title);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card  is retrieved successfully',
    data: result,
  });
});

export const CardControllers = {
  createCard,
  getAllCards,
  getSingleCard,
};
