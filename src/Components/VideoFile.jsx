import React from "react";

export default function Video() {
  return (
    <>
      <div>
        <video width="600" controls>
          <source src="/jewelleryVid.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
