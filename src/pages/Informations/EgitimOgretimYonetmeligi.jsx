import { Link } from "react-router";
import Callout from "../../components/Callout/Callout";
import InfoPage from "../../components/InfoPage/InfoPage";
import egitim_ogretim_yonetmeligi from "../../docs/Egitim_Ogretim_Sinav_Yonetmeligi.pdf";

const sections = [
    {
        id: "ders-tekrari",
        title: "Ders Tekrarı",
        content: (
            <p>Tamamı veya bir kısmı uygulamaya dayalı olarak yürütülen ve/veya laboratuvar ortamında yapılan dersler hariç olmak üzere; daha önceki yarıyıl/yıllarda devamını aldığı halde başarısız olduğu veya harf notunu yükseltmek istediği derse/derslere tekrar kayıt yaptıran öğrencinin bu derse/derslere devam etme zorunluluğu yoktur. Ancak bu öğrenciler söz konusu ders/dersler için o yarıyılda/yılda ders kaydı yaptırmak ve bu ders/dersler için yapılan tüm sınavlara girmek zorundadırlar. Yaz okulunda alınan dersler için devam zorunluluğu vardır.</p>
        ),
    },
    {
        id: "dersler-ve-sureleri",
        title: "Dersler ve Süreleri",
        content: (
            <ul>
                <li>Bir ders saatinin süresi 50 dakikadır.</li>
            </ul>
        ),
    },
    {
        id: "ders-alma-ve-birakma",
        title: "Ders Alma ve Bırakma",
        content: (
            <ul>
                <li>Bir öğrencinin bir yarıyıl/yılda alabileceği derslerin AKTS değerleri toplamı en fazla 40/80’dir. Belirlenen AKTS değeri, tekrar dersi olan veya AGNO’su 2.50’nin altında olan öğrencilere üst yarıyıllardan ders alma hakkı vermez. <strong>AGNO’su 2.50 ve üzerinde olan ve tekrar dersi olmayan</strong> bir öğrencinin alabileceği derslerin AKTS değerleri toplamı yarıyıllık/yıllık programlarda en fazla <strong>45/90</strong>’dır.</li>
                <li>Yarıyıllık programlarda son sınıfın her bir yarıyılı, yıllık programlarda ise son sınıf için mezuniyetine tek dersi kalan öğrencilere, istemeleri halinde AKTS miktarına ilaveten bir ders verilir.</li>
                <li>AGNO’sunu yükseltmek isteyen öğrenciler, daha önce almış olduğu derslerden FF notu almış olduğu ders/dersler dışında da azami AKTS sınırını aşmamak kaydıyla, istediği kadar ders alabilir. AGNO hesabında tekrarlanan dersler için öğrencinin aldığı en son not geçerlidir.</li>
                <li>Öğrenciler, kayıt yenileme bitiş tarihini takip eden ilk iki hafta içerisinde almış oldukları dersi/dersleri danışman nezaretinde bırakabilir. Bırakılan dersin/derslerin yerine, geçen sürenin devamsızlıktan sayılması şartıyla yeni ders/dersler alınabilir.</li>
                <li><strong>İlk iki hafta içinde bırakılmayan seçmeli dersler zorunlu ders gibi işlem görür</strong>. Ancak, öğrencinin başarısız olduğu seçmeli dersin ilgili yarıyılda/yılda yeniden açılmaması halinde başka bir ders seçilir.</li>
            </ul>
        ),
    },
    {
        id: "yabanci-dil-muafiyeti",
        title: "Yabancı Dil Muafiyeti",
        content: (
            <p>(YDS) 50 veya YÖK tarafından kabul edilen diğer yabancı dil sınavlarından eş değer puan alan öğrenciler, ortak zorunlu ders statüsündeki yabancı dil ve/veya mesleki yabancı dil statüsündeki ders/dersler için başarılı olduğu sınavı takip eden dönemin ders kayıt süresi içinde müracaat etmesi halinde ilgili birim yönetim kurulu kararı ile ilgili dersten/derslerden muaf olabilirler.</p>
        ),
    },
    {
        id: "devam-zorunlulugu",
        title: "Devam Zorunluluğu",
        content: (
            <ul>
                <li>Teorik dersler, laboratuvar ve benzeri çalışmaların en az %80’ine devam etmek zorunludur.</li>
                <li>FF harf notuyla başarısız olunan derslerin teorik saatlerine tekrar devam zorunluluğu bulunmamaktadır. Fakat daha önce devam edilmiş olsa bile eğer varsa bu derslerin laboratuvar, uygulama ve benzeri çalışmalarının %80'ine devam etmek zorunludur.</li>
            </ul>
        ),
    },
    {
        id: "sinavlar",
        title: "Sınavlar",
        content: (
            <ul>
                <li>Yarıyıl/yıl sonu/bütünleme sınav süreleri en az iki ders saati (100 dakika), ara sınav süresi ise en az bir ders saatidir. Kısa süreli sınavlar ile çoktan seçmeli, boşluk doldurmalı gibi yapılan sınavlarda, sınav süresi ilgili öğretim elemanı tarafından belirlenir. Ancak, bu şekilde yapılan sınavların süreleri, kısa süreli sınavlar hariç, bir ders saatinden az olamaz.</li>
                <li><strong>Kısa süreli sınav:</strong> Yarıyıl/yıl içinde haberli veya habersiz olarak ders saatinde yapılan kısa süreli sınav/sınavlardır.</li>
                <li>Her ders için yarıyıl/yılda en az bir ara sınav yapılır. Ayrıca, bir ders içindeki projeler, ödevler, kısa süreli sınavlar, laboratuvar ve benzeri çalışmaların yarıyıl/yıl içi değerlendirmeleri ara sınav notu yerine geçebilir.</li>
                <li>Bütünleme sınavlarına, yarıyıl/yıl sonu sınavlarına girmeyen, bu sınavlara girdiği halde <strong>FF, DD veya DC</strong> harf notu alan öğrenciler girebilir.</li>
                <li><strong>Mezuniyet AGNO baraj sınavı:</strong> İzlediği programın normal süresi sonunda mezuniyet durumuna gelmiş, ancak AGNO’su 2,00’dan düşük olduğu için mezun olamayan öğrencilere AGNO’larını 2,00 veya üzerine çıkarmaları için diledikleri derslerden sınırsız sınav hakkı tanınarak yapılan sınavlardır.</li>
            </ul>
        ),
    },
    {
        id: "sinavlarda-kopya",
        title: "Sınavlarda Kopya",
        content: (
            <>
                <p>Sınav esnasında veya sınav evrakının incelenmesi sırasında kopya yaptığı, kopya yaptırdığı veya kopya yapılmasına yardım ettiği tespit edilen öğrenci <strong>o dersten başarısız sayılır.</strong> Ayrıca, söz konusu öğrenci hakkında, ilgili dekanlıkça/müdürlükçe 18/8/2012 tarihli ve 28388 sayılı <a href="https://www.resmigazete.gov.tr/eskiler/2012/08/20120818-12.htm" target="_blank" rel="noopener noreferrer">Resmî Gazete</a>’de yayımlanan Yükseköğretim Kurumları Öğrenci Disiplin Yönetmeliği hükümlerine göre işlem yapılır.</p>
                <p>Kopyanın hangi disiplin cezasını gerektirdiği için <Link to="/disiplin-yonetmeligi#sinav-ve-kopya">Disiplin ve Ceza İşleri</Link> sayfasına bakabilirsiniz.</p>
            </>
        ),
    },
    {
        id: "yaz-okulu",
        title: "Yaz Okulu",
        content: (
            <>
                <p>Yaz okulu sonunda hesaplanan AGNO, öğrencinin yaz okuluna başlamadan önceki AGNO’su yerine geçer.</p>
                <p>Ayrıntılar için <Link to="/yaz-okulu">Yaz Okulu</Link> sayfasına bakabilirsiniz.</p>
            </>
        ),
    },
    {
        id: "basarisizlik-durumu",
        title: "Başarısızlık Durumu",
        content: (
            <ul>
                <li>En son hesaplanan AGNO’su ile bir önceki AGNO’su başarı baraj notunun (2.00) altında olan öğrenci başarısız duruma düşer. Başarısız öğrenciler takip eden yarıyıllardan/yıllardan yeni ders alamaz. Bu öğrenciler öncelikle FF notu aldıkları dersleri almak zorundadır. Ancak öğrenciler istemeleri halinde FF alarak kaldıkları bu dersler dışındaki dersleri de, AGNO’su başarı baraj notuna eşitleninceye veya daha yukarı oluncaya kadar, tekrar alabilir. Ders tekrarı ile AGNO’larını başarı baraj notuna eşitleyen veya bu notun üstüne çıkaran öğrenciler, Üniversiteye kayıt yaptırdığı tarih itibariyle bulunması gerektiği yarıyılda/yılda, öncelikli olarak alt yarıyıllardan/yıllardan dersler alarak, öğrenimlerine devam ederler.</li>
                <li>Başarısız duruma düşen öğrenciler, değişim programları ile burslara aday gösterilemezler.</li>
            </ul>
        ),
    },
    {
        id: "ek-sureler",
        title: "Eğitim-Öğretim Süresi ve Ek Süreler",
        content: (
            <ul>
                <li>Azami süreler sonunda kayıtlı olduğu programdan mezun olabilmek için son sınıf öğrencilerine başarısız oldukları bütün dersler için iki ek sınav hakkı verilir. Bu sınavlar sonunda, başarısız ders sayısını beş derse indirenlere bu beş ders için üç yarıyıl/iki yıl, ek sınavları almadan beş derse kadar başarısız olan öğrencilere dört yarıyıl/iki yıl; bir dersten başarısız olanlara ise öğrencilik hakkından yararlanmaksızın sınırsız, başarısız oldukları dersin sınavlarına girme hakkı tanınır.</li>
                <li>Azami süreler sonunda, izledikleri programdan mezun olmak için gerekli bütün derslerden geçer not aldıkları hâlde AGNO’ları 2.00’dan düşük olduğu için ilişikleri kesilme durumuna gelen son dönem/sınıf öğrencilerine not ortalamalarını yükseltmek üzere diledikleri derslerden sınırsız sınav hakkı tanınır.</li>
                <li>İkinci ve üçüncü fıkralarda yer alan durumlarda, uygulamalı, uygulaması olan ve daha önce alınmamış dersler dışındaki derslere devam şartı aranmaz. Açılacak sınavlara, üst üste veya aralıklı olarak, toplam üç eğitim-öğretim yılı hiç girmeyen öğrenci, sınırsız sınav hakkından vazgeçmiş sayılır ve bu haktan yararlanamaz.</li>
                <li>Sınırsız hak kullanma durumunda olan öğrenciler, sınava girdiği ders başına öğrenci katkı payını/öğrenim ücretini ödemeye devam ederler. Ancak, bu öğrenciler, sınav hakkı dışındaki diğer öğrencilik haklarından yararlanamazlar.</li>
            </ul>
        ),
    },
    {
        id: "mazeret-durumlari",
        title: "Mazeret Durumları",
        content: (
            <ul>
                <li>Sağlık raporu süresi ve diğer mazeretli olarak geçen süreler devamsızlıktan sayılır.</li>
                <li>Öğrenciler, mazeretli kabul edildikleri süre içinde sınavlara giremez, girenlerin sınavı geçersiz sayılır.</li>
            </ul>
        ),
    },
    {
        id: "mezuniyet",
        title: "Mezuniyet",
        content: (
            <ul>
                <li>Mezuniyet durumuna geldiği halde AGNO’sunu yükseltmek isteyen öğrenciler, diğer öğrencilerin tabi oldukları mevzuat hükümlerine göre öğrenimlerine devam edebilirler.</li>
            </ul>
        ),
    },
];

