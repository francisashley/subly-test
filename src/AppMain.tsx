import AppMainHeader from "./AppMainHeader";
import AppMainBody from "./AppMainBody";
import { card } from "./AppCard";

type props = {
  cards: card[];
  onSearch: (query: string) => void;
  onSort: (type: string) => void;
};

function AppMain(props: props) {
  return (
    <main className="AppMain">
      <AppMainHeader
        onSort={props.onSort}
        onSearch={props.onSearch}
      />
      <AppMainBody cards={props.cards} />
    </main>
  );
}

export default AppMain;
