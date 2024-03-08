"use client";

import { useContext } from "react";
import { UserContext } from "../_hooks/useMqtt";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface IProfileBadgeProps {}

export function ProfileBadge(props: IProfileBadgeProps) {
  const userName = useContext(UserContext);

  return (
    <div className="flex items-center gap-3 rounded-full bg-slate-700 p-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-white">{userName}</span>
    </div>
  );
}
