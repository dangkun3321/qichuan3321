import { useTranslation } from 'next-export-i18n'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'

export default function Session() {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="pb-20 pt-4 md:pb-0 lg:relative lg:pt-0">
        <div className="relative z-10 h-52 w-full select-none  md:mt-0 md:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:hidden lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full select-none object-contain opacity-100 md:opacity-100"
            src="/static/images/xswitch/09.webp"
            alt=""
          />
        </div>
        <div className="mx-auto w-full pt-10 text-center md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 lg:text-left xl:pb-36 2xl:pt-32 2xl:pb-64">
          <div className="lg:w-3/5  desktop:pr-0">
            <h1 className="m-auto flex flex-row flex-wrap justify-center pb-3 text-[25px] font-semibold tracking-tight text-gray-100 md:block md:max-w-full md:text-4xl md:font-extrabold md:text-white lg:text-[36px] xl:text-[46px] 2xl:text-[50px] desktop:text-[55px]">
              <span className="hidden">{t('lang_01')}</span>
              <span className="lg:leading-12 2xl:leading-14">{t('title_01')}</span>
              <span className="lg:leading-12 2xl:leading-14">{t('title_02')}</span>
              <span className="lg:leading-12 2xl:leading-14">{t('title_03')}</span>
              <span className="lg:leading-12 2xl:leading-14">{t('title_04')}</span>
              <span className="lg:leading-12 2xl:leading-14">{t('title_05')}</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-300 md:mt-5 md:max-w-3xl lg:mx-0">
              {t('lang_02')}
            </p>
            <p className="mx-auto mt-1 max-w-md text-lg text-gray-300 md:mt-5 md:max-w-3xl lg:mx-0">
              {t('lang_03')}
            </p>
            <div className="mt-10">
              <a
                href={siteMetadata.getStarted}
                className="rounded bg-black bg-opacity-20 px-20 py-3 text-base font-semibold text-white hover:bg-opacity-50 md:py-4 md:px-12 md:text-lg"
              >
                {t('Get started')}
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-10 hidden  h-56 w-full select-none sm:h-72 md:mt-0 md:h-118 lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:h-full lg:w-2/5 ">
          <Image
            className="absolute inset-0 h-full w-full select-none object-contain opacity-70 md:opacity-100"
            src="/static/images/xswitch/09.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
