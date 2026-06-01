import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptVault — Git-like versioning for AI prompts',
  description: 'Version control system for AI prompts with rollback, branching, and performance comparison. Built for AI engineers and prompt engineers at startups.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b89d8388-97c9-43d4-aa99-c3d6216bbe71"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
