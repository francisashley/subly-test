import AppHeading from "./AppHeading";

export type filter = {
  id: string;
  label: string;
};

type props = {
  className?: string;
  statuses: filter[];
  languages: filter[];
  onFilter: () => void;
};

function AppFilters(props: props) {
  return (
    <aside className={props.className}>
      <AppHeading level={2} text="Filters" className="mb-4" />
      <AppHeading level={3} text="Status" className="mb-1" />
      <ul className="mb-4">
        {props.statuses.map((status) => (
          <li key={status.id}>
            <input type="checkbox" id={status.id} onClick={props.onFilter} />{" "}
            <label htmlFor={status.id}>{status.label}</label>
          </li>
        ))}
      </ul>
      <AppHeading level={3} text="Language" className="mb-1" />
      <ul>
        {props.languages.map((language) => (
          <li key={language.id}>
            <input type="checkbox" id={language.id} onClick={props.onFilter} />{" "}
            <label htmlFor={language.id}>{language.label}</label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AppFilters;
