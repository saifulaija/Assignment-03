'use client'

import { TCard } from "@/types/global.type";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { truncateTitle } from "@/utils/truncateTitle";


const Cards = ({ card }: { card: TCard }) => {
  const router=useRouter();
    const handleDetails = () => {
      router.push(`card/details/${card?.title}`);
    };

    const title = truncateTitle(card?.description,100)
  return (
    <Card
      onClick={handleDetails}
      className={cn(
        "w-full max-w-[400px] bg-background bg-gray-200 cursor-pointer"
      )}
    >
      <div>
        <h2 className="text-lg font-semibold px-4 py-2">{card?.title}</h2>
        <hr className="my-2 w-full border-t border-gray-500 border-opacity-30" />
        <p className="mt-2 text-sm text-gray-600 py-6 px-4">
          {title}
        </p>
      </div>
    </Card>
  );
};

export default Cards;
