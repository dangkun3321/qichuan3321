import React, { useEffect, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import { useTranslation } from 'next-export-i18n'
import Download from '@/svg/download.svg'
import ArrowDown from '@/svg/arrow-down.svg'
import cls from 'classnames'
import { useRouter } from 'next/router'

const Header = () => {
  const { t } = useTranslation()
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const [isScrollToTop, setIsScrollToTop] = useState(true)
  const router = useRouter()
  const [isProducts, setIsProducts] = useState(false)

  useEffect(() => {
    var url = document.location.toString()
    var arrUrl = url.split('//')

    var start = arrUrl[1].indexOf('/')
    var relUrl = arrUrl[1].substring(start)
    if (relUrl.indexOf('?') != -1) {
      relUrl = relUrl.split('?')[0]
    }
    setIsProducts(relUrl === '/products' || relUrl === '/')
  }, [])

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsProducts(url === '/products' || url === '/')
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

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

  return (
    <header
      className={cls(
        isProducts && isScrollToTop ? 'bg-transparent' : 'bg-navBackground',
        'fixed left-0 top-0 right-0 z-50 mx-auto flex h-16 max-h-16 w-full select-none items-center justify-center px-1 laptop:px-0 desktop:max-w-screen-desktop'
      )}
    >
      <div className="flex h-full w-full justify-between laptop:max-w-6xl">
        <div className="flex items-center">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <Logo className="mr-14 ml-5 desktop:ml-0" />
          </Link>
          <div className="items-center text-base leading-5">
            <div className="hidden laptop:flex">
              {headerNavLinks.map((link) => (
                <div key={link.title}>
                  <Link
                    href={link.href}
                    className="mx-2 flex items-center p-1 text-white dark:text-gray-100 sm:p-4"
                  >
                    {t(link.title)}
                    {link.subHref && <ArrowDown className="ml-1" />}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MobileNav />

        <div className="mr-3 hidden items-center laptop:flex">
          <Link
            href="/download"
            className="flex h-[32px] items-center justify-center rounded-full bg-btnPrimary px-5 py-2 text-sm text-downloadText"
          >
            <Download className="mr-1" />
            {t('Free Download')}
          </Link>
          {/* <div className="ml-5 flex items-center justify-center rounded-full px-1 py-2 text-sm text-white">
  <div className="mr-1 font-medium">
    <LanguageSwitcher lang="zh">{t('zh')}</LanguageSwitcher>
  </div>
  <div>|</div>
  <div className="ml-1 font-medium">
    <LanguageSwitcher lang="en">{t('en')}</LanguageSwitcher>
  </div>
</div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
