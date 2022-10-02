import classnames from "classnames";

import { getTimeAgo } from "../utils/general.utils";
import { card } from "./AppCard";

type props = {
  className?: string;
  card: card;
};

function AppCardContent(props: props) {
  function getStatusText(card: card) {
    if (card.status === "transcribing") {
      return "Transcribing";
    } else if (card.status === "error") {
      return "Error in processing";
    }

    return `Edited ${getTimeAgo(card.updatedAt)}`;
  }

  const className = classnames("flex-1 p-4", props.className);

  return (
    <div className={className}>
      <h3 className="text-base font-bold mb-0.5">{props.card.name}</h3>
      <div className="text-xs text-gray-600 font-medium">
        {getStatusText(props.card)}
      </div>
    </div>
  );
}

export default AppCardContent;
