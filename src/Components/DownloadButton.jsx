import React from 'react'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {saveAs} from "file-saver"
const DownloadButton = ({link}) => {
  const downloader = (link) => {
    saveAs(link)
  }
  return (
    <div className='download_button' onClick={() => downloader(link)}>
    <FontAwesomeIcon icon={faCloudArrowDown} size={'2x'}/>
    </div>
  )
}

export default DownloadButton