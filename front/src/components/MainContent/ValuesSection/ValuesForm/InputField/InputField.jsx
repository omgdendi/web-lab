import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
    return (
        <div className={styles.fieldContainer}>
            <span className={styles.name}>
                {props.name}
            </span>
            <input
                type="text"
                className={styles.inputField}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={`Число от ${props.min} до ${props.max}`}
                value={props.value}
            />
        </div>
    )
}

export default InputField;