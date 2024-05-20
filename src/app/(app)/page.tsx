import Timer from "~/components/Cubing/Timer";

export default function HomePage() {
  return (
    <main className="flex gap-2 flex-1 flex-col">
      <div id="cube-mat" className="flex flex-1 items-center justify-center">
        <Timer />
      </div>
      <div id="toolbar" className="min-h-[325px] rounded-md bg-gray-800"></div>
    </main>
  );
}
