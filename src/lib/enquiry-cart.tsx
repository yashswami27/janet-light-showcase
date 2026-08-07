import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type EnquiryItem = { id: string; name: string; model?: string; page: number };

type Ctx = {
  items: EnquiryItem[];
  add: (item: EnquiryItem) => void;
  remove: (id: string) => void;
  toggle: (item: EnquiryItem) => void;
  clear: () => void;
  has: (id: string) => boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const EnquiryCartContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "janet-enquiry-list";

export function EnquiryCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<EnquiryItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as EnquiryItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const add = useCallback((item: EnquiryItem) => {
    setItems((prev) => (prev.some((p) => p.id === item.id) ? prev : [...prev, item]));
  }, []);
  const remove = useCallback((id: string) => setItems((prev) => prev.filter((p) => p.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);
  const toggle = useCallback((item: EnquiryItem) => {
    setItems((prev) => (prev.some((p) => p.id === item.id) ? prev.filter((p) => p.id !== item.id) : [...prev, item]));
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      items: hydrated ? items : [],
      add,
      remove,
      toggle,
      clear,
      has: (id: string) => (hydrated ? items.some((p) => p.id === id) : false),
      open,
      setOpen,
    }),
    [items, hydrated, add, remove, toggle, clear, open],
  );

  return <EnquiryCartContext.Provider value={value}>{children}</EnquiryCartContext.Provider>;
}

export function useEnquiryCart() {
  const ctx = useContext(EnquiryCartContext);
  if (!ctx) throw new Error("useEnquiryCart must be used inside EnquiryCartProvider");
  return ctx;
}