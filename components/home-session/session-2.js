import { useTranslation } from 'next-export-i18n'
import Image from '@/components/Image'
import {
  VideoCameraIcon,
  CloudIcon,
  MicrophoneIcon,
  ChipIcon,
  SupportIcon,
} from '@heroicons/react/solid'

const features = [
  {
    title: 'Video/Audio Call',
    description: 'lang_06',
    imageUrl: '/static/images/xswitch/10@2x.webp',
    icon: VideoCameraIcon,
  },
  {
    title: 'online meeting',
    description: 'lang_07',
    imageUrl: '/static/images/xswitch/11@2x.webp',
    icon: CloudIcon,
  },
  {
    title: 'call center',
    description: 'lang_08',
    imageUrl: '/static/images/xswitch/12@2x.webp',
    icon: MicrophoneIcon,
  },
  {
    title: 'Multiprotocol Gateway',
    description: 'lang_09',
    imageUrl: '/static/images/xswitch/13@2x.webp',
    icon: ChipIcon,
  },
  {
    title: 'AI',
    description: 'lang_10',
    imageUrl: '/static/images/xswitch/14@2x.webp',
    icon: SupportIcon,
  },
]

export default function Session() {
  const { t } = useTranslation()

  return (
    <div className="relative px-3 pt-16 pb-16 md:px-0 xl:pt-24 xl:pb-32">
      <div className="relative mx-auto max-w-full">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl xl:text-left">
          {t('lang_04')}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-left text-sm  leading-6 text-gray-600 sm:mt-4 md:max-w-xl md:text-base lg:max-w-3xl xl:mx-0 xl:mt-3 xl:max-w-4xl xl:text-lg">
          {t('lang_05')}
        </p>

        <div className="mx-auto mt-6 grid max-w-lg md:max-w-xl lg:max-w-3xl xl:mt-12 xl:max-w-none xl:grid-cols-5 xl:gap-2 2xl:gap-4 desktop:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-row overflow-hidden rounded-lg xl:flex-col xl:bg-white xl:shadow-lg"
            >
              <div className="hidden xl:block xl:flex-shrink-0">
                <Image
                  width="198"
                  height="96"
                  className="mt-3 h-24 w-full object-cover"
                  src={feature.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between xl:flex-1 xl:px-6">
                <div className="flex-1">
                  <div className="block py-2 xl:py-0">
                    <div className="flex items-center space-x-1 xl:mt-6 xl:justify-center xl:space-x-0">
                      <feature.icon className="w-6 text-downloadText xl:hidden" />
                      <p className="text-center text-xl font-semibold text-gray-900">
                        {t(feature.title)}
                      </p>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base xl:mt-3 xl:pb-5 xl:text-base xl:leading-7">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
