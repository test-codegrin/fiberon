import BlogFour from "~/sections/Blog/BlogFour";
// import BreadcumbTwo from "~/sections/Blog/BreadcumbTwo";
// import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
export default function BlogPage() {
  return (
    <>
      <HeaderFour />
      {/* <BreadcumbTwo /> */}
      <BlogFour />
      <FooterThree />
      <Scroll />
    </>
  );
}
