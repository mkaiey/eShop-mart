/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, esmExternals: 'loose',
  },
  env: {
    API_URL: "https://eshop-mart.vercel.app",
    DB_LOCAL_URI: "",
    DB_URI: "",

    CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    STRIPE_PUBLIC_KEY: "",
    STRIPE_PRIVATE_KEY: "",
    STRIPE_WEBHOOK_SECRET: "",

    NEXTAUTH_URL: "https://eshop-mart.vercel.app",
    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
