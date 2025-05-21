import React from 'react';
import Image from 'next/image';

const ContentSection: React.FC = () => {
  const scheduleItems = [
    {
      time: '09:00 - 10:30',
      title: 'Módulo 1: Descobrindo Seu Potencial',
      description: 'Identificação de forças pessoais e áreas de desenvolvimento'
    },
    {
      time: '10:45 - 12:15',
      title: 'Módulo 2: Superando Limitações',
      description: 'Técnicas para identificar e superar crenças limitantes'
    },
    {
      time: '13:30 - 15:00',
      title: 'Módulo 3: Definindo Metas Poderosas',
      description: 'Metodologia para estabelecer objetivos claros e alcançáveis'
    },
    {
      time: '15:15 - 16:45',
      title: 'Módulo 4: Plano de Ação',
      description: 'Desenvolvimento de estratégias práticas para implementação imediata'
    },
    {
      time: '17:00 - 17:30',
      title: 'Encerramento e Próximos Passos',
      description: 'Consolidação do aprendizado e orientações para continuidade'
    }
  ];

  return (
    <>
      {/* First Parent Container for "VEJA O QUE VOCÊ VAI APRENDER..." and 2-column content */}
      <div className="elementor-element elementor-element-66343924 e-flex e-con-boxed e-con e-parent section-padding bg-white dark:bg-gray-800" data-id="66343924" data-element_type="container" data-settings='{"background_background":"classic"}'>
        <div className="e-con-inner container-custom"> {/* Applied container-custom */}
          <div className="elementor-element elementor-element-1553b53b elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="1553b53b" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default text-3xl md:text-4xl font-bold mb-12 text-center">
                VEJA O QUE VOCÊ VAI APRENDER NESSE WORKSHOP
              </h2>
            </div>
          </div>

          {/* Container for Primeira Parte */}
          <div className="elementor-element elementor-element-33670c30 e-con-full e-flex e-con e-child mb-16" data-id="33670c30" data-element_type="container"> {/* md:grid-cols-2 equivalent */}
            {/* Image Widget (Primeira Parte) */}
            <div className="elementor-element elementor-element-6e19c801 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="6e19c801" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image
                  src="https://agencialab.com.br/wp-content/uploads/elementor/thumbs/LH-Leo-Hermoso-Quadrado-1080-x-1080-px-1-r63f8uht9keligv4q9xs27ub07c31u3ja0x2lici7u.png"
                  alt="LH - Leo Hermoso Quadrado (1080 x 1080 px) (1)"
                  title="LH – Leo Hermoso Quadrado (1080 x 1080 px) (1)"
                  width={280} // Original thumb size
                  height={280} // Original thumb size
                  className="" // Elementor handles image styling
                  loading="lazy"
                />
              </div>
            </div>
            {/* Text Container (Primeira Parte) */}
            <div className="elementor-element elementor-element-2ff9627d e-con-full e-flex e-con e-child mt-8 md:mt-0" data-id="2ff9627d" data-element_type="container" data-settings='{"background_background":"classic"}'>
              <div className="elementor-element elementor-element-60dfa676 elementor-widget elementor-widget-heading" data-id="60dfa676" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default text-2xl font-bold mb-4 text-blue-600">
                    Primeira Parte
                  </h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-49919bb7 elementor-widget elementor-widget-heading" data-id="49919bb7" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default text-xl font-semibold mb-6">
                    O que você vai aprender?
                  </h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-4b32daca elementor-widget elementor-widget-text-editor" data-id="4b32daca" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Lorem Ipsum</strong> <span style={{ fontWeight: 400 }}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Container for Segunda Parte */}
          <div className="elementor-element elementor-element-22a95c86 e-con-full e-flex e-con e-child mb-16" data-id="22a95c86" data-element_type="container">
            {/* Image Widget (Segunda Parte) */}
            <div className="elementor-element elementor-element-43523d36 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="43523d36" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image
                  src="https://agencialab.com.br/wp-content/uploads/elementor/thumbs/LH-Leo-Hermoso-Quadrado-1080-x-1080-px-2-r63f8wdhn8h65osefar177d86z2th8azya81k29pve.png"
                  alt="LH - Leo Hermoso Quadrado (1080 x 1080 px) (2)"
                  title="LH – Leo Hermoso Quadrado (1080 x 1080 px) (2)"
                  width={280} // Original thumb size
                  height={280} // Original thumb size
                  className="" // Elementor handles image styling
                  loading="lazy"
                />
              </div>
            </div>
            {/* Text Container (Segunda Parte) */}
            <div className="elementor-element elementor-element-6c88aa13 e-con-full e-flex e-con e-child mt-8 md:mt-0" data-id="6c88aa13" data-element_type="container" data-settings='{"background_background":"classic"}'>
              <div className="elementor-element elementor-element-14e94524 elementor-widget elementor-widget-heading" data-id="14e94524" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default text-2xl font-bold mb-4 text-blue-600">
                    Segunda Parte
                  </h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-63fbaa5e elementor-widget elementor-widget-heading" data-id="63fbaa5e" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default text-xl font-semibold mb-6">
                    O que você vai aprender?
                  </h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-105209e2 elementor-widget elementor-widget-text-editor" data-id="105209e2" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Lorem Ipsum</strong> <span style={{ fontWeight: 400 }}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Parent Container for "GARANTIA INCONDICIONAL" */}
      <div className="elementor-element elementor-element-6eea4de4 e-flex e-con-boxed e-con e-parent section-padding" data-id="6eea4de4" data-element_type="container" data-settings='{"background_background":"classic"}'>
        <div className="e-con-inner container-custom"> {/* Applied container-custom */}
          {/* Image Widget for Guarantee Seal */}
          <div className="elementor-element elementor-element-182dec22 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="182dec22" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Image
                src="https://agencialab.com.br/wp-content/uploads/2025/05/Image.svg"
                alt="Image.svg"
                title="Image.svg"
                width={150} /* Approximate from original, can be adjusted */
                height={150} /* Approximate from original, can be adjusted */
                className=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Container for Guarantee */}
          <div className="elementor-element elementor-element-7e73f5d8 e-con-full e-flex e-con e-child" data-id="7e73f5d8" data-element_type="container">
            <div className="elementor-element elementor-element-7de41af elementor-widget elementor-widget-heading" data-id="7de41af" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
                  GARANTIA INCONDICIONAL
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-72c2b731 elementor-widget elementor-widget-text-editor" data-id="72c2b731" data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  <span style={{ fontWeight: 400 }}>Ao garantir a sua vaga no workshop você recebe a garantia incondicional. Se ao final do evento você não estiver completamente satisfeito, basta entrar em contato conosco para ser 100% reembolsado.</span>
                </p>
              </div>
            </div>
            {/* Button from original HTML (elementor-element-5f60bd1e) for "QUERO MINHA VAGA" was here. */}
            {/* Your current component structure does not include it in ContentSection. */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
