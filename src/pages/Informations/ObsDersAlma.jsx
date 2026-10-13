import Callout from "../../components/Callout/Callout";
import InfoPage from "../../components/InfoPage/InfoPage";
import obs_ders_alma_kilavuzu from "../../docs/obs_ders_alma_kilavuzu.pdf";
import "./ObsDersAlma.css";

const steps = [
    <>Kullanıcı adı ve parolanızla <strong>ÖBS</strong>’ye giriş yapın.</>,
    <>Sol menüden <strong>“Öğrenim → Ders Alma”</strong> ekranını açın.</>,
    <>Almak istediğiniz dersin adının solundaki kutucuğa tıklayarak <strong>tik işareti</strong> koyun. Ayrıca KAYDET veya başka bir butona basmanız gerekmez.</>,
    <>Seçtiğiniz dersler, ders kayıt takviminde belirtilen tarihlerde <strong>danışmanınız tarafından onaylanır</strong> ve ders alma listenize düşer.</>,
    <><strong>“Öğrenim → Ders Alma Listesi”</strong> ekranından listenizin çıktısını alabilirsiniz.</>,
];

const sections = [
    {
        id: "adimlar",
        title: "Adım Adım Ders Seçimi",
        content: (
            <ol className="steps">
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        ),
    },
    {
        id: "ekranda-neler-var",
        title: "Ders Alma Ekranında Neler Var?",
        content: (
            <ul>
                <li><strong>Üst kısımda:</strong> akademik dönem, okuduğunuz dönem, öğrenci numaranız, son iki AGNO’nuz ve danışmanınızın adı.</li>
                <li><strong>Alt kısımda:</strong> dönemde alabileceğiniz maksimum kredi yükü, ders alma genel kuralları ve ders alma günlük kayıtları.</li>
                <li>Ders alma ve bırakma işlemlerinizin gün ve saat bilgisini, alt kısımdaki <strong>“Ders alma günlük kayıtlarınızı görmek için tıklayınız”</strong> bağlantısından görebilirsiniz.</li>
            </ul>
        ),
    },
];

const ObsDersAlma = () => {
    return (
        <InfoPage
            category="Kılavuz"
            title="ÖBS Ders Alma Kılavuzu"
            lead="Öğrenci Bilgi Sistemi üzerinden ders seçimi ve danışman onayı süreci."
            document={{
                file: obs_ders_alma_kilavuzu,
                name: "ÖBS Ders Alma Kılavuzu (ekran görüntüleriyle)",
                fileName: "OBS-Ders-Alma-Kilavuzu",
            }}
            intro={
                <Callout tone="warning" title="Unutmayın">
                    <p>Ders kayıt işlemlerinden birinci derecede öğrenci sorumludur. Seçtiğiniz dersler danışman onayından sonra kesinleşir.</p>
                </Callout>
            }
            sections={sections}
        />
    );
};

export default ObsDersAlma;
