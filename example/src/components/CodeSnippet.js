import React from "react"
// eslint-disable-next-line
import Prism from "prismjs"
import 'prismjs/themes/prism-tomorrow.css'

const CodeSnippet = ({ code, lang = "javascript" }) => (
  <pre>
    <code className={`language-${lang}`}>{code.trim()}</code>
  </pre>
)

export default CodeSnippet
