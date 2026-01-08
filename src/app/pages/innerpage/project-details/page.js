import BreadcumbEight from "~/sections/Project-Details/BreadcumbEight";
import ContactSix from "~/sections/Project-Details/ContactSix";
import ProjectDetails from "~/sections/Project-Details/ProjectDetails";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ProjectDetailsPage() {
    return (
        <div style={{overflow: 'hidden'}}>
            <HeaderFour />
            <BreadcumbEight />
            <ProjectDetails />
            <ContactSix />
            <FooterTwo />
            <Scroll />
        </div>
    );
}