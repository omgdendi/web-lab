import React from "react";
import basket from "../../../../../assects/basket.png";
import styles from "./Dote.module.scss";

const Dote = (props) => {
    return (
        <tr>
            <td>{props.x}</td>
            <td>{props.y}</td>
            <td>{props.r}</td>
            <td>{props.result ? "Попадание" : "Промах"}</td>
            <td><img className={styles.basket} src={basket} alt="удалить" onClick={() => props.deleteDote(props.id)}/></td>
        </tr>
    );
}

export default Dote;