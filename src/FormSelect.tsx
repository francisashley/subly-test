import React from "react";
import classnames from "classnames";

type option = {
  value: any;
  name: string;
};

type props = {
  className?: string;
  options: option[];
  onInput: () => void;
};

function FormSelect(props: props) {
  return (
    <select
      className={classnames("border ml-4 p-2 rounded-lg", props.className)}
      onInput={props.onInput}
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
