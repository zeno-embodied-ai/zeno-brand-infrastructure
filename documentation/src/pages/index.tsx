import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

function Feature({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="col col--4">
      <h2>{title}</h2>
      <p>{children}</p>
    </article>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout>
      <main>
        <header className="hero hero--zeno text--center">
          <div className="container">
            <p className="margin-bottom--sm">DRAFT DEVELOPER DOCUMENTATION</p>
            <h1 className="hero__title">Zeno Documentation</h1>
            <p className="hero__subtitle">
              A versioned knowledge base for the Zeno open-source embodied intelligence platform.
            </p>
            <div>
              <Link className="button button--primary button--lg" to="/docs/overview/introduction">
                Start with the introduction
              </Link>
            </div>
          </div>
        </header>
        <section className="container margin-vert--xl">
          <p className="draft-note">
            This is a documentation structure and content draft. Hardware specifications,
            compatibility claims, procedures and public support channels remain TBD unless a page
            explicitly cites an approved versioned source.
          </p>
          <div className="row margin-top--lg">
            <Feature title="Learn the stack">
              Start with architecture, safety and the planned quick-start workflow before selecting
              a hardware or software path.
            </Feature>
            <Feature title="Follow versions">
              The current draft and versioned snapshots are separated so published guidance can be
              preserved as the platform evolves.
            </Feature>
            <Feature title="Search is reserved">
              Full-text search has no provider or public index yet. The Search page records the
              required approval boundary.
            </Feature>
          </div>
        </section>
      </main>
    </Layout>
  );
}
