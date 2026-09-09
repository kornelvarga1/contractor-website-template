import { Phone } from "lucide-react";
import { client } from "@/config/client";
import { useQuoteModal } from "@/hooks/useQuoteModal";

const MobileActionBar = () => {
  const { openModal } = useQuoteModal();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-primary-foreground/10 bg-primary lg:hidden">
      <a
        href={`tel:${client.phoneTel}`}
        className="flex flex-1 items-center justify-center gap-2 bg-white py-3.5 text-sm font-bold text-[#1a1a1a]"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <button
        onClick={openModal}
        className="flex flex-1 items-center justify-center bg-accent py-3.5 text-sm font-bold text-accent-foreground"
      >
        Get Free Quote
      </button>
    </div>
  );
};

export default MobileActionBar;
