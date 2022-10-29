import React from 'react';
import Product from './Product.js';
import "./Home.css";

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://img.freepik.com/free-vector/flat-design-unicorn-silhouette-illustration_23-2149483068.jpg?w=2000" alt="" className="home__image" />

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                <Product />
                <Product />
                <Product />
                </div>


                <div className="home__row">
                <Product />
                </div>


            </div>
        </div>
    </div>
  )
}

export default Home