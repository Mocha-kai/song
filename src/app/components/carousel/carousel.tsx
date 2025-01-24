"use client";

import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CardMui from "@/app/mui/card/card";

export type CardData = {
  id: string;
  title: string;
  text: string;
  img: string;
};

const Carousel = ({ params }: { params: CardData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 전환
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % params.length);
    }, 3000); // 3초마다 슬라이드 전환

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  const GoToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? params.length - 1 : prevIndex - 1));
  };

  const GoToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === params.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div style={{ margin: "0 auto", height: "400px", width: "800px" }}>
      <div style={{ display: "flex", overflow: "hidden" }}>
        {params.map((params) => (
          <div
            key={params.id}
            style={{
              minWidth: "100%",
              transition: "transform 0.8s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <CardMui key={params.id} img={params.img} text={params.text} title={params.title} />
          </div>
        ))}
      </div>
      {/* <IconButton
        onClick={GoToPrevious}
        style={{ position: "absolute", top: "50%", left: "1px", transform: "translateY(-50%)" }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={GoToNext}
        style={{ position: "absolute", top: "50%", right: "1px", transform: "translateY(-50%)" }}
      >
        <ArrowForwardIos />
      </IconButton> */}
    </div>
  );
};

export default Carousel;
