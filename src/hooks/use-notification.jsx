import Notifications from "../components/Notifications";
import{ useCallback, useState } from "react";

const useNotification =(position="top-right")=>{
const [notification, setNotification] = useState(null);
let timer;

const triggerNotification = useCallback((notificationProps)=>{
    clearInterval(timer);
    setNotification(notificationProps);
   timer=  setTimeout(() => {
        setNotification(null);
    }, notificationProps.duration);
},[]);

const NotificationComponent = notification ? (
     <div className={`${position}`}>
        <Notifications {...notification}/>
     </div>
    ):null;
    return {NotificationComponent, triggerNotification}

}

export default useNotification;