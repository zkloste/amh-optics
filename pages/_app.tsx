import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "../styles/hompkins.styles.scss";
import "../styles/nav.styles.scss";
import ReactNavBar from "../components/navigation/react-nav-bar.component";
// import { NavigationMenu } from "../components/navigation/Nav";

import type { AppProps } from "next/app";
import NavBar from "../components/navigation/nav-bar.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactNavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
