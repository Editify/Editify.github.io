---
title: Getting Started
description: A Quick Start guide.
order: 1
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

```rust title="example snippet"
#[cfg(target_os = "macos")]
mod macos;
#[cfg(target_os = "windows")]
mod windows;

fn main() {
    #[cfg(target_os = "macos")]
    macos::main();
    #[cfg(target_os = "windows")]
    window::main();
}
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
