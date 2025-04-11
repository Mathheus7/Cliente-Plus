import React from 'react';

function Prices(){
    return <section id="prices">
        <div className="container">
        <div className="row text-center">
                <div className="titulo">
                    <h1>Planos e Preços</h1>
                    <p>Comece sua avaliação gratuita. Não é necessário cartão de crédito.</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Free</h1></div>
                        <div className="card-body">
                            <h2>R$ 0,00</h2>
                            <p>• Até 50 clientes</p>
                            <p>• Acesso limitado</p>
                            <p>• Sem suporte</p>
                            <button className="btn btn-lg btn-outline-dark">Assinar Agora</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h1>Pro</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 25,99<small className="text-muted"> /mês</small></h2>
                            <p>• Até 200 clientes</p>
                            <p>• Acesso ilimitado</p>
                            <p>• Suporte</p>
                            <button className="btn btn-lg btn-outline-dark">Assinar Agora</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <dic className="card">
                        <div className="card-header">
                            <h1>Premium</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 49,99<small className="text-muted"> /mês</small></h2>
                            <p>• Clientes ilimitados</p>
                            <p>• Acesso ilimitado</p>
                            <p>• Suporte</p>
                            <button className="btn btn-lg btn-outline-dark">Assinar Agora</button>
                        </div>
                    </dic>
                </div>
            </div>
        </div>
    </section>;
  }

export default Prices;