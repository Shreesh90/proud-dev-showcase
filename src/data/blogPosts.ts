import buildingReliableSystems from "../content/blog/building-reliable-systems.md?raw";
import typescriptPatterns from "../content/blog/typescript-patterns.md?raw";
import onSimplicity from "../content/blog/on-simplicity.md?raw";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// To add a new blog post:
// 1. Create a .md file in src/content/blog/
// 2. Add an entry below with the slug, metadata, and import

export const blogPosts: BlogPost[] = [
  {
    slug: "building-reliable-systems",
    title: "Building Reliable Systems at Scale",
    date: "2025-12-15",
    excerpt:
      "Lessons learned from designing distributed systems that handle millions of requests per day.",
    content: buildingReliableSystems,
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns I Use Every Day",
    date: "2025-10-03",
    excerpt:
      "Practical TypeScript patterns that make codebases more maintainable and type-safe.",
    content: typescriptPatterns,
  },
  {
    slug: "on-simplicity",
    title: "On Simplicity in Software",
    date: "2025-08-20",
    excerpt:
      "Why the simplest solution is almost always the best one, and how to resist complexity.",
    content: onSimplicity,
  },
];
