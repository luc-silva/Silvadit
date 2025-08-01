import styles from "./styles.module.scss"

interface IProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}

export const Input = (props: IProps) => {
    return <input {...props} className={styles.input}/>;
};
