import { useState } from "react";

export const useDashboardModal = () =>{
    const [isShowDashboardModal, setIsShowDashboardModal] = useState(false);

    const handleDashboardModal = () => {
        setIsShowDashboardModal((prev) => !prev );
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