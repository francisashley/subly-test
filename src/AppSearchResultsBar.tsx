import classnames from "classnames";
import AppHeading from "./AppHeading";

import FormSelect from "./FormSelect";
type props = {
  className?: string;
  totalResults: number;
  onSort: (type: string) => void;
};

function AppSearchResultsBar(props: props) {
  return (
    <div
      className={classnames(
        "hidden sm:flex items-center justify-between",
        props.className
      )}
    >
      <div>
        1-{props.totalResults} of {props.totalResults}
      </div>
      <div className="flex items-center">
        <AppHeading level={3} text="Sort by" />
        <FormSelect
          onInput={props.onSort}
          options={[
            { value: "name", name: "Name" },
            { value: "updated", name: "Updated" },
          ]}
        />
      </div>
    </div>
  );
}

export default AppSearchResultsBar;
