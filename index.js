import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>hello react!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;

  // const pizzas = [];

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic italic cuisine 6 creative dishes to choose from. all from our
        own oven, all organic, all delicous
      </p>
      {numPizzas > 0 ? (
        <ul>
          className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we are still working on our menu please come back later</p>
      )}
      {/* <Pizza
        name="pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza funghi"
        ingredients="tomoto, mushroom"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;
  return (
    <li className=" pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div></div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price + 3}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);
  //     ? alert("shop is open currently")
  //     : alert(" sorry shop is closed");
  // if (!isOpen) {
  //   <p> CLOSED</p>;
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
      ;
    </footer>
  );

  function Order({ closeHour }) {
    return (
      <div className="order">
        <p>
          we are Open untill {closeHour.closeHour}:00. come visit us or order
          online
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }
  // return React.createElement("footer", null, "we are currently open");
}

// react version v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react before v18

// React.render(<App />)
