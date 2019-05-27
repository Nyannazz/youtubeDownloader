import React from 'react'

const FormatSelect = ({onSubmit,onChange,quickType,typeSelect,videoInfo,videoURL}) => {
  return (
    <form onSubmit={onSubmit} className={'typeSelect slideInFromTop'}>
        <div>SELECT A FORMAT</div>
        <div className={'radioButtons'}>
        <input id='quickTypeSelect1' onChange={onChange} checked={quickType==="1"} value={"1"} name='quickType' type='radio'></input>
            <label htmlFor='quickTypeSelect1'>HD VIDEO</label>
            <input id='quickTypeSelect2' onChange={onChange} checked={quickType==="2"} value={"2"} name='quickType' type='radio'></input>
            <label htmlFor='quickTypeSelect2'>BEST AUDIO</label>
            <input id='quickTypeSelect3' onChange={onChange} checked={quickType==="3"} value={"3"} name='quickType' type='radio'></input>
            <label htmlFor='quickTypeSelect3'>SMALLEST AUDIO</label>
        </div>       
        <div className={'advancedType'}>
            <div>ADVANCED FORMATS</div>
            <select name='typeSelect' onChange={onChange} value={typeSelect}>
                {(typeof videoInfo.formats =="object")&&videoInfo.formats.map((item,index)=>
                <option value={index}>{'type: '+item.type +' quality: '+ item.quality+ ' '+(item.videoOnly?'only video':'')}</option>
                )}
            </select>
        </div>
        <a className={'undecoratedLink'} target='blank' href={videoURL} download>
          <div className={'roundedButton centerAll'} value='DOWNLOAD' type="submit">DOWNLOAD</div>
        </a>
    </form>
  )
}

export default FormatSelect
