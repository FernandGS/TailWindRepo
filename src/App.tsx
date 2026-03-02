import "./App.css";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen bg-gray-900 text-white p-5">
          <h1 className="text-2xl font-bold mb-8">Mi App</h1>

          <nav className="space-y-4">
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 "
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 "
            >
              Perfil
            </a>

            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 "
            >
              Configuración
            </a>

            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 "
            >
              Cerrar sesión
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-10 bg-gray-100">
          <div className="rounded-xl p-2 bg-slate-50 flex-col">
            <img
              className="rounded-xl p-3"
              alt="Una buena imagen"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9ev7jy_ZAAydbpEZPTWCMzSZoGDc0nw2jA&s"
            />
            <h1 className="p-2">Museo Sumaya, en la Ciudad de México</h1>
          </div>
          <div className="p-5">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Button
              <Heart className="size-4" />
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
