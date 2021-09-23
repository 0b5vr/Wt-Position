# Wt-Position

A pixel-perfect font heavily inspired by Native Instruments Massive

## How to build

### Prerequisite

- Affinity Designer
- Fontforge
- Node.js

### Steps

- 1, Export all chars in Wt-Position.afdesign

- 2, Run the commends:

```sh
node prepare-svg.js
fontforge --script main.pe
```
