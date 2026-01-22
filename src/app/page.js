import "~/public/main-assets/css/fonts.css";
import "./globals.css";
import Script from "next/script";
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import About from "~/sections/Home-2/About";
import Counter from "~/sections/Home-2/Counter";
import Hero from "~/sections/Home-2/Hero";
import Portfolio from "~/sections/Home-2/Portfolio";
import Process from "~/sections/Home-2/Process";
import Service from "~/sections/Home-2/Service";
import Testimonial from "~/sections/Home-2/Testimonial";
import Video from "~/sections/Home-2/Video";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import ClientReviews from "~/sections/clintreview";
import Contect from "~/sections/Contact";
import Contact from "~/sections/Contact";

export default function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderFour />
      <Hero />
      <About />
      <Service />
      <Process />
      <Video />
      <Counter />
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      {/* <Pricing />
      <FAQ /> */}
      {/* <Client />
      <Blog />
      <Contact /> */}
      <ClientReviews />
      <Contact />
      <FooterThree />
      <Scroll />
    </div>
  );
}
