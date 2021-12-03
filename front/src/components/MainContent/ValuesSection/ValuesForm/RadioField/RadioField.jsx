import React from "react";
import styles from "./RadioField.module.scss";

const RadioField = (props) => {
    return (
        <div className={styles.form_radio}>
            <input
                type="radio"
                onChange={(e) => props.onChange(e.target.value)}
                id={`R_${props.value}`}
                checked={props.r_current == props.value}
                value={props.value}
            />
            <label htmlFor={`R_${props.value}`}>{props.value}</label>
        </div>
    )
}

export default RadioField;