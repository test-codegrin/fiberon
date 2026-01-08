import BreadcumbFourteen from "~/sections/Team-Details/BreadcumbFourteen";
import Contact from "~/sections/Team-Details/Contact";
import ServiceDetailsTwo from "~/sections/Team-Details/ServiceDetailsTwo";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function TeamDetailsPage() {
    return (
        <div style={{overflow: 'hidden'}}>
            <HeaderFour />
            <BreadcumbFourteen />
            <ServiceDetailsTwo />
            <Contact />
            <FooterTwo />
            <Scroll />
        </div>
    );
}