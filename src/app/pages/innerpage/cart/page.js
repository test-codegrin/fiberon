import BreadcumbFour from "~/sections/Cart/BreadcumbFour";
import CartArea from "~/sections/Cart/CartArea";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function CartPage() {
  return (
    <div>
      <HeaderFour />
      <BreadcumbFour />
      <CartArea />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
