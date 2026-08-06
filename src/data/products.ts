export type Variant = { watt: string; [key: string]: string };
export type Product = {
  id: string;
  name: string;
  model?: string;
  category: string;
  page: number;
  description: string;
  specColumns: string[];
  variants: string[][];
  tags: string[];
};
export type Category = { id: string; name: string; description: string; pages: number[] };

export const categories: Category[] = [
  { id: "dimmable-tunable", name: "Dimmable & Tunable Range", description: "Dimmable and colour-tunable LED fixtures with DC 48V drivers.", pages: [3, 4, 5] },
  { id: "magnetic-track", name: "Magnetic Profile / Track", description: "Magnetic track systems, linear fittings, spot & hanging lights and accessories.", pages: [6, 7, 8] },
  { id: "cob-spot", name: "LED COB / Spot Light", description: "COB and spot light fixtures in various cut-out sizes and colour temperatures.", pages: [8, 9, 10, 12, 13, 14] },
  { id: "down-light", name: "LED Down Light", description: "Recessed LED down lights and spot lights.", pages: [11] },
  { id: "linear-cob", name: "Linear & Button COB / Profile Hanging Light", description: "Linear COB lights, button COB spotlights and suspended profile hanging lights.", pages: [15, 16, 43, 44] },
  { id: "panel-light", name: "LED Panel Light", description: "Round and square LED panel and down lights.", pages: [17, 18, 51] },
  { id: "surface-light", name: "Surface LED Light", description: "Surface-mounted ceiling lights.", pages: [18, 19] },
  { id: "surface-cob", name: "Surface / Movable Cylinder COB Light", description: "Surface mounted, waterproof and movable cylinder spot lights.", pages: [20, 21, 22, 23] },
  { id: "cabinet-light", name: "Open Cabinet Light", description: "Small open cabinet and cylinder puck lights.", pages: [23, 24] },
  { id: "track-light", name: "LED Track Light", description: "Track mounted spot lights.", pages: [25] },
  { id: "foot-light", name: "Foot Light", description: "Concealed and open foot / step lights.", pages: [25, 26, 27] },
  { id: "bollard-garden", name: "Gate, Bollard & Garden Light", description: "Outdoor gate lights and bollard garden lights.", pages: [27, 28, 29, 30, 31, 32] },
  { id: "outdoor-wall", name: "Outdoor Wall & Bulkhead Light", description: "Outdoor wall lights, spike lights and bulkhead lights.", pages: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41] },
  { id: "mirror-light", name: "Mirror Light", description: "Backlit LED mirror lights.", pages: [41, 42] },
  { id: "tube-light", name: "LED Tube Light", description: "Linear LED tube lights.", pages: [42] },
  { id: "silicon-profile", name: "Silicon & Aluminium Profile", description: "Surface and recess mounted profiles for LED strips.", pages: [48, 49, 50, 51] },
  { id: "accessories", name: "Rope Light, Strip Light & Accessories", description: "LED rope lights, strip lights, SMPS drivers, sensors and remotes.", pages: [44, 45, 46, 47, 52] },
];

export const products: Product[] = [
