import { useSearchParams } from "react-router";
import { LuBookOpenText, LuExternalLink, LuMonitorPlay, LuSearch, LuX } from "react-icons/lu";
import Callout from "../../components/Callout/Callout";
import InfoPage from "../../components/InfoPage/InfoPage";
import { courseGroups, yearGroups } from "../../data/courses";
import "./KursOnerileri.css";

// Büyük/küçük harf, şapka ve Türkçe karakter farklarını yok sayar:
// "yapay zeka" → "Yapay Zekâ", "isletim" → "İşletim" ile eşleşir.
const normalize = text =>
    text
        .toLocaleLowerCase("tr")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/ı/g, "i");

// Kurs türleri: kartta simge ve etiket, sayfada filtre olarak kullanılır.
const courseTypes = {
    video: { label: "Video kurs", filterLabel: "Video kurslar", icon: LuMonitorPlay },
    dokuman: { label: "Dokümantasyon", filterLabel: "Dokümantasyonlar", icon: LuBookOpenText },
};

// Tüm kurslar tek listede; her kurs bağlı olduğu konuyu da taşır.
// Tür etiketi de aranır; "video" veya "dokümantasyon" yazmak da sonuç verir.
const allCourses = courseGroups.flatMap(group =>
    group.courses.map(course => ({
        ...course,
        category: group.title,
        searchText: normalize([course.title, course.provider, course.description, courseTypes[course.type].label, ...course.keywords].join(" ")),
    })),
);

const views = [
    { id: "konu", label: "Konuya göre" },
    { id: "sinif", label: "Sınıfa göre" },
];

// Görünüme göre başlıklar ve her başlığın kursları. Bir kurs birden fazla sınıfta yer alabilir.
const groupCourses = (courses, view) => {
    const groups = view === "sinif"
        ? yearGroups.map(group => ({ ...group, courses: courses.filter(course => course.years.includes(group.year)) }))
        : courseGroups.map(group => ({ ...group, courses: courses.filter(course => course.category === group.title) }));

    return groups.filter(group => group.courses.length > 0);
};

// Sorgudaki her kelime kursun başlık, kurum, açıklama veya anahtar kelimelerinde geçmelidir.
const searchCourses = query => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    return allCourses.filter(course => terms.every(term => course.searchText.includes(term)));
};

const CourseList = ({ courses, view }) => (
    <ul className="course-list">
        {courses.map(({ title, provider, type, href, description, level, language, free, category, years }) => {
            const { label: typeLabel, icon: TypeIcon } = courseTypes[type];

            return (
            <li key={href}>
                <a className={`course-card course-card--${type}`} href={href} target="_blank" rel="noopener noreferrer">
                    <span className="course-card__type">
                        <span className="course-card__type-icon" aria-hidden="true"><TypeIcon /></span>
                        {typeLabel}
                    </span>
                    <span className="course-card__header">
                        <span className="course-card__title">{title}</span>
                        <LuExternalLink className="course-card__icon" aria-hidden="true" />
                    </span>
                    <span className="course-card__provider">{provider}</span>
                    <span className="course-card__description">{description}</span>
                    <span className="course-card__tags">
                        {/* Gruplamada kullanılmayan boyut kartta etiket olarak gösterilir */}
                        {view === "sinif" ? (
                            <span className="course-tag course-tag--group">{category}</span>
                        ) : (
                            years.map(year => (
                                <span className={`course-tag course-tag--year year-${year}`} key={year}>{year}. sınıf</span>
                            ))
                        )}
                        <span className="course-tag">{level}</span>
                        <span className="course-tag">{language}</span>
                        <span className={`course-tag ${free ? "course-tag--free" : ""}`}>
                            {free ? "Ücretsiz" : "Kısmen ücretli"}
                        </span>
                    </span>
                </a>
            </li>
            );
        })}
    </ul>
);

const freeCount = allCourses.filter(course => course.free).length;

