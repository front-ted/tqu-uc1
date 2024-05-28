var estruturageral = {
    mensagemfinal: {
        positiva:{
           texto: [
                "Parabéns, você concluiu com sucesso o quiz sobre PDCA e MASP!", "Esperamos que essa experiência tenha sido enriquecedora para o seu entendimento e que seja mais um passo em direção ao aprimoramento contínuo.", "Que bom que você participou! Até a próxima oportunidade de aprendizado."
            ],
            
        },
        negativa:{
            texto: [
                "Nossa, foi por pouco!",
                "É sempre uma boa ideia tentar novamente.",
                "Para recomeçar, basta clicar ou tocar no botão abaixo.."
            ],
         
        }
        
    },
    introducao: { // Se introducao = false não abre a modal com a introducao. Se tiver conteúdo, abre com o conteúdo no padrão abaixo
        texto: [
            "Sejam bem-vindos ao <em>quiz</em> sobre o PDCA (<em>plan</em>, <em>do</em>, <em>check</em>, <em>act</em>, ou, em português, planejar, executar, verificar, agir) e MASP (método de análise e solução de problemas)! Este é um desafio educativo para testar seus conhecimentos sobre essas metodologias de gestão, que são fundamentais para aprimorar a eficiência organizacional e encontrar soluções eficazes para desafios organizacionais.",
            "Antes de começar, lembre-se de ler cuidadosamente cada pergunta e escolher a opção que você acredita ser a correta. Após responder, você receberá <em>feedbacks</em> positivos para acertos e construtivos para erros, de modo a ajudar no seu aprendizado.",
            "Sem mais delongas, boa sorte e aproveite o <em>quiz</em>!"
        ],
        // imagem: {
        //     src: "",
        //     title: "",
        //     alt:"",
        //     fonte: ""
        // },
    },
    config: {
        acertos_para_vitoria: 12, // 0 = >50% de acertos.
        globalType: "quiz" // caso as perguntas não possuam type, será definido um padrão. (globalType = "") = "quiz"
        // permitirApenas: 0; 0 = todas. Caso o usuário coloque um número como 10, por exemplo, o quiz vai exibir apenas 10 perguntas, mesmo que tenha 11 ou 1000 perguntas.
        // modo = 0; 0 ou "ordenado" significa uma pergunta após a outra. "inverso" ele começa pela última e "aleatorio" ele embaralha, tornando a ordem das perguntas aleatória.
    }
}


var lista_feedbacks_genericos = {

    positivo: ["Muito bem! Você acertou", "É isso mesmo, você está certo."],
    negativo: ["Quase lá! Mas não é esta a resposta correta.", "<em>Oops</em>, não é bem isso."]

}


