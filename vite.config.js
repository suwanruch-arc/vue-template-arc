import { defineConfig } from "vite";

//JSON
import { readFileSync } from "fs";
import { resolve } from "path";

//plugins
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

//resolve
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ command, mode }) => {
  const pkg = JSON.parse(
    readFileSync(resolve(__dirname, "package.json"), "utf-8")
  );

  const base = "/"; //เปลี่ยนตาม path ที่ใช้งาน

  const baseURL =
    mode !== "production"
      ? "http://localhost" + base
      : "https://b.yllo.in" + base;

  const recaptcha_key =
    mode !== "production"
      ? "6LdVx60mAAAAAOAWZV906ECXnn49SDUSR42VI-2r"
      : "6LdFV-YUAAAAAG9vIDkIqtz2f1eLbAtuktPInT3f";
  return {
    base: base,
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: `assets/v${pkg.version}/[name].js`,
          entryFileNames: `assets/v${pkg.version}/[name].js`,
          assetFileNames: `assets/v${pkg.version}/[name].[ext]`,
        },
      },
    },
    define: {
      BASE: JSON.stringify(base),
      BASE_URL: JSON.stringify(baseURL),
      API_URL: JSON.stringify(baseURL + "api/"),
      IMG_URL: JSON.stringify(baseURL + "imgs/"),
      RECAPTCHA_KEY: JSON.stringify(recaptcha_key),
    },
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        sassVariables: "src/sass/quasar-variables.sass",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
