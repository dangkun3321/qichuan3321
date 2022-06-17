import { useTranslation } from 'next-export-i18n'
import siteMetadata from '@/data/siteMetadata'
import { PhoneIcon, MailIcon, PencilAltIcon } from '@heroicons/react/solid'
import cls from 'classnames'

const navigation = {
  resources: [
    { name: 'User Manual', href: '/pages/docs/' },
    { name: 'Docs', href: '/pages/docs/' },
    { name: 'Git Code', href: siteMetadata.github },
    { name: 'Github Code', href: siteMetadata.github },
  ],
  related: [
    { name: 'xyt homepage', href: siteMetadata.xyt },
    { name: 'rts homepage', href: siteMetadata.rts },
    { name: 'Weibo', href: siteMetadata.weibo },
    { name: 'Github Discussions', href: siteMetadata.githubDiscussions },
  ],
  terms: [
    { name: 'Privacy Policy', href: '/pages/privacy/' },
    { name: 'End User License Agreement', href: '/pages/eula/' },
  ],
  contact: [
    { name: siteMetadata.telephone, href: `tel:${siteMetadata.telephone}`, icon: <PhoneIcon /> },
    { name: siteMetadata.email, href: '#', icon: <MailIcon /> },
    {
      name: 'Issues',
      href: 'https://git.xswitch.cn/xswitch/docs/issues/1',
      icon: <PencilAltIcon />,
    },
  ],
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#263036]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  {t('Resources')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {t(item.name)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  {t('Related Links')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.related.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {t(item.name)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  {t('Terms')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.terms.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {t(item.name)}
                      </a>
                    </li>
                  ))}
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0 md:gap-24">
                <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  {t('Contact Us')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contact.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white"
                    >
                      <div className="h-5 w-5 fill-current">{item.icon}</div>
                      <a
                        href={item.href}
                        className={cls(
                          item.name === 'Issues'
                            ? 'pointer-events-auto'
                            : 'pointer-events-none select-all',
                          item.name === siteMetadata.telephone &&
                            'pointer-events-auto md:pointer-events-none',
                          'text-base md:select-all'
                        )}
                      >
                        {t(item.name)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 py-4 md:flex md:items-center md:justify-between md:py-8">
          <p className="text-center text-sm text-gray-400 md:order-1 md:flex md:items-center md:text-left md:text-base">
            <div> &copy;{`2016-${new Date().getFullYear()} ${t('company')}`}</div>
            <a
              className="block text-center md:pl-4 md:text-left"
              href="https://beian.miit.gov.cn/"
              aria-label={siteMetadata.icp}
            >
              {siteMetadata.icp}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
