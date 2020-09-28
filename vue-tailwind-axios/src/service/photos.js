import Api from "./api";

export default {
	get(state) {
		return Api.get("/photos", {
			params: { _start: state.start, _limit: 5 },
		});
	},
};
