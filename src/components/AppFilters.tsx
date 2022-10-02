import AppHeading from "./AppHeading";
import FormCheckbox from "./FormCheckbox";

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
  return (
    <aside className={props.className}>
      <AppHeading level={2} text="Filters" className="mb-4" />
      <AppHeading level={3} text="Status" className="mb-1" />
      <ul className="mb-4">
        {props.statuses.map((status) => (
          <li key={status.id}>
            <FormCheckbox
              id={status.id}
              label={`${status.label} (${status.amount})`}
              onInput={(checked) =>
                props.onFilter("status", status.id, checked)
              }
            />
          </li>
        ))}
      </ul>
      <AppHeading level={3} text="Language" className="mb-1" />
      <ul>
        {props.languages.map((language) => (
          <li key={language.id}>
            <FormCheckbox
              id={language.id}
              label={`${language.label} (${language.amount})`}
              onInput={(checked) =>
                props.onFilter("language", language.id, checked)
              }
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AppFilters;
