/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MYSQLDATABASE:"Users",
    MYSQLUSERNAME:"ROOT",
    MYSQLPASSWORD:"PASSWORD",
    MYSQLHOST:"localhost",
    DILECT:"mysql"
  }
}

module.exports = nextConfig
