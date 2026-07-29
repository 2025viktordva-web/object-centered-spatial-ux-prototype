"use client";

import { SlidersHorizontal } from "lucide-react";
import { compositions, type CompositionId } from "../data/prototypeData";

type DesignLabProps = {
  composition: CompositionId;
  onChange: (composition: CompositionId) => void;
};

export function DesignLab({ composition, onChange }: DesignLabProps) {
  return (
    <section className="lab" aria-label="Design Lab">
      <header className="lab-head">
        <div>
          <SlidersHorizontal size={13} />
          <strong>Design Lab</strong>
        </div>
        <span>Вес пространства</span>
      </header>
      <div className="lab-grid">
        {compositions.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`lab-option${composition === item.id ? " is-active" : ""}`}
            aria-pressed={composition === item.id}
            onClick={() => onChange(item.id)}
          >
            <span className="mode-glyph" aria-hidden="true">
              {item.bars.map((height, index) => (
                <i key={index} style={{ "--h": `${height}%` } as React.CSSProperties} />
              ))}
            </span>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
