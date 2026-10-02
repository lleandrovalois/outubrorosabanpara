/**
 * Outubro Rosa Banpará • Lógica e Interações da Recepção Digital
 * Banco do Estado do Pará (2026)
 */

/* ========================================================================= */
/* ESTADO DO QUIZ "MITOS E VERDADES"                                         */
/* ========================================================================= */
const QUIZ_QUESTIONS = [
  {
    id: 1,
    pergunta: '"O autoexame das mamas substitui a necessidade de realizar a mamografia anual?"',
    respostaCorreta: 'mito',
    explicacao: '<strong>É MITO!</strong> O autoexame é fundamental para o autoconhecimento do seu corpo, mas a mamografia é o único exame capaz de identificar lesões milimétricas, muito antes de se tornarem palpáveis ao toque.'
  },
  {
    id: 2,
    pergunta: '"O diagnóstico precoce eleva as chances de cura do câncer de mama para até 95%?"',
    respostaCorreta: 'verdade',
    explicacao: '<strong>É VERDADE!</strong> Quando descoberto em estágios iniciais, o tratamento é menos invasivo, mais rápido e a taxa de cura supera os 90% a 95%.'
  },
  {
    id: 3,
    pergunta: '"Usar desodorante antitranspirante roll-on ou sutiã de aro pode provocar câncer de mama?"',
    respostaCorreta: 'mito',
    explicacao: '<strong>É MITO!</strong> Não há nenhuma comprovação científica ligando o uso de desodorantes ou sutiãs ao desenvolvimento de tumores mamários.'
  },
  {
    id: 4,
    pergunta: '"Homens também podem desenvolver câncer de mama, embora seja mais raro?"',
    respostaCorreta: 'verdade',
    explicacao: '<strong>É VERDADE!</strong> Embora represente cerca de 1% do total de casos, os homens possuem glândulas mamárias e também devem ficar atentos a nódulos e secreções nos mamilos.'
  },
  {
    id: 5,
    pergunta: '"Praticar 150 minutos de atividade física por semana e manter peso saudável reduz o risco de câncer de mama em até 30%?"',
    respostaCorreta: 'verdade',
    explicacao: '<strong>É VERDADE!</strong> A prática regular de exercícios, redução do consumo de álcool e alimentação rica em alimentos naturais são comprovadamente fatores protetores contra o câncer de mama.'
  }
];

let quizIndexAtual = 0;
let quizPontuacao = 0;
let quizRespondido = false;

/* ========================================================================= */
/* INICIALIZAÇÃO AO CARREGAR O DOM                                           */
/* ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  carregarPerguntaQuiz();

  // Fecha o modal ao clicar fora
  const modalEl = document.getElementById('app-modal');
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) {
      closeModal();
    }
  });

  // Fecha o modal com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

/* ========================================================================= */
/* LÓGICA DO CARD 1: AUTOEXAME DETALHADO & MODAL                            */
/* ========================================================================= */
function abrirModalAutoexame() {
  const content = `
    <div class="space-y-4">
      <div class="rounded-2xl overflow-hidden border border-pink-200 shadow-sm bg-pink-50">
        <img src="guia-autoexame.jpg" alt="Guia do Autoexame" class="w-full h-auto object-contain">
      </div>

      <div class="bg-pink-50 p-3.5 rounded-2xl border border-pink-200">
        <h5 class="text-xs font-black text-bp-rosaDark uppercase mb-1">Qual o melhor momento para fazer?</h5>
        <p class="text-[11px] text-slate-700 leading-relaxed">
          • <strong>Mulheres que menstruam:</strong> Realize de 7 a 10 dias após o início da menstruação, quando as mamas estão menos sensíveis e menos inchadas.<br>
          • <strong>Após a menopausa:</strong> Escolha um dia fixo todo mês (exemplo: todo dia 1º).
        </p>
      </div>

      <div class="space-y-2.5">
        <h5 class="text-xs font-black text-bp-navy">Os 3 Passos Essenciais:</h5>
        
        <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
          <strong class="text-pink-600 block text-xs">1. Em frente ao espelho:</strong>
          <span class="text-[11px] text-slate-600">Primeiro com os braços abaixados, depois levantados e depois apoiados na cintura. Observe se há mudanças no contorno, na coloração da pele, pequenas retrações ou rugosidades.</span>
        </div>

        <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
          <strong class="text-pink-600 block text-xs">2. No banho (em pé):</strong>
          <span class="text-[11px] text-slate-600">Com a pele ensaboada, levante o braço esquerdo e coloque a mão atrás da cabeça. Com a mão direita, palpe a mama esquerda com as pontas dos dedos em movimentos circulares, de cima para baixo e em espiral. Repita do outro lado.</span>
        </div>

        <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
          <strong class="text-pink-600 block text-xs">3. Deitada confortavelmente:</strong>
          <span class="text-[11px] text-slate-600">Coloque um travesseiro sob o ombro do lado a ser examinado. Apalpe suavemente toda a extensão da mama até a axila, procurando nódulos ou espessamentos. Pressione delicadamente o mamilo para verificar se sai secreção.</span>
        </div>
      </div>

      <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px]">
        ⚠️ <strong>Encontrou algo diferente?</strong> Não entre em pânico! A maioria dos nódulos é benigna (como cistos ou fibroadenomas). Procure uma Unidade Básica de Saúde ou seu médico para avaliação profissional.
      </div>
    </div>
  `;

  showModal('Passo a Passo do Autoexame das Mamas', content);
}

