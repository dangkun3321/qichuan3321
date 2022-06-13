import Pingan from '@/svg/partner-pingan.svg'
import Vivo from '@/svg/partner-vivo.svg'
import Oppo from '@/svg/partner-oppo.svg'
import Byd from '@/svg/partner-byd.svg'
import Weimob from '@/svg/partner-weimob.svg'
import Image from '@/components/Image'

export default function Partner() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-10 lg:grid-cols-6 lg:gap-6 2xl:grid-cols-8 2xl:gap-5">
          <div className="col-span-1 flex justify-center ">
            <Image
              width="151px"
              height="79px"
              src="/static/images/xswitch/china-unicom.webp"
              srcSet="/static/images/xswitch/china-unicom@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center ">
            <Pingan />
          </div>
          <div className="col-span-1 flex justify-center ">
            <Image
              width="151px"
              height="79px"
              src="/static/images/xswitch/23@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center ">
            <Weimob />
          </div>
          <div className="col-span-1 flex justify-center  ">
            <Oppo />
          </div>
          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/24@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/25@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Byd />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/meituan.webp"
              srcSet="/static/images/xswitch/meituan@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/channel-soft.webp"
              srcSet="/static/images/xswitch/channel-soft@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/mucfc.webp"
              srcSet="/static/images/xswitch/mucfc@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/pactera.webp"
              srcSet="/static/images/xswitch/pactera@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/beke.webp"
              srcSet="/static/images/xswitch/beke@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/china-mobile.webp"
              srcSet="/static/images/xswitch/china-mobile@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Image
              width="172px"
              height="90px"
              src="/static/images/xswitch/agora.webp"
              srcSet="/static/images/xswitch/agora@2x.webp"
              alt=""
              className="h-[90px] w-[172px] object-contain"
            />
          </div>

          <div className="col-span-1 flex justify-center  ">
            <Vivo />
          </div>
        </div>
      </div>
    </div>
  )
}
