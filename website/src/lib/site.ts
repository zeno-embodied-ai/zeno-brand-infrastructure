export const siteConfig = {
  name: "Zeno",
  url: "https://zeno-ai.org",
  description:
    "Zeno is a full-stack open-source embodied intelligence platform for education, research and robotics competition.",
  shortDescription: "Open embodied intelligence, from connection to cognition.",
} as const;

export const primaryNavigation = [
  { href: "/platform/", label: "Platform" },
  { href: "/hardware/", label: "Hardware" },
  { href: "/software/", label: "Software" },
  { href: "/research/", label: "Research" },
  { href: "/education/", label: "Education" },
  { href: "/community/", label: "Community" },
  { href: "/roadmap/", label: "Roadmap" },
] as const;

export const utilityNavigation = [
  { href: "/documentation/", label: "Documentation" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/security/", label: "Security" },
] as const;
