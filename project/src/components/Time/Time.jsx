import Carousel from "../../../../node_modules/react-grid-carousel";
import MembroDoTime from "./MembroDoTime";

function Time() {
    const dadosTime = {
        membro1: { nome: "Membro1", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro2: { nome: "Membro2", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro3: { nome: "Membro3", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro4: { nome: "Membro4", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro5: { nome: "Membro5", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro6: { nome: "Membro6", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro7: { nome: "Membro7", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro8: { nome: "Membro8", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro9: { nome: "Membro9", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
        membro10: { nome: "Membro10", github: "https://github.com/", linkedin: "https://br.linkedin.com/" },
    }

    const membrosDoTime = [
        <MembroDoTime
            nome={dadosTime.membro1.nome}
            github={dadosTime.membro1.github}
            linkedin={dadosTime.membro1.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro2.nome}
            github={dadosTime.membro2.github}
            linkedin={dadosTime.membro2.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro3.nome}
            github={dadosTime.membro3.github}
            linkedin={dadosTime.membro3.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro4.nome}
            github={dadosTime.membro4.github}
            linkedin={dadosTime.membro4.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro5.nome}
            github={dadosTime.membro5.github}
            linkedin={dadosTime.membro5.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro6.nome}
            github={dadosTime.membro6.github}
            linkedin={dadosTime.membro6.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro7.nome}
            github={dadosTime.membro7.github}
            linkedin={dadosTime.membro7.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro8.nome}
            github={dadosTime.membro8.github}
            linkedin={dadosTime.membro8.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro9.nome}
            github={dadosTime.membro9.github}
            linkedin={dadosTime.membro9.linkedin} />,

        <MembroDoTime
            nome={dadosTime.membro10.nome}
            github={dadosTime.membro10.github}
            linkedin={dadosTime.membro10.linkedin} />,
    ];

    return (
        <section className="page-section bg-light" id="time">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nosso Time</h2>
                    <h3 className="section-subheading text-muted">Squad 17 #Teufuturo</h3>
                </div>
                <div className="row">
                    <Carousel cols={5} rows={1} loop>
                        {membrosDoTime.map(membro => {
                            return (
                                <Carousel.Item>
                                    {membro}
                                </Carousel.Item>
                            );
                        })}

                    </Carousel>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Time responsável pela criação e desenvolvimeto dessa LandinPage, para o #TeuFuturo 2021.</p></div>
                </div>
            </div>
        </section>
    );
}

export default Time;