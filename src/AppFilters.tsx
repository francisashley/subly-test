
export type filter = {
  id: string;
  label: string;
};

type props = {
  statuses: filter[];
  languages: filter[];
};

function AppFilters(props: props) {
  return (
    <aside className="AppFilters">
      <h2>Filters</h2>
      <h3>Status</h3>
      <ul>
        {props.statuses.map((status) => (
          <li key={status.id}>
            <input type="checkbox" id={status.id} />{" "}
            <label htmlFor={status.id}>{status.label}</label>
          </li>
        ))}
      </ul>
      <h3>Language</h3>
      <ul>
        {props.languages.map((language) => (
          <li key={language.id}>
            <input type="checkbox" id={language.id} />{" "}
            <label htmlFor={language.id}>{language.label}</label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AppFilters;
