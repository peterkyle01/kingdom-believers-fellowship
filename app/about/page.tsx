import Image from "next/image";
import whoWeArePic from "../../public/whoWeAre.jpg"
import testPic from "../../public/testPic.jpg"
const page = () => {
  return (
    <main className="w-screen  h-auto bg-gray-100 text-gray-700 ">
      <section className="w-full h-80 relative flex justify-center items-center">
        <Image
        className="blur-sm"
          src={whoWeArePic}
          alt="About Image"
          fill
          priority
          
          sizes="max-width:2500px,max-height:1800"
        />
        <h1 className="z-40 text-5xl text-white font-roboto font-black md:text-6xl">
          Who We Are
        </h1>
      </section>
      <section className="w-full h-auto lg:h-60">
        <h1 className="p-4 text-yellow-500 text-3xl font-semibold">
          WE BELIEVE THAT FOLLOWING JESUS IS THE BEST DECISION YOU CAN MAKE.
        </h1>
        <h3 className="p-4">
          Kingdom Believers Fellowship is a church founded by Apostle Isaac
          Ngige, a man of God with a vision to transform lives and nations
          through the power of the gospel. The church is based in Eldoret,
          Kenya, and plans to have branches in other parts of Africa and beyond.
          The church's mission is to raise up a generation of kingdom-minded
          believers who will impact the world with God's love, grace and truth.
          The church offers various ministries and services to cater for the
          spiritual, physical and social needs of its members and the community
          at large. Some of these include worship, prayer, discipleship,
          outreach, education, health, media and more. The church welcomes
          people from all walks of life and backgrounds to join them in
          experiencing God's presence and purpose for their lives.
        </h3>
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
          <div className="w-full h-80 sm:w-1/2">
            <h1 className="p-4  text-yellow-500 text-2xl font-semibold">
              Our Mission
            </h1>
            <h3 className="p-4">
              Our mission on church is to worship God, share the gospel of Jesus
              Christ, and serve our community with love and compassion. We
              believe that the church is not a building, but a family of
              believers who gather together to grow in faith, fellowship, and
              service. We welcome everyone who wants to join us in this mission,
              regardless of their background, culture, or life situation.
            </h3>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col sm:flex-row">
          <div className="w-full h-auto sm:w-1/2 sm:h-80">
            <h1 className="p-4  text-yellow-500 text-2xl font-semibold">
              Our Strategy
            </h1>
            <h3 className="p-4">
              Our strategy on church is to provide a welcoming and inclusive
              environment for people of all faiths and backgrounds. We aim to
              foster a sense of community and belonging among our members and
              visitors, and to share the love and grace of God through our
              worship, service, and outreach. We respect the diversity of
              beliefs and practices within our church, and we encourage dialogue
              and learning from each other. We also seek to collaborate with
              other churches and organizations that share our vision of a more
              just and compassionate world.
            </h3>
          </div>
          <div className="w-full h-80 relative my-1 sm:w-1/2 sm:mb-0">
            <Image
              src={testPic}
              alt="Home Page"
              fill
              priority
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
        </div>
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
          <div className="w-full h-auto sm:w-1/2 sm:h-80">
            <h1 className="p-4  text-yellow-500 text-2xl font-semibold">
              Our Core Values
            </h1>
            <h3 className="p-4">
              Our core values on church are based on the biblical teachings of
              Jesus Christ and the apostles. We believe that the church is the
              body of Christ, a community of believers who worship God, love one
              another, and serve the world. We value the unity of the church,
              the diversity of its members, and the gifts of the Holy Spirit. We
              seek to grow in faith, hope, and love through the preaching of the
              word, the celebration of the sacraments, and the practice of
              prayer.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
export default page
