const AppLayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default AppLayoutWrapper
