import { useEffect, useState } from "react";

const toastDefaultData: IToastData = {
    title: "Houve um erro.",
    description: "Contate o suporte caso o erro persista.",
    type: "error",
};

const toastDefaultSettings: IToastSettings = {
    disableDescription: false,
    hideCloseButton: false,
    size: "small",
};

export const useToast = () => {
    const [toastData, setToastData] = useState<IToastData>(toastDefaultData);
    const [toastConfig, setToastConfig] =
        useState<IToastSettings>(toastDefaultSettings);
    const [toastEnabled, setToastEnabled] = useState(false);

    const cleanUpToast = () => {
        setToastData(toastDefaultData);
    };

    const handleToast = (data: IToastData, config?: IToastSettings) => {
        setToastData(data);
        if (config) {
            setToastConfig(config);
        }

        setToastEnabled(true);
    };

    useEffect(() => {
        if (toastEnabled) {
            setTimeout(() => {
                setToastEnabled(false);
            }, 6000);
        }
    }, [toastEnabled]);

    return {
        cleanUpToast,
        toastData,
        setToastData,
        toastConfig,
        setToastConfig,
        toastEnabled,
        handleToast,
    };
};
