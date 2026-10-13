import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages yönlendirme kuralı desteklemez: /danismanlik/yandal gibi bir sayfa
// yenilendiğinde 404.html sunulur. index.html'in bir kopyasını 404.html olarak koyunca
// uygulama yine açılır ve React Router doğru sayfayı gösterir.
const githubPagesFallback = () => ({
  name: 'github-pages-404-fallback',
  apply: 'build',
  closeBundle() {
    const outDir = resolve(import.meta.dirname, 'dist')
    copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
  },
})

// https://vite.dev/config/
export default defineConfig({
  // Site https://atauni-yazilim.github.io/danismanlik/ adresinde yayınlanır.
  base: '/danismanlik/',
  plugins: [react(), githubPagesFallback()],
})
