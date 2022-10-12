import {useNavigate} from "react-router-dom";

export default function BackToMain() {
    const navigate = useNavigate();

    return (
        <section className="ticket">
            <header className="ticket__check">
                <h2 className="ticket__check-title">Для выбора сеанса вернитесь на главную страницу:</h2>
            </header>
            <div className="ticket__info-wrapper">
                <button className="acceptin-button" onClick={() => navigate('/')}>
                    На главную страницу
                </button>
            </div>
        </section>
    )
}