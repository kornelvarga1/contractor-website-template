import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { client } from "@/config/client";

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-primary-foreground/10 bg-primary lg:hidden">
      <a
        href={`tel:${client.phoneTel}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-primary-foreground"
      >
        <Phone className="h-4 w-4 text-accent" />
        Call Now
      </a>
      <Link
        to="/quote"
        className="flex flex-1 items-center justify-center bg-accent py-3.5 text-sm font-bold text-accent-foreground"
      >
        Get Free Quote
      </Link>
    </div>
  );
};

export default MobileActionBar;
