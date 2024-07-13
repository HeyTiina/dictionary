import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.slice(0, 3).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">Definition: {definition.definition}</div>

            <div className="example">{definition.example}</div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
