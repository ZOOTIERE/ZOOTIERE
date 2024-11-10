import { useState } from 'react';
import { 
  Home,
  GanttChartSquare,
  Sprout,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { SidebarProps } from '../../types/components';



export const Sidebar = ({ onLogout }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const menuItems = [
    { title: 'Fincas', icon: <Home size={24} />, path: '/fincas' },
    { title: 'Vacas', icon: <GanttChartSquare size={24} />, path: '/vacas' },
    { title: 'Crías', icon: <Sprout size={24} />, path: '/crias' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Botón móvil para mostrar/ocultar sidebar */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-green-600 text-white"
        onClick={toggleMobileSidebar}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para móvil */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-0 h-screen bg-white shadow-lg z-40
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-64'}
          lg:translate-x-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-green-700">GestFincas</h2>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden lg:block p-2 rounded-md hover:bg-green-50"
          >
            <Menu size={24} className="text-green-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className={`
                flex items-center px-4 py-3 text-gray-700 rounded-lg
                hover:bg-green-50 hover:text-green-700
                transition-colors duration-200
                ${isCollapsed ? 'justify-center' : 'justify-start'}
              `}
            >
              <span className="text-green-600">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.title}</span>
              )}
            </a>
          ))}
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`
              flex items-center px-4 py-3 w-full text-gray-700 rounded-lg
              hover:bg-red-50 hover:text-red-700
              transition-colors duration-200
              ${isCollapsed ? 'justify-center' : 'justify-start'}
            `}
          >
            <span className="text-red-600">
              <LogOut size={24} />
            </span>
            {!isCollapsed && (
              <span className="ml-3 font-medium">Cerrar Sesión</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};