import FormSelect from "./FormSelect";

type props = {
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
      <div>Search</div>
      <input type="search" name="" id="" />
    </header>
  );
}

export default AppMainHeader;
