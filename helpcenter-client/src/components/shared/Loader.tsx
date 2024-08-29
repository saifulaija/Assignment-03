import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  );
};

export default Loader;
