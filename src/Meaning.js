import React from "react";

export default function Meaning(props) {
  const meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>Part of Speech: {meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {meaning.definition}
      </p>

      {meaning.example && (
        <p>
          <strong>Example:</strong> "{meaning.example}"
        </p>
      )}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
        </p>
      )}

      {meaning.antonyms && meaning.antonyms.length > 0 && (
        <p>
          <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
