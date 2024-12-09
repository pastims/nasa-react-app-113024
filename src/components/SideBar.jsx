import React from 'react'

export default function SideBar(props) {
    const { handleToggleModal, data } = props
  return (
    <div className='sideBar'>
        <div className='bgOverlay'></div>
        <div className='sideBarContents'>
            <h2>{data?.title}</h2>
            <div className="descriptionContainer"></div>
            <div>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModal}><i className="fa-solid fa-right-long"></i></button>
        </div>
    </div>
  )
}
