import React from "react";

function AppMainHeader() {
  return (
    <header className="AppMainHeader">
      <div>
        Sort by
        <select>
          <option>Name</option>
          <option>Udated</option>
        </select>
      </div>
      <div>Search</div>
      <input type="search" name="" id="" />
    </header>
  );
}

export default AppMainHeader;
