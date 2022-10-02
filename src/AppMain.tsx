import AppMainBody from "./AppMainBody";
import AppFilters from "./AppFilters";
import { card } from "./AppCard";
import classnames from "classnames";
import { filter } from "./AppFilters";

type props = {
  className?: string;
  cards: card[];
  statuses: filter[];
  languages: filter[];
  onFilter: (group: string, id: string, checked: boolean) => void;
};

function AppMain(props: props) {
  const className = classnames(
    "flex w-full max-w-360 mx-auto",
    props.className
  );

  return (
    <main className={className}>
      <AppFilters
        className="hidden lg:block w-52 py-6 pl-8"
        statuses={props.statuses}
        languages={props.languages}
        onFilter={props.onFilter}
      />
      <AppMainBody className="w-full" cards={props.cards} />
    </main>
  );
}

export default AppMain;
