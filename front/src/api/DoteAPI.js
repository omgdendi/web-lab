import $api from "../http/http";

export const DoteAPI = {
    async checkDote(x_value, y_value, r_value) {
        return $api.post('dote', {x_value, y_value, r_value})
    },

    async getDots() {
        return $api.get('dots');
    },

    async deleteDote(id) {
        return $api.delete(`dots/${id}`);
    }
}
