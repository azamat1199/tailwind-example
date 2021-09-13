import React from "react";
import { Link } from "react-router-dom";
import { StyledNavBar } from "../styles/Header";
import brand from "../img/brand.svg";
import korzina from "../img/korzina.svg";
import stars from "../img/stars.svg";
import wear from "../img/wear.svg";
import blackStar from "../img/blackStar.svg";
import { StyledFooter } from "../styles/Header";

export default function secondPage() {
  return (
    <div>
      <StyledNavBar>
        <div className=" nav-Bar mx-auto container">
          <div className=" navBar-link ">
            <Link className="" to="/delivery-and-payment">
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
        <div className="border-2 p-5 my-5 rounded-lg border-gray-300">
          <div>
            <h5 className=" text-gray-500 text-2xl font-medium text-left">
              Отзывы
            </h5>
            <div className="flex">
              <h5 className=" text-gray-400 font-normal ">
                {" "}
                Наш средний рейтинг 4.7
              </h5>
              <img src={stars} alt="stars" />
            </div>
          </div>
          <div className="flex">
            {/*  BOXES */}
            <div className="mr-8 max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={wear}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className=" text-gray-500 text-left font-bold text-xl mb-2">
                  Оксана Тюрина
                </div>
                <div className="text-left flex">
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                </div>
              </div>
              <div className="text-left px-6 ">
                <h5 className="text-gray-400">
                  Достоинства: Качественный пошив Недостатки: Нет
                </h5>
              </div>
            </div>
            {/* BOXES */}
            <div className="mr-8 max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={wear}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-left font-bold text-xl mb-2">
                  Оксана Тюрина
                </div>
                <div className="text-left flex">
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                </div>
              </div>
              <div className="text-left px-6 ">
                <h5 className="text-gray-400">
                  Достоинства: Качественный пошив Недостатки: Нет
                </h5>
              </div>
            </div>
            {/* BOXES */}
            <div className="mr-8 max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={wear}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-left font-bold text-xl mb-2">
                  Оксана Тюрина
                </div>
                <div className="text-left flex">
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                </div>
              </div>
              <div className="text-left px-6 ">
                <h5 className="text-gray-400">
                  {" "}
                  Достоинства: Качественный пошив Недостатки: Нет
                </h5>
              </div>
            </div>
            {/* BOXES */}
            <div className="mr-8 max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={wear}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-left font-bold text-xl mb-2">
                  Оксана Тюрина
                </div>
                <div className="text-left flex">
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                  <img src={blackStar} alt="black star" />
                </div>
              </div>
              <div className="text-left px-6">
                <h5 className="text-gray-400">
                  Достоинства: Качественный пошив Недостатки: Нет
                </h5>
              </div>
            </div>
          </div>
          {/* COMMENT */}
          <div className="mt-5">
            <h4 className=" text-gray-500 text-2xl font-medium text-left text-left">
              Наталья Иванова
            </h4>
            <div className="text-left flex">
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
            </div>
            <p className="text-base text-gray-400  text-left">
              Заказывала сыну штанишки. Тонкие , лёгкие спортивные штаны , идут
              размер в размер, с запасом лучше не брать , на мальчика 100см
              взяла 110 размер , после стирки не сели , очень большие складки
              внизу , но ничего страшного дорастёт, по позже будем носить , а в
              целом для детского сада отлично подойдут!
            </p>
          </div>
          <div className="my-5">
            <h4 className=" text-gray-500 text-2xl font-medium text-left text-left">
              Анна Казакова
            </h4>
            <div className="text-left flex">
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
              <img src={blackStar} alt="black star" />
            </div>
            <p className="text-base text-gray-400  text-left">
              Костюм очень понравился! Ткань приятная, на худенького мальчика
              просто замечательно. Обычно проблема подобрать штаны, все
              сваливается, даже на завязках. Я в восторге! Смотрится очень
              хорошо. А сын в восторге от машин на кофте!
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Оставить отзыв
          </button>
        </div>
      </div>
      <div className="color">
        <StyledFooter>
          <div className="flex p-8 justify-between mx-auto items-center container ">
            <img src={brand} alt="brand logo" className="below-logo" />
            <p className="info">
              Руководитель организации: генеральный директор Давыдова Мария
              Сергеевна. Юридический адрес ПАО "Детский Мир" - 119415, город
              Москва, проспект Вернадского, 37-3. Организации ПУБЛИЧНОЕ
              АКЦИОНЕРНОЕ ОБЩЕСТВО "ДЕТСКИЙ МИР" присвоены ИНН 7729355029, ОГРН
              1027700047100, ОКПО 47568073.{" "}
            </p>
            <div className="d-flex">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-github-square"></i>
              <i class="fab fa-linkedin"></i>
            </div>
          </div>
        </StyledFooter>
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
