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

  const statuses = getStatusFilters(allCards);
  const languages = getLanguageFilters(allCards);

  const onSearch = (searchQuery: string) => {
    if (searchQuery) {
      setCards(filterBySearchQuery(allCards, searchQuery));
    } else {
      setCards(allCards);
    }
  };

  const onFilter = () => alert("filtering");

  const onSort = (type: string) => {
    if (type === "name") {
      setCards(sortByName(cards));
    } else if (type === "updated") {
      setCards(sortByUpdated(cards));
    }
  };

  return (
    <div className="flex">
      <AppFilters
        className="hidden lg:block w-1/5 py-6 px-12 border-r"
        statuses={statuses}
        languages={languages}
        onFilter={onFilter}
      />
      <AppMain
        className="w-full lg:w-4/5"
        cards={cards}
        onSearch={onSearch}
        onSort={onSort}
      />
    </div>
  );
}

export default App;
