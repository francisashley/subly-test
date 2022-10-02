import data from "../data/data.json";
import { useCards } from "../hooks/useCards";
import { card } from "./AppCard";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppSearchResultsBar from "./AppSearchResultsBar";

function App() {
  const {
    filteredCards,
    statuses,
    languages,
    setSearchQuery,
    setFilter,
    setSort,
    deleteCard,
  } = useCards(data.media as card[]);

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
