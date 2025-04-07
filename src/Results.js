import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>Word: {props.results.word}</h2>
        <h2>PartOfSpeech: {props.results.meanings[0].partOfSpeech}</h2>
        <h2>Definition: {props.results.meanings[0].definition}</h2>
        <h2>Example: {props.results.meanings[0].example}</h2>
        <h2>Synonyms: {props.results.meanings[0].synonyms}</h2>
        <h2>Antonyms: {props.results.meanings[0].antonyms}</h2>
      </div>
    );
  } else {
    return null;
  }
}
