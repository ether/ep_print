![Publish Status](https://github.com/ether/ep_print/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_print/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_print/actions/workflows/test-and-release.yml)

# Print button for printing pads

## Settings
Append ``"ep_print":{"hideButton":"true"}`` to your ``settings.json`` to hide the print button from the toolbar.

## Todo
* Print from timeslider
* Page break support

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_print` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_print
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
