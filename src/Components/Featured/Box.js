import React from 'react'
import './Featured.css'

function Box({title, head, para}) {
  return (
    <div className='featured-engagements-items'>
        <div className='title'>
            {title}
        </div>

        <div className='head'>{head}</div>

        <div className='para'>{para}</div>
    </div>
  )
}

export default Box