import classnames from "classnames";
import React from "react";
import { FiSearch } from "react-icons/fi";

type props = {
  className?: string;
  onSearch: (query: string) => void;
};

function AppSearch(props: props) {
  function onInput(event: React.FormEvent<HTMLInputElement>) {
    props.onSearch(event.currentTarget.value);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const className = classnames(
    "flex relative w-full sm:w-fit",
    props.className
  );

  return (
    <form className={className} action="" method="get" onSubmit={onSubmit}>
      <FiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3" />
      <input
        className={classnames(
          "border flex-1 p-2 bl-rounded rounded-lg bg-gray-200 w-full sm:w-128 pl-9"
        )}
        type="text"
        placeholder="Search"
        onInput={onInput}
      />
    </form>
  );
}

export default AppSearch;
