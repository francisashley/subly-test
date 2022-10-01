import React from "react";
import AppMainHeader from "./AppMainHeader";
import AppMainBody from "./AppMainBody";
import { card } from "./AppCard";

type props = {
  cards: card[];
};

function AppMain(props: props) {
  return (
    <main className="AppMain">
      <AppMainHeader />
      <AppMainBody cards={props.cards} />
    </main>
  );
}

export default AppMain;
