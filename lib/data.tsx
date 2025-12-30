import {
  Siren,
  DoorOpen,
  FlaskConical,
  Flame,
  ArrowUpDown,
} from "lucide-react";

export interface Flashcard {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  lastModified: Date;
  icon: React.ElementType;
  cards: Flashcard[];
}

export const topics: Topic[] = [
  {
    slug: "emergency_codes",
    title: "أكواد الطوارئ",
    description: "تعلم المزيد عن جميع أكواد الطوارئ الخاصة بالمستشفيات.",
    lastModified: new Date("30-12-2025"),
    icon: Siren,
    cards: [
      {
        slug: "emergency_codes",
        title: "أكواد الطوارئ",
        description: "تعرف علي معنى ألوان أكواد الطوارئ.",
        image: "/images/cards/emergency_codes.jpeg",
      },
    ],
  },
  {
    slug: "evacuation",
    title: "إخلاء",
    description: "تعلم المزيد عن إخلاء المستشفيات في أوقات الطوارئ.",
    lastModified: new Date("30-12-2025"),
    icon: DoorOpen,
    cards: [
      {
        slug: "race",
        title: "RACE",
        description: "تعرف علي كيفية إخلاء المستشفيات في أوقات الطوارئ.",
        image: "/images/cards/race.jpeg",
      },
    ],
  },
  {
    slug: "chemical_signals",
    title: "الإشارات الكيميائية",
    description: "تعلم المزيد عن إشارات الكيميائية الخاصة بالمستشفيات.",
    lastModified: new Date("30-12-2025"),
    icon: FlaskConical,
    cards: [
      {
        slug: "warning_signs_in_laboratories",
        title: "إشارات تحذيرية في المختبرات",
        description: "تعرف علي الإشارات التحذيرية في مختبرات المستشفيات.",
        image: "/images/cards/warning_signs_in_laboratories.jpeg",
      },
    ],
  },
  {
    slug: "fire_extinguisher",
    title: "الطفايات",
    description: "تعلم المزيد عن كيفية استخدام الطفايات والتعامل مع الحرائق.",
    lastModified: new Date("30-12-2025"),
    icon: Flame,
    cards: [
      {
        slug: "race_pass",
        title: "RACE_PASS",
        description: "تعلم كيفية التعامل مع الحرائق في المستشفيات.",
        image: "/images/cards/race_pass.jpeg",
      },
      {
        slug: "fire_extinguisher_types",
        title: "أنواع الطفايات",
        description: "تعرف علي جميع أنواع الطفايات واستخداماتها.",
        image: "/images/cards/fire_extinguisher_types.jpeg",
      },
      {
        slug: "pass",
        title: "استخدام الطفايات (PASS)",
        description: "تعلم كيفية استخدام الطفايات في حالة حرائق بأمان تام.",
        image: "/images/cards/pass.jpeg",
      },
    ],
  },
  {
    slug: "elevators",
    title: "المصاعد",
    description: "تعلم المزيد عن كيفية استخدام المصاعد في المستشفيات.",
    lastModified: new Date("30-12-2025"),
    icon: ArrowUpDown,
    cards: [
      {
        slug: "safety_in_elevators",
        title: "السلامة في المصاعد",
        description: "تعلم كيفية استخدام المصاعد بأمان في المستشفيات.",
        image: "/images/cards/safety_in_elevators.jpeg",
      },
    ],
  },
];
