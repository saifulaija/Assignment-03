import assets from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import MyDialog from "../shadcn/MyDialog";
import CreateCardForm from "../form/AddCardForm";

const Header = () => {
  return (
    <div className="w-full bg-primary">
      <div className="flex justify-between items-center max-w-7xl w-full h-16 mx-auto px-10 md:px-0 ">
        <Image src={assets.images.logo} width={50} height={50} alt="logo" />
        <div>
          {/* Use a span or div as the trigger for MyDialog instead of a button */}
          <MyDialog
            triggerButton={
              <span // Changed from Button to span
                className={cn(
                  "inline-flex items-center justify-center bg-gray-800 text-white font-semibold text-lg border border-white rounded-md px-4 py-2 cursor-pointer hover:bg-gray-700 transition"
                )}
              >
                Submit a Request
              </span>
            }
          >
            <CreateCardForm />
          </MyDialog>
        </div>
      </div>
    </div>
  );
};

export default Header;
