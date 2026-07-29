"use client";

import { ChevronLeft, Cloud, MoreHorizontal, Plus } from "lucide-react";
import { navigationGroups } from "../data/prototypeData";
import { IconButton } from "./IconButton";

type StructuralPanelProps = {
  onClose: () => void;
};

export function StructuralPanel({ onClose }: StructuralPanelProps) {
  return (
    <aside className="panel structural-panel" aria-label="Структура проекта">
      <button
        type="button"
        className="panel-satellite"
        onClick={onClose}
        aria-label="Свернуть структуру"
      >
        <ChevronLeft size={14} />
      </button>
      <header className="panel-head">
        <div>
          <div className="panel-kicker">Структура</div>
          <h2 className="panel-title">Рабочий контур</h2>
        </div>
        <IconButton icon={Plus} label="Добавить элемент" />
      </header>
      <div className="panel-scroll">
        <div className="project-switch">
          <div className="project-glyph">H12</div>
          <div>
            <strong>Полевой запуск</strong>
            <span>Активная система · 8 объектов</span>
          </div>
        </div>

        {navigationGroups.map((group) => (
          <section className="nav-section" key={group.label}>
            <span className="nav-label">{group.label}</span>
            {group.items.map(({ icon: Icon, label, meta, current }) => (
              <button
                type="button"
                className={`tree-item${current ? " is-current" : ""}`}
                key={label}
              >
                <Icon size={14} strokeWidth={1.8} />
                <span>{label}</span>
                <small>{meta}</small>
              </button>
            ))}
          </section>
        ))}

        <section className="nav-section">
          <span className="nav-label">Разделы документа</span>
          <button type="button" className="tree-item is-indent">
            <span>Контур запуска</span>
            <small>01</small>
          </button>
          <button type="button" className="tree-item is-indent">
            <span>Порядок развёртывания</span>
            <small>02</small>
          </button>
          <button type="button" className="tree-item is-indent">
            <span>Контроль готовности</span>
            <small>03</small>
          </button>
        </section>

        <div className="panel-footnote">
          <Cloud size={13} />
          <span>Синхронизировано 2 мин назад</span>
          <MoreHorizontal size={13} style={{ marginLeft: "auto" }} />
        </div>
      </div>
    </aside>
  );
}
