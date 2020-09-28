import PhotoApi from "@/service/photos";
export default {
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
			await PhotoApi.get(state)
				.then((res) => {
					commit("setPhoto", res.data);
				})
				.catch((error) => console.log({ error }));
		},
	},
};
