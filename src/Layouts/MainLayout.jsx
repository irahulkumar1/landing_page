import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <>
      <div className="relative overflow-x-hidden bg-black text-white " >
        <Header />
        <Outlet />
        <div>footer will here</div>
      </div>

    </>
  )
}

export default MainLayout
