import React from "react";
import { Link } from "react-router-dom";
import brand from "../img/brand.svg";
import korzina from "../img/korzina.svg";
import stars from "../img/stars.svg";
import { StyledNavBar } from "../styles/Header";

export default function secondPage() {
  return (
    <div>
      <StyledNavBar>
        <div className=" nav-Bar mx-auto container">
          <div className=" navBar-link ">
            <Link className="" to="/">
              Оплата и доставка
            </Link>
            <Link className="" to="/">
              Отзывы
            </Link>
            <Link className="" to="/">
              <img src={brand} alt="brand" />
            </Link>
          </div>
          <div>
            <Link className="" to="/home-section">
              <img src={korzina} alt="korzina" />
            </Link>
          </div>
        </div>
      </StyledNavBar>
      {/* SECOND PAGE */}
      <div className="container mx-auto">
        <div>
          <h5>Отзывы</h5>
          <div className="flex">
            <h5>Наш средний рейтинг 4.7</h5>
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import brand from "../img/brand.svg";
// import korzina from "../img/korzina.svg";
// import { StyledNavBar } from "../styles/Header";

// import homeSvg from "../../src/img/homeSection.svg";
// import boxOne from "../../src/img/boxes1.svg";
// import { StyledBox } from "../styles/HomeSection";

// export default function Home() {
//   return (
//     <StyledBox className="container mx-auto">
//       <div className=" flex justify-center mt-3">
//         <img src={homeSvg} alt="home image" className="w-full" />
//       </div>
//       <div className=" mt-5 mb-5 below-carousel">
//         <div className="container mx-auto">
//           <div className="share">
//             <h5>Акции</h5>
//           </div>
//           <div className="boxes md:flex">
//             <div className="box-one">
//               <div className="box-one__img">
//                 {" "}
//                 <h5>-20%</h5>
//               </div>
//               <img src={boxOne} alt="first box" />
//               <h6 className="girl">Костюм для девочки</h6>
//               <div className="price md:flex">
//                 <h5 className="five">599 ₽</h5>
//                 <h5 className="seven">719 ₽</h5>
//               </div>
//               <div className="md:flex">
//                 <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//                   {" "}
//                   Смотреть
//                 </button>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   В корзину
//                 </button>
//               </div>
//             </div>
//             <div className="box-one">
//               <img src={boxOne} alt="first box" />
//               <h6 className="girl">Костюм для девочки</h6>
//               <div className="price md:flex">
//                 <h5 className="five">599 ₽</h5>
//                 <h5 className="seven">719 ₽</h5>
//               </div>
//               <div className="md:flex">
//                 <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//                   {" "}
//                   Смотреть
//                 </button>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   В корзину
//                 </button>
//               </div>
//             </div>
//             <div className="box-one">
//               <div className="box-one__img">
//                 {" "}
//                 <h5>-20%</h5>
//               </div>
//               <img src={boxOne} alt="first box" />
//               <h6 className="girl">Костюм для девочки</h6>
//               <div className="price md:flex">
//                 <h5 className="five">599 ₽</h5>
//                 <h5 className="seven">719 ₽</h5>
//               </div>
//               <div className="md:flex">
//                 <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//                   {" "}
//                   Смотреть
//                 </button>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   В корзину
//                 </button>
//               </div>
//             </div>
//             <div className="box-one">
//               <img src={boxOne} alt="first box" />
//               <h6 className="girl">Костюм для девочки</h6>
//               <div className="price md:flex">
//                 <h5 className="five">599 ₽</h5>
//                 <h5 className="seven">719 ₽</h5>
//               </div>
//               <div className="md:flex">
//                 <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//                   {" "}
//                   Смотреть
//                 </button>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   В корзину
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </StyledBox>
//     // <StyledNavBar>
//     //   <div className=" nav-Bar mx-auto container">
//     //     <div className=" navBar-link ">
//     //       <Link className="" to="/">
//     //         Оплата и доставка
//     //       </Link>
//     //       <Link className="" to="/">
//     //         Отзывы
//     //       </Link>
//     //       <Link className="" to="/">
//     //         <img src={brand} alt="brand" />
//     //       </Link>
//     //     </div>
//     //     <div>
//     //       <Link className="" to="/">
//     //         <img src={korzina} alt="korzina" />
//     //       </Link>
//     //     </div>
//     //   </div>
//     //   <div className="mx-auto container below-nav">
//     //     <div className=" nav-Link">
//     //       <li className="nav-item">
//     //         <Link className="navLinks" to="/second-page">
//     //           Одежда
//     //         </Link>
//     //       </li>
//     //       <li className="nav-item">
//     //         <Link className="navLinks" to="/">
//     //           Обувь
//     //         </Link>
//     //       </li>
//     //       <li className="nav-item">
//     //         <Link className="navLinks" to="/">
//     //           Аксессуары
//     //         </Link>
//     //       </li>
//     //       <li className="nav-item">
//     //         <Link className="navLinks" to="/">
//     //           Скидки
//     //         </Link>
//     //       </li>
//     //     </div>
//     //   </div>
//     // </StyledNavBar>
//     // <div>
//     // <HomeSection/>
//     // </div>
//   );
// }
