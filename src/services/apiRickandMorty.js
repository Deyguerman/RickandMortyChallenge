import axios from "axios";

function getCharacter(obj) {
	let page = ''
	if (obj.page) {
		page = '/?' + obj.page
	}
	return new Promise((resolve, reject) => {
		try {
			axios
				.get("https://rickandmortyapi.com/api/character"+ page)
				.then(result => {
					resolve(result.data.results);
				})
				.catch(error => {
					
					reject(error);
				});
		} catch (err) {
			console.log("err in getCharacter: ", err);
		}
	});
}

export {
	getCharacter	
}