import React from 'react';
import { CTAButton } from './CTAButton';
import Image from 'next/image';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center py-12 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark overflow-hidden transition-colors duration-300">
            {/* Animated background with crypto matrix effect */}
            <div className="absolute inset-0 opacity-10 dark:opacity-5">
                <div className="absolute top-0 left-0 w-full h-full blockchain-grid"></div>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-primary/20 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 150 + 50}px`,
                            height: `${Math.random() * 150 + 50}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            filter: 'blur(40px)',
                            opacity: 0.1 + Math.random() * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="container-wide relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-800 dark:text-white">
                            <span className="crypto-gradient-text">O Poder da</span> Terceira Linha
                        </h1>
                        <h2 className="text-xl md:text-2xl mb-8 font-light max-w-2xl text-gray-600 dark:text-gray-300">
                            Aprenda, em detalhes, a estratégia alternativa, pouca explorada do mercado cripto, e que me dá ganhos diários entre <span className="text-primary dark:text-primary-dark font-bold">US$3 a US$25/dia</span> a cada 1.000 dólares investidos.
                        </h2>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <CTAButton className="text-xl glow-on-hover" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 text-lg glass-effect p-4 backdrop-blur text-gray-700 dark:text-gray-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-auto rounded-full bg-success flex items-center justify-center text-background-dark font-bold">✓</div>
                                    <span>Dias 014 de Junho</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-background-dark font-bold">✓</div>
                                    <span>3 horas de conteúdo 100% online e Ao Vivo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-background-dark font-bold">✓</div>
                                    <span>Conhecimento exclusivo para 0,5% dos investidores</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] animate-float hidden md:block">
                        {/* COMMENT: Replace with a 3D crypto image or NFT-style illustration showing trading concepts, 
                        ideally with a glowing blue/purple crypto aesthetic. Current image can be enhanced with 
                        digital effects if replacement is not immediately available. */}
                        <div className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
                        <Image
                            src="/images/crypto-hero.png"
                            alt="Estratégia de Pool de Liquidez"
                            fill
                            className="object-contain relative z-10"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Animated arrow indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </div>
        </section>
    );
}; 