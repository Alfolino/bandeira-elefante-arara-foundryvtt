const BANDEIRA_ID = "bandeira-elefante-arara";

const HABILIDADES_CATALOGO = [
  { categoria: "Gerais", habilidades: ["Acrobacia", "Cartografia", "Corrida", "Equitação", "Força física", "Medicina de campo", "Natação", "Prestidigitação"] },
  { categoria: "Silvestres", habilidades: ["Armadilhas", "Canoagem", "Comida silvestre", "Escalada", "Folclore", "Medicina natural", "Navegação terrestre", "Rastreamento"] },
  { categoria: "Armas", habilidades: ["Armas de arremesso", "Armas de corte", "Armas de fogo", "Armas de golpe", "Armas de haste", "Armas de sopro", "Armas mecânicas", "Arqueria", "Esgrima"] },
  { categoria: "Artes marciais", habilidades: ["Boxe", "Capoeira", "Luta livre"] },
  { categoria: "Sociais", habilidades: ["Barganha", "Oratória", "Persuasão"] },
  { categoria: "Militares e navais", habilidades: ["Artilharia", "Militar", "Náutica"] },
  { categoria: "Artesanatos", habilidades: ["Alfaiataria", "Ferraria", "Marcenaria", "Ourivesaria", "Sapataria", "Tanoaria"] },
  { categoria: "Artes", habilidades: ["Culinária", "Dança", "Desenho", "Entalhe", "Escultura", "Pintura", "Poesia", "Teatro", "Vocal"] },
  { categoria: "Instrumentos musicais", habilidades: ["Instrumentos de corda", "Instrumentos de corda e arco", "Instrumentos de embocadura", "Instrumentos de palheta", "Instrumentos de percussão", "Instrumentos de tecla"] },
  { categoria: "Outros ofícios", habilidades: ["Administração", "Agricultura", "Arquitetura", "Barbearia-cirurgia", "Carpintaria", "Comércio", "Condução de gado", "Contabilidade", "Engenharia", "Escriba", "Fabricação de flechas", "Pedraria"] },
  { categoria: "Estudos acadêmicos", habilidades: ["Astronomia", "Direito", "Filosofia", "Física", "Humanidades", "Matemática", "Medicina", "Teologia"] },
  { categoria: "Línguas", habilidades: [
    "Português", "Latim", "Espanhol", "Francês", "Árabe",
    { nome: "Tupi", nivelMaximo: 1 }, { nome: "Guarani", nivelMaximo: 1 },
    { nome: "Aimoré", nivelMaximo: 1 }, { nome: "Goitacá", nivelMaximo: 1 },
    { nome: "Maracá", nivelMaximo: 1 }, { nome: "Tremembé", nivelMaximo: 1 },
    { nome: "Evê", nivelMaximo: 1 }, { nome: "Fon", nivelMaximo: 1 },
    { nome: "Ioruba", nivelMaximo: 1 }, { nome: "Quicongo", nivelMaximo: 1 },
    { nome: "Quimbundo", nivelMaximo: 1 }, { nome: "Umbundo", nivelMaximo: 1 }
  ] },
  { categoria: "Magia e milagres", habilidades: ["Fé", "Fôlego", "Ifá"] }
];

const HABILIDADES_PLANAS = HABILIDADES_CATALOGO.flatMap(grupo =>
  grupo.habilidades.map(habilidade => ({
    nome: typeof habilidade === "string" ? habilidade : habilidade.nome,
    categoria: grupo.categoria,
    nivelMaximo: typeof habilidade === "string" ? 3 : habilidade.nivelMaximo
  }))
);

const ARMAS_CATALOGO = [
  { nome: "Adaga", tipoHabilidade: "Armas de corte", maos: "1", alcance: "Corpo a corpo", dano: 1, recarga: "", notas: "" },
  { nome: "Alabarda", tipoHabilidade: "Armas de haste", maos: "2", alcance: "Corpo a corpo", dano: 2, forcaBonus: true, recarga: "", notas: "Exige Força física 1; dano 3 com Força física 3." },
  { nome: "Alfanje", tipoHabilidade: "Armas de corte", maos: "1", alcance: "Corpo a corpo", dano: 2, recarga: "", notas: "" },
  { nome: "Arco e flecha", tipoHabilidade: "Arqueria", maos: "2", alcance: "Longa distância", dano: 1, recarga: "", notas: "" },
  { nome: "Arcabuz", tipoHabilidade: "Armas de fogo", maos: "2", alcance: "Longa distância", dano: 3, recarga: "1 rodada", notas: "Uma rodada para recarregar entre tiros." },
  { nome: "Besta", tipoHabilidade: "Armas mecânicas", maos: "2", alcance: "Longa distância", dano: 2, recarga: "1 rodada", notas: "Uma rodada para recarregar entre tiros." },
  { nome: "Chute", tipoHabilidade: "Capoeira", maos: "0", alcance: "Corpo a corpo", dano: 1, recarga: "", notas: "Ataque desarmado com Capoeira; causa 1 ponto de dano." },
  { nome: "Espada de lâmina larga", tipoHabilidade: "Armas de corte", maos: "2", alcance: "Corpo a corpo", dano: 2, forcaBonus: true, recarga: "", notas: "Exige Força física 1; dano 3 com Força física 3." },
  { nome: "Faca", tipoHabilidade: "Armas de corte", maos: "1", alcance: "Corpo a corpo", dano: 1, recarga: "", notas: "" },
  { nome: "Faca de arremesso", tipoHabilidade: "Armas de arremesso", maos: "1 (arremessar) / 1 (esfaquear)", alcance: "Curta distância ou corpo a corpo", dano: 1, recarga: "", notas: "No corpo a corpo, utiliza Armas de corte." },
  { nome: "Lança", tipoHabilidade: "Armas de arremesso", maos: "1 (arremessar) / 2 (estocar)", alcance: "Média distância ou corpo a corpo", dano: 2, recarga: "", notas: "No corpo a corpo, utiliza Armas de haste." },
  { nome: "Machado de arremesso", tipoHabilidade: "Armas de arremesso", maos: "1 (arremessar) / 1 (cortar)", alcance: "Curta distância ou corpo a corpo", dano: 2, recarga: "", notas: "No corpo a corpo, utiliza Armas de golpe." },
  { nome: "Machado de guerra", tipoHabilidade: "Armas de golpe", maos: "2", alcance: "Corpo a corpo", dano: 2, forcaBonus: true, recarga: "", notas: "Exige Força física 1; dano 3 com Força física 3." },
  { nome: "Machete", tipoHabilidade: "Armas de corte", maos: "1", alcance: "Corpo a corpo", dano: 1, recarga: "", notas: "" },
  { nome: "Martelo de guerra", tipoHabilidade: "Armas de golpe", maos: "2", alcance: "Corpo a corpo", dano: 2, forcaBonus: true, recarga: "", notas: "Exige Força física 1; dano 3 com Força física 3." },
  { nome: "Martelo de Lucerne", tipoHabilidade: "Armas de haste", maos: "2", alcance: "Corpo a corpo", dano: 2, forcaBonus: true, recarga: "", notas: "Exige Força física 1; dano 3 com Força física 3." },
  { nome: "Mosquete", tipoHabilidade: "Armas de fogo", maos: "2 + forquilha", alcance: "Longa distância", dano: 4, recarga: "2 rodadas", notas: "Uma rodada de preparação antes do primeiro tiro; duas rodadas para recarregar." },
  { nome: "Pique", tipoHabilidade: "Armas de haste", maos: "2", alcance: "Corpo a corpo", dano: 2, recarga: "", notas: "" },
  { nome: "Pistola", tipoHabilidade: "Armas de fogo", maos: "1", alcance: "Média distância", dano: 2, recarga: "1 rodada", notas: "Uma rodada para recarregar entre tiros." },
  { nome: "Porrete", tipoHabilidade: "Armas de golpe", maos: "1", alcance: "Corpo a corpo", dano: 2, recarga: "", notas: "" },
  { nome: "Rapieira", tipoHabilidade: "Esgrima", maos: "1", alcance: "Corpo a corpo", dano: 2, recarga: "", notas: "" },
  { nome: "Soco", tipoHabilidade: "Boxe", maos: "0", alcance: "Corpo a corpo", dano: 1, recarga: "", notas: "Ataque desarmado com Boxe; causa 1 ponto de dano." },
  { nome: "Zarabatana", tipoHabilidade: "Armas de sopro", maos: "2", alcance: "Média distância", dano: 1, recarga: "", notas: "" }
].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

const PODERES_CATALOGO = {
  fe: ["Acontecimentos milagrosos", "Bênção", "Defesa contra magia", "Pão de cada dia", "Profecia", "Proteção contra o mal", "Recuperação"],
  folego_bem: ["Cura", "Defesa", "Vida"],
  folego_mal: ["Dano", "Fraqueza", "Morte"],
  folego_neutro: ["Contra magia", "Controle da natureza", "Mundo espiritual", "Tempo"],
  ifa: ["Detecção", "Energia negativa", "Influência", "Manuseio espiritual", "Proteção", "Saúde", "Sorte"]
};

const CAMINHOS_SOBRENATURAIS = {
  fe: { nome: "Fé", habilidade: "Fé" },
  folego: { nome: "Fôlego", habilidade: "Fôlego" },
  ifa: { nome: "Ifá", habilidade: "Ifá" }
};

