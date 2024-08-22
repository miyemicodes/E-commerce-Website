import React from "react";
import { LuPackage2 } from "react-icons/lu";
import { RxCaretRight } from "react-icons/rx";
import { FaRegAddressBook, FaRegBookmark } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { RiNewsLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Cart } from "../Components/CART/Cart";

export default function User() {
  return (
    <>
      <div className="w-[100%]  flex items-start justify-center gap-2 p-3">
        <div className=" w-full md:w-[30%]">
          <h2 className="p-3 font-semibold bg-[#fbf3de]">MY YesEL ACCOUNT</h2>

          <ul className=" w-[100%] px-2 flex flex-col gap-1">
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LuPackage2 cla />
                  <span>Orders</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GiSelfLove />
                  <span>Saved items</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BsCart4 />
                  <span>Cart</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaRegBookmark />
                  <span>Bookmark</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LuPackage2 />
                  <span>Recently Viewed</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaRegAddressBook />
                  <span>Address Book</span>
                </div>
                <RxCaretRight />
              </button>
            </li>

            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MdOutlineManageAccounts />
                  <span>Account Managment</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RiNewsLine />
                  <span>Newsletter</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
            <li className="w-full p-2 flex flex-col hover:bg-[#f5f5f2]">
              <button className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LuPackage2 />
                  <span>Close Account</span>
                </div>
                <RxCaretRight />
              </button>
            </li>
          </ul>

          <button className="p-3 font-semibold text-center text-[#d6af74]">
            LOG OUT
          </button>
        </div>

        <div className="hidden p-2 md:block md:w-[70%]">
          <h1 className="font-semibold text-lg p-3 ">Account Overview</h1>

          <div className="grid grid-cols-2 gap-3 p-2">
            <div className="border border-[#8a8b85]">
              <h2 className="border-b border-[#8a8b85] p-3 font-semibold ">
                ACCOUNT DETAILS
              </h2>
              <div className="flex flex-col items-start gap-1 p-4 h-[150px]">
                <p>ELIZABETH GODFREY</p>
                <span className="text-[#8a8b85]">lizzyyeii@gmail.com</span>
              </div>
            </div>

            <div className="border border-[#8a8b85]">
              <h2 className="border-b border-[#8a8b85] p-3 font-semibold ">
                ADDRESS BOOK
              </h2>
              <div className="flex flex-col items-start gap-1 p-4 h-[150px]">
                <p>Your default shipping address</p>
                <span className="text-[#8a8b85]">
                  No default shipping address
                </span>
              </div>
            </div>

            <div className="border border-[#8a8b85]">
              <h2 className="border-b border-[#8a8b85] p-3 font-semibold ">
                YESeL STORE CREDIT
              </h2>
              <div className="flex flex-col items-start gap-1 p-4 h-[150px]">
                <span className="text-[#8a8b85]">Account is empty $0.00</span>
              </div>
            </div>

            <div className="border border-[#8a8b85]">
              <h2 className="border-b border-[#8a8b85] p-3 font-semibold ">
                NEWSLETTER PREFERENCES
              </h2>
              <div className="flex flex-col items-start gap-1 p-4 h-[150px]">
                <p>You are currently not subscribed to any of our newsletter</p>
                <span className="text-[#d6af74]">
                  EDIT NEWSLETTER PREFERENCES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
