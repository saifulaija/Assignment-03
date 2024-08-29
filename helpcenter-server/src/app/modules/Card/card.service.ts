import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { TCard } from './card.interface';
import { Card } from './card.model';
import { cardSearchableFields } from './card.constant';



const createCardIntoDB = async (payload: TCard) => {
  const result = await Card.create(payload);
  return result;
};

const getAllCardsFromDB = async (query: Record<string, unknown>) => {
  const CardQuery = new QueryBuilder(
    Card.find(),
    query,
  )
    .search(cardSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await CardQuery.modelQuery;
  const meta = await CardQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleCard=async(title:string)=>{
   const result=await Card.findOne({title})
   return result
    
}

export const CardServices = {
  createCardIntoDB,
  getAllCardsFromDB,
  getSingleCard
 
};
