import React from "react";
import NavBar from "../Components/NavBar";
import { LuPackage2 } from "react-icons/lu";
import { RxCaretRight } from "react-icons/rx";
import { FaRegAddressBook, FaRegBookmark } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { RiNewsLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";

export default function User() {
  return (
    <>
      <section>
        <NavBar />
        <div className="w-[100%] p-2 flex items-start justify-center gap-2">
          <div className="bg-pink-300 w-full md:w-[30%]">
            <h2 className="p-3 font-semibold ">MY YesEL ACCOUNT</h2>

            <ul className="bg-slate-400 w-[100%] flex flex-col gap-1">
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LuPackage2 />
                    <span>Orders</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GiSelfLove />
                    <span>Saved items</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BsCart4 />
                    <span>Cart</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaRegBookmark />
                    <span>Bookmark</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LuPackage2 />
                    <span>Recently Viewed</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaRegAddressBook />
                    <span>Address Book</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>

              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MdOutlineManageAccounts />
                    <span>Account Managment</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <RiNewsLine />
                    <span>Newsletter</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
              <li className="w-full p-2 flex flex-col">
                <button className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LuPackage2 />
                    <span>Close Account</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
            </ul>

            <button className="p-3 font-semibold text-center">LOG OUT </button>
          </div>
          <div className="hidden bg-blue-900 md:block md:w-[70%]">
            <h1>div 2</h1>
          </div>
        </div>
      </section>
    </>
  );
}
