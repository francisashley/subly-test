type props = {
  className?: string;
  id: string;
  label: string;
  onInput: (checked: boolean) => void;
};

function FormCheckbox(props: props) {
  function onInput(event: React.FormEvent<HTMLInputElement>) {
    props.onInput(event.currentTarget.checked);
  }

  return (
    <div>
      <input
        type="checkbox"
        id={props.id}
        onClick={(event) => onInput(event)}
      />{" "}
      <label className="select-none" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default FormCheckbox;
