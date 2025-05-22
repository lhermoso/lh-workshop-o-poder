import React from 'react';
import Image from 'next/image';

export const ProfilesSection: React.FC = () => {
    return (
        <section className="section bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 blockchain-grid opacity-10 dark:opacity-5"></div>
            <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>

            <div className="container-wide relative z-10">
                <h2 className="section-header font-orbitron text-gray-800 dark:text-white">Com quem <span className="text-primary dark:text-primary-dark">você vai aprender</span></h2>
                <p className="text-center text-lg mb-16 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                    Conheça o especialista que já navega pelos mercados cripto e implementa as estratégias mais lucrativas
                </p>

                <div className="flex flex-col md:flex-row gap-16 items-center justify-center mt-12">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 group glow-on-hover">
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 dark:from-primary/40 dark:to-accent/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

                        {/* Hexagon frame */}
                        <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl border border-primary/20 dark:border-primary/30 bg-background-alt-light/30 dark:bg-background-alt-dark/30 backdrop-blur-sm"></div>

                        {/* Image */}
                        <Image
                            src="/images/leo-hermoso.png"
                            alt="Léo Hermoso"
                            fill
                            className="object-cover rounded-2xl relative z-[15]"
                        />

                        {/* Crypto badge */}
                        <div className="absolute -bottom-3 -right-3 bg-background-alt-light dark:bg-background-alt-dark backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium z-20 border border-primary/20 dark:border-primary/30 shadow-glow flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.868 6.14-6.025 1.215-6.894m-1.215 6.894-5.907-1.042m5.907 1.042-.347 1.97M11.766 4.089l-5.906-1.042m5.906 1.042-.347 1.97" stroke="url(#grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00f2fe" />
                                        <stop offset="1" stopColor="#7b3fe4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="crypto-gradient-text font-semibold">Cripto Trader</span>
                        </div>
                    </div>

                    <div className="crypto-card max-w-xl glow-on-hover">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-3xl font-bold font-orbitron crypto-gradient-text">Léo Hermoso</h3>
                            <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent dark:from-primary/30"></div>
                        </div>

                        <ul className="space-y-4 text-lg mb-8 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="url(#check-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="check-grad" x1="5" y1="7" x2="20" y2="17" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#00f2fe" />
                                                <stop offset="1" stopColor="#7b3fe4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <span>Pai de Gêmeos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="url(#check-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Desenvolvedor de software com especialização em blockchain</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="url(#check-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Investidor desde 2018 em cripto, atravessando múltiplos ciclos de mercado</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="url(#check-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Possui mais de <span className="text-primary dark:text-primary-dark font-medium">4 bitcoins</span> em carteira</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="url(#check-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Triplicou o patrimônio no mundo cripto usando estratégias inovadoras</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="url(#check-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Especialista em <span className="text-primary dark:text-primary-dark font-medium">pools de liquidez</span> e técnicas de &quot;yield farming&quot;</span>
                            </li>
                        </ul>

                        <div className="glass-effect p-4 rounded-xl text-gray-700 dark:text-gray-300">
                            <div className="flex items-center gap-2 mb-2 text-primary dark:text-primary-dark">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="font-medium">Não sou guru financeiro, apenas compartilho estratégias reais que utilizo diariamente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 