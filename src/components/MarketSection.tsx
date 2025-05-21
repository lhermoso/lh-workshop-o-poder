import React from 'react';
import Image from 'next/image';

const MarketSection: React.FC = () => {
    return (
        <div className="elementor-element elementor-element-7860adc e-flex e-con-boxed e-con e-parent section-padding bg-white" data-id="7860adc" data-element_type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner container-custom">
                <div className="elementor-element elementor-element-6c35afb elementor-widget elementor-widget-heading" data-id="6c35afb" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default text-3xl md:text-4xl font-bold mb-10 text-center">
                            Quando se houve falar do mercado de criptomoedas, dos poucos que sabem o que estão fazendo, temos dois perfis muito claros:
                        </h2>
                    </div>
                </div>

                <div className="elementor-element elementor-element-59978340 e-con-full e-flex e-con e-child mb-12 items-center" data-id="59978340" data-element_type="container">
                    <div className="elementor-element elementor-element-54a6770c elementor-widget__width-initial elementor-widget elementor-widget-image order-1" data-id="54a6770c" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                            <Image
                                src="https://agencialab.com.br/wp-content/uploads/elementor/thumbs/LH-Workshop-Pool-de-Liquides-1-r63e8h4mtsej6h05ihdntdvw4anuvq0orzjrq5bb4c.png"
                                alt="LH - Workshop Pool de Liquides (1)"
                                title="LH – Workshop Pool de Liquides (1)"
                                width={500}
                                height={370}
                                className="mx-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="elementor-element elementor-element-2c1039a1 e-con-full e-flex e-con e-child order-2" data-id="2c1039a1" data-element_type="container">
                        <div className="elementor-element elementor-element-495a4437 elementor-widget elementor-widget-text-editor" data-id="495a4437" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <ul className="space-y-6">
                                    <li>
                                        <h3 className="text-xl font-bold mb-2"><b>Os traders – </b></h3>
                                        <p className="text-gray-700">
                                            <span style={{ fontWeight: 400 }}>que são os </span><i><span style={{ fontWeight: 400 }}>apostadores de BET </span></i><span style={{ fontWeight: 400 }}>do mercado. Pessoas que precisam de muito tempo analisando gráficos e precisam contar com muita técnica e uma boa dose de sorte. Nesse caso o ganho e as perdas costumam ser muito expressivos.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <h3 className="text-xl font-bold mb-2"><b>Os Holders – </b></h3>
                                        <p className="text-gray-700">
                                            <span style={{ fontWeight: 400 }}>que são pessoas que buscam a segurança do investimento imobiliário no mercado mais volátil do mundo. Estes investidores, por mais que consigam bons ativos, </span><span style={{ fontWeight: 400 }}>estão deixando muito dinheiro na mesa, todo santo dia.</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-46381084 elementor-widget elementor-widget-heading" data-id="46381084" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container bg-gradient-to-r from-gray-100 to-gray-200 p-6 md:p-8 rounded-lg">
                        <h2 className="elementor-heading-title elementor-size-default text-xl md:text-2xl font-medium leading-relaxed text-center">
                            Se você não tem o tempo e o coração saudável dos traders e não quer perder muito dinheiro todos os dias, você precisa conhecer o poder da terceira linha, conhecida como pool de liquidez baseada no protocolo hacks finance.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketSection; 