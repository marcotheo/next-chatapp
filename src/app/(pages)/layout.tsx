import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

import { MqttProvider } from "../_hooks/useMqtt";
import { Navbar } from "./Navbar";

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userName = uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals],
  });

  return (
    <div className=" flex h-[100vh] flex-col overflow-y-auto bg-slate-800">
      <MqttProvider userName={userName}>
        <Navbar />
        {children}
      </MqttProvider>
    </div>
  );
}
