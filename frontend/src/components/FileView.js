import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FileView = () => {
  const { folderId } = useParams(); // Get the folderId from the URL
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/listFiles?folder=${folderId}`
        );
        console.log(response.data); // Log the response for debugging
        setFiles(response.data); // Set the files directly since it's an array
      } catch (error) {
        console.error("Error Fetching the Files", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [folderId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Files in Folder: {folderId}</h1>
      {files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              {file.name} (Version: {file.version})
            </li>
          ))}
        </ul>
      ) : (
        <div>No files found in this folder.</div>
      )}
    </div>
  );
};

export default FileView;
