import {connect} from "react-redux";
import ValuesForm from "./ValuesForm";
import {checkDote, clearValues, setR, setX, setY} from "../../../../redux/reducers/valuesReducer";

const mapStateToProps = (state) => {
    return {
        x: state.values.x_current,
        y: state.values.y_current,
        r: state.values.r_current,
        r_values: state.values.r_values,
        x_min: state.values.x_min,
        x_max: state.values.x_max,
        y_min: state.values.y_min,
        y_max: state.values.y_max,
        maxLength: state.values.maxLength
    };
}

export default connect(mapStateToProps, {
    setX,
    setY,
    setR,
    checkDote,
    clearValues
})(ValuesForm);
