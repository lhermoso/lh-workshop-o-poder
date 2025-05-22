import React from 'react';
import Image from 'next/image';

const MarketSection: React.FC = () => {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container-wide mx-auto px-4">
                <div className="mb-10">
                    <h2 className="section-header">
                        Quando se houve falar do mercado de criptomoedas, dos poucos que sabem o que estão fazendo, temos dois perfis muito claros:
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
                    {/* Image on the left */}
                    <div className="w-full md:w-2/5 lg:w-1/3">
                        <Image
                            src="/images/lh-workshop-pools-de-liquidez.png"
                            alt="LH - Workshop Pool de Liquides"
                            title="LH – Workshop Pool de Liquides"
                            width={500}
                            height={370}
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Text content stacked on the right */}
                    <div className="w-full md:w-3/5 lg:w-2/3">
                        <div className="space-y-8">
                            <div className="crypto-card">
                                <h3 className="text-xl font-bold mb-2 text-primary">Os traders</h3>
                                <p className="text-text">
                                    <span style={{ fontWeight: 400 }}>que são os </span><i><span style={{ fontWeight: 400 }}>apostadores de BET </span></i><span style={{ fontWeight: 400 }}>do mercado. Pessoas que precisam de muito tempo analisando gráficos e precisam contar com muita técnica e uma boa dose de sorte. Nesse caso o ganho e as perdas costumam ser muito expressivos.</span>
                                </p>
                            </div>

                            <div className="crypto-card">
                                <h3 className="text-xl font-bold mb-2 text-primary">Os Holders</h3>
                                <p className="text-text">
                                    <span style={{ fontWeight: 400 }}>que são pessoas que buscam a segurança do investimento imobiliário no mercado mais volátil do mundo. Estes investidores, por mais que consigam bons ativos, </span><span style={{ fontWeight: 400 }}>estão deixando muito dinheiro na mesa, todo santo dia.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-effect p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-medium leading-relaxed text-center text-text">
                        Se você não tem o tempo e o coração saudável dos traders e não quer perder muito dinheiro todos os dias, você precisa conhecer o poder da terceira linha, conhecida como pool de liquidez baseada no protocolo hacks finance.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MarketSection; 