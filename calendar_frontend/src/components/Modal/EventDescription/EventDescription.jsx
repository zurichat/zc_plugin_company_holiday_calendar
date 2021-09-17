import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "../../../../node_modules/react-quill/dist/quill.snow.css";
import "./EventDescription.css";

const EventDescription = ({ description, setDescription }) => {
  const handleChange = (e) => setDescription(e);

  return (
    <div>
      <span style={{ color: "#616061" }}>Description</span>
      <br />
      <div style={{ marginTop: ".9rem" }}>
        <EditorToolbar />
      </div>

      <ReactQuill
        formats={formats}
        modules={modules}
        value={description}
        onChange={handleChange}
        style={{
          padding: "0",
          margin: "0",
          color: "#616061",
          marginTop: "-.7rem",
        }}
      />
    </div>
  );
};

export default EventDescription;
