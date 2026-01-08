import BreadcumbSix from "~/sections/Contact/BreadcumbSix";
import ContactArea from "~/sections/Contact/ContactArea";
import ContactAreaTwo from "~/sections/Contact/ContactAreaTwo";
import ContactMap from "~/sections/Contact/ContactMap";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ContactPage() {
  return (
    <div style={{overflow: "hidden"}}>
      <HeaderFour />
      <BreadcumbSix />
      <ContactArea />
      <ContactAreaTwo />
      <ContactMap />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
