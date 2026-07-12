import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Zeno Documentation",
  tagline: "Draft developer documentation for the Zeno embodied intelligence platform",
  favicon: "img/favicon.svg",

  url: "https://docs.zeno-ai.org",
  baseUrl: "/",
  organizationName: "TBD",
  projectName: "zeno-documentation",

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: { label: "English" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          lastVersion: "0.1.0-draft",
          versions: {
            current: {
              label: "Next (Draft)",
              path: "next",
            },
            "0.1.0-draft": {
              label: "0.1.0 Draft",
              path: "",
            },
          },
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/og-placeholder.svg",
    navbar: {
      title: "Zeno Docs",
      logo: {
        alt: "Zeno",
        src: "img/favicon.svg",
      },
      items: [
        { type: "docSidebar", sidebarId: "tutorialSidebar", position: "left", label: "Documentation" },
        { type: "docsVersionDropdown", position: "right" },
        { to: "/search", label: "Search (TBD)", position: "right" },
        { to: "/docs/community/contributing", label: "Community", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "/docs/overview/introduction" },
            { label: "Hardware", to: "/docs/hardware/zeno-core" },
            { label: "Software", to: "/docs/software/ros-2" },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "Community", to: "/docs/community/contributing" },
            { label: "Security", to: "/docs/community/security" },
            { label: "Search status", to: "/search" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zeno. Draft documentation.`,
    },
  },

  customFields: {
    locales: {
      active: ["en"],
      reserved: ["zh-CN"],
    },
    search: {
      status: "reserved",
      approvedProvider: "TBD",
      indexPublication: "TBD",
      note: "No external search provider or index is configured in Phase 3.",
    },
  },
};

export default config;
