import React, { Component, ReactNode } from "react";
import Image from "next/image";
import {
  attributes,
  react as AboutPageContent,
} from "../../cms-content/about.md";

export default class AboutSection extends Component {
  render(): ReactNode {
    let { aboutSection } = attributes;
    const aboutContent = aboutSection[0];

    return (
      <>
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-6 pt-5">
              <div className="col-home">
                <div className="thumb">
                  <img src={aboutContent.image} className="img-fluid" alt="#" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="dflex-center">
                <div className="col-home mt-md-0 mt-5">
                  <div className="heading">{aboutContent.title}</div>
                  <div className="content">{aboutContent.description}</div>
                  <ul className="list-home">
                    {aboutContent.bulletPoints.map(
                      (item: any, index: number) => (
                        <li key={index}>{item.bulletPoint}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
