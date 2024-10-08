import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import { Link } from "react-router-dom";

type ScrollContainerPropsType = {
  title: string;
  data: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }[];
};

const ScrollContainer = ({ title, data }: ScrollContainerPropsType) => {
  console.log(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    initialSlide: 0, // Start from the first slide
  };
  // console.log(data , "scroll data")
  return (
    <div className="-z-50">
      <div className="px-10 slider-container">
        <p className="text-white ml-2 font-semibold text-xl mb-2">{title}</p>
        <Slider {...settings}>
          {data?.map((imags, index) => {
            return (
              <Link key={index} to={`/trailer/${imags?.imdbID}`}>
                <div key={index} className="px-2 -z-50">
                  <Cards url={imags?.Poster} />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollContainer;
