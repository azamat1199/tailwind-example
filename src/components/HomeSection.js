import React from "react";
import homeSvg from "../../src/img/homeSection.svg";
import boxOne from "../../src/img/boxes1.svg";
import { StyledBox } from "../styles/HomeSection";
import { useState } from "react";

import { Link } from "react-router-dom";
import brand from "../img/brand.svg";
import korzina from "../img/korzina.svg";
import { StyledNavBar } from "../styles/Header";

import { StyledFooter } from "../styles/Header";
import cardGirl from "../../src/img/card-girl.svg";
import cardLine from "../../src/img/card-line.svg";
import miniGirl from "../../src/img/mini-girl.svg";

export default function HomeSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <StyledNavBar>
        <div className=" nav-Bar mx-auto container">
          <div className=" navBar-link ">
            <Link className="" to="/">
              Оплата и доставка
            </Link>
            <Link className="" to="/delivery">
              Отзывы
            </Link>
            <Link className="" to="/">
              <img src={brand} alt="brand" />
            </Link>
          </div>
          <div>
            <Link className="" to="/basket">
              <img src={korzina} alt="korzina" />
            </Link>
          </div>
        </div>
        <div className="mx-auto container below-nav">
          <div className=" nav-Link">
            <li className="list-none nav-item">
              <Link className="navLinks" to="/second-page">
                Одежда
              </Link>
            </li>
            <li className="list-none nav-item">
              <Link className="navLinks" to="/">
                Обувь
              </Link>
            </li>
            <li className="list-none nav-item">
              <Link className="navLinks" to="/">
                Аксессуары
              </Link>
            </li>
            <li className="list-none nav-item">
              <Link className="navLinks" to="/">
                Скидки
              </Link>
            </li>
          </div>
        </div>
      </StyledNavBar>
      <StyledBox className="container mx-auto">
        <div className=" flex justify-center mt-3">
          <img src={homeSvg} alt="home image" className="w-full" />
        </div>
        <div className=" mt-5 mb-5 below-carousel">
          <div className="container mx-auto">
            <div className="share">
              <h5>Акции</h5>
            </div>
            <div className="boxes flex">
              <div className="border-2 rounded-3xl box-one">
                <div className="box-one__img">
                  {" "}
                  <h5>-20%</h5>
                </div>
                <img src={boxOne} alt="first box" className="w-full" />
                <h6 className="girl">Костюм для девочки</h6>
                <div className="price flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className=" p-3 flex">
                  <button
                    className="mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Смотреть
                  </button>
                  {/* 234567890-34567890-34567890-34567890-34567890-234567890-234567890- */}
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Modal Title
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                I always felt like I could do anything. That’s
                                the main thing people are controlled by!
                                Thoughts- their perception of themselves!
                                They're slowed down by their perception of
                                themselves. If you're taught you can’t do
                                anything, you won’t do anything. I was taught I
                                could do everything.
                              </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : // <>
                  //   <div>
                  //     <div className="container mx-auto">
                  //       <div className="border-2  my-5 rounded-3xl border-gray-300 flex flex">
                  //         <img src={cardGirl} alt=" card girl" />
                  //         <div className="p-12">
                  //           <div className="flex">
                  //             <h5 className="text-left  text-gray-500 text-xl font-medium	 text-base ">
                  //               Платье с цветочным узором
                  //             </h5>
                  //             <button
                  //               className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  //               type="button"
                  //               onClick={() => setShowModal(false)}
                  //             >
                  //               x
                  //             </button>
                  //           </div>
                  //           <div className=" mt-5 mb-5 flex">
                  //             <h5 className=" mr-4 text-gray-500 text-xl font-medium text-left">
                  //               899 ₽
                  //             </h5>
                  //             <strike className="  text-gray-300 text-lg font-medium ">
                  //               839 ₽
                  //             </strike>
                  //           </div>
                  //           <img
                  //             src={cardLine}
                  //             alt="card line"
                  //             className="  "
                  //           />
                  //           <select className="mt-7 focus:outline-none focus:ring focus:border-blue-300 w-64	 rounded border-gray-300			">
                  //             <option>Размер 1</option>
                  //             <option>Размер 2</option>
                  //             <option>Размер 3</option>
                  //             <option>Размер 4</option>
                  //           </select>
                  //           <button class=" block  mt-5  w-64	 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  //             В корзину
                  //           </button>
                  //           <h5 className=" mt-7 mb-3 text-gray-300 text-base font-medium text-left ">
                  //             Описание:
                  //           </h5>
                  //           <p className=" text-left text-gray-300 text-base font-medium ">
                  //             Описание: Платье Bossa Nova выполнено из
                  //             эластичного супрема. Детали: застежка на кнопку
                  //             на спине, завышенная талия, оборка по низу
                  //             изделия, укороченный рукав. В составе платья
                  //             100% хлопок.
                  //           </p>
                  //         </div>
                  //       </div>
                  //       <div className="border-2  my-5 rounded-3xl border-gray-300 ">
                  //         <h5 className="  text-gray-500 text-xl font-medium mb-2 ">
                  //           Отзывы
                  //         </h5>
                  //         <div className="flex justify-evenly	">
                  //           <img src={miniGirl} alt="mini girl" />
                  //           <img src={miniGirl} alt="mini girl" />
                  //           <img src={miniGirl} alt="mini girl" />
                  //           <img src={miniGirl} alt="mini girl" />
                  //         </div>
                  //         <h5 className="  mt-3 text-gray-300 text-sm font-medium ">
                  //           Другие отзывы
                  //         </h5>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </>
                  null}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    В корзину
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-3xl box-one">
                <img src={boxOne} alt="first box" className="w-full" />
                <h6 className="girl">Костюм для девочки</h6>
                <div className="price flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className="p-3 flex">
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Смотреть
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    В корзину
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-3xl box-one">
                <div className="box-one__img">
                  {" "}
                  <h5>-20%</h5>
                </div>
                <img src={boxOne} alt="first box" className="w-full" />
                <h6 className="girl">Костюм для девочки</h6>
                <div className="price flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className=" p-3 flex">
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className=" mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    {" "}
                    Смотреть
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    В корзину
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-3xl box-one">
                <img src={boxOne} alt="first box" className="w-full" />
                <h6 className="girl">Костюм для девочки</h6>
                <div className="price flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className=" p-3 flex">
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className=" mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Смотреть
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledBox>
      {/* FOOTER */}
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
