import { TCard } from "@/types/global.type";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";


const Cards = ({ card }: { card: TCard }) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[400px] bg-background bg-gray-200"
      )}
    >
      <div>
        <h2 className="text-lg font-semibold px-4 py-2">{card?.title}</h2>
        <hr className="my-2 w-full border-t border-gray-500 border-opacity-30" />
        <p className="mt-2 text-sm text-gray-600 py-6 px-4">
          {card?.description}
        </p>
      </div>
    </Card>
  );
};

export default Cards;
