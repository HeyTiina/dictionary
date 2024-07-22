import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <ul className="Synonyms">
      {props.synonyms && props.synonyms.length > 0 && (
        <li>
          <strong>Synonyms:</strong>
        </li>
      )}
      {props.synonyms &&
        props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
    </ul>
  );
}
