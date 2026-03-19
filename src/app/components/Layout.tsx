import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Instagram, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo_daroca_azul.png"
import logo2 from "../../assets/logo_arena_2.png"

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
  const whatsappNumber = "56987297888";
  const whatsappMessage = "Hola! Me gustaría hacer una cotización para mi evento.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    // const url = `https://wa.me/c/56987297888`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                className="w-auto h-20"
                src={logo}
                alt="logo_daroca"
              />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="hidden md:block">
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Daroca Eventos
              </h3>
              <p className="opacity-90">
                Banquetería para matrimonios, graduaciones, coffee breaks y eventos corporativos.
              </p>
            </div>
            <div>
              <img
                className="w-auto h-36"
                src={logo2}
                alt="logo_daroca"
              />
            </div>
            <div>
              <h4
                className="text-xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Contacto
              </h4>
              <div className="flex-col justify-items-start">
                <div className="flex gap-2 items-center">
                  <Mail className="w-6 h-6 opacity-50" />
                  <p className="opacity-90">
                    contacto.daroca@gmail.com
                  </p>
                </div>
                <div className="flex gap-2 items-center py-1 cursor-pointer" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-6 h-6 opacity-50" />
                  <p className="opacity-90">
                    +56 9 8729 7888
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.instagram.com/darocaeventos/"
                    target="_blank"
                    className="flex gap-2 items-center">

                    <Instagram className="w-6 h-6 opacity-50" />
                    <p className="opacity-90">
                      instagram.com/darocaeventos
                    </p>
                  </a>
                </div>
              </div>
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
