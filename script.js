// --- Dados ---
const dados = {
    matematica: {
        D14: {
            description: "Identificar a localização de números reais na reta numérica",
            prompts: [
                "Crie um plano de aula para o tema 'Localização de números reais na reta numérica', para uma turma do 8º ano, com duração de 50 minutos. Inclua objetivos, conteúdos, recursos e avaliação.",
                "Me ajude a planejar uma aula introdutória criativa para o tema 'Localização de números reais na reta numérica'.",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Localização de números reais na reta numérica', usando exemplos como mapas e escalas.",
                "Ajude-me a montar um jogo educativo para revisar o conteúdo 'Localização de números reais na reta numérica'.",
                "Sugira aplicativos gratuitos que podem ser usados para ensinar o tema 'Localização de números reais na reta numérica'."
            ],
            games: [
                "The Number Line Game em ABCya! - https://www.abcya.com/",
                "Number Sense em SplashLearn - https://www.splashlearn.com/"
            ]
        },
        D16: {
            description: "Resolver problema envolvendo porcentagem",
            prompts: [
                "Me ajude a planejar uma aula que tenha 10 minutos iniciais de introdução, 30 minutos de atividade prática e 10 minutos ﬁnais para revisão do tema 'Porcentagem'.",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Porcentagem', utilizando situações como descontos e acréscimos em compras.",
                "Sugira 3 exercícios práticos para que os alunos pratiquem o tema 'Porcentagem'.",
                "Crie uma estrutura de aula invertida para o tema 'Porcentagem', incluindo o que os alunos devem estudar antes e como vamos trabalhar em classe.",
                "Me ajude a planejar uma aula que utilize recursos digitais para tornar o tema 'Porcentagem' mais interativo."
            ],
            games: [
                "Percentages and Decimals em Coolmath Games - https://www.coolmathgames.com/",
                "Shopping at the Mall em Math Playground - https://www.mathplayground.com/"
            ]
        },
        D21: {
            description: "Reconhecer as diferentes representações de um número racional",
            prompts: [
                "Crie um esquema resumido do que preciso abordar na aula sobre 'Representação de um número racional', destacando pontos principais e palavras-chave.",
                "Sugira 3 formas diferentes de introduzir o tema 'Representação de um número racional' para prender a atenção da turma.",
                "Crie uma atividade lúdica para ensinar o conteúdo 'Representação de um número racional'.",
                "Ajude-me a montar um jogo educativo para revisar o conteúdo 'Representação de um número racional', focando na equivalência entre frações, decimais e porcentagens.",
                "Elabore uma atividade que incentive os alunos a criarem um infográfico sobre o tema 'Representação de um número racional'."
            ],
            games: [
                "Snakes & Ladders (Cobras e Escadas) - https://tabletopia.com/",
                "Go - https://tabletopia.com/",
                "Race to Infinity - https://tabletopia.com/"
            ]
        },
        D15: {
            description: "Resolver problema que envolva variação proporcional, direta ou inversa, entre grandezas.",
            prompts: [
                "Crie um roteiro para uma sequência didática de 3 aulas sobre o tema 'Proporcionalidade'.",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Variação proporcional', usando exemplos do dia a dia.",
                "Me ajude a organizar uma aula que tenha 10 minutos iniciais de introdução, 30 minutos de atividade prática e 10 minutos ﬁnais para revisão do tema 'Proporcionalidade'.",
                "Elabore uma lista de exercícios simples que aumentam gradualmente a dificuldade sobre o tema 'Proporcionalidade'.",
                "Sugira uma atividade prática que relacione o tema 'Variação proporcional' com o dia a dia dos alunos, como receitas ou conversão de moedas."
            ],
            games: [
                "Stockpile - https://tabletopia.com/",
                "Codenames - https://tabletopia.com/"
            ]
        },
        D6: {
            description: "Identificar a localização de pontos no plano cartesiano",
            prompts: [
                "Me ajude a planejar uma aula introdutória criativa para o tema 'Plano Cartesiano'.",
                "Crie um plano de aula que inclua uma atividade inicial lúdica para o tema 'Plano Cartesiano', como uma caça ao tesouro em sala de aula.",
                "Sugira 3 exercícios práticos para que os alunos pratiquem o tema 'Localização de pontos no plano cartesiano'.",
                "Me ajude a montar um jogo educativo para revisar o conteúdo 'Plano Cartesiano', como um jogo da batalha naval.",
                "Ajude-me a elaborar uma ficha de exercícios que incluam imagens e questões sobre o tema 'Plano Cartesiano'."
            ],
            games: [
                "Santorini - https://tabletopia.com/",
                "Chess - https://tabletopia.com/"
            ]
        },
        "D35/D34": {
            description: "Associar informações apresentadas em listas e/ou tabela simples aos gráficos que as representam, e vice-versa. Resolver problema envolvendo informações apresentadas em tabelas e/ou gráficos",
            prompts: [
                "Crie um plano de aula para o tema 'Interpretação de gráficos e tabelas', para uma turma do 9º ano.",
                "Sugira 3 formas diferentes de introduzir o tema 'Análise de gráficos e tabelas' para prender a atenção da turma.",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Interpretação de gráficos e tabelas', usando dados reais de jornais ou sites.",
                "Elabore uma atividade em grupo que envolva pesquisa e apresentação sobre o tema 'Gráficos e tabelas'.",
                "Me ajude a planejar uma aula que utilize recursos digitais para tornar o tema 'Gráficos e tabelas' mais interativo, usando planilhas digitais, por exemplo."
            ],
            games: [
                "Fuzz Bugs Graphing em ABCya! - https://www.abcya.com/",
                "Interpreting Graphs em SplashLearn - https://www.splashlearn.com/",
                "Railroad Ink - https://tabletopia.com/",
                "Wingspan - https://tabletopia.com/"
            ]
        },
        D33: {
            description: "Calcular a probabilidade de um evento.",
            prompts: [
                "Ajude-me a deﬁnir objetivos de aprendizagem claros para a aula sobre 'Cálculo de probabilidade'.",
                "Me ajude a planejar uma aula que tenha 10 minutos iniciais de introdução, 30 minutos de atividade prática e 10 minutos ﬁnais para revisão do tema 'Cálculo de probabilidade'.",
                "Crie um roteiro para uma atividade colaborativa sobre o tema 'Probabilidade', usando dados, moedas ou jogos de cartas.",
                "Crie um enigma para os alunos resolverem que esteja relacionado ao tema 'Probabilidade'.",
                "Me ajude a montar um jogo educativo para revisar o conteúdo 'Probabilidade'."
            ],
            games: [
                "Love Letter - https://tabletopia.com/",
                "Race to Infinity - https://tabletopia.com/"
            ]
        },
        "D11/D67": {
            description: "Resolver problema envolvendo o cálculo de perímetro de figuras planas. Resolver problema envolvendo o cálculo da área de figuras planas.",
            prompts: [
                "Crie um roteiro para uma sequência didática de 3 aulas sobre o tema 'Perímetro e área de figuras planas'.",
                "Me ajude a planejar uma aula introdutória criativa para o tema 'Área de figuras planas'.",
                "Quais recursos e materiais preciso para lecionar o conteúdo 'Perímetro e área de figuras planas' de forma dinâmica?",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Perímetro e área de figuras planas'.",
                "Sugira uma atividade prática que relacione o tema 'Perímetro e área de figuras planas' com o dia a dia dos alunos, como medir e calcular a área de um cômodo da sala de aula."
            ],
            games: [
                "Area and Perimeter em Turtle Diary - https://www.turtlediary.com/",
                "Shape Surveyor em Funbrain - https://www.funbrain.com/",
                "Area and Perimeter with Dino em SplashLearn - https://www.splashlearn.com/",
                "Area Climber em Math Playground - https://www.mathplayground.com/",
                "Area & Perimeter em Khan Academy - https://pt.khanacademy.org/"
            ]
        },
        D13: {
            description: "Resolver problema envolvendo a área total e/ou volume de um sólido (prisma, pirâmide, cilindro, cone, esfera).",
            prompts: [
                "Ajude-me a deﬁnir objetivos de aprendizagem claros para a aula sobre 'Área total e volume de sólidos'.",
                "Crie um roteiro para a aula que inclua uma atividade colaborativa sobre o tema 'Volume de sólidos'.",
                "Me ajude a planejar uma aula que trabalhe a interdisciplinaridade entre 'Volume de sólidos' e 'Química', como em experimentos de densidade.",
                "Sugira 3 atividades práticas para que os alunos apliquem o conhecimento sobre o tema 'Volume de sólidos'.",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Área total e volume de sólidos', como o cálculo do volume de uma piscina ou de uma caixa d'água."
            ],
            games: [
                "Cartographers - https://tabletopia.com/",
                "Santorini - https://tabletopia.com/",
                "Go - https://tabletopia.com/"
            ]
        }
    },
    portugues: {
        D1: {
            description: "Localizar informações explícitas em um texto.",
            prompts: [
                "Crie um plano de aula para o tema 'Leitura e localização de informações em textos', para uma turma do 5º ano, com duração de 50 minutos.",
                "Sugira uma atividade inicial para engajar os alunos no conteúdo 'Localização de informações em textos', usando um texto de fácil leitura.",
                "Crie uma lista de problemas contextualizados que envolvam o tema 'Localização de informações explícitas', usando textos como manuais de instrução ou receitas.",
                "Crie 10 questões objetivas para um teste sobre o tema 'Localização de informações em textos' para a turma do 5º ano.",
                "Me ajude a montar um jogo da memória com conceitos e definições do tema 'Leitura de informações explícitas'."
            ],
            games: [
                "Acerte o Gênero Textual em https://www.escolagames.com.br",
                "Contos e Fábulas em https://www.smartkids.com.br",
                "Língua Portuguesa em http://www.mundodoguri.com.br"
            ]
        },
        D3: {
            description: "Inferir o sentido de uma palavra ou expressão.",
            prompts: [
                "Me ajude a planejar uma aula introdutória criativa para o tema 'Inferência do sentido de palavras e expressões'.",
                "Sugira 3 formas diferentes de introduzir o tema 'Inferência do sentido de palavras ou expressões' para prender a atenção da turma.",
                "Crie um enigma para os alunos resolverem que esteja relacionado ao tema 'Inferência de sentido de palavras'.",
                "Crie uma lista de exercícios simples que aumentam gradualmente a dificuldade sobre o tema 'Inferência do sentido de palavras'.",
                "Ajude-me a montar um jogo educativo para revisar o conteúdo 'Inferência de sentido de palavras e expressões'."
            ],
            games: [
                "Acerte o Gênero Textual em https://www.escolagames.com.br",
                "Contos e Fábulas em https://www.smartkids.com.br",
                "Língua Portuguesa em http://www.mundodoguri.com.br"
            ]
        },
        D4: {
            description: "Inferir uma informação implícita em um texto.",
            prompts: [
                "Crie um plano de aula para o tema 'Inferência de informações implícitas', para uma turma do 6º ano, com duração de 50 minutos.",
                "Me ajude a planejar uma aula que tenha momento para debate e reflexão sobre o tema 'Informações implícitas' em um texto.",
                "Sugira 3 exercícios práticos para que os alunos pratiquem o tema 'Inferência de informações implícitas'.",
                "Crie um esquema resumido do que preciso abordar na aula sobre 'Inferência de informações implícitas', destacando pontos principais e palavras-chave.",
                "Me ajude a criar um exercício que estimule o pensamento crítico sobre o tema 'Informações implícitas'."
            ],
            games: [
                "Acerte o Gênero Textual em https://www.escolagames.com.br",
                "Contos e Fábulas em https://www.smartkids.com.br",
                "Língua Portuguesa em http://www.mundodoguri.com.br"
            ]
        },
        D6: {
            description: "Identificar o tema de um texto.",
            prompts: [
                "Ajude-me a definir objetivos de aprendizagem claros para a aula sobre 'Identificação do tema de um texto'.",
                "Me ajude a organizar uma aula que tenha 10 minutos iniciais de introdução, 30 minutos de atividade prática e 10 minutos finais para revisão do tema 'Identificação do tema central'.",
                "Sugira uma atividade inicial para engajar os alunos no conteúdo 'Identificação do tema de um texto'.",
                "Desenvolva uma atividade para que os alunos criem um mapa mental sobre o tema 'Identificação do tema de um texto'.",
                "Me ajude a montar um exercício para que os alunos resumam o tema 'Identificação do tema de um texto' com suas próprias palavras."
            ],
            games: [
                "Acerte o Gênero Textual em https://www.escolagames.com.br",
                "Contos e Fábulas em https://www.smartkids.com.br",
                "Língua Portuguesa em http://www.mundodoguri.com.br"
            ]
        },
        D14: {
            description: "Distinguir um fato da opinião relativa a esse fato.",
            prompts: [
                "Me ajude a planejar uma aula introdutória criativa para o tema 'Fato e opinião'.",
                "Crie uma proposta de debate para a turma sobre o tema 'Fato vs. Opinião', incluindo questões orientadoras.",
                "Elabore 5 questões dissertativas que estimulem a reflexão sobre o tema 'Fato e opinião'.",
                "Crie uma atividade para que os alunos identifiquem erros comuns sobre o tema 'Fato e opinião' e os corrijam.",
                "Ajude-me a elaborar uma atividade em que os alunos criem um painel com imagens e palavras-chave sobre o tema 'Fato e Opinião'."
            ],
            games: [
                "Jogos em https://www.escolagames.com.br"
            ]
        },
        "D05": {
            description: "Interpretar texto com auxílio de material gráfico diverso (propagandas, quadrinhos, fotos etc.).",
            prompts: [
                "Crie um plano de aula para o tema 'Interpretação de textos gráficos', com foco em propagandas e quadrinhos.",
                "Me ajude a planejar uma aula que trabalhe a interdisciplinaridade entre 'Interpretação de texto com material gráfico' e 'Artes'.",
                "Sugira uma atividade prática que relacione o tema 'Interpretação de textos gráficos' com o dia a dia dos alunos, usando publicidades de revistas ou da internet.",
                "Elabore uma atividade para que os alunos criem um cartaz explicativo sobre o tema 'Interpretação de textos gráficos'.",
                "Crie uma proposta para que os alunos analisem uma música, imagem ou vídeo relacionado ao tema 'Textos gráficos'."
            ],
            games: [
                "Caça-Palavras com Imagens em https://www.escolagames.com.br",
                "Jogos em https://www.smartkids.com.br",
                "Jogos de 'Memória' em http://www.mundodoguri.com.br"
            ]
        },
        D12: {
            description: "Identificar a finalidade de textos de diferentes gêneros.",
            prompts: [
                "Ajude-me a definir objetivos de aprendizagem claros para a aula sobre 'Finalidade dos gêneros textuais'.",
                "Me ajude a organizar o conteúdo 'Gêneros textuais' em etapas simples que os alunos consigam acompanhar facilmente.",
                "Crie um esquema resumido do que preciso abordar na aula sobre 'Finalidade dos gêneros textuais', destacando tipos de texto e seus objetivos.",
                "Me ajude a criar um quiz interativo para a revisão do tema 'Finalidade de textos'.",
                "Crie uma proposta de trabalho em duplas para o tema 'Gêneros textuais', com instruções claras para que os alunos identifiquem a finalidade de diferentes textos."
            ],
            games: [
                "Jogos em https://www.escolagames.com.br",
                "Jogos de 'Memória' em http://www.mundodoguri.com.br"
            ]
        },
        D20: {
            description: "Reconhecer diferentes formas de tratar uma informação na comparação de textos que abordam o mesmo tema, em função das condições em que ele foi produzido e daquelas em que será recebido.",
            prompts: [
                "Me ajude a planejar uma sequência didática que prepare os alunos para a prova sobre o tema 'Comparação de textos'.",
                "Me ajude a planejar uma aula que tenha momento para debate e reflexão sobre o tema 'Comparação de textos sobre o mesmo fato'.",
                "Crie uma proposta de debate para a turma sobre o tema 'Comparação de textos que abordam o mesmo tema'.",
                "Elabore uma atividade em grupo que envolva pesquisa e apresentação sobre o tema 'Comparação de textos'.",
                "Sugira uma atividade em que os alunos criem perguntas sobre o tema 'Diferentes formas de tratar a informação' para os colegas responderem."
            ],
            games: [
                "Jogos em https://www.escolagames.com.br"
            ]
        },
        D21: {
            description: "Reconhecer posições distintas entre duas ou mais opiniões relativas ao mesmo fato ou ao mesmo tema.",
            prompts: [
                "Ajude-me a planejar uma aula que estimule a participação ativa dos alunos sobre o tema 'Reconhecer posições distintas'.",
                "Me ajude a planejar uma aula que tenha momento para debate e reflexão sobre o tema 'Opiniões distintas sobre o mesmo tema'.",
                "Crie uma proposta de trabalho em duplas para o tema 'Opiniões distintas sobre um tema', com instruções claras.",
                "Crie uma lista de questões reflexivas para que os alunos discutam em pequenos grupos sobre o tema 'Ponto de vista'.",
                "Me ajude a criar um exercício que estimule o pensamento crítico sobre o tema 'Posições distintas'."
            ],
            games: [
                "Jogos em https://www.escolagames.com.br",
                "Passatempos em https://www.smartkids.com.br"
            ]
        },
        D13: {
            description: "Identificar as marcas linguísticas que evidenciam o locutor e o interlocutor de um texto.",
            prompts: [
                "Ajude-me a definir objetivos de aprendizagem claros para a aula sobre 'Marcas linguísticas de locutor e interlocutor'.",
                "Crie um esquema resumido do que preciso abordar na aula sobre 'Marcas linguísticas', destacando pontos principais e palavras-chave.",
                "Me ajude a montar um jogo educativo para revisar o conteúdo 'Identificação de locutor e interlocutor'.",
                "Elabore uma atividade para que os alunos criem uma história em quadrinhos sobre o tema 'Locutor e interlocutor'.",
                "Me ajude a montar uma atividade de dramatização que explore o tema 'Marcas linguísticas de locutor e interlocutor'."
            ],
            games: [
                "Jogos em https://www.escolagames.com.br",
                "Jogos em https://www.smartkids.com.br"
            ]
        }
    }
};

