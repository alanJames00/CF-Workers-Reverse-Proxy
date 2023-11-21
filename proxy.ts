export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		const modify = false // To modify the headers
		const reqUrlHref = url.href;
		const originAddress = url.origin;

		const targetHost = 'http://68.183.245.189/'; // Host address of the Target to be Proxied

		// Extract the Paths and params present in the url and parse it into proxyUrl
		const parsedPath = reqUrlHref.substring(originAddress.length+1);
		

		const proxyUrl = targetHost+parsedPath; // get a query param value (?proxyUrl=...)


		// make subrequests with the global `fetch()` function
		let res = await fetch(proxyUrl, request);

		// optionally, modify the respone
		if (modify) {
			res = new Response(res.body, res);
			res.headers.set('X-My-Header', 'My Header Value');
		}

		return res;
	},
};
