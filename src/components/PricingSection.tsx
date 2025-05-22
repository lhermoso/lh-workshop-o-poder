import React from 'react';
import Image from 'next/image';

export const PricingSection: React.FC = () => {
    return (
        <section id="form" className="section bg-[#0a0e17] text-white">
            <div className="container-wide">
                <h2 className="section-header">Quanto vou investir para participar do <span className="text-primary">Workshop O poder da terceira linha</span>.</h2>

                <div className="flex flex-col items-center mt-12">
                    <div className="max-w-4xl w-full">
                        <div className="bg-[#131922] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                            <div className="p-8 text-center border-b border-gray-700">
                                <h3 className="text-2xl font-bold mb-3">Curso ao Vivo de 3 horas práticas</h3>
                                <p className="text-xl text-gray-300">Dias 29 de Maio, às 19h.</p>
                            </div>

                            <div className="relative p-8">
                                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary text-text font-bold py-1 px-4 rounded-full transform rotate-12">
                                    Garanta já
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="relative w-full md:w-1/2 h-64">
                                        <Image
                                            src="/images/workshop-crypto.png"
                                            alt="Workshop O Poder da Terceira Linha"
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 text-center">
                                        <p className="text-xl mb-4">Valor do investimento:</p>
                                        <div className="text-6xl font-bold mb-6">
                                            <span className="text-primary">R$ 97,00</span>
                                        </div>

                                        <form className="space-y-4" onSubmit={(e) => {
                                            e.preventDefault();
                                            // Ideally integrate with a payment processor here
                                            alert('Formulário enviado com sucesso! Redirecionando para pagamento...');
                                        }}>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Seu nome completo"
                                                    className="w-full px-4 py-3 bg-[#0a0e17] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    placeholder="Seu melhor e-mail"
                                                    className="w-full px-4 py-3 bg-[#0a0e17] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    placeholder="Seu WhatsApp"
                                                    className="w-full px-4 py-3 bg-[#0a0e17] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-primary text-text font-bold py-4 rounded-md uppercase tracking-wide transition-all hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-1 text-lg animate-pulse"
                                            >
                                                QUERO MINHA VAGA
                                            </button>

                                            <p className="text-sm text-gray-400 mt-4">
                                                Seus dados estão 100% seguros e não serão compartilhados.
                                            </p>
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