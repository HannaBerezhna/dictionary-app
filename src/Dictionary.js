import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    alert(keyword);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="🔍" />
        <input
          type="search"
          placeholder="What is ...?"
          onChange={updateKeyword}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
