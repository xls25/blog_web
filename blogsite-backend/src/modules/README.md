# Modules Folder (`/src/modules`)

This is the heart and soul of the backend. It contains all core business logic, organized strictly by **Feature Domain** (e.g., `auth`, `users`, `billing`).

## Design Pattern: Feature Isolation
We follow a modular design. Every feature module should act as an encapsulated ecosystem. It should manage its own routing, database interactions, and business processing, exposing only what is strictly necessary to the rest of the application.

## Core Guidelines
* **Keep it Flat:** Do not nest feature folders inside other feature folders (e.g., do not put a `/passwords` folder inside `/users`). Keep them flat inside `/modules`.
* **Explicit Imports:** If Module A needs access to data from Module B, Module A must explicitly import Module B via its `.module.ts` file.