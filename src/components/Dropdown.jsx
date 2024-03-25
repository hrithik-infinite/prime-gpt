import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ name, values }) => {
  return (
    <div className="flex items-center">
      <DropdownMenu className="bg-slate-900 border-none">
        <DropdownMenuTrigger>
          <div className="flex items-center pr-1">
            <div>{name}</div>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-900 text-gray-400 font-semibold ">
          {values?.map((item) => (
            <DropdownMenuItem key={item} value={item}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
