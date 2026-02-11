import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Certificates from "~/sections/Certificates"
export default function CertificatesPage() {
  return (
    <>
      <HeaderFour />
      <Certificates />
      <FooterThree />
      <Scroll />
    </>
  );
}
