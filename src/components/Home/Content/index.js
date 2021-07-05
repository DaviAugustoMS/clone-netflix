import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import Video from "../../../assets/video.mp4";
import "./styles.scss";

export function Content() {
  return (
    <section>
      <div className="content">
        <div className="content__box-buttons">
          <div className="content__box-buttons__buttons">
            <button className="content__box-buttons__buttons__play">
              {" "}
              <FaPlay />
              Assistir
            </button>
            <button className="content__box-buttons__buttons__info">
              {" "}
              <BsInfoCircle />
              Mais informações
            </button>
          </div>
          <div className="content__box-buttons__button">
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
}
