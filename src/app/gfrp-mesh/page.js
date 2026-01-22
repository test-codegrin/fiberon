import Faq from "~/sections/Service-Details/Faq";
import ServiceDetails from "~/sections/Service-Details/ServiceDetails";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import WhyChoose from "~/sections/why-choose/WhyChoose";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import CommpareBent from "~/sections/commpare-bent";
import Contect from "~/sections/Contact";
import Clintreview from "~/sections/clintreview";
export default function ServiceDetailsPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <ServiceDetails />
            <Faq />
            <WhyChoose />
            <CommpareBent />
            <Contect />
            <Clintreview />
            <FooterThree />
            <Scroll />
        </div>
    );
}