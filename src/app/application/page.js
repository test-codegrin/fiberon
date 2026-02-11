import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Application from "~/sections/Application";
export default function ApplicationPage() {
  return (
    <>
      <HeaderFour />
      <Application />
      <FooterThree />
      <Scroll />
    </>
  );
}
