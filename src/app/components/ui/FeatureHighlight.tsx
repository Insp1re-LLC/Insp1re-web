"use client";

import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HighlightItem {
  icon: ReactNode;
  label: string;
}

interface FeatureHighlightProps {
  items: HighlightItem[];
  className?: string;
}

export default function FeatureHighlight({
  items,
  className,
}: FeatureHighlightProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-8 py-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-16 h-16 bg-white rounded-full border-2 border-brand flex items-center justify-center text-2xl text-brand">
            {item.icon}
          </div>
          <p className="text-sm text-text font-medium">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
