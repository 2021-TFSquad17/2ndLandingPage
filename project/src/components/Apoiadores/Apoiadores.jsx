/*Imagens Apoiadores */
import imagemApoiador1 from "../../assets/img/logos/facebook.svg";
import imagemApoiador2 from "../../assets/img/logos/google.svg";
import imagemApoiador3 from "../../assets/img/logos/microsoft.svg";
import LogoApoiadores from "./LogoApoiadores/LogoApoiadores";

function Apoiadores() {
    const imagensApoiadores = [
        imagemApoiador1,
        imagemApoiador2,
        imagemApoiador3
    ];
    
    return (
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {imagensApoiadores.map((imagem, index) => {
                        return <LogoApoiadores imagemLogo={imagem} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Apoiadores;