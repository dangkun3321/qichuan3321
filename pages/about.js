import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Building from '@/components/Building'

export default function About() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Building />
    </>
  )
}
