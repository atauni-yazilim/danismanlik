import { Link } from "react-router";
import InfoPage from "../../components/InfoPage/InfoPage";
import { ciftAnadalYandalDocument } from "./documents";

const sections = [
    {
        id: "amac",
        title: "Amaç",
        content: (
            <p><strong>Yandal</strong> programının <strong>amacı</strong>, anadal lisans programlarını başarıyla yürüten öğrencilerin ilgi duydukları başka bir dalda bilgilenmelerini sağlamaktır.</p>
        ),
    },
    {
        id: "basvuru-sartlari",
        title: "Başvuru ve Devam Şartları",
        content: (
            <ul>
                <li><strong>Yandal</strong> programına, anadal lisans programının <strong>en erken üçüncü yarıyılının başında, en geç ise altıncı yarıyılının başında</strong> başvurulabilir.</li>
                <li>Öğrencinin yandal programına başvurabilmesi için başvurduğu yarıyıla kadar aldığı lisans programındaki tüm kredili dersleri başarıyla tamamlaması ve AGNO’sunun en az <strong>2.50</strong> olması gerekir.</li>
                <li>Öğrencinin yandal programına devam edebilmesi için anadal programındaki AGNO’sunun en az 2.40 olması şarttır. Bu şartı sağlayamayan öğrencinin yandal programından kaydı silinir.</li>
            </ul>
        ),
    },
    {
        id: "mezuniyet",
        title: "Mezuniyet",
        content: (
            <ul>
                <li>Öğrencinin yandal programındaki başarı durumu, anadal programındaki mezuniyetini etkilemez. Yandal programı için ayrı kayıt dosyası ve ayrı not döküm belgesi düzenlenir.</li>
                <li>Anadal programından mezuniyet hakkını elde eden ve yandal programını en az 2.00 ortalamayla tamamlayan öğrenciye yandal sertifikası verilir. Bu belge diploma yerine geçmez.</li>
                <li>Anadal programından mezuniyet hakkını elde eden ancak yandal programını bitiremeyen öğrencilere ilgili yönetim kurullarının kararı ile en fazla iki yarıyıl ek süre tanınır.</li>
            </ul>
        ),
    },
    {
        id: "cift-anadal-ile-farki",
        title: "Çift Anadal ile Farkı",
        content: (
            <p>Yandal sonunda <strong>sertifika</strong> verilir; ikinci bir <strong>lisans diploması</strong> istiyorsanız <Link to="/cift-anadal">Çift Anadal</Link> programına bakabilirsiniz.</p>
        ),
    },
];

const Yandal = () => {
    return (
        <InfoPage
            category="Program"
            title="Yandal Programı"
            lead="İlgi duyduğunuz başka bir alanda sertifika almak için başvuru, devam ve mezuniyet şartları."
            document={ciftAnadalYandalDocument}
            facts={[
                { value: "2.50", label: "Başvuru için en düşük AGNO" },
                { value: "2.40", label: "Devam için anadal AGNO alt sınırı" },
                { value: "3.–6.", label: "Başvurulabilecek yarıyıllar" },
            ]}
            sections={sections}
        />
    );
};

export default Yandal;
