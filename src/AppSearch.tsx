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
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSearch(query);
  }

  return (
    <form
      className={classnames(
        "AppSearch flex relative w-full sm:w-fit",
        props.className
      )}
      action=""
      method="get"
      onSubmit={onSubmit}
    >
      <FiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3" />
      <input
        className={classnames(
          "border flex-1 p-2 bl-rounded rounded-lg bg-gray-200 w-full sm:w-64 sm:focus:w-96 transition-width duration-300 ease-in-out pl-9",
          { "lg:w-96": Boolean(query.length) }
        )}
        type="text"
        placeholder="Search"
        onInput={onInput}
      />
    </form>
  );
}

export default AppSearch;
