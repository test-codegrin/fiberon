import BlogFive from "~/sections/BlogDetails/BlogFour/BlogFive";
// import BreadcumbThree from "~/sections/BlogDetails/BreadcumbThree";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
export default function BlogDetailsPage() {
  return (
    <>
      <HeaderFour />
      {/* <BreadcumbThree /> */}
      <BlogFive />
      <FooterThree />
      <Scroll />
    </>
  );
}
