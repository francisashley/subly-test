import React from "react";
import classnames from "classnames";

type option = {
  value: any;
  name: string;
};

type props = {
  className?: string;
  options: option[];
  onInput: (type: string) => void;
};

function FormSelect(props: props) {
  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    props.onInput(event.currentTarget.value);
  }

  return (
    <select
      className={classnames("border ml-4 p-2 rounded-lg", props.className)}
      onInput={onInput}
    >
      {props.options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default FormSelect;
