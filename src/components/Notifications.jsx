import React from 'react'
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineWarning, AiOutlineCloseCircle, AiOutlineClose} from "react-icons/ai";
import "./Notification.css";

const iconsStyle={marginRight:"10px"}
const icons = {
    success: <AiOutlineCheckCircle style={iconsStyle}/>,
    error: <AiOutlineCloseCircle  style={iconsStyle}/>,
    info: <AiOutlineInfoCircle style={iconsStyle}/>,
    warning: <AiOutlineWarning style={iconsStyle}/>
}

const Notifications = ({type="info", message, onClose=()=>{}}) => {
  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose className='closebtn' color='white' onClick={onClose}/>
    </div>
  )
}

export default Notifications
