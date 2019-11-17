# voltage-breadcrumbs

[![NPM](https://img.shields.io/npm/v/voltage-breadcrumbs.svg)](https://www.npmjs.com/package/voltage-breadcrumbs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Easy to use and customisable breadcrumb component for your react applications.

For the breadcrumb component to stay small and customisable, I had to make some decisions.

1. The last item is always the active page
2. Collapse to dropdown menu after 3 items
3. Make the component seem dump by having the dev pass the links (there are components that auto generate from a routing package, this isn't on of those)

## Demo

See a demo and the documentation [here](https://voltage-breadcrumbs.netlify.com/)

## Install

```bash
npm install voltage-breadcrumbs
# OR
yarn add voltage-breadcrumbs
```

## Basic Usage

As a minimun, the breadcrumbs need a array of elements to display. This can come in two forms;

### Array of objects

```js
import Breadcrumbs from "voltage-breadcrumbs"

// links
const links = [
	{ link: "<url>", text: "Home" },
	...
]

// in render method
<Breadcrumbs links={links} />
```

`link` and `text` are both required when using this approach. Additional keys will be used as props on the `<a>` in the breadcrumb list. This give you the ability to pass custom props to the links.

### Array of Custom Components

```js
const CustomLink = ({text}) => <a href="#">{text}</a>

const links = [
	<CustomLink text="Account information" />,
	...
]

// in render method
<Breadcrumbs links={links} />
```

## Custom Separator

The component allows you to pass in a custom separator or ignore rendering the separator all together.

### Example

```js
// Custom string separator
<Breadcrumbs seperator="-" />

// Custom component
<Breadcrumbs separator={<CustomSeparator />} />

// Hide Separator
<Breadcrumbs separator={null}>
```

## What happens after 3 links?

If the `links` array contains more than 3 items, the additional links collapse into a dropdown menu. This is to stop the breadcrumbs spanning the whole screen.
