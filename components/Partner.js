import Pingan from '@/svg/partner-pingan.svg'
import Vivo from '@/svg/partner-vivo.svg'
import Oppo from '@/svg/partner-oppo.svg'
import Byd from '@/svg/partner-byd.svg'

export default function Partner() {
  return (
    <div className="flex flex-wrap space-x-2">
      <Pingan />
      <Vivo />
      <Oppo />
      <Byd />
    </div>
  )
}
