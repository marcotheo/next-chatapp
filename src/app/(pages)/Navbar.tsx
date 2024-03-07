import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <div className="flex justify-end px-8 py-5">
      <div className="flex items-center gap-3 rounded-full bg-slate-700 p-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        Marco
      </div>
    </div>
  );
}
