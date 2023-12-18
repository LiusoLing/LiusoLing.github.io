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

  "/database/mysql/": [
    {
      text: "MySQL学习",
      icon: "book",
      prefix: "learning/",
      link: "",
      children: "structure",
    },
    {
      text: "MySQL实践",
      icon: "book",
      prefix: "use/",
      link: "",
      children: "structure",
    },
    {
      text: "Mybatis Plus",
      icon: "book",
      prefix: "mybatis plus/",
      link: "",
      children: "structure",
    },
  ],

  "/database/pgsql/": [
    {
      text: "PgSQL学习",
      icon: "book",
      prefix: "learning/",
      link: "",
      children: "structure",
    },
    {
      text: "PgSQL实践",
      icon: "book",
      prefix: "use/",
      link: "",
      children: "structure",
    },
  ]
});
