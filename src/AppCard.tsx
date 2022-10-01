import classnames from "classnames";
import formatDistance from "date-fns/formatDistance";

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
};

function AppMainCard(props: props) {
  function getTimeAgo(date: string) {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
  }

  function getStatusText(card: card) {
    if (card.status === "transcribing") {
      return "Transcribing";
    } else if (card.status === "error") {
      return "Error in processing";
    }

    return `Edited ${getTimeAgo(card.updatedAt)}`;
  }

  return (
    <div
      className={classnames(
        "AppMainCard w-full overflow-hidden flex flex-col rounded shadow",
        props.className
      )}
    >
      <div
        className={classnames(
          "cover overflow-hidden flex-1 aspect-video relative bg-gray-200",
          {
            "cover--error": props.card.status === "error",
          }
        )}
      >
        {props.card.status !== "error" && (
          <img
            className="image absolute w-full h-full object-cover"
            src={props.card.cover}
          />
        )}
        {/* <div className="overlays">
          {props.card.status === "ready" && (
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )}
          {props.card.status === "transcribing" && (
            <div>
              <div>Transcribing subtitles</div>
              <div>Loading indicator</div>
            </div>
          )}
          {props.card.status === "error" && (
            <div>
              <div>icon</div>
              <div>
                <p>
                  An error occurred while processing your file. Delete your file
                  to try again, and report issue if the problem persists.
                </p>
                <div>
                  <button>Delete file</button>
                  <button>Report issue</button>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
      <div className="content flex-1 p-3">
        <h4 className="text-sm font-bold">{props.card.name}</h4>
        <div className="text-xs text-gray-600 font-medium">
          {getStatusText(props.card)}
        </div>
      </div>
    </div>
  );
}

export default AppMainCard;
