import classnames from "classnames";
import FormSelect from "./FormSelect";

type props = {
  className?: string;
  totalResults: number;
  onSort: (type: string) => void;
};

function AppSearchResultsBar(props: props) {
  const className = classnames(
    "hidden sm:flex items-center justify-between",
    props.className
  );

  const sortOptions = [
    { value: "name", name: "Name" },
    { value: "updated", name: "Updated" },
  ];

  return (
    <div className={className}>
      <div>
        1-{props.totalResults} of {props.totalResults}
      </div>
      <div className="flex items-center">
        <label className="text-md font-medium" htmlFor="sort-cards">
          Sort by
        </label>
        <FormSelect
          id="sort-cards"
          onInput={props.onSort}
          options={sortOptions}
        />
      </div>
    </div>
  );
}

export default AppSearchResultsBar;
