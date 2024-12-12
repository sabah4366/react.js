import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [isOnlineStatus,setIsOnlineStatus] = useState(true)

    useEffect(() => {

        const handleOnline = () => setIsOnlineStatus(true)
        const handleOffline = () => setIsOnlineStatus(false)

        window.addEventListener("online",handleOnline );
        window.addEventListener("offline",handleOffline );

    },[])



    return isOnlineStatus
}

export default useOnlineStatus