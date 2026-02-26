# On Simplicity in Software

Why the simplest solution is almost always the best one, and how to resist complexity.

---

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
