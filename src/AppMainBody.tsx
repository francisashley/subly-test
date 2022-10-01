import React from "react";
import AppCard, { card } from "./AppCard";

type props = {
  cards: card[];
};

function AppMainBody(props: props) {
  return (
    <div className="AppMainBody">
      <ul>
        <li>
          {props.cards.map((card) => (
            <AppCard key={card.id} card={card} />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default AppMainBody;
