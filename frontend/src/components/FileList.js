import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FolderList = ({ folders }) => {
  // Log the folders to check if the data is correct
  useEffect(() => {
    console.log("Folders received:", folders);
  }, [folders]);

  return (
    <ul>
      {folders.length > 0 ? (
        folders.map(folder => {
          // Find the CMS folder
          const cmsFolder = folder.files.find(file => file.name === 'CMS' && file.mimeType === 'application/vnd.google-apps.folder');
          return (
            <li key={folder.id}>
              <Link to={`/files/${folder.id}`}>
                {cmsFolder ? cmsFolder.name : 'Unnamed Folder'}
              </Link>
            </li>
          );
        })
      ) : (
        <li>No folders found.</li>  // Display a message if no folders are available
      )}
    </ul>
  );
};

export default FolderList;
