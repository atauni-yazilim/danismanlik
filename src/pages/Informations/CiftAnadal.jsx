import { Link } from "react-router";
import InfoPage from "../../components/InfoPage/InfoPage";
import { ciftAnadalYandalDocument } from "./documents";

const sections = [
    {
        id: "amac",
        title: "Amaç",
        content: (
            <p><strong>Çift anadal</strong> programının <strong>amacı</strong>, anadal lisans programlarını üstün başarıyla yürüten öğrencilerin, aynı zamanda <strong>ikinci bir dalda lisans diploması</strong> almak üzere öğrenim görmelerini sağlamaktır.</p>
        ),
    },
    {
        id: "basvuru-sartlari",
        title: "Başvuru Şartları",
        content: (
            <>
                <ul>
                    <li><strong>Çift anadal</strong> programına, anadal diploma programının <strong>en erken üçüncü yarıyılının başında, en geç ise beşinci yarıyılının başında</strong>, beş yıllık programlarda yedinci yarıyılın başında, altı yıllık programlarda ise dokuzuncu yarıyılın başında <strong>başvurulabilir</strong>.</li>
                    <li>Çift anadal programına başvurduğu yarıyıla kadar anadal diploma programında <strong>aldığı tüm dersleri</strong> başarıyla tamamlamış olması</li>
                    <li>AGNO’sunun en az <strong>2.80</strong> olması</li>
                    <li>Anadal diploma programının ilgili sınıfında başarı sıralaması itibari ile en üst yüzde yirmisinde bulunması gerekir.</li>
                </ul>
                <hr />
                <ul>
                    <li>Anadal diploma programındaki AGNO’su 2.80 ve üzerinde olan ancak anadal diploma programının ilgili sınıfında başarı sıralaması itibari ile en üst %20’sinde yer almayan öğrencilerden çift anadal yapılacak programın ilgili yıldaki taban puanından az olmamak üzere puana sahip olanlar da çift anadal programına başvurabilirler.</li>
                </ul>
            </>
        ),
    },
    {
        id: "mezuniyet",
        title: "Mezuniyet",
        content: (
            <ul>
                <li>Çift anadal programı nedeniyle, öğrencinin anadal programındaki başarısı ve mezuniyeti hiç bir biçimde etkilenmez. Çift anadal programı için ayrı kayıt dosyası ve ayrı not döküm belgesi düzenlenir.</li>
                <li>Öğrencinin çift anadal programından mezun olabilmesi için anadal programındaki AGNO’sunun en az 2.80 olması gerekir. Tüm çift anadal öğrenimi süresince öğrencinin anadal programındaki AGNO’su bir defaya mahsus olmak üzere 2.50’ye kadar düşebilir. Anadal programındaki AGNO’su ikinci kez 2.50’nin altına düşen öğrencinin ikinci anadal diploma programından kaydı silinir.</li>
                <li>Çift anadal programından mezuniyet durumuna gelen ancak FF notu almadıkları halde AGNO'ları 2.80'den düşük olan öğrencilere AGNO’larını 2.80 veya üzerine çıkarmaları için son dört yarıyıla ait derslerden en çok dört ders için sınav hakkı verilir. Bu sınavlara girmeyenler için mazeret sınavı açılmaz.</li>
                <li>İkinci anadal lisans programına devam eden öğrenciye mezuniyet diploması ancak devam ettiği birinci anadal diploma programından mezun olması halinde verilebilir.</li>
            </ul>
        ),
    },
    {
        id: "yandal-ile-farki",
        title: "Yandal ile Farkı",
        content: (
            <p>Çift anadal sonunda ikinci bir <strong>lisans diploması</strong> alınır. Yandal ise diploma yerine geçmeyen bir <strong>sertifika</strong> ile sonuçlanır ve başvuru şartları daha esnektir. Ayrıntılar için <Link to="/yandal">Yandal</Link> sayfasına bakabilirsiniz.</p>
        ),
    },
];

const CiftAnadal = () => {
    return (
        <InfoPage
            category="Program"
            title="Çift Anadal Programı"
            lead="Kendi bölümünüzle birlikte ikinci bir lisans diploması almak için başvuru ve mezuniyet şartları."
            document={ciftAnadalYandalDocument}
            facts={[
                { value: "2.80", label: "Başvuru için en düşük AGNO" },
                { value: "İlk %20", label: "Sınıfındaki başarı sıralaması" },
                { value: "3.–5.", label: "Başvurulabilecek yarıyıllar (4 yıllık programlar)" },
            ]}
            sections={sections}
        />
    );
};

export default CiftAnadal;
