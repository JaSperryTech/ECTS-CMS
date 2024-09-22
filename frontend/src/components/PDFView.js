import React from "react";
import { useParams } from "react-router-dom";

const PDFView = () => {
  const { folderId, pdfId } = useParams();

  // Construct the Google Drive Viewer URL for inline PDF display
  const pdfViewerUrl = `https://drive.google.com/file/d/${pdfId}/preview`;

  return (
    <div>
      <h1>PDF in Folder: {folderId}</h1>
      <iframe
        src={pdfViewerUrl}
        title="PDF Viewer"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PDFView;
