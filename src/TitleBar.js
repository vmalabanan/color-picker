import React from "react";
import ColorPicker from "./ColorPicker";

export default function TitleBar() {
  return (
    <div className="title-bar">
      <ColorPicker />
      <h1>art by color</h1>
    </div>
  );
}
