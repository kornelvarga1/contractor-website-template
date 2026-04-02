import { useContext } from "react";
import { QuoteModalContext } from "@/context/QuoteModalContext";

export const useQuoteModal = () => useContext(QuoteModalContext);
