/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Lessons page was folded into Sign up.
      { source: "/lessons", destination: "/apply", permanent: true },
    ];
  },
};

export default nextConfig;
