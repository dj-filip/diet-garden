import Infobar from "../Infobar/Infobar";
import Sidebar from "../Sidebar/Sidebar";


function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;