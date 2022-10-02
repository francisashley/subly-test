import AppMainHeader from "./AppMainHeader";
import AppSearchResultsBar from "./AppSearchResultsBar";
import AppMain from "./AppMain";
import { card } from "./AppCard";
import data from "./data.json";
import { useCards } from "./hooks/useCards";

function App() {
  const { cards, statuses, languages, search, setFilter, setSort } = useCards(
    data.media as card[]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <AppMainHeader
        className="border-b flex py-4 px-8 items-center"
        onSearch={search}
      />
      <AppSearchResultsBar
        className="border-b flex py-2 px-8 items-center"
        totalResults={cards.length}
        onSort={setSort}
      />
      <AppMain
        cards={cards}
        onFilter={setFilter}
        statuses={statuses}
        languages={languages}
      />
    </div>
  );
}

export default App;