/* ========================================================================= */
/* LÓGICA DO CARD 2: CALCULADORA DE PREVENÇÃO POR FAIXA ETÁRIA             */
/* ========================================================================= */
function setAgeGroup(group, btn) {
  document.querySelectorAll('.age-tab-btn').forEach(b => {
    b.className = 'age-tab-btn py-1.5 text-[11px] font-bold rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-bp-royal transition-all cursor-pointer';
  });
  btn.className = 'age-tab-btn py-1.5 text-[11px] font-bold rounded-lg border-2 border-bp-royal bg-blue-100/70 text-bp-royal shadow-xs transition-all cursor-pointer';

  const box = document.getElementById('age-advice-box');

  if (group === 'jovem') {
    box.innerHTML = `
      <div class="font-bold text-bp-navy mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-pink-500"></span>
        Faixa de 20 a 39 anos: Autoconhecimento & Atenção
      </div>
      <p class="text-[11px] text-slate-600 leading-relaxed">
        • <strong>Autoexame mensal:</strong> Conheça a densidade habitual de suas mamas.<br>
        • <strong>Exame Clínico anual:</strong> Realizado pelo ginecologista na consulta de rotina.<br>
        • <strong>Atenção ao histórico familiar:</strong> Se houver casos de câncer de mama ou ovário em parentes de 1º grau (mãe, irmã) antes dos 50 anos, converse com o médico sobre iniciar exames precoces.
      </p>
    `;
  } else if (group === 'alvo') {
    box.innerHTML = `
      <div class="font-bold text-bp-navy mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-bp-royal"></span>
        Faixa de 40 a 49 anos: Início da Mamografia Anual
      </div>
      <p class="text-[11px] text-slate-600 leading-relaxed">
        • <strong>Mamografia anual:</strong> Recomendada formalmente pela Sociedade Brasileira de Mastologia (SBM) e Colégio Brasileiro de Radiologia.<br>
        • <strong>Ultrassom complementar:</strong> Indicado com frequência para mamas densas.<br>
        • <strong>Detecção precoce:</strong> Identifica microcalcificações antes de qualquer sintoma perceptível.
      </p>
    `;
  } else if (group === 'senior') {
    box.innerHTML = `
      <div class="font-bold text-bp-navy mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
        Faixa de 50 anos ou mais: Rastreio Contínuo e Prioritário
      </div>
      <p class="text-[11px] text-slate-600 leading-relaxed">
        • <strong>Faixa de maior incidência:</strong> Período onde o rastreamento mamográfico tem o maior impacto na redução de mortalidade.<br>
        • <strong>Mamografia anual ou bienal:</strong> Disponível gratuitamente pelo SUS em todas as regiões do Pará.<br>
        • <strong>Acompanhamento pós-menopausa:</strong> Importante manter o check-up ginecológico e cardiológico em dia.
      </p>
    `;
  }
}

