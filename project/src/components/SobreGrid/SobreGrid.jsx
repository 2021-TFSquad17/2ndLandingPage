import SobreItem from "./SobreItem/SobreItem";

/*SobreItems imagens */
import SobreItem1 from "../../assets/img/portfolio/1.jpg";
import SobreItem2 from "../../assets/img/portfolio/2.jpg";
import SobreItem3 from "../../assets/img/portfolio/3.jpg";
import SobreItem4 from "../../assets/img/portfolio/4.jpg";
import SobreItem5 from "../../assets/img/portfolio/5.jpg";
import SobreItem6 from "../../assets/img/portfolio/6.jpg";

function SobreGrid(){
    const sobreImagens = [
        SobreItem1,
        SobreItem2,
        SobreItem3,
        SobreItem4,
        SobreItem5,
        SobreItem6
    ];

    const sobreLinks = [
        "SobreModal1",
        "SobreModal2",
        "SobreModal3",
        "SobreModal4",
        "SobreModal5",
        "SobreModal6"
    ];

    const sobreTitulo = [
        "Titulo1",
        "Titulo2",
        "Titulo3",
        "Titulo4",
        "Titulo5",
        "Titulo6",
    ];

    const sobreSubTitulo = [
        "SubTitulo1",
        "SubTitulo2",
        "SubTitulo3",
        "SubTitulo4",
        "SubTitulo5",
        "SubTitulo6",
    ];

        return (
            <section className="page-section bg-light" id="sobre">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Sobre</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <SobreItem 
                        sobreImagem={sobreImagens[0]} 
                        sobreLink={sobreLinks[0]}
                        sobreTitulo={sobreTitulo[0]}
                        sobreSubTitulo={sobreSubTitulo[0]}
                        />
                        
                        <SobreItem 
                        sobreImagem={sobreImagens[1]} 
                        sobreLink={sobreLinks[1]}
                        sobreTitulo={sobreTitulo[1]}
                        sobreSubTitulo={sobreSubTitulo[1]}
                        />
                        
                        <SobreItem 
                        sobreImagem={sobreImagens[2]} 
                        sobreLink={sobreLinks[2]}
                        sobreTitulo={sobreTitulo[2]}
                        sobreSubTitulo={sobreSubTitulo[2]}
                        />
                        
                        <SobreItem 
                        sobreImagem={sobreImagens[3]} 
                        sobreLink={sobreLinks[3]}
                        sobreTitulo={sobreTitulo[3]}
                        sobreSubTitulo={sobreSubTitulo[3]}
                        />
                        
                        <SobreItem 
                        sobreImagem={sobreImagens[4]} 
                        sobreLink={sobreLinks[4]}
                        sobreTitulo={sobreTitulo[4]}
                        sobreSubTitulo={sobreSubTitulo[4]}
                        />
                       
                        <SobreItem 
                        sobreImagem={sobreImagens[5]} 
                        sobreLink={sobreLinks[5]}
                        sobreTitulo={sobreTitulo[5]}
                        sobreSubTitulo={sobreSubTitulo[5]}
                        />                        
                    </div>
                </div>
            </section>
        );
    }

export default SobreGrid;