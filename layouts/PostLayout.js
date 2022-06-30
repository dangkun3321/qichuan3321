import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb'
import ScrollTop from '@/components/ScrollTop'
import TOCInline from '@/components/TOCInline'
import { useTranslation } from 'next-export-i18n'
import { useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import Script from 'next/script'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({
  toc,
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
  mdxSource,
}) {
  const { t } = useTranslation()
  const { slug, fileName, date, title, tags } = frontMatter
  const postRef = useRef()
  const [current, setCurrent] = useState()
  const [scrollDir, setScrollDir] = useState()
  const [isScrollToTop, setIsScrollToTop] = useState(true)

  const routes = [
    {
      title: t('Docs'),
      href: '/docs/',
    },
    {
      title: title,
    },
  ]

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
      setIsScrollToTop(scrollY === 0)
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir, isScrollToTop])

  useEffect(() => {
    if (toc.length > 0 && isScrollToTop) {
      const current = toc[0].value
      setCurrent(current)
    }
  }, [isScrollToTop])

  useEffect(() => {
    onScrollStop(() => {
      if (postRef && postRef.current && postRef.current.childNodes) {
        const nodeList = postRef.current.childNodes
        let tmp = []
        nodeList.forEach((node) => {
          if (node.nodeName === 'H2' || node.nodeName === 'H3' || node.nodeName === 'H1') {
            if (node.getBoundingClientRect().top < 60) {
              tmp.push(node.textContent)
            }
          }
        })
        if (tmp.length > 0) {
          setCurrent(tmp[tmp.length - 1])
        }
      }
    })
  }, [])

  useEffect(() => {
    let timeout = null
    const onCopy = (e) => {
      e.preventDefault()
      navigator.clipboard.writeText(e.target.parentElement.href)
      e.target.className = 'icon icon-link copyed'
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(() => {
        e.target.className = 'icon icon-link'
      }, 600)
    }

    let tmp = []
    if (postRef && postRef.current && postRef.current.childNodes) {
      const nodeList = postRef.current.childNodes
      nodeList.forEach((node) => {
        if (
          node.nodeName === 'H4' ||
          node.nodeName === 'H2' ||
          node.nodeName === 'H3' ||
          node.nodeName === 'H1'
        ) {
          tmp.push(node)
        }
      })
      tmp.map((node) => {
        node.firstChild.addEventListener('click', onCopy)
      })
    }

    return () => {
      tmp.map((node) => {
        node.firstChild.removeEventListener('click', onCopy)
      })
      clearTimeout(timeout)
    }
  }, [])

  const onScrollStop = (callback) => {
    let isScrolling
    window.addEventListener(
      'scroll',
      (e) => {
        clearTimeout(isScrolling)
        isScrolling = setTimeout(() => {
          callback()
        }, 150)
      },
      false
    )
  }

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/pages/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />

      <Script id="mscgen__js" src="/js/mscgen-inpage.js" strategy="afterInteractive" />

      <div className="pt-6 pb-4 md:pb-0">
        <Breadcrumb routes={routes} />
      </div>
      <div className={cls(toc.length === 0 && 'mx-auto', 'flex max-w-[230mm] flex-col')}>
        <div
          className={cls(
            toc.length === 0 && 'mx-auto',
            'w-full max-w-[220mm] rounded-lg py-3 dark:bg-transparent md:py-12 '
          )}
        >
          <PageTitle>{title}</PageTitle>
          <div className="pt-3">
            <time dateTime={date} className="text-gray-500">
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </div>
          <div
            id="page-post"
            className="prose-h4:tex-base prose max-w-none pt-3 pb-8 prose-h1:mb-0 prose-h1:pt-2 prose-h1:pb-1 prose-h1:text-2xl prose-h2:mb-0 prose-h2:pt-2 prose-h2:pb-1 prose-h2:text-xl prose-h3:text-lg prose-blockquote:font-normal prose-blockquote:not-italic dark:prose-dark md:pt-10 lg:prose-h1:text-4xl lg:prose-h2:text-3xl lg:prose-h3:text-2xl lg:prose-h4:text-xl"
            ref={postRef}
          >
            {children}
          </div>
        </div>
      </div>

      {toc.length > 0 && (
        <div className="fixed top-0 bottom-36 right-28  z-50 mt-36 hidden max-w-sm xl:block">
          <TOCInline
            toc={toc}
            exclude="Overview"
            toHeading={3}
            current={current}
            title={t('contents')}
          />
        </div>
      )}
      <ScrollTop />
    </>
  )
}
