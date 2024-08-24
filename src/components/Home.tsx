import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img = [
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2764/1721653312764-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/975/1717065710975-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1324/1713505091324-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/975/1717065710975-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2764/1721653312764-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2904/1710950292904-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",
  },
  {
    images:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5158/1713504775158-v",
  },
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    // height: 50,0
    initialSlide: 0, // Start from the first slide
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="">
      <p className="text-white font-semibold text-xl">Action Extravaganza</p>

      <div className="px-10 slider-container">
        <Slider {...settings}>
          {img?.map((imags, index) => {
            return (
              <div key={index + 1} className="px-2">
                <img
                  src={imags.images}
                  alt={`Movie ${index + 1}`}
                  className="rounded-md hover:scale-125 transition-all hover:cursor-pointer"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
