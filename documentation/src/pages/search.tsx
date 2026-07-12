import type { ReactNode } from "react";
import Layout from "@theme/Layout";

export default function SearchPage(): ReactNode {
  return (
    <Layout>
      <main className="container margin-vert--xl">
        <h1>Full-text search: Draft / TBD</h1>
        <p className="draft-note">
          No external search provider, crawler, API token or production index is configured for
          this documentation site. Search is intentionally reserved until content ownership,
          indexing scope, privacy and deployment policy are approved.
        </p>
        <h2>Planned acceptance criteria</h2>
        <ul>
          <li>Search covers published documentation versions without exposing private content.</li>
          <li>Index generation is repeatable in CI or the approved documentation build process.</li>
          <li>Search results identify the documentation version and locale.</li>
          <li>Provider configuration and credentials remain outside this repository.</li>
        </ul>
      </main>
    </Layout>
  );
}
