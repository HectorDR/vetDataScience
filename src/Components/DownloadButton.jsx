import React from 'react'
import {saveAs} from "file-saver"
import arrow from "Media/images/DownloadArrow.svg"
import folder from "Media/images/DownloadFolder.svg"
const DownloadButton = ({link}) => {
  const downloader = (link) => {
    saveAs(link)
  }
  return (
    <div className='download_button' onClick={() => downloader(link)}>
      <img src={arrow} alt="flecha de descarga" className='download_button__Arrow '/>
      <img src={folder} alt="carpeta de descarga" className='download_button__Folder '/>
    </div>
  )
}

export default DownloadButton