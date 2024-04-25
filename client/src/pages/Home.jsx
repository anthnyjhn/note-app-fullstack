import React, { useState, useEffect } from "react";
import Axios from "axios";

// Components
import Header from "../components/Header";
import NotePreview from "../components/NotePreview";

import "../assets/styles/home.css";
import axios from "axios";

function Home() {
  const [notesData, SetNoteData] = useState([{}]);
  const listApi = "http://localhost:3000/api/list";

  useEffect(() => {
    const GetNotesData = async () => {
      try {
        await axios
          .get(listApi)
          .then((res) => {
            SetNoteData(res.data);
          })
          .catch((err) => {
            throw err;
          });
      } catch (err) {
        if (err) throw err;
      }
    };

    GetNotesData();
  }, []);

  const notesPreviewList = notesData.map((v, index) => (
    <NotePreview key={index} notePreviewData={v} />
  ));

  return (
    <>
      <div className="container">
        <Header />
       {notesPreviewList}
      </div>
      <footer></footer>
    </>
  );
}

export default Home;
