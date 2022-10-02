import classnames from "classnames";

import AnimatedStripes from "./AnimatedStripes";
import { card } from "./AppCard";

type props = {
  className?: string;
  card: card;
};

function AppCardCoverTranscribingOverlay(props: props) {
  const className = classnames(
    "bg-white/[.8] flex flex-col justify-center items-center",
    props.className
  );

  return (
    <div className={className}>
      <div className="mb-6 font-medium text-sm">Transcribing subtitles</div>
      <AnimatedStripes className="h-1 w-5/6 rounded" />
    </div>
  );
}

export default AppCardCoverTranscribingOverlay;
