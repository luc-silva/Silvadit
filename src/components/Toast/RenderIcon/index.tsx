import { Info, Question, Warning } from "@phosphor-icons/react";

interface IProps {
    type: "error" | "warn" | "info";
}
export const RenderIcon = ({ type }: IProps) => {
    if (type === "error") return <Warning size={32} />;
    if (type === "info") return <Info size={32} />;
    if (type === "warn") return <Question size={32} />;
};
