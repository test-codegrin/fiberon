import BreadcumbEleven from "~/sections/Shop/BreadcumbEleven";
import Product from "~/sections/Shop/Product";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ShopPage() {
    return (
        <div>
            <HeaderFour />
            <BreadcumbEleven />
            <Product />
            <FooterTwo />
            <Scroll />
        </div>
    );
}