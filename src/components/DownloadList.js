import React from 'react'
import BackButton from './BackButton.js'
import {Link} from 'react-router-dom'


const DownloadList = (props) => {
  return (
    <div className={'downloadList slideInFromTop'}>
        <div className={'downloadListHeader'}>
            <BackButton
            history={props.history} 
            cssStyle={'downloadListClose'}>
            <i class="material-icons">
              close
            </i>
            </BackButton>
            <h1>LIST OF FORMATS</h1>
            <p>SAVE AS FROM HERE</p>
        </div>
        <div className={'listContainer'}>
            {(typeof props.videoSelect.formats =="object")&&props.videoSelect.formats.map((item,index)=>
            <div value={index}>
                <p>{'type: '+item.type}</p>
                <p>{' quality: '+ item.quality+ ' '+(item.videoOnly?'only video':'')}</p>
                <a href={item.url} Download={`${props.videoName}.mp4`}>VIDEO</a>
            </div>
            )}
        </div>    
    </div>
  )
}

export default DownloadList
