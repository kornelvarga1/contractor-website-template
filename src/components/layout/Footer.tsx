import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Roof Replacement", slug: "roof-replacement" },
  { name: "Roof Repair", slug: "roof-repair" },
  { name: "Storm Damage Repair", slug: "storm-damage-repair" },
  { name: "Metal Roofing", slug: "metal-roofing" },
  { name: "Flat Roof Systems", slug: "flat-roof-systems" },
  { name: "Roof Inspection", slug: "roof-inspection" },
  { name: "Commercial Roofing", slug: "commercial-roofing" },
];

const areas = ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Peoria"];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Phoenix Roofing <span className="text-accent">&</span> Repair
            </h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>301 E Bethany Home Rd A-121<br />Phoenix, AZ 85012</span>
              </div>
              <a href="tel:6024970154" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                (602) 497-0154
              </a>
              <a href="mailto:mike@phoenixroofingandrepair.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                mike@phoenixroofingandrepair.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Service Areas</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <Link to={`/areas/${area.toLowerCase()}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link to="/specials" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Specials</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Phoenix Roofing and Repair. All rights reserved. Licensed, Bonded &amp; Insured.</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <Link to="/terms" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link>
            <span className="text-primary-foreground/20">|</span>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
