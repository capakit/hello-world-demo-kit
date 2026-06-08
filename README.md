<!--
Generated from kit-meta.json by scripts/demo-kit-standard.mjs.
Update kit-meta.json or capability.yml, then rerun the generator instead of hand-editing generated README sections.
-->

# Hello World

Minimal AI app Kit that exposes a single MCP tool returning hello world.

## What It Does

- Starts one Bun workload with an MCP endpoint.
- Provides a tiny tool that is useful for validating CapaKit installation and skill wiring.

## Tags

- mcp
- starter
- typescript
- bun

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

Use as dependency
Add this to another Kit's capability.yml:
dependencies:
  hello-world:
    source:
      path: /Users/roman/Code/capakit/demo-kits/hello-world-demo-kit

Commands
- Run:
  capakit run https://github.com/capakit/hello-world-demo-kit
- Test:
  capakit test --kit /Users/roman/Code/capakit/demo-kits/hello-world-demo-kit
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

## About CapaKit

https://capakit.com
