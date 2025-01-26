import React, { useState } from 'react'
import { restaurantMenuData } from '../utils/restaurantMenuData'

const useRestaurantMenu = (resid) =>{
    let [resMenuData, setResMenuData] = useState(restaurantMenuData);
    const resInfo = resMenuData[resid-1];
    return resInfo;
}
export default useRestaurantMenu