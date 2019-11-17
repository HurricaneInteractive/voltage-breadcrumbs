import React, { Component } from 'react'

import Breadcrumbs from 'voltage-breadcrumbs'
import Hero from './components/Hero'

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

const Seperator = () => (<span>S</span>)

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
        <div>
          <Breadcrumbs links={links} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Breadcrumbs links={moreLinks} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Breadcrumbs links={customLinks} separator="-" />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Breadcrumbs links={customLinks} separator={<Seperator />} />
        </div>
      </div>
    )
  }
}
