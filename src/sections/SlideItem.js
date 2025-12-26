function SlideItem({item}) {
    return (
        <div className="container">
            <a href={`/${item.section}`} className="menuLink" >
                <div className="menuElement">
                    <p className="menuHeading">{item.sectionRu}</p>
                    <img src={item.image} alt="the section" className="menuImg" />
                </div>
            </a>
        </div>
    )
}

export default SlideItem;