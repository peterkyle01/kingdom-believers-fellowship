"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import logo from "../../../public/logo.png";
import { motion ,AnimatePresence} from "framer-motion";

const links = [
  { name: "Home", url: "/", icon: <></> },
  { name: "About", url: "/about", icon: <></> },
  { name: "Sermons", url: "/sermons", icon: <></> },
  { name: "Gallery", url: "/gallery", icon: <></> },
];

const ministriesLinks = [
  { name: "Men Fellowship", url: "/men_fellowship" },
  { name: "Women Fellowship", url: "/women_fellowship" },
  { name: "Youth Fellowship", url: "/youth_fellowship" },
];

const Navbar = () => {
 
  const [showMenu, setShowMenu] = useState(false);
  const [openMinistries, setOpenMinistries] = useState(false);
  const [openSmMinistries, setOpenSmMinistries] = useState(false);

  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: Event) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setShowMenu(false);
        setOpenMinistries(false);
        setOpenSmMinistries(false)
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className="w-full h-full bg-transparent flex ">
      <div className="w-1/2 h-full flex justify-start items-center pl-2">
        <Link href="/">
          <Image src="/logo.png" width={40} height={40} alt="Logo Image" />
        </Link>
      </div>
      <div className="w-1/2 h-full flex justify-end items-center pr-2 sm:hidden">
        <i
          onClick={() => setShowMenu(!showMenu)}
          className="text-yellow-500 sm:hidden">
          {showMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
        </i>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="w-3/4 h-auto p-4 absolute top-14 rounded-md bg-white"
            ref={menuRef}>
            <div className="w-6 h-6 bg-white absolute rotate-45 right-1.5 -top-0"></div>
            <div className="w-full h-1/2 flex justify-center items-center px-2">
              <hr className="w-1/2 h-0.5 bg-yellow-500" />
              <Image
                className="mx-4 animate-bounce"
                src={logo}
                width={30}
                height={30}
                alt="logo image"
              />
              <hr className="w-1/2 h-0.5 bg-yellow-500" />
            </div>
            <ul>
              {links.map((link) => (
                <Link
                  className="w-full sm:hidden"
                  href={link.url}
                  key={link.name}>
                  <span
                    className="p-2 flex justify-start items-center"
                    onClick={() => {
                      setShowMenu(false);
                    }}>
                    <li className="font-thin">{link.name}</li>
                    <i>{link.icon}</i>
                  </span>
                </Link>
              ))}
              <span
                onClick={() => {
                  setOpenMinistries(false);
                  setOpenMinistries(!openMinistries);
                }}
                className="cursor-pointer p-2 flex justify-start items-center">
                <li className="font-thin">Ministries</li>
                <i>
                  <BiChevronDown size={20} />
                </i>
              </span>
            </ul>
            <AnimatePresence>
              {" "}
              {openMinistries && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-1/2 h-auto absolute bottom-0 right-2 bg-gray-200 rounded-md p-2">
                  <div className="w-4 h-4 bg-gray-200 absolute rotate-45 -left-1 bottom-6"></div>
                  <ul>
                    {ministriesLinks.map((ministriesLink) => (
                      <Link
                        className="w-full sm:hidden "
                        href={ministriesLink.url}
                        key={ministriesLink.name}>
                        <span
                          className="p-2 flex justify-start items-center"
                          onClick={() => setShowMenu(false)}>
                          <li className="font-thin">{ministriesLink.name}</li>
                        </span>
                      </Link>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
      <div
        className="hidden relative sm:w-1/2 sm:h-full sm:flex sm:justify-center"
        ref={menuRef}>
        <ul className="sm:w-full sm:flex sm:justify-evenly sm:items-center">
          {links.map((link) => (
            <Link className="px-1" href={link.url} key={link.name}>
              <span
                className="sm:flex sm:justify-start sm:items-center text-yellow-500 hover:text-white"
                onClick={() => {
                  setShowMenu(false);
                }}>
                <li className="sm:font-thin">{link.name}</li>
                <i className="sm:pr-0.5 ">{link.icon}</i>
              </span>
            </Link>
          ))}
          <span
            onClick={() => {
              setOpenSmMinistries(false);
              setOpenSmMinistries(!openSmMinistries);
            }}
            className="cursor-pointer sm:flex sm:justify-start sm:items-center text-yellow-500 hover:text-white">
            <li>Ministries</li>
            <i>
              <BiChevronDown size={20} />
            </i>
          </span>
        </ul>
        {openSmMinistries && (
          <div className="sm:w-1/2 sm:h-auto p-4 bg-white absolute right-12  top-14 rounded-md">
            <div className="w-6 h-6 bg-white absolute rotate-45 right-1.5 -top-0"></div>
            <ul>
              {ministriesLinks.map((ministriesLink) => (
                <Link
                  className="w-full "
                  href={ministriesLink.url}
                  key={ministriesLink.name}>
                  <span
                    className="p-2 flex justify-start items-center hover:text-yellow-500 "
                    onClick={() => {
                      setShowMenu(false);
                      setOpenSmMinistries(false);
                    }}>
                    <li className="font-thin">{ministriesLink.name}</li>
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