const KursOnerileri = () => {
    // Arama (?q=), görünüm (?gorunum=sinif) ve tür (?tur=video) URL'de tutulur;
    // böylece paylaşılabilir ve sayfa yenilenince kaybolmaz.
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";
    const view = searchParams.get("gorunum") === "sinif" ? "sinif" : "konu";
    const typeParam = searchParams.get("tur");
    const type = typeParam in courseTypes ? typeParam : "";

    const setParam = (key, value) => {
        setSearchParams(previous => {
            const next = new URLSearchParams(previous);
            if (value) next.set(key, value);
            else next.delete(key);
            return next;
        }, { replace: true });
    };

    // Filtre düğmelerindeki sayılar aramaya göre, gösterilen kurslar ise ayrıca seçili türe göre süzülür.
    const searchMatches = searchCourses(query);
    const matches = type ? searchMatches.filter(course => course.type === type) : searchMatches;
    const groups = groupCourses(matches, view);
    const isSearching = query.trim() !== "";
    const typeFilters = [
        { id: "", label: "Tümü", count: searchMatches.length },
        ...Object.entries(courseTypes).map(([id, { filterLabel, icon }]) => ({
            id,
            label: filterLabel,
            icon,
            count: searchMatches.filter(course => course.type === id).length,
        })),
    ];

    const sections = groups.map(({ id, title, summary, courses, year }) => ({
        id,
        title,
        className: year ? `course-section--year year-${year}` : undefined,
        content: (
            <>
                {!isSearching && <p>{summary}</p>}
                <CourseList courses={courses} view={view} />
            </>
        ),
    }));

    return (
        <InfoPage
            category="Kaynaklar"
            title="Kurs Önerileri"
            lead="Derslerinizi desteklemek ve kendinizi geliştirmek için seçilmiş, çoğu ücretsiz çevrim içi kurslar ve kaynaklar."
            facts={[
                { value: allCourses.length, label: "Önerilen kurs ve kaynak" },
                { value: freeCount, label: "Ücretsiz erişilebilen" },
                { value: courseGroups.length, label: "Konu başlığı" },
            ]}
            intro={
                <>
                    <Callout tone="info" title="Nasıl kullanmalı?">
                        <p>Bu kurslar müfredatın parçası değildir ve kredi/AKTS olarak sayılmaz. Hepsini bitirmeye çalışmak yerine o dönem aldığınız derslere paralel bir kurs seçip düzenli ilerlemeniz daha verimli olur. Kurs önerileriniz varsa danışmanınıza iletebilirsiniz.</p>
                    </Callout>

                    <div className="course-search" role="search">
                        <label className="course-search__field">
                            <LuSearch className="course-search__icon" aria-hidden="true" />
                            <input
                                type="search"
                                aria-label="Kurslarda ara"
                                value={query}
                                onChange={event => setParam("q", event.target.value)}
                                placeholder="Kurs adı, konu veya anahtar kelime ara (ör. python, veritabanı, react)"
                                autoComplete="off"
                                spellCheck="false"
                            />
                            {isSearching && (
                                <button type="button" className="course-search__clear" onClick={() => setParam("q", "")} aria-label="Aramayı temizle">
                                    <LuX aria-hidden="true" />
                                </button>
                            )}
                        </label>

                        <div className="course-search__bar">
                            <div className="view-switch" role="group" aria-label="Kursları grupla">
                                {views.map(({ id, label }) => (
                                    <button
                                        type="button"
                                        key={id}
                                        className="view-switch__option"
                                        aria-pressed={view === id}
                                        onClick={() => setParam("gorunum", id === "konu" ? "" : id)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            <div className="view-switch" role="group" aria-label="Kurs türü">
                                {typeFilters.map(({ id, label, icon: Icon, count }) => (
                                    <button
                                        type="button"
                                        key={id || "tumu"}
                                        className="view-switch__option"
                                        aria-pressed={type === id}
                                        onClick={() => setParam("tur", id)}
                                    >
                                        {Icon && <Icon aria-hidden="true" />}
                                        {label}
                                        <span className="view-switch__count">{count}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Ekran okuyucuların sonucu duyurabilmesi için kapsayıcı hep sayfada kalır */}
                            <p className="course-search__status" role="status">
                                {isSearching && (matches.length > 0
                                    ? `“${query.trim()}” için ${matches.length} kurs bulundu.`
                                    : `“${query.trim()}” için ${type ? `${courseTypes[type].filterLabel.toLocaleLowerCase("tr")} arasında ` : ""}kurs bulunamadı. Farklı bir kelime deneyin.`)}
                            </p>
                        </div>
                    </div>
                </>
            }
            sections={sections}
        />
    );
};

export default KursOnerileri;
