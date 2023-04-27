import Image from "next/image";
import sermonsPic from "../../public/sermons.jpg";
import dynamic from "next/dynamic";
import { Snippet, YoutubeData } from "../types";

const playlistId = process.env.PLAYLIST_ID;
const apiKey = process.env.API_KEY;
const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false,
});

const getData = async () => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&part=snippet&maxResults=50`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch {
    return null;
  }
};

const videosData = async () => {
  const videosData:[{videoURL:string|null,title:string|null,description:string|null}]|null = [{videoURL:null,title:null,description:null}]

  const data: YoutubeData | null = await getData();

  if (data != null) {
    const { items } = data;
    items.map((item: { snippet:Snippet }) => {
      if(videosData!=null){videosData.push({
        videoURL:item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description
      })}
    });
  }

  return videosData.slice(1);
};

const page = async () => {
  const videos = await videosData();

  return (
    <main className="w-screen  h-auto bg-gray-100 text-gray-700">
      <section className="w-full h-80 relative flex justify-center items-center">
        <Image
          className="blur-sm"
          src={sermonsPic}
          alt="About Image"
          fill
          priority
          sizes="max-width:2500px,max-height:1800"
        />
        <h1 className="z-40 text-5xl text-white font-roboto font-black md:text-6xl">
          Sermons
        </h1>
      </section>
      <section className="w-full h-auto flex flex-wrap">
        {videos.map((video) => (
          <div className="w-full h-auto p-2 sm:w-1/2">
            <div className="w-full h-80" key={video.videoURL}>
              <VideoPlayer name={`https://www.youtube.com/watch?v=${video.videoURL}`} />
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center p-1">
              <h1 className="pb-1 text-2xl">{video.title}</h1>
              <p className="text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default page;
