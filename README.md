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

## Yayınlama notu

Uygulama `BrowserRouter` kullanır. Sunucunun bilinmeyen tüm yolları `index.html`'e
yönlendirmesi gerekir; aksi halde örneğin `/yandal` sayfası yenilendiğinde 404 alınır.
Apache sunucular için bu yönlendirme `public/.htaccess` ile build çıktısına eklenir.
