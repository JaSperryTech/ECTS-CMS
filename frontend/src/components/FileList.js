// Example Folder List Component
import React from "react";
import { Link } from "react-router-dom";

const FolderList = ({ folders }) => (
  <ul>
    {folders.map((folder) => (
      <li key={folder.id}>
        <Link to={`/files/${folder.id}`}>{folder.name}</Link>
      </li>
    ))}
  </ul>
);
