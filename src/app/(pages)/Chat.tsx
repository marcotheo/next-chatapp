"use client";

import { useContext, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { UserContext } from "../_hooks/useMqtt";

export interface IChatProps {}

export function Chat(props: IChatProps) {
  const userName = useContext(UserContext);

  return (
    <div className="min-w-[40rem]">
      <div className="flex justify-end">
        <p className="rounded-md bg-teal-600 p-2">{userName}</p>
      </div>

      <br />

      <Textarea placeholder="type your message here" />
    </div>
  );
}
