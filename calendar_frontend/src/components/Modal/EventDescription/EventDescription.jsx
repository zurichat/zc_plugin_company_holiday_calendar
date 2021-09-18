import React, { useState } from "react";
import ReactQuill from "react-quill";
import { GrAttachment } from "react-icons/gr";
import { ClickAwayListener } from "@material-ui/core";

import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "../../../../node_modules/react-quill/dist/quill.snow.css";
import "./EventDescription.css";

const EventDescription = ({
  description,
  setDescription,
  imgLink,
  setImgLink,
}) => {
  const handleChange = (e) => setDescription(e);

  const [showForm, setShowForm] = useState(false);

  const handleClickAway = () => setShowForm(false);

  return (
    <div>
      <span style={{ color: "#616061" }}>Description</span>
      <br />
      <div style={{ marginTop: ".8rem", position: "relative", left: "1.7rem" }}>
        <EditorToolbar />
        <span
          style={{
            cursor: "pointer",
            position: "absolute",
            bottom: ".5rem",
            left: "-1.5rem",
          }}
          onClick={() => setShowForm(!showForm)}
        >
          <GrAttachment />
        </span>
      </div>

      {showForm && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <input
            placeholder="Input a Link to an Image"
            type="text"
            name="imgLink"
            id="imgLink"
            value={imgLink}
            onChange={(evt) => setImgLink(evt.target.value)}
            style={{
              width: "70%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid #decece",
            }}
          />
        </ClickAwayListener>
      )}

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
