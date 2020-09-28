import Api from "../modules/api";
const Photos = {
	namespaced: true,
	state: () => ({
		photos: [],
	}),
	mutations: {
		setPhoto(state, payload) {
			state.photos = payload;
		},
	},
	actions: {
		async getPhotos({ commit, state }) {
			await Api.get("/photos", {
				params: { _start: state.start, _limit: 5 },
			})
				.then((res) => {
					commit("setPhoto", res.data);
				})
				.catch((error) => console.log({ error }));
		},
	},
};

export default Photos;
