import BreadcumbNine from "~/sections/Service/BreadcumbNine";
import Client from "~/sections/Service/Client";
import Contact from "~/sections/Service/Contact";
import Process from "~/sections/Service/Process";
import Service from "~/sections/Service/Service";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import TestimonialTwo from "~/sections/Common/TestimonialTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ServicePage() {
    return (
        <div style={{overflow: 'hidden'}}>
            <HeaderFour />
            <BreadcumbNine />
            <Service />
            <Process />
            <TestimonialTwo />
            <Client />
            <Contact />
            <FooterTwo />
            <Scroll />
        </div>
    );
}