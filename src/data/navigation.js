import {
    LuBookOpen,
    LuGraduationCap,
    LuLayers,
    LuMousePointerClick,
    LuScale,
    LuSun,
} from "react-icons/lu";

// Yan menü ve ana sayfadaki konu kartları bu listeden üretilir.
// Yeni bir sayfa eklerken burayı ve App.jsx'teki rotayı güncellemek yeterli.
export const navGroups = [
    {
        title: "Yönetmelikler",
        items: [
            {
                path: "/egitim-ogretim-yonetmeligi",
                label: "Eğitim-Öğretim ve Sınavlar",
                description: "Ders kaydı, devam, sınavlar, AGNO, başarısızlık durumu ve mezuniyet.",
                icon: LuBookOpen,
            },
            {
                path: "/yaz-okulu",
                label: "Yaz Okulu",
                description: "Yaz okulunda ders alma, AKTS sınırı, devam ve sınav kuralları.",
                icon: LuSun,
            },
            {
                path: "/disiplin-yonetmeligi",
                label: "Disiplin ve Ceza İşleri",
                description: "Disiplin cezalarının türleri, gerektiren eylemler ve savunma hakkı.",
                icon: LuScale,
            },
        ],
    },
    {
        title: "Programlar",
        items: [
            {
                path: "/cift-anadal",
                label: "Çift Anadal",
                description: "İkinci bir lisans diploması için başvuru şartları ve mezuniyet.",
                icon: LuGraduationCap,
            },
            {
                path: "/yandal",
                label: "Yandal",
                description: "Başka bir alanda sertifika için başvuru ve devam şartları.",
                icon: LuLayers,
            },
        ],
    },
    {
        title: "Kılavuzlar",
        items: [
            {
                path: "/obs-ders-alma",
                label: "ÖBS Ders Alma",
                description: "ÖBS üzerinden ders seçimi ve danışman onayı adım adım.",
                icon: LuMousePointerClick,
            },
        ],
    },
];

export const externalLinks = [
    {
        href: "https://destek.atauni.edu.tr/kb/index.php",
        label: "Sıkça Sorulan Sorular",
        description: "Atatürk Üniversitesi Destek Merkezi",
    },
];
