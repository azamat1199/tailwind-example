import React from "react";
import { StyledNavBar } from "../../styles/Header";
import { Link } from "react-router-dom";
import brand from "../../img/brand.svg";
import korzina from "../../img/korzina.svg";
import { StyledFooter } from "../../styles/Header";
import cardGirl from "../../img/card-girl.svg";
import cardLine from "../../img/card-line.svg";
import miniGirl from "../../img/mini-girl.svg";

export default function Delivery() {
  return (
    <div>
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
            <Link className="" to="/home-section">
              <img src={korzina} alt="korzina" />
            </Link>
          </div>
        </div>
      </StyledNavBar>
      <div className="mt-11 container mx-auto">
        <h5 className="mb-1 font-extrabold text-left text-gray-500 text-2xl text-lg">
          Оплата и доставка
        </h5>
        <p className="h-72 font-sans mb-24 leading-7 text-base text-left">
          Выберите понравившийся товар, внимательно ознакомьтесь с его
          характеристиками и после этого добавьте его в вашу корзину при помощи
          кнопки «Добавить в корзину». Корзина доступна с любой страницы сайта,
          таким образом, вы в любой момент можете приступить к оформлению
          заказа. Оформить заказ на доставку выбранного товара вы можете:
          Заполнив специальную форму заказа на нашем сайте в любое время суток.
          В интернет-магазине «Кроха» вы можете осуществить оплату товара двумя
          способами: Наличными курьеру при получении заказа Безналичным расчетом
          посредством банковской карты (online) После выбора способа оплаты
          перейдите на следующий шаг, чтобы подтвердить ваши данные и завершить
          оформление заказа.
        </p>
      </div>
      {/* <div>
        <div className="container mx-auto">
          <div className="border-2  my-5 rounded-3xl border-gray-300 flex flex">
            <img src={cardGirl} alt=" card girl" />
            <div className="p-12">
              <h5 className="text-left  text-gray-500 text-xl font-medium	 text-base ">
                Платье с цветочным узором
              </h5>
              <div className=" mt-5 mb-5 flex">
                <h5 className=" mr-4 text-gray-500 text-xl font-medium text-left">
                  899 ₽
                </h5>
                <strike className="  text-gray-300 text-lg font-medium ">
                  839 ₽
                </strike>
              </div>
              <img src={cardLine} alt="card line" className="  " />
              <select className="mt-7 focus:outline-none focus:ring focus:border-blue-300 w-64	 rounded border-gray-300			">
                <option>Размер 1</option>
                <option>Размер 2</option>
                <option>Размер 3</option>
                <option>Размер 4</option>
              </select>
              <button class=" block  mt-5  w-64	 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                В корзину
              </button>
              <h5 className=" mt-7 mb-3 text-gray-300 text-base font-medium text-left ">
                Описание:
              </h5>
              <p className=" text-left text-gray-300 text-base font-medium ">
                Описание: Платье Bossa Nova выполнено из эластичного супрема.
                Детали: застежка на кнопку на спине, завышенная талия, оборка по
                низу изделия, укороченный рукав. В составе платья 100% хлопок.
              </p>
            </div>
          </div>
          <div className="border-2  my-5 rounded-3xl border-gray-300 ">
            <h5 className="  text-gray-500 text-xl font-medium mb-2 ">
              Отзывы
            </h5>
            <div className="flex justify-evenly	">
              <img src={miniGirl} alt="mini girl" />
              <img src={miniGirl} alt="mini girl" />
              <img src={miniGirl} alt="mini girl" />
              <img src={miniGirl} alt="mini girl" />
            </div>
            <h5 className="  mt-3 text-gray-300 text-sm font-medium ">
              Другие отзывы
            </h5>
          </div>
        </div>
      </div> */}
      <div className=" mt-40 color">
        <StyledFooter>
          <div className="flex p-8 justify-between mx-auto items-center container ">
            <img src={brand} alt="brand logo" className="below-logo" />
            <p className="info">
              Руководитель организации: генеральный директор Давыдова Мария
              Сергеевна. Юридический адрес ПАО "Детский Мир" - 119415, город
              Москва, проспект Вернадского, 37-3. Организации ПУБЛИЧНОЕ
              АКЦИОНЕРНОЕ ОБЩЕСТВО "ДЕТСКИЙ МИР" присвоены ИНН 7729355029, ОГРН
              1027700047100, ОКПО 47568073.
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
