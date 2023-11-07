import { verify } from "@/lib/verification";
import MusicCanvas from "@/components/music-canvas";
import EnterSphere from "@/components/enter-sphere";
import EnterForm from "@/components/enter-form";
import MusicSphere from "@/components/music-sphere";
import WavePlayerContainer from "@/components/wave-player-container";

export default function Music() {
  const isVerified = verify();

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      {/* Page Backdrop */}
      <div className="absolute -z-50 w-full h-full">
        <MusicCanvas>
          {isVerified ? <MusicSphere /> : <EnterSphere />}
        </MusicCanvas>
      </div>
      {/* Page Content */}
      <div className="z-50">
        {isVerified ? <WavePlayerContainer /> : <EnterForm />}
      </div>
    </div>
  );
}
