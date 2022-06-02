import React from 'react'
import { faAlignRight, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DownloadButton = () => {
  return (
    <div className='download_button'>
    <FontAwesomeIcon icon={faCloudArrowDown} size={'2x'}/>
    </div>
  )
}

export default DownloadButton