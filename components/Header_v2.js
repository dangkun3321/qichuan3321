import { Fragment } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useTranslation } from 'next-export-i18n'
import Logo from '@/data/logo.svg'
import LanguageSwitch from '@/components/LanguageSwitch'
import HeaderLayoutWrapper from './HeadersLayoutWrapper'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import cls from 'classnames'
import {
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XIcon,
  DesktopComputerIcon,
  CubeIcon,
  CloudIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline'

const products = [
  {
    name: 'Community',
    description: 'lang_77',
    href: '#community',
    icon: CubeIcon,
  },
  {
    name: 'Commercial',
    description: 'lang_78',
    href: '#commercial',
    icon: CloudIcon,
  },
  {
    name: 'Professional',
    description: 'lang_83',
    href: '#professional',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Enterprise',
    description: 'lang_87',
    href: '#enterprise',
    icon: OfficeBuildingIcon,
  },
]

const headerLinks = [
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: 'Pricing',
    href: '#versions',
  },
  {
    name: 'About Us',
    href: 'https://x-y-t.cn',
  },
]
const callsToAction = [
  { name: 'Free trial', href: '#', icon: DesktopComputerIcon },
  { name: 'Consulting Sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ light }) {
  const { t } = useTranslation()

  return (
    <HeaderLayoutWrapper light={light}>
      <Popover className="relative select-none">
        <div className="mx-auto max-w-full">
          <div className="flex max-h-[64px] items-center justify-between py-4 md:justify-start md:space-x-16 md:py-6 2xl:max-h-[66px] 2xl:space-x-[70px]">
            <div className="flex justify-start">
              <a href="#" className="flex select-none items-center space-x-3">
                <Logo />
                <span
                  className={cls(light ? 'text-gray-900' : 'text-white', 'text-xl font-extrabold')}
                >
                  {siteMetadata.headerTitle}
                </span>
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button
                className={cls(
                  light ? 'text-gray-700' : 'text-white',
                  'inline-flex items-center justify-center rounded-md bg-transparent p-2  focus:outline-none'
                )}
              >
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-6 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        light
                          ? 'text-gray-900'
                          : 'text-gray-100 hover:bg-black hover:bg-opacity-20',
                        'group inline-flex items-center rounded px-4 py-3 text-base font-medium focus:outline-none'
                      )}
                    >
                      <span>{t('Products')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          light ? 'text-gray-900' : 'text-gray-100 group-hover:text-gray-200',
                          'ml-2 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 -ml-4 mt-4 w-screen max-w-[440px] transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {products.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target={item.href.indexOf('http') === -1 ? '' : '_blank'}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                rel="noreferrer"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-[#3f4045]"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {t(item.name)}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {t(item.description)}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root flex-1">
                                <a
                                  href={item.href}
                                  target={item.href.indexOf('http') === -1 ? '' : '_blank'}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                  rel="noreferrer"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{t(item.name)}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {headerLinks.map((header, index) => (
                <a
                  key={index}
                  href={header.href}
                  target={header.href.indexOf('http') === -1 ? '' : '_blank'}
                  className={cls(
                    light
                      ? 'text-gray-900 hover:text-gray-800'
                      : 'text-gray-100 hover:bg-black hover:bg-opacity-20 hover:text-gray-200',
                    'py-3 px-4 text-base font-medium  hover:rounded  hover:bg-opacity-20'
                  )}
                  rel="noreferrer"
                >
                  {t(header.name)}
                </a>
              ))}
            </Popover.Group>
            <div className="hidden items-center justify-end space-x-8 md:flex md:flex-1 lg:w-0">
              {/* <a
                href="#"
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded bg-[#fff] px-4 text-sm font-medium  text-[#3F4045] shadow-sm hover:bg-emerald-600"
              >
                {t('Get started')}
              </a> */}
              <LanguageSwitch light={light} />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-20 origin-top-right transform pt-2 transition md:hidden"
          >
            <div className="divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="border-b border-opacity-50 px-5">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-1 font-semibold">
                    <Logo />
                    <span className="text-xl text-gray-800">{siteMetadata.headerTitle}</span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 outline-none hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-14 px-5 pb-8">
                <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-8">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <div className="flex w-full">
                          <Disclosure.Button className="flex w-full items-center justify-between space-x-2 pr-1 font-medium  ">
                            <span className="text-lg text-gray-900 hover:text-gray-700">
                              {t('Products')}
                            </span>
                            <ChevronDownIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-4 w-4 text-gray-400`}
                            />
                          </Disclosure.Button>
                        </div>

                        <Disclosure.Panel className="border-b pb-6 pt-1 text-sm text-gray-600">
                          <nav className="grid gap-y-8">
                            {products.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target={item.href.indexOf('http') === -1 ? '' : '_blank'}
                                className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                rel="noreferrer"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-[#3f4045]"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium text-gray-900">
                                  {t(item.name)}
                                </span>
                              </a>
                            ))}
                          </nav>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {headerLinks.map((header, index) => (
                    <a
                      key={index}
                      href={header.href}
                      target={header.href.indexOf('http') === -1 ? '' : '_blank'}
                      className="text-lg font-medium text-gray-900 hover:text-gray-700"
                      rel="noreferrer"
                    >
                      {t(header.name)}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                  >
                    {t('Get started')}
                  </a>
                  <LanguageSwitch light={light} />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </HeaderLayoutWrapper>
  )
}
