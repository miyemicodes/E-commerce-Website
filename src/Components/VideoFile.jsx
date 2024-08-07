import React from "react";

export default function Video() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-16 px-5">
        <video width="w-full h-[600px]" controls>
          <source src="/jewelleryVid.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
