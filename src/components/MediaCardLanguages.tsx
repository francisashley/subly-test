import classnames from "classnames";
import { FiGlobe } from "react-icons/fi";

type props = {
  className?: string;
  amount: number;
};

function MediaCardLanguages(props: props) {
  const className = classnames(
    "flex bg-white rounded-sm text-xs items-center",
    props.className
  );

  return (
    <div className={className}>
      <div className="bg-purple-600 p-1.5 text-white">
        <FiGlobe />
      </div>
      <div className="px-2">{props.amount} languages</div>
    </div>
  );
}

export default MediaCardLanguages;
