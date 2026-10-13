import InfoPage from "../../components/InfoPage/InfoPage";
import yaz_okulu from "../../docs/Yaz_okulu.pdf";

const sections = [
    {
        id: "amac",
        title: "Amaç",
        content: (
            <p>Yaz okulu; düşük AGNO’lu öğrencilere <strong>AGNO’larını yükseltme</strong>, herhangi bir dersten başarısız olan öğrencilere yaz döneminde <strong>bu dersleri başarabilme</strong>, başarılı öğrencilere ise <strong>daha kısa sürede mezun olabilme</strong> olanağı sağlar. Yandal ve çift anadal programlarına kayıtlı öğrencilerin programı izlemelerini de kolaylaştırır. Aynı öğretim yılına ait üçüncü bir yarıyıl değildir.</p>
        ),
    },
    {
        id: "ders-kaydi",
        title: "Ders Kaydı",
        content: (
            <ul>
                <li>Öğrenciler; alt yarıyıllara ait hiç almadıkları, alıp da sınavına girme hakkı elde edemedikleri, alıp da başarısız oldukları veya AGNO’larını yükseltmek istedikleri dersleri yaz okulunda alabilirler.</li>
                <li>Yaz okulunda toplam <strong>en fazla 20 AKTS</strong>’lik ders alınabilir. Bir dersin AKTS’si 20’nin üzerindeyse yalnızca bu ders alınabilir. Yaz okulu sonunda mezuniyete bir dersi kalabilecek öğrencilere 20 AKTS’ye ilaveten bir ders daha verilebilir.</li>
                <li>Dersler başladıktan <strong>bir hafta sonra</strong> ders ekleme, değiştirme ve bırakma işlemi yapılamaz.</li>
                <li>Bir dersin açılabilmesi için o derse kayıtlı öğrenci sayısı <strong>en az 25</strong>’tir. Zorunlu hallerde bu sayı birim yönetim kurulunca değiştirilebilir.</li>
                <li>Programdaki dersler güz veya bahar yarıyılında bir kez açılmak zorundadır; bu derslerin yaz okuluna ertelenmesi mümkün değildir.</li>
            </ul>
        ),
    },
    {
        id: "devam-ve-sinavlar",
        title: "Devam ve Sınavlar",
        content: (
            <ul>
                <li>Yaz okulunda <strong>derslere devam zorunludur</strong>. Dersin devam koşulunun daha önce yerine getirilmiş olması bu zorunluluğu ortadan kaldırmaz.</li>
                <li>Yaz okulunda alınan derslerde elde edilen devam hakkı, güz ve/veya bahar dönemleri için de geçerlidir.</li>
                <li>Ara sınav ve yarıyıl sonu sınavı yapılır; <strong>bütünleme sınavı yapılmaz</strong>.</li>
                <li>Mazereti ilgili yönetim kurulunca kabul edilen öğrenciler sınav haklarını kurulun belirlediği tarihlerde kullanır.</li>
            </ul>
        ),
    },
    {
        id: "agno",
        title: "AGNO’ya Etkisi",
        content: (
            <ul>
                <li>Yaz okulunda alınan derslerin notları, takip eden güz yarıyılı başında hesaplanan genel not ortalamasında dikkate alınır.</li>
                <li>Yaz okulu sonunda AGNO’su <strong>iki dönem üst üste 2.00’ın altına</strong> düşen öğrenciler, başarısızlığı devam ettiği sürece güz ve bahar yarıyıllarında yeni ders alamaz; yalnızca yaz okulunda aldıkları derslere kayıt yaptırabilirler.</li>
                <li>Yaz okulu sonucunda hesaplanan not ortalamaları, daha önce ilan edilen başarı sıralamalarını (mezuniyet, onur/yüksek onur, ilk yüzde on) değiştirmez.</li>
            </ul>
        ),
    },
    {
        id: "diger",
        title: "Diğer Hükümler",
        content: (
            <ul>
                <li>Yaz okulunda geçen süre öğretim süresinden sayılmaz.</li>
                <li>Yandal veya çift anadal programına ait dersler yaz okulunda tamamlanabilir.</li>
                <li>Kayıt donduran öğrenciler ile yabancı dil hazırlık sınıfına devam eden öğrenciler yaz okulundan ders alamaz.</li>
                <li>Birim yönetim kurulunun uygun görmesi halinde diğer üniversitelerin yaz okullarından ders alınabilir.</li>
            </ul>
        ),
    },
];

const YazOkulu = () => {
    return (
        <InfoPage
            category="Yönetmelik"
            title="Yaz Okulu Yönetmeliği"
            lead="Yaz okulunda ders alma, AKTS sınırı, devam zorunluluğu ve notların AGNO’ya etkisi."
            document={{
                file: yaz_okulu,
                name: "Atatürk Üniversitesi Yaz Okulu Yönetmeliği",
                fileName: "Ataturk-Universitesi-Yaz-Okulu-Yonetmeligi",
            }}
            facts={[
                { value: "7 hafta", label: "Yaz okulunun süresi" },
                { value: "20 AKTS", label: "Alınabilecek en fazla ders yükü" },
                { value: "En az 25", label: "Dersin açılması için öğrenci sayısı" },
                { value: "Yok", label: "Bütünleme sınavı" },
            ]}
            sections={sections}
        />
    );
};

export default YazOkulu;
