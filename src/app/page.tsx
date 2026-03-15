import Footer from "./components/landing/Footer";
import Hero from "./components/landing/Hero";
import Main from "./components/landing/Main";
import NavBar from "./components/landing/NavBar";
import Socials from "./components/landing/Socials";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Main />
      <Socials />
      <Footer />
    </>
  );
}
