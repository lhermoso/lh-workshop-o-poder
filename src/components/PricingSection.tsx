import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export const PricingSection: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePurchase = () => {
        setIsLoading(true);
        // Brief loading state for UX
        setTimeout(() => {
            setIsLoading(false);
            // Get utm_source from current URL, default to 'insta'
            const utmSource = searchParams.get('utm_source') || 'insta';
            router.push(`https://chk.eduzz.com/E9OO6PXQ9B?utm_source=${utmSource}`);
        }, 300);
    };

    return (
        <section id="form" className="section bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark relative overflow-hidden transition-colors duration-300">
            {/* Blockchain grid background */}
            <div className="absolute inset-0 blockchain-grid opacity-10 dark:opacity-5"></div>

            {/* Floating elements - ensure dark mode visibility */}
            <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-accent/10 dark:bg-accent/20 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="container-wide relative z-10">
                <h2 className="section-header mb-4 text-gray-800 dark:text-white">Quanto vou investir para participar do <span className="text-primary dark:text-primary-dark">Workshop O poder da terceira linha</span></h2>
                <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">Acesso exclusivo à estratégia que gera <span className="text-success font-bold">ganhos superiores</span> a 99% dos investidores cripto</p>

                <div className="flex flex-col items-center mt-12">
                    <div className="max-w-4xl w-full">
                        <div className="glass-effect rounded-2xl overflow-hidden shadow-glow border border-primary/20 dark:border-primary/30 transform hover:scale-[1.01] transition-all duration-300 glow-on-hover">
                            <div className="p-8 text-center border-b border-primary/20 dark:border-primary/30 bg-gradient-to-r from-background-alt-light to-background-light dark:from-background-alt-dark dark:to-background-dark">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0ecb81" strokeWidth="2" />
                                            <path d="M8 12L11 15L16 9" stroke="#0ecb81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold crypto-gradient-text">Workshop Exclusivo</h3>
                                </div>
                                <p className="text-xl text-gray-600 dark:text-gray-400">Dia 29 de Maio, às 19h | <span className="bg-warning/10 text-warning px-2 py-1 rounded-md text-sm">Vagas Limitadas</span></p>
                            </div>

                            <div className="relative p-8">
                                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gradient-to-r from-primary to-accent text-background-dark font-bold py-1 px-4 rounded-full transform rotate-12 shadow-glow">
                                    Últimas vagas
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="relative w-full md:w-1/2 h-64 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 rounded-xl blur-xl group-hover:blur-lg transition-all"></div>
                                        <Image
                                            src="/images/workshop-crypto.png"
                                            alt="Workshop O Poder da Terceira Linha"
                                            fill
                                            className="object-cover rounded-xl relative z-10"
                                        />
                                        <div className="absolute bottom-3 right-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-medium z-20 flex items-center gap-1 border border-primary/20 dark:border-primary/30 text-gray-800 dark:text-gray-200">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                            3 horas de conteúdo prático
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 text-center">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-gray-500 dark:text-gray-400 line-through text-xl">R$ 197,00</span>
                                            <span className="bg-success/20 text-success px-2 py-1 rounded text-sm font-medium">50% OFF</span>
                                        </div>
                                        <div className="text-6xl font-bold mb-8 flex items-center justify-center text-gray-800 dark:text-white">
                                            <span className="text-sm font-normal mr-1">R$</span>
                                            <span className="crypto-gradient-text">97</span>
                                            <span className="text-sm font-normal self-end mb-2 ml-1">,00</span>
                                        </div>

                                        <button
                                            onClick={handlePurchase}
                                            disabled={isLoading}
                                            className="w-full relative overflow-hidden group bg-gradient-to-r from-primary to-accent text-background-dark font-bold py-4 rounded-md uppercase tracking-wide transition-all hover:shadow-glow text-lg flex items-center justify-center gap-2 glow-on-hover"
                                        >
                                            {isLoading ? (
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            ) : (
                                                <>
                                                    QUERO GARANTIR MINHA VAGA
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </>
                                            )}
                                            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        </button>

                                        <div className="flex items-center justify-center gap-3 pt-6 mt-6 border-t border-primary/10 dark:border-primary/20">
                                            <div className="text-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Pagamento 100% seguro e protegido com criptografia de ponta.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 