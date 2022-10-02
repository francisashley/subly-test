import classnames from "classnames";

import AppSearch from "./AppSearch";

type props = {
  className?: string;
  onSearch: (query: string) => void;
};

function AppHeader(props: props) {
  const className = classnames("flex justify-center", props.className);

  return (
    <header className={className}>
      <AppSearch onSearch={props.onSearch} />
    </header>
  );
}

export default AppHeader;
