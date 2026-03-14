import { defineConfig } from "vite-plus";
import Unocss from "unocss/vite";

export default defineConfig({
  staged: { "*": "" },
  // staged: { "*": "vp check --fix" },

  lint: {
    ignorePatterns: [
      "dist/**",
      "**/.vitepress/**",
      "**/docs/**",
      "apps/demo/dev/main.ts",
      "apps/demo/dev/vite.config.ts",
      "**/dev/modules/**",
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },

  fmt: {
    ignorePatterns: [
      "dist/**",
      "**/.vitepress/**",
      "**/docs/**",
      "apps/demo/dev/main.ts",
      "apps/demo/dev/vite.config.ts",
    ],
  },

  plugins: [
    Unocss({
      configFile: "apps/docs/uno.config.ts",
    }),
  ],
});
