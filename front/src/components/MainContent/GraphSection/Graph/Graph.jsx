import React, {useEffect, useRef} from "react";
import GraphSvg from "./GraphSvg";
import styles from "./Graph.module.scss";

const radius = 68;

const drawDote = (canvas, ctx, dote) => {
    const x = dote.x_value / dote.r_value * radius + canvas.width / 2;
    const y = - dote.y_value / dote.r_value * radius + canvas.height / 2;
    ctx.fillStyle = dote.result ? 'green' : 'red';
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2*Math.PI)
    ctx.fill()
}

const clickDraw = (canvas, ctx, x_value, y_value, r_value) => {
    const x = x_value / r_value * radius + canvas.width / 2;
    const y = - y_value / r_value * radius + canvas.height / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2*Math.PI);
    ctx.fill();
    ctx.setLineDash([2, 2]);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, canvas.width / 2);
    ctx.lineTo(x, y);
    ctx.moveTo(canvas.height / 2, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

const Graph = (props) => {
    const canvasDotsRef = useRef(null);
    const canvasClickRef = useRef(null);

    useEffect(() => {
        const canvas = canvasDotsRef.current;
        const ctx = canvas.getContext('2d');
        props.dots.forEach(dote => drawDote(canvas, ctx, dote));
        const canvasClick = canvasClickRef.current;
        const ctxClick = canvasClick.getContext('2d');
        if (props.x_current && props.y_current) {
            clickDraw(canvasClick, ctxClick, props.x_current, props.y_current, props.r_current);
        } else {
            ctxClick.clearRect(0, 0, canvasClick.width, canvasClick.height);
        }
    }, [props])

    const onCanvasClick = (e) => {
        const canvas = canvasClickRef.current;
        const ctx = canvas.getContext('2d');
        let x = (e.nativeEvent.offsetX - canvas.width / 2) * props.r_current / radius;
        let y = - (e.nativeEvent.offsetY - canvas.height / 2) * props.r_current / radius
        if (x > props.x_max) {
            x = props.x_max;
        }
        if (x < props.x_min) {
            x = props.x_min;
        }
        if (y > props.y_max) {
            y = props.y_max;
        }
        if (y < props.y_min) {
            y = props.y_min;
        }
        clickDraw(canvas, ctx, x, y, props.r_current);
        props.setX(x.toFixed(3));
        props.setY(y.toFixed(3));
    }

    return (
        <div className={styles.graphContainer}>
            <GraphSvg rValue={props.r_current} />
            <canvas width={220} height={220} ref={canvasDotsRef} className={styles.canvas}></canvas>
            <canvas width={220} height={220} ref={canvasClickRef} onClick={(e) => onCanvasClick(e)} className={styles.clickCanvas}></canvas>
        </div>
    );
}

export default Graph;



