import { useState } from "react";
import AppFilters from "./AppFilters";
import AppMain from "./AppMain";
import { card } from "./AppCard";
import {
  getStatusFilters,
  getLanguageFilters,
  sortByName,
  sortByUpdated,
  filterBySearchQuery,
} from "./utils/data.utils";
import data from "./data.json";

function App() {
  const allCards = data.media as card[];
  const [cards, setCards] = useState(sortByName(allCards));

  const statuses = getStatusFilters(cards);
  const languages = getLanguageFilters(cards);

  const onSearch = (searchQuery: string) => {
    if (searchQuery) {
      setCards(filterBySearchQuery(allCards, searchQuery));
    } else {
      setCards(allCards);
    }
  };

  const onSort = (type: string) => {
    if (type === "name") {
      setCards(sortByName(cards));
    } else if (type === "updated") {
      setCards(sortByUpdated(cards));
    }
  };

  return (
    <div className="App">
      <AppFilters statuses={statuses} languages={languages} />
      <AppMain
        className="w-full p-4 lg:w-4/5 lg:p-12"
        cards={cards}
        onSearch={onSearch}
        onSort={onSort}
      />
    </div>
  );
}

export default App;