const EgitimOgretimYonetmeligi = () => {
    return (
        <InfoPage
            category="Yönetmelik"
            title="Ön Lisans ve Lisans Eğitim-Öğretim ve Sınav Yönetmeliği"
            lead="Ders kaydından mezuniyete kadar öğrencilik hayatınızı en çok etkileyen kuralların özeti."
            document={{
                file: egitim_ogretim_yonetmeligi,
                name: "Atatürk Üniversitesi Ön Lisans ve Lisans Eğitim-Öğretim ve Sınav Yönetmeliği",
                fileName: "Ataturk-Universitesi-On-Lisans-ve-Lisans-Egitim-Ogretim-ve-Sinav-Yonetmeligi",
            }}
            facts={[
                { value: "2.00", label: "Başarı baraj notu (AGNO)" },
                { value: "2.50", label: "Üst yarıyıldan ders almak için AGNO (tekrar dersi olmamalı)" },
                { value: "%80", label: "Derslere devam zorunluluğu" },
                { value: "40 / 45", label: "Yarıyıllık en fazla AKTS (AGNO ≥ 2.50 ise 45)" },
                { value: "50 dk", label: "Bir ders saatinin süresi" },
            ]}
            intro={
                <Callout tone="warning" title="Ders kaydından önce mutlaka okuyun">
                    <ul>
                        <li>Ders kayıt işlemlerinden birinci derecede öğrenci sorumludur.</li>
                        <li><strong>Öğrenciler, öncelikle alt yarıyıl/yıldaki hiç almadıkları veya alıp devamsızlıktan (Z) harf notu ya da başarısızlıktan (FF) harf notu almış oldukları ders/derslere kayıt yaptırmak zorundadırlar.</strong></li>
                    </ul>
                </Callout>
            }
            sections={sections}
        />
    );
};

export default EgitimOgretimYonetmeligi;
