import NoteHeader from "../components/NoteHeader";
import '../assets/styles/Create.css'

function Create() {
  return (
    <>
      <div className="container">
      <NoteHeader />
        <div className="input-container">
        
          <form action="" method="post">
            
            <input type="text" placeholder="Title" className="title-input"/>
            <textarea
              name=""
              id=""
              placeholder="Write something..." className="content-input"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
