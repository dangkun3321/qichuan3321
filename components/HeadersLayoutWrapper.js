import SectionWrapper from '@/components/SectionWrapper'
import SectionContainer from '@/components/SectionContainers'
import cls from 'classnames'

export default function Header({ light, children }) {
  return (
    <>
      <SectionContainer>
        <div className="fixed top-0 left-0 z-30 h-px w-full bg-white md:hidden" />
        <div
          className={cls(
            light ? 'bg-white shadow-sm 2xl:shadow' : 'bg-[#263036]',
            'fixed top-px left-0 right-0 z-50 md:top-0'
          )}
        >
          <SectionWrapper>{children}</SectionWrapper>
        </div>
      </SectionContainer>
    </>
  )
}
