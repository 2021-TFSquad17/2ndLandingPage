import "./style.css";

function Video() {
    return (
        <section className="video bg-light">
            <div className="insertVideo">
                <iframe className="insertVideo-video" src="https://www.youtube.com/embed/eYWu3QRGRW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="text-video">
                <h2 className="text-video-title h2.section-heading text-uppercase">Conheça mais do nosso projeto e a sua <a className="destaque">importância</a> </h2>
                <h4 className="text-video-content">Projeto que busca dar oportunidades a estudantes de escola pública e tem foco em aumentar a participação feminina na área de tecnologia.
                    As alunas terão aula com professores da IMED e também contarão com o auxílio dos patrocinadores do projeto, visando dar a elas todo o suporte necessário para que se sintam confiantes e consigam desenvolver uma boa base para o mercado de trabalho.</h4>
                <a className="btn btn-primary btn-xl text-uppercase" href="#contato">QUERO PARTICIPAR!</a>
            </div>
        </section>
    );
}

export default Video;