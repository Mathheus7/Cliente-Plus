import React from 'react';

function Testimony(){
    return <section id="testimony">
        <div className="container">
        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Excelente ferramenta para acompanhamento do dia a dia, sendo flexível o suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas.</h2>
                        <img src="Images/pessoa.jpg"/>                
                        <em>Matheus Franca - São Paulo</em>  
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Excelente ferramenta para acompanhamento do dia a dia, sendo flexível o suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas.</h2>
                        <img src="Images/pessoa.jpg"/>                
                        <em>João Vitor - Rio de Janeiro</em>  
                    </div>      

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>;
  }

export default Testimony;