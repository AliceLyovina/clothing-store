import imgWoman from '../attach/sections/sctn1.avif';
import imgMan from '../attach/sections/sctn2.avif';
import imgChild from '../attach/sections/sctn3.avif';
import SectionItem from './SectionItem';
import './style.css';

const sectionsArray = [
    {
        section: "women",
        sectionRu: "Женщины",
        image: imgWoman
    },
    {
        section: "men",
        sectionRu: "Мужчины",
        image: imgMan
    },
    {
        section: "children",
        sectionRu: "Дети",
        image: imgChild
    },
]

function Sections() {
    return (
        <div className="container">
            <div className="titleText">
                <h2 className="mainTitle">Разделы</h2>
                <p className="mainText">Выберите интересующий вас раздел</p>
            </div>

            <div className="menuParent">
                {sectionsArray.map((item, index) => (
                    <SectionItem key={index} item={item} />
                ))}
            </div>

        </div>
    )
}

export default Sections;