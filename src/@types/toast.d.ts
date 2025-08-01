interface IToastData {
    title: string;
    description: string;
    type: "error" | "warn" | "info";
}

interface IToastSettings {
    disableDescription: boolean;
    hideCloseButton: boolean;
    size: "small" | "large";
}
