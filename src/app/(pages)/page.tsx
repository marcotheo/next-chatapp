import { Chat } from "./Chat";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="rounded-sm border-0 bg-slate-700 p-4">
        <Chat />
      </div>
    </main>
  );
}
