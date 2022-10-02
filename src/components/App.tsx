import { useEffect } from "react";

import { useCards } from "../hooks/useCards";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppSearchResultsBar from "./AppSearchResultsBar";
import { card } from "./MediaCard";

function App() {
  const {
    setAllCards,
    filteredCards,
    statuses,
    languages,
    setSearchQuery,
    setFilter,
    setSort,
    deleteCard,
  } = useCards([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b")
      .then((response) => response.json())
      .then((response) => {
        setAllCards(response.media as card[]);
      })
      .catch(console.error);
  }, []);

  function onClickReportCard() {
    alert("This feature is not supported right now.");
  }

  function onClickDeleteCard(id: number) {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      deleteCard(id);
    }
  }

  function onClickEditCard() {
    alert("This feature is not supported right now.");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader
        className="border-b flex py-4 px-8 items-center"
        onSearch={setSearchQuery}
      />
      <AppSearchResultsBar
        className="border-b flex py-2 px-8 items-center"
        totalResults={filteredCards.length}
        onSort={setSort}
      />
      <AppMain
        className="w-full max-w-360 mx-auto"
        cards={filteredCards}
        statuses={statuses}
        languages={languages}
        onFilter={setFilter}
        onClickReportCard={onClickReportCard}
        onClickDeleteCard={onClickDeleteCard}
        onClickEditCard={onClickEditCard}
      />
    </div>
  );
}

export default App;
