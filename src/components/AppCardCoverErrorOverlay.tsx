import classnames from "classnames";
import { FiAlertCircle } from "react-icons/fi";

import { card } from "./AppCard";

type props = {
  className?: string;
  card: card;
  onClickDelete?: (id: number) => void;
  onClickReport?: (id: number) => void;
};

function AppCardCoverErrorOverlay(props: props) {
  const className = classnames(
    "flex py-8 pl-2 pr-4 items-center",
    props.className
  );
  return (
    <div className={className}>
      <div className="flex flex-col">
        <div className="flex">
          <FiAlertCircle className="w-16 text-red-500 mt-1 mr-2" />
          <p className="font-medium text-black/[0.7] mb-4 text-[0.66rem]">
            An error occurred while processing your file. Delete your file to
            try again, and report issue if the problem persists.
          </p>
        </div>
        <div className="flex nowrap">
          <button
            className="border border-gray-400 text-xs ml-auto rounded bg-white text-black rounded py-1.5 font-medium px-2 hover:text-white hover:bg-red-500 hover:border-red-500 duration-300 ease-out-expo"
            onClick={() => props.onClickDelete?.(props.card.id)}
          >
            Delete file
          </button>
          <button
            className="border border-purple-800 text-xs ml-2 rounded bg-purple-600 text-white rounded py-1.5 font-medium px-2 hover:bg-purple-700 hover:border-purple-700 duration-300 ease-out-expo"
            onClick={() => props.onClickReport?.(props.card.id)}
          >
            Report issue
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppCardCoverErrorOverlay;
