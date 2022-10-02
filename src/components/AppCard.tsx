import classnames from "classnames";

import AppCardContent from "./AppCardContent";
import AppCardCover from "./AppCardCover";

export type card = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: "ready" | "error" | "transcribing";
  createdAt: string;
  updatedAt: string;
  errorMessage?: string;
};

type props = {
  className?: string;
  card: card;
  onClickEdit?: (id: number) => void;
  onClickDelete?: (id: number) => void;
  onClickReport?: (id: number) => void;
};

function AppCard(props: props) {
  const className = classnames(
    "w-full overflow-hidden flex flex-col rounded shadow group cursor-default",
    props.className
  );

  return (
    <a href="#" className={className}>
      <AppCardCover
        card={props.card}
        onClickReport={props.onClickReport}
        onClickDelete={props.onClickDelete}
        onClickEdit={props.onClickEdit}
      />
      <AppCardContent card={props.card} />
    </a>
  );
}

export default AppCard;
