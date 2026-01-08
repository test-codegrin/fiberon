// "use client";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";

// const HeaderFour = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const onScroll = () => setIsSticky(window.scrollY > 500);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="relative bg-white">

//         {/* STICKY WRAPPER */}
//         <div
//           className={`transition-all duration-300 bg-white ${
//             isSticky ? "fixed top-0 left-0 w-full z-50 shadow-md" : "relative"
//           }`}
//         >
//           <div className="relative">

//             {/* LOGO BG */}
//             <div className="absolute top-[-40px] left-0 h-[calc(100%+40px)] w-[14.6%] bg-white border-r border-gray-200"></div>

//             {/* LOGO */}
//             <div
//               className={`absolute z-[3] pl-[48px] py-[15px] transition-all duration-300 ${
//                 isSticky ? "mt-[10px]" : "-mt-[21px]"
//               }`}
//             >
//               <Link href="/">
//                 <img src="/main-assets/img/logo.svg" alt="logo" />
//               </Link>
//             </div>

//             {/* CONTENT */}
//             <div className="container mx-auto">
//               <div className="flex items-center justify-between">

//                 {/* MOBILE LOGO */}
//                 <div className="block xl:hidden">
//                   <Link href="/">
//                     <img src="/main-assets/img/logo.svg" alt="logo" />
//                   </Link>
//                 </div>

//                 {/* MOBILE MENU */}
//                 <div className="xl:hidden">
//                   <button
//                     onClick={() => setIsMenuOpen(true)}
//                     className="w-[50px] h-[50px] flex items-center justify-center"
//                   >
//                     <i className="ri-menu-line text-2xl"></i>
//                   </button>
//                 </div>

//                 {/* DESKTOP BUTTONS */}
//                 <div className="hidden xl:flex items-center mr-[70px] gap-x-[30px] gap-y-[20px]">
//                   <Link
//                     href="/pages/innerpage/about"
//                     className="px-[30px] py-[16px] bg-[var(--theme-color)] text-white font-semibold flex items-center gap-2"
//                   >
//                     GET IN TOUCH <i className="ri-arrow-right-up-line"></i>
//                   </Link>

//                   <button
//                     onClick={() => setIsPopupOpen(true)}
//                     className="border-r border-gray-200 pr-[30px] h-[30px]"
//                   >
//                     <i className="ri-search-line text-xl"></i>
//                   </button>

//                   <button onClick={() => setIsSideBarOpen(true)}>
//                     <i className="ri-grid-fill text-xl"></i>
//                   </button>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </header>

//       <MultiPageMobileMenu
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//       />
//     </>
//   );
// };

// export default HeaderFour;
