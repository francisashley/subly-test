import AppMainHeader from "./AppMainHeader";
import AppMainBody from "./AppMainBody";
import { card } from "./AppCard";
import classnames from "classnames";

type props = {
  className?: string;
  cards: card[];
  onSearch: (query: string) => void;
  onSort: (type: string) => void;
};

function AppMain(props: props) {
  return (
    <main className={classnames("AppMain", props.className)}>
      <AppMainHeader
        className="border-b flex justify-between py-4 px-8 items-center"
        onSort={props.onSort}
        onSearch={props.onSearch}
      />
      <AppMainBody cards={props.cards} />
    </main>
  );
}

export default AppMain;
