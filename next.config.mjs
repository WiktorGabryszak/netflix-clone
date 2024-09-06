/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "eyjeetsqbuaylkzeejtf.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/avatars/**",
			},
		],
	},
	// output: "export",
};

export default nextConfig;
