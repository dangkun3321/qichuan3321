import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import Telephone from './social-icons/telephone.svg'
import Mail from './social-icons/mail.svg'
import cls from 'classnames'

export default function ContactCard({ click }) {
  return (
    <div
      className={cls(
        click && 'rounded-tl rounded-bl',
        'flex h-[17rem] w-40 flex-col items-center justify-center rounded-tr rounded-br bg-serviceBackground tablet:h-40 tablet:w-80 tablet:flex-row'
      )}
    >
      <div className="relative  flex h-40 w-40 flex-col justify-between overflow-hidden pl-6 pt-6 text-serviceText">
        <div className="flex flex-col">
          {!click && <div className="pb-px  text-sm">企业定制版</div>}

          <div className="pt-1 text-center text-lg font-medium">联系客服</div>
        </div>

        <div className="flex w-full flex-1 items-center justify-center">
          <div className="flex w-full flex-col space-y-4 text-center  text-sm text-white">
            <div
              className="flex items-center space-x-2"
              href={`tel:${siteMetadata.telephone}`}
              aria-label="tel"
            >
              <Telephone className="h-4 w-4 select-none" />
              <Link
                className="laptop:hidden"
                href={`tel:${siteMetadata.telephone}`}
                aria-label="tel"
              >
                {siteMetadata.telephone}
              </Link>
              <span className="hidden select-all laptop:block">{siteMetadata.telephone}</span>
            </div>

            <div className="flex items-center space-x-2" href="/" aria-label={siteMetadata.email}>
              <Mail className="h-4 w-4 select-none" />
              <span className="-mt-1 select-all">{siteMetadata.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-40 flex-col items-center justify-center">
        <Image
          width="300px"
          height="300px"
          src="/static/images/xswitch/wechat.png"
          alt="wechat"
          className="h-[6.5rem] w-[6.5rem] rounded object-contain tablet:h-28 tablet:w-28"
        />
      </div>
    </div>
  )
}
