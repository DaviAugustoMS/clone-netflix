import React from "react";
import "./styles.scss";

import Slider from "react-slick";

export function Carrousel({ label, data }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="carrousel">
      <span>{label}</span>
      <div className="carrousel__slider">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="carrousel__slider__box-slider">
              <img src={item.url} alt={item.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
