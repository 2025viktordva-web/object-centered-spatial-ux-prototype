"use client";

import { ChevronRight, Component, Link2, MoreHorizontal, Sliders } from "lucide-react";
import {
  selections,
  type CompositionId,
  type SelectionId,
} from "../data/prototypeData";
import { DesignLab } from "./DesignLab";
import { IconButton } from "./IconButton";

type PropertiesPanelProps = {
  selectedId: SelectionId;
  composition: CompositionId;
  onCompositionChange: (composition: CompositionId) => void;
  onClose: () => void;
};

export function PropertiesPanel({
  selectedId,
  composition,
  onCompositionChange,
  onClose,
}: PropertiesPanelProps) {
  const selected = selections[selectedId];
  const SelectionIcon = selected.icon;

  return (
    <aside className="panel properties-panel" aria-label="Свойства выбранного объекта">
      <button
        type="button"
        className="panel-satellite"
        onClick={onClose}
        aria-label="Свернуть свойства"
      >
        <ChevronRight size={14} />
      </button>
      <header className="panel-head">
        <div>
          <div className="panel-kicker">Объект</div>
          <h2 className="panel-title">Свойства</h2>
        </div>
        <IconButton icon={MoreHorizontal} label="Дополнительные действия" />
      </header>
      <div className="panel-scroll">
        <div className="property-stack">
          <div className="selection-summary">
            <small>{selected.type}</small>
            <strong>{selected.label}</strong>
            <span>Выбран на полотне</span>
          </div>

          <DesignLab composition={composition} onChange={onCompositionChange} />

          <section className="property-group">
            <header><strong>Основное</strong><SelectionIcon size={13} /></header>
            <div className="property-list">
              {selected.properties.map(([label, value]) => (
                <div className="property-row" key={label}>
                  <span>{label}</span>
                  <div className="property-value">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="property-group">
            <header><strong>Связи объекта</strong><Link2 size={13} /></header>
            <div className="property-list">
              <div className="property-row">
                <span>Документ</span>
                <div className="property-value">Протокол запуска</div>
              </div>
              <div className="property-row">
                <span>Процесс</span>
                <div className="property-value">Полевой допуск</div>
              </div>
              <div className="property-row">
                <span>Контур</span>
                <div className="property-value">H12-A · активен</div>
              </div>
            </div>
          </section>

          <section className="property-group">
            <header><strong>Представление</strong><Sliders size={13} /></header>
            <div className="property-list">
              <div className="property-row">
                <span>Плотность</span>
                <div className="property-value">Рабочая</div>
              </div>
              <div className="property-row">
                <span>Глубина</span>
                <div className="property-value">Связанная</div>
              </div>
            </div>
          </section>

          <div className="panel-footnote">
            <Component size={13} />
            <span>Свойства следуют за выделением</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
