import Image from "next/image";
import menFellowshipPic from "../../public/menFellowship.jpg";
import testPic from "../../public/testPic.jpg"

const page = () => {
  return (
    <main className="w-screen  h-auto bg-gray-100 text-gray-700">
      <section className="w-full h-80 relative flex justify-center items-center">
        <Image
          className="blur-sm"
          src={menFellowshipPic}
          alt="About Image"
          fill
          priority
          sizes="max-width:2500px,max-height:1800"
        />
        <h1 className="z-40 text-5xl text-white font-roboto font-black md:text-6xl">
          Men Fellowship
        </h1>
      </section>
      <section className="w-full h-auto p-2">
        <div className="w-full h-auto flex flex-col sm:flex-row">
          <div className="w-full h-80 relative sm:w-1/2">
            <Image
              src={testPic}
              alt="Home Page"
              fill
              priority
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="w-full h-auto sm:w-1/2 md:h-80">
            <h1 className="p-4  text-yellow-500 text-2xl font-semibold">
              We as men
            </h1>
            <h3 className="p-4">
              Our mission as men in church is to serve God with all our heart,
              soul, mind and strength. We are called to lead our families, our
              communities and our world in the way of Christ. We are committed
              to grow in faith, love and holiness through the study of the Word,
              the fellowship of the Spirit and the practice of the disciplines.
              We are also called to share the gospel with others and to make
              disciples of all nations. We seek to honor God in everything we do
              and to glorify Him with our lives.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
