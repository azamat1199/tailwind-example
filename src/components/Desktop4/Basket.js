import React from "react";
import { StyledNavBar } from "../../styles/Header";
import { Link } from "react-router-dom";
import brand from "../../img/brand.svg";
import korzina from "../../img/korzina.svg";
import { StyledFooter } from "../../styles/Header";
import girl from "../../img/girl.svg";
import line from "../../img/line.svg";

export default function Basket() {
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
      <div className="mb-24 border-2 p-5 my-5 rounded-lg border-gray-300 container mx-auto">
        <div className=" justify-between  flex">
          <div className=" w-2/3 mr-7 border-2 p-5 my-5 rounded-lg border-gray-300">
            <h5 className=" text-gray-600 text-2xl font-medium text-left">
              Корзина заказа
            </h5>
            {/* BOX */}
            <div className="mt-3 mb-3 justify-between	 items-center flex">
              <div className=" items-center flex">
                <img src={girl} alt="girl" />
                <div className="ml-7">
                  <h5 className="mb-3 text-gray-400 text-base">
                    Платье для девочки
                  </h5>
                  <span className=" mb-3 flex">
                    <h5 className=" mr-4 text-gray-500 text-xl font-medium text-left">
                      599 ₽
                    </h5>
                    <strike className="  text-gray-300 text-lg font-medium ">
                      719 ₽
                    </strike>
                  </span>
                  <h5 className="  text-gray-400 text-base">
                    Вес посылки: 400 г.
                  </h5>
                </div>
              </div>
              <div>
                <input
                  class="w-16 h-7  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
            </div>
            {/* BOX */}
            <div className="mt-3 mb-3 justify-between	 items-center flex">
              <div className=" items-center flex">
                <img src={girl} alt="girl" />
                <div className="ml-7">
                  <h5 className="mb-3 text-gray-400 text-base">
                    Платье для девочки
                  </h5>
                  <span className=" mb-3 flex">
                    <h5 className=" mr-4  text-gray-500 text-xl font-medium text-left">
                      599 ₽
                    </h5>
                    <strike className="  text-gray-300 text-lg font-medium ">
                      719 ₽
                    </strike>
                  </span>
                  <h5 className="  text-gray-400 text-base">
                    Вес посылки: 400 г.
                  </h5>
                </div>
              </div>
              <div>
                <input
                  class="w-16 h-7 border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
            </div>
            {/* BOX */}
            <div className="mb-3 mt-3 justify-between	 items-center flex">
              <div className="flex items-center ">
                <img src={girl} alt="girl" />
                <div className="ml-7">
                  <h5 className=" mb-3 text-gray-400 text-base">
                    Платье для девочки
                  </h5>
                  <span className="mb-3 flex">
                    <h5 className=" mr-4  text-gray-500 text-xl font-medium text-left">
                      599 ₽
                    </h5>
                    <strike className="  text-gray-300 text-lg font-medium ">
                      719 ₽
                    </strike>
                  </span>
                  <h5 className="     text-gray-400 text-base">
                    Вес посылки: 400 г.
                  </h5>
                </div>
              </div>
              <div>
                <input
                  class=" border w-16 h-7 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className=" w-1/3 h-52 border-2 p-5 my-5 rounded-lg border-gray-300">
            <h4 className=" mb-5 text-gray-500 text-xl font-medium text-left">
              Итого: 1797 ₽
            </h4>
            <h5 className="text-left mb-5  text-gray-300 text-base">
              3 товара Сумма скидки: 360 ₽
            </h5>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Оформить заказ
            </button>
          </div>
        </div>
        <img src={line} alt="line" className="mt-2 mb-2" />
        <div>
          <h5 className=" text-gray-600 text-2xl font-medium text-left">
            Оформление заказа
          </h5>
          <div>
            <div class="w-full max-w-xs">
              <form class="bg-white  rounded  pt-6 pb-8 1">
                <div class="mb-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Имя"
                    autoComplete="off"
                  />
                </div>

                <div class="mb-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Телефон"
                  />
                </div>
                <div class="mb-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Город"
                  />
                </div>
                <div class="mb-4">
                  <input
                    class="h-16  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Адрес"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex">
            <h5 className="  text-gray-500 text-base font-medium text-left mr-16 ">
              Способ получения:
            </h5>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="  form-radio"
                name="accountType"
                value="personal"
              />
              <span class="ml-2">Personal</span>
            </label>
            <label class="inline-flex items-center ml-6">
              <input
                type="radio"
                class="form-radio"
                name="accountType"
                value="busines"
              />
              <span class="ml-2">Business</span>
            </label>
          </div>
          <img src={line} alt="below line" className="mt-10 mb-8" />
          <div className="items-center	 flex">
            <div>
              <h5 className=" mb-3 text-gray-400 text-base font-medium text-left mr-16 ">
                Сумма заказа: 1797 ₽
              </h5>
              <h5 className=" mb-3 text-gray-400 text-base font-medium text-left mr-16 ">
                Доставка: 500 ₽
              </h5>
              <h5 className="  text-gray-500 text-base font-medium text-left mr-16 ">
                Итого: 2297 ₽
              </h5>
            </div>
            <button class=" mr-7 h-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Продолжить покупки
            </button>
            <button class="h-10  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Заказать
            </button>
          </div>
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
