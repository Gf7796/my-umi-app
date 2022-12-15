import { defineConfig } from "umi";
import routes from "./src/routers";

export default defineConfig({
  npmClient: 'pnpm',
  title: "帆导的测试小站",
  routes,
  hash: true,
});
