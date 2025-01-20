import DocsSideBar  from "@/components/docs-sidebar"
import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"

function MainDoc() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar /> {/* Navbar ficará no topo */}
      <Separator />
      <div className="flex flex-row">
          <main className="flex gap-4 p-4">
            <DocsSideBar /> {/* Sidebar ficará à esquerda */}
            {/* Aqui vai o conteúdo principal */}
            <div>teste</div>
          </main>
      </div>
    </div>
  )
}

export default MainDoc
