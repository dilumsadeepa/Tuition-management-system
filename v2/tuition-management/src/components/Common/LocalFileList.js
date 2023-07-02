import React from 'react';
import Apiurl from '../Apiurl';

// function LocalFileList({ fileNames }) {
//     console.log("fileNames from localFileList:", fileNames);
//     if (!Array.isArray(fileNames)) {
//         return null; // or return an error message, etc.
//       }
//   return (
//     <div>
//       {fileNames && fileNames.split(",").map((fileName, index) => {
//         // Construct the full file URL
//         const fileUrl = `${Apiurl}/uploads/notices/${fileName}`;

//         console.log("fileUrl", fileUrl);

//         // Extract the file extension from the file name
//         const extension = fileName.split('.').pop();
//         // Render the file with the appropriate element based on the file extension
//         if (extension.toLowerCase() === 'jpg' || extension.toLowerCase() === 'jpeg' || extension.toLowerCase() === 'png' || extension.toLowerCase() === 'gif') {
//           return (
//             <div key={index} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
//               <a href={fileUrl} className="" data-fancybox="images" data-caption={extension.toUpperCase()} File>
//                 <img className="img-thumbnail" src={fileUrl} alt={fileName} />
//               </a>
//             </div>
//           );
//         } else if (extension.toLowerCase() === 'mp4' || extension.toLowerCase() === 'webm' || extension.toLowerCase() === 'mkv') {
//           return (
//             <div key={index} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
//               <div className="video-thumbnail">
//                 <a href={fileUrl} className="" data-fancybox="images" data-caption={extension.toUpperCase()} File>
//                   <video src={fileUrl} controls muted />
//                 </a>
//               </div>
//             </div>
//           );
//         } else if (extension.toLowerCase() === 'mp3' || extension.toLowerCase() === 'wav') {
//           return (
//             <div key={index}>
//               <audio src={fileUrl} controls />
//               <span>{extension.toUpperCase()} File</span>
//             </div>
//           );
//         } else if (extension.toLowerCase() === 'pdf') {
//           return (
//             <div key={index}>
//               <ul className="list-group">
//                 <li className="list-group-item list-group-item-info"><i className="fa-regular fa-file-pdf me-2"></i> {extension.toUpperCase()} File <i className="fa-solid fa-arrow-right mx-2"></i> <small>{fileName}</small> <a href={fileUrl} data-fancybox="images" data-caption={extension.toUpperCase()} download><i className="fa-solid fa-arrow-up-right-from-square"></i></a></li>
//               </ul>
//             </div>
//           );
//         } else {
//           return (
//             <div key={index}>
//               <ul className="list-group">
//                 <li className="list-group-item list-group-item-info"><i className="fa-solid fa-file-video me-2"></i> {extension.toUpperCase()} File <i className="fa-solid fa-arrow-right mx-2"></i> <small>{fileName}</small>  <a href={fileUrl} download><i className="fa-solid fa-arrow-up-right-from-square"></i></a></li>
//               </ul>
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// }

// function LocalFileList({ fileNames }) {
//     console.log("fileNames from localFileList:", fileNames);
//     if (!Array.isArray(fileNames)) {
//       return "not an array"; // or return an error message, etc.
//     }
//     return (
//       <div>
//         {fileNames.map((fileName, index) => (
//           <div key={index}>
//             {fileName}
//           </div>
//         ))}
//       </div>
//     );
//   }

function LocalFileList({ fileNames }) {
    console.log(fileNames); // add this line to check if the prop is being passed correctly
    
    if (!Array.isArray(fileNames)) {
      return null; // or return an error message, etc.
    }
    
    return (
      <div>
        <h5 className='my-5'>Local Server Storage</h5>
        {fileNames.map((fileName, index) => {
          //         const fileUrl = `${Apiurl}/uploads/notices/${fileName}`;
          const fileUrl = `${Apiurl}/uploads/Galleries/${fileName}`;
          const extension = fileName.split('.').pop().toLowerCase();
          
          if (['jpg', 'jpeg', 'png', 'gif'].includes(extension.toLowerCase())) {
            return (
              <div key={index} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
                <a href={fileUrl} className="" data-fancybox="images" data-caption={fileName.toUpperCase()} File>
                  <img className="img-thumbnail" src={fileUrl} alt={fileName} />
                </a>
              </div>
            );
          } else if (['mp4', 'webm', 'mkv'].includes(extension.toLowerCase())) {
            return (
              <div key={index} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
                <div className="video-thumbnail">
                  <a href={fileUrl} className="" data-fancybox="images" data-caption={fileName.toUpperCase()} File>
                    <video src={fileUrl} controls muted />
                  </a>
                </div>
              </div>
            );
          } else if (['mp3', 'wav'].includes(extension.toLowerCase())) {
            return (
              <div key={index}>
                <audio src={fileUrl} controls />
                <span>{extension.toUpperCase()} File</span>
              </div>
            );
          } else if (extension.toLowerCase() === 'pdf') {
            return (
              <div key={index}>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info"><i className="fa-regular fa-file-pdf me-2"></i> {extension.toUpperCase()} File <i className="fa-solid fa-arrow-right mx-2"></i> <small>{fileName}</small> <a href={fileUrl} data-fancybox="images" data-caption={extension.toUpperCase()} download><i className="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                </ul>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info"><i className="fa-solid fa-file-video me-2"></i> {extension.toUpperCase()} File <i className="fa-solid fa-arrow-right mx-2"></i> <small>{fileName}</small>  <a href={fileUrl} download><i className="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                </ul>
              </div>
            );
          }
        })}
      </div>
    );
  }

export default LocalFileList;