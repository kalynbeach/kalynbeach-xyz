import { WavePlayerMode, Track } from "@kalynbeach/wave-player";

const trackSrcBaseUrl = "https://kkb-sounds.s3.us-west-1.amazonaws.com/loops/";
const trackImgBaseUrl = "https://kkb-sounds.s3.us-west-1.amazonaws.com/images/";

export const tracks: Track[] = [
  {
    id: 0,
    title: "0_initializer",
    artist: "Kalyn Beach",
    src: process.env.TRACK_0_AUDIO_SRC || trackSrcBaseUrl + "0_initializer.wav",
    image: process.env.TRACK_0_IMG_SRC || trackImgBaseUrl + "0_initializer.png",
    mode: WavePlayerMode.Loop,
  },
  {
    id: 1,
    title: "1_workflows",
    artist: "Kalyn Beach",
    src: process.env.TRACK_1_AUDIO_SRC || trackSrcBaseUrl + "1_workflows.wav",
    image: process.env.TRACK_1_IMG_SRC || trackImgBaseUrl + "1_workflows.png",
    mode: WavePlayerMode.Loop,
  },
  {
    id: 2,
    title: "2_stasis",
    artist: "Kalyn Beach",
    src: process.env.TRACK_2_AUDIO_SRC || trackSrcBaseUrl + "2_stasis.wav",
    image: process.env.TRACK_2_IMG_SRC || trackImgBaseUrl + "2_stasis.png",
    mode: WavePlayerMode.Loop,
  },
];
