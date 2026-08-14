export type Product = {
  id: string;
  name: string;
  model?: string;
  category: string;
  group: string;
  page: number;
  description: string;
  specHeader?: string;
  specColumns: string[];
  variants: string[][];
  images: string[];
  tags: string[];
};
export type Category = { id: string; name: string; group: string; description: string; pages: number[] };

export const categories: Category[] = [
  {
    "id": "indoor-lights-down-lights",
    "name": "Down Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Down Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-foot-lights",
    "name": "Foot Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Foot Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-led-driver-power-supply",
    "name": "LED Driver & Power Supply",
    "group": "Indoor Lights",
    "description": "Indoor Lights — LED Driver & Power Supply from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-led-strip-lights",
    "name": "LED Strip Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — LED Strip Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-magnetic-track-lights",
    "name": "Magnetic Track Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Magnetic Track Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-mirror-lights",
    "name": "Mirror Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Mirror Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-office-lights",
    "name": "Office Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Office Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-panel-lights",
    "name": "Panel Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Panel Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-profile",
    "name": "Profile",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Profile from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-spot-lights",
    "name": "Spot Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Spot Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-surface-lights",
    "name": "Surface Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Surface Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "indoor-lights-track-lights",
    "name": "Track Lights",
    "group": "Indoor Lights",
    "description": "Indoor Lights — Track Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "outdoor-lights-foot-lights",
    "name": "Foot Lights",
    "group": "Outdoor Lights",
    "description": "Outdoor Lights — Foot Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "outdoor-lights-garden-bollard",
    "name": "Garden Bollard",
    "group": "Outdoor Lights",
    "description": "Outdoor Lights — Garden Bollard from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "outdoor-lights-gate-lights",
    "name": "Gate Lights",
    "group": "Outdoor Lights",
    "description": "Outdoor Lights — Gate Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "outdoor-lights-spike-lights",
    "name": "Spike Lights",
    "group": "Outdoor Lights",
    "description": "Outdoor Lights — Spike Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "outdoor-lights-wall-lights",
    "name": "Wall Lights",
    "group": "Outdoor Lights",
    "description": "Outdoor Lights — Wall Lights from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "sensor-motion-sensor",
    "name": "Motion Sensor",
    "group": "Sensor",
    "description": "Sensor — Motion Sensor from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "sensor-wardrobe-sensor",
    "name": "Wardrobe Sensor",
    "group": "Sensor",
    "description": "Sensor — Wardrobe Sensor from the Janet 2026 catalog.",
    "pages": []
  },
  {
    "id": "decorative-lights-hanging-lights",
    "name": "Hanging Lights",
    "group": "Decorative Lights",
    "description": "Decorative Lights — Hanging Lights from the Janet 2026 catalog.",
    "pages": []
  }
];

