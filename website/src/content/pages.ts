export type ContentCard = {
  title: string;
  text: string;
};

export type ContentSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  copy: string;
  items: readonly ContentCard[];
};

export type SitePage = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  visualMode: "platform" | "system" | "humanoid" | "marine";
  visualLabel: string;
  highlights: readonly string[];
  sections: readonly ContentSection[];
  cta: {
    eyebrow: string;
    title: string;
    copy: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

export const sitePages = [
  {
    slug: "platform",
    eyebrow: "One composable stack",
    title: "Embodied intelligence, from connection to cognition.",
    summary:
      "Zeno organizes hardware, communication, runtime, control, intelligence, simulation and collaboration into one open platform model.",
    description:
      "Explore the Zeno platform architecture across hardware, software, intelligence, simulation and cloud collaboration.",
    visualMode: "platform",
    visualLabel: "Zeno platform stack from research workflows to robot platforms, with optional cloud collaboration",
    highlights: ["Open architecture", "Composable layers", "Versioned interfaces"],
    sections: [
      {
        eyebrow: "Architecture",
        title: "A stack with clear responsibilities",
        copy:
          "Each product line has a defined role. The model helps teams reason about the system without turning every component into a separate platform.",
        items: [
          { title: "Connect", text: "Zeno Link represents device, bus and communication integration." },
          { title: "Run", text: "Zeno Core represents the shared runtime, SDK and foundational interfaces." },
          { title: "Control", text: "Zeno Cerebellum represents real-time motion and execution." },
          { title: "Reason", text: "Zeno Brain represents perception, planning and intelligent tasks." },
        ],
      },
      {
        eyebrow: "Physical + digital",
        title: "Build for robots, test in simulation",
        copy:
          "Zeno Humanoid and Zeno Marine define robot platforms. Zeno Simulation defines a place for scenes, assets and repeatable testing; Zeno Cloud is planned as an optional collaboration layer.",
        items: [
          { title: "Humanoid", text: "A platform boundary for assembly, calibration, maintenance and examples." },
          { title: "Marine", text: "A platform boundary for marine bodies, sensing, missions and water safety." },
          { title: "Simulation", text: "Scenes, digital twins, simulation interfaces and CI-oriented tests." },
          { title: "Cloud", text: "Planned team, data, compute and device collaboration capabilities." },
        ],
      },
    ],
    cta: {
      eyebrow: "Start with the map",
      title: "Choose the layer that matches your work.",
      copy: "Explore software foundations or move directly to the robot platforms.",
      primary: { label: "Explore software", href: "/software/" },
      secondary: { label: "Explore hardware", href: "/hardware/" },
    },
  },
  {
    slug: "hardware",
    eyebrow: "Open robot platforms",
    title: "Hardware that makes the full stack tangible.",
    summary:
      "Zeno hardware is organized around robot platforms and the interfaces that connect sensing, control and intelligent behavior.",
    description: "Explore Zeno Humanoid and Zeno Marine hardware platform concepts.",
    visualMode: "humanoid",
    visualLabel: "Replaceable hardware platform illustration placeholder",
    highlights: ["Robot platforms", "Clear interfaces", "Teaching to research"],
    sections: [
      {
        eyebrow: "Robot platforms",
        title: "Two physical contexts, one platform philosophy",
        copy:
          "Humanoid and marine robots create different engineering constraints while sharing a need for explicit interfaces, reproducible setup and safe operation.",
        items: [
          { title: "Zeno Humanoid", text: "Human-scale embodied intelligence across assembly, calibration, control and experiments." },
          { title: "Zeno Marine", text: "Marine robotics across platforms, sensing, missions and water-aware safety." },
        ],
      },
      {
        eyebrow: "Learning path",
        title: "Move from a component to a complete system",
        copy:
          "The hardware information architecture is planned to connect setup and maintenance with the software layers that make each robot observable and programmable.",
        items: [
          { title: "Assemble", text: "Document parts, interfaces and safe assembly procedures." },
          { title: "Calibrate", text: "Make sensing and actuation assumptions explicit and repeatable." },
          { title: "Integrate", text: "Connect hardware through Zeno Link and shared runtime interfaces." },
          { title: "Experiment", text: "Build teaching, competition and research workflows on versioned foundations." },
        ],
      },
    ],
    cta: {
      eyebrow: "Choose a platform",
      title: "Explore humanoid or marine robotics.",
      copy: "Product availability and compatibility details will be published through versioned documentation.",
      primary: { label: "Zeno Humanoid", href: "/humanoid/" },
      secondary: { label: "Zeno Marine", href: "/marine/" },
    },
  },
  {
    slug: "software",
    eyebrow: "Runtime to intelligence",
    title: "Software layers for connected, controllable robots.",
    summary:
      "Zeno Core, Link, Brain and Cerebellum separate foundational runtime, connectivity, intelligence and real-time execution concerns.",
    description: "Explore the Zeno Core, Link, Brain and Cerebellum software architecture.",
    visualMode: "system",
    visualLabel: "Replaceable software stack illustration placeholder",
    highlights: ["Zeno Core", "Zeno Link", "Zeno Brain", "Zeno Cerebellum"],
    sections: [
      {
        id: "core",
        eyebrow: "Foundation",
        title: "Core and Link",
        copy:
          "The lower software layers define how a robot connects to devices and how shared runtime capabilities are exposed to the rest of the stack.",
        items: [
          { title: "Zeno Core", text: "Shared runtime, foundational APIs, SDK concepts and core interfaces." },
          { title: "Zeno Link", text: "Device access, protocols, gateways, communication and synchronization." },
        ],
      },
      {
        id: "brain",
        eyebrow: "Intelligence + control",
        title: "Brain and Cerebellum",
        copy:
          "The upper software layers distinguish intelligent task behavior from the real-time control responsibilities required to execute movement.",
        items: [
          { title: "Zeno Brain", text: "Perception, inference, planning and intelligent task orchestration." },
          { title: "Zeno Cerebellum", text: "Controllers, trajectories, dynamics and real-time motion interfaces." },
        ],
      },
      {
        id: "cerebellum",
        eyebrow: "Supporting layers",
        title: "Simulation and optional cloud collaboration",
        copy:
          "Zeno Simulation is planned for scenes, assets and testing. Zeno Cloud is planned as an optional layer for teams, data, compute and device workflows.",
        items: [
          { title: "Zeno Simulation", text: "Simulation environments, digital twins and automated test scenarios." },
          { title: "Zeno Cloud", text: "Optional collaboration, data, training and remote service concepts." },
        ],
      },
    ],
    cta: {
      eyebrow: "Build with clarity",
      title: "Follow the software model into the documentation.",
      copy: "Technical guides and references will remain versioned and separate from the marketing site.",
      primary: { label: "Documentation", href: "/documentation/" },
      secondary: { label: "View platform", href: "/platform/" },
    },
  },
  {
    slug: "humanoid",
    eyebrow: "Zeno Humanoid",
    title: "A humanoid platform for learning and embodied intelligence research.",
    summary:
      "Zeno Humanoid defines a product boundary for the robot body, assembly, calibration, maintenance and full-stack examples.",
    description: "Explore the planned role of Zeno Humanoid in the open Zeno platform.",
    visualMode: "humanoid",
    visualLabel: "Zeno Humanoid replaceable product illustration placeholder",
    highlights: ["Assembly", "Calibration", "Motion", "Experiments"],
    sections: [
      {
        eyebrow: "Platform boundary",
        title: "Connect the body to the stack",
        copy:
          "The humanoid platform is planned as the physical context where connectivity, runtime, real-time control and intelligent tasks come together.",
        items: [
          { title: "Body", text: "Documented mechanical, sensing and actuation boundaries." },
          { title: "Control", text: "A clear path from Zeno Cerebellum to motion execution." },
          { title: "Intelligence", text: "A place to connect Zeno Brain workflows to embodied tasks." },
        ],
      },
      {
        eyebrow: "Use cases",
        title: "Designed around reproducible learning",
        copy:
          "Public materials should help teachers, students, competition teams and researchers understand the same system at different levels of depth.",
        items: [
          { title: "Education", text: "Structured setup and experiments for teaching embodied systems." },
          { title: "Competition", text: "A foundation for repeatable robot integration and team workflows." },
          { title: "Research", text: "Explicit interfaces for extending algorithms and reproducing experiments." },
        ],
      },
    ],
    cta: {
      eyebrow: "Follow the platform",
      title: "Build from hardware into intelligence.",
      copy: "Detailed specifications remain pending product approval and versioned documentation.",
      primary: { label: "Explore the stack", href: "/platform/" },
      secondary: { label: "Research with Zeno", href: "/research/" },
    },
  },
  {
    slug: "marine",
    eyebrow: "Zeno Marine",
    title: "Embodied intelligence for marine robotics contexts.",
    summary:
      "Zeno Marine defines a product boundary for marine robot bodies, sensing, missions and water-aware safety.",
    description: "Explore the planned role of Zeno Marine in the open Zeno platform.",
    visualMode: "marine",
    visualLabel: "Zeno Marine replaceable product illustration placeholder",
    highlights: ["Marine platforms", "Sensing", "Missions", "Water safety"],
    sections: [
      {
        eyebrow: "Platform boundary",
        title: "Bring the Zeno stack into the field",
        copy:
          "Marine environments add sensing, communication and operational constraints that make system boundaries and safe procedures especially important.",
        items: [
          { title: "Platform", text: "Document the body, onboard interfaces and operating assumptions." },
          { title: "Sensing", text: "Connect environmental and navigation sensing through explicit interfaces." },
          { title: "Mission", text: "Structure tasks so simulation, control and intelligent behavior can be tested." },
        ],
      },
      {
        eyebrow: "Practice",
        title: "Safety and reproducibility before spectacle",
        copy:
          "Published marine materials should include environment, version and safety context rather than presenting unqualified capability claims.",
        items: [
          { title: "Prepare", text: "Define equipment, environment and recovery assumptions." },
          { title: "Validate", text: "Use simulation and controlled testing before open-water operation." },
          { title: "Record", text: "Keep mission settings and results traceable to platform versions." },
        ],
      },
    ],
    cta: {
      eyebrow: "From simulation to mission",
      title: "Explore a disciplined marine workflow.",
      copy: "Technical and safety details will be published only after product review.",
      primary: { label: "Explore platform", href: "/platform/" },
      secondary: { label: "View roadmap", href: "/roadmap/" },
    },
  },
  {
    slug: "research",
    eyebrow: "For research teams",
    title: "A platform model for reproducible embodied intelligence.",
    summary:
      "Zeno is intended to make system boundaries, APIs, data and experimental context clearer across the embodied intelligence stack.",
    description: "Learn how Zeno is positioned for embodied intelligence research and reproducibility.",
    visualMode: "system",
    visualLabel: "Replaceable research workflow illustration placeholder",
    highlights: ["Explicit interfaces", "Versioned context", "Simulation", "Open extension"],
    sections: [
      {
        eyebrow: "Research workflow",
        title: "Make the experimental stack visible",
        copy:
          "Reproducibility depends on more than an algorithm. Zeno's information architecture connects software, control, robot platform and simulation context.",
        items: [
          { title: "Define", text: "State the platform, interface, data and version assumptions." },
          { title: "Prototype", text: "Use simulation and modular interfaces to isolate changes." },
          { title: "Reproduce", text: "Publish enough context for another team to rebuild the workflow." },
        ],
      },
      {
        eyebrow: "Open research",
        title: "Extend without hiding the boundary",
        copy:
          "Open-source workflows should keep local execution, optional cloud services and external research components distinguishable.",
        items: [
          { title: "Models", text: "Connect model and inference work through documented Zeno Brain interfaces." },
          { title: "Control", text: "Keep real-time assumptions explicit through Zeno Cerebellum." },
          { title: "Robots", text: "Map experiments to Humanoid or Marine platform versions." },
          { title: "Simulation", text: "Use scenes and test cases to make behavior easier to compare." },
        ],
      },
    ],
    cta: {
      eyebrow: "Plan an experiment",
      title: "Start with architecture and versioned documentation.",
      copy: "Benchmarks, datasets and compatibility claims will be published only when verified.",
      primary: { label: "Documentation", href: "/documentation/" },
      secondary: { label: "Community", href: "/community/" },
    },
  },
  {
    slug: "education",
    eyebrow: "For educators and students",
    title: "Learn embodied intelligence as a complete system.",
    summary:
      "Zeno is positioned to connect courses, laboratories, robot integration and competition preparation through a shared open platform.",
    description: "Explore Zeno's education positioning for courses, laboratories and student teams.",
    visualMode: "system",
    visualLabel: "Replaceable education pathway illustration placeholder",
    highlights: ["Courses", "Labs", "Student teams", "RoboCup"],
    sections: [
      {
        eyebrow: "Learning progression",
        title: "Move from concepts to embodied systems",
        copy:
          "A consistent platform can help learners connect communication, runtime, control, intelligence and robot behavior instead of treating them as unrelated topics.",
        items: [
          { title: "Understand", text: "Use the platform map to locate concepts and responsibilities." },
          { title: "Build", text: "Follow repeatable setup and integration exercises." },
          { title: "Measure", text: "Connect experiments to versions, assumptions and observable outcomes." },
          { title: "Compete", text: "Apply the full stack to disciplined robotics competition workflows." },
        ],
      },
      {
        eyebrow: "Teaching materials",
        title: "Content that stays tied to a platform version",
        copy:
          "Course packs, lab manuals and examples should state their applicable product and documentation versions so they remain maintainable.",
        items: [
          { title: "For teachers", text: "Course structure, lab preparation and repeatable classroom workflows." },
          { title: "For students", text: "Quickstarts, tutorials, troubleshooting and progressively deeper references." },
          { title: "For teams", text: "Shared setup, integration checks and competition-ready operating discipline." },
        ],
      },
    ],
    cta: {
      eyebrow: "Teach the whole system",
      title: "Follow the learning path as materials are published.",
      copy: "Curriculum and competition materials will identify their scope and applicable versions.",
      primary: { label: "Documentation", href: "/documentation/" },
      secondary: { label: "Join the community", href: "/community/" },
    },
  },
  {
    slug: "documentation",
    eyebrow: "Versioned knowledge",
    title: "Documentation designed around tasks and product boundaries.",
    summary:
      "The planned documentation system separates quickstarts, concepts, tutorials, how-to guides, references, compatibility and release notes.",
    description: "Explore the planned structure for Zeno product and learning documentation.",
    visualMode: "system",
    visualLabel: "Replaceable documentation system illustration placeholder",
    highlights: ["Quickstarts", "Guides", "Reference", "Compatibility"],
    sections: [
      {
        eyebrow: "Information architecture",
        title: "A familiar structure for every product",
        copy:
          "Each Zeno product line is planned to use a shared documentation skeleton, making it easier to find the same kind of information across the stack.",
        items: [
          { title: "Start", text: "Overview and Quickstart for the shortest path to a working baseline." },
          { title: "Learn", text: "Concepts and tutorials that explain the system while building it." },
          { title: "Operate", text: "How-to guides and troubleshooting for real tasks." },
          { title: "Verify", text: "Reference, compatibility and release notes tied to versions." },
        ],
      },
      {
        eyebrow: "Current status",
        title: "The documentation portal is planned, not yet published",
        copy:
          "This page is the approved website placeholder. A separate versioned documentation site is planned for docs.zeno-ai.org after its framework and publishing workflow are approved.",
        items: [
          { title: "English first", text: "English is the initial publishing language." },
          { title: "Chinese reserved", text: "The source structure reserves a future Simplified Chinese locale." },
          { title: "Source of truth", text: "Technical facts should come from versioned product repositories and documentation." },
        ],
      },
    ],
    cta: {
      eyebrow: "Documentation preview",
      title: "Track the structure before the portal launches.",
      copy: "No external documentation URL is published until ownership and versioning are confirmed.",
      primary: { label: "View roadmap", href: "/roadmap/" },
      secondary: { label: "Explore software", href: "/software/" },
    },
  },
  {
    slug: "community",
    eyebrow: "Open collaboration",
    title: "Build, learn and contribute around a shared platform.",
    summary:
      "Zeno's community model is intended to connect developers, educators, students, competition teams and researchers through open collaboration.",
    description: "Explore the planned Zeno open-source community and contribution pathways.",
    visualMode: "system",
    visualLabel: "Replaceable open community network illustration placeholder",
    highlights: ["Open source", "Contributors", "Educators", "Research teams"],
    sections: [
      {
        id: "github",
        eyebrow: "GitHub",
        title: "Source and collaboration will live in the official organization",
        copy:
          "The GitHub Organization exists, but its exact public organization name is still marked TBD in the asset register. The official link will be added only after confirmation.",
        items: [
          { title: "Code", text: "Versioned source, releases and repository-level technical decisions." },
          { title: "Issues", text: "Traceable problem reports and scoped feature discussions." },
          { title: "Contributions", text: "Repository-specific guidance, review and governance." },
        ],
      },
      {
        eyebrow: "Participation",
        title: "Different paths into the same ecosystem",
        copy:
          "Public community channels and support commitments remain to be approved. Until then, this site avoids inventing handles, groups or response times.",
        items: [
          { title: "Learn", text: "Follow documentation and examples as they become versioned." },
          { title: "Teach", text: "Help shape repeatable courses, laboratories and team workflows." },
          { title: "Research", text: "Share reproducible extensions and clearly scoped findings." },
          { title: "Contribute", text: "Work through the official repositories once their public map is confirmed." },
        ],
      },
    ],
    cta: {
      eyebrow: "Community status",
      title: "Official channels are being confirmed.",
      copy: "The site will link only to approved, owned community destinations.",
      primary: { label: "View roadmap", href: "/roadmap/" },
      secondary: { label: "About Zeno", href: "/about/" },
    },
  },
  {
    slug: "roadmap",
    eyebrow: "Direction, not promises",
    title: "A roadmap organized around durable platform foundations.",
    summary:
      "Zeno's public roadmap begins with governance and information architecture, then moves toward versioned software, hardware, documentation and community workflows.",
    description: "Review the planning themes for the Zeno open embodied intelligence platform.",
    visualMode: "system",
    visualLabel: "Replaceable Zeno roadmap illustration placeholder",
    highlights: ["Foundations", "Platform", "Documentation", "Community"],
    sections: [
      {
        eyebrow: "Planning areas",
        title: "Build the foundation before expanding the surface",
        copy:
          "This first website does not publish unsupported release dates. The roadmap records durable work areas rather than product availability promises.",
        items: [
          { title: "Foundation", text: "Brand, domains, identity, repositories, security and deployment governance." },
          { title: "Platform", text: "Versioned boundaries for Core, Link, Brain, Cerebellum and robot platforms." },
          { title: "Experience", text: "Quickstarts, documentation, examples, simulation and contribution paths." },
          { title: "Operations", text: "Compatibility, releases, monitoring, support and lifecycle management." },
        ],
      },
      {
        eyebrow: "Evidence",
        title: "Publish commitments only when they are owned",
        copy:
          "A roadmap item becomes a release commitment only after scope, Owner, dependencies, version, validation and support expectations are approved.",
        items: [
          { title: "Proposed", text: "An idea being evaluated with no public delivery commitment." },
          { title: "Approved", text: "A scoped initiative with governance, still not necessarily available." },
          { title: "Active", text: "A released capability with an Owner, documentation and support path." },
        ],
      },
    ],
    cta: {
      eyebrow: "Follow the work",
      title: "Use documentation and the official repositories for versioned truth.",
      copy: "This page will evolve as product and repository ownership is confirmed.",
      primary: { label: "Documentation", href: "/documentation/" },
      secondary: { label: "Community", href: "/community/" },
    },
  },
  {
    slug: "about",
    eyebrow: "About Zeno",
    title: "Open infrastructure for learning, building and researching embodied intelligence.",
    summary:
      "Zeno is a single master brand for a full-stack open-source platform spanning software, intelligent control, robot hardware, simulation and optional cloud collaboration.",
    description: "Learn about Zeno's mission, audiences and open platform model.",
    visualMode: "system",
    visualLabel: "Replaceable Zeno mission illustration placeholder",
    highlights: ["Learnable", "Researchable", "Buildable"],
    sections: [
      {
        eyebrow: "Mission",
        title: "Make the complete embodied system understandable",
        copy:
          "Zeno is positioned for higher education, RoboCup and robotics competition, embodied intelligence research and open hardware collaboration.",
        items: [
          { title: "Learnable", text: "Clear entry paths from concepts and labs to integrated systems." },
          { title: "Researchable", text: "Open boundaries and versioned context for extension and reproduction." },
          { title: "Buildable", text: "Composable layers from devices and control to intelligence and simulation." },
        ],
      },
      {
        eyebrow: "Brand model",
        title: "One Zeno, descriptive product lines",
        copy:
          "Zeno uses a branded-house model. Core, Link, Brain, Cerebellum, Humanoid, Marine, Cloud and Simulation remain connected to the same platform identity.",
        items: [
          { title: "Consistent naming", text: "Products use the formal pattern Zeno + product name." },
          { title: "Shared system", text: "Product pages explain roles without creating competing platforms." },
          { title: "Verified claims", text: "Capabilities and compatibility belong in versioned documentation." },
        ],
      },
    ],
    cta: {
      eyebrow: "Explore Zeno",
      title: "See how the pieces fit together.",
      copy: "The platform page is the shortest route into the full system model.",
      primary: { label: "View platform", href: "/platform/" },
      secondary: { label: "View roadmap", href: "/roadmap/" },
    },
  },
  {
    slug: "contact",
    eyebrow: "Contact",
    title: "Route each conversation to an owned channel.",
    summary:
      "Official support, community, media, legal and security contact channels are being confirmed through the infrastructure asset process.",
    description: "Find the status of official Zeno contact and support channels.",
    visualMode: "system",
    visualLabel: "Replaceable Zeno contact routing illustration placeholder",
    highlights: ["Support", "Community", "Partnerships", "Security"],
    sections: [
      {
        eyebrow: "Current status",
        title: "No unverified contact address is published",
        copy:
          "The repository proposes role-based contact groups, but no address is treated as active until ownership, membership and response expectations are verified.",
        items: [
          { title: "Product support", text: "A support route is planned with an explicit scope and response policy." },
          { title: "Community", text: "An open-source community route is planned after channel ownership is confirmed." },
          { title: "Media + legal", text: "Role-based routes are planned with restricted, maintained membership." },
          { title: "Security", text: "Use the Security page for the current reporting status and guidance." },
        ],
      },
      {
        eyebrow: "Why this matters",
        title: "Stable public addresses should not depend on one person",
        copy:
          "Role-based groups or ticketing can preserve continuity as teams change, but only after privacy, spam protection, retention and ownership are configured.",
        items: [
          { title: "Owned", text: "Every published channel needs a primary and backup role." },
          { title: "Scoped", text: "Each channel should say what it accepts and what it does not." },
          { title: "Maintained", text: "Membership and response commitments require periodic review." },
        ],
      },
    ],
    cta: {
      eyebrow: "Until channels launch",
      title: "Use the public project paths that have been verified.",
      copy: "No form submission or data collection is enabled in this static website preview.",
      primary: { label: "Community status", href: "/community/" },
      secondary: { label: "Security guidance", href: "/security/" },
    },
  },
  {
    slug: "security",
    eyebrow: "Security",
    title: "Protect the platform, its users and its public trust.",
    summary:
      "Zeno's infrastructure rules prohibit credentials and sensitive data in public repositories and require explicit approval for production changes.",
    description: "Review Zeno's public security principles and vulnerability reporting status.",
    visualMode: "system",
    visualLabel: "Replaceable Zeno security boundary illustration placeholder",
    highlights: ["No secrets in source", "Least privilege", "Review", "Responsible reporting"],
    sections: [
      {
        eyebrow: "Security baseline",
        title: "Build secure boundaries into routine work",
        copy:
          "The infrastructure project treats domain, identity, deployment and credentials as protected operations rather than ordinary content edits.",
        items: [
          { title: "Secrets", text: "Passwords, tokens, cookies, private keys and recovery codes never belong in source." },
          { title: "Access", text: "Production work requires explicit approval, least privilege and a reviewable plan." },
          { title: "Validation", text: "Generated configuration is checked before any approved application." },
          { title: "Recovery", text: "Critical assets need maintained Owners, MFA and controlled recovery paths." },
        ],
      },
      {
        eyebrow: "Reporting",
        title: "The official vulnerability reporting channel is not yet active",
        copy:
          "The repository proposes a security role address, but its ownership has not been verified. Do not publish sensitive vulnerability details through public issues or unverified channels.",
        items: [
          { title: "Avoid public disclosure", text: "Do not include exploit details, credentials or personal data in public project channels." },
          { title: "Wait for verification", text: "An official reporting address and policy will be published after ownership is confirmed." },
          { title: "No response promise", text: "This preview does not invent response times or a disclosure policy." },
        ],
      },
    ],
    cta: {
      eyebrow: "Security status",
      title: "A verified reporting path is part of the infrastructure roadmap.",
      copy: "The public policy will be updated when the responsible roles and channel are active.",
      primary: { label: "View roadmap", href: "/roadmap/" },
      secondary: { label: "About Zeno", href: "/about/" },
    },
  },
] as const satisfies readonly SitePage[];

export type SitePageSlug = (typeof sitePages)[number]["slug"];

export function getSitePage(slug: string): SitePage | undefined {
  return sitePages.find((page) => page.slug === slug);
}
