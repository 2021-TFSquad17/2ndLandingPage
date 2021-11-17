import "./style.css";

function MembroDoTime({nome,github,linkedin,fotoMembro}) {
    return (
        <div className="col-lg-2-5">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src={fotoMembro} alt="Imagem membro do time" />
                <h4>{nome}</h4>
                <a className="btn btn-dark btn-social mx-2" href={github}><i className="fab fa-github"></i></a>
                <a className="btn btn-dark btn-social mx-2" href={linkedin}><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
}

export default MembroDoTime;