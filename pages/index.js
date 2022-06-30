import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import SectionWrapper from '@/components/SectionWrapper'
import SectionContainer from '@/components/SectionContainers'
import { PageSEO } from '@/components/SEO'
import Header from '@/components/Header_v2'
import Session_1 from '@/components/home-session/session-1'
import Session_2 from '@/components/home-session/session-2'
import Session_3 from '@/components/home-session/session-3'
import Session_4 from '@/components/home-session/session-4'
import Session_5 from '@/components/home-session/session-5'
import Session_6 from '@/components/home-session/session-6'
import Session_7 from '@/components/home-session/session-7'
import Session_8 from '@/components/home-session/session-8'
import Footer from '@/components/Footer'
import cls from 'classnames'

export default function Page() {
  const [light, setLight] = useState(false)
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const [isScrollToTop, setIsScrollToTop] = useState(true)

  useEffect(() => {
    const scrollY = window.pageYOffset
    setIsScrollToTop(scrollY < 200)
  }, [])

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
      setIsScrollToTop(scrollY < 200)
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir, isScrollToTop])

  return (
    <>
      {/* SEO */}
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* 顶部导航 */}
      <Header light={!isScrollToTop} translate />

      {/* 高度可定制的实时音视频通信平台 */}
      <SectionContainer>
        <div className="bg-[#263036] pt-16">
          <SectionWrapper>
            <div className="bg-[#263036]">
              <Session_1 />
            </div>
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 满足多种行业需求 */}
      <SectionContainer>
        <div className=" bg-white xl:bg-[#F7F8FC]">
          <SectionWrapper>
            <Session_2 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 模块化 可定制 易扩展 */}
      <SectionContainer>
        <div className="bg-[#263036]">
          <SectionWrapper>
            <Session_3 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 为什么选择XSwitch？ */}
      <SectionContainer>
        <div className=" bg-white lg:bg-[#F7F8FC]">
          <SectionWrapper>
            <Session_4 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 活跃的开源社区 */}
      <SectionContainer>
        <div className="bg-white">
          <SectionWrapper>
            <Session_5 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 版本与购买 */}
      <SectionContainer>
        <div className="bg-white lg:bg-[#F7F8FC]">
          <SectionWrapper>
            <Session_6 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 合作伙伴 */}
      <SectionContainer>
        <div className="bg-white">
          <SectionWrapper>
            <Session_7 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 让互联互通更顺畅、让实时互动更高效 */}
      <SectionContainer>
        <div className="bg-[#29c68e] lg:bg-white">
          <SectionWrapper>
            <Session_8 />
          </SectionWrapper>
        </div>
      </SectionContainer>

      {/* 底部导航 */}
      <Footer />
    </>
  )
}