function abrirModalPilaresCuidado() {
  showModal('Pilares Essenciais do Autocuidado Feminino', `
    <div class="space-y-3">
      <p class="text-xs text-slate-600 leading-relaxed">
        Prevenir é cuidar de si por inteiro. Estudos do INCA (Instituto Nacional de Câncer) apontam que cerca de <strong>30% dos casos de câncer de mama podem ser evitados</strong> com a adoção de hábitos saudáveis:
      </p>
      
      <div class="p-3 bg-pink-50 rounded-2xl border border-pink-100 flex items-start gap-3">
        <span class="text-xl">🥗</span>
        <div>
          <strong class="text-xs text-bp-navy block">Alimentação Nutritiva e Regional:</strong>
          <span class="text-[11px] text-slate-600">Priorize frutas, legumes, açaí puro sem excesso de açúcar, peixes e castanhas do Pará. Reduza alimentos ultraprocessados e carnes com muita gordura saturada.</span>
        </div>
      </div>

      <div class="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
        <span class="text-xl">🏃‍♀️</span>
        <div>
          <strong class="text-xs text-bp-navy block">Movimento e Atividade Física:</strong>
          <span class="text-[11px] text-slate-600">Pelo menos 150 minutos de caminhada, natação, dança ou musculação por semana equilibram os níveis hormonais de estrogênio e reduzem a inflamação corporal.</span>
        </div>
      </div>

      <div class="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex items-start gap-3">
        <span class="text-xl">🛑</span>
        <div>
          <strong class="text-xs text-bp-navy block">Moderação no Álcool e Fumo:</strong>
          <span class="text-[11px] text-slate-600">O tabagismo e o consumo frequente de bebidas alcoólicas são fatores comprovados de aumento do risco celular para tumores mamários.</span>
        </div>
      </div>

      <div class="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3">
        <span class="text-xl">🤱</span>
        <div>
          <strong class="text-xs text-bp-navy block">Amamentação Protetora:</strong>
          <span class="text-[11px] text-slate-600">Amamentar o bebê é um forte fator de proteção: a cada 12 meses de amamentação acumulada, o risco de câncer de mama cai cerca de 4,3%.</span>
        </div>
      </div>
    </div>
  `);
}

/* ========================================================================= */
/* LÓGICA DO CARD 3: FILTRAGEM DE UNIDADES NO PARÁ                          */
/* ========================================================================= */
function filtrarUnidades(regiao, btn) {
  document.querySelectorAll('.btn-filter-regiao').forEach(b => {
    b.className = 'btn-filter-regiao px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-pink-100 text-slate-700 cursor-pointer transition-colors';
  });
  btn.className = 'btn-filter-regiao px-3.5 py-2 text-xs font-bold rounded-xl bg-bp-navy text-white shadow-xs cursor-pointer';

  const cards = document.querySelectorAll('.card-unidade');
  cards.forEach(c => {
    if (regiao === 'todas') {
      c.classList.remove('hidden');
    } else {
      if (c.classList.contains(regiao)) {
        c.classList.remove('hidden');
      } else {
        c.classList.add('hidden');
      }
    }
  });

  showToast(`Filtrando unidades: ${btn.innerText.trim()}`);
}

function comoChegarUnidade(unidade) {
  showModal(`Como Acessar: ${unidade}`, `
    <div class="space-y-3">
      <div class="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
        <strong class="text-xs text-emerald-900 block">Atendimento 100% Gratuito pelo SUS</strong>
        <p class="text-[11px] text-emerald-700 mt-0.5">
          Todas as consultas e exames nas unidades de referência do Estado do Pará são cobertos pelo Sistema Único de Saúde sem nenhum custo.
        </p>
      </div>

      <h5 class="text-xs font-bold text-bp-navy">Fluxo de Encaminhamento:</h5>
      <ol class="list-decimal pl-5 space-y-1.5 text-[11px] text-slate-600">
        <li>Vá à Unidade Básica de Saúde (UBS/USF) mais próxima de sua residência;</li>
        <li>Solicite consulta com clínico ou ginecologista para realização do exame clínico das mamas;</li>
        <li>A unidade insere o pedido de mamografia ou biópsia no <strong>Sistema Estadual de Regulação (SISREG)</strong>;</li>
        <li>Você recebe a data e horário agendados para comparecer ao <strong>${unidade}</strong> portando documento com foto e Cartão SUS.</li>
      </ol>

      <p class="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
        *Em caso de nódulo perceptível ou secreção sanguinolenta, o pedido é classificado como prioritário pela regulação médica.
      </p>
    </div>
  `);
}

