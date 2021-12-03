module.exports = class DoteDTO {
    id;
    x_value;
    y_value;
    r_value;
    result;

    constructor(model) {
        this.id = model._id;
        this.x_value = model.x_value;
        this.y_value = model.y_value;
        this.r_value = model.r_value;
        this.result = model.result;
    }
}