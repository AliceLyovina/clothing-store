import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { data, womenList, menList, childrenList } from "./clothesData";
import Buttons from "./Buttons";
import CatalogItem from "./CatalogItem";
import LoaderPage from "../loader/LoaderPage";

function Catalog() {
    const [clothes, setClothes] = useState(data);
    const [types, setTypes] = useState([]);
    const [currTypes, setCurrTypes] = useState("Все категории");
    const currSection = useLocation().pathname.slice(1);
    const [stateLoader, setStateLoader] = useState(true);

    const chooseСlothes = (section, type) => {
        const newSection = data.filter(element => element.section === section);

        if (type !== "all") {
            const newClothes = newSection.filter(element => element.searchTerm === type);
            setClothes(newClothes);
            setCurrTypes(type);
        } else {
            setClothes(newSection);
            setCurrTypes("Все категории");
        }

        if (currSection === "women") {
            setTypes(womenList);
        } else if (currSection === "men") {
            setTypes(menList);
        } else {
            setTypes(childrenList);
        }
    }

    useEffect(() => {
        chooseСlothes(currSection, "all");
        setStateLoader(true);
        const timer = setTimeout(() => setStateLoader(false), 500);
        return () => clearTimeout(timer);
    }, [currSection])

    return (
        <div className="container">
            {stateLoader && <LoaderPage />}
            <div className="btnContainer">
                <button className="change" onClick={() => chooseСlothes(currSection, "all")}>Все</button>
                {types.map((item) => (
                    <Buttons key={item} typeClothes={item} chooseСlothes={chooseСlothes} currSection={currSection} />
                ))}
            </div>

            <h2 className="mainTitle">{currTypes}</h2>

            <div className="clothesParent">
                {clothes.map((item) => (
                <CatalogItem key={item.id} item={item} />
            ))}

            </div>
        </div>
    )
}

export default Catalog;