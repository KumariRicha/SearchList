import React, { useState } from "react";
import SearchList from "./SearchList";
import Scroll from "../Scroll";
import "./Search.css";

function Search({ userDetails }) {
  const [searchInput, setSearchInput] = useState("");
  const filteredUsers = userDetails.filter(user => {
    return (
      user.id.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.address.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.pincode.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.items[0].toLowerCase().includes(searchInput.toLowerCase())
    );
  });
  const getSearchInput = event => {
    setSearchInput(event.target.value);
  };
  function searchList() {
    if(searchInput){
      return (
        <Scroll>
          <SearchList filteredUsers={filteredUsers} />
        </Scroll>
      );
    }
    
  }
  return (

    <div className="search-container">
      <input
        className="search-input"
        type="search"
        name="search"
        placeholder="Search users by ID, address,name,pincode or items"
        onChange={getSearchInput}
      />
      {searchList()}
    </div>
  );
}

export default Search;