const seedCreatureCompendium = async () => {
  if (!game.user?.isGM) return;

  const pack = game.packs.get(`${BANDEIRA_ID}.criaturas`);
  if (!pack) return;

  try {
    const response = await fetch(`systems/${BANDEIRA_ID}/data/criaturas.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const creatures = await response.json();
    await pack.getIndex({ fields: ["name"] });

    const existing = new Set(pack.index.map(entry => entry.name));
    const documents = creatures
      .filter(creature => creature?.name && !existing.has(creature.name))
      .map(creature => ({
        name: creature.name,
        type: "criatura",
        img: creature.img || "icons/svg/mystery-man.svg",
        prototypeToken: {
          name: creature.name,
          actorLink: false,
          disposition: -1,
          displayName: CONST.TOKEN_DISPLAY_MODES?.ALWAYS ?? 50
        },
        system: {
          tamanho: "H",
          movimento: 3,
          habitat: "",
          numero: "1",
          descricao: "",
          resistencia: 10,
          dano: 0,
          modoEdicao: false,
          defesaPassiva: 0,
          defesaAtiva: 0,
          habilidades: [],
          ataques: [],
          especial: "",
          ...(creature.system || {})
        },
        flags: {
          [BANDEIRA_ID]: {
            compendiumSeed: true
          }
        }
      }));

    if (!documents.length) return;

    const wasLocked = pack.locked;
    if (wasLocked && typeof pack.configure === "function") await pack.configure({ locked: false });
    await Actor.createDocuments(documents, { pack: pack.collection });
    if (wasLocked && typeof pack.configure === "function") await pack.configure({ locked: true });

  } catch (error) {
    console.warn(`${BANDEIRA_ID} | Não foi possível popular o compêndio de criaturas.`, error);
  }
};

const PODERES_DETALHES = {
  "Acontecimentos milagrosos": { descricao: "Intervenções divinas que alteram circunstâncias naturais ou oferecem ajuda inesperada.", efeitos: [
    { nome: "Estender o clima", descricao: "Segura chuva ou outro fenômeno natural por até quatro horas, permitindo que o grupo encontre abrigo." },
    { nome: "Estender o dia", descricao: "Durante uma viagem, o personagem e seu grupo percorrem o dobro da distância normal naquele dia." },
    { nome: "Divina coincidência", descricao: "Uma ajuda inesperada, definida pelo mediador, surge em até 24 horas para atender uma grande necessidade." }
  ]},
  "Bênção": { descricao: "Abençoa um ser ou objeto até o próximo amanhecer; cada alvo só pode receber uma Bênção por dia.", efeitos: [
    { nome: "Abençoar +1", descricao: "O ser ou objeto recebe +1 em seus testes até o próximo amanhecer." },
    { nome: "Abençoar +2", descricao: "O ser ou objeto recebe +2 em seus testes até o próximo amanhecer." },
    { nome: "Abençoar +3", descricao: "O ser ou objeto recebe +3 em seus testes até o próximo amanhecer." }
  ]},
  "Defesa contra magia": { descricao: "Protege contra poderes de pajés, seguidores de Ifá, itens mágicos e seres encantados, mas não contra graças divinas.", efeitos: [
    { nome: "Sentir magia", descricao: "Detecta efeitos mágicos em um raio de 30 varas (33 m) durante uma hora." },
    { nome: "Proteção contra magia", descricao: "Protege o próprio personagem contra poderes mágicos durante uma hora." },
    { nome: "Dissipar magia", descricao: "Anula um efeito mágico já conjurado ou interrompe uma conjuração em um raio de 10 varas (11 m)." }
  ]},
  "Pão de cada dia": { descricao: "Graças relacionadas à recuperação, obtenção e multiplicação de alimentos.", efeitos: [
    { nome: "Restaurar alimentação", descricao: "Torna novamente comestível uma comida ou bebida estragada." },
    { nome: "Encontrar alimentação", descricao: "Após uma busca de até duas horas, encontra comida e bebida suficientes para uma pessoa." },
    { nome: "Multiplicar alimentação", descricao: "Faz uma pequena quantidade de alimento ou bebida servir um grupo inteiro." }
  ]},
  "Profecia": { descricao: "Oferece informações por meio de visões e percepção divina.", efeitos: [
    { nome: "Visão divina", descricao: "Em paz e oração, o personagem pode receber uma visão escolhida pelo mediador." },
    { nome: "Sentir vida", descricao: "Revela o estado de uma pessoa conhecida, mesmo a grande distância, durante um momento de paz." },
    { nome: "Busca da verdade", descricao: "Revela com certeza se uma pessoa ao alcance da audição está mentindo." }
  ]},
  "Proteção contra o mal": { descricao: "A cada nível, o personagem busca poderes maiores para se proteger contra o mal.", efeitos: [
    { nome: "Prever o mal", descricao: "Sente perigos próximos, sua direção e intensidade, em um raio de 30 varas (33 m), durante uma hora." },
    { nome: "Defesa contra o mal", descricao: "Por toque, impõe -2 aos ataques contra a pessoa protegida durante uma hora." },
    { nome: "Afastar o mal", descricao: "Faz um ser perigoso em um raio de 10 varas (11 m) fugir por dez minutos; um ataque contra ele quebra o efeito." }
  ]},
  "Recuperação": { descricao: "Curas milagrosas aplicadas por toque para aliviar ferimentos, doenças, venenos e enfermidades graves.", efeitos: [
    { nome: "Aliviar dor", descricao: "Recupera dois pontos de dano e evita por 24 horas a penalidade causada por resistência baixa." },
    { nome: "Remover febre", descricao: "Remove doença ou veneno comum; em caso de fracasso, não pode ser tentado novamente para a mesma condição." },
    { nome: "Expulsar males", descricao: "Alivia doenças e venenos incomuns, enfermidades graves e certos poderes nocivos." }
  ]},
  "Cura": { descricao: "Curas do Fôlego que exigem tabaco, fogo e um tubo para soprar fumaça sobre o alvo.", efeitos: [
    { nome: "Curar feridas", descricao: "Por toque, cura imediatamente dois pontos de dano." },
    { nome: "Curar veneno", descricao: "Elimina qualquer veneno e seus efeitos do corpo do alvo dentro de uma hora." },
    { nome: "Curar à distância", descricao: "À distância, reproduz Curar feridas ou Curar veneno; grandes distâncias podem impor penalidade." }
  ]},
  "Defesa": { descricao: "O pajé sopra fumaça sobre o alvo para conceder proteção e sorte sobrenaturais.", efeitos: [
    { nome: "Dar sorte", descricao: "Concede +1 em todos os testes do alvo durante 24 horas." },
    { nome: "Proteção", descricao: "Durante 12 horas, impõe -2 a tentativas de ferir o alvo com armas, magia, doença ou veneno." },
    { nome: "Corpo fechado", descricao: "Por três rodadas, o alvo não sofre dano de armas, fogo ou outros elementos, embora ainda possa ser detido." }
  ]},
  "Vida": { descricao: "Poderes imediatos que afetam a força vital; exigem fumo e um tubo para soprar sobre o alvo.", efeitos: [
    { nome: "Dar força", descricao: "Remove cansaço e aumenta a resistência máxima do alvo em 1 durante 24 horas." },
    { nome: "Curar doença", descricao: "Cura qualquer doença; um fracasso impede nova tentativa do mesmo pajé para aquela doença e pessoa." },
    { nome: "Devolver a vida", descricao: "Restaura a vida de um recém-morto quando a causa da morte já não persiste no corpo." }
  ]},
  "Dano": { descricao: "Poderes malignos instantâneos que enfraquecem fisicamente o alvo.", efeitos: [
    { nome: "Causar feridas", descricao: "Por contato físico, causa 3 pontos de dano ao alvo.", dano: 3 },
    { nome: "Passar veneno", descricao: "Por toque, aplica veneno comum que reduz ataques para dano 1 e diminui o movimento; sem cura, mata em um dia." },
    { nome: "Ferir à distância", descricao: "Causa o mesmo efeito de Causar feridas contra um alvo na linha de visão, sem necessidade de toque.", dano: 3 }
  ]},
  "Fraqueza": { descricao: "Danações aplicadas por toque ou por um ritual de seis horas contra uma pessoa conhecida.", efeitos: [
    { nome: "Dar azar", descricao: "Impõe -1 em todos os testes do alvo durante 24 horas." },
    { nome: "Indefeso", descricao: "Durante 12 horas, concede +2 a qualquer tentativa de atacar o alvo." },
    { nome: "Corpo aberto", descricao: "Durante três rodadas, torna o alvo extremamente vulnerável e triplica o dano causado por armas." }
  ]},
  "Morte": { descricao: "Poderes malignos que retiram a força vital por toque ou por ritual à distância.", efeitos: [
    { nome: "Remover força", descricao: "Deixa o alvo exausto e sem suas próximas duas ações." },
    { nome: "Enviar doença", descricao: "Aplica doença comum, -2 em façanhas e redução de movimento até a cura." },
    { nome: "Enviar morte", descricao: "O alvo morre após três rodadas se o efeito não for anulado; o pajé precisa descansar por um dia." }
  ]},
  "Mundo espiritual": { descricao: "Permite interagir, viajar e transportar-se pelo mundo dos espíritos; exige maracás, cânticos e cerimônias.", efeitos: [
    { nome: "Comunicar-se com espíritos", descricao: "Após quatro horas de cerimônia, conjura um espírito em busca de informações." },
    { nome: "Viagem espiritual", descricao: "Após quatro horas, o espírito deixa o corpo e pode viajar pelo plano astral." },
    { nome: "Transportar-se", descricao: "Após ritual de uma hora, leva o próprio corpo ao plano astral por até três dias." }
  ]},
  "Tempo": { descricao: "Permite prever ou controlar fenômenos climáticos por meio de cerimônias.", efeitos: [
    { nome: "Prever o tempo", descricao: "Após ritual de uma hora, prevê o clima das próximas 12 horas." },
    { nome: "Fenômenos naturais", descricao: "Após quatro horas, cria chuva no caminho bondoso ou seca no maligno por 1d6 dias." },
    { nome: "Tempestade", descricao: "Em meia hora, cria uma tempestade direcionada no caminho maligno ou acalma uma tempestade no bondoso." }
  ]},
  "Controle da natureza": { descricao: "Manipula plantas, alimentos e formas animais; exige maracás, cânticos e cerimônias.", efeitos: [
    { nome: "Controle sobre plantas", descricao: "Em meia hora, faz uma planta crescer no caminho bondoso ou mata uma planta no maligno." },
    { nome: "Criar alimentos", descricao: "Em uma hora, faz crescer alimento vegetal suficiente para uma pessoa." },
    { nome: "Transformação", descricao: "Transforma o pajé por até oito horas: pássaro ou peixe no caminho bondoso; onça ou serpente no maligno." }
  ]},
  "Contra magia": { descricao: "Detecta e anula poderes de Fôlego e de criaturas sobrenaturais, mas não reconhece nem afeta graças divinas.", efeitos: [
    { nome: "Sentir magia", descricao: "Detecta itens mágicos e feitiços ativos em um raio de 30 varas (33 m), sem revelar suas propriedades." },
    { nome: "Identificar magia", descricao: "Identifica as propriedades de um feitiço ou item mágico específico." },
    { nome: "Contrafeitiço", descricao: "Cancela um ritual em andamento ou encerra um poder com duração; não reverte efeitos físicos já causados." }
  ]},
  "Saúde": { descricao: "Poderes de Ifá que exigem ervas, materiais de cura e contato físico com o alvo.", efeitos: [
    { nome: "Curar danos", descricao: "Cura dois pontos de dano; não pode ser usado no mesmo alvo mais de uma vez por dia." },
    { nome: "Curar maldades", descricao: "Cura venenos, doenças e certas energias negativas ou poderes debilitantes." },
    { nome: "Afastar morte", descricao: "Preserva por 24 horas o corpo de alguém morto há menos de um minuto, permitindo reverter a causa e restaurar a vida." }
  ]},
  "Detecção": { descricao: "Aplica adivinhação para detectar venenos, magia e obstáculos.", efeitos: [
    { nome: "Detectar veneno", descricao: "Detecta venenos em alimentos, bebidas ou outros lugares." },
    { nome: "Detectar magia", descricao: "Detecta magia no ambiente, inclusive objetos e graças divinas ativas." },
    { nome: "Detectar obstáculo", descricao: "Recebe uma advertência específica sobre algo que pode impedir o empreendimento atual." }
  ]},
  "Proteção": { descricao: "Proteções de Ifá aplicadas por contato físico e mantidas até o próximo amanhecer.", efeitos: [
    { nome: "Proteger contra inimigos", descricao: "Um inimigo escolhido sofre -1 em testes contra o alvo e tem maior dificuldade para encontrá-lo." },
    { nome: "Proteger contra armas", descricao: "Concede +1 de defesa passiva até o próximo amanhecer." },
    { nome: "Proteger contra magia", descricao: "Impõe -3 à façanha de qualquer magia maliciosa usada contra o alvo." }
  ]},
  "Sorte": { descricao: "Por contato físico, permite ao alvo refazer dados em suas façanhas até o próximo amanhecer.", efeitos: [
    { nome: "Sorte +1", descricao: "Permite lançar novamente um dado em todas as façanhas." },
    { nome: "Sorte +2", descricao: "Permite lançar novamente até dois dados em todas as façanhas." },
    { nome: "Sorte +3", descricao: "Permite lançar novamente até três dados em todas as façanhas." }
  ]},
  "Energia negativa": { descricao: "Canaliza energias negativas contra inimigos por contato ou ritual.", efeitos: [
    { nome: "Causar dano", descricao: "Por contato físico, causa dois pontos de dano.", dano: 2 },
    { nome: "Enfraquecer inimigo", descricao: "Após ritual de quatro horas, impõe -2 em todos os testes do inimigo por 24 horas." },
    { nome: "Afastar inimigo", descricao: "Impede por seis horas que um inimigo visível procure ou moleste o sacerdote." }
  ]},
  "Influência": { descricao: "Por contato físico, influencia pensamentos e sentimentos de pessoas e criaturas de tamanho limitado.", efeitos: [
    { nome: "Acalmar", descricao: "Acalma irritação e remove confusão ou loucura momentaneamente." },
    { nome: "Mudar sentimentos", descricao: "Melhora ou piora por seis horas a opinião do alvo sobre uma pessoa específica." },
    { nome: "Encantar", descricao: "Por 24 horas, faz o alvo obedecer comandos compreendidos; apenas um ser pode permanecer encantado por vez." }
  ]},
  "Manuseio espiritual": { descricao: "Faz uma ponte entre os mundos físico e espiritual para consultar ancestrais, viajar e criar servos.", efeitos: [
    { nome: "Comunicar-se com ancestrais", descricao: "Após ritual de quatro horas, permite conversar por dez minutos com um antepassado falecido." },
    { nome: "Encurtar o tempo", descricao: "Faz um alvo disposto viajar quatro vezes mais rápido até chegar ao destino escolhido." },
    { nome: "Criar Sigidi", descricao: "Após 24 horas de fabricação, anima por até 24 horas uma figura de argila capaz de cumprir uma tarefa." }
  ]}
};

Hooks.once("init", async function () {
  Handlebars.registerHelper("eq", (a, b) => String(a) === String(b));

  Actors.unregisterSheet("core", ActorSheet);

  class BandeiraPersonagemSheet extends ActorSheet {
    constructor(...args) {
      super(...args);
      this._activeTab = "resumo";
    }

    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["bandeira", "sheet", "actor"],
        template: `systems/${BANDEIRA_ID}/templates/personagem-sheet.html`,
        width: 980,
        height: 820,
        resizable: true,
        closeOnSubmit: false,
        submitOnChange: true
      });
    }

    getData() {
      const data = super.getData();
      const system = this.actor.system;
      const resistenciaBase = this._permanentResistance();
      const resistenciaTemporaria = Math.max(0, this._number(system.resistenciaTemporaria));
      const resistenciaMaxima = resistenciaBase + resistenciaTemporaria;
      const dano = this._number(system.dano);
      const danoCritico = this._number(system.danoCritico);
      const resistenciaLivre = Math.max(resistenciaMaxima - dano, 0);
      const caminhoSobrenatural = this._detectedSupernaturalPath(this._asArray(system.habilidades));
      const caminhoInfo = CAMINHOS_SOBRENATURAIS[caminhoSobrenatural];
      const habilidadeBase = this._asArray(system.habilidades).find(habilidade =>
        this._normalizeName(habilidade.nome) === this._normalizeName(caminhoInfo?.habilidade)
      );
      const nivelBaseSobrenatural = this._number(habilidadeBase?.nivel);
      const energiaMaxima = [0, 5, 10, 20][Math.max(0, Math.min(3, nivelBaseSobrenatural))];
      const energia = Math.max(0, Math.min(energiaMaxima, this._number(system.energia)));

      data.system = system;
      data.resistenciaBase = resistenciaBase;
      data.resistenciaTemporaria = resistenciaTemporaria;
      data.resistenciaMaximaAtual = resistenciaMaxima;
      data.resistenciaLivre = resistenciaLivre;
      data.resistenciaPercentual = resistenciaMaxima > 0
        ? Math.max(0, Math.min(100, (resistenciaLivre / resistenciaMaxima) * 100))
        : 0;
      data.energiaPercentual = energiaMaxima > 0
        ? Math.max(0, Math.min(100, (energia / energiaMaxima) * 100))
        : 0;
      data.energiaAtual = energia;
      data.energiaMaxima = energiaMaxima;
      data.caminhoSobrenatural = caminhoSobrenatural;
      data.caminhoNome = caminhoInfo?.nome || "Nenhum";
      data.caminhoFolego = system.caminhoFolego || "";
      data.nivelBaseSobrenatural = nivelBaseSobrenatural;
      data.temCaminhoSobrenatural = Boolean(caminhoInfo);
      data.caminhoFe = caminhoSobrenatural === "fe";
      data.caminhoFolegoAtivo = caminhoSobrenatural === "folego";
      data.caminhoIfa = caminhoSobrenatural === "ifa";
      data.ferido = resistenciaLivre > 0 && resistenciaLivre <= 3;
      data.inconsciente = resistenciaMaxima > 0 && dano >= resistenciaMaxima;
      data.morto = danoCritico >= 5;
      data.estado = data.morto
        ? "Morto"
        : data.inconsciente
          ? "Inconsciente"
          : data.ferido
            ? "Ferido"
            : "Bem";
      data.estadoClasse = data.morto || data.inconsciente
        ? "danger"
        : data.ferido
          ? "warning"
          : "healthy";

      const habilidades = this._asArray(system.habilidades);
      data.habilidades = habilidades.map((habilidade, index) => {
        const nivel = this._number(habilidade.nivel);
        const catalogada = this._catalogEntry(habilidade.nome);
        const nivelMaximo = catalogada?.nivelMaximo || 3;
        return {
          nome: habilidade.nome ?? "",
          categoria: habilidade.categoria || catalogada?.categoria || "Personalizada",
          notas: habilidade.notas ?? "",
          nivel,
          nivelMaximo,
          catalogada: Boolean(catalogada),
          podeDiminuir: nivel > 0,
          podeAumentar: nivel < nivelMaximo,
          index,
          bonus: nivel * 3
        };
      });

      data.habilidadesCatalogo = [...HABILIDADES_PLANAS]
        .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
        .map(habilidade => ({ nome: habilidade.nome, categoria: habilidade.categoria }));

      data.habilidadesDeArmas = HABILIDADES_PLANAS
        .filter(habilidade => habilidade.categoria === "Armas")
        .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

      data.armas = this._asArray(system.armas).map((arma, index) => ({
        nome: arma.nome ?? "",
        tipoHabilidade: arma.tipoHabilidade ?? "",
        maos: arma.maos ?? "",
        maosLabel: this._weaponHandsLabel(arma.maos),
        alcance: arma.alcance ?? "",
        dano: this._number(arma.dano, 1),
        forcaBonus: Boolean(arma.forcaBonus),
        recarga: arma.recarga ?? "",
        notas: arma.notas ?? "",
        index
      }));
      data.armasDefesa = data.armas.filter(arma => String(arma.nome).trim());

      const protecao = system.protecao || {};
      const capacete = Boolean(protecao.capacete);
      const peitoral = Boolean(protecao.peitoral);
      const bonusExtra = Math.max(0, this._number(protecao.bonusExtra));
      const defesaPassiva = Math.min(5, (capacete ? 1 : 0) + (peitoral ? 1 : 0) + bonusExtra);
      const armaDefensiva = protecao.armaDefensiva ?? "desarmado";
      const armaSelecionada = armaDefensiva === "desarmado"
        ? null
        : data.armas[Number(armaDefensiva)];
      let bonusDefesaAtiva = 0;
      let fonteDefesaAtiva = "Desarmado";
      let escudoAplicado = false;

      if (armaSelecionada) {
        fonteDefesaAtiva = armaSelecionada.nome || "Arma em mãos";
        const corpoACorpo = this._normalizeName(armaSelecionada.alcance).includes("corpo a corpo");
        if (corpoACorpo) {
          const habilidadeVinculada = data.habilidades.find(habilidade =>
            this._normalizeName(habilidade.nome) === this._normalizeName(armaSelecionada.tipoHabilidade)
          );
          bonusDefesaAtiva = this._number(habilidadeVinculada?.nivel);
          const umaMao = /^1(?:\D|$)/.test(String(armaSelecionada.maos || "").trim());
          escudoAplicado = Boolean(protecao.escudo) && umaMao;
        }
      } else {
        const artesMarciais = ["Boxe", "Capoeira", "Luta livre"];
        bonusDefesaAtiva = Math.max(0, ...data.habilidades
          .filter(habilidade => artesMarciais.some(nome => this._normalizeName(nome) === this._normalizeName(habilidade.nome)))
          .map(habilidade => this._number(habilidade.nivel)));
        escudoAplicado = false;
      }

      data.defesaPassivaCalculada = defesaPassiva;
      data.defesaAtivaCalculada = Math.min(5, defesaPassiva + bonusDefesaAtiva + (escudoAplicado ? 1 : 0));
      data.bonusDefesaAtiva = bonusDefesaAtiva;
      data.fonteDefesaAtiva = fonteDefesaAtiva;
      data.escudoAplicado = escudoAplicado;
      data.armaDefensiva = String(armaDefensiva);

      data.poderes = this._asArray(system.poderes).map((poder, index) => {
        const detalhes = this._powerDetails(poder.nome);
        return {
          nome: poder.nome ?? "",
          nivel: Math.max(1, this._number(poder.nivel, 1)),
          grupo: poder.grupo ?? "Personalizado",
          personalizado: poder.personalizado ?? !detalhes,
          notas: poder.notas || detalhes?.descricao || "",
          podeDiminuir: this._number(poder.nivel, 1) > 1,
          podeAumentar: this._number(poder.nivel, 1) < Math.min(3, nivelBaseSobrenatural),
          bonus: this._number(poder.nivel, 1) * 3,
          index
        };
      });

      let pontosGastos = 0;
      for (const habilidade of data.habilidades) {
        if (habilidade.nivel === 1) pontosGastos += 1;
        if (habilidade.nivel === 2) pontosGastos += 3;
        if (habilidade.nivel === 3) pontosGastos += 7;
      }
      for (const poder of data.poderes) pontosGastos += this._skillCost(poder.nivel);

      const pontosIniciais = system.pontosIniciais === undefined
        ? (this._number(system.pontosTotais) || 20)
        : this._number(system.pontosIniciais, 20);
      const pontosGanhos = this._number(system.pontosGanhos);
      data.pontosIniciais = pontosIniciais;
      data.pontosGanhos = pontosGanhos;
      data.pontosGastos = pontosGastos;
      data.pontosTotaisRecebidos = pontosIniciais + pontosGanhos;
      data.pontosDisponiveis = data.pontosTotaisRecebidos - pontosGastos;
      data.pontosRestantes = data.pontosDisponiveis;
      data.pontosExcedidos = data.pontosDisponiveis < 0;
      data.limiteHabilidades = data.habilidades.length >= 20;
      data.modoEdicao = Boolean(system.modoEdicao);
      data.dinheiro = system.dinheiro === undefined ? 1000 : Math.max(0, this._number(system.dinheiro));
      data.dinheiroFormatado = data.dinheiro.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      data.activeTab = this._activeTab;
      return data;
    }

    activateListeners(html) {
      super.activateListeners(html);

      html.on("click", "[data-tab]", this._changeTab.bind(this));
      html.on("click", "[data-action='toggle-edit-mode']", this._toggleEditMode.bind(this));
      html.on("click", "[data-action='add-habilidade']", this._addHabilidade.bind(this));
      html.on("click", "[data-action='remove-habilidade']", this._removeHabilidade.bind(this));
      html.on("click", "[data-action='adjust-habilidade-level']", this._adjustHabilidadeLevel.bind(this));
      html.on("click", "[data-action='roll-habilidade']", this._rollHabilidade.bind(this));
      html.on("click", "[data-action='roll-generico']", this._rollGenerico.bind(this));
      html.on("click", "[data-action='roll-iniciativa']", this._rollIniciativa.bind(this));
      html.on("click", "[data-action='adjust-condition']", this._adjustCondition.bind(this));
      html.on("click", "[data-action='add-arma']", this._addArma.bind(this));
      html.on("click", "[data-action='remove-arma']", this._removeArma.bind(this));
      html.on("click", "[data-action='roll-arma']", this._rollArma.bind(this));
      html.on("click", "[data-action='add-poder']", this._addPoder.bind(this));
      html.on("click", "[data-action='remove-poder']", this._removePoder.bind(this));
      html.on("click", "[data-action='use-poder']", this._usePoder.bind(this));
      html.on("click", "[data-action='adjust-poder-level']", this._adjustPoderLevel.bind(this));
      html.on("click", "[data-action='restore-energy']", this._restoreEnergy.bind(this));
      html.on("change", "[data-action='set-supernatural-path']", this._setSupernaturalPath.bind(this));
      html.on("input", "[data-money-input]", this._formatMoneyInput.bind(this));
      html.on("change", "[data-money-input]", this._saveMoney.bind(this));

      html.find(".weapons-table .reload-input, .weapon-notes-row input[type='text']").prop("readonly", true);

      this._showActiveTab(html);
    }

    async _onChangeInput(event) {
      const transientSelector = [
        "[data-transient]"
      ].join(",");
      if (event.target.matches(transientSelector)) return;
      return super._onChangeInput(event);
    }

    _number(value, fallback = 0) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    }

    _moneyValue(value) {
      const digits = String(value ?? "").replace(/\D/g, "");
      return digits ? Number(digits) : 0;
    }

    _formatMoneyInput(event) {
      const value = this._moneyValue(event.currentTarget.value);
      event.currentTarget.value = value.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      event.currentTarget.closest(".money-input-wrap")?.querySelector("input[name='system.dinheiro']")?.setAttribute("value", String(value));
    }

    async _saveMoney(event) {
      const value = this._moneyValue(event.currentTarget.value);
      event.currentTarget.closest(".money-input-wrap")?.querySelector("input[name='system.dinheiro']")?.setAttribute("value", String(value));
      await this.actor.update({ "system.dinheiro": value });
    }

    async _toggleEditMode(event) {
      event.preventDefault();
      const enabled = !Boolean(this.actor.system.modoEdicao);
      await this.actor.update({ "system.modoEdicao": enabled });
      ui.notifications.info(enabled ? "Modo edição liberado." : "Modo edição travado.");
    }

    _requireEditMode() {
      if (this.actor.system.modoEdicao) return true;
      ui.notifications.warn("Destrave o modo edição para alterar a evolução do personagem.");
      return false;
    }

    _asArray(value) {
      if (Array.isArray(value)) return foundry.utils.deepClone(value);
      return Object.values(value || {}).map(entry => foundry.utils.deepClone(entry));
    }

    _escape(value) {
      return foundry.utils.escapeHTML(String(value ?? ""));
    }

    _normalizeName(value) {
      return String(value || "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
    }

    _persistentActor() {
      if (this.actor?.type !== "personagem") return this.actor;
      return game.actors?.get(this.actor.token?.actorId)
        || game.actors?.get(this.actor.id)
        || this.actor;
    }

    _weaponHandsLabel(value) {
      const text = String(value ?? "").trim();
      if (!text || text === "0") return "desarmado";
      if (text === "1") return "1 mão";
      if (text === "2") return "2 mãos";
      return text;
    }

    _catalogEntry(name) {
      const normalized = this._normalizeName(name);
      return HABILIDADES_PLANAS.find(entry => this._normalizeName(entry.nome) === normalized);
    }

    _powerDetails(name) {
      const normalized = this._normalizeName(name);
      return Object.entries(PODERES_DETALHES).find(([key]) => this._normalizeName(key) === normalized)?.[1];
    }

    _detectedSupernaturalPath(habilidades = this._asArray(this.actor.system.habilidades)) {
      for (const [id, info] of Object.entries(CAMINHOS_SOBRENATURAIS)) {
        const encontrada = habilidades.find(habilidade =>
          this._normalizeName(habilidade.nome) === this._normalizeName(info.habilidade)
          && this._number(habilidade.nivel) > 0
        );
        if (encontrada) return id;
      }
      return "";
    }

    _resistanceBonusForAbility(name, level) {
      const normalized = this._normalizeName(name);
      const currentLevel = this._number(level);
      if (normalized === "boxe") return currentLevel >= 2 ? currentLevel - 1 : 0;
      const grantsAtMaster = ["acrobacia", "corrida", "forca fisica", "natacao", "escalada", "capoeira", "luta livre"];
      return grantsAtMaster.includes(normalized) && currentLevel >= 3 ? 1 : 0;
    }

    _permanentResistance() {
      const bonus = this._asArray(this.actor.system.habilidades).reduce(
        (total, habilidade) => total + this._resistanceBonusForAbility(habilidade.nome, habilidade.nivel),
        0
      );
      return Math.min(15, 10 + bonus);
    }

    _skillCost(level) {
      const costs = [0, 1, 3, 7];
      return costs[Math.max(0, Math.min(3, this._number(level)))] || 0;
    }

    async _askModifier(title) {
      return new Promise(resolve => {
        let settled = false;
        let hookId;
        const finish = value => {
          if (settled) return;
          settled = true;
          if (hookId) Hooks.off("renderDialog", hookId);
          resolve(value);
        };
        const dialog = new Dialog({
          title: `Modificador — ${title}`,
          content: `
            <div class="bandeira-modifier-dialog">
              <p>Existe algum bônus ou penalidade para esta rolagem?</p>
              <div class="modifier-stepper">
                <button type="button" data-mod-step="-1">−</button>
                <input type="number" name="modifier" value="0" />
                <button type="button" data-mod-step="1">+</button>
              </div>
            </div>`,
          buttons: {
            roll: {
              icon: '<i class="fa-solid fa-dice"></i>',
              label: "Rolar",
              callback: html => finish(this._number(html.find("[name='modifier']").val()))
            },
            cancel: {
              label: "Cancelar",
              callback: () => finish(null)
            }
          },
          default: "roll",
          close: () => finish(null)
        }, {
          classes: ["dialog", "bandeira-modifier-window"],
          width: 380
        });
        hookId = Hooks.on("renderDialog", (app, html) => {
          if (app !== dialog) return;
          Hooks.off("renderDialog", hookId);
          html.on("click", "[data-mod-step]", event => {
            event.preventDefault();
            const input = html.find("[name='modifier']");
            input.val(this._number(input.val()) + this._number(event.currentTarget.dataset.modStep));
          });
          html.find("[name='modifier']").trigger("focus").trigger("select");
        });
        dialog.render(true);
      });
    }

    async _askAttackOptions(title) {
      return new Promise(resolve => {
        let settled = false;
        let hookId;
        const finish = value => {
          if (settled) return;
          settled = true;
          if (hookId) Hooks.off("renderDialog", hookId);
          resolve(value);
        };
        const dialog = new Dialog({
          title: `Ataque — ${title}`,
          content: `
            <div class="bandeira-modifier-dialog attack-options-dialog">
              <label class="attack-type-field">
                <span>Tipo de ataque</span>
                <select name="attackMode">
                  <option value="normal">Normal</option>
                  <option value="forte">Forte · +2 dano</option>
                  <option value="preciso">Preciso · +2 dano</option>
                </select>
              </label>
              <p>Existe algum bônus ou penalidade para esta rolagem?</p>
              <div class="modifier-stepper">
                <button type="button" data-mod-step="-1">−</button>
                <input type="number" name="modifier" value="0" />
                <button type="button" data-mod-step="1">+</button>
              </div>
            </div>`,
          buttons: {
            roll: {
              icon: '<i class="fa-solid fa-dice"></i>',
              label: "Rolar",
              callback: html => finish({
                mode: String(html.find("[name='attackMode']").val() || "normal"),
                modifier: this._number(html.find("[name='modifier']").val())
              })
            },
            cancel: { label: "Cancelar", callback: () => finish(null) }
          },
          default: "roll",
          close: () => finish(null)
        }, {
          classes: ["dialog", "bandeira-modifier-window"],
          width: 400
        });
        hookId = Hooks.on("renderDialog", (app, html) => {
          if (app !== dialog) return;
          Hooks.off("renderDialog", hookId);
          html.on("click", "[data-mod-step]", event => {
            event.preventDefault();
            const input = html.find("[name='modifier']");
            input.val(this._number(input.val()) + this._number(event.currentTarget.dataset.modStep));
          });
        });
        dialog.render(true);
      });
    }

    async _askPowerUse(poder) {
      const detalhes = this._powerDetails(poder.nome);
      const nivelAdquirido = Math.max(1, Math.min(3, this._number(poder.nivel, 1)));
      if (!detalhes) {
        return {
          level: nivelAdquirido,
          effect: { nome: poder.nome || "Poder personalizado", descricao: poder.notas || "" }
        };
      }
      const dificuldades = [0, 12, 15, 18];
      const custos = [0, 1, 2, 4];
      const opcoes = detalhes.efeitos.slice(0, nivelAdquirido).map((efeito, index) => {
        const level = index + 1;
        return `<label class="power-effect-option">
          <input type="radio" name="powerEffectLevel" value="${level}" ${level === 1 ? "checked" : ""} />
          <span class="power-effect-copy">
            <strong>Nível ${level} · ${this._escape(efeito.nome)}</strong>
            <small>Dificuldade ${dificuldades[level]} · ${custos[level]} de energia</small>
            <p>${this._escape(efeito.descricao)}</p>
          </span>
        </label>`;
      }).join("");
      return new Promise(resolve => {
        let settled = false;
        const finish = value => {
          if (settled) return;
          settled = true;
          resolve(value);
        };
        const dialog = new Dialog({
          title: `Usar poder — ${poder.nome}`,
          content: `<div class="bandeira-power-use-dialog">
            <p class="power-family-description">${this._escape(detalhes.descricao)}</p>
            <div class="power-effect-options">${opcoes}</div>
          </div>`,
          buttons: {
            roll: {
              icon: '<i class="fa-solid fa-arrow-right"></i>',
              label: "Continuar",
              callback: html => {
                const level = this._number(html.find("[name='powerEffectLevel']:checked").val(), 1);
                finish({ level, effect: detalhes.efeitos[level - 1] });
              }
            },
            cancel: { label: "Cancelar", callback: () => finish(null) }
          },
          default: "roll",
          close: () => finish(null)
        }, { classes: ["dialog", "bandeira-modifier-window", "bandeira-power-use-window"], width: 560, resizable: true });
        dialog.render(true);
      });
    }

    async _confirmDeletion(label) {
      return Dialog.confirm({
        title: "Confirmar exclusão",
        content: `<p>Deseja realmente excluir <strong>${this._escape(label)}</strong>?</p>`,
        yes: () => true,
        no: () => false,
        defaultYes: false
      });
    }

    _pointsState(habilidades = this._asArray(this.actor.system.habilidades), poderes = this._asArray(this.actor.system.poderes)) {
      const system = this.actor.system;
      const iniciais = system.pontosIniciais === undefined
        ? (this._number(system.pontosTotais) || 20)
        : this._number(system.pontosIniciais, 20);
      const ganhos = this._number(system.pontosGanhos);
      const investidos = habilidades.reduce((total, habilidade) => total + this._skillCost(habilidade.nivel), 0)
        + poderes.reduce((total, poder) => total + this._skillCost(poder.nivel || 1), 0);
      return {
        iniciais,
        ganhos,
        investidos,
        disponiveis: iniciais + ganhos - investidos
      };
    }

    _changeTab(event) {
      event.preventDefault();
      this._activeTab = event.currentTarget.dataset.tab || "resumo";
      this._showActiveTab(this.element);
    }

    _showActiveTab(html) {
      html.find("[data-tab]").removeClass("active");
      html.find(`[data-tab='${this._activeTab}']`).addClass("active");
      html.find("[data-tab-panel]").removeClass("active");
      html.find(`[data-tab-panel='${this._activeTab}']`).addClass("active");
    }

    async _persistForm(event) {
      if (!this.isEditable || !this.form) return;
      await this._onSubmit(event, { preventClose: true, preventRender: true });
    }

    async _addHabilidade(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      if (this._asArray(this.actor.system.habilidades).length >= 20) {
        return ui.notifications.warn("A ficha comporta no máximo 20 habilidades.");
      }

      const habilidadesAtuais = this._asArray(this.actor.system.habilidades);
      const nomesAtuais = new Set(habilidadesAtuais.map(habilidade => this._normalizeName(habilidade.nome)));
      const categorias = [...HABILIDADES_CATALOGO]
        .sort((a, b) => a.categoria.localeCompare(b.categoria, "pt-BR"))
        .map(grupo => {
          const habilidades = grupo.habilidades
            .map(habilidade => typeof habilidade === "string" ? habilidade : habilidade.nome)
            .sort((a, b) => a.localeCompare(b, "pt-BR"))
            .map(nome => {
              const adquirida = nomesAtuais.has(this._normalizeName(nome));
              return `
                <label class="catalog-skill-option ${adquirida ? "acquired" : ""}">
                  <input type="checkbox" name="habilidadesSelecionadas" value="${this._escape(nome)}" ${adquirida ? "checked disabled" : ""} />
                  <span>${this._escape(nome)}</span>
                </label>`;
            })
            .join("");
          return `
            <section class="catalog-category">
              <button type="button" class="catalog-category-header" aria-expanded="false">
                <span>${this._escape(grupo.categoria)}</span>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
              <div class="catalog-skill-list">${habilidades}</div>
            </section>`;
        })
        .join("");
      const pontos = this._pointsState(habilidadesAtuais);
      const vagas = 20 - habilidadesAtuais.length;
      const dialog = new Dialog({
        title: "Adicionar habilidades",
        content: `
          <div class="bandeira-catalog-dialog">
            <div class="catalog-summary"><span>Disponíveis: <strong>${pontos.disponiveis}</strong></span><span>Vagas: <strong>${vagas}</strong></span></div>
            <div class="catalog-categories">${categorias}</div>
            <label class="catalog-custom-toggle">
              <input type="checkbox" name="usarPersonalizada" />
              <span>Adicionar habilidade personalizada</span>
            </label>
            <label class="catalog-custom-field">
              <span>Nome personalizado</span>
              <input type="text" name="habilidadePersonalizada" placeholder="Digite o nome da habilidade" />
            </label>
          </div>`,
        buttons: {
          add: {
            icon: '<i class="fa-solid fa-plus"></i>',
            label: "Adicionar selecionadas",
            callback: html => {
              const selecionadas = html.find("[name='habilidadesSelecionadas']:checked:not(:disabled)")
                .map((_, input) => String(input.value)).get();
              const usarPersonalizada = html.find("[name='usarPersonalizada']").prop("checked");
              const custom = String(html.find("[name='habilidadePersonalizada']").val() || "").trim();
              if (usarPersonalizada && custom) selecionadas.push(custom);
              return this._createHabilidades(selecionadas);
            }
          },
          cancel: { label: "Cancelar" }
        },
        default: "add"
      }, {
        classes: ["dialog", "bandeira-catalog-window"],
        width: 620,
        height: 720,
        resizable: true
      });
      const hookId = Hooks.on("renderDialog", (app, html) => {
        if (app !== dialog) return;
        Hooks.off("renderDialog", hookId);
        const customToggle = html.find("[name='usarPersonalizada']");
        const customField = html.find(".catalog-custom-field");
        const toggleCustom = () => {
          const visible = customToggle.prop("checked");
          customField.toggleClass("visible", visible);
          if (visible) customField.find("input").trigger("focus");
        };
        customToggle.on("change", toggleCustom);
        html.on("click", ".catalog-category-header", event => {
          event.preventDefault();
          const header = $(event.currentTarget);
          const category = header.closest(".catalog-category");
          const open = !category.hasClass("open");
          category.toggleClass("open", open);
          header.attr("aria-expanded", String(open));
        });
        toggleCustom();
      });
      dialog.render(true);
    }

    async _createHabilidades(nomes) {
      const habilidades = this._asArray(this.actor.system.habilidades);
      const existentes = new Set(habilidades.map(habilidade => this._normalizeName(habilidade.nome)));
      const unicas = [...new Map((nomes || [])
        .map(nome => String(nome || "").trim())
        .filter(Boolean)
        .map(nome => [this._normalizeName(nome), nome])).values()]
        .filter(nome => !existentes.has(this._normalizeName(nome)));
      if (!unicas.length) return ui.notifications.warn("Selecione pelo menos uma habilidade nova.");
      const basesSobrenaturais = Object.values(CAMINHOS_SOBRENATURAIS).map(info => this._normalizeName(info.habilidade));
      const baseAtual = this._detectedSupernaturalPath(habilidades);
      const novasBases = unicas.filter(nome => basesSobrenaturais.includes(this._normalizeName(nome)));
      if (novasBases.length > 1 || (baseAtual && novasBases.length)) {
        return ui.notifications.error("Fé, Fôlego e Ifá são caminhos exclusivos. O personagem só pode adquirir uma dessas habilidades.");
      }
      if (habilidades.length + unicas.length > 20) {
        return ui.notifications.error(`Não há vagas suficientes. Você pode adicionar no máximo ${20 - habilidades.length} habilidade(s).`);
      }
      const disponiveis = this._pointsState(habilidades).disponiveis;
      if (disponiveis < unicas.length) {
        return ui.notifications.error(`Pontos insuficientes. A seleção custa ${unicas.length}, mas você possui ${disponiveis}.`);
      }
      for (const nome of unicas) {
        const catalogada = this._catalogEntry(nome);
        habilidades.push({
          nome: catalogada?.nome || nome,
          categoria: catalogada?.categoria || "Personalizada",
          nivel: 1,
          notas: ""
        });
      }
      const update = { "system.habilidades": habilidades };
      if (novasBases.length) update["system.energia"] = 5;
      await this.actor.update(update);
      ui.notifications.info(`${unicas.length} habilidade(s) adicionada(s).`);
    }

    async _removeHabilidade(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      if (!Number.isInteger(index)) return;
      const habilidades = this._asArray(this.actor.system.habilidades);
      const removida = habilidades[index];
      const baseAtual = CAMINHOS_SOBRENATURAIS[this._detectedSupernaturalPath(habilidades)]?.habilidade;
      const removendoBaseSobrenatural = removida && this._normalizeName(removida.nome) === this._normalizeName(baseAtual);
      if (removendoBaseSobrenatural && this._asArray(this.actor.system.poderes).length) {
        return ui.notifications.error("Remova primeiro os poderes sobrenaturais adquiridos antes de excluir a habilidade básica.");
      }
      if (!removida || !await this._confirmDeletion(removida.nome || "esta habilidade")) return;
      habilidades.splice(index, 1);
      const update = { "system.habilidades": habilidades };
      if (removendoBaseSobrenatural) {
        update["system.energia"] = 0;
        update["system.caminhoFolego"] = "";
      }
      await this.actor.update(update);
    }

    async _adjustHabilidadeLevel(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      const amount = this._number(event.currentTarget.dataset.amount);
      if (!Number.isInteger(index) || !amount) return;
      const habilidades = this._asArray(this.actor.system.habilidades);
      const habilidade = habilidades[index];
      if (!habilidade) return;
      const catalogada = this._catalogEntry(habilidade.nome);
      const nivelMaximo = catalogada?.nivelMaximo || 3;
      const nivelAnterior = this._number(habilidade.nivel);
      const nivelNovo = Math.max(0, Math.min(nivelMaximo, nivelAnterior + amount));
      if (nivelNovo === nivelAnterior) return;
      const baseAtual = CAMINHOS_SOBRENATURAIS[this._detectedSupernaturalPath(habilidades)]?.habilidade;
      if (amount < 0 && this._normalizeName(habilidade.nome) === this._normalizeName(baseAtual)) {
        const maiorPoder = Math.max(0, ...this._asArray(this.actor.system.poderes).map(poder => this._number(poder.nivel, 1)));
        if (nivelNovo < maiorPoder) return ui.notifications.error(`A habilidade básica não pode ficar abaixo do maior poder adquirido (nível ${maiorPoder}).`);
      }
      const custoAumento = this._skillCost(nivelNovo) - this._skillCost(nivelAnterior);
      if (custoAumento > 0 && this._pointsState(habilidades).disponiveis < custoAumento) {
        return ui.notifications.error(`Pontos insuficientes. Este aumento exige ${custoAumento} ponto${custoAumento === 1 ? "" : "s"} de aprendizagem.`);
      }
      habilidade.nivel = nivelNovo;
      const update = { "system.habilidades": habilidades };
      if (this._normalizeName(habilidade.nome) === this._normalizeName(baseAtual)) {
        const energiaMaximaNova = [0, 5, 10, 20][Math.max(0, Math.min(3, nivelNovo))] || 0;
        update["system.energia"] = energiaMaximaNova;
      }
      await this.actor.update(update);
    }

    _effectiveLevel(level) {
      const max = this._currentResistanceMaximum();
      const dano = this._number(this.actor.system.dano);
      const livre = Math.max(max - dano, 0);
      return livre > 0 && livre <= 3 ? Math.max(level - 1, 0) : level;
    }

    _currentResistanceMaximum() {
      const base = this._permanentResistance();
      const temporary = Math.max(0, this._number(this.actor.system.resistenciaTemporaria));
      return base + temporary;
    }

    async _evaluateOpenTest({ title, subtitle = "", level = 0, modifier = 0, detail = "" }) {
      const effectiveLevel = this._effectiveLevel(level);
      const woundedPenalty = effectiveLevel < level;
      const skillBonus = effectiveLevel * 3;
      const totalModifier = skillBonus + modifier;
      const formula = totalModifier === 0
        ? "3d6"
        : `3d6 ${totalModifier > 0 ? "+" : "-"} ${Math.abs(totalModifier)}`;
      const roll = await new Roll(formula).evaluate({ async: true });
      const dice = roll.dice[0]?.results?.map(result => result.result) || [];
      const diceTotal = dice.reduce((total, value) => total + value, 0);
      const modifierLabel = totalModifier === 0 ? "" : ` ${totalModifier > 0 ? "+" : "-"} ${Math.abs(totalModifier)}`;
      const rollBreakdown = `3d6 (${diceTotal})${modifierLabel} = ${roll.total}`;
      const epicFailure = dice.length === 3 && dice.every(value => value === 1);
      const epicSuccess = dice.length === 3 && dice.every(value => value === 6);
      const specialResult = epicFailure
        ? "<div class='chat-result'>Fracasso épico</div>"
        : epicSuccess
          ? "<div class='chat-result'>Sucesso épico</div>"
          : "";

      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `
          <div class="bandeira-chat-card open-test">
            <header>${this._escape(title)}</header>
            ${subtitle ? `<div class="chat-subtitle">${this._escape(subtitle)}</div>` : ""}
            ${specialResult}
            <div class="chat-details">
              <span>Nível <strong>${effectiveLevel}</strong></span>
              <span>Bônus <strong>+${skillBonus}</strong></span>
              ${modifier ? `<span>Modificador <strong>${modifier > 0 ? "+" : ""}${modifier}</strong></span>` : ""}
              <span>Mod. final <strong>${totalModifier > 0 ? "+" : ""}${totalModifier}</strong></span>
              <span>Rolagem <strong>${rollBreakdown}</strong></span>
            </div>
            ${woundedPenalty ? "<div class='chat-warning'>Penalidade por ferimento aplicada.</div>" : ""}
            ${detail ? `<div class="chat-damage">${this._escape(detail)}</div>` : ""}
          </div>`
      });
    }

    _targetedToken(purpose = "automatizar o ataque") {
      const targets = [...(game.user?.targets || [])];
      if (targets.length !== 1) {
        ui.notifications.warn(targets.length > 1
          ? `Mire apenas um alvo para ${purpose}.`
          : `Mire um token alvo antes de ${purpose}.`);
        return null;
      }
      return targets[0];
    }

    _isMeleeAttack(alcance = "") {
      const normalized = this._normalizeName(alcance);
      return normalized.includes("corpo a corpo");
    }

    _targetDefense(targetActor, type = "passiva") {
      const system = targetActor?.system || {};
      if (targetActor?.type === "criatura") {
        const passiva = this._number(system.defesaPassiva);
        const ativa = this._number(system.defesaAtiva);
        return {
          value: type === "ativa" ? ativa : passiva,
          label: type === "ativa" ? "Defesa ativa" : "Defesa passiva"
        };
      }

      if (targetActor?.type === "personagem") {
        const protecao = system.protecao || {};
        const capacete = protecao.capacete ? 1 : 0;
        const peitoral = protecao.peitoral ? 1 : 0;
        const escudo = protecao.escudo ? 1 : 0;
        const bonusExtra = this._number(protecao.bonusExtra);
        const passiva = Math.min(5, capacete + peitoral + bonusExtra);
        const armas = this._asArray(system.armas);
        const habilidades = this._asArray(system.habilidades);
        const armaDefensiva = protecao.armaDefensiva ?? "desarmado";
        let bonusAtivo = 0;
        let escudoAplicado = false;

        if (armaDefensiva === "desarmado") {
          bonusAtivo = Math.max(0, ...habilidades
            .filter(habilidade => this._normalizeName(habilidade.categoria) === "artes marciais")
            .map(habilidade => this._number(habilidade.nivel)));
        } else {
          const arma = armas[Number(armaDefensiva)];
          const habilidade = habilidades.find(item =>
            this._normalizeName(item.nome) === this._normalizeName(arma?.tipoHabilidade)
          );
          bonusAtivo = this._number(habilidade?.nivel);
          escudoAplicado = Boolean(arma && escudo && /^1(?:\D|$)/.test(String(arma.maos || "").trim()));
        }

        const ativa = Math.min(5, passiva + bonusAtivo + (escudoAplicado ? 1 : 0));
        return {
          value: type === "ativa" ? ativa : passiva,
          label: type === "ativa" ? "Defesa ativa" : "Defesa passiva"
        };
      }

      const passiva = this._number(system.defesaPassiva ?? system.defesa?.passiva);
      const ativa = this._number(system.defesaAtiva ?? system.defesa?.ativa);
      return {
        value: type === "ativa" ? ativa : passiva,
        label: type === "ativa" ? "Defesa ativa" : "Defesa passiva"
      };
    }

    async _evaluateAttack({ title, subtitle = "", level = 0, modifier = 0, damage = 1, alcance = "", notes = "", difficulty = 12, difficultyModifier = 0, difficultyModifierLabel = "", damageBase = null, damageModifier = 0, damageModifierLabel = "" }) {
      const target = this._targetedToken();
      if (!target?.actor) return;

      const defenseType = this._isMeleeAttack(alcance) ? "ativa" : "passiva";
      const defense = this._targetDefense(target.actor, defenseType);
      const effectiveLevel = this._effectiveLevel(level);
      const woundedPenalty = effectiveLevel < level;
      const skillBonus = effectiveLevel * 3;
      const rollModifier = skillBonus + modifier;
      const specialDifficulty = Math.max(0, this._number(difficultyModifier));
      const finalDifficulty = difficulty + specialDifficulty + defense.value;
      const formula = rollModifier === 0
        ? "3d6"
        : `3d6 ${rollModifier > 0 ? "+" : "-"} ${Math.abs(rollModifier)}`;
      const roll = await new Roll(formula).evaluate({ async: true });
      const dice = roll.dice[0]?.results?.map(result => result.result) || [];
      const epicFailure = dice.length === 3 && dice.every(value => value === 1);
      const epicSuccess = dice.length === 3 && dice.every(value => value === 6);
      const success = epicSuccess || (!epicFailure && roll.total >= finalDifficulty);
      const resultLabel = epicSuccess ? "Sucesso épico" : epicFailure ? "Fracasso épico" : success ? "Acertou" : "Errou";
      const targetUuid = target.document?.uuid || "";
      const targetName = target.name || target.actor.name;
      const attackName = title || "ataque";
      const headerText = `${this.actor.name} atacou ${targetName} usando ${attackName}`;
      const difficultyParts = [`Base ${difficulty}`];
      if (specialDifficulty) difficultyParts.push(`${difficultyModifierLabel || "Modificador"} ${specialDifficulty}`);
      difficultyParts.push(`${defense.label} ${defense.value}`);
      const difficultyBreakdown = `${difficultyParts.join(" + ")} = ${finalDifficulty}`;
      const baseDamage = damageBase === null ? damage : this._number(damageBase, damage);
      const extraDamage = Math.max(0, this._number(damageModifier));
      const damageBreakdown = extraDamage
        ? `${baseDamage} + ${damageModifierLabel || "modificador"} ${extraDamage} = ${damage}`
        : `${damage}`;
      const damageNotes = notes ? ` \u00b7 ${this._escape(notes)}` : "";

      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `
          <div class="bandeira-chat-card attack ${success ? "success" : "failure"}">
            <header>${this._escape(headerText)}</header>
            ${subtitle ? `<div class="chat-subtitle">${this._escape(subtitle)}</div>` : ""}
            <div class="chat-attack-summary">
              <div class="chat-attack-difficulty" data-breakdown="${this._escape(difficultyBreakdown)}"><span>Dificuldade:</span><strong>${finalDifficulty}</strong></div>
              ${success ? `<div class="chat-attack-damage" data-breakdown="${this._escape(damageBreakdown)}"><span>Dano:</span><strong>${damage}</strong>${damageNotes}</div>` : ""}
            </div>
            <div class="chat-result ${success ? "success" : "failure"}">${resultLabel}</div>
            ${woundedPenalty ? "<div class='chat-warning'>Penalidade por ferimento aplicada.</div>" : ""}
            ${success ? `<button type="button" class="bandeira-apply-damage" data-action="apply-attack-damage" data-target-uuid="${this._escape(targetUuid)}" data-amount="${damage}">Aplicar dano</button>` : ""}
          </div>`
      });
    }

    async _evaluatePowerTest({ poder, effect, effectLevel, learnedLevel, modifier, cost, target = null }) {
      const effectiveLevel = this._effectiveLevel(learnedLevel);
      const skillBonus = effectiveLevel * 3;
      const totalModifier = skillBonus + modifier;
      const formula = totalModifier === 0 ? "3d6" : `3d6 ${totalModifier > 0 ? "+" : "-"} ${Math.abs(totalModifier)}`;
      const roll = await new Roll(formula).evaluate({ async: true });
      const dice = roll.dice[0]?.results?.map(result => result.result) || [];
      const diceTotal = dice.reduce((total, value) => total + value, 0);
      const modifierLabel = totalModifier === 0 ? "" : ` ${totalModifier > 0 ? "+" : "-"} ${Math.abs(totalModifier)}`;
      const rollBreakdown = `3d6 (${diceTotal})${modifierLabel} = ${roll.total}`;
      const epicFailure = dice.length === 3 && dice.every(value => value === 1);
      const epicSuccess = dice.length === 3 && dice.every(value => value === 6);
      const difficulty = [0, 12, 15, 18][effectLevel];
      const success = epicSuccess || (!epicFailure && roll.total >= difficulty);
      const resultLabel = epicSuccess ? "Sucesso épico" : epicFailure ? "Fracasso épico" : success ? "Sucesso" : "Fracasso";
      const damage = Math.max(0, this._number(effect.dano));
      const targetUuid = target?.document?.uuid || "";
      const targetName = target?.name || target?.actor?.name || "";
      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<div class="bandeira-chat-card power">
          <header>${this._escape(effect.nome)}</header>
          <div class="chat-subtitle">${this._escape(poder.nome)} · Efeito de nível ${effectLevel}</div>
          <div class="chat-result ${success ? "success" : "failure"}">${resultLabel}</div>
          <div class="chat-details">
            <span>Dificuldade <strong>${difficulty}</strong></span>
            <span>Bônus <strong>+${skillBonus}</strong></span>
            <span>Energia <strong>−${cost}</strong></span>
            ${modifier ? `<span>Modificador <strong>${modifier > 0 ? "+" : ""}${modifier}</strong></span>` : ""}
          </div>
          ${success && damage ? `<div class="chat-power-damage"><span>Alvo:</span><strong>${this._escape(targetName)}</strong></div><div class="chat-power-damage"><span>Dano:</span><strong>${damage}</strong></div>` : ""}
          <div class="chat-power-notes">${this._escape(effect.descricao)}</div>
          ${success && damage ? `<button type="button" class="bandeira-apply-damage" data-action="apply-attack-damage" data-target-uuid="${this._escape(targetUuid)}" data-amount="${damage}">Aplicar dano</button>` : ""}
        </div>`
      });
    }

    async _rollHabilidade(event) {
      event.preventDefault();
      const index = Number(event.currentTarget.dataset.index);
      const habilidade = this._asArray(this.actor.system.habilidades)[index];
      if (!habilidade) return;
      const modifier = await this._askModifier(habilidade.nome || "Habilidade");
      if (modifier === null) return;
      await this._evaluateOpenTest({
        title: habilidade.nome || "Habilidade",
        subtitle: habilidade.categoria || "Façanha",
        level: this._number(habilidade.nivel),
        modifier
      });
    }

    async _rollGenerico(event) {
      event.preventDefault();
      const modifier = await this._askModifier("Rolagem de 3d6");
      if (modifier === null) return;
      await this._evaluateOpenTest({
        title: "Rolagem livre",
        subtitle: "3d6 sem habilidade",
        modifier
      });
    }

    async _rollIniciativa(event) {
      event.preventDefault();

      const controlledToken = canvas.tokens?.controlled?.find(token => token.actor?.id === this.actor.id);
      const activeToken = this.actor.getActiveTokens(true, true)?.[0];
      const token = controlledToken || activeToken;

      if (!token) {
        return ui.notifications.warn("Coloque o personagem na cena ou selecione seu token antes de rolar iniciativa.");
      }

      const combat = game.combat;
      if (!combat) {
        return ui.notifications.warn("O mestre precisa iniciar um encontro antes da rolagem de iniciativa.");
      }

      const modifier = await this._askModifier("Iniciativa");
      if (modifier === null) return;

      let combatant = combat.combatants.find(entry =>
        entry.tokenId === token.id && entry.sceneId === canvas.scene.id
      );

      if (!combatant) {
        const created = await combat.createEmbeddedDocuments("Combatant", [{
          tokenId: token.id,
          sceneId: canvas.scene.id,
          actorId: this.actor.id,
          hidden: token.document.hidden
        }]);
        combatant = created[0];
      }

      if (!combatant) {
        return ui.notifications.error("Não foi possível adicionar o token ao encontro.");
      }

      await combat.rollInitiative([combatant.id], {
        formula: modifier === 0 ? "3d6" : `3d6 ${modifier > 0 ? "+" : "-"} ${Math.abs(modifier)}`,
        updateTurn: true,
        messageOptions: {
          flavor: `${this.actor.name} rola iniciativa${modifier ? ` com modificador ${modifier > 0 ? "+" : ""}${modifier}` : ""}.`
        }
      });

      ui.combat?.render(true);
    }

    async _adjustCondition(event) {
      event.preventDefault();
      const field = event.currentTarget.dataset.field;
      const amount = this._number(event.currentTarget.dataset.amount);
      const allowed = ["dano", "danoCritico", "energia", "resistenciaTemporaria"];
      if (!allowed.includes(field)) return;

      if (field === "dano") {
        const dano = this._number(this.actor.system.dano);
        const danoCritico = this._number(this.actor.system.danoCritico);
        const resistenciaMaxima = this._currentResistanceMaximum();
        if (amount > 0 && dano >= resistenciaMaxima) {
          return this.actor.update({ "system.danoCritico": Math.min(5, danoCritico + amount) });
        }
        if (amount < 0 && danoCritico > 0) {
          return this.actor.update({ "system.danoCritico": Math.max(0, danoCritico + amount) });
        }
      }

      const maximum = field === "danoCritico"
        ? 5
        : field === "dano"
          ? this._currentResistanceMaximum()
          : field === "resistenciaTemporaria"
            ? Number.MAX_SAFE_INTEGER
            : this._supernaturalEnergyMaximum();
      const current = this._number(this.actor.system[field]);
      const next = Math.max(0, Math.min(maximum, current + amount));
      await this.actor.update({ [`system.${field}`]: next });
    }

    _supernaturalBaseLevel() {
      const info = CAMINHOS_SOBRENATURAIS[this._detectedSupernaturalPath()];
      if (!info) return 0;
      const habilidade = this._asArray(this.actor.system.habilidades).find(item =>
        this._normalizeName(item.nome) === this._normalizeName(info.habilidade)
      );
      return this._number(habilidade?.nivel);
    }

    _supernaturalEnergyMaximum() {
      return [0, 5, 10, 20][Math.max(0, Math.min(3, this._supernaturalBaseLevel()))];
    }

    async _restoreEnergy(event) {
      event.preventDefault();
      const maximum = this._supernaturalEnergyMaximum();
      if (!maximum) return ui.notifications.warn("Escolha um caminho sobrenatural e adquira sua habilidade básica primeiro.");
      await this.actor.update({ "system.energia": maximum });
      ui.notifications.info("Energia recuperada após um descanso completo.");
    }

    async _setSupernaturalPath(event) {
      event.preventDefault();
      const value = String(event.currentTarget.value || "");
      const atualFolego = this.actor.system.caminhoFolego || "";
      const grupoIncompativel = value === "bem" ? "poderes malignos" : value === "mal" ? "poderes bondosos" : "";
      const poderes = this._asArray(this.actor.system.poderes);
      const possuiPoderDeLinha = poderes.some(poder => ["poderes bondosos", "poderes malignos"].includes(this._normalizeName(poder.grupo)));
      const possuiIncompativel = grupoIncompativel && poderes.some(poder =>
        this._normalizeName(poder.grupo) === this._normalizeName(grupoIncompativel)
      );
      if (possuiIncompativel || (!value && possuiPoderDeLinha)) {
        event.currentTarget.value = atualFolego;
        return ui.notifications.error("Remova primeiro os poderes bondosos ou malignos antes de alterar o caminho do Fôlego.");
      }
      await this.actor.update({ "system.caminhoFolego": value });
    }

    async _addArma(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const habilidadesArmas = [...new Set(ARMAS_CATALOGO.map(arma => arma.tipoHabilidade).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b, "pt-BR"));
      const habilidadesOptions = habilidadesArmas
        .map(nome => `<option value="${this._escape(nome)}">${this._escape(nome)}</option>`)
        .join("");
      const rows = ARMAS_CATALOGO.map(arma => `
        <label class="weapon-catalog-row">
          <input type="checkbox" name="armasSelecionadas" value="${this._escape(arma.nome)}" />
          <span class="weapon-catalog-name">${this._escape(arma.nome)}</span>
          <span>${this._escape(arma.tipoHabilidade)}</span>
          <span>${this._escape(this._weaponHandsLabel(arma.maos))}</span>
          <span>${this._escape(arma.alcance)}</span>
          <strong>${arma.dano}${arma.forcaBonus ? " (3)" : ""}</strong>
        </label>`).join("");
      const dialog = new Dialog({
        title: "Adicionar armas",
        content: `
          <div class="bandeira-weapon-dialog">
            <div class="weapon-catalog-header"><span></span><span>Arma</span><span>Habilidade</span><span>Mãos</span><span>Uso / alcance</span><span>Dano</span></div>
            <div class="weapon-catalog-list">${rows}</div>
            <label class="weapon-custom-toggle">
              <input type="checkbox" name="usarArmaPersonalizada" />
              <span>Adicionar arma personalizada</span>
            </label>
            <div class="weapon-custom-field">
              <label class="wide"><span>Nome da arma personalizada</span><input type="text" name="armaPersonalizada" placeholder="Digite o nome da arma" /></label>
              <label><span>Habilidade vinculada</span><select name="armaPersonalizadaHabilidade">${habilidadesOptions}</select></label>
              <label><span>Mãos</span><input type="text" name="armaPersonalizadaMaos" value="1" /></label>
              <label><span>Uso / alcance</span><input type="text" name="armaPersonalizadaAlcance" value="Corpo a corpo" /></label>
              <label><span>Dano</span><input type="number" min="1" name="armaPersonalizadaDano" value="1" /></label>
              <label><span>Recarga</span><input type="text" name="armaPersonalizadaRecarga" placeholder="—" /></label>
              <label class="wide"><span>Notas</span><input type="text" name="armaPersonalizadaNotas" placeholder="Observações, exigências ou efeitos especiais..." /></label>
            </div>
          </div>`,
        buttons: {
          add: {
            icon: '<i class="fa-solid fa-plus"></i>',
            label: "Adicionar selecionadas",
            callback: html => {
              const selecionadas = html.find("[name='armasSelecionadas']:checked")
                .map((_, input) => String(input.value)).get();
              if (html.find("[name='usarArmaPersonalizada']").prop("checked")) {
                const personalizada = String(html.find("[name='armaPersonalizada']").val() || "").trim();
                if (personalizada) selecionadas.push({
                  nome: personalizada,
                  tipoHabilidade: String(html.find("[name='armaPersonalizadaHabilidade']").val() || "").trim(),
                  maos: String(html.find("[name='armaPersonalizadaMaos']").val() || "1").trim(),
                  alcance: String(html.find("[name='armaPersonalizadaAlcance']").val() || "Corpo a corpo").trim(),
                  dano: Math.max(1, this._number(html.find("[name='armaPersonalizadaDano']").val(), 1)),
                  forcaBonus: false,
                  recarga: String(html.find("[name='armaPersonalizadaRecarga']").val() || "").trim(),
                  notas: String(html.find("[name='armaPersonalizadaNotas']").val() || "").trim()
                });
              }
              return this._createArmas(selecionadas);
            }
          },
          cancel: { label: "Cancelar" }
        },
        default: "add"
      }, {
        classes: ["dialog", "bandeira-weapon-window"],
        width: 780,
        height: 650,
        resizable: true
      });
      const hookId = Hooks.on("renderDialog", (app, html) => {
        if (app !== dialog) return;
        Hooks.off("renderDialog", hookId);
        const toggle = html.find("[name='usarArmaPersonalizada']");
        const field = html.find(".weapon-custom-field");
        const updateCustom = () => {
          const visible = toggle.prop("checked");
          field.toggleClass("visible", visible);
          if (visible) field.find("input").trigger("focus");
        };
        toggle.on("change", updateCustom);
        updateCustom();
      });
      dialog.render(true);
    }

    async _createArmas(nomes) {
      const selecionadas = (nomes || []).filter(item => typeof item === "object" || String(item || "").trim());
      if (!selecionadas.length) return ui.notifications.warn("Selecione pelo menos uma arma.");
      const armas = this._asArray(this.actor.system.armas);
      for (const item of selecionadas) {
        if (typeof item === "object") {
          armas.push(foundry.utils.deepClone(item));
          continue;
        }
        const nome = String(item || "").trim();
        const catalogada = ARMAS_CATALOGO.find(arma => this._normalizeName(arma.nome) === this._normalizeName(nome));
        armas.push(catalogada
          ? foundry.utils.deepClone(catalogada)
          : { nome, tipoHabilidade: "", maos: "1", alcance: "Corpo a corpo", dano: 1, forcaBonus: false, recarga: "", notas: "" });
      }
      await this.actor.update({ "system.armas": armas });
      ui.notifications.info(`${selecionadas.length} arma(s) adicionada(s).`);
    }

    async _removeArma(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      if (!Number.isInteger(index)) return;
      const armas = this._asArray(this.actor.system.armas);
      const removida = armas[index];
      if (!removida || !await this._confirmDeletion(removida.nome || "esta arma")) return;
      armas.splice(index, 1);
      const update = { "system.armas": armas };
      const selecionada = this.actor.system.protecao?.armaDefensiva;
      if (selecionada !== undefined && selecionada !== "desarmado") {
        const selecionadaIndex = Number(selecionada);
        if (selecionadaIndex === index) update["system.protecao.armaDefensiva"] = "desarmado";
        else if (selecionadaIndex > index) update["system.protecao.armaDefensiva"] = String(selecionadaIndex - 1);
      }
      await this.actor.update(update);
    }

    async _rollArma(event) {
      event.preventDefault();
      const index = Number(event.currentTarget.dataset.index);
      const arma = this._asArray(this.actor.system.armas)[index];
      if (!arma) return;
      const habilidade = this._asArray(this.actor.system.habilidades).find(item =>
        String(item.nome || "").trim().toLocaleLowerCase() === String(arma.tipoHabilidade || "").trim().toLocaleLowerCase()
      );
      const forcaFisica = this._asArray(this.actor.system.habilidades).find(item => this._normalizeName(item.nome) === "forca fisica");
      if (arma.forcaBonus && this._number(forcaFisica?.nivel) < 1) {
        return ui.notifications.error(`${arma.nome || "Esta arma"} exige Força física nível 1 para ser utilizada.`);
      }
      const attackOptions = await this._askAttackOptions(arma.nome || "Ataque");
      if (!attackOptions) return;
      const mode = attackOptions.mode;
      if (mode === "forte" && !this._isMeleeAttack(arma.alcance)) {
        return ui.notifications.warn("Ataque forte só pode ser usado em ataque corpo a corpo.");
      }
      const strongOrPrecise = mode === "forte" || mode === "preciso";
      const labels = { normal: "Ataque", forte: "Ataque forte", preciso: "Ataque preciso" };
      const damageBase = this._number(arma.dano, 1) + (arma.forcaBonus && this._number(forcaFisica?.nivel) >= 3 ? 1 : 0);
      const damage = damageBase + (strongOrPrecise ? 2 : 0);
      const damageModifier = strongOrPrecise ? 2 : 0;
      await this._evaluateAttack({
        title: arma.nome || "Arma",
        subtitle: `${labels[mode]} \u00b7 ${arma.alcance || "Alcance n\u00e3o informado"} \u00b7 ${arma.tipoHabilidade || "Sem habilidade vinculada"}`,
        level: this._number(habilidade?.nivel),
        modifier: attackOptions.modifier,
        damage,
        alcance: arma.alcance || "",
        notes: arma.notas || "",
        damageBase,
        damageModifier,
        damageModifierLabel: strongOrPrecise ? labels[mode] : "",
        difficulty: 12,
        difficultyModifier: strongOrPrecise ? 2 : 0,
        difficultyModifierLabel: strongOrPrecise ? labels[mode] : ""
      });
    }

    async _addPoder(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const caminho = this._detectedSupernaturalPath();
      const alinhamento = this.actor.system.caminhoFolego;
      if (!caminho) return ui.notifications.warn("Escolha primeiro o caminho sobrenatural do personagem.");
      if (caminho === "folego" && !alinhamento) return ui.notifications.warn("Escolha primeiro o caminho bondoso ou maligno do Fôlego.");
      if (!this._supernaturalBaseLevel()) return ui.notifications.warn("A habilidade básica do caminho precisa estar no nível 1 ou superior.");

      const grupos = caminho === "fe"
        ? [{ titulo: "Graças divinas", nomes: PODERES_CATALOGO.fe }]
        : caminho === "ifa"
          ? [{ titulo: "Poderes de Ifá", nomes: PODERES_CATALOGO.ifa }]
          : [
              { titulo: alinhamento === "bem" ? "Poderes bondosos" : "Poderes malignos", nomes: PODERES_CATALOGO[`folego_${alinhamento}`] },
              { titulo: "Poderes neutros", nomes: PODERES_CATALOGO.folego_neutro }
            ];
      const existentes = new Set(this._asArray(this.actor.system.poderes).map(poder => this._normalizeName(poder.nome)));
      const secoes = grupos.map(grupo => `
        <section class="power-catalog-group">
          <h3>${this._escape(grupo.titulo)}</h3>
          <div class="power-catalog-options">${[...grupo.nomes].sort((a, b) => a.localeCompare(b, "pt-BR")).map(nome => `
            <label class="catalog-skill-option ${existentes.has(this._normalizeName(nome)) ? "acquired" : ""}">
              <input type="checkbox" name="poderesSelecionados" value="${this._escape(nome)}" data-group="${this._escape(grupo.titulo)}" ${existentes.has(this._normalizeName(nome)) ? "checked disabled" : ""} />
              <span>${this._escape(nome)}</span>
            </label>`).join("")}</div>
        </section>`).join("");
      const pontos = this._pointsState();
      const dialog = new Dialog({
        title: "Adicionar poderes",
        content: `<div class="bandeira-power-catalog-dialog">
          <div class="catalog-summary"><span>Disponíveis: <strong>${pontos.disponiveis}</strong></span><span>Nível básico: <strong>${this._supernaturalBaseLevel()}</strong></span></div>
          <div class="power-catalog-list">${secoes}</div>
          <label class="catalog-custom-toggle"><input type="checkbox" name="usarPoderPersonalizado" /><span>Adicionar poder personalizado</span></label>
          <label class="power-custom-field"><span>Nome personalizado</span><input type="text" name="poderPersonalizado" placeholder="Digite o nome do poder" /></label>
        </div>`,
        buttons: {
          add: {
            icon: '<i class="fa-solid fa-plus"></i>', label: "Adicionar selecionados",
            callback: html => {
              const selecionados = html.find("[name='poderesSelecionados']:checked:not(:disabled)")
                .map((_, input) => ({ nome: input.value, grupo: input.dataset.group })).get();
              if (html.find("[name='usarPoderPersonalizado']").prop("checked")) {
                const nome = String(html.find("[name='poderPersonalizado']").val() || "").trim();
                if (nome) selecionados.push({ nome, grupo: "Personalizado", personalizado: true });
              }
              return this._createPoderes(selecionados);
            }
          },
          cancel: { label: "Cancelar" }
        },
        default: "add"
      }, { classes: ["dialog", "bandeira-catalog-window", "bandeira-power-window"], width: 600, height: 680, resizable: true });
      const hookId = Hooks.on("renderDialog", (app, html) => {
        if (app !== dialog) return;
        Hooks.off("renderDialog", hookId);
        const toggle = html.find("[name='usarPoderPersonalizado']");
        const field = html.find(".power-custom-field");
        const update = () => field.toggleClass("visible", toggle.prop("checked"));
        toggle.on("change", update);
        update();
      });
      dialog.render(true);
    }

    async _createPoderes(selecionados) {
      if (!selecionados?.length) return ui.notifications.warn("Selecione pelo menos um poder novo.");
      const poderes = this._asArray(this.actor.system.poderes);
      const novos = selecionados.filter(item => !poderes.some(poder => this._normalizeName(poder.nome) === this._normalizeName(item.nome)));
      if (!novos.length) return ui.notifications.warn("Os poderes selecionados já foram adquiridos.");
      if (this._pointsState().disponiveis < novos.length) return ui.notifications.error(`Pontos insuficientes. A seleção custa ${novos.length} ponto(s).`);
      for (const item of novos) {
        const detalhes = this._powerDetails(item.nome);
        poderes.push({
          nome: item.nome,
          nivel: 1,
          grupo: item.grupo,
          personalizado: Boolean(item.personalizado),
          notas: detalhes?.descricao || ""
        });
      }
      await this.actor.update({ "system.poderes": poderes });
      ui.notifications.info(`${novos.length} poder(es) adicionado(s).`);
    }

    async _adjustPoderLevel(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      const amount = this._number(event.currentTarget.dataset.amount);
      const poderes = this._asArray(this.actor.system.poderes);
      const poder = poderes[index];
      if (!poder || !amount) return;
      const anterior = Math.max(1, this._number(poder.nivel, 1));
      const novo = Math.max(1, Math.min(3, this._supernaturalBaseLevel(), anterior + amount));
      if (novo === anterior) return ui.notifications.warn("O nível do poder não pode ultrapassar o nível da habilidade básica.");
      const custo = this._skillCost(novo) - this._skillCost(anterior);
      if (custo > 0 && this._pointsState().disponiveis < custo) return ui.notifications.error(`Pontos insuficientes. Este aumento exige ${custo} ponto(s).`);
      poder.nivel = novo;
      await this.actor.update({ "system.poderes": poderes });
    }

    async _removePoder(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      if (!Number.isInteger(index)) return;
      const poderes = this._asArray(this.actor.system.poderes);
      const removido = poderes[index];
      if (!removido || !await this._confirmDeletion(removido.nome || "este poder")) return;
      poderes.splice(index, 1);
      await this.actor.update({ "system.poderes": poderes });
    }

    async _usePoder(event) {
      event.preventDefault();
      const index = Number(event.currentTarget.dataset.index);
      const poder = this._asArray(this.actor.system.poderes)[index];
      if (!poder) return;
      const nivel = Math.max(1, Math.min(3, this._number(poder.nivel, 1)));
      const escolha = await this._askPowerUse(poder);
      if (!escolha) return;
      const modifier = await this._askModifier(escolha.effect.nome || poder.nome || "Poder sobrenatural");
      if (modifier === null) return;
      const custo = [0, 1, 2, 4][escolha.level];
      const powerDamage = Math.max(0, this._number(escolha.effect.dano));
      const target = powerDamage ? this._targetedToken("aplicar o dano do poder") : null;
      if (powerDamage && !target?.actor) return;
      const persistentActor = this._persistentActor();
      const energiaMaxima = persistentActor === this.actor
        ? this._supernaturalEnergyMaximum()
        : supernaturalEnergyMaximum(persistentActor.system || {});
      const energia = Math.min(energiaMaxima, this._number(persistentActor.system.energia));
      if (custo > energia) return ui.notifications.warn("Energia insuficiente para usar este poder.");
      await persistentActor.update({ "system.energia": energia - custo });
      await this._evaluatePowerTest({
        poder,
        effect: escolha.effect,
        effectLevel: escolha.level,
        learnedLevel: nivel,
        modifier,
        cost: custo,
        target
      });
    }
  }

  class BandeiraCriaturaSheet extends BandeiraPersonagemSheet {
    constructor(...args) {
      super(...args);
      this._activeTab = "combate";
    }

    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["bandeira", "sheet", "actor", "criatura"],
        template: `systems/${BANDEIRA_ID}/templates/criatura-sheet.html`,
        width: 940,
        height: 820
      });
    }

    _permanentResistance() {
      return Math.max(1, this._number(this.actor.system.resistencia, 10));
    }

    _currentResistanceMaximum() {
      return this._permanentResistance();
    }

    getData() {
      const data = super.getData();
      const system = this.actor.system;
      const resistencia = Math.max(1, this._number(system.resistencia, 10));
      const danoMaximo = Math.ceil(resistencia * 1.5);
      const dano = Math.max(0, Math.min(danoMaximo, this._number(system.dano)));
      const resistenciaLivre = Math.max(0, resistencia - dano);
      const morto = dano >= danoMaximo;
      const inconsciente = !morto && dano >= resistencia;
      const ferido = !morto && !inconsciente && resistenciaLivre <= 3;
      const movimentoBase = Math.max(0, this._number(system.movimento, 3));
      const movimentoReduzido = dano >= resistencia / 2;

      data.system = system;
      data.resistenciaMaxima = resistencia;
      data.resistenciaLivre = resistenciaLivre;
      data.resistenciaPercentual = Math.max(0, Math.min(100, (resistenciaLivre / resistencia) * 100));
      data.danoMaximo = danoMaximo;
      data.estado = morto ? "Morto" : inconsciente ? "Inconsciente" : ferido ? "Ferido" : "Bem";
      data.estadoClasse = morto || inconsciente ? "danger" : ferido ? "warning" : "healthy";
      data.movimentoReduzido = movimentoReduzido;
      data.movimentoAtual = Math.max(0, movimentoBase - (movimentoReduzido ? 1 : 0));
      data.habilidades = this._asArray(system.habilidades).map((habilidade, index) => ({
        nome: habilidade.nome ?? "",
        nivel: Math.max(0, this._number(habilidade.nivel)),
        bonus: Math.max(0, this._number(habilidade.nivel)) * 3,
        notas: habilidade.notas ?? "",
        index
      }));
      data.ataques = this._asArray(system.ataques).map((ataque, index) => ({
        nome: ataque.nome ?? "",
        nivel: Math.max(0, this._number(ataque.nivel)),
        dano: Math.max(0, this._number(ataque.dano, 1)),
        alcance: ataque.alcance ?? "Corpo a corpo",
        efeito: ataque.efeito ?? "",
        index
      }));
      return data;
    }

    activateListeners(html) {
      ActorSheet.prototype.activateListeners.call(this, html);
      html.on("click", "[data-tab]", this._changeTab.bind(this));
      html.on("click", "[data-action='toggle-edit-mode']", this._toggleEditMode.bind(this));
      html.on("click", "[data-action='roll-generico']", this._rollGenerico.bind(this));
      html.on("click", "[data-action='roll-iniciativa']", this._rollIniciativa.bind(this));
      html.on("click", "[data-action='adjust-creature-damage']", this._adjustCreatureDamage.bind(this));
      html.on("click", "[data-action='add-creature-skill']", this._addCreatureSkill.bind(this));
      html.on("click", "[data-action='remove-creature-skill']", this._removeCreatureSkill.bind(this));
      html.on("click", "[data-action='roll-creature-skill']", this._rollCreatureSkill.bind(this));
      html.on("click", "[data-action='add-creature-attack']", this._addCreatureAttack.bind(this));
      html.on("click", "[data-action='remove-creature-attack']", this._removeCreatureAttack.bind(this));
      html.on("click", "[data-action='roll-creature-attack']", this._rollCreatureAttack.bind(this));
      this._showActiveTab(html);
    }

    async _adjustCreatureDamage(event) {
      event.preventDefault();
      await this._persistForm(event);
      const amount = this._number(event.currentTarget.dataset.amount);
      const resistencia = this._permanentResistance();
      const maximum = Math.ceil(resistencia * 1.5);
      const current = this._number(this.actor.system.dano);
      await this.actor.update({ "system.dano": Math.max(0, Math.min(maximum, current + amount)) });
    }

    async _addCreatureSkill(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const habilidades = this._asArray(this.actor.system.habilidades);
      habilidades.push({ nome: "", nivel: 1, notas: "" });
      await this.actor.update({ "system.habilidades": habilidades });
    }

    async _removeCreatureSkill(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      const habilidades = this._asArray(this.actor.system.habilidades);
      const removida = habilidades[index];
      if (!removida || !await this._confirmDeletion(removida.nome || "esta habilidade")) return;
      habilidades.splice(index, 1);
      await this.actor.update({ "system.habilidades": habilidades });
    }

    async _rollCreatureSkill(event) {
      event.preventDefault();
      const habilidade = this._asArray(this.actor.system.habilidades)[Number(event.currentTarget.dataset.index)];
      if (!habilidade) return;
      const modifier = await this._askModifier(habilidade.nome || "Habilidade da criatura");
      if (modifier === null) return;
      await this._evaluateOpenTest({
        title: habilidade.nome || "Habilidade da criatura",
        subtitle: "Habilidade de criatura",
        level: this._number(habilidade.nivel),
        modifier,
        detail: habilidade.notas || ""
      });
    }

    async _addCreatureAttack(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const ataques = this._asArray(this.actor.system.ataques);
      ataques.push({ nome: "Morder", nivel: 1, dano: 1, alcance: "Corpo a corpo", efeito: "" });
      await this.actor.update({ "system.ataques": ataques });
    }

    async _removeCreatureAttack(event) {
      event.preventDefault();
      if (!this._requireEditMode()) return;
      await this._persistForm(event);
      const index = Number(event.currentTarget.dataset.index);
      const ataques = this._asArray(this.actor.system.ataques);
      const removido = ataques[index];
      if (!removido || !await this._confirmDeletion(removido.nome || "este ataque")) return;
      ataques.splice(index, 1);
      await this.actor.update({ "system.ataques": ataques });
    }

    async _rollCreatureAttack(event) {
      event.preventDefault();
      const ataque = this._asArray(this.actor.system.ataques)[Number(event.currentTarget.dataset.index)];
      if (!ataque) return;
      const modifier = await this._askModifier(ataque.nome || "Ataque da criatura");
      if (modifier === null) return;
      await this._evaluateAttack({
        title: ataque.nome || "Ataque da criatura",
        subtitle: ataque.alcance || "Ataque físico",
        level: this._number(ataque.nivel),
        modifier,
        damage: this._number(ataque.dano, 1),
        alcance: ataque.alcance || "",
        notes: ataque.efeito || "",
        difficulty: 12
      });
    }
  }

  const numberValue = (value, fallback = 0) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  const asArrayValue = value => {
    if (Array.isArray(value)) return value;
    return Object.values(value || {});
  };

  const normalizeNameValue = value => String(value || "")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();

  const resistanceBonusForAbility = habilidade => {
    const nome = normalizeNameValue(habilidade?.nome);
    const nivel = numberValue(habilidade?.nivel);
    if (nome === "boxe") return nivel >= 2 ? nivel - 1 : 0;
    if (["acrobacia", "corrida", "forca fisica", "natacao", "escalada", "capoeira", "luta livre"].includes(nome) && nivel >= 3) return 1;
    return 0;
  };

  const supernaturalEnergyMaximum = system => {
    const habilidades = asArrayValue(system?.habilidades);
    for (const info of Object.values(CAMINHOS_SOBRENATURAIS)) {
      const habilidade = habilidades.find(entry =>
        normalizeNameValue(entry?.nome) === normalizeNameValue(info.habilidade)
        && numberValue(entry?.nivel) > 0
      );
      if (habilidade) return [0, 5, 10, 20][Math.max(0, Math.min(3, numberValue(habilidade.nivel)))] || 0;
    }
    return 0;
  };

  const calculateActorResources = (type, system = {}) => {
    if (type === "personagem") {
      const habilidades = asArrayValue(system.habilidades);
      const bonusResistencia = habilidades.reduce((total, habilidade) => total + resistanceBonusForAbility(habilidade), 0);
      const resistenciaBase = Math.min(15, 10 + bonusResistencia);
      const resistenciaMaxima = resistenciaBase + Math.max(0, numberValue(system.resistenciaTemporaria));
      const resistenciaAtual = Math.max(0, resistenciaMaxima - Math.max(0, numberValue(system.dano)));
      const energiaMaxima = supernaturalEnergyMaximum(system);
      const energiaAtual = Math.max(0, Math.min(energiaMaxima, numberValue(system.energia)));
      return {
        resistencia: { value: resistenciaAtual, max: resistenciaMaxima },
        energia: { value: energiaAtual, max: energiaMaxima }
      };
    }

    if (type === "criatura") {
      const resistenciaMaxima = Math.max(1, numberValue(system.resistencia, 10));
      const resistenciaAtual = Math.max(0, resistenciaMaxima - Math.max(0, numberValue(system.dano)));
      return {
        resistencia: { value: resistenciaAtual, max: resistenciaMaxima },
        energia: { value: 0, max: 0 }
      };
    }

    return null;
  };

  const setResourceChanges = (changes, type, system) => {
    const resources = calculateActorResources(type, system);
    if (!resources) return;
    foundry.utils.setProperty(changes, "system.resources.resistencia.value", resources.resistencia.value);
    foundry.utils.setProperty(changes, "system.resources.resistencia.max", resources.resistencia.max);
    foundry.utils.setProperty(changes, "system.resources.energia.value", resources.energia.value);
    foundry.utils.setProperty(changes, "system.resources.energia.max", resources.energia.max);
  };

  const tokenBarsDisplayMode = () => {
    return CONST.TOKEN_DISPLAY_MODES?.OWNER
      ?? CONST.TOKEN_DISPLAY_MODES?.ALWAYS
      ?? 40;
  };

  const tokenNameDisplayMode = () => {
    return CONST.TOKEN_DISPLAY_MODES?.ALWAYS ?? 50;
  };

  const desiredTokenActorLink = type => type === "personagem";

  const setDefaultTokenResourceBars = (changes, type = "") => {
    if (["personagem", "criatura"].includes(type)) {
      foundry.utils.setProperty(changes, "prototypeToken.actorLink", desiredTokenActorLink(type));
    }
    foundry.utils.setProperty(changes, "prototypeToken.displayName", tokenNameDisplayMode());
    foundry.utils.setProperty(changes, "prototypeToken.displayBars", tokenBarsDisplayMode());
    foundry.utils.setProperty(changes, "prototypeToken.bar1.attribute", "resources.resistencia");
    foundry.utils.setProperty(changes, "prototypeToken.bar2.attribute", "resources.energia");
    foundry.utils.setProperty(changes, `flags.${BANDEIRA_ID}.tokenResourcesConfigured`, true);
  };

  const syncActorResources = async actor => {
    if (!["personagem", "criatura"].includes(actor?.type)) return;
    const update = {};
    setResourceChanges(update, actor.type, actor.system || {});
    if (!actor.getFlag(BANDEIRA_ID, "tokenResourcesConfigured")) {
      setDefaultTokenResourceBars(update, actor.type);
    } else {
      if (actor.prototypeToken?.actorLink !== desiredTokenActorLink(actor.type)) foundry.utils.setProperty(update, "prototypeToken.actorLink", desiredTokenActorLink(actor.type));
      if (actor.prototypeToken?.displayName !== tokenNameDisplayMode()) foundry.utils.setProperty(update, "prototypeToken.displayName", tokenNameDisplayMode());
      if (!actor.prototypeToken?.bar1?.attribute) foundry.utils.setProperty(update, "prototypeToken.bar1.attribute", "resources.resistencia");
      if (!actor.prototypeToken?.bar2?.attribute) foundry.utils.setProperty(update, "prototypeToken.bar2.attribute", "resources.energia");
    }
    const flattened = foundry.utils.flattenObject(update);
    for (const [path, value] of Object.entries(flattened)) {
      if (foundry.utils.getProperty(actor, path) === value) delete flattened[path];
    }
    if (!Object.keys(flattened).length) return;
    await actor.update(foundry.utils.expandObject(flattened));
  };

  const syncPlacedPersonagemTokens = async () => {
    if (!game.user?.isGM) return;
    for (const scene of game.scenes || []) {
      const updates = [];
      for (const token of scene.tokens || []) {
        const baseActor = game.actors?.get(token.actorId);
        if (baseActor?.type !== "personagem" || token.actorLink) continue;
        updates.push({
          _id: token.id,
          actorLink: true,
          name: baseActor.name
        });
      }
      if (updates.length) await scene.updateEmbeddedDocuments("Token", updates);
    }
  };

  const askDamageAmount = async (amount, actorName = "alvo") => {
    const baseDamage = Math.max(0, numberValue(amount));
    const halfDamage = Math.max(1, Math.floor(baseDamage / 2));
    const safeActorName = foundry.utils.escapeHTML(String(actorName || "alvo"));

    return new Promise(resolve => {
      let hookId;
      const close = value => {
        if (hookId) Hooks.off("renderDialog", hookId);
        resolve(value);
      };

      const dialog = new Dialog({
        title: "Aplicar dano",
        content: `<form class="bandeira-dialog bandeira-damage-dialog">
          <p>Quanto dano deve ser aplicado em <strong>${safeActorName}</strong>?</p>
          <div class="damage-choice-grid">
            <label class="damage-choice selected">
              <input type="radio" name="damageMode" value="normal" checked>
              <span>Normal</span>
              <strong>${baseDamage}</strong>
            </label>
            <label class="damage-choice">
              <input type="radio" name="damageMode" value="half">
              <span>Metade</span>
              <strong>${halfDamage}</strong>
            </label>
            <label class="damage-choice custom">
              <input type="radio" name="damageMode" value="custom">
              <span>Personalizado</span>
              <input type="number" name="customDamage" min="0" step="1" value="${baseDamage}">
            </label>
          </div>
        </form>`,
        buttons: {
          apply: {
            label: '<i class="fa-solid fa-heart-crack"></i> Aplicar dano',
            callback: html => {
              const mode = html.find("input[name='damageMode']:checked").val();
              if (mode === "half") return close(halfDamage);
              if (mode === "custom") return close(Math.max(0, numberValue(html.find("input[name='customDamage']").val())));
              return close(baseDamage);
            }
          },
          cancel: {
            label: "Cancelar",
            callback: () => close(null)
          }
        },
        close: () => close(null)
      });

      hookId = Hooks.on("renderDialog", (app, html) => {
        if (app !== dialog) return;
        Hooks.off("renderDialog", hookId);
        hookId = null;
        html.find("input[name='damageMode']").on("change", event => {
          html.find(".damage-choice").removeClass("selected");
          event.currentTarget.closest(".damage-choice")?.classList.add("selected");
        });
        html.find("input[name='customDamage']").on("focus click", event => {
          const radio = event.currentTarget.closest(".damage-choice")?.querySelector("input[name='damageMode']");
          if (radio) {
            radio.checked = true;
            html.find(".damage-choice").removeClass("selected");
            event.currentTarget.closest(".damage-choice")?.classList.add("selected");
          }
        });
      });

      dialog.render(true);
    });
  };

  const initiativeFormula = modifier => {
    const value = numberValue(modifier);
    if (!value) return "3d6";
    return `3d6 ${value > 0 ? "+" : "-"} ${Math.abs(value)}`;
  };

  const askInitiativeModifier = async actorName => {
    return new Promise(resolve => {
      let hookId;
      const close = value => {
        if (hookId) Hooks.off("renderDialog", hookId);
        resolve(value);
      };

      const safeName = foundry.utils.escapeHTML(String(actorName || "Iniciativa"));
      const dialog = new Dialog({
        title: `Modificador — ${safeName}`,
        content: `
          <div class="bandeira-modifier-dialog">
            <p>Existe algum bônus ou penalidade para esta iniciativa?</p>
            <div class="modifier-stepper">
              <button type="button" data-step="-1">−</button>
              <input type="number" name="modifier" value="0" step="1">
              <button type="button" data-step="1">+</button>
            </div>
          </div>`,
        buttons: {
          roll: {
            label: '<i class="fa-solid fa-person-running"></i> Rolar',
            callback: html => close(numberValue(html.find("input[name='modifier']").val()))
          },
          cancel: {
            label: "Cancelar",
            callback: () => close(null)
          }
        },
        default: "roll",
        close: () => close(null)
      });

      hookId = Hooks.on("renderDialog", (app, html) => {
        if (app !== dialog) return;
        Hooks.off("renderDialog", hookId);
        hookId = null;
        const input = html.find("input[name='modifier']");
        html.find("[data-step]").on("click", event => {
          const step = numberValue(event.currentTarget.dataset.step);
          input.val(numberValue(input.val()) + step);
        });
        input.trigger("focus").trigger("select");
      });

      dialog.render(true);
    });
  };

  const patchCombatInitiative = () => {
    const CombatClass = CONFIG.Combat?.documentClass || (typeof Combat !== "undefined" ? Combat : null);
    if (!CombatClass?.prototype || CombatClass.prototype._bandeiraInitiativePatched) return;

    const originalRollInitiative = CombatClass.prototype.rollInitiative;
    CombatClass.prototype._bandeiraInitiativePatched = true;
    if (CONFIG.Combat?.initiative) {
      CONFIG.Combat.initiative.formula = "3d6";
      CONFIG.Combat.initiative.decimals = 0;
    }

    CombatClass.prototype.rollInitiative = async function(ids, options = {}) {
      const idList = typeof ids === "string" ? [ids] : Array.from(ids || []);
      const combatants = idList
        .map(id => this.combatants.get(id) || this.combatants.find(combatant => combatant.id === id))
        .filter(Boolean);
      const usesBandeiraInitiative = combatants.some(combatant =>
        ["personagem", "criatura"].includes(combatant.actor?.type)
      );

      if (!usesBandeiraInitiative || options.formula) {
        return originalRollInitiative.call(this, ids, options);
      }

      let modifier = 0;
      if (combatants.length === 1) {
        modifier = await askInitiativeModifier(combatants[0].name || combatants[0].actor?.name || "Iniciativa");
        if (modifier === null) return this;
      }

      const formula = initiativeFormula(modifier);
      const messageOptions = {
        ...(options.messageOptions || {}),
        flavor: options.messageOptions?.flavor || `Iniciativa${modifier ? ` com modificador ${modifier > 0 ? "+" : ""}${modifier}` : ""}.`
      };

      return originalRollInitiative.call(this, ids, {
        ...options,
        formula,
        messageOptions
      });
    };
  };

  patchCombatInitiative();

  const baseActorForTokenActor = (actor, tokenDocument = null) => {
    if (!actor || actor.type !== "personagem") return actor;
    return game.actors?.get(tokenDocument?.actorId)
      || game.actors?.get(actor.id)
      || actor;
  };

  const applyDamageToActor = async (actor, amount) => {
    actor = baseActorForTokenActor(actor);
    const damage = Math.max(0, numberValue(amount));
    if (!actor || damage <= 0) return false;
    const system = actor.system || {};

    if (actor.type === "personagem") {
      const habilidades = Array.isArray(system.habilidades) ? system.habilidades : Object.values(system.habilidades || {});
      const normalize = value => String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLocaleLowerCase();
      const bonusResistencia = habilidades.reduce((total, habilidade) => {
        const nome = normalize(habilidade.nome);
        const nivel = numberValue(habilidade.nivel);
        if (nome === "boxe") return total + (nivel >= 2 ? nivel - 1 : 0);
        if (["forca fisica", "corrida", "natacao"].includes(nome) && nivel >= 3) return total + 1;
        return total;
      }, 0);
      const resistenciaBase = Math.min(15, 10 + bonusResistencia);
      const resistenciaMaxima = resistenciaBase + Math.max(0, numberValue(system.resistenciaTemporaria));
      const danoAtual = Math.max(0, numberValue(system.dano));
      const criticoAtual = Math.max(0, numberValue(system.danoCritico));
      const totalNormal = danoAtual + damage;
      const danoNormal = Math.min(resistenciaMaxima, totalNormal);
      const excesso = Math.max(0, totalNormal - resistenciaMaxima);
      await actor.update({
        "system.dano": danoNormal,
        "system.danoCritico": Math.min(5, criticoAtual + excesso)
      });
      return true;
    }

    if (actor.type === "criatura") {
      const resistencia = Math.max(1, numberValue(system.resistencia, 10));
      const maximo = Math.ceil(resistencia * 1.5);
      const atual = Math.max(0, numberValue(system.dano));
      await actor.update({ "system.dano": Math.min(maximo, atual + damage) });
      return true;
    }

    const atual = Math.max(0, numberValue(system.dano));
    await actor.update({ "system.dano": atual + damage });
    return true;
  };

  const activateDamageButtons = (message, html) => {
    const root = html?.find ? html : $(html);
    const buttons = root.find("[data-action='apply-attack-damage']");
    if (!buttons.length) return;

    const applied = message.getFlag(BANDEIRA_ID, "damageApplied");
    if (applied) {
      buttons.prop("disabled", true).text(`Dano aplicado${message.getFlag(BANDEIRA_ID, "damageAmount") !== undefined ? `: ${message.getFlag(BANDEIRA_ID, "damageAmount")}` : ""}`);
      return;
    }

    buttons.off("click.bandeiraDamage").on("click.bandeiraDamage", async event => {
      event.preventDefault();
      const button = event.currentTarget;
      const baseAmount = numberValue(button.dataset.amount);
      const targetUuid = button.dataset.targetUuid;
      const document = targetUuid ? await fromUuid(targetUuid) : null;
      const actor = baseActorForTokenActor(document?.actor || document, document);
      if (!actor) return ui.notifications.error("Não foi possível encontrar o alvo para aplicar o dano.");
      const amount = await askDamageAmount(baseAmount, actor.name);
      if (amount === null) return;
      const appliedDamage = await applyDamageToActor(actor, amount);
      if (!appliedDamage) return;
      await message.setFlag(BANDEIRA_ID, "damageApplied", true);
      await message.setFlag(BANDEIRA_ID, "damageAmount", amount);
      button.disabled = true;
      button.textContent = `Dano aplicado: ${amount}`;
      ui.notifications.info(`${amount} ponto(s) de dano aplicado(s) em ${actor.name}.`);
    });
  };

  Hooks.on("renderChatMessage", activateDamageButtons);
  Hooks.on("renderChatMessageHTML", activateDamageButtons);

  Hooks.on("preCreateActor", actor => {
    if (!["personagem", "criatura"].includes(actor?.type)) return;
    const changes = {
      prototypeToken: {
        actorLink: desiredTokenActorLink(actor.type),
        displayName: tokenNameDisplayMode(),
        displayBars: tokenBarsDisplayMode(),
        bar1: { attribute: "resources.resistencia" },
        bar2: { attribute: "resources.energia" }
      }
    };
    foundry.utils.setProperty(changes, `flags.${BANDEIRA_ID}.tokenResourcesConfigured`, true);
    setResourceChanges(changes, actor.type, actor.system || {});
    actor.updateSource(changes);
  });

  Hooks.on("preUpdateActor", (actor, changes) => {
    if (!["personagem", "criatura"].includes(actor?.type)) return;
    const expandedChanges = foundry.utils.expandObject(foundry.utils.deepClone(changes));

    // Detect token bar drag: when resources are set directly, convert back to system fields.
    const incomingResources = expandedChanges?.system?.resources;
    if (incomingResources) {
      const system = actor.system || {};

      // Token dragged resistencia bar → recalculate dano from new value
      if (incomingResources.resistencia?.value !== undefined) {
        const novoValor = numberValue(incomingResources.resistencia.value);
        if (actor.type === "personagem") {
          const habilidades = asArrayValue(system.habilidades);
          const bonusResistencia = habilidades.reduce((total, h) => total + resistanceBonusForAbility(h), 0);
          const resistenciaBase = Math.min(15, 10 + bonusResistencia);
          const resistenciaTemporaria = Math.max(0, numberValue(system.resistenciaTemporaria));
          const resistenciaMaxima = resistenciaBase + resistenciaTemporaria;
          const novoDano = Math.max(0, Math.min(resistenciaMaxima, resistenciaMaxima - novoValor));
          foundry.utils.setProperty(changes, "system.dano", novoDano);
          // Remove the raw resource value so preUpdateActor's setResourceChanges will recompute it correctly
          delete expandedChanges.system.resources.resistencia;
        } else if (actor.type === "criatura") {
          const resistenciaMaxima = Math.max(1, numberValue(system.resistencia, 10));
          const novoDano = Math.max(0, Math.min(Math.ceil(resistenciaMaxima * 1.5), resistenciaMaxima - novoValor));
          foundry.utils.setProperty(changes, "system.dano", novoDano);
          delete expandedChanges.system.resources.resistencia;
        }
      }

      // Token dragged energia bar → update system.energia directly
      if (incomingResources.energia?.value !== undefined && actor.type === "personagem") {
        const energiaMaxima = supernaturalEnergyMaximum(system);
        const novaEnergia = Math.max(0, Math.min(energiaMaxima, numberValue(incomingResources.energia.value)));
        foundry.utils.setProperty(changes, "system.energia", novaEnergia);
        delete expandedChanges.system.resources.energia;
      }
    }

    const nextSystem = foundry.utils.mergeObject(
      foundry.utils.deepClone(actor.system || {}),
      expandedChanges.system || {},
      { inplace: false }
    );
    setResourceChanges(changes, actor.type, nextSystem);

    if (Object.prototype.hasOwnProperty.call(changes, "name")) {
      const nextName = String(changes.name || "").trim();
      if (nextName) foundry.utils.setProperty(changes, "prototypeToken.name", nextName);
    }
  });

  // For unlinked tokens (actorLink: false), bar drags update the TokenDocument's delta,
  // not the base actor. We intercept here and convert resource changes back to system fields.
  Hooks.on("preUpdateToken", (tokenDocument, changes) => {
    const actor = tokenDocument.actor;
    if (!actor || !["personagem", "criatura"].includes(actor.type)) return;
    if (tokenDocument.actorLink) return; // linked tokens are handled by preUpdateActor

    const expandedChanges = foundry.utils.expandObject(foundry.utils.deepClone(changes));
    const incomingResources = expandedChanges?.actorData?.system?.resources
      ?? expandedChanges?.delta?.system?.resources;
    if (!incomingResources) return;

    const system = actor.system || {};
    const resourcePath = expandedChanges?.actorData?.system?.resources
      ? "actorData.system"
      : "delta.system";

    if (actor.type === "personagem") {
      const baseActor = baseActorForTokenActor(actor, tokenDocument);
      if (baseActor && baseActor !== actor) {
        const baseSystem = baseActor.system || system;
        const update = {};
        if (incomingResources.resistencia?.value !== undefined) {
          const novoValor = numberValue(incomingResources.resistencia.value);
          const habilidades = asArrayValue(baseSystem.habilidades);
          const bonusResistencia = habilidades.reduce((total, h) => total + resistanceBonusForAbility(h), 0);
          const resistenciaBase = Math.min(15, 10 + bonusResistencia);
          const resistenciaTemporaria = Math.max(0, numberValue(baseSystem.resistenciaTemporaria));
          const resistenciaMaxima = resistenciaBase + resistenciaTemporaria;
          const novoDano = Math.max(0, Math.min(resistenciaMaxima, resistenciaMaxima - novoValor));
          foundry.utils.setProperty(update, "system.dano", novoDano);
        }
        if (incomingResources.energia?.value !== undefined) {
          const energiaMaxima = supernaturalEnergyMaximum(baseSystem);
          const novaEnergia = Math.max(0, Math.min(energiaMaxima, numberValue(incomingResources.energia.value)));
          foundry.utils.setProperty(update, "system.energia", novaEnergia);
        }
        if (Object.keys(foundry.utils.flattenObject(update)).length) baseActor.update(update);
        return false;
      }
    }

    if (incomingResources.resistencia?.value !== undefined) {
      const novoValor = numberValue(incomingResources.resistencia.value);
      if (actor.type === "personagem") {
        const habilidades = asArrayValue(system.habilidades);
        const bonusResistencia = habilidades.reduce((total, h) => total + resistanceBonusForAbility(h), 0);
        const resistenciaBase = Math.min(15, 10 + bonusResistencia);
        const resistenciaTemporaria = Math.max(0, numberValue(system.resistenciaTemporaria));
        const resistenciaMaxima = resistenciaBase + resistenciaTemporaria;
        const novoDano = Math.max(0, Math.min(resistenciaMaxima, resistenciaMaxima - novoValor));
        foundry.utils.setProperty(changes, `${resourcePath}.dano`, novoDano);
      } else if (actor.type === "criatura") {
        const resistenciaMaxima = Math.max(1, numberValue(system.resistencia, 10));
        const novoDano = Math.max(0, Math.min(Math.ceil(resistenciaMaxima * 1.5), resistenciaMaxima - novoValor));
        foundry.utils.setProperty(changes, `${resourcePath}.dano`, novoDano);
      }
      // Recompute the resource values so the bar stays consistent
      const nextDano = numberValue(foundry.utils.getProperty(changes, `${resourcePath}.dano`));
      if (actor.type === "personagem") {
        const habilidades = asArrayValue(system.habilidades);
        const bonusResistencia = habilidades.reduce((total, h) => total + resistanceBonusForAbility(h), 0);
        const resistenciaBase = Math.min(15, 10 + bonusResistencia);
        const resistenciaTemporaria = Math.max(0, numberValue(system.resistenciaTemporaria));
        const resistenciaMaxima = resistenciaBase + resistenciaTemporaria;
        foundry.utils.setProperty(changes, `${resourcePath}.resources.resistencia.value`, Math.max(0, resistenciaMaxima - nextDano));
        foundry.utils.setProperty(changes, `${resourcePath}.resources.resistencia.max`, resistenciaMaxima);
      } else if (actor.type === "criatura") {
        const resistenciaMaxima = Math.max(1, numberValue(system.resistencia, 10));
        foundry.utils.setProperty(changes, `${resourcePath}.resources.resistencia.value`, Math.max(0, resistenciaMaxima - nextDano));
        foundry.utils.setProperty(changes, `${resourcePath}.resources.resistencia.max`, resistenciaMaxima);
      }
    }

    if (incomingResources.energia?.value !== undefined && actor.type === "personagem") {
      const energiaMaxima = supernaturalEnergyMaximum(system);
      const novaEnergia = Math.max(0, Math.min(energiaMaxima, numberValue(incomingResources.energia.value)));
      foundry.utils.setProperty(changes, `${resourcePath}.energia`, novaEnergia);
      foundry.utils.setProperty(changes, `${resourcePath}.resources.energia.value`, novaEnergia);
      foundry.utils.setProperty(changes, `${resourcePath}.resources.energia.max`, energiaMaxima);
    }
  });

  Hooks.once("ready", async () => {
    if (!game.user?.isGM) return;
    for (const actor of game.actors || []) {
      if (!["personagem", "criatura"].includes(actor?.type)) continue;
      const actorName = String(actor.name || "").trim();
      if (!actorName || actor.prototypeToken?.name === actorName) continue;
      await actor.update({ "prototypeToken.name": actorName });
    }
    for (const actor of game.actors || []) {
      await syncActorResources(actor);
    }
    await syncPlacedPersonagemTokens();
    await seedCreatureCompendium();
  });

  Actors.registerSheet(BANDEIRA_ID, BandeiraPersonagemSheet, {
    types: ["personagem"],
    makeDefault: true
  });

  Actors.registerSheet(BANDEIRA_ID, BandeiraCriaturaSheet, {
    types: ["criatura"],
    makeDefault: true
  });
});
