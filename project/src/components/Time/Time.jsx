import Carousel from "../../../../node_modules/react-grid-carousel";
import MembroDoTime from "./MembroDoTime";

import fotoEmellyn from "../../assets/img/fotos-time/foto-emellyn.jpg";
import fotoJuliana from "../../assets/img/fotos-time/foto-juliana.jpg";
import fotoKelly from "../../assets/img/fotos-time/foto-kelly.jpg";
import fotoLaura from "../../assets/img/fotos-time/foto-laura.jpg";
import fotoLeonardo from "../../assets/img/fotos-time/foto-leonardo.jpg";
import fotoMarina from "../../assets/img/fotos-time/foto-marina.jpg";
import fotoMurilo from "../../assets/img/fotos-time/foto-murilo.jpg";
import fotoNatalie from "../../assets/img/fotos-time/foto-natalie.jpg";
import fotoRafael from "../../assets/img/fotos-time/foto-rafael.jpg";
import fotoThales from "../../assets/img/fotos-time/foto-thales.jpg";

function Time() {
    const fotosTime = [
        fotoEmellyn,
        fotoJuliana,
        fotoKelly,
        fotoLaura,
        fotoLeonardo,
        fotoMarina,
        fotoMurilo,
        fotoNatalie,
        fotoRafael,
        fotoThales
    ];

    const dadosTime = {
        membro1: { nome: "Emellyn", github: "https://github.com/EmellynRosa", linkedin: "https://www.linkedin.com/in/emellynrosa/", foto: fotosTime[0] },
        membro2: { nome: "Juliana", github: "https://github.com/julianaa-f", linkedin: "https://www.linkedin.com/in/julianaa-f", foto: fotosTime[1] },
        membro3: { nome: "Kelly", github: "https://github.com/wtkellyy", linkedin: "https://www.linkedin.com/in/kellyrramos/", foto: fotosTime[2] },
        membro4: { nome: "Laura", github: "https://github.com/lauramesquita", linkedin: "https://www.linkedin.com/in/laura-mesquita-20bab6220/", foto: fotosTime[3] },
        membro5: { nome: "Leonardo", github: "https://github.com/LeonardodsMarques", linkedin: "https://www.linkedin.com/in/leonardo-dsmarques/", foto: fotosTime[4] },
        membro6: { nome: "Marina", github: "https://github.com/MarinaRaelMarques", linkedin: "https://www.linkedin.com/in/marina-rael-marques/", foto: fotosTime[5] },
        membro7: { nome: "Murilo", github: "https://github.com/Murilo-Barbosa", linkedin: "http://linkedin.com/in/murilo-barbosa-a58164216", foto: fotosTime[6] },
        membro8: { nome: "Natalie", github: "https://github.com/NatalieLopes", linkedin: "https://www.linkedin.com/in/natalie-ds-lopes?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMxL4ygaHQiGD68r%2FbgyMmg%3D%3D", foto: fotosTime[7] },
        membro9: { nome: "Rafael", github: "https://github.com/Rafaelnoll", linkedin: "https://www.linkedin.com/in/rafael-noll-da-silva-8a0a6521b/", foto: fotosTime[8] },
        membro10: { nome: "Thales", github: "https://github.com/OdiasThales23", linkedin: "https://www.linkedin.com/in/thales-dias-prudencio-670538220", foto: fotosTime[9] },
    }

    const membrosDoTime = [
        criarMembroDoTime(dadosTime.membro1),
        criarMembroDoTime(dadosTime.membro2),
        criarMembroDoTime(dadosTime.membro3),
        criarMembroDoTime(dadosTime.membro4),
        criarMembroDoTime(dadosTime.membro5),
        criarMembroDoTime(dadosTime.membro6),
        criarMembroDoTime(dadosTime.membro7),
        criarMembroDoTime(dadosTime.membro8),
        criarMembroDoTime(dadosTime.membro9),
        criarMembroDoTime(dadosTime.membro10),
    ];

    return (
        <section className="page-section bg-light" id="time">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nosso Time</h2>
                    <h3 className="section-subheading text-muted">Conheça o time responsável pela criação e desenvolvimento desta Landing Page.</h3>
                </div>
                <div className="row">
                    <Carousel cols={5} rows={1} loop>
                        {membrosDoTime.map((membro, index) => {
                            return (
                                <Carousel.Item key={index}> 
                                    {membro}
                                </Carousel.Item>
                            );
                        })}

                    </Carousel>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Squad 17, turma de Quarta-Feira do programa #TeuFuturo 2021.</p></div>
                </div>
            </div>
        </section>
    );
}

function criarMembroDoTime(membro) {
    return (
        <MembroDoTime
            nome={membro.nome}
            github={membro.github}
            linkedin={membro.linkedin}
            fotoMembro={membro.foto}
        />
    );
}

export default Time;