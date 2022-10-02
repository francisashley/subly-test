import AppHeading from "./AppHeading";

export type filter = {
  id: string;
  label: string;
  amount: number;
};

type props = {
  className?: string;
  statuses: filter[];
  languages: filter[];
  onFilter: (group: string, id: string, checked: boolean) => void;
};

function AppFilters(props: props) {
  function onFilter(
    group: string,
    id: string,
    event: React.FormEvent<HTMLInputElement>
  ) {
    props.onFilter(group, id, event.currentTarget.checked);
  }

  return (
    <aside className={props.className}>
      <AppHeading level={2} text="Filters" className="mb-4" />
      <AppHeading level={3} text="Status" className="mb-1" />
      <ul className="mb-4">
        {props.statuses.map((status) => (
          <li key={status.id}>
            <input
              type="checkbox"
              id={status.id}
              onClick={(event) => onFilter("status", status.id, event)}
            />{" "}
            <label className="select-none" htmlFor={status.id}>
              {status.label} ({status.amount})
            </label>
          </li>
        ))}
      </ul>
      <AppHeading level={3} text="Language" className="mb-1" />
      <ul>
        {props.languages.map((language) => (
          <li key={language.id}>
            <input
              type="checkbox"
              id={language.id}
              onClick={(event) => onFilter("language", language.id, event)}
            />{" "}
            <label className="select-none" htmlFor={language.id}>
              {language.label} ({language.amount})
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AppFilters;
