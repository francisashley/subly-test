import AppFilters from "./AppFilters";
import AppMain from "./AppMain";
import { card } from "./AppCard";
  getStatusFilters,
  getLanguageFilters,
  sortByName,
  sortByUpdated,
} from "./utils/data.utils";
import data from "./data.json";

function App() {
  const allCards = data.media as card[];
  const [cards, setCards] = useState(sortByName(allCards));

  const statuses = getStatusFilters(cards);
  const languages = getLanguageFilters(cards);


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
        cards={cards}
        onSort={onSort}
      />
    </div>
  );
}

export default App;
