import React from "react";
import Product from "./Product";
import "./Home.css";

function home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1"
          title="The $100 Startup: Fire Your Boss, Do What You Love and Work Better To Live More"
          price={299}
          image="https://www.amazon.in/images/I/51VMSG9740L._SX328_BO1,204,203,200_.jpg"
          rating={5}
        />
        <Product
          id="2"
          title="Kasa Smart Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz WiFi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack (HS200), White"
          price={499}
          image="https://images-na.ssl-images-amazon.com/images/I/71nMzhO05jL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="PRO365 Double Ab Wheel Roller/Carver/Abdominal Workout Safe"
          price={299}
          image="https://www.amazon.in/images/I/71F0zfxHUwL._SL1500_.jpg"
          rating={3}
        />
        <Product
          id="3"
          title="
          Bedtime Originals Choo Choo Express Plush Elephant - Humphrey"
          price={699}
          image="https://images-na.ssl-images-amazon.com/images/I/81-80FPGX0L._AC_SL1500_.jpg"
          rating={4}
        />
        <Product
          id="4"
          title="Fisher-Price Laugh & Learn Smart Stages Piggy Bank"
          price={599}
          image="https://images-na.ssl-images-amazon.com/images/I/61SqFdmZhYL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="5"
          title="CloudWalker 165 cm (65 Inches) 4K Ultra HD Smart LED Screen 65SUA7 (Black) (2019 Model)"
          price={34999}
          image="https://www.amazon.in/images/I/71TnQAWM2tL._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default home;
