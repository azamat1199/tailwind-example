import React from "react";
import homeSvg from "../../src/img/homeSection.svg";
import boxOne from "../../src/img/boxes1.svg";
import { StyledBox } from "../styles/HomeSection";

import { Link } from "react-router-dom";
import brand from "../img/brand.svg";
import korzina from "../img/korzina.svg";
import { StyledNavBar } from "../styles/Header";

import { StyledFooter } from "../styles/Header";

export default function HomeSection() {
  return (
    <div>
      {/* HEADER */}
      <StyledNavBar>
        <div className=" nav-Bar mx-auto container">
          <div className=" navBar-link ">
            <Link className="" to="/delivery">
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
            <Link className="" to="/">
              <img src={korzina} alt="korzina" />
            </Link>
          </div>
        </div>
        <div className="mx-auto container below-nav">
          <div className=" nav-Link">
            <li className="list-none nav-item">
              <Link className="navLinks" to="/second-header">
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
            <div className="boxes md:flex">
              <div className="border-2 rounded-3xl box-one">
                <div className="box-one__img">
                  {" "}
                  <h5>-20%</h5>
                </div>
                <img src={boxOne} alt="first box" className="w-full" />
                <h6 className="girl">Костюм для девочки</h6>
                <div className="price md:flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className=" p-3 flex">
                  <button className="mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
                <div className="price md:flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className="p-3 md:flex">
                  <button className="mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
                <div className="price md:flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className=" p-3 md:flex">
                  <button className=" mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
                <div className="price md:flex">
                  <h5 className="five">599 ₽</h5>
                  <h5 className="seven">719 ₽</h5>
                </div>
                <div className=" p-3 md:flex">
                  <button className=" mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
