import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const TeamThree = () => {
  return (
    <div className="mt-16 max-w-[1400px] mx-auto mb-16">
      <div
        className=""
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}
      ></div>
      <div className="container">
        <div className="flex md:justify-between justify-center items-center mb-12 flex-wrap gap-4">
          <div className="col-lg-7 col-md-7">
            <div className="">
              <span className="text-[#347A64] font-semibold text-lg uppercase">
                Our Team
              </span>
              <div className="text-[#347A64] font-semibold text-2xl md:text-4xl uppercase">Meet our leadership</div>
            </div>
          </div>
          <div className="">
            <div className="hover:bg-[#347A64] hover:text-white inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#347A64] text-[#347A64] font-semibold transition">
              <Link href="/pages/innerpage/about">
                View All Members <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap max-w-[1400px] justify-between -mx-4">
          <div className="col-lg-4 col-md-6">
            <div
              className="hover:border-2 hover:border-[#347A64] p-5"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="">
                <div className="text-[#347A64]">
                  <div className="text-3xl font-bold mb-2 text-[#347A64]">
                  <Link href="/pages/innerpage/team-details">Penelopa Miller</Link>
                </div>
                <span className="">Head of Production</span>
                </div>
                <div className="flex">
                  <div className="flex gap-2 mt-2 ">
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://facebook.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Facebook />
                      </div>
                    </Link>
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://www.twitter.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Twitter />
                      </div>
                    </Link>
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://instagram.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Instagram />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <img src="/main-assets/img/team/team-1-1.png" alt="img" />
              </div>
              {/* <Link href="tel:0023745671379" className="">
                <span className="text-[#347A64]">(+00) 347 456 1379</span>
                <div className="">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="hover:border-2 hover:border-[#347A64] p-5"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="">
                <div className="text-[#347A64]">
                  <div className="text-3xl font-bold mb-2 text-[#347A64]">
                  <Link href="/pages/innerpage/team-details">Penelopa Miller</Link>
                </div>
                <span className="">Head of Production</span>
                </div>
                <div className="flex">
                  <div className="flex gap-2 mt-2 ">
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://facebook.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Facebook />
                      </div>
                    </Link>
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://www.twitter.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Twitter />
                      </div>
                    </Link>
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://instagram.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Instagram />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <img src="/main-assets/img/team/team-1-1.png" alt="img" />
              </div>
              {/* <Link href="tel:0023745671379" className="">
                <span className="text-[#347A64]">(+00) 347 456 1379</span>
                <div className="">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="hover:border-2 hover:border-[#347A64] p-5"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="">
                <div className="text-[#347A64]">
                  <div className="text-3xl font-bold mb-2 text-[#347A64]">
                  <Link href="/pages/innerpage/team-details">Penelopa Miller</Link>
                </div>
                <span className="">Head of Production</span>
                </div>
                <div className="flex">
                  <div className="flex gap-2 mt-2 ">
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://facebook.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Facebook />
                      </div>
                    </Link>
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://www.twitter.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Twitter />
                      </div>
                    </Link>
                    <Link className="bg-[#347A64] w-8 h-8 text-white" href="https://instagram.com/">
                      <div className="flex items-center pt-1 justify-center">
                        <Instagram />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <img src="/main-assets/img/team/team-1-1.png" alt="img" />
              </div>
              {/* <Link href="tel:0023745671379" className="">
                <span className="text-[#347A64]">(+00) 347 456 1379</span>
                <div className="">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamThree;
