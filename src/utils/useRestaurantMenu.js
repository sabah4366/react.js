import { useEffect, useState } from "react"
import { MENU_CDN } from "./constants"

const useRestaurantMenu = (resId) => {
    const [restaurantMenus,setRestaurantMenus] = useState(null)

    useEffect(() => {
        fetchRestaurantMenus()
    },[])

    const fetchRestaurantMenus = async () => {
        const data = await fetch(MENU_CDN + resId)
        const json = await data.json()
        setRestaurantMenus(json.data)

    }

    return restaurantMenus
}

export default useRestaurantMenu;