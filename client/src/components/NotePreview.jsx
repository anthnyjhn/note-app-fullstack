import propTypes from "prop-types";
import "../assets/styles/notepreview.css";

function NotePreview(props) {
  const notePreviewAction = (e) => {
    // window.location.href = "https://www.youtube.com/watch?v=mDGuie8s8eg";
    // redirect to http://localhost:5173/view/:noteid
  };

  return (
    <>
      <div className="notePreviewContainer" onClick={notePreviewAction}>
        <a
          href={`http://localhost:5173/view/${props.notePreviewData.note_id}`}
          className="noteTitle"
        >
          {props.notePreviewData.note_title}
        </a>

        <p className="noteContentPreview">{props.notePreviewData.note}</p>
      </div>
    </>
  );
}

NotePreview.propTypes = {
  notePreviewData: propTypes.object,
};

export default NotePreview;
