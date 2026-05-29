import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Wrench,
  Droplets,
  Flame,
  Droplet,
  AlertTriangle,
  GitBranch,
  SlidersHorizontal,
  Layers,
  MapPin,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { client } from "@/config/client";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

const { services, areas } = client;

const SERVICE_ICON_BY_SLUG: Record<string, LucideIcon> = {
  "drain-cleaning": Droplets,
  "water-heater-repair-replacement": Flame,
  "leak-detection-repair": Droplet,
  "emergency-plumbing": AlertTriangle,
  "repiping": GitBranch,
  "fixture-installation": SlidersHorizontal,
  "sewer-line-services": Layers,
};

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <div className="relative h-5 w-5" aria-hidden="true">
    <span
      className={cn(
        "absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-out",
        open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1",
      )}
    />
    <span
      className={cn(
        "absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-out",
        open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-3",
      )}
    />
  </div>
);

const PlusIcon = ({ open, size = "sm" }: { open: boolean; size?: "sm" | "md" }) => (
  <div
    className={cn("relative shrink-0", size === "md" ? "h-4 w-4" : "h-3.5 w-3.5")}
    aria-hidden="true"
  >
    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
    <span
      className={cn(
        "absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ease-out",
        open ? "rotate-90" : "rotate-0",
      )}
    />
  </div>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || mobileOpen ? "border-b border-accent/40 bg-primary" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 lg:justify-between lg:px-6">
        {/* Logo — desktop only */}
        <Link to="/" className="hidden lg:flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Logo variant="light" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="px-3 py-2 text-base font-medium text-primary-foreground/90 hover:text-accent transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-base font-medium text-primary-foreground/90 hover:text-accent transition-colors"
            >
              Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="absolute -left-4 top-full pt-2">
                <div className="w-[420px] rounded-lg border border-primary-foreground/10 bg-primary p-3 shadow-2xl">
                  <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-widest text-primary-foreground/50">
                    Choose a Service
                  </p>
                  <div className="grid grid-cols-1 gap-0.5">
                    {services.map((s) => {
                      const Icon = SERVICE_ICON_BY_SLUG[s.slug] ?? Wrench;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-primary-foreground/5"
                        >
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-foreground/5 text-primary-foreground/60 transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                            <Icon className="h-[18px] w-[18px]" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-primary-foreground">
                              {s.name}
                            </p>
                            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-primary-foreground/55">
                              {s.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-base font-medium text-primary-foreground/90 hover:text-accent transition-colors"
            >
              Service Areas <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", areasOpen && "rotate-180")} />
            </button>
            {areasOpen && (
              <div className="absolute -left-4 top-full pt-2">
                <div className="w-[260px] rounded-lg border border-primary-foreground/10 bg-primary p-3 shadow-2xl">
                  <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-widest text-primary-foreground/50">
                    Service Areas
                  </p>
                  {areas.map((area) => (
                    <Link
                      key={area}
                      to={`/areas/${area.toLowerCase()}`}
                      onClick={() => setAreasOpen(false)}
                      className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-primary-foreground/5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-foreground/5 text-primary-foreground/60 transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                        <MapPin className="h-[18px] w-[18px]" />
                      </div>
                      <p className="text-sm font-semibold text-primary-foreground">{area}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" className="px-3 py-2 text-base font-medium text-primary-foreground/90 hover:text-accent transition-colors">
            Gallery
          </Link>
          <Link to="/blog" className="px-3 py-2 text-base font-medium text-primary-foreground/90 hover:text-accent transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="px-3 py-2 text-base font-medium text-primary-foreground/90 hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${client.phoneTel}`}
            className="inline-flex h-10 w-40 items-center justify-center gap-2 rounded-sm bg-white text-sm font-bold text-foreground hover:bg-white/90 transition-colors"
          >
            <Phone className="h-4 w-4 shrink-0" />
            {client.phone}
          </a>
          <button
            onClick={openModal}
            className="inline-flex h-10 w-40 items-center justify-center rounded-sm bg-accent text-sm font-bold text-accent-foreground hover:bg-accent/90 transition-colors"
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
            className="flex flex-1 h-10 items-center justify-center gap-1.5 rounded-sm bg-white text-sm font-bold text-foreground"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Call Now
          </a>
          <button
            className="text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile overlay nav */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 overflow-y-auto bg-primary lg:hidden">
          <nav className="flex flex-col px-6 py-2 pb-24">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "border-b border-primary-foreground/10 py-4 text-xl font-semibold transition-colors",
                "text-primary-foreground/85 hover:text-primary-foreground",
              )}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="border-b border-primary-foreground/10 py-4">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between text-xl font-semibold text-primary-foreground/85"
              >
                Services <PlusIcon open={servicesOpen} size="md" />
              </button>
              {servicesOpen && (
                <div className="mt-3 flex flex-col gap-1 pl-1">
                  {services.map((s) => {
                    const Icon = SERVICE_ICON_BY_SLUG[s.slug] ?? Wrench;
                    return (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-primary-foreground/65 hover:bg-primary-foreground/5 hover:text-primary-foreground"
                      >
                        <Icon className="h-4 w-4 text-accent/80" />
                        <span className="text-base font-medium">{s.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Areas */}
            <div className="border-b border-primary-foreground/10 py-4">
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="flex w-full items-center justify-between text-xl font-semibold text-primary-foreground/85"
              >
                Service Areas <PlusIcon open={areasOpen} size="md" />
              </button>
              {areasOpen && (
                <div className="mt-3 flex flex-col gap-1 pl-1">
                  {areas.map((area) => (
                    <Link
                      key={area}
                      to={`/areas/${area.toLowerCase()}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setAreasOpen(false);
                      }}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-primary-foreground/65 hover:bg-primary-foreground/5 hover:text-primary-foreground"
                    >
                      <MapPin className="h-4 w-4 text-accent/80" />
                      <span className="text-base font-medium">{area}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              onClick={() => setMobileOpen(false)}
              className="border-b border-primary-foreground/10 py-4 text-xl font-semibold text-primary-foreground/85 hover:text-primary-foreground"
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="border-b border-primary-foreground/10 py-4 text-xl font-semibold text-primary-foreground/85 hover:text-primary-foreground"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="border-b border-primary-foreground/10 py-4 text-xl font-semibold text-primary-foreground/85 hover:text-primary-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
