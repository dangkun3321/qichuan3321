import { visit } from 'unist-util-visit'

export default function remarkMscgen() {
  return (tree) =>
    visit(tree, 'code', (node, index, parent) => {
      const nodeLang = node.lang || ''

      let language = ''

      if (nodeLang.includes(':')) {
        language = nodeLang.slice(0, nodeLang.search(':'))
      }

      if (node.lang !== 'msc') {
        return
      }

      const className = 'code mscgen mscgen_js'

      const titleNode = {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: className }],
        children: [{ type: 'text', value: node.value }],
        data: { _xdmExplicitJsx: true },
      }

      parent.children.splice(index, 1, titleNode)
      node.lang = language
    })
}
