import { useMemo } from "react";
import { useAppFeatures } from "../../context/appWrapper";
import { X } from "@phosphor-icons/react";
import { RenderIcon } from "./RenderIcon";

export const Toast = () => {
    const {
        toastData,
        toastEnabled,
        toastConfig: { disableDescription, size },
    } = useAppFeatures();

    const dynamicStyles = useMemo(() => {
        if (size === "small") {
            return {
                width: `30vw`,
                margin: "12px",
            };
        }

        return {
            width: "100vw",
        };
    }, [size]);

    if (!toastEnabled) return null;
    return (
        <div style={dynamicStyles}>
            {<RenderIcon type={toastData.type} />}
            <div>
                <strong>{toastData.title}</strong>
                {!disableDescription && <p>{toastData.description}</p>}
            </div>
            <X size={32} />
        </div>
    );
};
