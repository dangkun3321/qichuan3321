import cls from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
  current,
  title,
}) => {
  const tocRef = useRef()
  const [isScroll, setScroll] = useState()

  useEffect(() => {
    if (tocRef) {
      setScroll(tocRef.current.scrollHeight > tocRef.current.clientHeight)
    }
  }, [])

  useEffect(() => {
    if (current && isScroll) {
      refs[current].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [current, isScroll])

  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const refs = filteredToc.reduce((song, value) => {
    song[value.value] = React.createRef()
    return song
  }, {})

  const tocList = (
    <ul ref={tocRef} className="scrollbar-hide h-full overflow-y-auto scroll-smooth">
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          ref={refs[heading.value]}
          className={cls(
            heading.depth >= indentDepth && 'ml-6',
            current === heading.value
              ? 'text-fslink'
              : 'hover:text-fslink font-normal text-gray-600 dark:text-gray-400',
            'py-1 font-semibold'
          )}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {asDisclosure ? (
        <details open>
          <summary className="ml-6 pt-2 pb-2 text-xl font-bold">Table of Contents</summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        <>
          {title && (
            <div className="pb-2 font-medium uppercase text-gray-500 dark:text-gray-300 ">
              {title}
            </div>
          )}

          {tocList}
        </>
      )}
    </>
  )
}

export default TOCInline
