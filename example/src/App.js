import React, { Component } from 'react'

import Breadcrumbs from 'voltage-breadcrumbs'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import CodeSnippet from './components/CodeSnippet'

const links = [
  { link: "http://google.com", text: "Home" },
  { link: "http://google.com", text: "Account information" },
  { link: "http://google.com", text: "Security details" },
]

const moreLinks = [
  { link: "http://google.com", text: "Home" },
  { link: "http://google.com", text: "Account information" },
  { link: "http://google.com", text: "Security details" },
  { link: "http://youtube.com", text: "Change Account Password" },
  { link: "http://youtube.com", text: "Confirm change" }
]

const Link = ({ text }) => (
  <a href="http://google.com">{text}</a>
)

const customLinks = [
  <Link text="Account information" />,
  <Link text="Security details" />,
  <Link text="Confirm change" />
]

export default class App extends Component {
  render () {
    return (
      <div className="page-layout">
        <Hero />
        <Introduction />

        <h2>Install</h2>
        <CodeSnippet code={`yarn add voltage-breadcrumbs`} lang="bash" />

        <h2>Basic usage</h2>
        <p>As a minimun, the breadcrumbs need a array of elements to display. This can come in two forms;</p>

        <h3>Array of objects</h3>
        <CodeSnippet code={`import Breadcrumbs from "voltage-breadcrumbs"\n\n// links\nconst links = [\n\t{ link: "<url>", text: "Home" },\n\t...\n]\n\n// in render method\n<Breadcrumbs links={links} />`} />
        <p><code>link</code> and <code>text</code> are both required when using this approach. Additional keys will be used as props on the <code>&lt;a&gt;</code> in the breadcrumb list. This give you the ability to pass custom props to the links.</p>

        <h4>Outputs:</h4>
        <div className="breadcrumb-example">
          <Breadcrumbs links={links} />
        </div>

        <h3>Array of Custom Components</h3>
        <CodeSnippet code={`const CustomLink = ({text}) => <a href="#">{text}</a>\n\nconst links = [\n\t<CustomLink text="Account information" />,\n\t...\n]\n\n// in render method\n<Breadcrumbs links={links} />`} />

        <h4>Outputs:</h4>
        <div className="breadcrumb-example">
          <Breadcrumbs links={customLinks} />
        </div>

        <h2>Custom Separator</h2>
        <p>The component allows you to pass in a custom separator or ignore rendering the separator all together.</p>

        <h3>Example</h3>
        <CodeSnippet code={`// Custom string separator\n<Breadcrumbs seperator="-" />\n\n// Custom component\n<Breadcrumbs separator={<CustomSeparator />} />\n\n// Hide Separator\n<Breadcrumbs separator={null}>`} />

        <h4>Outputs:</h4>
        <div className="breadcrumb-example">
          <Breadcrumbs links={customLinks} separator="-" />
        </div>

        <h2>What happens after 3 links?</h2>
        <p>If the <code>links</code> array contains more than 3 items, the additional links collapse into a dropdown menu. This is to stop the breadcrumbs spanning the whole screen.</p>

        <h3>Example</h3>
        <div className="breadcrumb-example">
          <Breadcrumbs links={moreLinks} />
        </div>

        <h2>Want to contribute?</h2>
        <p>If you have found an issue or want to contribute to the project in the form of a feature. Check out the <a href="https://github.com/HurricaneInteractive/voltage-breadcrumbs" target="_blank" rel="noopener noreferrer">Github</a> page.</p>

        <p>Please have a look at the <a href="https://github.com/HurricaneInteractive/voltage-breadcrumbs/issues" target="_blank" rel="noopener noreferrer">issues</a> list before creating yours. It is possible that the issue has been raised and being worked on.</p>
      </div>
    )
  }
}
