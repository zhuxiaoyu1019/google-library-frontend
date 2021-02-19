import React from "react";
import Paper from "@material-ui/core/Paper";
import "./style.css";

export default function Header() {
  return (
    <Paper square className="paper">
      <h1>Google Books Search</h1>
      <h3>Search for and Save Books of Interest.</h3>
    </Paper>
  );
}
