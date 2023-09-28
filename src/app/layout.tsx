import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preguntin",
  description: "Aplicación para crear y compartir preguntas anonimas",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className="h-screen w-screen p-8 bg-gray-800">{children}</body>
    </html>
  );
}
