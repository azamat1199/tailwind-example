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
      <div>
        <h5 className=" text-gray-500 text-2xl font-medium">
          Оплата и доставка
        </h5>
        <p className="tex-leftt">
          font-family: Montserrat; font-size: 14px; font-style: normal;
          font-weight: 400; line-height: 17px; letter-spacing: 0em; text-align:
          left;
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
