import { useEffect } from "react";
import { X } from "lucide-react";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import QuoteForm from "./QuoteForm";

const QuoteModal = () => {
  const { isOpen, closeModal } = useQuoteModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-primary-foreground hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="max-h-[90vh] overflow-y-auto rounded-md">
          <QuoteForm variant="widget" />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
