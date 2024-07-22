import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const phonetics = props.phonetic.phonetics;
  const phoneticTexts = phonetics.map((phonetic) => phonetic.text);
  const phoneticString = phoneticTexts.join(", ");

  return (
    <div className="Phonetic">
      <span className="text">{phoneticString}</span>
    </div>
  );
}
