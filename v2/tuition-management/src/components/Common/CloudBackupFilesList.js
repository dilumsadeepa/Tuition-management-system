import React from 'react';


function CloudBackupFilesList({ cloudFiles }) {
    // console.log('CloudBackupFilesList: ', cloudFiles);

  const renderFiles = () => {
    return cloudFiles.map((url, index) => {
      // Extract the file name from the URL
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      // Extract the file extension from the file name
      const extension = fileName.split('.').pop();
      // Render the file with the appropriate element based on the file extension
      if (extension.toLowerCase() === 'jpg' || extension.toLowerCase() === 'jpeg' || extension.toLowerCase() === 'png' || extension.toLowerCase() === 'gif') {
        return (
            <div key={index} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
            <a href={url} className="" data-fancybox="images" data-caption={extension.toUpperCase()} File>
            <img className="img-thumbnail" src={url} alt={fileName} /> 
            </a>
            </div>
        );
        } else if (extension.toLowerCase() === 'mp4' || extension.toLowerCase() === 'webm' || extension.toLowerCase() === 'mkv') {
        return (
     
        <div key={index} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
          <div className="video-thumbnail">
            <a href={url} className="" data-fancybox="images" data-caption={extension.toUpperCase()} File>
              <video src={url} controls muted />
            </a>
          </div>
          </div>
        );
      } else if (extension.toLowerCase() === 'mp3' || extension.toLowerCase() === 'wav') {
        return (
          <div key={index}>
            <audio src={url} controls />
            <span>{extension.toUpperCase()} File</span>
          </div>
        );
      } else if (extension.toLowerCase() === 'pdf') {
        return (
          // <div key={index}>
          //    <a href={url} className="">
          //           <p>{extension.toUpperCase()} File</p>
          //    </a>
          //   <iframe src={url} height="400px" width="300"></iframe>
          // </div>

          <div key={index}>
          <ul className="list-group">
            <li className="list-group-item list-group-item-info"><i class="fa-regular fa-file-pdf me-2"></i> {extension.toUpperCase()} File <i class="fa-solid fa-arrow-right mx-2"></i> <small>{url}</small>  <a href={url}  data-fancybox="images" data-caption={extension.toUpperCase()} download><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  </li>
            </ul>
        </div>
        );
      } else {
        return (
          <div key={index}>
            <ul className="list-group">
              <li className="list-group-item list-group-item-info"><i class="fa-solid fa-file-video me-2"></i> {extension.toUpperCase()} File <i class="fa-solid fa-arrow-right mx-2"></i> <small>{url}</small>  <a href={url} download><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  </li>
              </ul>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <h5 className='my-5'>Cloud Backup Storage</h5>
      {renderFiles()}
    </div>
  );
}

export default CloudBackupFilesList;