var perguntas = [
    { 

        titulo: "Questão 1",
        pergunta: {
            texto: "Qual é a etapa do PDCA que envolve a análise dos resultados obtidos após a implementação das ações corretivas?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "P (planejar)",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "D (executar)",
            },
            {

                ordem: "c",
                validacao: true,
                texto: "C (verificar)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "A (agir)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: "Parabéns! Resposta correta. A etapa C (verificar) no PDCA é responsável por analisar os resultados obtidos após a implementação das ações corretivas. Essa fase é crucial para avaliar a eficácia das mudanças realizadas."
                },
            negativo: {
                    texto: "<em>Oops</em>! Opção errada. Nessa etapa não há análise de resultados e não será possível garantir que as ações corretivas foram eficazes. Fique atento(a) às próximas questões."
                }
            
        }
    },
    { 
        
        titulo: "Questão 2",
        pergunta: {
            texto: "Qual é o objetivo da fase D (executar) no ciclo PDCA?"        
        },
        respostas: [
            {
                
                ordem: "a",
                validacao: false,
                texto: "Planejar e estabelecer metas.",
            },
            {
                
                ordem: "b",
                validacao: true,
                texto: "Implementar as ações planejadas.",
            },
            {
                
                ordem: "c",
                validacao: false,
                texto: "Monitorar os resultados alcançados.",
            },
            {
                
                ordem: "d",
                validacao: false,
                texto: "Avaliar os resultados obtidos e realizar ajustes necessários.",
            },
            
            
            
        ],
        feedbacks: {
            
            positivo: {
                // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                texto: "Excelente escolha! A fase D (executar) do PDCA é dedicada à implementação das ações planejadas. Isso envolve executar as mudanças necessárias para atingir as metas estabelecidas na fase P (planejamento)."
            },
            negativo: {
                texto: "<em>Oops</em>! Parece que houve um equívoco. Esse é o objetivo de outra fase no ciclo PDCA. Revise as etapas do ciclo PDCA em seu material de estudo e continue praticando para melhorar."
            }
            
        }
    },
    { 

        titulo: "Questão 3",
        pergunta: {
            texto: "Em qual etapa do PDCA ocorre identificação do problema, investigação de causas raízes, proposição e planejamento de soluções e definição de metas?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "D (executar)",
            },
            {

                ordem: "b",
                validacao: true,
                texto: "P (planejar)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "A (agir)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "C (verificar)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: "Parabéns! Você está no caminho certo. A fase P (planejar) no PDCA visa estabelecer objetivos e elaborar planos de ação para atingir esses objetivos. Essa etapa é crucial para o sucesso do ciclo."
                },
            negativo: {
                    texto: "Essa etapa não está relacionada a definições de objetivos e planos de ação. Continue estudando para aprimorar seus conhecimentos."
                }
            
        }
    },
    { 

        titulo: "Questão 4",
        pergunta: {
            texto: "Em qual etapa do PDCA atua-se sobre os desvios observados após a execução e verificação das ações? Nessa etapa também há o replanejamento das ações de melhoria e reinício do PDCA, caso necessário."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "C (verificar)",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "D (executar)",
            },
            {

                ordem: "c",
                validacao: true,
                texto: "A (agir)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "P (planejar)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: "Parabéns! Você está realmente entendendo o PDCA. É na fase A (agir) que se atua sobre os desvios observados após a execução e verificação das ações. É nela que ocorre a análise dos resultados, o replanejamento das ações de melhoria e o possível reinício do ciclo PDCA. Ótimo trabalho!"
                },
            negativo: {
                    texto: "<em>Oops</em>! Parece que houve um equívoco. Não é nessa etapa que se atua sobre os desvios observados após a execução e verificação das ações. Continue estudando para fortalecer seu entendimento sobre o PDCA."
                }
            
        }
    },
    { 

        titulo: "Questão 5",
        pergunta: {
            texto: "Qual é a primeira etapa do MASP, na qual são identificados problemas, oportunidades de melhoria ou desafios a serem enfrentados?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Plano de ação",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Verificação",
            },
            {

                ordem: "c",
                validacao: true,
                texto: "Identificação do problema",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "Análise de resultados",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Parabéns! A etapa inicial do MASP é a "identificação do problema", na qual são identificados problemas, oportunidades de melhoria ou desafios a serem enfrentados. Isso é crucial para iniciar o processo de solução.`
                },
            negativo: {
                    texto: "<em>Oops</em>! Resposta incorreta. Não é nessa etapa em que são identificados problemas, oportunidades de melhoria ou desafios a serem enfrentados. Continue praticando para aprimorar seu conhecimento sobre o MASP."
                }
            
        }
    },
    { 

        titulo: "Questão 6",
        pergunta: {
            texto: "Qual é a etapa do MASP em que se realiza uma investigação detalhada para compreender as causas fundamentais do problema identificado? "        
        },
        respostas: [
            {

                ordem: "a",
                validacao: true,
                texto: "3 (análise)",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "5 (ação)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "6 (verificação)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "7 (padronização)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Você acertou! Na etapa 3 (análise) do MASP, realiza-se uma investigação detalhada para compreender as causas do problema identificado. Isso é fundamental para uma solução eficaz.`
                },
            negativo: {
                    texto: "Parece que houve um equívoco. Não é nessa fase que se realiza uma investigação detalhada para compreender as causas do problema identificado. Continue praticando para aumentar seus conhecimentos sobre o MASP!"
                }
            
        }
    },
    { 

        titulo: "Questão 7",
        pergunta: {
            texto: "Em qual etapa do MASP são definidas as ações a serem tomadas para resolver as causas do problema identificado, incluindo a definição de responsabilidades e recursos necessários?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "5 (ação)",
            },
            {

                ordem: "b",
                validacao: true,
                texto: "4 (plano de ação)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "6 (verificação)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "3 (análise)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Excelente escolha! É na etapa de plano de ação no MASP que são definidas as ações a serem tomadas para resolver o problema identificado. Isso inclui a definição de responsabilidades e recursos necessários.`
                },
            negativo: {
                    texto: "Quase lá! Essa etapa do MASP tem outro objetivo. Continue se esforçando e fique atento(a) às próximas questões."
                }
            
        }
    },
    { 

        titulo: "Questão 8",
        pergunta: {
            texto: "Em qual etapa do MASP as ações planejadas são colocadas em prática para solucionar o problema identificado?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "6 (verificação)",
            },
            {

                ordem: "b",
                validacao: true,
                texto: "5 (ação)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "7 (padronização)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "8 (conclusão)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Muito bem! Resposta correta! É na etapa 5 (ação) que as ações planejadas são colocadas em prática para solucionar o problema identificado. Isso é fundamental para alcançar resultados efetivos.`
                },
            negativo: {
                    texto: "<em>Oops</em>! Essa etapa do MASP tem um objetivo diferente. Continue estudando para fortalecer seu conhecimento."
                }
            
        }
    },
    { 

        titulo: "Questão 9",
        pergunta: {
            texto: "Em qual etapa do MASP ocorre a avaliação dos resultados das ações implementadas para garantir que o problema foi resolvido de maneira satisfatória?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: true,
                texto: "6 (verificação)",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "8 (conclusão)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "3 (análise)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "7 (padronização)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Você acertou! Na etapa 6 (verificação) do MASP ocorre a avaliação dos resultados das ações implementadas para garantir que o problema foi resolvido de maneira satisfatória. Isso é crucial para a melhoria contínua.`
                },
            negativo: {
                    texto: "Que pena! A opção está incorreta. A avaliação dos resultados das ações implementadas para garantir que o problema ocorre em outra etapa do MASP. Continue estudando as etapas do MASP para aprimorar seu entendimento sobre o processo de melhoria contínua."
                }
            
        }
    },
    { 

        titulo: "Questão 10",
        pergunta: {
            texto: "Em qual etapa do MASP são estabelecidos padrões e procedimentos para evitar a recorrência do problema?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "6 (verificação)",
            },
            {

                ordem: "b",
                validacao: true,
                texto: "7 (padronização)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "8 (conclusão)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "2 (observação)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Muito bem! Você acertou! Na etapa 7 (padronização) do MASP são estabelecidos padrões e procedimentos para evitar a recorrência do problema. Isso é fundamental para garantir a consistência nas operações.`
                },
            negativo: {
                    texto: "<em>Oops</em>! Parece que houve um equívoco. Não é nessa etapa do MASP que são estabelecidos padrões e procedimentos para evitar a recorrência do problema. Continue estudando as etapas do MASP para aprimorar seu entendimento sobre o processo de melhoria contínua."
                }
            
        }
    },
    { 

        titulo: "Questão 11",
        pergunta: {
            texto: "Qual é a última etapa do MASP, na qual são revisados os resultados obtidos e as lições aprendidas durante todo o processo, documentando todo o processo para recuperação futura? "        
        },
        respostas: [
            {

                ordem: "a",
                validacao: true,
                texto: "Conclusão",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Verificação",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Implementação",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "Ação",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Excelente escolha! É na etapa de conclusão no MASP que são revisados os resultados obtidos e as lições aprendidas durante todo o processo. Isso é essencial para aprimorar futuras abordagens.`
                },
            negativo: {
                    texto: "<em>Oops</em>! Esse é o objetivo de outra etapa do MASP. Revise as etapas do MASP em seu material de estudo e continue praticando para melhorar!"
                }
            
        }
    },
    { 

        titulo: "Questão 12",
        pergunta: {
            texto: "Qual é a etapa do MASP que tem como objetivo investigar as características específicas do problema?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "1 (identificação do problema)",
            },
            {

                ordem: "b",
                validacao: true,
                texto: "2 (observação)",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "6 (verificação)",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "3 (análise)",
            },
           
       

        ],
        feedbacks: {
            
            positivo: {
                    // texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                    texto: `Excelente! Na etapa de observação do MASP, o objetivo é investigar as características específicas do problema, proporcionando uma compreensão mais detalhada para a análise posterior. Ótimo trabalho!`
                },
            negativo: {
                    texto: "<em>Oops</em>! Parece que você escolheu a opção errada. Essa etapa não tem como objetivo investigar as características específicas do problema. Fique atento(a) às próximas questões!"
                }
            
        }
    },
]


