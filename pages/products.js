import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Partner from '@/components/Partner'
import DownloadBold from '@/svg/download-bold.svg'
import Arrow from '@/svg/arrow.svg'
import Tel from '@/svg/tel.svg'
import People from '@/svg/people.svg'
import Dot from '@/svg/dot.svg'
import Fs from '@/svg/fs.svg'
import Img1 from '@/svg/img-01.svg'
import { useTranslation } from 'next-export-i18n'

export default function Products() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto desktop:max-w-screen-desktop">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="w-ful -z-10  -mt-16  flex h-[740px] select-none justify-center bg-gradient-to-br from-fromNavbackground to-stopNavbackground bg-contain bg-no-repeat px-3 laptop:h-[46rem]  laptop:px-0">
        <div className="flex w-full max-w-7xl">
          <div className=" mt-48 flex flex-1 flex-col items-center text-center laptop:mt-52">
            <div className="text-4xl leading-14 text-white">高度可定制的实时音视频通信平台</div>

            <div className="mt-10 text-lg font-light text-white">
              为用户提供一站式语音、视频、会议解决方案
            </div>

            <p className=" mt-3 text-lg font-light text-white">满足企业多样化实时音视频通信需求</p>

            <div className="mt-14 mb-16 flex select-none laptop:mt-24 laptop:mb-28 ">
              <div className=" relative flex h-40 w-40 flex-col rounded-tl rounded-bl bg-btnPrimary pl-6 pt-6 text-downloadText shadow-xl ">
                <div className="flex flex-col">
                  <div className="pb-px  text-sm">本地部署版</div>
                  <div className="pt-1 text-lg font-medium">免费下载</div>
                </div>
                <div className="flex w-full flex-1 items-center justify-end pr-7">
                  <DownloadBold className="h-11 w-11" />
                </div>
                <Link href="/" className=" absolute left-0 top-0 right-0 bottom-0 opacity-0">
                  start use
                </Link>
              </div>

              <div className="relative flex h-40 w-40 flex-col justify-between rounded-tr rounded-br bg-serviceBackground pl-6 pt-6 text-serviceText shadow-xl">
                <div className="flex flex-col">
                  <div className="pb-px  text-sm">企业定制版</div>
                  <div className="pt-1 text-lg font-medium">联系客服</div>
                </div>

                <div className="flex w-full flex-1 items-center justify-end pr-7">
                  <Arrow className="h-11 w-11" />
                </div>
                <Link href="/" className=" absolute left-0 top-0 right-0 bottom-0  opacity-0">
                  service
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

      <div className="flex select-none flex-col flex-wrap items-center justify-center bg-screenBackground px-4 pt-16 pb-2 laptop:px-0 laptop:pb-48 laptop:pt-32">
        <div className="text-[2.5rem] font-semibold  text-title laptop:text-5xl">
          满足多种行业需求
        </div>

        <div className="mt-7 flex max-w-xs flex-col items-center justify-center space-y-2 text-center text-content laptop:max-w-[580px]">
          XSwitch产品稳定可靠，经过多年打磨和众多大客户验证，功能强大而灵活，可根据您的需求进行专业定制。
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center space-y-4 laptop:px-28 desktop:px-0">
          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full w-72 bg-[url('/static/images/xswitch/10@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/10.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              音视频通话
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              提供基本的音视频通话能力，支持不同协议的终端互联互通，清晰流畅不卡顿。
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/11@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/11.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              线上会议
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              多人线上音视频会议功能，具有友好的Web会控界面，多协议终端接入，多会议室级联。
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/12@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/12.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              呼叫中心
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              强大的呼叫中心功能，为客户提供座席排队、点击拨号、自动外呼等服务。
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/13@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/13.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              多协议网关
            </div>

            <div className=" mt-6 px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              5G视频网关，连接4G VoLTE和5G NR手机，对接微信小程序、声网Agora SDK、腾讯TRTC
              SDK和SBC。
            </div>
          </div>

          <div className="mt-4 flex h-72 w-full flex-col items-center rounded bg-white laptop:mr-6 laptop:w-auto laptop:shadow-sm">
            <div className="h-full  w-72 bg-[url('/static/images/xswitch/14@2x.webp')] bg-contain bg-no-repeat laptop:mt-4 laptop:h-24 laptop:w-[13.2rem] laptop:bg-[url('/static/images/xswitch/14.webp')] laptop:bg-contain"></div>
            <div className="-mt-36 text-2xl font-medium text-title laptop:mt-0 laptop:text-base ">
              人工智能
            </div>

            <div className=" mt-6 break-all px-8 text-center text-xs leading-5 text-content laptop:w-60 laptop:text-left">
              支持主流的AI厂商音视频对接集成，包括但不限于ASR/TTS/NLP/人脸识别/数字人等。
            </div>
          </div>
        </div>
      </div>

      <div className="w-ful relative flex select-none justify-center overflow-hidden bg-gradient-to-br from-fromNavbackground to-stopNavbackground bg-no-repeat pb-24 ">
        <Dot className="absolute left-0 top-0 hidden laptop:-mt-32 laptop:-ml-64 laptop:block desktop:-ml-32 desktop:-mt-7" />
        <Dot className="absolute right-0 bottom-0 hidden laptop:-mb-32  laptop:-mr-64 laptop:block desktop:-mr-32 desktop:-mb-7" />

        <div className="flex w-full flex-col items-center justify-center">
          <div className="mt-14 bg-gradient-to-r from-[#9BFFFA] to-[#C8FFB8] bg-clip-text text-[2.125rem] font-extrabold text-transparent laptop:text-5xl">
            模块化 可定制 易扩展
          </div>
          <div className="mt-4 flex flex-col items-center space-y-2 px-4 text-center leading-7 text-[rgba(255,255,255,0.6)] laptop:max-w-lg laptop:px-0">
            XSwitch是模块化设计、积木式按需叠加和无限伸缩扩容的通信产品，更可以通过定制支持集群部署，实现更强大的功能。
          </div>
          <Fs className=" mt-24 hidden h-full object-contain laptop:block" />
          <div className="mt-14 h-[198.79px] w-full max-w-[389px] bg-[url('/static/images/xswitch/17.png')] bg-contain bg-no-repeat laptop:hidden"></div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-screenBackground pt-20 laptop:px-20 laptop:pt-32 laptop:pb-12 desktop:px-28">
        <div className=" text-4xl font-semibold text-title laptop:text-5xl">
          为什么选择XSwitch？
        </div>
        <div className="mt-4 px-6 text-center text-sm text-content laptop:mt-2 laptop:px-0">
          其它通信厂商卖给您他们设计好的功能，我们提供您真正想要的功能
        </div>

        <div className="mt-16 flex items-center justify-center space-x-6 text-content laptop:space-x-20">
          <div>强扩展性</div>
          <div>安全稳定</div>
          <div className="flex items-center">
            <div className=" flex h-6 w-6 items-center justify-center rounded-sm bg-trialText bg-opacity-10">
              <div className=" flex h-4  w-4 items-center justify-center rounded-full bg-trialText bg-opacity-25">
                <div className="h-2 w-2 rounded-full bg-trialText bg-opacity-80" />
              </div>
            </div>

            <div>技术好 生态好</div>
          </div>
        </div>

        <div className="mt-8 flex bg-white pl-10 laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow">
          <div className="flex flex-1 flex-col pr-12">
            <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
              <div>技术好 生态好</div>
            </div>

            <div className="mt-9 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">支持多运行环境</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">
              支持公有云平台部署、Docker容器化和K8S部署、私有化部署、支持国产操作系统和CPU、集群部署和弹性伸缩
            </div>

            <div className="mt-7 flex items-center">
              <div className=" h-3 w-3 rounded-sm bg-[#BDC2D4] " />
              <div className="ml-3 font-medium text-title">开源社区</div>
            </div>
            <div className=" ml-6 mt-2 max-w-lg text-sm text-content">
              我们团队维护着RTS社区和FreeSWITCH中文社区，并
              <span className=" font-semibold  text-title">免费提供</span>
              我们所使用的所有开源软件的技术咨询和技术支持。
            </div>
          </div>

          <div className="-mt-3 pb-16">
            <Img1 className="hidden laptop:block" />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center bg-screenBackground py-28">
        <div className="flex w-full max-w-7xl items-center space-x-4">
          <div className="hidden w-full flex-1 items-center justify-end laptop:flex">
            <div className="  h-[380px] w-full items-end bg-contain bg-no-repeat laptop:flex laptop:bg-[url('/static/images/xswitch/18.webp')]"></div>
          </div>

          <div className="flex flex-1 flex-col ">
            <div className="text-5xl font-semibold text-title">活跃的开源社区</div>
            <div className="mt-8 flex max-w-lg flex-col space-y-5 text-sm text-content">
              <div>
                XSwitch基于开源技术构建，我们的团队为主流的开源通信软件贡献了十几万行代码，我们相信开源是最好的开发协作模式。
              </div>
              <div>
                我们团队维护着RTS社区和FreeSWITCH中文社区，同时
                <span className="text-[#3E414D]">免费提供</span>
                我们所使用的所有开源软件的技术咨询和技术支持。
              </div>
              <div>
                通过这些技术支持我们得以全面地了解这些基础软件的各种玩法，以及容易遇到的各种“坑”，并以最快的速度做出解决方案。
              </div>
            </div>
            <div className="mt-12 flex max-w-lg justify-between ">
              <div className="flex">
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
                  <span className="text-sm text-content">{t('rts homepage')}</span>
                </Link>

                <Link
                  className="ml-5 flex items-center space-x-2"
                  href="/"
                  aria-label={siteMetadata.headerTitle}
                >
                  <Image
                    width="16px"
                    height="16px"
                    src="/static/images/xswitch/19.png"
                    alt={t('FreeSWITCH-CN')}
                    className="h-4 w-4 select-none"
                  />
                  <span className="text-sm text-content">{t('FreeSWITCH-CN')}</span>
                </Link>
              </div>

              <Link
                className="flex items-center space-x-2 rounded  border border-downloadText px-4 py-2"
                href="/"
                aria-label={siteMetadata.headerTitle}
              >
                <span className="text-sm text-downloadText">开源技术咨询</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center bg-white">
        <div className="flex flex-row items-center  justify-center pt-32 text-4xl font-semibold text-title laptop:text-5xl">
          <div>版本与购买</div>
          <Image
            width="55px"
            height="43px"
            src="/static/images/xswitch/15.webp"
            alt="avatar"
            className=" -mt-12 ml-2 h-[1.9375rem] w-[2.5rem] laptop:h-[2.875rem] laptop:w-[3.435rem]"
          />
        </div>
        <div className=" mt-3 px-6 text-center text-sm leading-6  text-content laptop:max-w-2xl">
          XSwitch产品稳定可靠，经过多年打磨和众多大客户验证，功能强大而灵活，可根据您的需求进行专业定制，囊括了市面上所有的视音频平台功能。
        </div>

        <div className="flex w-full flex-wrap px-5 laptop:w-auto laptop:space-x-6 laptop:px-0">
          <div className="mt-16  flex w-full flex-col overflow-hidden rounded shadow laptop:w-118 laptop:items-start ">
            <div className="h-3 w-full bg-gradient-to-r from-[#57F8FF] to-[#87FFB9]" />
            <div className="mt-7 flex h-[20rem] flex-col  justify-between px-6 laptop:h-80 laptop:pl-12">
              <div className="flex flex-1 flex-col laptop:px-0">
                <div className=" pl-1 text-2xl font-semibold text-title">企业定制版</div>
                <div className="flex flex-col space-y-3 text-xs font-semibold text-content">
                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title" />
                    <div>标准版所有功能</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>加载更多私有模块</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>支持私有化部署，可以部署在企业内部或云服务器上</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>可根据需求定制功能</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>不限制并发Channel数</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-10 pb-12 laptop:pb-8 ">
                <div className=" rounded-sm border border-downloadText py-2 px-4 text-sm text-downloadText">
                  申请试用
                </div>
                <div className=" rounded-sm border bg-downloadText py-2 px-4 text-sm text-white">
                  联系客服
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16  flex w-full flex-col  overflow-hidden rounded shadow laptop:w-118 laptop:items-start ">
            <div className="h-3 w-full bg-[#F1F2F2]" />
            <div className="mt-7 flex h-[20rem] flex-col  justify-between px-6 laptop:h-80 laptop:pl-12">
              <div className="flex flex-1 flex-col laptop:px-0">
                <div className=" pl-1 text-2xl font-semibold text-title">标准版</div>
                <div className="flex flex-col space-y-3 text-xs   font-semibold text-content">
                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title" />
                    <div>一对一音视频通话和多人音视频会议</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>通用IP-PBX功能，如通话、转接、IVR、会议、简单呼叫中心等</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>中英文Web界面</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>支持REST、WebSocket和NATS API</div>
                  </div>

                  <div className="mt-5 flex items-center">
                    <div className=" mr-2 h-2 w-2 rounded-full bg-title pr-1" />
                    <div>
                      {' '}
                      按用户数、功能和并发License收费，
                      <span className=" font-semibold text-title">
                        免费提供5个并发Channel测试License
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-10 pb-12 laptop:pb-8 ">
                <div className=" rounded-sm border border-downloadText py-2 px-4 text-sm text-downloadText">
                  申请试用
                </div>
                <div className=" rounded-sm border bg-downloadText py-2 px-4 text-sm text-white">
                  联系客服
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap px-5 laptop:w-auto laptop:space-x-6 laptop:px-0">
          <div className="mt-16  flex w-full flex-col overflow-hidden rounded border shadow-sm laptop:w-118">
            <div className="mt-7 flex h-44  flex-col justify-between px-6 laptop:pl-12">
              <div className="flex flex-1 flex-col">
                <div className=" pl-1 text-2xl font-semibold text-title">XSwitch Cloud</div>
                <div className="flex flex-col space-y-3 text-xs  font-semibold text-content">
                  <div className="mt-5 flex items-center">
                    <div>XSwitch的云端版本，支持自定义域名，按用户数和使用量付费</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-10 pb-8">
                <div className=" rounded-sm border border-downloadText py-2 px-4 text-sm text-downloadText">
                  申请试用
                </div>
                <div className=" rounded-sm border bg-downloadText py-2 px-4 text-sm text-white">
                  联系客服
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16  flex w-full flex-col overflow-hidden rounded border shadow-sm laptop:w-118">
            <div className="mt-7 flex h-44  flex-col justify-between px-6 laptop:pl-12 laptop:pr-16">
              <div className="flex flex-1 flex-col">
                <div className=" pl-1 text-2xl font-semibold text-title">学习版</div>
                <div className="flex flex-col space-y-3 text-xs  font-semibold text-content">
                  <div className="mt-5 flex items-center">
                    <div>免费的Docker镜像，适用于快速学习FreeSWITCH，无WebUI</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 pb-8">
                <div className=" rounded-sm border border-downloadText py-2 px-4 text-sm text-downloadText">
                  免费下载
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-ful relative flex   items-center justify-center py-16 laptop:py-28">
        <Partner />
      </div>

      <div className="w-ful flex h-72 select-none flex-col items-center justify-center space-y-4 bg-serviceOval laptop:h-96 ">
        <div className="text-[28px] text-white  laptop:text-3xl">XSwitch 让实时互动更高效</div>
        <div className="pb-8 text-sm text-white laptop:pb-0">
          企业定制版满足您的一切视音频通讯需求
        </div>
        <div className="flex space-x-8">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className=" rounded bg-white px-9 py-4 text-sm font-medium text-trialText"
          >
            免费体验
          </Link>

          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className=" rounded border bg-serviceOval px-9 py-4 text-sm text-white"
          >
            联系客服
          </Link>
        </div>
      </div>

      <div className="fixed right-0 top-2/3 z-50 mr-5 hidden flex-col shadow laptop:flex">
        <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-tl rounded-tr bg-imBackground">
          <People />
        </div>

        <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-bl rounded-br bg-white">
          <Tel />
        </div>
      </div>
    </div>
  )
}
