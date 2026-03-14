import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Contáctanos", path: "/contactanos" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 
                className="text-3xl sm:text-4xl"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}
              >
                Daroca Eventos
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative py-2 transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: isActive(item.path) ? "var(--primary)" : "var(--foreground)",
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "var(--primary)" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: "var(--primary)" }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: "var(--primary)" }} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: isActive(item.path) ? "var(--primary)" : "var(--foreground)",
                    backgroundColor: isActive(item.path) ? "var(--secondary)" : "transparent",
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer 
        className="py-12 mt-20"
        style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Daroca Eventos
              </h3>
              <p className="opacity-90">
                Creando momentos inolvidables para tus celebraciones más especiales.
              </p>
            </div>
            <div>
              <h4 
                className="text-xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 
                className="text-xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Contacto
              </h4>
              <p className="opacity-90">
                Email: info@darocaeventos.com
                <br />
                Teléfono: +56 9 1234 5678
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center opacity-90">
            <p>&copy; 2026 Daroca Eventos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