export const products: Product[] = [
  {
    "id": "jn-mgt-01-smd-back-light-fitting",
    "name": "SMD Back Light Fitting",
    "model": "JN-MGT-01",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 3,
    "description": "SMD Back Light Fitting (JN-MGT-01) from the Dimmable-Tunable Range range in the Janet 2026 catalog.",
    "specHeader": "WATT ‘SIZE(MM) DRIVER PF BEAM ANGLE LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "D&T L300 x W22 x H25 DC 48V INSIDE 20.90 120° OSRAM"
      ],
      [
        "20W",
        "D&T L600 x W22 x H25 DC 48V INSIDE 20.90 120° OSRAM"
      ]
    ],
    "images": [
      "/products/jn-mgt-01__p03__img1.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "indoor-lights-spot-lights",
      "indoor-lights-signature-collection"
    ]
  },
  {
    "id": "jn-mgt-02-linear-light-fitting",
    "name": "Linear Light Fitting",
    "model": "JN-MGT-02",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 3,
    "description": "Linear Light Fitting (JN-MGT-02) from the Dimmable-Tunable Range, Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "WATT SIZE(MM) DRIVER PF BEAM ANGLE LED · WATT COLOR TEMP. ‘SIZE(MM) DRIVER PF BEAM ANGLE LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "6W",
        "D&T L112 x W22 x H25. DC 48V INSIDE =0.90 24° OSRAM"
      ],
      [
        "—",
        "rWDBT —__L220xW22xH25 DC ABVINSIDE_—=0.90__24 OSRAM"
      ],
      [
        "—",
        "ew 4K & SK L112 x W22 x H25 DC 48V INSIDE =0.90 24! OSRAM"
      ],
      [
        "12W",
        "4K & 5K L220 x W22 x H25 DC 48V INSIDE 20.90 24° OSRAM"
      ],
      [
        "18W",
        "4K & 5K L328 x W22 x H25 DC 48V INSIDE 20.90 24 OSRAM"
      ]
    ],
    "images": [
      "/products/jn-mgt-02__p03__img1.png",
      "/products/jn-mgt-02__p03__img2.png",
      "/products/jn-mgt-02__p06__img1.png",
      "/products/jn-mgt-02__p06__img2.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "magnetic-profile",
      "indoor-lights-spot-lights",
      "indoor-lights-signature-collection",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "jn-mgt-03-linear-track-light-fitting",
    "name": "Linear Track Light Fitting",
    "model": "JN-MGT-03",
    "category": "indoor-lights-track-lights",
    "group": "Indoor Lights",
    "page": 3,
    "description": "Linear Track Light Fitting (JN-MGT-03) from the Dimmable-Tunable Range, Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "WATT SIZE(MM) DRIVER PF BEAMANGLE LED · WATT COLOR TEMP. ‘SIZE(MM) DRIVER PF BEAM ANGLE LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "6W",
        "D&T L135 xW22xH100 DC 48V INSIDE 20.90 24° OSRAM"
      ],
      [
        "—",
        "12WD&T —_—L230xW22xH100 DC 48VINSIDE 20.90 24° OSRAM"
      ],
      [
        "—",
        "ew 4K & 5K L135 x W22xH100 DC 48V INSIDE 20.90 24° OSRAM"
      ],
      [
        "—",
        "ew 4K & SK L135 x W22 xH100 DC 48V INSIDE 20.90 24° OSRAM"
      ]
    ],
    "images": [
      "/products/jn-mgt-03__p03__img1.png",
      "/products/jn-mgt-03__p03__img2.png",
      "/products/jn-mgt-03__p07__img1.png",
      "/products/jn-mgt-03__p07__img2.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "magnetic-profile",
      "indoor-lights-track-lights",
      "indoor-lights-signature-collection",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "jn-mgt-04-led-track-spot-light",
    "name": "LED Track Spot Light",
    "model": "JN-MGT-04",
    "category": "indoor-lights-track-lights",
    "group": "Indoor Lights",
    "page": 4,
    "description": "LED Track Spot Light (JN-MGT-04) from the Dimmable-Tunable Range, Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "WATT ‘SIZE(MM) DRIVER PF BEAM ANGLE LED · WATT COLOR TEMP. ‘SIZE(MM) DRIVER PF BEAM ANGLE LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "D&T 50 x 70MM DC 48V INSIDE =0.90 24° OSRAM"
      ],
      [
        "20W",
        "D&T 60 x 80MM DC 48V INSIDE =0.90 Bae OSRAM"
      ],
      [
        "10W",
        "4K & 5K 50 x 70MM DC 48V INSIDE =0.90 24 OSRAM"
      ],
      [
        "—",
        "OOW AK SK BO x BOMN. NC 48V INSIDE > 90 OAS OSRAN"
      ]
    ],
    "images": [
      "/products/jn-mgt-04__p04__img1.png",
      "/products/jn-mgt-04__p07__img1.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "magnetic-profile",
      "indoor-lights-track-lights",
      "indoor-lights-signature-collection",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "floret-floret-led-down-light",
    "name": "Floret LED Down Light",
    "model": "FLORET",
    "category": "indoor-lights-down-lights",
    "group": "Indoor Lights",
    "page": 4,
    "description": "Floret LED Down Light (FLORET) from the Dimmable-Tunable Range, LED Panel Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. ‘OUTER DIA. LUMENS MATERIAL POWER · WATT BODY COL. CUT OUT DIA. ‘OUTER DIA. LUMENS COL. TEMP MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "D&T = White 75MM 85MM 1380Im, Aluminium 20.90"
      ],
      [
        "18W",
        "D&T White 105MM 115MM. 2070Im Aluminium 20.90"
      ],
      [
        "12W",
        "White & BK 75MM 85MM 1380Im — 4K/SK/6K Aluminium =0.90"
      ],
      [
        "18W",
        "White & BK 105MM 115MM. 2070Im = 4K/SK/6K Aluminium 20.90"
      ],
      [
        "24W",
        "White & BK 155MM 165MM 2760Im AK/SK/6K Aluminium 20.90"
      ]
    ],
    "images": [
      "/products/floret__p04__img1.jpeg",
      "/products/floret__p17__img1.jpeg",
      "/products/floret__p17__img2.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "led-panel-light",
      "indoor-lights-down-lights",
      "indoor-lights-signature-collection"
    ]
  },
  {
    "id": "adore-smart-adore-smart-cob-light",
    "name": "Adore Smart COB Light",
    "model": "ADORE SMART",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 4,
    "description": "Adore Smart COB Light (ADORE SMART) from the Dimmable-Tunable Range range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. OUTER DIA. LUMENS MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "15W",
        "D&T White 75MM 85MM 1350Im Aluminium — 36° 20.90"
      ]
    ],
    "images": [
      "/products/adore-smart__p04__img1.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "indoor-lights-spot-lights",
      "indoor-lights-signature-collection"
    ]
  },
  {
    "id": "eva-smart-eva-smart-cob-light",
    "name": "EVA Smart COB Light",
    "model": "EVA SMART",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 5,
    "description": "EVA Smart COB Light (EVA SMART) from the Dimmable-Tunable Range range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. OUTER DIA. LUMENS: MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "D&T = White/BK 70MM 80MM 1080Im Aluminium — 36° =0.90"
      ],
      [
        "18W",
        "D&T White/BK 95MM 405MM 1620Im_ Aluminium 36° >0.90"
      ]
    ],
    "images": [
      "/products/eva-smart__p05__img1.png",
      "/products/eva-smart__p05__img2.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "indoor-lights-spot-lights",
      "indoor-lights-signature-collection"
    ]
  },
  {
    "id": "dazzle-smart-dazzle-smart-cob-light",
    "name": "Dazzle Smart COB Light",
    "model": "DAZZLE SMART",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 5,
    "description": "Dazzle Smart COB Light (DAZZLE SMART) from the Dimmable-Tunable Range range in the Janet 2026 catalog.",
    "specHeader": "wart BODY COL. CUTOUTDIA. OUTERDIA. LUMENS ~—MATERIAL «ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "15W",
        "D&T White/BK 55MM 62MM 1350im Aluminium 36° 0.90"
      ],
      [
        "20W",
        "D&T White/BK 75MM 82MM 1800Im Aluminium 36° =~ =0.90"
      ]
    ],
    "images": [
      "/products/dazzle-smart__p05__img1.png",
      "/products/dazzle-smart__p05__img2.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "indoor-lights-spot-lights",
      "indoor-lights-signature-collection"
    ]
  },
  {
    "id": "nina-smart-nina-smart-cob-light",
    "name": "Nina Smart COB Light",
    "model": "NINA SMART",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 5,
    "description": "Nina Smart COB Light (NINA SMART) from the Dimmable-Tunable Range range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. OUTER DIA. ‘HEIGHT LUMENS MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "20W",
        "D&T White/BK 75MM 80MM 105MM 1800Im Aluminium 36° 20.90"
      ]
    ],
    "images": [
      "/products/nina-smart__p05__img1.png",
      "/products/nina-smart__p05__img2.png"
    ],
    "tags": [
      "dimmable-tunable-range",
      "indoor-lights-spot-lights",
      "indoor-lights-signature-collection"
    ]
  },
  {
    "id": "magnetic-track-magnetic-track",
    "name": "Magnetic Track",
    "model": "MAGNETIC TRACK",
    "category": "indoor-lights-magnetic-track-lights",
    "group": "Indoor Lights",
    "page": 6,
    "description": "Magnetic Track (MAGNETIC TRACK) from the Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "LENGTH ‘SIZE(MM) BODY COL.",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "1/2/3 MTR RECESSED W6OMM x H46.5MM_ BK"
      ],
      [
        "—",
        "4/2/2 MTR SLIRFACE W2O7MM x H53MM. RK"
      ]
    ],
    "images": [
      "/products/magnetic-track__p06__img1.png",
      "/products/magnetic-track__p06__img2.png"
    ],
    "tags": [
      "magnetic-profile",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "jn-mgt-01-smd-back-light",
    "name": "SMD Back Light",
    "model": "JN-MGT-01",
    "category": "indoor-lights-magnetic-track-lights",
    "group": "Indoor Lights",
    "page": 6,
    "description": "SMD Back Light (JN-MGT-01) from the Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "WATT COLOR TEMP. ‘SIZE(MM) DRIVER PF BEAM ANGLE LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "4K & SK L300 x W22 x H25_ DC 48V INSIDE 20.90 120° OSRAM"
      ],
      [
        "20W",
        "4K & SK L600 x W22 x H25 DC 48V INSIDE 20.90 120° OSRAM"
      ]
    ],
    "images": [
      "/products/jn-mgt-01__p06__img1.png"
    ],
    "tags": [
      "magnetic-profile",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "jn-mgt-05-led-track-hanging-light",
    "name": "LED Track Hanging Light",
    "model": "JN-MGT-05",
    "category": "indoor-lights-magnetic-track-lights",
    "group": "Indoor Lights",
    "page": 7,
    "description": "LED Track Hanging Light (JN-MGT-05) from the Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "WATT COLOR TEMP. ‘SIZE(MM) DRIVER PF BEAM ANGLE LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "BW 4K 50 x 70MM. DC 48V INSIDE 20.90 24° OSRAM"
      ]
    ],
    "images": [],
    "tags": [
      "magnetic-profile",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "m20-m20-magnetic-track-driver-and-accessories",
    "name": "M20 Magnetic Track Driver & Accessories",
    "model": "M20",
    "category": "indoor-lights-magnetic-track-lights",
    "group": "Indoor Lights",
    "page": 8,
    "description": "M20 Magnetic Track Driver & Accessories (M20) from the Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "M20-MAGNETIC TRACK @"
      ],
      [
        "—",
        "DRIVER = _ ny 2 a"
      ],
      [
        "—",
        "WATT : 100W / 200W"
      ]
    ],
    "images": [
      "/products/m20__p08__img1.png",
      "/products/m20__p08__img2.png",
      "/products/m20__p08__img3.png",
      "/products/m20__p08__img4.png",
      "/products/m20__p08__img5.png",
      "/products/m20__p08__img6.png"
    ],
    "tags": [
      "magnetic-profile",
      "indoor-lights-magnetic-track-lights"
    ]
  },
  {
    "id": "eva-te-eva-te-cob-spot-light",
    "name": "EVA Te COB Spot Light",
    "model": "EVA TE",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 8,
    "description": "EVA Te COB Spot Light (EVA TE) from the Magnetic Profile range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/eva-te__p08__img1.png",
      "/products/eva-te__p08__img2.png",
      "/products/eva-te__p08__img3.png"
    ],
    "tags": [
      "magnetic-profile",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "dazzle-202-dazzle-202-led-spot-light",
    "name": "Dazzle 202 LED Spot Light",
    "model": "DAZZLE 202",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 9,
    "description": "Dazzle 202 LED Spot Light (DAZZLE 202) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "| Power by CREE LED & Fulham Driver | by CREE LED & Fulham Driver",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "20W",
        "= White&BK 75MM 82MM 1800Im 4K&5K Aluminium 36\" =0.90"
      ]
    ],
    "images": [
      "/products/dazzle-202__p09__img1.png",
      "/products/dazzle-202__p09__img2.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "epic-epic-cob-spot-light",
    "name": "Epic COB Spot Light",
    "model": "EPIC",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 9,
    "description": "Epic COB Spot Light (EPIC) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE POWER LED Driver",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "7wW White/Brown/BK 45MM 52MM 700Im 4K & 5K Aluminium 36° =0.90 Cree Philips"
      ],
      [
        "15W",
        "= White/Brown/BK 65MM 72MM 1500Im 4K & 5K Aluminium — 36° =0.90 Cree Philips"
      ]
    ],
    "images": [
      "/products/epic__p09__img1.png",
      "/products/epic__p09__img2.png",
      "/products/epic__p09__img3.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "nexa-nexa-cob-light",
    "name": "Nexa COB Light",
    "model": "NEXA",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 9,
    "description": "Nexa COB Light (NEXA) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUT DIA. OUTER DIA. LUMENS COL. TEMP. MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "15W",
        "White Inside BK /BK 75MM 82MM 1500Im 4K &5K Aluminium — 24° 20.90"
      ],
      [
        "24W",
        "White Inside BK /BK 95MM 110MM 2400IM = 4K & 5K Aluminium — 24° 20.90"
      ]
    ],
    "images": [
      "/products/nexa__p09__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "archi-archi-led-spot-light",
    "name": "Archi LED Spot Light",
    "model": "ARCHI",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 10,
    "description": "Archi LED Spot Light (ARCHI) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "| Power by CREE LED & Eaglerise Driver |",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "18W",
        "White&BK 55MM 61MM 1620Im 4K &5K Aluminium 36\" =0.90"
      ]
    ],
    "images": [
      "/products/archi__p10__img1.png",
      "/products/archi__p10__img2.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "cool-cool-cob-spot-light",
    "name": "Cool COB Spot Light",
    "model": "COOL",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 10,
    "description": "Cool COB Spot Light (COOL) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMPR MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "White & BK 40MM 45MM 1080Im 4K Aluminium 36° 20.90"
      ]
    ],
    "images": [
      "/products/cool__p10__img1.png",
      "/products/cool__p10__img2.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "vertex-vertex-led-spot-light",
    "name": "Vertex LED Spot Light",
    "model": "VERTEX",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 10,
    "description": "Vertex LED Spot Light (VERTEX) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL, CUTOUTDIA. OUTER DIA. LUMENS COL. TEMP MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "15 White 75MM 82MM 1500Im 4K Aluminium 24° 20.90"
      ]
    ],
    "images": [
      "/products/vertex__p10__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "matrix-matrix-led-down-light",
    "name": "Matrix LED Down Light",
    "model": "MATRIX",
    "category": "indoor-lights-down-lights",
    "group": "Indoor Lights",
    "page": 11,
    "description": "Matrix LED Down Light (MATRIX) from the LED Down Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMPR MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "White&BK 75MM 82MM 1080Im 4K &5K Aluminium 50° =0.90"
      ]
    ],
    "images": [
      "/products/matrix__p11__img1.png",
      "/products/matrix__p11__img2.png"
    ],
    "tags": [
      "led-down-light",
      "indoor-lights-down-lights"
    ]
  },
  {
    "id": "orbit-orbit-led-down-light",
    "name": "Orbit LED Down Light",
    "model": "ORBIT",
    "category": "indoor-lights-down-lights",
    "group": "Indoor Lights",
    "page": 11,
    "description": "Orbit LED Down Light (ORBIT) from the LED Down Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. CUTOUTDIA. OUTERDIA. LUMENS COL. TEMP MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/orbit__p11__img1.png"
    ],
    "tags": [
      "led-down-light",
      "indoor-lights-down-lights"
    ]
  },
  {
    "id": "lexus-lexus-led-spot-light",
    "name": "Lexus LED Spot Light",
    "model": "LEXUS",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 11,
    "description": "Lexus LED Spot Light (LEXUS) from the LED Down Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "=BKChamp 75MM 85MM 1200Im 3K & 4K Aluminium 38° 20.90"
      ],
      [
        "12W",
        "BKRG 75MM 85MM 1200Im = 3K & 4K Aluminium 38° 20.90"
      ]
    ],
    "images": [
      "/products/lexus__p11__img1.png",
      "/products/lexus__p11__img2.png"
    ],
    "tags": [
      "led-down-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "coral-coral-cob-light-and-honeycomb",
    "name": "Coral COB Light & Honeycomb",
    "model": "CORAL",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 12,
    "description": "Coral COB Light & Honeycomb (CORAL) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE POWER LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "7W",
        "White 60MM 70MM. 630Im 4K Aluminium — 36° 20.90 Cree"
      ],
      [
        "12W",
        "White 75MM 82MM 1080Im 4K Aluminium — 36° 20.90 Cree"
      ]
    ],
    "images": [
      "/products/coral__p12__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "cob-spot-light-cob-spot-light",
    "name": "COB Spot Light",
    "model": "COB SPOT LIGHT",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 12,
    "description": "COB Spot Light (COB SPOT LIGHT) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUT DIA. OUTER DIA. LUMENS COL.TEMP MATERIAL ANGLE POWER LED Driver",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "ew White & BK 60MM 70MM 540lm 4K Aluminium 36° 20.60 Cree Philips"
      ],
      [
        "12W",
        "White & BK 75MM 82MM 1080Im 4K Aluminium 36° 20.90 Cree Philips"
      ],
      [
        "18W",
        "White & BK 85MM. 95MM 1620Im 4K Aluminium 36° 20.90 Cree Fulham"
      ]
    ],
    "images": [
      "/products/cob-spot-light__p12__img1.png",
      "/products/cob-spot-light__p12__img2.png",
      "/products/cob-spot-light__p12__img3.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "polo-polo-cob-light",
    "name": "Polo COB Light",
    "model": "POLO",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 12,
    "description": "Polo COB Light (POLO) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUT DIA. OUTER DIA. LUMENS COL.TEMP MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "SW White 40MM 46MM s50Im = 3K&4K = Aluminium — 24° =0.60"
      ],
      [
        "—",
        "SW Rose Gold 40MM 46MM. 550m = 3K&4K — Aluminium 24° =0.60"
      ],
      [
        "—",
        "SW BK 40MM 46MM. 550Im 3K &4K — Aluminium — 24° =0.60"
      ]
    ],
    "images": [
      "/products/polo__p12__img1.png",
      "/products/polo__p12__img2.png",
      "/products/polo__p12__img3.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "sparkle-sparkle-led-spot-light",
    "name": "Sparkle LED Spot Light",
    "model": "SPARKLE",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 13,
    "description": "Sparkle LED Spot Light (SPARKLE) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "White 55MM. 63MM. 270Im 3K/4K/6K = Aluminium 38° 20.60"
      ],
      [
        "—",
        "ew White 80MM 85MM. 540lm 3K/4K/6K — Aluminium 38° 20.60"
      ],
      [
        "18W",
        "= White 100MM. 108MM. 1620Im = 3K/4K/6K ~— Aluminium. 38° 20.90"
      ],
      [
        "30W",
        "~=White 120MM 130MM 2700Im = 4K/6K Aluminium 38° =0.90"
      ]
    ],
    "images": [
      "/products/sparkle__p13__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "trim-trim-cob-spot-light",
    "name": "Trim COB Spot Light",
    "model": "TRIM",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 13,
    "description": "Trim COB Spot Light (TRIM) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE POWER LED Driver",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Bw White+BK+Grey 60MM. 70MM 540lm 4K Aluminium 36° 20.60 Cree Philips"
      ]
    ],
    "images": [
      "/products/trim__p13__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "flora-flora-cob-light",
    "name": "Flora COB Light",
    "model": "FLORA",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 13,
    "description": "Flora COB Light (FLORA) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUT DIA. OUTER DIA. LUMENS COL.TEMP MATERIAL ANGLE POWER LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "White 55MM 60MM 1080Im 4K&5K = Aluminium — 36° 20.90 Cree"
      ],
      [
        "18W",
        "White 65MM 75MM 1620lm 4K&5K Aluminium 36° 2090 Cree"
      ]
    ],
    "images": [
      "/products/flora__p13__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "bolt-bolt-cob-light",
    "name": "Bolt COB Light",
    "model": "BOLT",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 14,
    "description": "Bolt COB Light (BOLT) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE §=POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Black 45MM. 60MM 900Im 4k Aluminium — 36° 20.90"
      ]
    ],
    "images": [
      "/products/bolt__p14__img1.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "innova-innova-cob-spot-light",
    "name": "Innova COB Spot Light",
    "model": "INNOVA",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 14,
    "description": "Innova COB Spot Light (INNOVA) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "SW White & BK 38MM 48MM 450im 4k Aluminium 38° =0.60"
      ]
    ],
    "images": [
      "/products/innova__p14__img1.png",
      "/products/innova__p14__img2.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "in-out-in-out-cob-light",
    "name": "In-Out COB Light",
    "model": "IN-OUT",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 14,
    "description": "In-Out COB Light (IN-OUT) from the LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. LUMENS COL.TEMP MATERIAL ANGLE LED — Driver",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "BW White & BK 65MM 72MM 720Im 4k Aluminium — 38° CREE Philips"
      ],
      [
        "12W",
        "White & BK 75MM 85MM 1080im 4K Aluminium — 38° CREE Philips"
      ]
    ],
    "images": [
      "/products/in-out__p14__img1.png",
      "/products/in-out__p14__img2.png"
    ],
    "tags": [
      "led-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "platina-platina-led-spot-light",
    "name": "Platina LED Spot Light",
    "model": "PLATINA",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 15,
    "description": "Platina LED Spot Light (PLATINA) from the LED Button COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. ‘OUTER DIA. LUMENS COL. TEMP. MATERIAL, ANGLE",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/platina__p15__img1.png"
    ],
    "tags": [
      "led-button-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "amaze-amaze-cob-spot-light",
    "name": "Amaze COB Spot Light",
    "model": "AMAZE",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 15,
    "description": "Amaze COB Spot Light (AMAZE) from the LED Button COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT = BODY COL. CUT OUT DIA. ‘OUTER DIA. HEIGHT LUMENS COL. TEMP. MATERIAL ANGLE",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "Bk+Gun Bk 35MM 40MM 40MM 245Im 3K & 4K Aluminium = 24°"
      ],
      [
        "3W",
        "Bk+Copper 35MM 40MM 40MM 245Im 3K & 4K Aluminium = 24°"
      ],
      [
        "3W",
        "White+Copper 35MM 40MM 40MM 245Im 3K & 4K Aluminium 24°"
      ]
    ],
    "images": [
      "/products/amaze__p15__img1.png",
      "/products/amaze__p15__img2.png",
      "/products/amaze__p15__img3.png"
    ],
    "tags": [
      "led-button-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "magic-magic-led-spot-light",
    "name": "Magic LED Spot Light",
    "model": "MAGIC",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 15,
    "description": "Magic LED Spot Light (MAGIC) from the LED Button COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTERDIA. HEIGHT LUMENS COL. TEMP. «= MATERIAL = ANGLE",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Black 128x50MM 137x60MM SSMM 100m 4K Aluminium 38°"
      ],
      [
        "20W",
        "Black 205x50MM 210x60MM 56MM 1800im 4K Aluminium 38°"
      ]
    ],
    "images": [
      "/products/magic__p15__img1.png",
      "/products/magic__p15__img2.png"
    ],
    "tags": [
      "led-button-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "milano-milano-cob-light",
    "name": "Milano COB Light",
    "model": "MILANO",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 16,
    "description": "Milano COB Light (MILANO) from the Linear COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTER DIA. LUMENS COL. TEMP. = MATERIAL ANGLE = =LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "3x6W White&BK 40x124MM 50x135x65MM 1620Im 4K Aluminium 36° CREE"
      ],
      [
        "—",
        "4x6W White&BK 40x165MM 50x178x65MM 2160Im 4K Aluminium 36° CREE"
      ]
    ],
    "images": [
      "/products/milano__p16__img1.png",
      "/products/milano__p16__img2.png"
    ],
    "tags": [
      "linear-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "compass-compass-cob-light",
    "name": "Compass COB Light",
    "model": "COMPASS",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 16,
    "description": "Compass COB Light (COMPASS) from the Linear COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUTOUTDIA. OUTER DIA. LUMENS COL. TEMP.» MATERIAL ANGLE = LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "2x12W White 75x 160MM 85x 167x63MM 2160lm 4K Aluminium 36° CREE"
      ],
      [
        "—",
        "LINEA 20 ee 0 GAD"
      ]
    ],
    "images": [
      "/products/compass__p16__img1.png",
      "/products/compass__p16__img2.png"
    ],
    "tags": [
      "linear-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "linea-linea-cob-light",
    "name": "Linea COB Light",
    "model": "LINEA",
    "category": "indoor-lights-spot-lights",
    "group": "Indoor Lights",
    "page": 16,
    "description": "Linea COB Light (LINEA) from the Linear COB Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [],
    "tags": [
      "linear-cob-light",
      "indoor-lights-spot-lights"
    ]
  },
  {
    "id": "prism-prism-led-down-light",
    "name": "Prism LED Down Light",
    "model": "PRISM",
    "category": "indoor-lights-down-lights",
    "group": "Indoor Lights",
    "page": 17,
    "description": "Prism LED Down Light (PRISM) from the LED Panel Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. ‘CUT OUT DIA. OUTER DIA. HEIGHT LUMENS — COL. TEMP. MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "18W",
        "White & BK 125MM 135MM 25MM 1980im — 4K/SK/6K Aluminium =0.90"
      ],
      [
        "24W",
        "White & BK 155MM 165MM 25MM 2640im — 4K/SK/6K Aluminium 20.90"
      ]
    ],
    "images": [
      "/products/prism__p17__img1.png",
      "/products/prism__p17__img2.png"
    ],
    "tags": [
      "led-panel-light",
      "indoor-lights-down-lights"
    ]
  },
  {
    "id": "jn-028-jn-028-led-down-light",
    "name": "JN-028 LED Down Light",
    "model": "JN-028",
    "category": "indoor-lights-down-lights",
    "group": "Indoor Lights",
    "page": 17,
    "description": "JN-028 LED Down Light (JN-028) from the LED Panel Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. ‘OUTER DIA. LUMENS: COL. TEMP, MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "White & BK 110MM 120MM 1080Im = 4K/SK/6K Aluminium =0.90"
      ],
      [
        "18W",
        "White & BK 135MM 145MM 1620Im_ — 4K/SK/6K Aluminium =0.90"
      ]
    ],
    "images": [
      "/products/jn-028__p17__img1.png",
      "/products/jn-028__p17__img2.png"
    ],
    "tags": [
      "led-panel-light",
      "indoor-lights-down-lights"
    ]
  },
  {
    "id": "comet-comet-led-panel-light",
    "name": "Comet LED Panel Light",
    "model": "COMET",
    "category": "indoor-lights-panel-lights",
    "group": "Indoor Lights",
    "page": 18,
    "description": "Comet LED Panel Light (COMET) from the LED Panel Light / Surface LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. ‘OUTER DIA. LUMENS COL. TEMP. MATERIAL SHAPE. POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "BW White. 101MM 120MM 800Im 4K & 6K Plastic Round/Square =0.60"
      ],
      [
        "18W",
        "White 150MM. 167MM. 1800Im = 4K & 6K Plastic Round/Square =0.60"
      ]
    ],
    "images": [
      "/products/comet__p18__img1.png",
      "/products/comet__p18__img2.png",
      "/products/comet__p18__img3.png",
      "/products/comet__p18__img4.png"
    ],
    "tags": [
      "led-panel-light-surface-led-light",
      "indoor-lights-panel-lights"
    ]
  },
  {
    "id": "jn-051-jn-051-led-panel-light",
    "name": "JN-051 LED Panel Light",
    "model": "JN-051",
    "category": "indoor-lights-panel-lights",
    "group": "Indoor Lights",
    "page": 18,
    "description": "JN-051 LED Panel Light (JN-051) from the LED Panel Light / Surface LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. OUTER DIA. LUMENS COL. TEMP. MATERIAL ‘SHAPE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Bw White 105MM 120MM. 720iIm 4K & 6K Aluminium Rd/Sq 20.90"
      ],
      [
        "15W",
        "White 155MM 170MM. 1350Im 4K & 6K Aluminium Rd/Sq =0.90"
      ]
    ],
    "images": [
      "/products/jn-051__p18__img1.png",
      "/products/jn-051__p18__img2.png",
      "/products/jn-051__p18__img3.png"
    ],
    "tags": [
      "led-panel-light-surface-led-light",
      "indoor-lights-panel-lights"
    ]
  },
  {
    "id": "jn-018-sparkle-pro-surface-panel-light",
    "name": "Sparkle Pro Surface Panel Light",
    "model": "JN-018",
    "category": "indoor-lights-panel-lights",
    "group": "Indoor Lights",
    "page": 18,
    "description": "Sparkle Pro Surface Panel Light (JN-018) from the LED Panel Light / Surface LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT —BODYCOL, DIMENSION HEIGHT LUMENS = COL.TEMP © MATERIAL = ANGLE = POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "15W",
        "White/BK 156MM = 26MM = 1600IM_ 4K &6K Aluminium 120° = 0.90"
      ],
      [
        "22W",
        "— White/BK 203MM 26MM = 1980lm = 4K 6K Aluminium = 120° =0.90"
      ],
      [
        "—",
        "7 ——tid"
      ]
    ],
    "images": [
      "/products/jn-018__p18__img1.png",
      "/products/jn-018__p18__img2.png",
      "/products/jn-018__p18__img3.png"
    ],
    "tags": [
      "led-panel-light-surface-led-light",
      "indoor-lights-panel-lights"
    ]
  },
  {
    "id": "grace-grace-surface-ceiling-light",
    "name": "Grace Surface Ceiling Light",
    "model": "GRACE",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 19,
    "description": "Grace Surface Ceiling Light (GRACE) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. HEIGHT WIDTH LUMENS COL. TEMP. MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "BK 65MM 85MM 1080Im 3 cct (3k+4k+6k) Aluminium 20.90"
      ],
      [
        "18W",
        "BK 65MM 110MM 1620Im 3 cct (3k+4k+6k) Aluminium =0.90"
      ]
    ],
    "images": [
      "/products/grace__p19__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "moon-moon-surface-ceiling-light",
    "name": "Moon Surface Ceiling Light",
    "model": "MOON",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 19,
    "description": "Moon Surface Ceiling Light (MOON) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. HEIGHT. WIDTH LUMENS COL.TEMR. = MATERIAL",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "18W",
        "— White/BK 38MM =—120MM_—1710Im_~—SK/4K/6K Aluminium"
      ],
      [
        "24W",
        "White/BK 38MM 175MM ——2280im_— 4K & 6K Aluminium"
      ]
    ],
    "images": [
      "/products/moon__p19__img1.png",
      "/products/moon__p19__img2.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "bj-824-bj-824-surface-ceiling-light",
    "name": "BJ-824 Surface Ceiling Light",
    "model": "BJ-824",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 19,
    "description": "BJ-824 Surface Ceiling Light (BJ-824) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. HEIGHT ‘WIDTH LUMENS: COL. TEMP. ‘MATERIAL",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "30W",
        "White 40MM 280MM 2700Im 4K ABS + PP."
      ]
    ],
    "images": [
      "/products/bj-824__p19__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "inox-inox-surface-cylinder-light",
    "name": "Inox Surface Cylinder Light",
    "model": "INOX",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 20,
    "description": "Inox Surface Cylinder Light (INOX) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE LUMENS COL. TEMP =©MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "7™w BK-GUN BK 55MM x 77MM 630Im 4K Aluminium 36° =0.90"
      ],
      [
        "—",
        "7™w BRONZE-GUN BK 55MM x 77MM 630Im 4k Aluminium 36° 20.90"
      ],
      [
        "—",
        "7wW GREY BRONZE-GUN BK 55MM x 77MM 630Im 4k Aluminium 36° 20.90"
      ]
    ],
    "images": [
      "/products/inox__p20__img1.png",
      "/products/inox__p20__img2.png",
      "/products/inox__p20__img3.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "linear-surface-linear-surface-cylinder-light",
    "name": "Linear Surface Cylinder Light",
    "model": "LINEAR SURFACE",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 20,
    "description": "Linear Surface Cylinder Light (LINEAR SURFACE) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE HEIGHT © LUMENS COLTER MATERIAL ANGLE POWER.",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "BK 35x 140MM 60MM 900Im_——_4K Aluminium 36° 20.90"
      ]
    ],
    "images": [
      "/products/linear-surface__p20__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "joy-joy-waterproof-cylinder-light",
    "name": "Joy Waterproof Cylinder Light",
    "model": "JOY",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 20,
    "description": "Joy Waterproof Cylinder Light (JOY) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. SIZE COL.TEMR = IP LUMENS MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "16W",
        "BLACK —_—-83MMx85MM_——SK&4K_—_—IP6S_—1350Im Aluminium —_=0.90"
      ]
    ],
    "images": [
      "/products/joy__p20__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "tulip-tulip-surface-cylinder-light",
    "name": "Tulip Surface Cylinder Light",
    "model": "TULIP",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 21,
    "description": "Tulip Surface Cylinder Light (TULIP) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE LUMENS = COL.TEMP = MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "BK, AB, RG, BK/RG 72MMx69MM 1080Im 4K Aluminium 45° 20.90"
      ],
      [
        "18W",
        "BK, AB, BK/RG 86MM x77MM 1620im 4K Aluminium 45° 20.90"
      ]
    ],
    "images": [
      "/products/tulip__p21__img1.png",
      "/products/tulip__p21__img2.png",
      "/products/tulip__p21__img3.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "led-surface-cylinder-led-surface-cylinder-light",
    "name": "LED Surface Cylinder Light",
    "model": "LED SURFACE CYLINDER",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 21,
    "description": "LED Surface Cylinder Light (LED SURFACE CYLINDER) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. HEIGHT WIDTH LUMENS COL. TEMP. MATERIAL ANGLE",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "20Ww BK 125MM. 94MM 1800Im 4k Aluminium 36°"
      ]
    ],
    "images": [
      "/products/led-surface-cylinder__p21__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "h1077-h1077-open-cylinder-tall-light",
    "name": "H1077 Open Cylinder Tall Light",
    "model": "H1077",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 21,
    "description": "H1077 Open Cylinder Tall Light (H1077) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "BK 35MM x 45MM 3K IP20 BRIDGELUX"
      ],
      [
        "3W",
        "White 35MM x 45MM 3K P20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/h1077__p21__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "1068r-1068r-open-cylinder-small-light",
    "name": "1068R Open Cylinder Small Light",
    "model": "1068R",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 22,
    "description": "1068R Open Cylinder Small Light (1068R) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "BK 35MM x 26MM 3K P20 BRIDGELUX"
      ],
      [
        "3W",
        "White 35MM x 26MM 3K IP20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/1068r__p22__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "crysta-crysta-surface-movable-cylinder-light",
    "name": "Crysta Surface Movable Cylinder Light",
    "model": "CRYSTA",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 22,
    "description": "Crysta Surface Movable Cylinder Light (CRYSTA) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WaT BODY COL. DIMENSION LUMENS —COL.TEMP. MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "12V Matt BK 65MMx88MM — 1200im 4K Aluminium 36° 20.90"
      ],
      [
        "42W",
        "Copper 65MMx88MM -1200im 4K. Aluminium 36° >0.90"
      ]
    ],
    "images": [
      "/products/crysta__p22__img1.png",
      "/products/crysta__p22__img2.png",
      "/products/crysta__p22__img3.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "surface-movable-cylinder-surface-led-movable-cylinder-light",
    "name": "Surface LED Movable Cylinder Light",
    "model": "SURFACE MOVABLE CYLINDER",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 22,
    "description": "Surface LED Movable Cylinder Light (SURFACE MOVABLE CYLINDER) from the Surface LED Light / Surface LED COB Light range in the Janet 2026 catalog.",
    "specHeader": "WaT BODY COL. DIMENSION LUMENS — COL. TEMP. MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "White 55MM x 130MM _1080im 4K Aluminium 36° =0.90"
      ]
    ],
    "images": [
      "/products/surface-movable-cylinder__p22__img1.png"
    ],
    "tags": [
      "surface-led-light-surface-led-cob-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "oreo-led-10-oreo-led-10-spot-light",
    "name": "Oreo LED-10 Spot Light",
    "model": "OREO LED-10",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 23,
    "description": "Oreo LED-10 Spot Light (OREO LED-10) from the Surface LED Movable Cylinder Light / Open Cabinet Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL ANGLE = POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "BK+Golden 125x83x123MM 900Im Max 3K & 4K Aluminium — 38° 20.90"
      ]
    ],
    "images": [
      "/products/oreo-led-10__p23__img1.png"
    ],
    "tags": [
      "surface-led-movable-cylinder-light-open-cabinet-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "stella-stella-open-led-spot-light",
    "name": "Stella Open LED Spot Light",
    "model": "STELLA",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 23,
    "description": "Stella Open LED Spot Light (STELLA) from the Surface LED Movable Cylinder Light / Open Cabinet Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "BK &WH 153x 52x 167MM 850Im Max 4K Aluminium 24° 20.90"
      ]
    ],
    "images": [
      "/products/stella__p23__img1.png",
      "/products/stella__p23__img2.png"
    ],
    "tags": [
      "surface-led-movable-cylinder-light-open-cabinet-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "1089r-1089r-open-cabinet-light",
    "name": "1089R Open Cabinet Light",
    "model": "1089R",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 23,
    "description": "1089R Open Cabinet Light (1089R) from the Surface LED Movable Cylinder Light / Open Cabinet Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "5wW BK 60MM x 22MM 3K & 4K IP20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/1089r__p23__img1.png"
    ],
    "tags": [
      "surface-led-movable-cylinder-light-open-cabinet-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "pearl-pearl-open-cabinet-light",
    "name": "Pearl Open Cabinet Light",
    "model": "PEARL",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 24,
    "description": "Pearl Open Cabinet Light (PEARL) from the Surface LED Movable Cylinder Light / Open Cabinet Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "SW BLACK 60MM x 14.5MM 3K IP20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/pearl__p24__img1.jpeg"
    ],
    "tags": [
      "surface-led-movable-cylinder-light-open-cabinet-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "1088-1088-open-cabinet-light",
    "name": "1088 Open Cabinet Light",
    "model": "1088",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 24,
    "description": "1088 Open Cabinet Light (1088) from the Surface LED Movable Cylinder Light / Open Cabinet Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "SW BLACK 60MM x 15.5MM 3K IP65 BRIDGELUX"
      ],
      [
        "—",
        "40. RACK ROMMy IRA GMM 3k InRs RRINCEIIIX."
      ]
    ],
    "images": [
      "/products/1088__p24__img1.png",
      "/products/1088__p24__img2.png"
    ],
    "tags": [
      "surface-led-movable-cylinder-light-open-cabinet-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "1066r-1066r-open-cylinder-light",
    "name": "1066R Open Cylinder Light",
    "model": "1066R",
    "category": "indoor-lights-surface-lights",
    "group": "Indoor Lights",
    "page": 24,
    "description": "1066R Open Cylinder Light (1066R) from the Surface LED Movable Cylinder Light / Open Cabinet Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. iP ‘LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "Gold 35MM x 21MM — 3K IP20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/1066r__p24__img1.png"
    ],
    "tags": [
      "surface-led-movable-cylinder-light-open-cabinet-light",
      "indoor-lights-surface-lights"
    ]
  },
  {
    "id": "magnum-track-magnum-track-light",
    "name": "Magnum Track Light",
    "model": "MAGNUM TRACK",
    "category": "indoor-lights-track-lights",
    "group": "Indoor Lights",
    "page": 25,
    "description": "Magnum Track Light (MAGNUM TRACK) from the LED Track Light / Conceal Foot Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL ANGLE POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "White & BK 49 x 130MM 85-105Im/watt 3cct (3k+4k+6k) Aluminium 38° 20.90"
      ],
      [
        "20W",
        "= White & BK 60 x 158MM 85-105Im/watt 3 cct (3k+4k+6k) Aluminium 38° 20.90"
      ],
      [
        "30W",
        "= White & BK 74x 178MM 85-105|m/watt 3.cct (3k+4k+6k) Aluminium 38° 20.90"
      ]
    ],
    "images": [
      "/products/magnum-track__p25__img1.png",
      "/products/magnum-track__p25__img2.png",
      "/products/magnum-track__p25__img3.png"
    ],
    "tags": [
      "led-track-light-conceal-foot-light",
      "indoor-lights-track-lights"
    ]
  },
  {
    "id": "8074-8074-conceal-foot-light",
    "name": "8074 Conceal Foot Light",
    "model": "8074",
    "category": "indoor-lights-foot-lights",
    "group": "Indoor Lights",
    "page": 25,
    "description": "8074 Conceal Foot Light (8074) from the LED Track Light / Conceal Foot Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/8074__p25__img1.png"
    ],
    "tags": [
      "led-track-light-conceal-foot-light",
      "indoor-lights-foot-lights"
    ]
  },
  {
    "id": "8071sq-8071sq-conceal-foot-light",
    "name": "8071SQ Conceal Foot Light",
    "model": "8071SQ",
    "category": "indoor-lights-foot-lights",
    "group": "Indoor Lights",
    "page": 25,
    "description": "8071SQ Conceal Foot Light (8071SQ) from the LED Track Light / Conceal Foot Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. CUT OUT DIA. OUTER DIA. COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "White 65MM 80 x 80MM 3K IP20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/8071sq__p25__img1.png"
    ],
    "tags": [
      "led-track-light-conceal-foot-light",
      "indoor-lights-foot-lights"
    ]
  },
  {
    "id": "6601-6601-conceal-foot-light",
    "name": "6601 Conceal Foot Light",
    "model": "6601",
    "category": "indoor-lights-foot-lights",
    "group": "Indoor Lights",
    "page": 26,
    "description": "6601 Conceal Foot Light (6601) from the Conceal Foot Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "3wW DARK GREY 85 x 85MM 3K |p65. BRIDGELUX"
      ]
    ],
    "images": [
      "/products/6601__p26__img1.png"
    ],
    "tags": [
      "conceal-foot-light",
      "indoor-lights-foot-lights"
    ]
  },
  {
    "id": "690l-690l-conceal-sensor-foot-light",
    "name": "690L Conceal Sensor Foot Light",
    "model": "690L",
    "category": "indoor-lights-foot-lights",
    "group": "Indoor Lights",
    "page": 26,
    "description": "690L Conceal Sensor Foot Light (690L) from the Conceal Foot Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION COL. TEMP. IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "DARK GREY 85 x 85MM 3K |p20 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/690l__p26__img1.png"
    ],
    "tags": [
      "conceal-foot-light",
      "indoor-lights-foot-lights"
    ]
  },
  {
    "id": "8070-8070-conceal-foot-light",
    "name": "8070 Conceal Foot Light",
    "model": "8070",
    "category": "indoor-lights-foot-lights",
    "group": "Indoor Lights",
    "page": 26,
    "description": "8070 Conceal Foot Light (8070) from the Conceal Foot Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL, CUTOUTDIA. OUTERDIA. ~—«COL.TEMR_ «IP LeD",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "1W",
        "White 40MM 45x65MM 3K IP20_ BRIDGELUX"
      ]
    ],
    "images": [
      "/products/8070__p26__img1.png"
    ],
    "tags": [
      "conceal-foot-light",
      "indoor-lights-foot-lights"
    ]
  },
  {
    "id": "d692-d692-open-foot-light",
    "name": "D692 Open Foot Light",
    "model": "D692",
    "category": "outdoor-lights-foot-lights",
    "group": "Outdoor Lights",
    "page": 27,
    "description": "D692 Open Foot Light (D692) from the Open Foot Light / Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. LUMENS DIMENSION COL. TEMP. ‘MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "6wW DARK GREY 540im 230x78x30MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/d692__p27__img1.png"
    ],
    "tags": [
      "open-foot-light-gate-light",
      "outdoor-lights-foot-lights"
    ]
  },
  {
    "id": "brick-brick-wall-light",
    "name": "Brick Wall Light",
    "model": "BRICK",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 27,
    "description": "Brick Wall Light (BRICK) from the Open Foot Light / Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WarT BODY COL. LUMENS DIMENSION COL. TEMP. MATERIAL iP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "aw DARK GREY 880Im __150x70x39MM_3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/brick__p27__img1.png"
    ],
    "tags": [
      "open-foot-light-gate-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "dfc-360-300-dfc-360-300-gate-light",
    "name": "DFC-360/300 Gate Light",
    "model": "DFC-360/300",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 27,
    "description": "DFC-360/300 Gate Light (DFC-360/300) from the Open Foot Light / Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. SIZE COL.TEMR © MATERIAL = IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 70x300x125MM 3K Aluminium _1P65"
      ]
    ],
    "images": [],
    "tags": [
      "open-foot-light-gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "dfc-f843f-l-square-dfc-f843f-l-square-gate-light",
    "name": "DFC-F843F-L Square Gate Light",
    "model": "DFC-F843F-L SQUARE",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 28,
    "description": "DFC-F843F-L Square Gate Light (DFC-F843F-L SQUARE) from the Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 160 x 160 x 150MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/dfc-f843f-l-square__p28__img1.png"
    ],
    "tags": [
      "gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "dfc-f843f-l-round-dfc-f843f-l-round-gate-light",
    "name": "DFC-F843F-L Round Gate Light",
    "model": "DFC-F843F-L ROUND",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 28,
    "description": "DFC-F843F-L Round Gate Light (DFC-F843F-L ROUND) from the Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT —- BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 160 x 160 x 150MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/dfc-f843f-l-round__p28__img1.png"
    ],
    "tags": [
      "gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "dfc-1020-dfc-1020-square-gate-light",
    "name": "DFC-1020 Square Gate Light",
    "model": "DFC-1020",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 28,
    "description": "DFC-1020 Square Gate Light (DFC-1020) from the Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 108 x 108 x 200MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/dfc-1020__p28__img1.png"
    ],
    "tags": [
      "gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "vista-gate-vista-gate-light",
    "name": "Vista Gate Light",
    "model": "VISTA GATE",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 29,
    "description": "Vista Gate Light (VISTA GATE) from the Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 105 x 300MM 3K Aluminium: IP65"
      ]
    ],
    "images": [
      "/products/vista-gate__p29__img1.png"
    ],
    "tags": [
      "gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "viva-gate-viva-gate-light",
    "name": "Viva Gate Light",
    "model": "VIVA GATE",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 29,
    "description": "Viva Gate Light (VIVA GATE) from the Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. ‘SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 105 x 300MM 3K Aluminium P65"
      ]
    ],
    "images": [
      "/products/viva-gate__p29__img1.png"
    ],
    "tags": [
      "gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "sh-3002-230-sh-3002-230-gate-light",
    "name": "SH-3002/230 Gate Light",
    "model": "SH-3002/230",
    "category": "outdoor-lights-gate-lights",
    "group": "Outdoor Lights",
    "page": 29,
    "description": "SH-3002/230 Gate Light (SH-3002/230) from the Gate Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Stone Grey 150 x 150 x 230MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/sh-3002-230__p29__img1.png"
    ],
    "tags": [
      "gate-light",
      "outdoor-lights-gate-lights"
    ]
  },
  {
    "id": "dfc-360-600-dfc-360-600-bollard-led-light",
    "name": "DFC 360/600 Bollard LED Light",
    "model": "DFC 360/600",
    "category": "outdoor-lights-garden-bollard",
    "group": "Outdoor Lights",
    "page": 30,
    "description": "DFC 360/600 Bollard LED Light (DFC 360/600) from the Bollard LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/dfc-360-600__p30__img1.png"
    ],
    "tags": [
      "bollard-led-light",
      "outdoor-lights-garden-bollard"
    ]
  },
  {
    "id": "dfc-362-600-dfc-362-600-bollard-led-light",
    "name": "DFC 362/600 Bollard LED Light",
    "model": "DFC 362/600",
    "category": "outdoor-lights-garden-bollard",
    "group": "Outdoor Lights",
    "page": 30,
    "description": "DFC 362/600 Bollard LED Light (DFC 362/600) from the Bollard LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP © MATERIAL «IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "_DarkGrey 140x600x 100MM _ 3K Aluminium Ip65"
      ]
    ],
    "images": [
      "/products/dfc-362-600__p30__img1.png"
    ],
    "tags": [
      "bollard-led-light",
      "outdoor-lights-garden-bollard"
    ]
  },
  {
    "id": "mushroom-mushroom-bollard-led-light",
    "name": "Mushroom Bollard LED Light",
    "model": "MUSHROOM",
    "category": "outdoor-lights-garden-bollard",
    "group": "Outdoor Lights",
    "page": 30,
    "description": "Mushroom Bollard LED Light (MUSHROOM) from the Bollard LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL, SIZE COL.TEMP © MATERIAL. «IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "DarkGrey 105x800MM 3K Aluminium P65"
      ]
    ],
    "images": [],
    "tags": [
      "bollard-led-light",
      "outdoor-lights-garden-bollard"
    ]
  },
  {
    "id": "viva-bollard-viva-bollard-led-light",
    "name": "Viva Bollard LED Light",
    "model": "VIVA BOLLARD",
    "category": "outdoor-lights-garden-bollard",
    "group": "Outdoor Lights",
    "page": 31,
    "description": "Viva Bollard LED Light (VIVA BOLLARD) from the Bollard LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [],
    "tags": [
      "bollard-led-light",
      "outdoor-lights-garden-bollard"
    ]
  },
  {
    "id": "dfc-1021-dfc-1021-round-bollard-light",
    "name": "DFC-1021 Round Bollard Light",
    "model": "DFC-1021",
    "category": "outdoor-lights-garden-bollard",
    "group": "Outdoor Lights",
    "page": 31,
    "description": "DFC-1021 Round Bollard Light (DFC-1021) from the Bollard LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT —- BODY COL. SIZE COL. TEMP. MATERIAL Pp",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 105 x 600MM 3K Aluminium, IP65"
      ]
    ],
    "images": [
      "/products/dfc-1021__p31__img1.png"
    ],
    "tags": [
      "bollard-led-light",
      "outdoor-lights-garden-bollard"
    ]
  },
  {
    "id": "dfc-1020-dfc-1020-square-bollard-light",
    "name": "DFC-1020 Square Bollard Light",
    "model": "DFC-1020",
    "category": "outdoor-lights-garden-bollard",
    "group": "Outdoor Lights",
    "page": 31,
    "description": "DFC-1020 Square Bollard Light (DFC-1020) from the Bollard LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT — BODY COL. SIZE COL.TEMR © MATERIAL «IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 108x 108x800MM 3K Aluminium P65"
      ]
    ],
    "images": [],
    "tags": [
      "bollard-led-light",
      "outdoor-lights-garden-bollard"
    ]
  },
  {
    "id": "vista-bollard-vista-bollard-led-light",
    "name": "Vista Bollard LED Light",
    "model": "VISTA BOLLARD",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 32,
    "description": "Vista Bollard LED Light (VISTA BOLLARD) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 150 x 800MM 3K Aluminium: IP65"
      ]
    ],
    "images": [
      "/products/vista-bollard__p32__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "shw-202267-shw-202267-outdoor-wall-light",
    "name": "SHW 202267 Outdoor Wall Light",
    "model": "SHW 202267",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 32,
    "description": "SHW 202267 Outdoor Wall Light (SHW 202267) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL iP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "18W",
        "Dark Grey 120x75x 200MM 3K Aluminium |P65. BRIDGELUX"
      ]
    ],
    "images": [
      "/products/shw-202267__p32__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "shw-202305-shw-202305-outdoor-wall-light",
    "name": "SHW 202305 Outdoor Wall Light",
    "model": "SHW 202305",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 32,
    "description": "SHW 202305 Outdoor Wall Light (SHW 202305) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP = MATERIAL iP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "18W",
        "Dark Grey 80 x 70 x 255MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/shw-202305__p32__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "dfc-360-outdoor-dfc-360-outdoor-wall-light",
    "name": "DFC 360 Outdoor Wall Light",
    "model": "DFC 360 OUTDOOR",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 33,
    "description": "DFC 360 Outdoor Wall Light (DFC 360 OUTDOOR) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. ‘SIZE COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 70 x 100 x 208MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/dfc-360-outdoor__p33__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "mk-3101f-mk-3101f-outdoor-wall-light",
    "name": "MK 3101F Outdoor Wall Light",
    "model": "MK 3101F",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 33,
    "description": "MK 3101F Outdoor Wall Light (MK 3101F) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL iP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 130 x 140 x 190MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/mk-3101f__p33__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "mk-2483-mk-2483-outdoor-wall-light",
    "name": "MK 2483 Outdoor Wall Light",
    "model": "MK 2483",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 33,
    "description": "MK 2483 Outdoor Wall Light (MK 2483) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 160 x 200MM. 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/mk-2483__p33__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "mkw-6615-mkw-6615-outdoor-wall-light",
    "name": "MKW 6615 Outdoor Wall Light",
    "model": "MKW 6615",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 34,
    "description": "MKW 6615 Outdoor Wall Light (MKW 6615) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/mkw-6615__p34__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "sh-w21015-sh-w21015-wall-light",
    "name": "SH-W21015 Wall Light",
    "model": "SH-W21015",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 34,
    "description": "SH-W21015 Wall Light (SH-W21015) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Dark Grey 140x140x 230MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/sh-w21015__p34__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "mk-f813c-mk-f813c-outdoor-wall-light",
    "name": "MK F813C Outdoor Wall Light",
    "model": "MK F813C",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 34,
    "description": "MK F813C Outdoor Wall Light (MK F813C) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WaT BODYCOL. SIZE COL.TEMR © MATERIAL P LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "aw DatkGrey 35x 73x 80MM 3k Aluminium P65. BRIDGELUX"
      ],
      [
        "4W",
        "Dark Grey 40x 120x80MM 3K Aluminium P65. BRIDGELUX"
      ],
      [
        "—",
        "aw Dark Grey 45x220x80MM 3K Aluminium P65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/mk-f813c__p34__img1.png",
      "/products/mk-f813c__p34__img2.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "btf-023b-4-btf-023b-4-outdoor-wall-light",
    "name": "BTF 023B-4 Outdoor Wall Light",
    "model": "BTF 023B-4",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 35,
    "description": "BTF 023B-4 Outdoor Wall Light (BTF 023B-4) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL iP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "IWx4 Dark Grey 50x50x30MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/btf-023b-4__p35__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "ap-02b-ap-02b-outdoor-wall-light",
    "name": "AP-02B Outdoor Wall Light",
    "model": "AP-02B",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 35,
    "description": "AP-02B Outdoor Wall Light (AP-02B) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL iP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "IWx2 Dark Grey 55x45x60MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/ap-02b__p35__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "ap-04b-ap-04b-outdoor-wall-light",
    "name": "AP-04B Outdoor Wall Light",
    "model": "AP-04B",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 35,
    "description": "AP-04B Outdoor Wall Light (AP-04B) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL iP ‘LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "IWx4 Dark Grey 70x50x 70MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/ap-04b__p35__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "jn-ol-121-jn-ol-121-light",
    "name": "JN-OL-121 Light",
    "model": "JN-OL-121",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 36,
    "description": "JN-OL-121 Light (JN-OL-121) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "6W",
        "Dark Grey 117x56MM RGBPWO Aluminium — |P65"
      ]
    ],
    "images": [
      "/products/jn-ol-121__p36__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "nexa-wall-nexa-wall-light",
    "name": "Nexa Wall Light",
    "model": "NEXA WALL",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 36,
    "description": "Nexa Wall Light (NEXA WALL) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "1x5W Dark Grey 90x 65MM 3K Aluminium BRIDGELUX"
      ]
    ],
    "images": [
      "/products/nexa-wall__p36__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "btf-028-2w-btf-028-2w-wall-light",
    "name": "BTF 028-2W Wall Light",
    "model": "BTF 028-2W",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 36,
    "description": "BTF 028-2W Wall Light (BTF 028-2W) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "2wW Dark Grey 3K Aluminium IP54 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/btf-028-2w__p36__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "btf-028-4w-btf-028-4w-wall-light",
    "name": "BTF 028-4W Wall Light",
    "model": "BTF 028-4W",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 37,
    "description": "BTF 028-4W Wall Light (BTF 028-4W) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "AW Dark Grey 3K Aluminium IP54 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/btf-028-4w__p37__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "ap-04-ap-04-outdoor-wall-light",
    "name": "AP-04 Outdoor Wall Light",
    "model": "AP-04",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 37,
    "description": "AP-04 Outdoor Wall Light (AP-04) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "aw Dark Grey 70 x 50 x 70MM RGB Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/ap-04__p37__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "btf-1911-btf-1911-wall-light",
    "name": "BTF 1911 Wall Light",
    "model": "BTF 1911",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 37,
    "description": "BTF 1911 Wall Light (BTF 1911) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL IP ‘LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "6wW Dark Grey 70 x 50 x 70MM. 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/btf-1911__p37__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "638-s-1-638-s-1-wall-light",
    "name": "638-S/1 Wall Light",
    "model": "638-S/1",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 38,
    "description": "638-S/1 Wall Light (638-S/1) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP, = MATERIAL IP ‘LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "3W",
        "Dark Grey 66 x 70 x 42MM. 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/638-s-1__p38__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "638-s-2-638-s-2-wall-light",
    "name": "638-S/2 Wall Light",
    "model": "638-S/2",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 38,
    "description": "638-S/2 Wall Light (638-S/2) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "3wWx2 Dark Grey 88 x 70 x 42MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/638-s-2__p38__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "sh-w0535-sh-w0535-wall-light",
    "name": "SH-W0535 Wall Light",
    "model": "SH-W0535",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 38,
    "description": "SH-W0535 Wall Light (SH-W0535) from the Outdoor LED Wall Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "ew Stone Grey 125 x 65 x 80MM 3K Aluminium IP65"
      ]
    ],
    "images": [
      "/products/sh-w0535__p38__img1.png",
      "/products/sh-w0535__p38__img2.png"
    ],
    "tags": [
      "outdoor-led-wall-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "jn-ol-116-jn-ol-116-outdoor-wall-light",
    "name": "JN-OL-116 Outdoor Wall Light",
    "model": "JN-OL-116",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 39,
    "description": "JN-OL-116 Outdoor Wall Light (JN-OL-116) from the Outdoor LED Wall Light / Spike Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/jn-ol-116__p39__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light-spike-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "m2033-4-m2033-4-led-light",
    "name": "M2033-4 LED Light",
    "model": "M2033-4",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 39,
    "description": "M2033-4 LED Light (M2033-4) from the Outdoor LED Wall Light / Spike Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. COL. TEMP. MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Bw Dark Grey 3K Alluminium IP65. BRIDGELUX"
      ]
    ],
    "images": [
      "/products/m2033-4__p39__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light-spike-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "c-0710-c-0710-outdoor-spike-light",
    "name": "C-0710 Outdoor Spike Light",
    "model": "C-0710",
    "category": "outdoor-lights-spike-lights",
    "group": "Outdoor Lights",
    "page": 39,
    "description": "C-0710 Outdoor Spike Light (C-0710) from the Outdoor LED Wall Light / Spike Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 65 x 180MM 3K Aluminium IP65 BRIDGELUX"
      ]
    ],
    "images": [
      "/products/c-0710__p39__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light-spike-light",
      "outdoor-lights-spike-lights"
    ]
  },
  {
    "id": "mk-c-9902-mk-c-9902-outdoor-spike-light",
    "name": "MK-C 9902 Outdoor Spike Light",
    "model": "MK-C 9902",
    "category": "outdoor-lights-spike-lights",
    "group": "Outdoor Lights",
    "page": 40,
    "description": "MK-C 9902 Outdoor Spike Light (MK-C 9902) from the Outdoor LED Wall Light / Spike Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL.TEMP = MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/mk-c-9902__p40__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light-spike-light",
      "outdoor-lights-spike-lights"
    ]
  },
  {
    "id": "jn-ol-120-jn-ol-120-outdoor-spike-light",
    "name": "JN-OL-120 Outdoor Spike Light",
    "model": "JN-OL-120",
    "category": "outdoor-lights-spike-lights",
    "group": "Outdoor Lights",
    "page": 40,
    "description": "JN-OL-120 Outdoor Spike Light (JN-OL-120) from the Outdoor LED Wall Light / Spike Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP. MATERIAL IP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "10W",
        "Dark Grey 72 x 72 x 275MM 3K Aluminium Die Cast IP65"
      ]
    ],
    "images": [
      "/products/jn-ol-120__p40__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light-spike-light",
      "outdoor-lights-spike-lights"
    ]
  },
  {
    "id": "ranger-ranger-outdoor-spike-light",
    "name": "Ranger Outdoor Spike Light",
    "model": "RANGER",
    "category": "outdoor-lights-spike-lights",
    "group": "Outdoor Lights",
    "page": 40,
    "description": "Ranger Outdoor Spike Light (RANGER) from the Outdoor LED Wall Light / Spike Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. COL. TEMP = MATERIAL IP LED",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "7™w Dark Grey 3K Aluminium IP65. BRIDGELUX"
      ]
    ],
    "images": [
      "/products/ranger__p40__img1.png"
    ],
    "tags": [
      "outdoor-led-wall-light-spike-light",
      "outdoor-lights-spike-lights"
    ]
  },
  {
    "id": "rolex-rolex-led-bulkhead-light",
    "name": "Rolex LED Bulkhead Light",
    "model": "ROLEX",
    "category": "outdoor-lights-wall-lights",
    "group": "Outdoor Lights",
    "page": 41,
    "description": "Rolex LED Bulkhead Light (ROLEX) from the Bulkhead LED Light / Mirror LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. ‘SIZE COL. TEMP. ‘LUMENS ANGLE",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "15W",
        "White 210 x 70 x 47MM 3K & 6K 1350iIm, 120°"
      ]
    ],
    "images": [
      "/products/rolex__p41__img1.png"
    ],
    "tags": [
      "bulkhead-led-light-mirror-led-light",
      "outdoor-lights-wall-lights"
    ]
  },
  {
    "id": "emerald-emerald-mirror-light",
    "name": "Emerald Mirror Light",
    "model": "EMERALD",
    "category": "indoor-lights-mirror-lights",
    "group": "Indoor Lights",
    "page": 41,
    "description": "Emerald Mirror Light (EMERALD) from the Bulkhead LED Light / Mirror LED Light range in the Janet 2026 catalog.",
    "specHeader": "watt BODY COL. — SIZE COL. TEMP,",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/emerald__p41__img1.png"
    ],
    "tags": [
      "bulkhead-led-light-mirror-led-light",
      "indoor-lights-mirror-lights"
    ]
  },
  {
    "id": "bright-bright-mirror-light",
    "name": "Bright Mirror Light",
    "model": "BRIGHT",
    "category": "indoor-lights-mirror-lights",
    "group": "Indoor Lights",
    "page": 41,
    "description": "Bright Mirror Light (BRIGHT) from the Bulkhead LED Light / Mirror LED Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP.",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "BK/RG 42CM 3CCT (3k+4k+6k)"
      ]
    ],
    "images": [
      "/products/bright__p41__img1.png"
    ],
    "tags": [
      "bulkhead-led-light-mirror-led-light",
      "indoor-lights-mirror-lights"
    ]
  },
  {
    "id": "omega-omega-mirror-light",
    "name": "Omega Mirror Light",
    "model": "OMEGA",
    "category": "indoor-lights-mirror-lights",
    "group": "Indoor Lights",
    "page": 42,
    "description": "Omega Mirror Light (OMEGA) from the Mirror LED Light / LED Tube Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. SIZE COL. TEMP,",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "White 41CM 6K & 4K"
      ]
    ],
    "images": [
      "/products/omega__p42__img1.png"
    ],
    "tags": [
      "mirror-led-light-led-tube-light",
      "indoor-lights-mirror-lights"
    ]
  },
  {
    "id": "florence-florence-mirror-light",
    "name": "Florence Mirror Light",
    "model": "FLORENCE",
    "category": "indoor-lights-mirror-lights",
    "group": "Indoor Lights",
    "page": 42,
    "description": "Florence Mirror Light (FLORENCE) from the Mirror LED Light / LED Tube Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. SIZE COL. TEMP",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "12W",
        "Silver 41CM CCT (8k-+4k+5k)"
      ],
      [
        "18W",
        "_Sier 520M __3CCT (3k-+4k+5k)"
      ]
    ],
    "images": [
      "/products/florence__p42__img1.png"
    ],
    "tags": [
      "mirror-led-light-led-tube-light",
      "indoor-lights-mirror-lights"
    ]
  },
  {
    "id": "viva-tube-viva-led-tube-light",
    "name": "Viva LED Tube Light",
    "model": "VIVA TUBE",
    "category": "indoor-lights-office-lights",
    "group": "Indoor Lights",
    "page": 42,
    "description": "Viva LED Tube Light (VIVA TUBE) from the Mirror LED Light / LED Tube Light range in the Janet 2026 catalog.",
    "specHeader": "WATT COL. TEMP. LUMENS MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "36W",
        "6K 3800Im Aluminium 20.60"
      ]
    ],
    "images": [
      "/products/viva-tube__p42__img1.png"
    ],
    "tags": [
      "mirror-led-light-led-tube-light",
      "indoor-lights-office-lights"
    ]
  },
  {
    "id": "bj-823-kxy-bj-823-kxy-profile-hanging",
    "name": "BJ-823-KXY Profile Hanging",
    "model": "BJ-823-KXY",
    "category": "decorative-lights-hanging-lights",
    "group": "Decorative Lights",
    "page": 43,
    "description": "BJ-823-KXY Profile Hanging (BJ-823-KXY) from the LED Profile Hanging / LED Rope Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "54W",
        "Black 600MM 3780Im 4k Iron 20.90"
      ]
    ],
    "images": [
      "/products/bj-823-kxy__p43__img1.png"
    ],
    "tags": [
      "led-profile-hanging-led-rope-light",
      "decorative-lights-hanging-lights"
    ]
  },
  {
    "id": "bj-823-6b-bj-823-6b-profile-hanging",
    "name": "BJ-823-6B Profile Hanging",
    "model": "BJ-823-6B",
    "category": "decorative-lights-hanging-lights",
    "group": "Decorative Lights",
    "page": 43,
    "description": "BJ-823-6B Profile Hanging (BJ-823-6B) from the LED Profile Hanging / LED Rope Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "4aw Black 600MM 3360im 4k Iron 20.90"
      ]
    ],
    "images": [
      "/products/bj-823-6b__p43__img1.png"
    ],
    "tags": [
      "led-profile-hanging-led-rope-light",
      "decorative-lights-hanging-lights"
    ]
  },
  {
    "id": "bj-6086d-bj-6086d-3cct-profile-hanging",
    "name": "BJ-6086D - 3CCT Profile Hanging",
    "model": "BJ-6086D",
    "category": "decorative-lights-hanging-lights",
    "group": "Decorative Lights",
    "page": 43,
    "description": "BJ-6086D - 3CCT Profile Hanging (BJ-6086D) from the LED Profile Hanging / LED Rope Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "48W",
        "White/BK 1200MM 4800Im Sct (3k+4k+6k) = Aluminium+PC 20.90"
      ]
    ],
    "images": [
      "/products/bj-6086d__p43__img1.png",
      "/products/bj-6086d__p43__img2.png"
    ],
    "tags": [
      "led-profile-hanging-led-rope-light",
      "decorative-lights-hanging-lights"
    ]
  },
  {
    "id": "wingo-wingo-led-profile-hanging",
    "name": "Wingo LED Profile Hanging",
    "model": "WINGO",
    "category": "decorative-lights-hanging-lights",
    "group": "Decorative Lights",
    "page": 44,
    "description": "Wingo LED Profile Hanging (WINGO) from the LED Profile Hanging / LED Rope Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODY COL. DIMENSION LUMENS COL. TEMP. MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "42W",
        "BK 1200MM 4200im 3 cct (3k+4k+6k) Aluminium 20.90"
      ]
    ],
    "images": [
      "/products/wingo__p44__img1.png"
    ],
    "tags": [
      "led-profile-hanging-led-rope-light",
      "decorative-lights-hanging-lights"
    ]
  },
  {
    "id": "magnum-profile-magnum-profile-hanging",
    "name": "Magnum Profile Hanging",
    "model": "MAGNUM PROFILE",
    "category": "decorative-lights-hanging-lights",
    "group": "Decorative Lights",
    "page": 44,
    "description": "Magnum Profile Hanging (MAGNUM PROFILE) from the LED Profile Hanging / LED Rope Light range in the Janet 2026 catalog.",
    "specHeader": "WATT BODYCOL. «DIMENSION LUMENS COL. TEMP MATERIAL POWER",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "40W",
        "_BK.& White 1200MM — 4000im — 3CCT (3k-+4k+6k) Aluminium =0.90"
      ]
    ],
    "images": [
      "/products/magnum-profile__p44__img1.png"
    ],
    "tags": [
      "led-profile-hanging-led-rope-light",
      "decorative-lights-hanging-lights"
    ]
  },
  {
    "id": "smd-2835-120-rope-smd-2835-120-lamp-single-line-rope-light",
    "name": "SMD 2835-120 Lamp Single Line Rope Light",
    "model": "SMD 2835-120 ROPE",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 44,
    "description": "SMD 2835-120 Lamp Single Line Rope Light (SMD 2835-120 ROPE) from the LED Profile Hanging / LED Rope Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "SMD 2835-120 LAMP §"
      ],
      [
        "—",
        "Material 12MM PVC, a ="
      ],
      [
        "—",
        "7MM PCB = —"
      ],
      [
        "—",
        "IP IP65 - —Z"
      ],
      [
        "—",
        "Col. Temp. : 3K, 4K, Blue, Amber, Pink, Green a"
      ]
    ],
    "images": [
      "/products/smd-2835-120-rope__p44__img1.png"
    ],
    "tags": [
      "led-profile-hanging-led-rope-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "smd-2835-144-rope-smd-2835-144-led-single-line-rope-light",
    "name": "SMD 2835-144 LED Single Line Rope Light",
    "model": "SMD 2835-144 ROPE",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 45,
    "description": "SMD 2835-144 LED Single Line Rope Light (SMD 2835-144 ROPE) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "SMD 2835-144 LED §"
      ],
      [
        "—",
        "Output 10W/MT a \\"
      ],
      [
        "—",
        "Material 17MM PVG. SS—Yw \\\\\\"
      ],
      [
        "—",
        "10MM PCB =) WSN"
      ],
      [
        "—",
        "IP IP65 SS 7"
      ],
      [
        "—",
        "Col. Temp. : 3K & 4K SS"
      ]
    ],
    "images": [
      "/products/smd-2835-144-rope__p45__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "fcob-rope-220v-fcob-rope-light-220v",
    "name": "FCOB Rope Light 220V",
    "model": "FCOB ROPE 220V",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 45,
    "description": "FCOB Rope Light 220V (FCOB ROPE 220V) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "ROPE LIGHT 220V -"
      ],
      [
        "—",
        "IP P20"
      ],
      [
        "—",
        "Col. Temp. : 3K & 4K"
      ],
      [
        "—",
        "Lumens: 24-26 Im/Watt"
      ]
    ],
    "images": [
      "/products/fcob-rope-220v__p45__img1.jpeg"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "240-lamp-10mm-240-lamp-10mm-12v-24v-led-strip-light",
    "name": "240 Lamp 10MM 12V/24V LED Strip Light",
    "model": "240 LAMP 10MM",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 45,
    "description": "240 Lamp 10MM 12V/24V LED Strip Light (240 LAMP 10MM) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "240 LAMP 10MM 12V/24V g"
      ],
      [
        "—",
        "LED STRIP LIGHT 7"
      ],
      [
        "—",
        "Output 18W/MTR \\ Vor ~ aot"
      ],
      [
        "—",
        "Lumens: 24-26Im/Watt Nt cae"
      ],
      [
        "—",
        "40MM DOUBLE PCB ee:"
      ],
      [
        "—",
        "IP IP20 Rays"
      ],
      [
        "—",
        "Col. Temp. _: 3K, 4K, 5K & 6K"
      ]
    ],
    "images": [
      "/products/240-lamp-10mm__p45__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "192-lamp-8mm-192-lamp-8mm-24v-3cct-led-strip-light",
    "name": "192 Lamp 8MM 24V 3CCT LED Strip Light",
    "model": "192 LAMP 8MM",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 45,
    "description": "192 Lamp 8MM 24V 3CCT LED Strip Light (192 LAMP 8MM) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "192 LAMP 8MM 24V 3CCT g"
      ],
      [
        "—",
        "Output 14W/MTR > inp"
      ],
      [
        "—",
        "Lumens 24-26imyWatt ee eco"
      ],
      [
        "—",
        "&8MM DOUBLE PCB ee"
      ],
      [
        "—",
        "iP 1P20 Rapa"
      ],
      [
        "—",
        "Col. Temp. : 3CCT (3k+4k+6k)"
      ]
    ],
    "images": [
      "/products/192-lamp-8mm__p45__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "120-lamp-8mm-120-lamp-8mm-12v-led-strip",
    "name": "120 Lamp 8MM 12V LED Strip",
    "model": "120 LAMP 8MM",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 46,
    "description": "120 Lamp 8MM 12V LED Strip (120 LAMP 8MM) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "120 LAMP 8MM 12V g"
      ],
      [
        "—",
        "SMD 2835-120 LAMP LED STRIP"
      ],
      [
        "—",
        "Lumens 20-22Im/Watt \\ Supieg ite"
      ],
      [
        "—",
        "IP IP20 . Sete"
      ]
    ],
    "images": [
      "/products/120-lamp-8mm__p46__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "120-lamp-5mm-120-lamp-5mm-12v-led-strip",
    "name": "120 Lamp 5MM 12V LED Strip",
    "model": "120 LAMP 5MM",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 46,
    "description": "120 Lamp 5MM 12V LED Strip (120 LAMP 5MM) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "120 LAMP 5MM 12V g"
      ],
      [
        "—",
        "SMD 2835-120 LAMP LED STRIP"
      ],
      [
        "—",
        "Output 7W/MTR \\ \\ J ye corer"
      ],
      [
        "—",
        "Lumens: 20-22Im/Watt a Tale eae te"
      ],
      [
        "—",
        "5MM Nee Pe ae ont"
      ],
      [
        "—",
        "1p IP20 a"
      ]
    ],
    "images": [
      "/products/120-lamp-5mm__p46__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "240-lamp-5mm-240-lamp-5mm-12v-led-strip",
    "name": "240 Lamp 5MM 12V LED Strip",
    "model": "240 LAMP 5MM",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 46,
    "description": "240 Lamp 5MM 12V LED Strip (240 LAMP 5MM) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "240 LAMP 5MM 12V g"
      ],
      [
        "—",
        "SMD 2835-240 LAMP LED STRIP _"
      ],
      [
        "—",
        "Output 14W/MTR ="
      ],
      [
        "—",
        "Lumens: 24-26Im/Watt"
      ],
      [
        "—",
        "IP IP20"
      ],
      [
        "—",
        "Col. Temp. : 3K & 4K"
      ]
    ],
    "images": [
      "/products/240-lamp-5mm__p46__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "240-lamp-10mm-black-240-lamp-10mm-12v-black-strip",
    "name": "240 Lamp 10MM 12V Black Strip",
    "model": "240 LAMP 10MM BLACK",
    "category": "indoor-lights-led-strip-lights",
    "group": "Indoor Lights",
    "page": 46,
    "description": "240 Lamp 10MM 12V Black Strip (240 LAMP 10MM BLACK) from the LED Rope Light / LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "240 LAMP 10MM 12V BLACK STRIP g"
      ],
      [
        "—",
        "SMD 2835-240 LAMP LED STRIP"
      ],
      [
        "—",
        "Output 18W/MTR ee"
      ],
      [
        "—",
        "Lumens 24-26|m/Watt"
      ],
      [
        "—",
        "CRI 80"
      ],
      [
        "—",
        "iP 1P20"
      ],
      [
        "—",
        "Col. Temp. : 4K & 5K"
      ]
    ],
    "images": [
      "/products/240-lamp-10mm-black__p46__img1.png"
    ],
    "tags": [
      "led-rope-light-led-strip-light",
      "indoor-lights-led-strip-lights"
    ]
  },
  {
    "id": "smps-standard-smps-for-led-strip-light",
    "name": "SMPS for LED Strip Light",
    "model": "SMPS STANDARD",
    "category": "indoor-lights-led-driver-power-supply",
    "group": "Indoor Lights",
    "page": 47,
    "description": "SMPS for LED Strip Light (SMPS STANDARD) from the SMPS for LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "7 i) AN ae"
      ],
      [
        "—",
        "12V-3A 100 x 40 x 22MM p20. 36W OUT PUT"
      ],
      [
        "—",
        "12V-5A, 114x49.5x 22MM |p20 60W OUT PUT"
      ],
      [
        "—",
        "12V-8.3A, 138 x 49.5x 22MM _ p20 100W OUT PUT"
      ],
      [
        "—",
        "12V-12.5A 178x49.5x22MM |p20 150W OUT PUT"
      ],
      [
        "—",
        "12V-20.0A 205x49.5x 22MM p20 250W OUT PUT"
      ],
      [
        "—",
        "12V-20.0A 205% 49.5x 22MM Ip20 250W OUT PUT"
      ]
    ],
    "images": [
      "/products/smps-standard__p47__img1.png",
      "/products/smps-standard__p47__img2.png"
    ],
    "tags": [
      "smps-for-led-strip-light",
      "indoor-lights-led-driver-power-supply"
    ]
  },
  {
    "id": "slim-smps-slim-smps-for-led-strip-light",
    "name": "Slim SMPS for LED Strip Light",
    "model": "SLIM SMPS",
    "category": "indoor-lights-led-driver-power-supply",
    "group": "Indoor Lights",
    "page": 47,
    "description": "Slim SMPS for LED Strip Light (SLIM SMPS) from the SMPS for LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "24V-4.25A 140x47.0x 22MM Ip20 100W OUTPUT"
      ],
      [
        "—",
        "24V-6.25A 178x49.5x22MM |p20 150W OUT PUT"
      ],
      [
        "—",
        "24V-10.0A 205 x 49.5x 22MM |p20 240W OUT PUT"
      ],
      [
        "—",
        "24-16,.60A 238x49.5x 22MM p20 400W OUT PUT"
      ]
    ],
    "images": [
      "/products/slim-smps__p47__img1.png"
    ],
    "tags": [
      "smps-for-led-strip-light",
      "indoor-lights-led-driver-power-supply"
    ]
  },
  {
    "id": "remote-remote-for-dimmable-and-tunable-lights",
    "name": "Remote for Dimmable & Tunable Lights",
    "model": "REMOTE",
    "category": "indoor-lights-led-driver-power-supply",
    "group": "Indoor Lights",
    "page": 47,
    "description": "Remote for Dimmable & Tunable Lights (REMOTE) from the SMPS for LED Strip Light range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "12V-3A 26318 18MM —Ip20. 36W OUT PUT"
      ],
      [
        "—",
        "12V-6.25A 342x18x 18MM —Ip2073.5W OUT PUT"
      ],
      [
        "—",
        "12-104 345x21x21MM p20 120W OUT PUT"
      ]
    ],
    "images": [
      "/products/remote__p47__img1.png",
      "/products/remote__p47__img2.png"
    ],
    "tags": [
      "smps-for-led-strip-light",
      "indoor-lights-led-driver-power-supply"
    ]
  },
  {
    "id": "surface-silicon-surface-silicon-profile-10x10mm-12x12mm",
    "name": "Surface Silicon Profile 10x10MM / 12x12MM",
    "model": "SURFACE SILICON",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 48,
    "description": "Surface Silicon Profile 10x10MM / 12x12MM (SURFACE SILICON) from the Silicon Profile range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "PROFILE 4"
      ],
      [
        "—",
        "10 x 10MM Surface"
      ],
      [
        "—",
        "12 x 12MM Surface"
      ],
      [
        "—",
        "15 x 15MM Surface"
      ]
    ],
    "images": [
      "/products/surface-silicon__p48__img1.png",
      "/products/surface-silicon__p48__img2.jpeg",
      "/products/surface-silicon__p48__img3.png"
    ],
    "tags": [
      "silicon-profile",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "silicon-220v-surface-silicon-with-220v-strip-profile",
    "name": "Surface Silicon with 220V Strip Profile",
    "model": "SILICON 220V",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 48,
    "description": "Surface Silicon with 220V Strip Profile (SILICON 220V) from the Silicon Profile range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "WITH 220V STRIP"
      ],
      [
        "—",
        "10.x 10MM Surface e*"
      ],
      [
        "—",
        "16x 16MM Surface"
      ],
      [
        "—",
        "Color : 3K & 4K"
      ]
    ],
    "images": [
      "/products/silicon-220v__p48__img1.png"
    ],
    "tags": [
      "silicon-profile",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "silicon-24v-surface-silicon-with-24v-strip-profile",
    "name": "Surface Silicon with 24V Strip Profile",
    "model": "SILICON 24V",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 48,
    "description": "Surface Silicon with 24V Strip Profile (SILICON 24V) from the Silicon Profile range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "WITH 24V STRIP"
      ]
    ],
    "images": [
      "/products/silicon-24v__p48__img1.png",
      "/products/silicon-24v__p48__img2.png"
    ],
    "tags": [
      "silicon-profile",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-204-pxg-204-17mm-surface-profile",
    "name": "PXG 204 17MM Surface Profile",
    "model": "PXG 204",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 49,
    "description": "PXG 204 17MM Surface Profile (PXG 204) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "PXG 204"
      ],
      [
        "—",
        "17MM SURFACE PROFILE"
      ],
      [
        "—",
        "7 bead (9"
      ]
    ],
    "images": [
      "/products/pxg-204__p49__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-205-pxg-205-17mm-recess-profile",
    "name": "PXG 205 17MM Recess Profile",
    "model": "PXG 205",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 49,
    "description": "PXG 205 17MM Recess Profile (PXG 205) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish & Matt Black 7",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Dimension: Cutout - 17MM / Height - 7MM / Outer - 230.60MM"
      ]
    ],
    "images": [
      "/products/pxg-205__p49__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-205-1-pxg-205-1-25mm-recess-profile",
    "name": "PXG 205/1 25MM Recess Profile",
    "model": "PXG 205/1",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 49,
    "description": "PXG 205/1 25MM Recess Profile (PXG 205/1) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish & Matt Black",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Dimension : Cutout - 23.3MM / Height - 90.60MM / Outer - 30MM"
      ]
    ],
    "images": [
      "/products/pxg-205-1__p49__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-204-1-pxg-204-1-25mm-surface-profile",
    "name": "PXG 204/1 25MM Surface Profile",
    "model": "PXG 204/1",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 49,
    "description": "PXG 204/1 25MM Surface Profile (PXG 204/1) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish -",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/pxg-204-1__p49__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-3512a-pxg-3512a-35mm-recess-profile",
    "name": "PXG 3512A 35MM Recess Profile",
    "model": "PXG 3512A",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 50,
    "description": "PXG 3512A 35MM Recess Profile (PXG 3512A) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "PXG 3512A y"
      ],
      [
        "—",
        "35MM RECESS PROFILE “of"
      ]
    ],
    "images": [
      "/products/pxg-3512a__p50__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-1616-pxg-1616-16mm-corner-profile",
    "name": "PXG 1616 16MM Corner Profile",
    "model": "PXG 1616",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 50,
    "description": "PXG 1616 16MM Corner Profile (PXG 1616) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish & Matt Black",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Dimension Cutout - 340.60MM / Height - 12MM / Outer - 42MM"
      ],
      [
        "—",
        "PXG 1616"
      ],
      [
        "—",
        "16MM CORNER PROFILE y"
      ]
    ],
    "images": [
      "/products/pxg-1616__p50__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-1010a-pxg-1010a-10mm-recess-profile",
    "name": "PXG 1010A 10MM Recess Profile",
    "model": "PXG 1010A",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 50,
    "description": "PXG 1010A 10MM Recess Profile (PXG 1010A) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish Lt =< =",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Dimension : Cutout - 9.5MM / Height - 10MM / Outer - 16MM"
      ]
    ],
    "images": [
      "/products/pxg-1010a__p50__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-101a-pxg-101a-8mm-recess-profile",
    "name": "PXG 101A 8MM Recess Profile",
    "model": "PXG 101A",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 50,
    "description": "PXG 101A 8MM Recess Profile (PXG 101A) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish v*",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Dimension : Cutout - 70.60MM / Height - 9MM / Outer - 11.20MM"
      ]
    ],
    "images": [
      "/products/pxg-101a__p50__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-364a-pxg-364a-12mm-recess-profile",
    "name": "PXG 364A 12MM Recess Profile",
    "model": "PXG 364A",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 51,
    "description": "PXG 364A 12MM Recess Profile (PXG 364A) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "PXG 364A"
      ],
      [
        "—",
        "12MM RECESS PROFILE po"
      ]
    ],
    "images": [
      "/products/pxg-364a__p51__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-364m-pxg-364m-12mm-surface-profile",
    "name": "PXG 364M 12MM Surface Profile",
    "model": "PXG 364M",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 51,
    "description": "PXG 364M 12MM Surface Profile (PXG 364M) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish & Matt Black",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/pxg-364m__p51__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "pxg-1010-pxg-1010-10mm-surface-profile",
    "name": "PXG 1010 10MM Surface Profile",
    "model": "PXG 1010",
    "category": "indoor-lights-profile",
    "group": "Indoor Lights",
    "page": 51,
    "description": "PXG 1010 10MM Surface Profile (PXG 1010) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color : Aluminium Finish",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [],
    "images": [
      "/products/pxg-1010__p51__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-profile"
    ]
  },
  {
    "id": "2x2-pluto-2x2-pluto-recess-panel-light",
    "name": "2x2 Pluto Recess Panel Light",
    "model": "2x2 PLUTO",
    "category": "indoor-lights-panel-lights",
    "group": "Indoor Lights",
    "page": 51,
    "description": "2x2 Pluto Recess Panel Light (2x2 PLUTO) from the Profile Light Fittings range in the Janet 2026 catalog.",
    "specHeader": "Body Color: WHITE ey a",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "Dimension: Outer - 595 x 595MM <= a"
      ],
      [
        "—",
        "Colour Tomp.: 6K _—"
      ]
    ],
    "images": [
      "/products/2x2-pluto__p51__img1.png"
    ],
    "tags": [
      "profile-light-fittings",
      "indoor-lights-panel-lights"
    ]
  },
  {
    "id": "gz-ssmk15-gz-ssmk15-single-door-sensor",
    "name": "GZ-SSMK15 Single Door Sensor",
    "model": "GZ-SSMK15",
    "category": "sensor-wardrobe-sensor",
    "group": "Sensor",
    "page": 52,
    "description": "GZ-SSMK15 Single Door Sensor (GZ-SSMK15) from the LED Sensor range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "GZ-SSMK15 ,"
      ],
      [
        "—",
        "Load 12V/60Watt or 24V/120Watt 7"
      ],
      [
        "—",
        "Sensed Dist. : 0-6CM"
      ]
    ],
    "images": [
      "/products/gz-ssmk15__p52__img1.png",
      "/products/gz-ssmk15__p52__img2.png"
    ],
    "tags": [
      "led-sensor",
      "sensor-wardrobe-sensor"
    ]
  },
  {
    "id": "gz-smk15-gz-smk15-double-door-sensor",
    "name": "GZ-SMK15 Double Door Sensor",
    "model": "GZ-SMK15",
    "category": "sensor-wardrobe-sensor",
    "group": "Sensor",
    "page": 52,
    "description": "GZ-SMK15 Double Door Sensor (GZ-SMK15) from the LED Sensor range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "GZ-SMK15 ry"
      ],
      [
        "—",
        "Load 12V/60Watt or 24V/120Watt J e"
      ],
      [
        "—",
        "Sensed Dist. : 0-6CM ~"
      ]
    ],
    "images": [
      "/products/gz-smk15__p52__img1.png",
      "/products/gz-smk15__p52__img2.png"
    ],
    "tags": [
      "led-sensor",
      "sensor-wardrobe-sensor"
    ]
  },
  {
    "id": "gz-ld701b-gz-ld701b-microwave-sensor",
    "name": "GZ-LD701B Microwave Sensor",
    "model": "GZ-LD701B",
    "category": "sensor-motion-sensor",
    "group": "Sensor",
    "page": 52,
    "description": "GZ-LD701B Microwave Sensor (GZ-LD701B) from the LED Sensor range in the Janet 2026 catalog.",
    "specHeader": "",
    "specColumns": [
      "Watt",
      "Specification"
    ],
    "variants": [
      [
        "—",
        "GZ-LD701B ae"
      ],
      [
        "—",
        "Load + 12V/60Watt or 24V/120Watt bea"
      ],
      [
        "—",
        "Sensed Dist. : 0-6CM P"
      ],
      [
        "—",
        "Body Colour : Black & White 7"
      ]
    ],
    "images": [
      "/products/gz-ld701b__p52__img1.png"
    ],
    "tags": [
      "led-sensor",
      "sensor-motion-sensor"
    ]
  }
];

export function productImage(p: { images: string[]; page: number }): string {
  return p.images[0] ?? `/catalog/page-${String(p.page).padStart(2, "0")}.jpg`;
}

export function categoryImage(categoryId: string): string {
  const p = products.find((x) => x.category === categoryId && x.images.length > 0);
  return p ? p.images[0]! : "/catalog/page-03.jpg";
}
