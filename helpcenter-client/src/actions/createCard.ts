"use server";

import { FieldValues } from "react-hook-form";


export const createCard = async (data: FieldValues) => {
  const res = await fetch("http://localhost:5000/cards", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    // cache: "no-store",
   
  });
  const userInfo = await res.json();
  if (!res.ok) {
    throw new Error(userInfo.message || "An unexpected error occurred.");
  }


  return userInfo;
};
