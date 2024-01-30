import { Suspense } from "react";
import { verify } from "@/lib/verification";
import MusicCanvas from "@/components/music-canvas";
import EnterSphere from "@/components/enter-sphere";
import EnterForm from "@/components/enter-form";
// import MusicSphere from "@/components/music-sphere";
// import WavePlayerContainer from "@/components/wave-player-container";

export default function Music() {
  const isVerified = verify();

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      {/* Page Backdrop */}
      <div className="absolute -z-50 w-full h-full">
        <Suspense fallback={<div className="w-full h-full flex justify-center items-center">loading...</div>}>
          <MusicCanvas>
            <EnterSphere />
            {/* {isVerified ? <MusicSphere /> : <EnterSphere />} */}
          </MusicCanvas>
        </Suspense>
      </div>
      {/* Page Content */}
      <div className="z-50">
        <Suspense fallback={<div className="w-full h-full flex justify-center items-center">loading...</div>}>
          {isVerified ? <p className="text-3xl">🚧</p> : <EnterForm />}
          {/* {isVerified ? <WavePlayerContainer /> : <EnterForm />} */}
        </Suspense>
      </div>
    </div>
  );
}
