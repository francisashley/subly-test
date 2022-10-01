import classnames from "classnames";

type props = {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
  children?: JSX.Element;
};

const headingClasses = {
  1: "text-xl",
  2: "text-lg font-bold",
  3: "text-md font-medium",
  4: "text-base",
  5: "text-sm",
  6: "text-xs",
};

function AppHeading(props: props) {
  const HeadingTag = `h${props.level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={classnames(headingClasses[props.level], props.className)}
    >
      {props.text || props.children}
    </HeadingTag>
  );
}

export default AppHeading;
