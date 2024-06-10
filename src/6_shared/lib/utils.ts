import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import { theme } from "@/6_shared/themes";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": Object.keys(theme.fontSize).map((key) => `text-${key}`),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
