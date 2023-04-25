import Image from "next/image";
import womenFellowshipPic from "../../public/womenFellowship.jpg";
import testPic from "../../public/testPic.jpg";

const page = () => {
  return (
    <main className="w-screen  h-auto bg-gray-100 text-gray-700">
      <section className="w-full h-80 relative flex justify-center items-center">
        <Image
          className="blur-sm"
          src={womenFellowshipPic}
          alt="About Image"
          fill
          priority
          sizes="max-width:2500px,max-height:1800"
        />
        <h1 className="z-40 text-5xl text-white font-roboto font-black md:text-6xl">
          Women Fellowship
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
              We as women
            </h1>
            <h3 className="p-4">
              Our mission as women in church is to serve God with our gifts and
              talents, to support and encourage one another in faith and love,
              and to reach out to the world with the gospel of Jesus Christ. We
              believe that God has created us in His image and has given us a
              unique role and purpose in His kingdom. We seek to honor Him with
              our lives and to glorify Him in everything we do.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