function abrirModalGuiaSUS() {
  showModal('Passo a Passo: Como Agendar Mamografia no SUS Pará', `
    <div class="space-y-3">
      <div class="flex items-center gap-3 p-3 bg-pink-50 rounded-2xl border border-pink-200">
        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-black flex items-center justify-center text-sm shrink-0">1</div>
        <div>
          <strong class="text-xs text-bp-navy block">Primeiro Contato: UBS do seu Bairro</strong>
          <span class="text-[11px] text-slate-600">Compareça com RG, CPF, Cartão do SUS e comprovante de residência.</span>
        </div>
      </div>

      <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-200">
        <div class="w-8 h-8 rounded-full bg-bp-royal text-white font-black flex items-center justify-center text-sm shrink-0">2</div>
        <div>
          <strong class="text-xs text-bp-navy block">Inserção na Central de Regulação</strong>
          <span class="text-[11px] text-slate-600">A equipe da UBS cadastra o pedido de mamografia no sistema estadual (SISREG).</span>
        </div>
      </div>

      <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-2xl border border-purple-200">
        <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-black flex items-center justify-center text-sm shrink-0">3</div>
        <div>
          <strong class="text-xs text-bp-navy block">Realização no Centro Especializado</strong>
          <span class="text-[11px] text-slate-600">Compareça no dia agendado ao Hospital Ophir Loyola, Policlínica ou Hospital Regional indicado.</span>
        </div>
      </div>

      <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-[11px] text-slate-600">
        💡 <strong>Dica Especial:</strong> Durante o mês do Outubro Rosa, a <em>Carreta da Mulher</em> realiza mamografias por demanda espontânea (ordem de chegada) em praças e bairros do Pará. Fique atenta ao roteiro da SESPA!
      </div>
    </div>
  `);
}

/* ========================================================================= */
/* LÓGICA DO CARD 4: QUIZ MITOS E VERDADES                                   */
/* ========================================================================= */
function carregarPerguntaQuiz() {
  const item = QUIZ_QUESTIONS[quizIndexAtual];
  document.getElementById('quiz-question-counter').innerText = `Pergunta ${quizIndexAtual + 1} de ${QUIZ_QUESTIONS.length}`;
  document.getElementById('quiz-score-badge').innerText = `Pontos: ${quizPontuacao}`;
  document.getElementById('quiz-question-text').innerText = item.pergunta;
  
  const feedbackBox = document.getElementById('quiz-feedback-box');
  feedbackBox.classList.add('hidden');
  feedbackBox.innerHTML = '';
  
  document.getElementById('quiz-action-buttons').classList.remove('hidden');
  document.getElementById('quiz-next-button').classList.add('hidden');
  quizRespondido = false;
}

function responderQuiz(escolha) {
  if (quizRespondido) return;
  quizRespondido = true;

  const item = QUIZ_QUESTIONS[quizIndexAtual];
  const acertou = (escolha === item.respostaCorreta);
  const feedbackBox = document.getElementById('quiz-feedback-box');

  if (acertou) {
    quizPontuacao += 10;
    feedbackBox.className = 'mt-2 text-[11px] p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 animate-fadeIn';
    feedbackBox.innerHTML = `🎉 <strong>Parabéns, você acertou!</strong><br>${item.explicacao}`;
    showToast('Você acertou! +10 pontos');
  } else {
    feedbackBox.className = 'mt-2 text-[11px] p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 animate-fadeIn';
    feedbackBox.innerHTML = `💡 <strong>Não foi dessa vez:</strong><br>${item.explicacao}`;
    showToast('Veja a explicação correta abaixo!');
  }

  feedbackBox.classList.remove('hidden');
  document.getElementById('quiz-score-badge').innerText = `Pontos: ${quizPontuacao}`;
  document.getElementById('quiz-action-buttons').classList.add('hidden');
  document.getElementById('quiz-next-button').classList.remove('hidden');
}

function proximaPerguntaQuiz() {
  if (quizIndexAtual < QUIZ_QUESTIONS.length - 1) {
    quizIndexAtual++;
    carregarPerguntaQuiz();
  } else {
    // Fim do Quiz
    finalizarQuiz();
  }
}

