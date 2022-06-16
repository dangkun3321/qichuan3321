import React, { useEffect, useState, Fragment } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import { useTranslation } from 'next-export-i18n'
import Download from '@/svg/download.svg'
import cls from 'classnames'
import { useRouter } from 'next/router'
import { LanguageSwitcher } from 'next-export-i18n'
import { Listbox, Transition } from '@headlessui/react'
import ArrorDown from '@/svg/arrow-down.svg'
import { Popover } from '@headlessui/react'

const languages = [
  { name: '中文', lang: 'zh' },
  { name: 'English', lang: 'en' },
]

const Header = () => {
  const { t } = useTranslation()
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const [isScrollToTop, setIsScrollToTop] = useState(true)
  const router = useRouter()
  const [isProducts, setIsProducts] = useState(true)
  const [navShow, setNavShow] = useState(false)
  const [selected, setSelected] = useState(languages[0])

  useEffect(() => {
    const scrollY = window.pageYOffset
    setIsScrollToTop(scrollY === 0)
  }, [])

  useEffect(() => {
    isHomePage()
  }, [])

  useEffect(() => {
    const handleRouteChange = () => isHomePage()

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
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

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  const isHomePage = () => {
    const url = document.location.toString()
    const arrUrl = url.split('//')
    const start = arrUrl[1].indexOf('/')
    let relUrl = arrUrl[1].substring(start)

    if (relUrl.indexOf('?') !== -1) {
      relUrl = relUrl.split('?')[0]
    }
    setIsProducts(relUrl === '/products/' || relUrl === '/' || relUrl === '/docs/')
  }

  const languageOnChange = (e) => {
    setSelected(e)
  }

  return (
    <header
      className={cls(
        isProducts && isScrollToTop ? 'bg-transparent' : 'bg-white shadow-sm',
        'fixed left-0 top-0 right-0 z-50 mx-auto flex h-16 max-h-16 w-full  items-center justify-center px-1 laptop:px-0 '
      )}
    >
      <div className="flex h-full w-full justify-between laptop:max-w-7xl">
        <div className="flex items-center">
          <Link href="/" aria-label={siteMetadata.headerTitle} className="mr-14 flex items-center">
            <Logo className="ml-5 mr-3 desktop:ml-0" />
            <div
              className={cls(
                isProducts && isScrollToTop ? 'text-white' : 'text-[#2D3332]',
                'text-xl font-extrabold'
              )}
            >
              {siteMetadata.headerTitle}
            </div>
          </Link>
          <div className="items-center text-base leading-5">
            <div className="hidden laptop:flex">
              {headerNavLinks.map((link) => (
                <div
                  key={link.title}
                  className={cls(isProducts && isScrollToTop ? 'text-white' : 'text-downloadText')}
                >
                  {link.href && (
                    <Link href={link.href} className="mx-2 flex items-center p-1 sm:p-4">
                      {t(link.title)}
                    </Link>
                  )}

                  {link.subHref && (
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button className="mx-2 flex items-center p-1 sm:p-4">
                            {t(link.title)}
                            <ArrorDown className="ml-1" />
                          </Popover.Button>

                          {open && (
                            <Popover.Panel static className="absolute z-10 -ml-8 mt-2">
                              <div className="flex flex-col rounded border bg-white shadow">
                                {link.subHref.map((link, index) => (
                                  <a
                                    key={index}
                                    className="px-10 py-4 text-downloadText hover:bg-gray-50 hover:text-gray-500"
                                    href={link.href}
                                  >
                                    {t(link.title)}
                                  </a>
                                ))}
                              </div>
                            </Popover.Panel>
                          )}
                        </>
                      )}
                    </Popover>
                  )}
                  {/* <Link href={link.href} className="mx-2 flex items-center p-1 sm:p-4">

                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mr-2 flex h-full items-center justify-center laptop:hidden">
          <button
            type="button"
            className={cls(
              isProducts && isScrollToTop ? ' text-white' : ' text-downloadText',
              'h-9 w-9 rounded py-1 px-1 '
            )}
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              {navShow ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
          <div
            className={`fixed top-16 right-0 z-10 h-full w-full transform bg-gray-100 duration-300 ease-in-out dark:bg-gray-800 ${
              navShow ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button
              type="button"
              aria-label="toggle modal"
              className="fixed h-full w-full cursor-auto focus:outline-none"
              onClick={onToggleNav}
            ></button>
            <nav className="fixed mt-8 h-full">
              {headerNavLinks.map((link) => (
                <div key={link.title} className="px-12 py-4">
                  <Link
                    href={link.href}
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    onClick={onToggleNav}
                  >
                    {t(link.title)}

                    {link.subHref &&
                      link.subHref.map((link, index) => (
                        <div key={index}>
                          <Link href={link.href} className="text-xl">
                            {t(link.title)}
                          </Link>
                        </div>
                      ))}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="mr-3 hidden items-center laptop:flex">
          <Link
            href="/pages/xswitch-install"
            className="flex h-[32px] items-center justify-center rounded-full bg-btnPrimary px-5 py-2 text-sm text-[#2D3332]"
          >
            <Download className="mr-1" />
            {t('Free Download')}
          </Link>
          <div className="ml-5 flex items-center justify-center rounded-full px-1 py-2 text-sm text-white">
            <Listbox value={selected} onChange={languageOnChange}>
              <div className="relative w-28">
                <Listbox.Button className="relative flex w-full cursor-default space-x-2 py-2 pl-3 text-left focus:outline-none sm:text-sm">
                  <span
                    className={cls(
                      isProducts && isScrollToTop ? ' text-white' : 'text-downloadText',
                      'block cursor-pointer truncate'
                    )}
                  >
                    {selected.name}
                  </span>
                  <span className="pointer-events-none flex items-center">
                    <ArrorDown
                      className={cls(
                        isProducts && isScrollToTop ? ' text-gray-400' : 'text-downloadText',
                        'flex items-center justify-center'
                      )}
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {languages.map((language, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default  text-center ${
                            active ? ' bg-gray-200 font-medium text-black' : 'text-gray-900'
                          }`
                        }
                        value={language}
                      >
                        {({ selected }) => (
                          <>
                            <LanguageSwitcher className="h-full w-full" lang={language.lang}>
                              <span
                                className={`relative block truncate py-2 ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {language.name}
                              </span>
                            </LanguageSwitcher>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
