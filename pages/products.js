import React, { useState, useEffect } from 'react'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Partner from '@/components/Partner'
import DownloadBold from '@/svg/download-bold.svg'
import Arrow from '@/svg/arrow.svg'
import Dot from '@/svg/dot.svg'
import Fs from '@/svg/fs.svg'
import Img1 from '@/svg/img-01.svg'
import { useTranslation } from 'next-export-i18n'
import cls from 'classnames'
import ContactCard from '@/components/ContactCard'
import { Popover } from '@headlessui/react'
import Version from '@/components/Version'
import RadianSvg from '@/svg/radian.svg'

export default function Products() {
  const [isContactCardShow, setContactCardShow] = useState(false)
  const { t } = useTranslation()
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    setContactCardShow(true)
    return () => {
      setContactCardShow(false)
    }
  }, [])

  const tabOnClick = (index) => {
    setTabIndex(index)
  }

  return (
    <div className="mx-auto desktop:max-w-screen-desktop">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="w-ful -z-10  -mt-16  flex h-[740px]  justify-center bg-gradient-to-br from-fromNavbackground to-stopNavbackground bg-contain bg-no-repeat px-3 laptop:h-[46rem]  laptop:px-0">
        <div className="flex w-full max-w-7xl">
          <div className=" mt-48 flex flex-1 flex-col items-center text-center laptop:mt-52 laptop:items-start">
            <div className="flex flex-wrap justify-center text-center text-4xl leading-14 text-white">
              <span className="hidden">{t('lang_01')}</span>
              <span>{t('title_01')}</span>
              <span>{t('title_02')}</span>
              <span>{t('title_03')}</span>
              <span>{t('title_04')}</span>
              <span>{t('title_05')}</span>
            </div>

            <div className="mt-10 text-lg font-light text-white">{t('lang_02')}</div>

            <p className=" mt-3 text-lg font-light text-white">{t('lang_03')}</p>

            <div className="mt-14 mb-16 flex  laptop:mt-24 laptop:mb-28 ">
              <Link href="/pages/xswitch-install">
                <div className=" relative flex h-40 w-40 flex-col rounded-tl rounded-bl bg-btnPrimary pl-6 pt-6 text-downloadText shadow-xl ">
                  <div className="flex flex-col">
                    <div className="pb-px  text-sm">{t('Community Edition')}</div>
                    <div className="pt-1 text-lg font-medium">{t('Free Download')}</div>
                  </div>
                  <div className="flex w-full flex-1 items-center justify-end pr-7">
                    <DownloadBold className="h-11 w-11" />
                  </div>
                </div>
              </Link>

              <div className="relative flex h-40 w-40 flex-col justify-between  rounded-tr rounded-br bg-serviceBackground pl-6 pt-6 text-serviceText shadow-xl">
                <div className="flex flex-col">
                  <div className="pb-px  text-sm">{t('Payed Edition')}</div>
                  <div className="pt-1 text-lg font-medium">{t('Customer Service')}</div>
                </div>

                <div className="flex w-full flex-1 items-center justify-end pr-7">
                  <Arrow className="h-11 w-11" />
                </div>
                <Link
                  href="/"
                  className="absolute left-0 top-0 opacity-0 transition duration-200 ease-in-out hover:opacity-100"
                >
                  <div className={cls(isContactCardShow ? 'block' : 'hidden')}>
                    <ContactCard />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className=" -ml-16 hidden laptop:flex laptop:flex-1 laptop:items-center">
            <Image
              width="858px"
              height="602px"
              src="/static/images/xswitch/09.webp"
              alt="avatar"
              className="h-[602px] w-[858px] object-contain pt-16 "
            />
          </div>
        </div>
      </div>

      <div className="flex  flex-col flex-wrap items-center justify-center bg-white px-4 pt-16 pb-2 laptop:bg-screenBackground laptop:px-0 laptop:pb-48 laptop:pt-32">
        <div className="text-[2.5rem] font-semibold  text-title laptop:text-5xl">
          {t('lang_04')}
        </div>

        <div className="mt-7 flex max-w-xs flex-col items-center justify-center space-y-2 text-center text-content laptop:max-w-[580px]">
          {t('lang_05')}
        </div>

        <div className="laptop mt-14 flex max-w-5xl flex-wrap laptop:grid-cols-3 laptop:justify-center laptop:gap-4 desktop:max-w-none desktop:grid-cols-5 desktop:gap-4">
          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full w-72 bg-[url('/static/images/xswitch/10@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/10.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              {t('Video/Audio Call')}
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              {t('lang_06')}
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/11@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/11.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              {t('online meeting')}
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              {t('lang_07')}
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/12@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/12.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              {t('call center')}
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              {t('lang_08')}
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/13@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/13.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              {t('Multiprotocol Gateway')}
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              {t('lang_09')}
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/14@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/14.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              {t('AI')}
            </div>

            <div className=" mt-6 break-all px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              {t('lang_10')}
            </div>
          </div>
        </div>
      </div>

      <div className="w-ful relative flex  justify-center overflow-hidden bg-gradient-to-br from-fromNavbackground to-stopNavbackground bg-no-repeat pb-24 ">
        <Dot className="absolute left-0 top-0 hidden laptop:-mt-32 laptop:-ml-64 laptop:block desktop:-ml-32 desktop:-mt-7" />
        <Dot className="absolute right-0 bottom-0 hidden laptop:-mb-32  laptop:-mr-64 laptop:block desktop:-mr-32 desktop:-mb-7" />

        <div className="flex w-full flex-col items-center justify-center">
          <div className="mt-14 bg-gradient-to-r from-[#9BFFFA] to-[#C8FFB8] bg-clip-text text-[2.125rem] font-extrabold text-transparent laptop:text-5xl">
            {t('lang_11')}
          </div>
          <div className="mt-4 flex flex-col items-center space-y-2 px-4 text-center leading-7 text-[rgba(255,255,255,0.6)] laptop:max-w-lg laptop:px-0">
            {t('lang_12')}
          </div>
          <Fs className=" mt-24 hidden h-full object-contain laptop:block" />
          <div className="mt-14 h-[198.79px] w-full max-w-[389px] bg-[url('/static/images/xswitch/17.png')] bg-contain bg-no-repeat laptop:hidden"></div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white pt-20 laptop:bg-screenBackground laptop:px-20 laptop:pt-32 laptop:pb-12 desktop:px-28">
        <div className=" text-4xl font-semibold text-title laptop:text-5xl">{t('lang_13')}</div>
        <div className="mt-4 px-6 text-center text-sm text-content laptop:mt-2 laptop:px-0">
          {t('lang_14')}
        </div>

        <div className="mt-16 flex items-center justify-center space-x-6 text-content laptop:space-x-20">
          <div onClick={() => tabOnClick(0)} className="flex cursor-pointer items-center">
            <div
              className={cls(
                tabIndex === 0 ? 'flex' : 'hidden',
                'h-6 w-6 items-center justify-center rounded-sm bg-trialText bg-opacity-10'
              )}
            >
              <div className=" flex h-4  w-4 items-center justify-center rounded-full bg-trialText bg-opacity-25">
                <div className="h-2 w-2 rounded-full bg-trialText bg-opacity-80" />
              </div>
            </div>

            <div>{t('Strong scalability')}</div>
          </div>

          <div onClick={() => tabOnClick(1)} className="flex cursor-pointer items-center">
            <div
              className={cls(
                tabIndex === 1 ? 'flex' : 'hidden',
                'h-6 w-6 items-center justify-center rounded-sm bg-trialText bg-opacity-10'
              )}
            >
              <div className=" flex h-4  w-4 items-center justify-center rounded-full bg-trialText bg-opacity-25">
                <div className="h-2 w-2 rounded-full bg-trialText bg-opacity-80" />
              </div>
            </div>

            <div>{t('safe and stable')}</div>
          </div>

          <div onClick={() => tabOnClick(2)} className="flex cursor-pointer items-center">
            <div
              className={cls(
                tabIndex === 2 ? 'flex' : 'hidden',
                'h-6 w-6 items-center justify-center rounded-sm bg-trialText bg-opacity-10'
              )}
            >
              <div className=" flex h-4  w-4 items-center justify-center rounded-full bg-trialText bg-opacity-25">
                <div className="h-2 w-2 rounded-full bg-trialText bg-opacity-80" />
              </div>
            </div>

            <div>{t('lang_15')}</div>
          </div>
        </div>

        <div
          className={cls(
            tabIndex === 0 ? 'flex' : 'hidden',
            'mt-8 bg-white pl-10 pb-10 laptop:h-[32rem] laptop:w-full laptop:max-w-7xl laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow'
          )}
        >
          <div className="flex flex-1 flex-col pr-12">
            <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
              <div>{t('Strong scalability')}</div>
            </div>

            <div className="mt-9 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('lang_16')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_17')}</div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('lang_18')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_19')}</div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('interconnection')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-[34rem] text-sm text-content laptop:w-[34rem]">
              <strong>{t('lang_20')}</strong>
              {t('lang_21')}
            </div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('lang_22')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_23')}</div>
          </div>

          <div className="-mt-36">
            <Image
              width="586px"
              height="365px"
              src="/static/images/xswitch/20.webp"
              alt={t('rts homepage')}
              className="hidden h-full w-full  object-contain laptop:block"
            />
          </div>
        </div>

        <div
          className={cls(
            tabIndex === 1 ? 'flex' : 'hidden',
            'mt-8 bg-white pl-10 pb-10 laptop:h-[32rem] laptop:w-full laptop:max-w-7xl laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow'
          )}
        >
          <div className="flex flex-1 flex-col pr-12">
            <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
              <div>{t('safe and stable')}</div>
            </div>

            <div className="mt-9 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('lang_24')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_25')}</div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('system protection')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_26')}</div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('run smoothly')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_27')}</div>
          </div>

          <div>
            <Image
              width="586px"
              height="365px"
              src="/static/images/xswitch/22.webp"
              alt={t('rts homepage')}
              className="hidden h-full w-[422px]  object-contain laptop:block"
            />
          </div>
        </div>

        <div
          className={cls(
            tabIndex === 2 ? 'flex' : 'hidden',
            'mt-8  bg-white pl-10 pb-10 laptop:h-[32rem] laptop:w-full laptop:max-w-7xl laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow'
          )}
        >
          <div className="flex flex-1 flex-col pr-12">
            <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
              <div>{t('lang_28')}</div>
            </div>

            <div className="mt-9 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('lang_29')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_30')}</div>

            <div className="mt-9 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('lang_31')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_32')}</div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">{t('open interface')}</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">{t('lang_33')}</div>
          </div>

          <div className="-mt-3">
            <Img1 className="hidden laptop:block" />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center bg-white pt-28  pb-12  laptop:bg-screenBackground  laptop:py-28 ">
        <div className="flex max-w-full items-center space-x-4 laptop:w-full laptop:max-w-7xl">
          <div className="hidden w-full flex-1 items-center justify-end laptop:flex">
            <div className="  h-[380px] w-full items-end bg-contain bg-no-repeat laptop:flex laptop:bg-[url('/static/images/xswitch/18.webp')]"></div>
          </div>

          <div className="flex flex-1 flex-col justify-center pr-4 laptop:pr-0">
            <div className="w-full text-center text-4xl font-semibold text-title laptop:text-left laptop:text-5xl">
              {t('lang_34')}
            </div>
            <div className="mt-16 flex max-w-lg flex-col space-y-5 text-sm text-content laptop:mt-8">
              <div>{t('lang_35')}</div>
              <div>{t('lang_36')}</div>
              <div>{t('lang_37')}</div>
            </div>
            <div className="mt-12 flex w-full flex-wrap justify-between laptop:max-w-lg ">
              <div className="flex w-full flex-wrap justify-between laptop:w-auto">
                <Link
                  className="flex w-full items-center laptop:w-auto laptop:space-x-2"
                  href={siteMetadata.rts}
                  aria-label={t('rts homepage')}
                >
                  <Image
                    width="16px"
                    height="16px"
                    src="/static/images/xswitch/07.png"
                    alt={t('rts homepage')}
                    className="h-4 w-4 "
                  />
                  <span className="text-sm text-content">{t('rts homepage')}</span>
                </Link>

                <Link
                  className="ml-0 mt-4 flex items-center space-x-2 laptop:ml-5 laptop:mt-0"
                  href={siteMetadata.freeswitchCN}
                  aria-label={t('FreeSWITCH-CN')}
                >
                  <Image
                    width="16px"
                    height="16px"
                    src="/static/images/xswitch/19.png"
                    alt={t('FreeSWITCH-CN')}
                    className="h-4 w-4 "
                  />
                  <span className="text-sm text-content">{t('FreeSWITCH-CN')}</span>
                </Link>
              </div>

              {/* <Link
                className="mt-5 flex items-center space-x-2  rounded border border-downloadText px-4 py-2 laptop:mt-0"
                href="/"
                aria-label={siteMetadata.headerTitle}
              >
                <span className="text-sm text-downloadText">??????????????????</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col items-center bg-[#f0f2f5] lg:bg-white laptop:w-full laptop:max-w-7xl">
        <a id="versions" />
        <div className="flex flex-row items-center  justify-center pt-24 text-4xl font-semibold text-title laptop:pt-32 laptop:text-5xl">
          <div>{t('Versions and Purchases')}</div>
          <Image
            width="55px"
            height="43px"
            src="/static/images/xswitch/15.webp"
            alt="avatar"
            className="-mt-12 ml-2  h-[1.9375rem] w-[2.5rem] laptop:h-[43px] laptop:w-[55px]"
          />
        </div>
        <Version />
      </div>

      <div className="w-ful flex items-center justify-center  bg-white pt-16">
        <Partner />
      </div>

      <div className="relative w-full bg-[#29c68e] py-12 laptop:overflow-hidden laptop:bg-white laptop:py-0">
        <div className="relative z-30 flex h-72 flex-col items-center justify-center space-y-5 px-5 text-center laptop:h-[550px] laptop:px-0 laptop:text-left ">
          <div className="text-[24px] text-white laptop:mt-24  laptop:text-3xl">{t('lang_54')}</div>
          <div className="pb-8 text-sm text-white laptop:pb-0">{t('lang_55')}</div>
          <div className="flex space-x-8">
            <Link
              href="/pages/xswitch-install"
              aria-label={siteMetadata.headerTitle}
              className=" rounded bg-white px-9 py-3 text-sm font-medium text-trialText"
            >
              {t('Free trial')}
            </Link>

            <Popover>
              <Popover.Button className="rounded border px-9 py-3 text-sm text-white">
                {t('Customer Service')}
              </Popover.Button>

              <Popover.Panel className="absolute laptop:top-1/2 laptop:-mt-24">
                <ContactCard click />
              </Popover.Panel>
            </Popover>
          </div>
        </div>

        <div className="absolute top-0 -left-8 -right-8 z-20 hidden h-full laptop:block">
          <Image src="/static/images/bg2x.png" alt="" className="h-full w-full object-cover" />
        </div>

        <div className="absolute -bottom-1 -left-8  -right-8 z-50  hidden overflow-hidden text-[#263036] laptop:block">
          <RadianSvg className="w-full fill-current" />
        </div>
      </div>
    </div>
  )
}
