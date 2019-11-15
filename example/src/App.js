import React, { Component } from 'react'

import Breadcrumbs from 'voltage-breadcrumbs'

const links = [
  { link: "http://google.com", text: "Home" },
  { link: "http://google.com", text: "Account information" },
  { link: "http://google.com", text: "Security details" },
]

export default class App extends Component {
  render () {
    return (
      <div>
        <Breadcrumbs links={links} />
      </div>
    )
  }
}
