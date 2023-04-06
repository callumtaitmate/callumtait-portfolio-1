/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"]
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiY2FsbHVtdGFpdG1hdGUiLCJhIjoiY2xnM2JyYndyMGRvczNubjk1c20zNG14aiJ9.jXgKq4gqi6u0Y9H018AMAA" 
  }
}

module.exports = nextConfig
