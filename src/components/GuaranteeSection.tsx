import React from 'react';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

export const GuaranteeSection: React.FC = () => {
    return (
        <section className="section bg-background relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 blockchain-grid opacity-5"></div>

            <div className="container-wide relative z-10">
                <div className="crypto-card p-8 md:p-12 rounded-2xl border border-primary/20 shadow-glow backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="relative w-48 h-48 flex-shrink-0 animate-float">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl"></div>
                            <Image
                                src="/images/guarantee-seal.svg"
                                alt="Garantia Incondicional"
                                fill
                                className="object-contain relative z-10"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold mb-4 crypto-gradient-text">GARANTIA INCONDICIONAL</h2>
                            <p className="text-xl mb-6 text-text/90">
                                Ao garantir a sua vaga no workshop você recebe a garantia incondicional. Se ao final do evento você não estiver completamente satisfeito, basta entrar em contato conosco para ser <span className="text-success font-semibold">100% reembolsado</span>.
                            </p>

                            <div className="flex items-center gap-3 glass-effect p-4 rounded-xl mb-6">
                                <div className="text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </div>
                                <p className="text-sm">
                                    <strong>Atenção:</strong> As vagas são extremamente limitadas e estão se esgotando rapidamente. Garanta seu acesso imediatamente.
                                </p>
                            </div>

                            <CTAButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 