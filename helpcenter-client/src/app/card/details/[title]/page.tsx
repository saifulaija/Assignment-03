"use client";
import Loader from "@/components/shared/Loader";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useGetSingleCardsQuery } from "@/redux/features/card/cardApi";
import React from "react";

type TParams = {
  params: {
    title: string;
  };
};

const CardDetailsPage = ({ params }: TParams) => {
  const { title } = params;
  const { data, isLoading } = useGetSingleCardsQuery(title);

  if (isLoading) return <Loader />;

  return (
    <div className="flex justify-center items-center my-32">
      <Card
        className={cn(
          "w-full max-w-lg bg-background bg-gray-200 cursor-pointer shadow-md"
        )}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{data?.data?.title}</h2>
          <hr className="my-2 w-full border-t border-gray-500 border-opacity-30" />
          <p className="mt-4 text-sm text-gray-600">
            {data?.data?.description}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CardDetailsPage;
