
'use client'

import { useState } from "react";

import CardData from "./CardData";
import SearchBar from "../shared/SearchBar";
import { TCard } from "@/types/global.type";
import { useGetCardsQuery } from "@/redux/features/card/cardApi";
import Loader from "@/app/loading";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data,isLoading } = useGetCardsQuery({});

  const filteredCards = data?.data?.filter((card: TCard) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
if(isLoading) <Loader/>
  return (
    <div className="container mx-auto">
      <SearchBar onSearch={handleSearch} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
        {filteredCards?.length ? (
          filteredCards.map((card: TCard) => (
            <CardData key={card._id} card={card} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No titles found, try again!
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
