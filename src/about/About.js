import './style.css';

function About() {
    return (
        <div className="container">
            <h2 className="mainTitle">О нас</h2>
            <p className="mainText">Немного информации о нашем райском уголке</p>

            <div className="contactParent">
                <div className="contactElement">
                    <img className="contactImg" src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80" alt="the place" />
                    <p>У нас <b>самый уютный</b> и <b>гостеприимный</b> магазинчик в самом центре города.</p>
                </div>

                <div className="contactElement">
                    <img className="contactImg" src="https://images.unsplash.com/photo-1492778297155-7be4c83960c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="tea" />
                    <p>Тут Вы сможете не только найти себе всё по душе, но и расслабиться с <b>чашкой чая и вкусняшками.</b></p>
                </div>
            </div>

            <div className="contactParent">
                <div className="contactElement">
                    <img className="contactImg" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="stylist" />
                    <p>Если сомневаетесь, то с выбором Вам поможет нам <b>профессиональный стилист!</b></p>
                </div>

                <div className="contactElement">
                    <img className="contactImg" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80" alt="address" />
                    <p>Наш адрес: <b>г. Чудный, Переулок Волшебных Находок, 15</b><br />
                        Наш телефон: <b>+7 999 777 55 33</b>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;