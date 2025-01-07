import { useState } from "react";

export const useDashboardModal = () =>{
    const [isShowDashboardModal, setIsShowDashboardModal] = useState(false);

    const handleDashboardModal = () => {
        setIsShowDashboardModal(true);
    };

    const closeDashboardModal = () =>{
        setIsShowDashboardModal(false)
    };

    return {
        isShowDashboardModal, 
        handleDashboardModal,
        closeDashboardModal
    };
}