
function TeuFuturoDelasItem({titulo,subTitulo,icone}){
        return (
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    {icone}
                </span>
                <h4 className="my-3">{titulo}</h4>
                <p className="text-muted">{subTitulo}</p>
            </div>
        );
    }

export default TeuFuturoDelasItem;