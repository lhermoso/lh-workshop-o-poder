import React from 'react';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

export const WorkshopDetails: React.FC = () => {
    return (
        <section className="section bg-background-light dark:bg-background-alt-dark transition-colors duration-300">
            <div className="container-wide">
                <h2 className="section-header text-gray-800 dark:text-white">VEJA O QUE VOCÊ VAI <span className="text-primary dark:text-primary-dark">APRENDER NESSE WORKSHOP</span></h2>

                <div className="grid md:grid-cols-2 gap-16 mt-16 items-center">
                    <div className="crypto-card p-6 glow-on-hover">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                                <span className="text-background-dark dark:text-background-dark text-3xl font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-center md:text-left text-gray-800 dark:text-white">Primeira Parte</h3>
                                <h4 className="text-xl font-semibold mb-4 text-center md:text-left text-primary dark:text-primary-dark">Pool de Liquidez e seus princípios</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    <strong>Onde estão as oportunidades</strong> e onde elas costumam falhar. Já no primeiro instante, você vai aprender as duas formas de usar pools de liquidez para melhorar a entrada e saída das posições, otimizando seus trades e minimizando riscos. Aprofundaremos nos critérios de sucesso e nos erros mais comuns para que você possa navegar neste universo com mais confiança e estratégia.
</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-80 md:h-full rounded-xl overflow-hidden shadow-lg glow-on-hover">
                        <Image
                            src="/images/primeiro-dia.png"
                            alt="Léo Hermoso Workshop Parte 1"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mt-24 items-center">
                    <div className="relative h-80 md:h-full rounded-xl overflow-hidden shadow-lg order-2 md:order-1 glow-on-hover">
                        <Image
                            src="/images/segundo-dia.png"
                            alt="Léo Hermoso Workshop Parte 2"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="crypto-card p-6 order-1 md:order-2 glow-on-hover">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                                <span className="text-background-dark dark:text-background-dark text-3xl font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-center md:text-left text-gray-800 dark:text-white">Segunda Parte</h3>
                                <h4 className="text-xl font-semibold mb-4 text-center md:text-left text-primary dark:text-primary-dark">Sobreposição de faixas a fundo</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Todos os problemas que essa estratégia resolve e a sua implementação correta. Você entenderá como a <strong>sobreposição de faixas</strong> pode mitigar falhas comuns e otimizar a performance. Abordaremos desde a <strong>teoria</strong> por trás da técnica até as <strong>melhores práticas</strong> para sua aplicação, garantindo resultados consistentes e a superação de desafios operacionais.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="flex justify-center">
                        <CTAButton className="text-xl glow-on-hover" />
                    </div>
                </div>
            </div>
        </section>
    );
}; 