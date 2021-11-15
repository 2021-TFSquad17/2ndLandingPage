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
        membro1: { nome: "Emellyn", github: "https://github.com/EmellynRosa", linkedin: "https://www.linkedin.com/in/emellynrosa/"},
        membro2: { nome: "Juliana", github: "https://github.com/julianaa-f", linkedin: "https://www.linkedin.com/in/julianaa-f"},
        membro3: { nome: "Kelly", github: "https://github.com/wtkellyy", linkedin: "https://www.linkedin.com/in/kellyrramos/"},
        membro4: { nome: "Laura", github: "https://github.com/lauramesquita", linkedin: "https://www.linkedin.com/in/laura-mesquita-20bab6220/"},
        membro5: { nome: "Leonardo", github: "https://github.com/LeonardodsMarques", linkedin: "https://www.linkedin.com/in/leonardo-dsmarques/"},
        membro6: { nome: "Marina", github: "https://github.com/MarinaRaelMarques", linkedin: "https://www.linkedin.com/in/marina-rael-marques/"},
        membro7: { nome: "Murilo", github: "https://github.com/Murilo-Barbosa", linkedin: "http://linkedin.com/in/murilo-barbosa-a58164216"},
        membro8: { nome: "Natalie", github: "https://github.com/NatalieLopes", linkedin: "https://www.linkedin.com/in/natalie-ds-lopes?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMxL4ygaHQiGD68r%2FbgyMmg%3D%3D"},
        membro9: { nome: "Rafael", github: "https://github.com/Rafaelnoll", linkedin: "https://www.linkedin.com/in/rafael-noll-da-silva-8a0a6521b/"},
        membro10: { nome: "Thales", github: "https://github.com/OdiasThales23", linkedin: "https://www.linkedin.com/in/thales-dias-prudencio-670538220"},
    }

    const membrosDoTime = [
        <MembroDoTime
            nome={dadosTime.membro1.nome}
            github={dadosTime.membro1.github}
            linkedin={dadosTime.membro1.linkedin}
            />,

        <MembroDoTime
            nome={dadosTime.membro2.nome}
            github={dadosTime.membro2.github}
            linkedin={dadosTime.membro2.linkedin}
            />,

        <MembroDoTime
            nome={dadosTime.membro3.nome}
            github={dadosTime.membro3.github}
            linkedin={dadosTime.membro3.linkedin} 
            />,

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