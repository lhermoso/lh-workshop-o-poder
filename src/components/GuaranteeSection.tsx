import React from 'react';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

export const GuaranteeSection: React.FC = () => {
    return (
        <section className="section bg-background-alt">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="relative w-48 h-48 flex-shrink-0">
                        <Image
                            src="/images/guarantee-seal.svg"
                            alt="Garantia Incondicional"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">GARANTIA INCONDICIONAL</h2>
                        <p className="text-xl mb-6">
                            Ao garantir a sua vaga no workshop você recebe a garantia incondicional. Se ao final do evento você não estiver completamente satisfeito, basta entrar em contato conosco para ser 100% reembolsado.
                        </p>
                        <CTAButton />
                    </div>
                </div>
            </div>
        </section>
    );
}; 