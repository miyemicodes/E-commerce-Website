import React from "react";
import teamImage1 from "../assets/teamImage1.jpg";
import teamImage2 from "../assets/teamImage2.jpg";
import teamImage3 from "../assets/teamImage3.jpg";
import teamImage4 from "../assets/teamImage4.jpg";
import teamImage5 from "../assets/teamImage5.jpg";

export default function Team() {
  return (
    <>
      <section className="py-6">
        <div className="text-center">
          <span className="text-s">Our Team</span>
          <h1 className="text-4xl font-serif">Where Expertise</h1>
        </div>

        <div className="flex flex-row items-start justify-center gap-3 py-10 px-20">
          <div className="hidden md:flex flex-col items-start justify-start gap-3 grow">
            <div className="h-[250px] w-full">
              <img
                src={teamImage1}
                className="rounded-md w-full h-[250px] object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">Annette Black </p>
              <span className="text-sm">Design Expert </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-3 grow">
            <div className="h-[250px] w-full">
              <img
                src={teamImage2}
                className="rounded-md w-full h-[250px] object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">Devon Lane </p>
              <span className="text-sm">Strategist Expert </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-3 grow">
            <div className="h-[250px] w-full">
              <img
                src={teamImage3}
                className="rounded-md w-full h-[250px] object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">Brooklyn Blance </p>
              <span className="text-sm">Polishing Artisan </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start justify-start gap-3 grow">
            <div className="h-[250px] w-full">
              <img
                src={teamImage4}
                className="rounded-md w-full h-[250px] object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">Black Perlsa</p>
              <span className="text-sm">Growth session </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-3 grow">
            <div className="h-[250px] w-full">
              <img
                src={teamImage5}
                className="rounded-md w-full h-[250px] object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">Darlene Robert</p>
              <span className="text-sm">jewellry Photographer </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
