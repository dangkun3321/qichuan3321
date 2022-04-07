import { useTranslation } from 'next-export-i18n'
import Image from '@/components/Image'

export default function WechatCard() {
  const { t } = useTranslation()

  return (
    <div className="h-full w-full">
      <Image
        width="300px"
        height="300px"
        src="/static/images/xswitch/wechat.png"
        alt="wechat"
        className="h-full w-full object-contain"
      />
    </div>
  )
}
