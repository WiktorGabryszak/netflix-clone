/** @type {import('next').NextConfig} */
const nextConfig = {
	
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'image.tmdb.org',
			port: '',
			pathname: '/t/p/original/**',
		  },
		],
	  },
	// output: "export",
};

export default nextConfig;
