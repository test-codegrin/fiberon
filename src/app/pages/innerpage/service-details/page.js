import BreadcumbTen from "~/sections/Service-Details/BreadcumbTen";
import Faq from "~/sections/Service-Details/Faq";
import ServiceDetails from "~/sections/Service-Details/ServiceDetails";
import Scroll from "~/sections/Common/Scroll";
import FooterTwo from "~/sections/Common/Footer/FooterTwoServiceDetails";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ServiceDetailsPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <BreadcumbTen />
            <ServiceDetails />
            <Faq />
            <FooterTwo />
            <Scroll />
        </div>
    );
}