import React from 'react';

function Features(){
    return <section id="features">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 feature-box">
                    <img className='icon' src="svg/heart.svg"/>
                    <h3>Fácil de usar</h3>
                    <p>O sistema possui uma interface muito simples e fácil de utilizar.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <img className='icon' src="svg/world.svg"/>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie seu fluxo de negócios de forma eficiente, orde quer que você esteja.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <img className='icon' src="svg/columns.svg"/>
                    <h3>Organização é tudo</h3>
                    <p>Tenha sua carteira de clientes sempre muito bem organizada.</p>
                </div>
                    
            </div>
        </div>
    </section>;
  }

export default Features;