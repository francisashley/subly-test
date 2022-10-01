import AppMainHeader from "./AppMainHeader";
import AppMainBody from "./AppMainBody";
import { card } from "./AppCard";

type props = {
  cards: card[];
  onSort: (type: string) => void;
};

function AppMain(props: props) {
  return (
    <main className="AppMain">
      <AppMainHeader
        onSort={props.onSort}
      />
      <AppMainBody cards={props.cards} />
    </main>
  );
}

export default AppMain;
