import Link from './Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import Copyright from './Copyright'
import { useTranslation } from 'next-export-i18n'
import SocialIcon from '@/components/social-icons'
import Github from './social-icons/github.svg'
import Telephone from './social-icons/telephone.svg'
import Mail from './social-icons/mail.svg'
import styles from './Footer.module.css'
import Oval from '@/svg/oval.svg'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex w-full justify-center bg-gradient-to-br from-fromNavbackground  to-stopNavbackground bg-contain bg-no-repeat py-20 pl-6 text-xs text-copyrightText laptop:items-center  laptop:py-24">
        <div className="flex w-full flex-wrap laptop:w-auto laptop:justify-center">
          <div className="flex  w-full flex-wrap space-y-0 laptop:space-x-20 laptop:space-y-0 ">
            <div className="flex  w-1/2 flex-col laptop:w-auto">
              <div className="mb-5 font-medium text-white">{t('Products')}</div>
              <div className="flex flex-col space-y-2 text-xs font-light text-white">
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {t('audio call')}
                </Link>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {t('video call')}
                </Link>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {t('online meeting')}
                </Link>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {t('call center')}
                </Link>
              </div>
            </div>

            <div className="flex  w-1/2 flex-col laptop:w-auto">
              <div className="mb-5 font-medium text-white">{t('Resource')}</div>
              <div className="flex flex-col space-y-2 text-xs font-light text-white">
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {t('document')}
                </Link>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {t('illustrate')}
                </Link>
              </div>
            </div>

            <div className="flex  w-1/2 flex-col pt-12 laptop:w-auto laptop:pt-0">
              <div className="mb-5 font-medium text-white">{t('Related Links')}</div>
              <div className="flex flex-col space-y-3 text-xs font-light text-white">
                <Link
                  className="flex items-center space-x-2"
                  href="/"
                  aria-label={siteMetadata.headerTitle}
                >
                  <Image
                    width="16px"
                    height="16px"
                    src="/static/images/xswitch/08.png"
                    alt={t('xyt homepage')}
                    className="h-4 w-4 select-none"
                  />
                  <span>{t('xyt homepage')}</span>
                </Link>

                <Link
                  className="flex items-center space-x-2"
                  href="/"
                  aria-label={siteMetadata.headerTitle}
                >
                  <Image
                    width="16px"
                    height="16px"
                    src="/static/images/xswitch/07.png"
                    alt={t('rts homepage')}
                    className="h-4 w-4 select-none"
                  />
                  <span>{t('rts homepage')}</span>
                </Link>

                <Link
                  className="flex items-center space-x-2"
                  href="/"
                  aria-label={siteMetadata.headerTitle}
                >
                  <Github className="h-4 w-4 select-none" />
                  <span>Github</span>
                </Link>
              </div>
            </div>

            <div className="flex w-1/2 flex-col pt-12 laptop:mt-0 laptop:w-auto laptop:pt-0 laptop:pl-118">
              <div className="mb-5 font-medium text-white">{t('Contact Us')}</div>
              <div className="flex flex-col space-y-4 text-xs font-light text-white">
                <Link
                  className="flex items-center space-x-2"
                  href="/"
                  aria-label={siteMetadata.telephone}
                >
                  <Telephone className="h-4 w-4 select-none" />
                  <span>{siteMetadata.telephone}</span>
                </Link>

                <Link
                  className="flex items-center space-x-2"
                  href="/"
                  aria-label={siteMetadata.email}
                >
                  <Mail className="h-4 w-4 select-none" />
                  <span className="-mt-1">{siteMetadata.email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  )
}
