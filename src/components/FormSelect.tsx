import classnames from "classnames";
import React from "react";

type option = {
  value: any;
  name: string;
};

type props = {
  className?: string;
  id?: string;
  options: option[];
  onInput: (type: string) => void;
};

function FormSelect(props: props) {
  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    props.onInput(event.currentTarget.value);
  }

  const className = classnames("border ml-4 p-2 rounded-lg", props.className);

  return (
    <select id={props.id} className={className} onInput={onInput}>
      {props.options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default FormSelect;
