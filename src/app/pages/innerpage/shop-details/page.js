import BreadcumbTwelve from "~/sections/Shop-Details/BreadcumbTwelve";
import ProductDetails from "~/sections/Shop-Details/ProductDetails";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ShopDetailsPage() {
    return (
        <div>
            <HeaderFour />
            <BreadcumbTwelve />
            <ProductDetails />
            <FooterTwo />
            <Scroll />
        </div>
    );
}