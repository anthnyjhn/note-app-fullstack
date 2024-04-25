import Axios from "axios";
import React, { useState } from "react";
import NoteHeader from "../components/NoteHeader";
import "../assets/styles/Create.css";

function Create() {
  const [noteContent, SetNoteContent] = useState("");
  const [noteTitle, SetNoteTitle] = useState("");

  const TitleInputAction = (e) => {
    SetNoteTitle(e.target.value);
  };

  const ContentInputAction = (e) => {
    SetNoteContent(e.target.value);
  };

  const SaveAllInput = async () => {
    const _data = {
      _noteTitle: noteTitle,
      _noteContent: noteContent,
    };

    try {
      await Axios.post("http://localhost:3000/api/create", _data).then(
        (res) => {
          window.location.href = `http://localhost:5173/view/${res.data}`;
        }
      );
    } catch (err) {
      if (err) throw err;
    }

    window.URL.hre;
  };

  return (
    <>
      <div className="container">
        <NoteHeader />
        <button onClick={SaveAllInput}>Save</button>
        <div className="input-container">
          <input
            type="text"
            placeholder="Title"
            className="title-input"
            id="title-input"
            onChange={TitleInputAction}
          />
          <textarea
            name=""
            id="content-input"
            placeholder="Write something..."
            className="content-input"
            onChange={ContentInputAction}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Create;
