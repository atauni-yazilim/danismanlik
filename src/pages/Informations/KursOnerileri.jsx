import { LuExternalLink } from "react-icons/lu";
import Callout from "../../components/Callout/Callout";
import InfoPage from "../../components/InfoPage/InfoPage";
import { courseGroups } from "../../data/courses";
import "./KursOnerileri.css";

const CourseList = ({ courses }) => (
    <ul className="course-list">
        {courses.map(({ title, provider, href, description, level, language, free }) => (
            <li key={href}>
                <a className="course-card" href={href} target="_blank" rel="noopener noreferrer">
                    <span className="course-card__header">
                        <span className="course-card__title">{title}</span>
                        <LuExternalLink className="course-card__icon" aria-hidden="true" />
                    </span>
                    <span className="course-card__provider">{provider}</span>
                    <span className="course-card__description">{description}</span>
                    <span className="course-card__tags">
                        <span className="course-tag">{level}</span>
                        <span className="course-tag">{language}</span>
                        <span className={`course-tag ${free ? "course-tag--free" : ""}`}>
                            {free ? "Ücretsiz" : "Kısmen ücretli"}
                        </span>
                    </span>
                </a>
            </li>
        ))}
    </ul>
);

const sections = courseGroups.map(({ id, title, summary, courses }) => ({
    id,
    title,
    content: (
        <>
            <p>{summary}</p>
            <CourseList courses={courses} />
        </>
    ),
}));

const courseCount = courseGroups.reduce((total, group) => total + group.courses.length, 0);
const freeCount = courseGroups.reduce((total, group) => total + group.courses.filter(course => course.free).length, 0);

const KursOnerileri = () => {
    return (
        <InfoPage
            category="Kaynaklar"
            title="Kurs Önerileri"
            lead="Derslerinizi desteklemek ve kendinizi geliştirmek için seçilmiş, çoğu ücretsiz çevrim içi kurslar ve kaynaklar."
            facts={[
                { value: courseCount, label: "Önerilen kurs ve kaynak" },
                { value: freeCount, label: "Ücretsiz erişilebilen" },
                { value: courseGroups.length, label: "Konu başlığı" },
            ]}
            intro={
                <Callout tone="info" title="Nasıl kullanmalı?">
                    <p>Bu kurslar müfredatın parçası değildir ve kredi/AKTS olarak sayılmaz. Hepsini bitirmeye çalışmak yerine o dönem aldığınız derslere paralel bir kurs seçip düzenli ilerlemeniz daha verimli olur. Kurs önerileriniz varsa danışmanınıza iletebilirsiniz.</p>
                </Callout>
            }
            sections={sections}
        />
    );
};

export default KursOnerileri;
