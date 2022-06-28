import SectionWrapper from '@/components/SectionWrapper'
import SectionContainer from '@/components/SectionContainers'

export default function Header({ children }) {
  return (
    <>
      <SectionContainer>
        <div className="bg-[#263036]">
          <SectionWrapper>{children}</SectionWrapper>
        </div>
      </SectionContainer>
    </>
  )
}