function finalizarQuiz() {
  const totalMax = QUIZ_QUESTIONS.length * 10;
  const porcentagem = Math.round((quizPontuacao / totalMax) * 100);

  showModal('Resultado do seu Quiz Outubro Rosa', `
    <div class="text-center space-y-3 py-2">
      <div class="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-3xl mx-auto border-2 border-pink-300">
        🏆
      </div>
      <h4 class="text-base font-black text-bp-navy">Você concluiu o Quiz com sucesso!</h4>
      <div class="text-2xl font-black text-bp-rosaDark">${quizPontuacao} de ${totalMax} pontos (${porcentagem}%)</div>
      <p class="text-xs text-slate-600 max-w-sm mx-auto">
        Quanto mais você se informa, mais protegida você e as mulheres da sua vida ficam. Continue compartilhando conhecimento e cuidando de si mesma!
      </p>
      <div class="pt-3 flex justify-center gap-2">
        <button onclick="reiniciarQuiz(); closeModal();" class="px-4 py-2 bg-bp-navy text-white text-xs font-bold rounded-xl hover:bg-bp-royal transition-all cursor-pointer">
          Jogar Novamente
        </button>
        <button onclick="compartilharCampanha(); closeModal();" class="px-4 py-2 bg-pink-600 text-white text-xs font-bold rounded-xl hover:bg-pink-700 transition-all cursor-pointer">
          Desafiar uma Amiga no WhatsApp
        </button>
      </div>
    </div>
  `);
}

function reiniciarQuiz() {
  quizIndexAtual = 0;
  quizPontuacao = 0;
  carregarPerguntaQuiz();
  showToast('Quiz reiniciado!');
}

/* ========================================================================= */
/* LÓGICA DO CARD 5: BANPARÁ DELAS & EMPODERA BANPARÁ                        */
/* ========================================================================= */
function abrirModalEmpodera() {
  showModal('Banpará Delas • Crédito, Proteção e Parceria', `
    <div class="space-y-4">
      <div class="p-3 bg-pink-50 rounded-2xl border border-pink-200">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-lg">💼</span>
          <strong class="text-xs font-bold text-bp-navy">Linha Empodera Banpará:</strong>
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Programa do Banpará destinado a incentivar o protagonismo das mulheres empreendedoras no estado do Pará. Oferece taxas subsidiadas, carência estendida para capital de giro e apoio para abertura ou expansão do seu próprio negócio.
        </p>
      </div>

      <div class="p-3 bg-blue-50 rounded-2xl border border-blue-200">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-lg">🛡️</span>
          <strong class="text-xs font-bold text-bp-navy">Seguro Mulher Banpará:</strong>
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Indenização de até R$ 50.000,00 paga em dinheiro diretamente a você em caso de primeiro diagnóstico de câncer de mama ou do colo do útero, permitindo que você foque 100% no seu tratamento com tranquilidade financeira.
        </p>
      </div>

      <!-- Simulação Rápida de Atendimento -->
      <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
        <strong class="text-xs text-bp-navy block">Deseja receber contato de uma consultora Banpará?</strong>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input type="text" id="modal-lead-name" placeholder="Seu Nome Completo" class="text-xs px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-bp-royal">
          <input type="tel" id="modal-lead-phone" placeholder="DDD + Celular (WhatsApp)" class="text-xs px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-bp-royal">
        </div>
        <button type="button" onclick="solicitarContatoBanparaDelas()" class="w-full py-2.5 bg-bp-red hover:bg-bp-redDark text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer">
          Solicitar Atendimento Prioritário
        </button>
      </div>
    </div>
  `);
}

function solicitarContatoBanparaDelas() {
  const name = document.getElementById('modal-lead-name')?.value.trim();
  const phone = document.getElementById('modal-lead-phone')?.value.trim();

  if (!name || !phone) {
    showToast('Por favor, informe seu nome e telefone.');
    return;
  }

  const proto = `BP-DELAS-${Math.floor(100000 + Math.random() * 900000)}`;
  showModal('Interesse Registrado no Banpará Mulher!', `
    <div class="text-center space-y-3 py-2">
      <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto">
        ✅
      </div>
      <h4 class="text-base font-black text-bp-navy">Tudo certo, ${name}!</h4>
      <div class="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900">
        <strong>Protocolo:</strong> <span class="font-mono font-bold">${proto}</span>
      </div>
      <p class="text-xs text-slate-600">
        Nossa equipe de consultoras entrará em contato pelo WhatsApp <strong>${phone}</strong> com detalhes das linhas especiais e apoio financeiro.
      </p>
    </div>
  `);
}

