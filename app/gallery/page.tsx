import Image from "next/image";
import galleryPic from "../../public/gallery.jpg";
const page = () => {
  return (
    <main className="w-screen  h-auto bg-gray-100 text-gray-700">
      <section className="w-full h-80 relative flex justify-center items-center">
        <Image
        className="blur-sm"
          src={galleryPic}
          alt="About Image"
          fill
          priority
          sizes="max-width:2500px,max-height:1800"
        />
        <h1 className="z-40 text-5xl text-white font-roboto font-black md:text-6xl">
          Gallery
        </h1>
      </section>
    </main>
  );
};
export default page;
