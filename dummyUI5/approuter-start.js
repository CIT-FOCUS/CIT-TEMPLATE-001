/**
 * SAP Cloud Environment - Approuter Extension for XSUAA
 * @description: This extension is required to use the userinformation, existing
 * 				 in the request, to throw back to the webapp the scopes and some
 * 				 userdetails (ID, name, mail).
 * 				 As every MTA has his own instance of XSUAA bound, the aud(-ience)
 * 				 is changing. So every app needs his own extension. 
 * @author: Heisel, Cedric - CIT Focus eG
 * @version: 0.1
 */
const approuter = require('@sap/approuter');
var jwtDecode = require('jwt-decode');

var ar = approuter();

ar.beforeRequestHandler.use('/getuserinfo', function (req, res, next) {
	if (!req.user) {
		res.statusCode = 403;
		res.end(`Missing JWT Token`);
	} else {
		res.statusCode = 200;
		var decodedJWTToken = jwtDecode(req.user.token.accessToken);				
		res.end(JSON.stringify({
			user: {
				id: req.user.id,
				given_name: decodedJWTToken.given_name,
				family_name: decodedJWTToken.family_name,
				email: decodedJWTToken.email
			},
			scopes: req.user.scopes,
			aud: decodedJWTToken.aud
		}));        
    }
});

ar.start();