import classnames from "classnames";
import { FiTrash2 } from "react-icons/fi";

import { card } from "./MediaCard";

type props = {
  className?: string;
  card: card;
  onClickEdit?: (id: number) => void;
  onClickDelete?: (id: number) => void;
};

function MediaCardCoverReadyOverlay(props: props) {
  const className = classnames(
    "opacity-0 group-hover:opacity-100 bg-black/[0.6] duration-1000 ease-out-expo flex justify-center items-center",
    props.className
  );
  return (
    <div className={className}>
      <button
        className="border border-white h-fit text-white rounded px-8 py-1.5 text-xs font-medium hover:bg-white hover:text-black duration-300 ease-out-expo"
        onClick={() => props.onClickEdit?.(props.card.id)}
      >
        Edit
      </button>
      <button
        className="absolute top-2 right-2 text-white p-1.5 rounded hover:bg-white hover:text-red-500 duration-300 ease-out-expo"
        onClick={() => props.onClickDelete?.(props.card.id)}
      >
        <FiTrash2 />
      </button>
    </div>
  );
}

export default MediaCardCoverReadyOverlay;
