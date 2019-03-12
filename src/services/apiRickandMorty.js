import axios from "axios";

function getRoute() {
	return new Promise((resolve, reject) => {
		try {
			axios
				.get("https://rickandmortyapi.com/api/")
				.then(result => {
					resolve(result.data);
				})
				.catch(error => {
					
					reject(error);
				});
		} catch (err) {
			console.log("err in getRoutes: ", err);
		}
	});
}

function getCharacter(obj) {
	return new Promise((resolve, reject) => {
		try {
			getRoute().then(routes => {
				let page = routes.characters
				if (obj.page) {
					page = obj.page
				} else if (obj.pageNumber) {
					page = page + '/?page=' + obj.pageNumber
				}
				axios
					.get(page)
					.then(result => {
						resolve(result.data);
					})
					.catch(error => {
						reject(error);
					})
			})
			.catch(() => {
				getCharacter(obj)
			})
		} catch (err) {
			console.log("err in getCharacter: ", err);
		}
	});
}

function getEpisode(obj) {
	return new Promise((resolve, reject) => {
		try {
			getRoute().then(routes => {
				let page = routes.episodes
				if (obj.page) {
					page = obj.page
				}
				axios
					.get(page)
					.then(result => {
						resolve(result.data);
					})
					.catch(error => {
						reject(error);
					})
			})
		} catch (err) {
			console.log("err in getEpisode: ", err);
		}
	});
}

function getCharacterByEpisode(obj) {
	return new Promise((resolve, reject) => {
		try {
			axios
				.get(obj.route)
				.then(result => {
					resolve(result.data);
				})
				.catch(error => {
					reject(error);
				})
		} catch (err) {
			console.log("err in getCharacterByEpisode: ", err);
		}
	});
}

export {
	getCharacter,
	getEpisode,
	getCharacterByEpisode
}