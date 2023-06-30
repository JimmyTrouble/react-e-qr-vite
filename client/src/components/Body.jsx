import React, { useState } from "react";
import "./body.css";

function Body() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    console.log("clicked");
    event.preventDefault();
    fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // We specify that we're sending JSON
      },
      body: JSON.stringify({ text: inputValue }), // And here is the data we're sending
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error", error);
      });
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input placeholder="type" value={inputValue} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Body;