/* ========================================================================= */
/* LÓGICA DO CARD 6: GERADOR DE LEMBRETE DIGITAL (.ICS & GOOGLE CALENDAR)    */
/* ========================================================================= */
function gerarLembreteCalendario() {
  const mesEscolhido = document.getElementById('input-data-exame').value || '2026-10';
  const tipoExame = document.getElementById('select-tipo-exame').value;

  // Calcula data 1 ano depois para o próximo exame
  const partes = mesEscolhido.split('-');
  const ano = parseInt(partes[0]) + 1;
  const mes = partes[1];
  const dia = '15'; // Dia do meio do mês

  const dataInicioIso = `${ano}${mes}${dia}T090000`;
  const dataFimIso = `${ano}${mes}${dia}T100000`;

  const titulo = `Outubro Rosa Banpará: ${tipoExame}`;
  const descricao = `Lembrete de saúde da mulher programado no Espaço Mulher Banpará. Cuidar de você é o nosso maior investimento! Agende com seu médico ou procure a UBS mais próxima no Pará.`;
  const local = `Unidade Básica de Saúde / Hospital de Referência (Pará)`;

  // Link direto do Google Agenda
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=${dataInicioIso}/${dataFimIso}&details=${encodeURIComponent(descricao)}&location=${encodeURIComponent(local)}`;

  // Conteúdo do arquivo ICS
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Banpara S.A.//Outubro Rosa 2026//PT',
    'BEGIN:VEVENT',
    `SUMMARY:${titulo}`,
    `DESCRIPTION:${descricao}`,
    `LOCATION:${local}`,
    `DTSTART:${dataInicioIso}`,
    `DTEND:${dataFimIso}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'DESCRIPTION:Lembrete de Exame Preventivo',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  // Faz download do ICS
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Lembrete_Outubro_Rosa_Banpara_${ano}_${mes}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showModal('Lembrete Gerado com Sucesso!', `
    <div class="space-y-3">
      <div class="p-3 bg-purple-50 rounded-2xl border border-purple-200">
        <strong class="text-xs text-purple-900 block">Arquivo de Agenda (.ics) Baixado!</strong>
        <p class="text-[11px] text-purple-800 mt-1">
          O arquivo foi baixado no seu dispositivo para inclusão automática no calendário do iPhone, Mac, Windows ou Outlook.
        </p>
      </div>

      <p class="text-xs text-slate-600">
        Utiliza o Google Agenda? Você também pode adicionar com 1 clique direto:
      </p>

      <a href="${googleUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 bg-bp-royal hover:bg-bp-navy text-white text-xs font-bold rounded-xl text-center block transition-colors shadow-xs">
        📅 Abrir no Google Agenda Web / App
      </a>
    </div>
  `);

  showToast('Lembrete de exame salvo!');
}

/* ========================================================================= */
/* COMPARTILHAMENTO DA CAMPANHA                                              */
/* ========================================================================= */
function compartilharCampanha() {
  const mensagem = `🌸 *Outubro Rosa Banpará: Cuidar de você é o nosso maior investimento!*\n\nOlha que legal essa página que acessei pelo QR Code do Banpará. Tem passo a passo do autoexame, guia de locais com mamografia gratuita pelo SUS no Pará e quiz interativo!\n\nAcesse e cuide-se também: ${window.location.href}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappUrl, '_blank');
}

/* ========================================================================= */
/* UTILITÁRIOS: MODAL E TOAST                                                */
/* ========================================================================= */
function showModal(title, htmlContent) {
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');
  const modalEl = document.getElementById('app-modal');

  if (titleEl) titleEl.innerText = title;
  if (bodyEl) bodyEl.innerHTML = htmlContent;
  if (modalEl) modalEl.classList.remove('hidden');
}

function closeModal() {
  const modalEl = document.getElementById('app-modal');
  if (modalEl) modalEl.classList.add('hidden');
}

function showToast(msg) {
  const toast = document.getElementById('toast-notify');
  const text = document.getElementById('toast-text');
  if (toast && text) {
    text.innerText = msg;
    toast.classList.remove('opacity-0', 'translate-y-20', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-20', 'pointer-events-none');
    }, 3200);
  }
}
