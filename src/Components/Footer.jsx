import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col bg-[#fbf3e2] border-t-[#fbe8d7] border-t-4 ">
        <div className="px-16 py-4 flex flex-wrap items-start gap-6 ">
          <div className="flex flex-1 flex-col gap-4 text-sm">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold ">Where about</h3>
              <p className="text-[#888783]">
                7 Washington Ave.Kentucky 38950 <br /> Oakland City
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold ">Contact</h3>
              <p className="text-[#888783]">(808) 389-5301</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold ">Mailbox</h3>
              <p className="text-[#888783]">lizzymiyemi@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-12 text-sm">
            <ul className="flex flex-col gap-1">
              <li className="font-semibold ">Pages</li>
              <li className="text-[#888783]">About us</li>
              <li className="text-[#888783]">Categories</li>
              <li className="text-[#888783]">Shop</li>
              <li className="text-[#888783]">Contact us</li>
            </ul>
            <ul>
              <li className="font-semibold ">Resource</li>
              <li className="text-[#888783]">FAQ</li>
              <li className="text-[#888783]">Reviews</li>
              <li className="text-[#888783]">Blogs</li>
              <li className="text-[#888783]">Return Policy</li>
            </ul>
            <ul>
              <li className="font-semibold ">Utilities</li>
              <li className="text-[#888783]">Style Guide</li>
              <li className="text-[#888783]">Error 404</li>
              <li className="text-[#888783]">Lincensing</li>
              <li className="text-[#888783]">Changelog</li>
            </ul>
          </div>

          <form className="flex flex-col text-sm flex-1 items-center gap-3">
            <h1 className="font-semibold">Subscribe</h1>

            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent p-2 w-[60%] border border-[#967f5048] rounded-full"
            />
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent p-2 w-[60%] border border-[#967f5048] rounded-full"
            />
            <button className="bg-[#967f50] text-white py-2 px-16 w-[60%] rounded-full">
              Submit
            </button>
          </form>
        </div>

        <div className=" px-16 py-4 bg-[#0b0b0a] flex flex-wrap items-center justify-between">
          <div className="text-white text-sm">
            &copy;2024 YesEl Company Limited. All Rights Reserved.
          </div>
          <div className="text-[#e9e9e8] font-serif text-2xl font-semibold">
            <h1>YesEl</h1>
          </div>
          <div className="flex flex-row">
            <ul className="flex gap-3 text-slate-400">
              <li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
                <a href="https://github.com/miyemicodes">
                  <FaGithub />
                </a>
              </li>

              <li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
                <a href="https://www.instagram.com/oritsemiyemi?igsh=OHA0djU2NDczZXZv">
                  <FaInstagram />
                </a>
              </li>

              <li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
                <a href="https://x.com/Elizabe85838502?t=zXG_nKWUzPrbMBV2G0nddw&s=35">
                  <FaXTwitter />
                </a>
              </li>

              <li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
                <a href="https://www.linkedin.com/in/elizabeth-godfrey-180a11199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin />
                </a>
              </li>

              <li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
                <a href="https://github.com/miyemicodes">
                  <FaMediumM />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
