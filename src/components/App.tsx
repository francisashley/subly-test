import data from "../data/data.json";
import { useCards } from "../hooks/useCards";
import { card } from "./AppCard";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppSearchResultsBar from "./AppSearchResultsBar";

function App() {
  const { filteredCards, statuses, languages, search, setFilter, setSort } =
    useCards(data.media as card[]);

  function onClickReportCard() {
    alert("This feature is unavailable right now.");
  }

  function onClickDeleteCard() {
    alert("This feature is unavailable right now.");
  }

  function onClickEditCard() {
    alert("This feature is unavailable right now.");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader
        className="border-b flex py-4 px-8 items-center"
        onSearch={search}
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
