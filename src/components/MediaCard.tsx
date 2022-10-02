import classnames from "classnames";

import MediaCardContent from "./MediaCardContent";
import MediaCardCover from "./MediaCardCover";

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

function MediaCard(props: props) {
  const className = classnames(
    "w-full overflow-hidden flex flex-col rounded shadow group cursor-default hover:shadow-lg duration-1000 ease-out-expo",
    props.className
  );

  return (
    <div className={className}>
      <MediaCardCover
        card={props.card}
        onClickReport={props.onClickReport}
        onClickDelete={props.onClickDelete}
        onClickEdit={props.onClickEdit}
      />
      <MediaCardContent card={props.card} />
    </div>
  );
}

export default MediaCard;
