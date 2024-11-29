"use client";

import react from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div
        className="flex flex-row justify-between border border-1 border-red-700 px-6"
        style={{ width: "100%" }}
      >
        <div style={{ width: "10%" }}>
          <Image src="/practo_logo.webp" alt="logo " width={220} height={150} />
        </div>
        <div style={{ width: "50%" }} className="self-center">
          <ul className="flex text-lg font-medium justify-evenly ">
            <li>
              <Link href={"#"}>Find Doctors</Link>{" "}
            </li>
            <li>
              <Link href={"#"}>Vidoe Consultant</Link>{" "}
            </li>
            <li>
              <Link href={"#"}>Surgeries</Link>{" "}
            </li>
          </ul>
        </div>
        <div style={{ width: "40%" }} className="self-center">
          <ul className="flex text-lg font-normal justify-evenly ">
            <li>For Corporates</li>
            <li>For Providers</li>
            <li>Security & Help</li>
            <li>
              <button>Login/Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
