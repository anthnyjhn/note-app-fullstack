import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteHeader from "../components/NoteHeader";
const View = () => {
  const { note_id } = useParams();
  const apiEndpoint = `http://localhost:5173/api/view/${note_id}`;
  const [noteData, SetNoteData] = useState({});

  useEffect(() => {
    const getNoteData = async () => {
      try {
        axios.get(apiEndpoint).then((res) => {
          SetNoteData(res.data[0]);
        });
      } catch (err) {
        if (err) throw err;
      }
    };
    getNoteData();
  }, []);

  console.log(noteData);

  return (
    <>
      <NoteHeader />
      <div className="container">
        <div className="input-container">
          <h1 placeholder="Title" className="title-input" id="title-input">
            {noteData.note}
          </h1>
          <p
            id="content-input"
            placeholder="Write something..."
            className="content-input"
            readOnly
          >
            {noteData.note_title}
          </p>
        </div>
      </div>
    </>
  );
};

export default View;
