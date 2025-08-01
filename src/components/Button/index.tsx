import styles from "./styles.module.scss";

interface IProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    text: string;
    variation: "primary" | "secondary";
}

export const Button = ({ text, variation }: IProps) => {
    return (
        <button data-variation={variation} className={styles.button}>
            {text}
        </button>
    );
};
