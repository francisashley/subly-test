import React from "react";
import AppFilters from "./AppFilters";
import AppMain from "./AppMain";
import { card } from "./AppCard";
import { getStatusFilters, getLanguageFilters } from "./utils/data.utils";
import data from "./data.json";

function App() {
  const cards = data.media as card[];
  const statuses = getStatusFilters(cards);
  const languages = getLanguageFilters(cards);

  return (
    <div className="App">
      <AppFilters statuses={statuses} languages={languages} />
      <AppMain cards={cards} />
    </div>
  );
}

export default App;