// --- Lógica da Aplicação ---
document.addEventListener('DOMContentLoaded', () => {
    const descritoresContainer = document.getElementById('descritoresContainer');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeButton = document.getElementById('closeButton');

    // Identifica a disciplina a partir do atributo 'data-subject' no corpo da página
    const subject = document.body.dataset.subject;
    if (descritoresContainer && subject) {
        renderizarDescritores();
    }

    function renderizarDescritores(filtro = '') {
        descritoresContainer.innerHTML = '';
        const descritoresParaRenderizar = dados[subject];

        for (const codigo in descritoresParaRenderizar) {
            if (codigo.toLowerCase().includes(filtro.toLowerCase()) || descritoresParaRenderizar[codigo].description.toLowerCase().includes(filtro.toLowerCase())) {
                const descritor = descritoresParaRenderizar[codigo];
                const card = document.createElement('div');
                card.className = 'descritor-card';
                card.innerHTML = `
                    <h3>${codigo}</h3>
                    <p>${descritor.description}</p>
                    <div class="button-group">
                        <button class="btn prompts" data-codigo="${codigo}" data-tipo="prompts">Prompts</button>
                        <button class="btn games" data-codigo="${codigo}" data-tipo="games">Games</button>
                    </div>
                `;
                descritoresContainer.appendChild(card);
            }
        }
    }

    function mostrarModal(codigo, tipo) {
        const descritor = dados[subject][codigo];
        modalTitle.textContent = `${codigo} - ${tipo === 'prompts' ? 'Prompts' : 'Games'}`;
        modalBody.innerHTML = '';

        const lista = descritor[tipo];
        const ul = document.createElement('ul');
        lista.forEach(item => {
            const li = document.createElement('li');
            const urlMatch = item.match(/(https?:\/\/[^\s]+)/);
            if (urlMatch) {
                const url = urlMatch[0];
                const text = item.replace(url, '').trim();
                li.innerHTML = `${text} <a href="${url}" target="_blank">${url}</a>`;
            } else {
                li.textContent = item;
            }
            ul.appendChild(li);
        });
        modalBody.appendChild(ul);
        modal.style.display = 'flex';
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderizarDescritores(e.target.value);
        });
    }

    if (descritoresContainer) {
        descritoresContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                const codigo = e.target.dataset.codigo;
                const tipo = e.target.dataset.tipo;
                mostrarModal(codigo, tipo);
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});