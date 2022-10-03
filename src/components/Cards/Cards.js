import React from "react";
import { CardsData } from "../Data/Data";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cards">
        {CardsData &&
          CardsData.map((card, index) => (
            <div className="card" key={index}>
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                icon={card.icon}
                series={card.series}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
