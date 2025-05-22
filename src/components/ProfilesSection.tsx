import React from 'react';
import Image from 'next/image';

export const ProfilesSection: React.FC = () => {
    return (
        <section className="section bg-background-alt">
            <div className="container-wide">
                <h2 className="section-header">Com quem <span className="text-primary">você vai aprender</span></h2>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center mt-12">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src="/images/leo-hermoso.png"
                            alt="Léo Hermoso"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="max-w-xl">
                        <h3 className="text-3xl font-bold mb-6">Léo Hermoso</h3>

                        <ul className="space-y-3 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">•</span>
                                <span>Pai de Gêmeos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">•</span>
                                <span>Desenvolvedor de software</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">•</span>
                                <span>Investidor desde 2018 em cripto</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">•</span>
                                <span>+ de 4 bitcoins em carteira</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">•</span>
                                <span>Triplicou o patrimônio no mundo cripto</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">•</span>
                                <span>Maior parte do patrimônio em cripto</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}; 