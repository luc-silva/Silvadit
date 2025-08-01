import { useToast } from "../useToast";

export const useApp = () => {
    const features = {
        ...useToast(),
    };

    return features;
};
