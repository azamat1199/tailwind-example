import React from "react";
import { StyledNavBar } from "../../styles/Header";
import { Link } from "react-router-dom";
import brand from "../../img/brand.svg";
import korzina from "../../img/korzina.svg";
import { StyledFooter } from "../../styles/Header";

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
      <div className="color">
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
