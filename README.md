<!--
Generated from kit-meta.json by scripts/demo-kit-standard.mjs.
Update kit-meta.json or capability.yml, then rerun the generator instead of hand-editing generated README sections.
-->

# Hello World

Minimal AI app Kit that exposes a single MCP tool returning hello world.

## What It Does

- Starts one Bun workload with an MCP endpoint.
- Provides a tiny tool that is useful for validating CapaKit installation and skill wiring.

## Technologies

- CapaKit MCP endpoint
- TypeScript
- Bun

## App Kit Info

```text
AI app Kit: hello-world

Exposes
- Public path: /mcp
  Protocols:
    - Protocol: mcp
      Path: /mcp
  Default MCP: yes

Requires
Secrets:
No secrets declared.

Host mounts:
No host mounts declared.

Options:
No options declared.

External services
No external services declared.

AI app Kit dependencies
No AI app Kit dependencies declared.

Commands
- Run:
  capakit run https://github.com/capakit/hello-world-demo-kit
- Test:
  capakit test .
```

## Run

```sh
capakit run https://github.com/capakit/hello-world-demo-kit
```

## Install As A Skill

```sh
capakit run https://github.com/capakit/hello-world-demo-kit --global-skill codex
```

## Test

```sh
capakit test .
```

## Security

Vault secrets are user-provided secrets available only to trusted integrations such as secure exit nodes. Kit secrets are Kit-local secrets that can be exposed to code workloads.

## About CapaKit

CapaKit runs AI app Kits locally with isolated workloads, explicit mounts, and agent-friendly commands. Learn more at https://capakit.com.

More AI app Kits: https://github.com/capakit/apps
