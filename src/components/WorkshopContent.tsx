import React from 'react';
import { CTAButton } from './CTAButton';

export const WorkshopContent: React.FC = () => {
    return (
        <section className="section bg-[#0a0e17] text-white">
            <div className="container-wide">
                <h2 className="section-header">O QUE TE ESPERA <span className="text-primary">NESSE WORKSHOP</span></h2>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-[#131922] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="mb-6">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Entenda a estratégia de sobreposição de Faixas</h3>
                        </div>
                        <p className="text-gray-300">
                            Em vez de ser uma operação que só provê liquidez de entre 100% a 110%. Eu tenho quatro operações ao mesmo tempo com liquidez de 100% a 110%, de 102% a 108% de 104% a 107% e assim por diante.
                        </p>
                    </div>

                    <div className="bg-[#131922] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="mb-6">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Diminuição do impermanent loss</h3>
                        </div>
                        <p className="text-gray-300">
                            Com o capital dividido dentro das faixas sobrepostas, o maior risco da operação, que acontece quando tem oscilações bruscas do mercado, é mitigado em quase 100%. As operações acontecem em grandes plataformas e com criptomoedas sólidas e consolidadas como a Solana.
                        </p>
                    </div>

                    <div className="bg-[#131922] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="mb-6">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Surra no Mercado</h3>
                        </div>
                        <p className="text-gray-300">
                            Enquanto o mercado está fazendo 0,8% ao mês, menos que a taxa SELIC, essa estratégia pouco conhecida e muito mais segura está deixando alguns poucos investidores cada vez mais ricos. Com um alto controle do meu investimento, eu consigo ter ganhos de 0,3% a 2,5% ao dia.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        Essas serão as 3 horas mais importantes do seu ano
                    </h3>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Pois neste dia você vai descobrir como eu tenho renda fixa, com alta rentabilidade, dentro do mercado cripto, o que me proporciona ganhos inimagináveis em qualquer outro tipo de investimento.
                    </p>
                    <div className="flex justify-center">
                        <CTAButton className="text-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}; 