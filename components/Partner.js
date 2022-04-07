import Pingan from '@/svg/partner-pingan.svg'
import Vivo from '@/svg/partner-vivo.svg'
import Oppo from '@/svg/partner-oppo.svg'
import Byd from '@/svg/partner-byd.svg'
import Weimob from '@/svg/partner-weimob.svg'
import Image from '@/components/Image'

export default function Partner() {
  return (
    <div className="flex flex-wrap space-x-2">
      <Pingan />
      <Image
        width="172px"
        height="90px"
        src="/static/images/xswitch/23@2x.webp"
        alt="avatar"
        className="h-[90px] w-[172px] object-contain"
      />
      <Vivo />
      <Weimob />
      <Oppo />
      <Image
        width="172px"
        height="90px"
        src="/static/images/xswitch/24@2x.webp"
        alt="avatar"
        className="h-[90px] w-[172px] object-contain"
      />
      <Image
        width="172px"
        height="90px"
        src="/static/images/xswitch/25@2x.webp"
        alt="avatar"
        className="h-[90px] w-[172px] object-contain"
      />
      <Byd />
    </div>
  )
}
