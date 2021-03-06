import path from "path";
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Animation": path.resolve(__dirname, "src/animation"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Modules": path.resolve(__dirname, "src/modules"),
    },
  },
};
