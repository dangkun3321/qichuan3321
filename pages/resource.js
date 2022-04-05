import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Building from '@/components/Building'

export default function Resource() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Building />
    </>
  )
}
