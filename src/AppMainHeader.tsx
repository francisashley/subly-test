import classnames from "classnames";
import AppHeading from "./AppHeading";
import AppSearch from "./AppSearch";
import FormSelect from "./FormSelect";

type props = {
  className?: string;
  onSearch: (query: string) => void;
  onSort: (type: string) => void;
};

function AppMainHeader(props: props) {
  return (
    <header className={classnames("AppMainHeader", props.className)}>
      <div className="hidden sm:flex items-center">
        <AppHeading level={3} text="Sort by" />
        <FormSelect
          onInput={props.onSort}
          options={[
            { value: "name", name: "Name" },
            { value: "updated", name: "Updated" },
          ]}
        />
      </div>
      <AppSearch onSearch={props.onSearch} />
    </header>
  );
}

export default AppMainHeader;
