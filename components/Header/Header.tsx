import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../toogel-menue";
import {RiLockPasswordFill} from "react-icons/ri"

const Header = () => {
    return ( 
        <div className="flex border-b-2 top-0 inset-0  dark:bg-neutral-800/70  flex-row items-center justify-between  p-3  ">
            
            <div className="flex flex-row items-center cursor-pointer ">
            <RiLockPasswordFill size={30} />
                <h1 className="text-2xl font-semibold text-orange-500">Pass</h1>
            </div>


            <div className="flex flex-row items-center space-x-4">
            <ModeToggle />
            <UserButton afterSignOutUrl="/" />
            </div>
            
            
           
            
            
            
        </div>
     );
}
 
export default Header;