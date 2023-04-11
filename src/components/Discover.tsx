import React from 'react'
import ShazamAPI from '../Api'
import"./Discover.css";

const Discover = () => {
  return (
    <div >
        <div className="released-this-week" >
        <p className="para" style={{marginLeft : '10px' , marginTop : ' 12px' }}>Released this week </p>
        <hr />
        </div>
        <div>
         <ShazamAPI />
        </div>
    </div>
  )
}

export default Discover