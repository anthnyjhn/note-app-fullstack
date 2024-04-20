import React from "react";

// Components
import Header from "../components/Header";
import NotePreview from "../components/NotePreview";

import "../assets/styles/home.css";

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <NotePreview />
        <NotePreview />
        <NotePreview />
      </div>
      <footer>
      </footer>
    </>
  );
}

export default Home;
