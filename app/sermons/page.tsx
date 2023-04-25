
import Image from "next/image";
import sermonsPic from "../../public/sermons.jpg";
import dynamic from "next/dynamic";
const playlistId = process.env.PLAYLIST_ID;
const apiKey = process.env.API_KEY;

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false,
});

async function getData() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&part=snippet&maxResults=50`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function videoArray() {
  const videoSnippetsArray: any[] = [];
  const videoResourceIdArray: any[] = [];
  const videoIDArray: string [] = [];
  const data = await getData();
  const videoSnippets = data.items;

  videoSnippets.map((videoSnippet: []) => {
    return videoSnippetsArray.push(videoSnippet.snippet);
  });

  videoSnippetsArray.map((eachVideoSnippetsArray: []) => {
    return videoResourceIdArray.push(eachVideoSnippetsArray.resourceId);
  });

  videoResourceIdArray.map((eachVideoResourceIDArray: []) => {
    return videoIDArray.push(eachVideoResourceIDArray.videoId);
  });

  return videoIDArray;
}

const page = async () => {
  const videos = await videoArray();
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
          <div className="w-full h-80 sm:w-1/2" key={video}>
            <VideoPlayer name={`https://www.youtube.com/watch?v=${video}`} />
          </div>
        ))}
      </section>
    </main>
  );
};
export default page;
