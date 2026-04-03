import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, Wrench } from "lucide-react";
import { client } from "@/config/client";
import { useQuoteModal } from "@/hooks/useQuoteModal";

const { services, areas } = client;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const { openModal } = useQuoteModal();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-primary border-b border-accent/40">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-4 lg:justify-between lg:px-6">
          {/* Logo — desktop only */}
          <Link to="/" className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="text-lg font-bold tracking-tight text-primary-foreground">
              {client.companyName.split(" & ")[0]} <span className="text-accent">&</span> {client.companyName.split(" & ")[1]}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full w-56 rounded-sm bg-primary border border-primary-foreground/10 py-1 shadow-xl opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block px-4 py-2 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Service Areas <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full w-48 rounded-sm bg-primary border border-primary-foreground/10 py-1 shadow-xl opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                {areas.map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/gallery" className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link to="/blog" className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${client.phoneTel}`}
              className="flex items-center gap-1.5 text-base font-bold text-primary-foreground tracking-wide"
            >
              <Phone className="h-4 w-4 text-accent" />
              {client.phone}
            </a>
            <button
              onClick={openModal}
              className="inline-flex h-9 items-center rounded-sm bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile: action buttons + hamburger */}
          <div className="flex flex-1 items-center gap-2 lg:hidden">
            <button
              onClick={openModal}
              className="flex flex-1 h-10 items-center justify-center whitespace-nowrap rounded-sm bg-accent text-sm font-bold text-accent-foreground"
            >
              Get Free Quote
            </button>
            <a
              href={`tel:${client.phoneTel}`}
              className="flex flex-1 h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border border-primary-foreground/20 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              {client.phone}
            </a>
            <button
              className="text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile overlay nav */}
        {mobileOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-primary overflow-y-auto lg:hidden">
            <nav className="flex flex-col px-6 py-6 gap-1">
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-primary-foreground border-b border-primary-foreground/10">
                Home
              </Link>

              {/* Mobile Services */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between py-3 text-base font-medium text-primary-foreground border-b border-primary-foreground/10"
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-primary-foreground/80"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Areas */}
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="flex items-center justify-between py-3 text-base font-medium text-primary-foreground border-b border-primary-foreground/10"
              >
                Service Areas <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? "rotate-180" : ""}`} />
              </button>
              {areasOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {areas.map((area) => (
                    <Link
                      key={area}
                      to={`/areas/${area.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-primary-foreground/80"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/gallery" onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-primary-foreground border-b border-primary-foreground/10">
                Gallery
              </Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-primary-foreground border-b border-primary-foreground/10">
                Blog
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-primary-foreground border-b border-primary-foreground/10">
                Contact
              </Link>

              <a
                href={`tel:${client.phoneTel}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-accent py-3 text-base font-bold text-accent-foreground"
              >
                <Phone className="h-5 w-5" />
                {client.phone}
              </a>
              <button
                onClick={() => { setMobileOpen(false); openModal(); }}
                className="mt-2 flex items-center justify-center rounded-sm border border-accent py-3 text-base font-semibold text-accent"
              >
                Get Free Quote
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
