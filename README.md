# Porto Personal - Vue + Tailwind CSS

Project ini adalah website portfolio personal berbasis **Vue 3 + Vite + Tailwind CSS**.

## Menjalankan project

### 1. Install dependency
```bash
npm install
```

### 2. Jalankan mode development
```bash
npm run dev
```

Setelah itu buka link local yang muncul di terminal, biasanya:
```bash
http://localhost:5173
```

## Build production
```bash
npm run build
```

## Preview hasil build
```bash
npm run preview
```

## File yang paling penting untuk diedit
- `src/data/portfolio.ts` → isi nama, email, nomor HP, link CV, GitHub, LinkedIn, project, pengalaman, dan skill.
- `src/App.vue` → struktur halaman utama.
- `src/components/` → komponen-komponen kecil seperti heading, card pengalaman, card project, dan badge skill.
- `src/assets/main.css` → import Tailwind dan styling global.
- `vite.config.ts` → konfigurasi Vite + plugin Tailwind.

## Catatan
Beberapa data masih berupa placeholder seperti:
- `Nama Kamu`
- `emailkamu@example.com`
- `+62 8xx-xxxx-xxxx`
- link CV / LinkedIn / GitHub

Silakan ganti di file `src/data/portfolio.ts`.
