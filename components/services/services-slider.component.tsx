import React, { Component } from "react";
import Slider from "react-slick";
import {
  attributes,
  react as ServicesAttributes,
} from "../../cms-content/services.md";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class ServicesSlider extends Component {
  render() {
    let { servicesSection } = attributes;
    var settings = {
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        // {
        //   breakpoint: 5000,
        //   settings: {
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     infinite: false,
        //     dots: false,
        //   },
        // },
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slick">
        <Slider {...settings}>
          {servicesSection.map((item: any, index: number) => (
            <div className="itm" key={index}>
              <div className="bg">
                <img src={item.image} className="img-fluid" alt="Services" />
              </div>
              <div className="desc">
                <div className="name">{item.header}</div>
                <div className="content">{item.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
