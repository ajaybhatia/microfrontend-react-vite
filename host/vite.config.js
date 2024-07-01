import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federtion from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // We can get REMOTE_URL for each remote from .env file
  // const REMOTE_URL_HOME = process.env.REMOTE_URL_HOME;
  // const REMOTE_URL_ABOUT = process.env.REMOTE_URL_ABOUT;

  // And based on process.env.NODE_ENV we can set the URL for each remote

  return {
    plugins: [
      react(),
      federtion({
        name: "host",
        remotes: {
          home: "http://localhost:3001/assets/remoteEntry.js",
          about: "http://localhost:3002/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
