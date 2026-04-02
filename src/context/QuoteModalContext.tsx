import { createContext, useState, type ReactNode } from "react";

interface QuoteModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const QuoteModalContext = createContext<QuoteModalContextValue>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
};
