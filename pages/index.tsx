import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeSlideWheel from "../components/home-slider/home-slider.component";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";
import Fade from "react-reveal/Fade";
import AboutSection from "../components/about/about.component";

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
      </div>
    </>
  );
};

export default Home;
