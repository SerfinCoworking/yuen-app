export const environment = {
	production: true,
	API_URL: "https://yuen-api.herokuapp.com",
	auth: {
		domain: "self-administer.us.auth0.com",
		clientId: "hEViBWOBqi0q4A3zMpCvLTSHNooM3wN8",
		audience: "https://yuen-api.herokuapp.com/"
	},
	auth0: {
		claims: {
			permissions: {
				name: "https://yuen-api.herokuapp.com/permissions",
				from: "yuen-api"
			}
		}
	}
};
