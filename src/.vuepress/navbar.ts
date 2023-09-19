import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  "/javaer/",
  {
    text: "数据库",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: []
  },
  {
    text: "轮子工具",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: []
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
