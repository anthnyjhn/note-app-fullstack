import NoteHeader from "../components/NoteHeader";

function Create() {
  return (
    <>
      <div className="container">
        <NoteHeader />
        <div className="input-container">
          <form action="" method="post">
            <input type="text" placeholder="Title" value="" />
            <textarea
              name=""
              id=""
              placeholder="What's on your mind?"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
