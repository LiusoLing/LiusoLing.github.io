import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/javaer/": [
    {
      text: "开始之前",
      icon: "book",
      prefix: "",
      link: "",
      children: [
        "windows",
        "unix",
        "ide",
      ],
    },
    {
      text: "Java指南",
      icon: "book",
      prefix: "base/",
      link: "",
      children: "structure",
    },
  ],
});
