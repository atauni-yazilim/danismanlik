import Callout from "../../components/Callout/Callout";
import InfoPage from "../../components/InfoPage/InfoPage";
import disiplin_yonetmeligi from "../../docs/2547_DISIPLIN.pdf";

const sections = [
    {
        id: "ceza-turleri",
        title: "Disiplin Cezalarının Türleri",
        content: (
            <ul>
                <li><strong>Kınama:</strong> Öğrenciye öğrencilikle ilgili kusurlu davranışlarından dolayı kınandığının yazılı olarak bildirilmesidir.</li>
                <li><strong>Bir haftadan bir aya kadar uzaklaştırma:</strong> Bu süre içerisinde derslere ve sınavlara katılınamaz.</li>
                <li><strong>Bir yarıyıl için uzaklaştırma:</strong> Bu sürede öğrencilik haklarından yararlanılamaz.</li>
                <li><strong>İki yarıyıl için uzaklaştırma:</strong> Bu sürede öğrencilik haklarından yararlanılamaz.</li>
                <li><strong>Yükseköğretim kurumundan çıkarma:</strong> Öğrencinin, bir daha çıkarıldığı yükseköğretim kurumuna alınmamak üzere öğrencilikten çıkarılmasıdır.</li>
            </ul>
        ),
    },
    {
        id: "sinav-ve-kopya",
        title: "Sınav ve Kopya ile İlgili Eylemler",
        content: (
            <ul>
                <li>Sınavlarda <strong>kopyaya teşebbüs etmek</strong> → kınama.</li>
                <li>Ders, seminer, sınav, uygulama, laboratuvar gibi çalışmaların <strong>düzenini bozmak</strong> → kınama.</li>
                <li>Sınavlarda <strong>kopya çekmek veya çektirmek</strong> → bir yarıyıl uzaklaştırma.</li>
                <li>Seminer, tez ve yayınlarında <strong>intihal yapmak</strong> veya bunları başkalarına yazdırmak → bir yarıyıl uzaklaştırma.</li>
                <li>Sınavlarda <strong>tehditle kopya çekmek</strong>, kopya çeken öğrencilerin sınav salonundan çıkarılmasına engel olmak, <strong>kendi yerine başkasını sınava sokmak veya başkasının yerine sınava girmek</strong> → iki yarıyıl uzaklaştırma.</li>
            </ul>
        ),
    },
    {
        id: "diger-ornekler",
        title: "Sık Karşılaşılan Diğer Eylemler",
        content: (
            <ul>
                <li>Yükseköğretim kurumu yetkililerince istenen bilgileri yanıltmak amacıyla eksik veya yanlış bildirmek → kınama.</li>
                <li>Kampüste, senatonun belirlediği alanlar dışında sigara, tütün ürünleri veya elektronik sigara kullanmak → kınama.</li>
                <li>Kurumdan aldığı kendine hak sağlayan bir belgeyi başkasına kullandırmak veya başkasına ait bir belgeyi kullanmak → bir haftadan bir aya kadar uzaklaştırma.</li>
                <li>Kişilerin veya kurum personelinin şeref ve haysiyetini zedeleyen sözlü veya yazılı eylemlerde bulunmak → bir haftadan bir aya kadar uzaklaştırma.</li>
                <li>Kurumun bina, demirbaş ve benzeri malzemesini tahrip etmek veya bilişim sistemine zarar vermek → bir yarıyıl uzaklaştırma.</li>
            </ul>
        ),
    },
    {
        id: "tekerrur",
        title: "Disiplin Suçunun Tekrarı",
        content: (
            <ul>
                <li>Disiplin cezası verilmesine sebep olmuş bir eylemin, cezanın bildiriminden sonra ve zamanaşımı süresi içerisinde tekrarlanmasında <strong>bir derece ağır ceza</strong> uygulanır.</li>
                <li>Tekrar gerekçesiyle yükseköğretim kurumundan çıkarma cezası verilemez.</li>
            </ul>
        ),
    },
    {
        id: "savunma-hakki",
        title: "Savunma Hakkı",
        content: (
            <ul>
                <li>Hakkında soruşturma açılan öğrenciye isnat edilen suç, savunma tarihinden <strong>en az yedi gün önce</strong> yazılı olarak bildirilir; ayrıca öğrenci bilgi sistemi, e-posta veya kısa mesaj ile de bildirilebilir.</li>
                <li>Savunma sözlü olarak yapılabileceği gibi yazılı olarak da sunulabilir.</li>
                <li>Çağrıya özürsüz olarak uymayan veya özrünü zamanında bildirmeyen öğrenci <strong>savunma hakkından vazgeçmiş sayılır</strong> ve mevcut delillere göre karar verilir.</li>
            </ul>
        ),
    },
];

const DisiplinYonetmeligi = () => {
    return (
        <InfoPage
            category="Kanun"
            title="Disiplin ve Ceza İşleri"
            lead="2547 sayılı Yükseköğretim Kanunu'nun 54. maddesine göre öğrenci disiplin cezaları ve bu cezaları gerektiren başlıca eylemler."
            document={{
                file: disiplin_yonetmeligi,
                name: "2547 Sayılı Yükseköğretim Kanunu — Disiplin ve Ceza İşleri",
                fileName: "Yuksekogretim-Kanunu-Disiplin-ve-Ceza-Isleri",
            }}
            intro={
                <Callout title="Bu sayfa bir seçkidir">
                    <p>Aşağıda öğrencilerin en sık karşılaştığı eylemler özetlenmiştir. Tüm eylemlerin listesi ve soruşturma süreçleri için resmi metne başvurun.</p>
                </Callout>
            }
            sections={sections}
        />
    );
};

export default DisiplinYonetmeligi;
