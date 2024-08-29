import assets from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";


const Header = () => {
  return <div className="w-full bg-primary">
<div className="flex justify-between items-center max-w-7xl w-full h-16 mx-auto px-10 md:px-0 ">
    <Image src={assets.images.logo} width={50} height={50} alt="logo"/>
    <Button variant='outline' className={cn("bg-gray-800 text-white font-semibold text-lg border border-white")}>Submit a Request</Button>
</div>
  </div>;
};

export default Header;
