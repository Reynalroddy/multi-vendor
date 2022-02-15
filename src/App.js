import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Footer, Navbar, Blog, Buy, Scroll } from "./components";
/*import Top from "./components/Top";
import Home from "./pages/Home"; */
import { Link } from "react-router-dom";
import data from "./data";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
const App = () => {
  const ps = "./assets";
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((prod) => {
              const {
                rating,
                _id,
                name,
                category,
                image,
                price,
                countInStock,
                brand,
                numReviews,
                description,
              } = prod;

              return (
                <div className="card" key={_id}>
                  <a href="product.html">
                    <img className="medium" src={image} alt="product" />
                  </a>
                  <div className="card-body">
                    <a href="product.html">
                      <h2>{name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        {" "}
                        <FaStar />
                      </span>
                      <span>
                        {" "}
                        <FaStar />
                      </span>
                      <span>
                        {" "}
                        <FaStar />
                      </span>
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                    </div>
                    <div className="price">${price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
};

export default App;
