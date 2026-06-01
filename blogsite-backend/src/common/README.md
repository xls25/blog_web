# Common Folder (`/src/common`)

This directory houses all cross-cutting, global utilities that are completely independent of your specific business logic.

## Architectural Rule
Code inside this folder should be **domain-agnostic**. A good rule of thumb: if you could copy-paste a file from this folder into an entirely different NestJS project (e.g., an e-commerce backend vs. a logistics backend) and it still works flawlessly, it belongs here.

## Directory Breakdown

* **`/filters`**: Exception filters used to catch unhandled errors and format uniform HTTP error responses.
* **`/guards`**: Global or multi-module security/authorization checkpoints (e.g., `JwtAuthGuard`, `RolesGuard`).
* **`/interceptors`**: Code that transforms data *before* it hits a controller or *after* it leaves (e.g., `LoggingInterceptor`, `TransformResponseInterceptor`).
* **`/middleware`**: Low-level Express/Fastify middleware executed before guards (e.g., request rate-limiting, raw-body parsers).

> ⚠️ **Warning:** Never import files from the `/modules` directory into `/common`. This creates bad circular dependencies. `/common` must always be a leaf node in your dependency tree.