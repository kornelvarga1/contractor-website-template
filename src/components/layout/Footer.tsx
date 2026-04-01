import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { client } from "@/config/client";

const { services, areas } = client;

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              {client.companyName}
            </h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{client.address.street}<br />{client.address.city}, {client.address.state} {client.address.zip}</span>
              </div>
              <a href={`tel:${client.phoneTel}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                {client.phone}
              </a>
              <a href={`mailto:${client.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                {client.email}
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
              <li><Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/write-a-review" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Review Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Operating Hours</h4>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {client.operatingHours.map((h) => (
              <div key={h.day} className="text-sm text-primary-foreground/70">
                <span className="font-medium text-primary-foreground">{h.day}:</span> {h.hours}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {client.companyNameFull}. All rights reserved. {client.tagline}.</p>
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
