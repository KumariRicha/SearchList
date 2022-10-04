import React from "react";
import "./Card.css";
function Card({ user }) {
  return (
    <div className="card">
      <h2>{user.id}</h2>
      <div>{user.name}</div>
      <div>
        <span>{user.address}, {user.pincode}</span>
      </div>
    </div>
  );
}
export default Card;
