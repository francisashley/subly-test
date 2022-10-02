import React, { useState } from "react";
import classnames from "classnames";
import { FiSearch } from "react-icons/fi";

type props = {
  className?: string;
  onSearch: (query: string) => void;
};

function AppSearch(props: props) {
  const [query, setQuery] = useState("");

  function onInput(event: React.FormEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
    props.onSearch(event.currentTarget.value);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSearch(query);
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
