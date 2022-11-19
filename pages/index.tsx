import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeSlideWheel from "../components/home-slider/home-slider.component";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";
import Fade from "react-reveal/Fade";
import AboutSection from "../components/about/about.component";
import ServicesSlider from "../components/services/services-slider.component";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AMH Optics</title>
        <meta
          name="description"
          content="Aerial Drone Photographer in Western Ohio"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div>
        <Efect />
        <Efect1 />
        <Efect2 />

        <Fade clear>
          <section className="jumbotron jumbomain">
            <HomeSlideWheel />
          </section>
        </Fade>

        <Fade bottom>
          <AboutSection />
        </Fade>

        <Fade bottom>
          <section className="container-fluid">
            <div className="row m-2-hor">
              <div className="col-12">
                <div className="heading">Our Services</div>
              </div>
              <div className="col-12">
                <ServicesSlider />
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </>
  );
};

export default Home;
