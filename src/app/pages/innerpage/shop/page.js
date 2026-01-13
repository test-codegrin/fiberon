import BreadcumbEleven from "~/sections/Shop/BreadcumbEleven";
import Product from "~/sections/Shop/Product";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
export default function ShopPage() {
    return (
        <div>
            <HeaderFour />
            <BreadcumbEleven />
            <Product />
            <FooterThree />
            <Scroll />
        </div>
    );
}