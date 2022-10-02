import classnames from "classnames";

import { card } from "./MediaCard";
import MediaCardCoverErrorOverlay from "./MediaCardCoverErrorOverlay";
import MediaCardCoverReadyOverlay from "./MediaCardCoverReadyOverlay";
import MediaCardCoverTranscribingOverlay from "./MediaCardCoverTranscribingOverlay";

type props = {
  className?: string;
  card: card;
  onClickEdit?: (id: number) => void;
  onClickDelete?: (id: number) => void;
  onClickReport?: (id: number) => void;
};

function MediaCardCover(props: props) {
  const className = classnames(
    "cover overflow-hidden flex-1 aspect-video relative bg-gray-200",
    { "bg-red-100": props.card.status === "error" }
  );
  const showImage = props.card.status !== "error";
  const zoomOnHover = props.card.status === "ready";
  return (
    <div className={className}>
      {showImage && (
        <img
          className={classnames("image absolute w-full h-full object-cover", {
            "scale-100 group-hover:scale-110 duration-1000 ease-out-expo":
              zoomOnHover,
          })}
          src={props.card.cover}
        />
      )}
      {props.card.status === "ready" && (
        <MediaCardCoverReadyOverlay
          className="absolute w-full h-full"
          card={props.card}
          onClickEdit={props.onClickEdit}
          onClickDelete={props.onClickDelete}
        />
      )}
      {props.card.status === "transcribing" && (
        <MediaCardCoverTranscribingOverlay
          className="absolute w-full h-full"
          card={props.card}
        />
      )}
      {props.card.status === "error" && (
        <MediaCardCoverErrorOverlay
          className="absolute w-full h-full"
          card={props.card}
          onClickReport={props.onClickReport}
          onClickDelete={props.onClickDelete}
        />
      )}
    </div>
  );
}

export default MediaCardCover;
