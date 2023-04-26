import Image from "next/image";
import Link from "next/link";
import homePic from "../public/home.jpg";
import onlinePic from "../public/online.webp";
import pasterPic from "../public/pasterPic.jpg";
import logo from "../public/logo.png";
import dynamic from "next/dynamic";
import whoWeArePic from "../public/whoWeAre.jpg";
import menFellowshipPic from "../public/menFellowship.jpg";
import womenFellowshipPic from "../public/womenFellowship.jpg";
import youthFellowshipPic from "../public/youthFellowship.jpg";
import sermonsPic from "../public/sermons.jpg";
import galleryPic from "../public/gallery.jpg";
import biblePic from "../public/bible.jpg";
import { videoArray } from "./sermons/page";
import HomeIcons from "./components/HomeIcons";

const VideoPlayer = dynamic(() => import("./components/VideoPlayer"), {
  ssr: false,
});

export default async function Home() {
  const videos = await videoArray();
  return (
    <main className="w-screen h-auto bg-gray-100 text-gray-700">
      <section className="w-full h-96 bg-black relative ">
        <Image
          src={homePic}
          alt="Home Page"
          fill
          priority
          sizes="max-width:2500px,max-height:1800"
        />
        <div className="absolute bottom-2 left-6 w-3/4 text-white">
          <h3 className="text-sm my-4 tracking-widest">
            JOIN US ONLINE OR IN PERSON
          </h3>
          <h1 className="text-3xl">SUNDAY,9-10:30AM</h1>
          <h1 className="text-3xl">WEDNESDAY,7PM</h1>
          <div className="w-full h-12 flex my-4 text-yellow-500">
            <HomeIcons />
          </div>
        </div>
      </section>
      <section className="w-full h-auto relative flex flex-col justify-center items-center sm:flex-row lg:h-100 ">
        <div className="w-full h-96 flex flex-col justify-center items-start p-4">
          <h1 className="my-4 text-4xl font-black text-yellow-500 lg:text-6xl font-roboto ">
            Kingdom Believers Fellowship
          </h1>
          <h3 className="lg:text-2xl">
            Welcome to our church! We are a community of believers who love God
            and seek to follow His will in our lives. We invite you to join us
            for worship, fellowship, and service. We hope that you will find our
            church to be a place where you can grow in your faith and experience
            God's love and grace.
          </h3>
        </div>
        <div className="w-full h-96 flex justify-center items-center my-2 sm:m-0 lg:px-4">
          <VideoPlayer name={"https://www.youtube.com/watch?v=OkgVDLUNlZM"} />
        </div>
      </section>
      <section className="w-full h-auto flex flex-col gap-1 p-2">
        <div className="w-full h-96 flex flex-col gap-1 sm:flex-row sm:h-80">
          <div className="w-full h-96 flex justify-center items-center sm:h-80 p-2 relative rounded-md overflow-hidden hover:transform-gpu hover:scale-95 hover:duration-1000 group">
            <h3 className=" z-40 text-white font-bold tracking-widest text-3xl group-hover:transform group-hover:scale-125 group-hover:duration-1000 ">
              WHO WE ARE
            </h3>
            <Link
              href="/about"
              className="z-30 w-full h-full absolute bg-transparent group-hover:bg-gray-900/30"></Link>
            <Image
              src={whoWeArePic}
              alt="#"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="w-full h-96 flex justify-center items-center sm:h-80 p-2 relative rounded-md overflow-hidden hover:transform-gpu hover:scale-95 hover:duration-1000 group">
            <h3 className=" z-40 text-white font-bold tracking-widest text-3xl group-hover:transform group-hover:scale-125 group-hover:duration-1000 ">
              MEN FELLOWSHIP
            </h3>
            <Link
              href="/men_fellowship"
              className="z-30 w-full h-full absolute bg-transparent group-hover:bg-gray-900/30"></Link>
            <Image
              src={menFellowshipPic}
              alt="#"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
        </div>
        <div className="w-full h-96  flex flex-col gap-1 sm:flex-row sm:h-80">
          <div className="w-full h-96 flex justify-center items-center sm:h-80 p-2 relative rounded-md overflow-hidden hover:transform-gpu hover:scale-95 hover:duration-1000 group">
            <h3 className=" z-40 text-white font-bold tracking-widest text-3xl group-hover:transform group-hover:scale-125 group-hover:duration-1000 ">
              WOMEN FELLOWSHIP
            </h3>
            <Link
              href="/women_fellowship"
              className="z-30 w-full h-full absolute bg-transparent group-hover:bg-gray-900/30"></Link>
            <Image
              src={womenFellowshipPic}
              alt="#"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="w-full h-96 flex justify-center items-center sm:h-80 p-2 relative rounded-md overflow-hidden hover:transform-gpu hover:scale-95 hover:duration-1000 group">
            <h3 className=" z-40 text-white font-bold tracking-widest text-3xl group-hover:transform group-hover:scale-125 group-hover:duration-1000 ">
              YOUTH FELLOWSHIP
            </h3>
            <Link
              href="/youth_fellowship"
              className="z-30 w-full h-full absolute bg-transparent group-hover:bg-gray-900/30"></Link>
            <Image
              src={youthFellowshipPic}
              alt="#"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
        </div>
        <div className="w-full h-96  flex flex-col gap-1 sm:flex-row sm:h-80">
          <div className="w-full h-96 flex justify-center items-center sm:h-80 p-2 relative rounded-md overflow-hidden hover:transform-gpu hover:scale-95 hover:duration-1000 group">
            <h3 className=" z-40 text-white font-bold tracking-widest text-3xl group-hover:transform group-hover:scale-125 group-hover:duration-1000 ">
              SERMONS
            </h3>
            <Link
              href="/sermons"
              className="z-30 w-full h-full absolute bg-transparent group-hover:bg-gray-900/30"></Link>
            <Image
              src={sermonsPic}
              alt="#"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="w-full h-96 flex justify-center items-center sm:h-80 p-2 relative rounded-md overflow-hidden hover:transform-gpu hover:scale-95 hover:duration-1000 group">
            <h3 className=" z-40 text-white font-bold tracking-widest text-3xl group-hover:transform group-hover:scale-125 group-hover:duration-1000 ">
              GALLERY
            </h3>
            <Link
              href="/gallery"
              className="z-30 w-full h-full absolute bg-transparent group-hover:bg-gray-900/30"></Link>
            <Image
              src={galleryPic}
              alt="#"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-auto relative flex flex-col justify-center items-center sm:flex-row lg:h-100">
        <div className="w-full h-96 flex flex-col justify-center items-start p-4">
          <div className="w-full h-24 relative flex justify-center items-center">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="animate-bounce"
            />
          </div>
          <h1 className="my-4 text-4xl font-black text-black lg:text-6xl font-roboto">
            Watch the latest message!
          </h1>
          <h3 className="lg:text-2xl">
            Subscribe to our{" "}
            <Link
              className="text-yellow-500 animate-pulse"
              href="https://www.youtube.com/@kingdombelieversfellowship3872">
              Youtube
            </Link>{" "}
            channel and stay up to date with weekly content!
          </h3>
        </div>
        <div className="w-full h-96 flex justify-center items-center my-2 sm:m-0 lg:px-4">
          <VideoPlayer name={`https://www.youtube.com/watch?v=${videos && videos[0]}`} />
        </div>
      </section>
      <section className="w-full h-auto relative flex flex-col items-center bg-black text-white py-8 lg:h-100">
        <div className="w-full h-12 flex justify-start items-center p-4 sm:h-24">
          <h3 className="sm:text-xl">USE OUR ONLINE BIBLE BELOW</h3>
        </div>
        <div className="w-full h-96 flex p-4 justify-start items-center sm:px-24 lg:px-60">
          <h1 className="absolute text-6xl font-roboto tracking-widest z-40">
            ESV <br />
            ONLINE <br />
            FREE <br />
            BIBLE
          </h1>
          <div className="w-1/4 h-full bg-transparent"></div>
          <div className="w-3/4 h-full relative ">
            <Image
              src={biblePic}
              alt="Visit Page"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
        </div>
        <div className="w-3/4 h-auto">
          <div className="w-full h-auto text-white">
            
          </div>
        </div>
      </section>
      <section className="w-full h-108 relative p-4 flex flex-col sm:flex-row lg:h-100">
        <div className="w-full h-60 flex flex-col justify-center items-center lg:h-full">
          <div className="w-full h-20 relative lg:h-1/4">
            <Image
              src={onlinePic}
              alt="online image"
              fill
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="w-full h-40 flex flex-col justify-evenly items-center ">
            <div className="w-full h-30">
              Watch LIVE through our Website,Youtube,and Facebook Live!
            </div>
            <div className="w-full h-10 text-yellow-500 text-xl">
              SUNDAY AT 9AM AND 10:30AM & <br /> WEDNESDAY AT 7PM
            </div>
          </div>
        </div>
        <div className="w-full h-60 flex flex-col justify-evenly items-center lg:h-full lg:py-24">
          <button className="outline w-3/4 h-1/4 rounded text-sm sm:text-lg text-white bg-black hover:bg-white hover:text-black sm:mx-4">
            WATCH ONLINE
          </button>
          <button className="outline w-3/4 h-1/4 rounded text-sm sm:text-lg text-white bg-black hover:bg-white hover:text-black sm:mx-4">
            <Link href="https://www.youtube.com/@kingdombelieversfellowship3872">
              WATCH ON YOUTUBE
            </Link>
          </button>
          <button className="outline w-3/4 h-1/4 rounded text-sm sm:text-lg text-white bg-black hover:bg-white hover:text-black sm:mx-4">
            WATCH ON FACEBOOK
          </button>
        </div>
      </section>
      <section className="w-full h-auto py-4 flex flex-col sm:flex-row sm:h-96 lg:h-100">
        <div className="w-full h-96 relative sm:h-full sm:ml-2">
          <Image
            src={pasterPic}
            alt="Paster Pic"
            fill
            sizes="max-width:2500px,max-height:1800"
          />
        </div>
        <div className="w-full h-auto py-4 sm:h-1/2 lg:h-full">
          <div className="w-full h-1/4 py-2 flex justify-center items-center">
            <h1 className="text-3xl font-anton ">OUR LEAD PASTOR</h1>
          </div>
          <div className="w-full h-6 flex justify-center items-center my-4 sm:m-0 lg:h-12">
            hello
          </div>
          <div className="w-full h-auto p-2 flex justify-center items-center sm:p-8">
            <h3 className="lg:text-xl text-slate-600">
              Apostle Isaac Ngige is the Lead Pastor of Kingdom Believers
              Fellowship Church in Eldoret ,Kenya. He has been in pastoral
              ministry for over 20 years. Apostle Isaac Ngige has a rich history
              with Kingdom Believers Fellowship Church, going back to 2007 when
              he was in Sango doing his pastoral duties.
            </h3>
          </div>
        </div>
      </section>
      <section className="w-full h-4"></section>
    </main>
  );
}
