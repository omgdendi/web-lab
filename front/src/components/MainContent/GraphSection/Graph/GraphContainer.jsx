import {connect} from "react-redux";
import Graph from "./Graph";
import {setX, setY} from "../../../../redux/reducers/valuesReducer";

const mapStateToProps = (state) => {
    return {
        dots: state.table.dots,
        r_current: state.values.r_current,
        x_current: state.values.x_current,
        y_current: state.values.y_current,
        x_min: state.values.x_min,
        x_max: state.values.x_max,
        y_min: state.values.y_min,
        y_max: state.values.y_max
    };
}

export default connect(mapStateToProps, {
    setX,
    setY
})(Graph);
