import { defineConfig } from "umi";
import routes from "./src/routers";

export default defineConfig({
  npmClient: 'yarn',
  title: "帆导的测试小站",
  routes,
  hash: true,
  mfsu: {}
});
