import React, { useState, useEffect } from 'react';
import FolderList from '../components/FileList';

const Library = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Transform the data into an array format, only include those with files
        const folderArray = Object.entries(data)
          .filter(([, files]) => Array.isArray(files) && files.length > 0) // Check if files is an array
          .map(([id, files]) => ({
            id,
            files,
          }));

        console.log(folderArray); // Log the transformed array
        setFolders(folderArray);
      } catch (error) {
        console.error('Failed to fetch folders:', error);
      }
    };

    fetchFolders();
  }, []);

  return (
    <div>
      <h1>Folder List</h1>
      <FolderList folders={folders} />
    </div>
  );
};

export default Library;
