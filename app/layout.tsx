import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://2025viktordva-web.github.io/object-centered-spatial-ux-prototype/",
  ),
  title: "Harness — объектно-центрированное рабочее пространство",
  description:
    "Интерактивный UX-прототип пространственной системы для работы с документами и объектами.",
  openGraph: {
    title: "Harness Workspace",
    description: "Четыре композиции глубины для одного связанного рабочего мира.",
    images: [{ url: "/object-centered-spatial-ux-prototype/og.png", width: 1678, height: 941 }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harness Workspace",
    description: "Объектно-центрированный пространственный UX-прототип.",
    images: ["/object-centered-spatial-ux-prototype/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
