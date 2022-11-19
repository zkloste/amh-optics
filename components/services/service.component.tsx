import React, { Component, ReactNode } from "react";
import Image from "next/image";
import {
  attributes,
  react as AboutPageContent,
} from "../../cms-content/about.md";
import { Fade } from "react-awesome-reveal";
import styles from "./service.module.scss";
import serviceImage from "../../public/img/paige and dog pic.jpg";
import styled from "styled-components";
import { useRouter } from "next/router";

const Hero = styled.section`
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Title = styled.h1`
  color: white;
  font-size: 3em;
  max-width: 80vw;
  text-transform: normal;
`;

const TechniqueTitle = styled.p`
  color: white;
  font-size: 1em;
  line-height: normal;
  max-width: 80vw;
`;

const items = {
  realEstate: {
    mainImage: serviceImage.src,
  },
};

const ServiceSection = ({ section }) => {
  return (
    <>
      <Fade>
        <div className={styles.bgWrap}>
          <Image
            className={styles.serviceImage}
            src={section}
            alt="Service Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="herocaption">
            <div className="container">
              <div className="row">
                <div className="col-md-12 pl-md-0">
                  <Title>Real Estate</Title>
                  <TechniqueTitle>
                    Get gorgeous pics of your house with me
                  </TechniqueTitle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <section className="container">
        <div className="row">
          <div className={styles.serviceDetails}>
            <div className="col-md-12">
              <p className={styles.content}>
                The large wood panel of this entertainment unit is what gives it
                the classic, warm feel. the drawers and cupboards ensure that
                there is plenty of storage for all your electronics and
                knick-knacks. go for this classic wood and white combo or pick
                shades that go well with the rest of your decor
              </p>
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut. magna aliquam erat
                volutpat enim ad minim veniam. Duis autem vel eum iriure dolor
                in hendrerit in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
