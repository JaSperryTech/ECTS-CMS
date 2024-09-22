import React from 'react';
import { Link } from 'react-router-dom';

const FolderList = ({ folders }) => {
  const renderFolders = (folders) => {
    return (
      <ul>
        {folders.map(folder => {
          const subfolders = folder.files?.filter(file => 
            file.mimeType === 'application/vnd.google-apps.folder'
          );

          return (
            <li key={folder.id}>
              {subfolders && subfolders.length > 0 && (
                <>
                  {subfolders.map(subfolder => (
                    <div key={subfolder.id}>
                      <Link to={`/files/${subfolder.id}`}>
                        {subfolder.name}
                      </Link>
                    </div>
                  ))}
                  {renderFolders(subfolders)} {/* Render nested folders recursively */}
                </>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return <div>{renderFolders(folders)}</div>;
};

export default FolderList;
