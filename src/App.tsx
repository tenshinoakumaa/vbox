import React, { useState } from "react";
import store from "./store/index";
import { useEffect } from "react";
import { CSSProperties } from "react";
import { observer } from "mobx-react-lite";
import IItem from "./interfaces/IItem";

const BasketStyles: CSSProperties = {
  position: "fixed",
  bottom: "2rem",
  cursor: "pointer",
};

const ModalStyles: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
};

const BasketContainerStyles: CSSProperties = {
  maxHeight: "300px",
  overflowY: "auto",
};

const LiStyles: CSSProperties = {
  borderBottom: "1px solid #000",
};

const App: React.FC = observer(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    store.loadItems();
  }, []);

  const handleAddItem = (item: IItem): void => {
    store.addItem(item);
    store.increment(item);
    store.incrementCount();
  };

  const handleRemoveItem = (item: IItem): void => {
    store.removeItem(item);
    store.decrement(item);
    store.decrementCount();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBuy = () => {
    toggleModal();
    alert("Успешная покупка.");
  };

  return (
    <>
      <div className={"max-w-md mx-auto py-8"}>
        {store.items !== undefined
          ? store.items.map((category) => (
              <div
                key={category.id}
                className={"flex flex-col items-start text-start mb-12 px-4"}
              >
                <span className={"font-bold  text-5xl"}>{category.name}</span>
                <ul className="w-full space-y-12">
                  {category.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-row justify-between items-center py-4 space-x-8"
                      style={LiStyles}
                    >
                      <div className="w-64 h-64">
                        <img src={item.img} alt="" className="w-64 h-64" />
                      </div>
                      <div className="w-full flex flex-col justify-between space-y-8">
                        <div className="flex justify-between">
                          <span>{item.name}</span>
                          <span>{item.price} ₸</span>
                        </div>
                        <div>
                          <span>{item.category}</span>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-blue-200 p-4 rounded-xl flex space-x-4">
                            <span
                              className="font-bold cursor-pointer"
                              onClick={() => handleRemoveItem(item)}
                            >
                              -
                            </span>

                            <span>{item.count}</span>
                            <span
                              className="font-bold cursor-pointer"
                              onClick={() => handleAddItem(item)}
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : ""}

        {isModalOpen && (
          <div style={ModalStyles}>
            <h2>Корзина</h2>
            <div style={BasketContainerStyles}>
              <ul className="w-full space-y-12">
                {store.basket.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-row justify-between items-center py-4 space-x-8"
                    style={LiStyles}
                  >
                    <div className="w-64 h-64">
                      <img src={item.img} alt="" className="w-64 h-64" />
                    </div>
                    <div className="w-full flex flex-col justify-between space-y-8">
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.price} ₸</span>
                      </div>
                      <div>
                        <span>{item.category}</span>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-200 p-4 rounded-xl flex space-x-4">
                          <span
                            className="font-bold cursor-pointer"
                            onClick={() => handleRemoveItem(item)}
                          >
                            -
                          </span>

                          <span>{item.count}</span>
                          <span
                            className="font-bold cursor-pointer"
                            onClick={() => handleAddItem(item)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-sm mx-auto flex flex-col items-center space-y-4 py-4">
              <p>Цена : {store.overallPrice}</p>
              <button
                className="w-full px-4 py-1 bg-red-500 text-white rounded-xl"
                onClick={toggleModal}
              >
                Закрыть
              </button>
              <button
                className="w-full px-4 py-1 bg-green-500 text-white rounded-xl"
                onClick={handleBuy}
              >
                Оплатить через Kaspi.kz
              </button>
            </div>
          </div>
        )}

        <div
          style={BasketStyles}
          className="max-w-md px-4 w-full"
          onClick={toggleModal}
        >
          <div className="bg-green-200 p-8 rounded-xl flex justify-center">
            {store.count} за {store.overallPrice}
          </div>
        </div>
      </div>
    </>
  );
});

export default App;
