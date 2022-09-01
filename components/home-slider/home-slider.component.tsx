import { Component, ReactNode } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import {
  attributes,
  react as HomeSliderContent,
} from "../../cms-content/home.md";

export default class HomeSlideWheel extends Component {
  render(): ReactNode {
    let { homeSlider } = attributes;

    return (
      <>
        <Slider className="slider-wrapper" autoplay={6000}>
          {homeSlider.map((item: any, index: number) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.header}</h1>
                <p>{item.description}</p>
                <button onClick={() => window.open(item.buttonLink, "_self")}>
                  <span className="shine"></span>
                  <span>{item.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
