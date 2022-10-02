import classnames from "classnames";

import AppFilters from "./AppFilters";
import { filter } from "./AppFilters";
import AppMainBody from "./AppMainBody";
import { card } from "./MediaCard";

type props = {
  className?: string;
  cards: card[];
  statuses: filter[];
  languages: filter[];
  onFilter: (group: string, id: string, checked: boolean) => void;
  onClickEditCard?: (id: number) => void;
  onClickDeleteCard?: (id: number) => void;
  onClickReportCard?: (id: number) => void;
};

function AppMain(props: props) {
  const className = classnames("flex", props.className);

  return (
    <main className={className}>
      <AppFilters
        className="hidden lg:block w-52 py-6 pl-8"
        statuses={props.statuses}
        languages={props.languages}
        onFilter={props.onFilter}
      />
      <AppMainBody
        className="w-full"
        cards={props.cards}
        onClickReportCard={props.onClickReportCard}
        onClickDeleteCard={props.onClickDeleteCard}
        onClickEditCard={props.onClickEditCard}
      />
    </main>
  );
}

export default AppMain;
