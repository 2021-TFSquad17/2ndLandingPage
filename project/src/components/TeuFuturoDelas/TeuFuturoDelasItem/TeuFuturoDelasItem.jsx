
function TeuFuturoDelasItem({ titulo, subTitulo, icone, link }) {
    return (
        <div className="col-md-4">
            <img src={icone} alt="..." />
            <h4 className="my-3">{titulo}</h4>
            <p className="text-muted">{subTitulo}{link}</p>
        </div>
    );
}

export default TeuFuturoDelasItem;