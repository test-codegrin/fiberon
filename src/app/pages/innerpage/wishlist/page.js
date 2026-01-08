import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import Wishlist from "~/sections/Wishlist/Wishlist";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function WishlistPage() {
    return (
        <div>
            <HeaderFour />
            <BreadcumbFifteen />
            <Wishlist />
            <FooterTwo />
            <Scroll />
        </div>
    );
}