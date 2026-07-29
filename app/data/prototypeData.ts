import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BookOpenText,
  Boxes,
  CircleGauge,
  FileText,
  FolderKanban,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export type SelectionId = "overview" | "sequence" | "verification";
export type CompositionId = "focus" | "balance" | "context" | "instrument";

export type Selection = {
  id: SelectionId;
  label: string;
  type: string;
  icon: LucideIcon;
  properties: Array<[string, string]>;
  toolLabel: string;
  toolHint: string;
};

export const selections: Record<SelectionId, Selection> = {
  overview: {
    id: "overview",
    label: "Контур запуска",
    type: "Раздел документа",
    icon: CircleGauge,
    properties: [
      ["Роль", "Вводный контур"],
      ["Статус", "Согласован"],
      ["Владелец", "Л. Воронова"],
      ["Видимость", "Команда H-12"],
    ],
    toolLabel: "Редактор контура",
    toolHint: "Структура, акценты и связи",
  },
  sequence: {
    id: "sequence",
    label: "Порядок развёртывания",
    type: "Операционная схема",
    icon: Boxes,
    properties: [
      ["Роль", "Последовательность"],
      ["Этапов", "3"],
      ["Окно", "12–14 августа"],
      ["Контроль", "Передача между фазами"],
    ],
    toolLabel: "Монтаж последовательности",
    toolHint: "Фазы, зависимости и ритм",
  },
  verification: {
    id: "verification",
    label: "Контроль готовности",
    type: "Проверочный блок",
    icon: ShieldCheck,
    properties: [
      ["Роль", "Критерии выпуска"],
      ["Порог", "92%"],
      ["Проверок", "18"],
      ["Ответственный", "Группа допуска"],
    ],
    toolLabel: "Настройка проверки",
    toolHint: "Порог, метрики и допуск",
  },
};

export const compositions: Array<{
  id: CompositionId;
  label: string;
  note: string;
  bars: [number, number, number];
}> = [
  {
    id: "focus",
    label: "Полевой фокус",
    note: "Холст ведёт",
    bars: [45, 100, 45],
  },
  {
    id: "balance",
    label: "Рабочий баланс",
    note: "Роли равновесны",
    bars: [72, 86, 72],
  },
  {
    id: "context",
    label: "Объектная оптика",
    note: "Контекст ближе",
    bars: [54, 70, 100],
  },
  {
    id: "instrument",
    label: "Процессный захват",
    note: "Инструмент ведёт",
    bars: [50, 66, 62],
  },
];

export const navigationGroups = [
  {
    label: "Проект",
    items: [
      { icon: FolderKanban, label: "Экспедиция H-12", meta: "8" },
      { icon: Layers3, label: "Контуры системы", meta: "4" },
      { icon: Activity, label: "Сеансы запуска", meta: "12" },
    ],
  },
  {
    label: "Документы",
    items: [
      { icon: FileText, label: "Протокол полевого запуска", meta: "v7", current: true },
      { icon: BookOpenText, label: "Матрица допуска", meta: "v3" },
      { icon: FileText, label: "Схема наземного контура", meta: "v5" },
    ],
  },
];
