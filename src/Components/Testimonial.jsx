import React from "react";
import testiImages1 from "../assets/testimonialPic1.jpg";
import testiImages2 from "../assets/testimonialPic3.jpg";
import testiImages3 from "../assets/testimonialPic2.jpg";

export default function Testimonial() {
  return (
    <>
      <section className="bg-white py-24 px-8">
        <div className="bg-[#fbf3e2]">
          <h1 className="text-2xl font-semibold font-serif text-center pb-3">
            Hear from Those Whose Lives We've Touched
          </h1>

          <div className="flex flex-row items-start justify-center gap-3">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="rounded-md">
                <img src={testiImages1} className="rounded-md" />
              </div>
              <div>
                <div>
                  <p className="font-semibold">Sana Anwar</p>
                  <span>Branch manager </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <div>
                <img src={testiImages3} className="rounded-md" />
              </div>
              <div>
                <div>
                  <p className="font-semibold">Sana Anwar</p>
                  <span>Branch manager </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <div>
                <img src={testiImages2} className="rounded-md" />
              </div>
              <div>
                <div>
                  <p className="font-semibold">Sana Anwar</p>
                  <span>Branch manager </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
