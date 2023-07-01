import React, { useState } from "react";
import "./body.css";

function Body() {
  const [inputValue, setInputValue] = useState("");
  const [imageURL, setImageURL] = useState("");
  const env  = import.meta.env.VITE_APP_API_URL;

  const handleSubmit = (event) => {
    console.log("clicked");
    event.preventDefault();
    fetch(`${env}/q`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // We specify that we're sending JSON
      },
      body: JSON.stringify({ text: inputValue }), // And here is the data we're sending
    })
      .then((response) => response.text())
      .then((data) => setImageURL(data))
      .catch((error) => {
        console.error("Error", error);
      });
    console.log(imageURL);
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
      {imageURL && <img src={imageURL} alt="qr-image" />}
    </div>
  );
}
export default Body;
