function Buttons({typeClothes, chooseСlothes, currSection}) {
    return (
        <div>
            <button className="change" onClick={() => chooseСlothes(currSection, typeClothes)}>{typeClothes}</button>
        </div>
    )
}

export default Buttons;