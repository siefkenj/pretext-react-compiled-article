# pretext-react-compiled-article

A compiled version of the Pretext sample article for use in testing pretext-react

This pre-compiled build is used by `pretext-react` for development.

## Building

Install the Pretext CLI and then run

```bash
./build.sh
```

This will output the built `sample-article` from Rob Beezer's `overhaul` branch into `html-dev`
(built with a local reference to the react Javascript) and `html-reference` (built using the
default Javascript).
