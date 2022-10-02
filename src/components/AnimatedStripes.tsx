import "./AnimatedStripes.css";

import classnames from "classnames";

type props = {
  className?: string;
};

function AnimatedStripes(props: props) {
  const className = classnames(
    "bg-purple-400 relative overflow-hidden",
    props.className
  );

  return (
    <div className={className}>
      <div className="animated-stripes" />
    </div>
  );
}

export default AnimatedStripes;
