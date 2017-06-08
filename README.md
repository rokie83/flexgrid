# Bexio Flexgrid-Development

This repository delivers an environment to develop the [@bexio/flexgrid](https://www.npmjs.com/package/@bexio/flexgrid) npm package. It is part of a code library for the [Bexio](http://www.bexio.com) company.

## Development server

Run `npm run serve` for a development server. Navigate to `http://localhost:8000`. The app will automatically reload if you change any of the source files.

## Check if the artifact is valid

Run `npm run validate` for a quick check if the artifact, that will be stored in the `dist/` directory, is passing the linting.

## Build the artifacts as preview

Run `npm run build` to preview the artifact in a dist directory.

## Release the artifact to [npm](https://www.npmjs.com/)

Run `npm run patch-release`, `npm run minor-release` or `npm run major-release` to increment the version and publish the artifacts to npm. A CHANGELOG will be generated and linting will be executed on the fly.


## License

MIT [Bexio](http://www.bexio.com)
