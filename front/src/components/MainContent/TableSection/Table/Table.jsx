import React, {useEffect} from "react";
import Dote from "./Dote/Dote";
import styles from "./Table.module.scss";

const Table = (props) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Результат</th>
                    <th>Действие</th>
                </tr>
                {props.dots.map(dote => <Dote x={dote.x_value} y={dote.y_value}
                                              r={dote.r_value} result={dote.result}
                                              id={dote.id} deleteDote={props.deleteDote}
                />)}
            </table>
        </div>
    );
}

export default Table;



