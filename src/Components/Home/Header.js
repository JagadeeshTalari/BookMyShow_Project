import React, { useEffect, useState } from "react";
import Shows from "./Shows";

const couraselImgs = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692875161616_rakhshbandhadesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692954046674_lolladesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
];

function Header() {
  const [imgcount, setImgCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (imgcount === couraselImgs.length - 1) {
        setImgCount(0);
      } else {
        setImgCount(imgcount + 1);
      }
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imgcount]);

  return (
    <div>
      <div className="slide">
        {/* slider */}

        <div className="courasel">
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              if (imgcount === 0) {
                setImgCount(couraselImgs.length - 1);
              } else {
                setImgCount(imgcount - 1);
              }
            }}
          >
            Prev
          </button>

          <img src={couraselImgs[imgcount]} alt="" />
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              if (imgcount === couraselImgs.length - 1) {
                setImgCount(0);
              } else {
                setImgCount(imgcount + 1);
              }
            }}
          >
            Next
          </button>
        </div>

        {/* ---------================ */}
        <div className="icc">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
            alt=""
          />
        </div>

        <div className="seeall">
          <h1 className="heading">Recommended Movies</h1>
          <button>See All</button>
        </div>

        <Shows></Shows>

        <div className="stream">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt=""
          />
        </div>
        <h1 className="event">The Best Of Live Events</h1>
        {/* <Eventslider></Eventslider> */}
      </div>
    </div>
  );
}

export default Header;
