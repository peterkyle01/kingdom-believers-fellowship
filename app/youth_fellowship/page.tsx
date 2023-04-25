import Image from "next/image";
import youthFellowshipPic from "../../public/youthFellowship.jpg";
import testPic from "../../public/testPic.jpg";

const page = () => {
  return (
    <main className="w-screen  h-auto bg-gray-100 text-gray-700">
      <section className="w-full h-80 relative flex justify-center items-center">
        <Image
          className="blur-sm"
          src={youthFellowshipPic}
          alt="About Image"
          fill
          priority
          sizes="max-width:2500px,max-height:1800"
        />
        <h1 className="z-40 text-5xl text-white font-roboto font-black md:text-6xl">
          Youth Fellowship
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
              We as youth
            </h1>
            <h3 className="p-4">
              Our mission as youth in church is to grow in our faith, love and
              service to God and others. We seek to learn from the teachings of
              Jesus Christ and to follow his example in our daily lives. We also
              strive to share the gospel with our friends, family and community,
              and to be a positive influence in the world. We are not perfect,
              but we are forgiven and empowered by the grace of God. We invite
              you to join us in our journey of discipleship and fellowship.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
