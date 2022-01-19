import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App" onClick={() => console.log("Appe tıklandı")}>
      <h1>React Dersleri</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit edildi");
        }}
      >
        {" "}
        İsminiz{" "}
        <input
          onBlur={(e) => {
            const name = e.target.value;
            name.length < 6
              ? console.log("6dan küçük olamaz")
              : console.log("Aferin");
          }}
          onClick={(e) => {
            console.log("İnputa tıklandı"), e.stopPropagation();
          }}
          onFocus={() => console.log("İmleç input içinde")}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
        />
        <p>
          Telefon No:
          <input
            onClick={(e) => {
              console.log("Tele tıklandı"), e.stopPropagation();
            }}
            type="number"
          />
        </p>
      </form>
    </div>
  );
}
