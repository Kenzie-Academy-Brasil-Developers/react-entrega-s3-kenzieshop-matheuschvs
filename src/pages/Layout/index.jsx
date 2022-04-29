import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
    </>
  )
}

export { Layout }
