"use client";
import React from "react";
import Link from "next/link";
import { PlusCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { space } from "postcss/lib/list";
import { FaSquareHackerNews } from "react-icons/fa6";
import { shimmerTestnet } from "viem/chains";
import Web3Connect from "../../components/Helper/Web3Connect";

const Header = () => {
  return (
    <div className="bg-white border-b-[0.5px] z-30 border-gray-300 fixed flex w-full">
      <div className="w-[100%] px-10 py-8 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex gap-x-4 items-center">
            <img className=" flex w-10" src="/aossie.png" alt="pfp" />
            <h1 className="text-2xl sm:flex hidden  text-gray-800 font-bold">
              Agora Blockchain
            </h1>
          </div>
        </Link>

        <nav className="flex justify-start items-center  ">
          <div className="flex w-full text-lg  items-center justify-between">
            <Link href={"/create"}>
              <button className="font-semibold gap-x-1 items-center flex text-gray-700 hover:text-customGreen">
                <PlusCircleIcon className="w-7" />
                <p className="sm:flex hidden"> Create</p>
              </button>
            </Link>
            <Link href={"/profile"}>
              <button className="font-semibold gap-x-1 items-center flex text-gray-700 mx-8 hover:text-customGreen">
                <UserIcon className="w-7" />
                <p className="sm:flex hidden">Profile</p>
              </button>
            </Link>
            <div><Web3Connect /></div>
          </div>
        </nav>
      </div>
    </div>
  );
};



// suggested to add the follwong for good ui
      // -> group the items (3) on right into same div and reduce space
      // -> also on hover change the color it is not pleasing yellow shit
      // ->


export default Header;
