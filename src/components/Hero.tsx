import React from 'react';
import { CTAButton } from './CTAButton';
import Image from 'next/image';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center py-12 bg-[#0a0e17] text-white overflow-hidden">
            {/* Animated background with crypto effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/crypto-pattern.svg')] bg-repeat"></div>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            <span className="text-primary">O Poder da</span> Terceira Linha
                        </h1>
                        <h2 className="text-xl md:text-2xl mb-8 font-light max-w-2xl">
                            Aprenda, em detalhes, a estratégia alternativa, pouca explorada do mercado cripto, e que me dá ganhos diários entre <span className="text-primary font-bold">US$3 a US$25/dia</span> a cada 1.000 dólares investidos.
                        </h2>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <CTAButton className="text-xl" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 text-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-text font-bold">✓</div>
                                    <span>Dias 29 de MAIO</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-text font-bold">✓</div>
                                    <span>3 horas de conteúdo 100% online e Ao Vivo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-text font-bold">✓</div>
                                    <span>Conhecimento exclusivo para 0,5% dos investidores</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] animate-fade-in hidden md:block">
                        <Image
                            src="/images/workshop-crypto.png"
                            alt="Estratégia de Pool de Liquidez"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}; 