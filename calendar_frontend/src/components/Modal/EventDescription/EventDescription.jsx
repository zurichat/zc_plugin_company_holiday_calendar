import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "../../../../node_modules/react-quill/dist/quill.snow.css";
import "./EventDescription.css";
const EventDescription = () => {
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    setDescription(e);
    console.log(e);
  };
  return (
    <div>
      <span>Description</span>
      <EditorToolbar />
      <ReactQuill
        formats={formats}
        modules={modules}
        placeholder="Enter text here"
        value={description}
        onChange={handleChange}
      />
    </div>
  );
};

export default EventDescription;
