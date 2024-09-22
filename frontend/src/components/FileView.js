// FileView.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FileView = () => {
  const { folderId } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          `/api/v1/listFiles?folder=${folderId}`
        );
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [folderId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Files in Folder</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} (Version: {file.version})
            {/* Add links to view files, e.g., a link to open documents */}
            {/* You can customize this further based on file type */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileView;
