import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="w-screen h-auto bg-black flex flex-col justify-center items-center py-4">
      <div className="w-full h-96 flex flex-col justify-center items-center sm:flex-row sm:h-60">
        <div className="w-full h-1/2 text-gray-500 flex flex-col justify-center items-center sm:h-full">
          <h1 className="text-lg p-2 text-white">Contact Us</h1>
          <h3 className="py-1">Huruma near Nyathiru.Eldoret,Kenya</h3>
          <h2 className="py-1">+254 12345678,+254 12345678</h2>
          <h3 className="py-1">kingdom-believers-fellowship.com</h3>
        </div>
        <div className="w-full h-1/2 text-gray-500 flex flex-col justify-center items-center sm:h-full">
          <h1 className="text-lg p-2 text-white">
            About Kingdom Believers Fellowship
          </h1>
          <h3 className="px-4 pb-2">
            Kingdom Believers Fellowship is a Christian based church founded by
            Apostle Isaac Ngige as part of his vision. This is after him having
            a burden to spread the gospel to large masses through evangelism.
          </h3>
        </div>
      </div>
      <div className="w-full h-1/8 flex justify-center items-center">
        <div className="w-1/2 h-full flex justify-evenly items-center">
          <FaFacebook color="white" size={30} />
          <FaYoutube color="white" size={35} />
        </div>
      </div>
      <div className="w-full h-1/8 flex justify-center items-center px-4 my-4">
        <hr className="w-1/2 h-0.25 bg-white" />
        <Image
          className="mx-4 animate-bounce"
          src={logo}
          width={50}
          height={50}
          alt="logo image"
        />
        <hr className="w-1/2 h-0.25 bg-white" />
      </div>
      <div className="w-full h-1/8 text-white flex justify-center items-center">
        <p className="text-sm">
          made with love by Peterkyle{" "}
          <Link className="text-yellow-500" href="tel:+25458685974">
            0758685974
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
