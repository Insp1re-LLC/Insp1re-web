"use client";

import { JSX, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionItem {
  title: string;
  content: string | JSX.Element;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
}

export default function Accordion({
  items,
  allowMultipleOpen = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="divide-y divide-accent-cream border border-accent-cream rounded-md">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index}>
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-brand hover:bg-accent-cream"
            >
              <span>{item.title}</span>
              <span className="ml-4">
                {isOpen ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-text">
                {typeof item.content === "string" ? (
                  <p>{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
