import AppSearch from "./AppSearch";
import FormSelect from "./FormSelect";

type props = {
  onSearch: (query: string) => void;
  onSort: (type: string) => void;
};

function AppMainHeader() {
function AppMainHeader(props: props) {
  return (
    <header className="AppMainHeader">
      <div>
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
