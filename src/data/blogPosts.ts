export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-reliable-systems",
    title: "Building Reliable Systems at Scale",
    date: "2025-12-15",
    excerpt:
      "Lessons learned from designing distributed systems that handle millions of requests per day.",
    content: `
When building systems that need to handle significant load, reliability isn't just a feature — it's the foundation everything else is built upon.

## Start with failure

The first question I ask when designing a new system isn't "how will this work?" but "how will this fail?" Every component will fail eventually. Networks partition. Disks fill up. Memory leaks. The question is whether your system degrades gracefully or catastrophically.

## Circuit breakers

One of the most valuable patterns I've adopted is the circuit breaker. When a downstream service starts failing, rather than continuing to hammer it with requests (making the problem worse), a circuit breaker trips and fails fast. This gives the failing service time to recover.

## Observability over monitoring

Traditional monitoring tells you *that* something is wrong. Observability tells you *why*. Structured logging, distributed tracing, and meaningful metrics are non-negotiable in any system I build.

## The human factor

No system is more reliable than the team operating it. Runbooks, incident response procedures, and blameless post-mortems are just as important as the code itself.

---

Reliability is a practice, not a destination. Every incident is a learning opportunity, and every system can be made more resilient.
    `,
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns I Use Every Day",
    date: "2025-10-03",
    excerpt:
      "Practical TypeScript patterns that make codebases more maintainable and type-safe.",
    content: `
After years of writing TypeScript, these are the patterns I reach for most often.

## Branded types

Branded types prevent you from accidentally passing a \`UserId\` where a \`PostId\` is expected, even though both are strings under the hood.

\`\`\`typescript
type Brand<T, B> = T & { __brand: B };
type UserId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'PostId'>;
\`\`\`

## Exhaustive switches

Using \`never\` to ensure switch statements handle all cases at compile time.

## Result types

Instead of throwing exceptions, return a discriminated union that forces callers to handle both success and failure cases explicitly.

---

Good types are documentation that the compiler enforces.
    `,
  },
  {
    slug: "on-simplicity",
    title: "On Simplicity in Software",
    date: "2025-08-20",
    excerpt:
      "Why the simplest solution is almost always the best one, and how to resist complexity.",
    content: `
Complexity is the default. Simplicity requires effort.

## The complexity trap

Every abstraction, every layer of indirection, every "just in case" feature adds complexity. And complexity compounds. A system with 10 simple components that each have 2 possible states has 1,024 possible system states. Add one more component and you double it.

## Rules I follow

1. **Don't solve problems you don't have.** YAGNI isn't laziness — it's discipline.
2. **Delete code.** The best code is no code. Every line is a liability.
3. **Boring technology.** Choose well-understood, battle-tested tools over shiny new ones.
4. **Measure before optimizing.** Most performance intuitions are wrong.

## The cost of "just in case"

Every feature, abstraction, or configuration option you add "just in case" has a maintenance cost. That cost compounds over time. Be ruthless about what you include.

---

Simplicity isn't about writing less code. It's about solving the right problem with the minimum viable complexity.
    `,
  },
];
