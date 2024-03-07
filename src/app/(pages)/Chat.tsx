"use client";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const userName: string = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals],
});

export interface IChatProps {}

export function Chat(props: IChatProps) {
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
