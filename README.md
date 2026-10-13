# Atatürk Üniversitesi Yazılım Mühendisliği — Öğrenci Rehberi

Yazılım Mühendisliği öğrencileri için yönetmelik özetleri ve resmi PDF metinleri.

## Geliştirme

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # dist/ klasörüne üretim çıktısı
npm run lint
```

## Yapı

- `src/data/navigation.js` — yan menü ve ana sayfadaki konu kartları buradan üretilir.
- `src/pages/Informations/` — her konu için bir sayfa. Sayfalar `InfoPage` bileşenine
  başlık, PDF bilgisi, öne çıkan sayılar (`facts`) ve bölümler (`sections`) verir.
- `src/docs/` — resmi PDF metinleri.
- `src/assets/css/theme.css` — açık/koyu tema renkleri. Tema, `index.html` içindeki küçük
  betikle ilk boyamadan önce `<html data-theme>` üzerine yazılır.

### Yeni sayfa eklemek

1. `src/pages/Informations/` altına `InfoPage` kullanan bir bileşen ekleyin.
2. `src/App.jsx` içine rotasını ekleyin.
3. `src/data/navigation.js` içine menü kaydını ekleyin.

## Yayınlama

Site <https://atauni-yazilim.github.io/danismanlik/> adresinde GitHub Pages ile yayınlanır.

- `main` dalına her push'ta `.github/workflows/deploy.yml` siteyi derleyip yayınlar.
  Repo ayarlarında **Settings → Pages → Source: GitHub Actions** seçili olmalıdır.
- Site alt dizinde olduğu için `vite.config.js` içinde `base: '/danismanlik/'` tanımlıdır;
  geliştirme sunucusu da <http://localhost:5173/danismanlik/> adresinde açılır.
- GitHub Pages yönlendirme kuralı desteklemez. Build sırasında `index.html` aynı zamanda
  `404.html` olarak kopyalanır; böylece `/danismanlik/yandal` gibi bir sayfa yenilendiğinde
  de uygulama açılır.
