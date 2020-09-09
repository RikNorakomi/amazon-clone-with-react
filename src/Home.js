import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="0986587"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={5}
          />
          <Product
            id="46534787"
            title="AmazonBasics High-Speed HDMI Cable, 6 Feet"
            price={6.99}
            image="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3215416"
            title="AWyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
            price={25.89}
            image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="3876778"
            title="AmazonBasics High-Speed HDMI Cable, 6 Feet"
            price={6.99}
            image="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="543653"
            title="AmazonBasics High-Speed HDMI Cable, 6 Feet"
            price={6.99}
            image="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4534"
            title="iBayam Scissors, 8 Multipurpose Scissors Bulk 3-Pack, Ultra Sharp Blade Shears, Comfort-Grip Handles, Sturdy Sharp Scissors for Office Home School..."
            price={66.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TTU01v05L._AC_SL1500_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
