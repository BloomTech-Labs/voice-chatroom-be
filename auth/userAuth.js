const { oktaJwtVerifier } = require("./auth");
const userAuth = (req, res, next) => {
	const token = req.headers.authorization;
	oktaJwtVerifier
		.verifyAccessToken(token, "api://default")
		.then((jwt) => {
			console.log("token is valid");
		})
		.catch((err) => console.warn("token failed validation"));
	next();
};
module.exports = userAuth;
