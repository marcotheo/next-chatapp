import { MqttProvider } from "../_hooks/useMqtt";
import { Navbar } from "./Navbar";

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-[100vh] flex-col overflow-y-auto bg-slate-800">
      <MqttProvider>
        <Navbar />
        {children}
      </MqttProvider>
    </div>
  );
}
