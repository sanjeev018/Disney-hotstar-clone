import React from "react";

// types
// interface
// Enum
// generics

interface CardsPropsType {
  url: string;
  alt?: string;
  className?: string;
}

const Cards = ({ url, alt }: CardsPropsType) => {
  return (
    <img
      src={url}
      alt={alt}
      className="h-full w-full rounded-md hover:scale-125 transition-all hover:cursor-pointer"
    />
  );
};

export default Cards;
