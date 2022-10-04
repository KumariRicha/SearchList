import React from "react";
import Card from "../Card/Card";

function SearchList({filteredUsers}){
    const filtered =filteredUsers.map(user => <Card key={user.id} user={user}/>)
    return<div>
        {filtered}
    </div>
}
export default SearchList;