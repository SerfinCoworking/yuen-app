export const environment = {
	production: false,
	API_URL: "http://localhost:3000",
	auth: {
		domain: "self-administer.us.auth0.com",
		clientId: "Mmy7AQQKlblE430JpGdWh4YUyXtPfuPB",
		audience: "http://www.self-administer-api.com"
	},
	auth0: {
		claims: {
			permissions: {
				name: "https://yuen-api.herokuapp.com/permissions",
				from: "SelfAdminsterApi"
			}
		}
	}
};
