import * as React from "react";
import { ProfileBadge } from "./ProfileBadge";

export function Navbar() {
  return (
    <div className="flex justify-end px-8 py-5">
      <ProfileBadge />
    </div>
  );
}
