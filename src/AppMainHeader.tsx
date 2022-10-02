import classnames from "classnames";
import AppSearch from "./AppSearch";

type props = {
  className?: string;
  onSearch: (query: string) => void;
};

function AppMainHeader(props: props) {
  return (
    <header className={classnames("flex justify-center", props.className)}>
      <AppSearch onSearch={props.onSearch} />
    </header>
  );
}

export default AppMainHeader;
