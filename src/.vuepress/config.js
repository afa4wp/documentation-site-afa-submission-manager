const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "WP ALL Forms API",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: "/wpafa/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Add New Form Builder",
        link: "/guide/add-new-form-build/",
      },
      {
        text: "Mobile App",
        link: "https://github.com/wpafa/wp-afa-mobile-app",
      },
      {
        text: "GitHub",
        link: "https://github.com/wpafa/wp-all-forms-api",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "WP ALL Forms API",
          children: [
            "",
            "/guide/wpafa/installation/",
            "/guide/wpafa/plugin-struture/",
          ],
        },
        {
          title: "Add New Form Builder",
          path: "/guide/add-new-form-build/",
          children: ["/guide/add-new-form-build/"],
        },
        {
          title: "Mobile App",
          path: "/guide/mobile-app/",
          children: ["/guide/mobile-app/"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
