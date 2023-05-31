'use strict';

module.exports = (whitelist) => {
	return function corsMiddleware(req, res, next){
		let q = false;
		const url = req.headers['origin'] || req.headers['host']; 
		for (const i of whitelist) {
			if (url.indexOf(i) !== -1) {
				q = true;
				break;
			}
		}
		if (!q) {
			res.end('Cross domain');
		} else {
			res.header('Access-Control-Allow-Origin', url);
			res.header('Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Cookie');
			res.header('Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS');
			res.header('Access-Control-Allow-Credentials", "true');
			res.header('Content-Type', 'application/json;charset=utf-8');
			next();
		}
	}
}
