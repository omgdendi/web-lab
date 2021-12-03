import React, {useEffect, useState} from "react";
import InputField from "./InputField/InputField";
import RadioField from "./RadioField/RadioField";
import styles from "./ValuesForn.module.scss";

const checkValues = (values) => {
    const x = values.x;
    const y = values.y;

    if (!x && !y) {
        return 'Введите координаты точки';
    }

    if (!x) {
        return 'Введите значение X';
    }

    if (!Number(x)) {
        return 'Значение X должно быть числом';
    }

    if (x > values.x_max || x < values.x_min) {
        return `Значение X должно находится в пределах от ${values.x_min} до ${values.x_max}`;
    }

    if (x.length > values.maxLength) {
        return `Значение X должно содержать не больше ${values.maxLength} символов`;
    }

    if (!y) {
        return 'Введите значение Y';
    }

    if (!Number(y)) {
        return 'Значение Y должно быть числом';
    }

    if (y > values.y_max || x < values.y_min) {
        return `Значение Y должно находится в пределах от ${values.y_min} до ${values.y_max}`;
    }

    if (y.length > values.maxLength) {
        return `Значение Y должно содержать не больше ${values.maxLength} символов`;
    }

    return null;

}

const ValuesForm = (props) => {
    const [message, setMessage] = useState('Введите координаты точки');

    useEffect(() => {
        setMessage(checkValues(props));
    }, [props])

    const checkDote = () => {
        if (!message) {
            props.checkDote();
        }
    }

    return (
        <div className={styles.content}>
            <span className={styles.message}>
                {message}
            </span>
            <div className={styles.formContent}>
                <form onSubmit={() => checkDote()}>
                    <div className={styles.inputField}>
                        <InputField name={'X'} onChange={props.setX} value={props.x} min={props.x_min} max={props.x_max}/>
                    </div>
                    <div className={styles.inputField}>
                        <InputField name={'Y'} onChange={props.setY} value={props.y} min={props.y_min} max={props.y_max}/>
                    </div>
                    <div className={styles.radio}>
                        {props.r_values.map(r => <RadioField value={r} r_current={props.r} onChange={props.setR}/>)}
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => props.clearValues()}>Очистить</button>
                        <button type={"submit"} disabled={message}>Проверить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ValuesForm;