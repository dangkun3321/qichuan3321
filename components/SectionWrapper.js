export default function SectionWrapper({ children }) {
  return (
    <div className="mx-auto px-3 md:px-12 lg:px-16 2xl:px-36 desktop:max-w-screen-desktop desktop:px-56">
      {children}
    </div>
  )
}
