"use client";
import RocketR from "./rocket";
import InternalMenu from "./tail-checker";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-200 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#79E5CB] sm:items-start">
        <RocketR />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="flex flex-col max-w-md text-lg leading-8 text-white font-mono font-semibold">
            <span>팬덤 근데 이제 로켓단을 곁들인</span>
            <span>
              <a href="mailto:sunbee@shinee.kr" className="font-extrabold">
                sunbee@shinee.kr
              </a>
            </span>
            <span>
              -{" "}
              <a
                href="http://rocket.shinee.kr:2283/share/B3KvMNh0NfJpH2ngdmSDZKaVKx972Cx3SccIhF775y4u0bVsQca3bfsfMTuYTQk6B1I"
                target="_blank"
              >
                Sunbee archive
              </a>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
