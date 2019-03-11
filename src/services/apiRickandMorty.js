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
			console.log("err in getCharacter: ", err);
		}
	});
}

function getCharacter(obj) {
	return new Promise((resolve, reject) => {
		try {
			getRoute().then(routes => {
				// console.log("routers: ", routes)
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
		} catch (err) {
			console.log("err in getCharacter: ", err);
		}
	});
}

function getEpisode() {
	return new Promise((resolve, reject) => {
		try {
			getRoute().then(routes => {
				// console.log("routers: ", routes)
				axios
					.get(routes.episodes)
					.then(result => {
						resolve(result.data);
					})
					.catch(error => {
						reject(error);
					})
			})
		} catch (err) {
			console.log("err in getCharacter: ", err);
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
			console.log("err in getCharacter: ", err);
		}
	});
}

export {
	getCharacter,
	getEpisode,
	getCharacterByEpisode
}