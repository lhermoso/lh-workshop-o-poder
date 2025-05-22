import React, { useState } from 'react';
import Image from 'next/image';

export const PricingSection: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Ideally integrate with a payment processor here
            alert('Formulário enviado com sucesso! Redirecionando para pagamento...');
        }, 800);
    };

    return (
        <section id="form" className="section bg-background text-text relative overflow-hidden">
            {/* Blockchain grid background */}
            <div className="absolute inset-0 blockchain-grid opacity-10"></div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/10 blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-accent/10 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="container-wide relative z-10">
                <h2 className="section-header mb-4">Quanto vou investir para participar do <span className="text-primary">Workshop O poder da terceira linha</span></h2>
                <p className="text-center text-lg mb-12 max-w-3xl mx-auto">Acesso exclusivo à estratégia que gera <span className="text-success font-bold">ganhos superiores</span> a 99% dos investidores cripto</p>

                <div className="flex flex-col items-center mt-12">
                    <div className="max-w-4xl w-full">
                        <div className="glass-effect rounded-2xl overflow-hidden shadow-glow border border-primary/20 transform hover:scale-[1.01] transition-all duration-300">
                            <div className="p-8 text-center border-b border-primary/20 bg-gradient-to-r from-background-alt to-background">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0ecb81" strokeWidth="2" />
                                            <path d="M8 12L11 15L16 9" stroke="#0ecb81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold crypto-gradient-text">Workshop Exclusivo</h3>
                                </div>
                                <p className="text-xl text-text/80">Dia 29 de Maio, às 19h | <span className="bg-warning/10 text-warning px-2 py-1 rounded-md text-sm">Vagas Limitadas</span></p>
                            </div>

                            <div className="relative p-8">
                                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gradient-to-r from-primary to-accent text-background font-bold py-1 px-4 rounded-full transform rotate-12 shadow-glow">
                                    Últimas vagas
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="relative w-full md:w-1/2 h-64 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-lg transition-all"></div>
                                        <Image
                                            src="/images/workshop-crypto.png"
                                            alt="Workshop O Poder da Terceira Linha"
                                            fill
                                            className="object-cover rounded-xl relative z-10"
                                        />
                                        <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-medium z-20 flex items-center gap-1 border border-primary/20">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                            3 horas de conteúdo prático
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 text-center">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-text/50 line-through text-xl">R$ 197,00</span>
                                            <span className="bg-success/20 text-success px-2 py-1 rounded text-sm font-medium">50% OFF</span>
                                        </div>
                                        <div className="text-6xl font-bold mb-6 flex items-center justify-center">
                                            <span className="text-sm font-normal mr-1">R$</span>
                                            <span className="crypto-gradient-text">97</span>
                                            <span className="text-sm font-normal self-end mb-2 ml-1">,00</span>
                                        </div>

                                        <form className="space-y-4" onSubmit={handleSubmit}>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Seu nome completo"
                                                    className="w-full pl-10 pr-4 py-3 bg-background-alt/50 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 6C22 7.10457 21.1046 8 20 8H4C2.89543 8 2 7.10457 2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6Z" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M12 12L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M8 8L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="email"
                                                    placeholder="Seu melhor e-mail"
                                                    className="w-full pl-10 pr-4 py-3 bg-background-alt/50 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0264 20.9929C10.0636 21 2.99951 13.9359 3.00659 4.97313C2.91255 3.92758 3.77806 2.99729 4.81277 3.00141H7.52249C7.96149 2.99856 8.38034 3.1734 8.68542 3.48686C9.6689 4.74041 10.2307 7.02575 9.99345 8.10773C9.81187 8.96161 8.9329 9.55427 8.21217 10.0915C9.99519 13.6829 12.8229 16.5106 16.4143 18.2936C16.9515 17.5729 17.5442 16.6939 18.3981 16.5123C19.4801 16.2751 21.7654 16.8369 22.019 17.8204C22.3321 18.1252 22.5064 18.5437 22.5024 18.9824L20.9995 16.4767Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="tel"
                                                    placeholder="Seu WhatsApp"
                                                    className="w-full pl-10 pr-4 py-3 bg-background-alt/50 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full relative overflow-hidden group bg-gradient-to-r from-primary to-accent text-background font-bold py-4 rounded-md uppercase tracking-wide transition-all hover:shadow-glow text-lg flex items-center justify-center gap-2"
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

                                            <div className="flex items-center justify-center gap-3 pt-4 border-t border-primary/10">
                                                <div className="text-success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-sm text-text/70">
                                                    Seus dados estão 100% seguros e protegidos com criptografia de ponta.
                                                </p>
                                            </div>
                                        </form>
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