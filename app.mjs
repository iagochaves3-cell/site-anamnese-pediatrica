export const normalTemplate = Object.freeze({
  general: 'Criança em bom estado geral, corada, hidratada, anictérica, acianótica, afebril, eupneica, ativa e reativa, com comportamento adequado para a idade.',
  neurological: 'Consciente, alerta e responsiva, com interação e contato apropriados para a idade. Pupilas isocóricas e fotorreagentes. Motricidade ocular extrínseca preservada. Mímica facial simétrica, sem déficits focais evidentes. Movimenta espontânea e simetricamente os quatro membros, sem tremores, dismetrias ou movimentos anormais. Força muscular 5/5 globalmente, com tônus preservado. Sensibilidade superficial e profunda aparentemente preservadas, sem déficits grosseiros ao exame. Marcha, quando aplicável, sem alterações evidentes. Ausência de rigidez de nuca ou sinais de irritação meníngea; Kernig e Brudzinski negativos.',
  skull: 'Normocefálico, de conformação habitual, atraumático, sem abaulamentos ou depressões evidentes. Fácies típicas, sem aparência sindrômica.',
  otoscopy: 'Condutos auditivos externos pérvios, sem sinais inflamatórios ou secreções. Membranas timpânicas íntegras e translúcidas, com reflexo luminoso preservado bilateralmente, sem abaulamento, retração ou sinais de efusão em orelha média.',
  oroscopy: 'Mucosa oral e orofaríngea de coloração habitual, hidratadas, sem úlceras, fissuras, leucoplasias ou outras lesões evidentes. Amígdalas sem exsudatos ou placas. Orofaringe sem alterações inflamatórias significativas.',
  rhinoscopy: 'Cornetos nasais sem hipertrofia significativa, sem secreção patológica. Septo e vestíbulos nasais sem lesões superficiais evidentes.',
  neck: 'Ausência de linfonodomegalias palpáveis em cadeias submentonianas, submandibulares, cervicais anteriores e posteriores, occipitais, pré e retroauriculares, supraclaviculares e axilares. Tireoide sem aumento palpável. Ausência de massas cervicais evidentes.',
  respiratory: 'Tórax simétrico, com boa expansibilidade bilateral. Eupneica, sem tiragens ou uso de musculatura acessória. Som claro pulmonar à percussão. Murmúrio vesicular fisiológico e bem distribuído bilateralmente, sem ruídos adventícios.',
  cardiovascular: 'Ritmo cardíaco regular, em dois tempos, bulhas normofonéticas, sem sopros ou ruídos adventícios. Pulsos periféricos palpáveis, cheios e simétricos. Extremidades aquecidas e bem perfundidas. Normocárdica e normosfígmica.',
  abdomen: 'Abdome plano, flácido, normotimpânico, com ruídos hidroaéreos presentes. Indolor à palpação superficial e profunda, sem massas ou visceromegalias palpáveis. Sem defesa, rigidez ou sinais de irritação peritoneal. Descompressão brusca indolor; Blumberg negativo. Lojas renais livres, Giordano negativo bilateralmente.',
  skin: 'Pele íntegra, normocorada, com turgor e elasticidade preservados, sem exantemas, petéquias, equimoses ou outras lesões cutâneas evidentes. Extremidades aquecidas, sem edema. Fâneros sem alterações relevantes ao exame.',
  locomotor: 'Paciente mantém movimentos livres nos quatro membros e amplitude de movimento preservada, sem dor, sinais flogísticos, limitações funcionais ou assimetrias. Esqueleto axial alinhado, sem desvios ou limitações mecânicas. Sem desalinhamentos ósseos, luxações, sinais de artrite ou sequelas articulares evidentes à ectoscopia.'
});

const redFlags = [
  'alteração do nível de consciência',
  'letargia, prostração ou irritabilidade inconsolável',
  'desconforto respiratório importante, apneia, gemência ou estridor',
  'cianose ou hipoxemia',
  'má perfusão, palidez intensa ou extremidades frias',
  'convulsão em curso ou prolongada',
  'incapacidade de ingerir líquidos ou sinais de desidratação importante',
  'vômitos persistentes, biliosos ou com sangue',
  'dor intensa ou progressiva, ou distensão abdominal importante',
  'sangue nas fezes',
  'petéquias ou púrpura que não desaparecem à pressão',
  'oligúria ou ausência de diurese',
  'febre em lactente menor de 3 meses',
  'trauma, violência ou risco social',
  'piora clínica rápida ou aspecto toxemiado'
];

const neuroSymptoms = ['cefaleia','alteração de consciência ou sonolência','convulsão ou evento paroxístico','síncope ou pré-síncope','vômitos associados','déficit motor ou assimetria','parestesia ou alteração da sensibilidade','alteração visual','ataxia ou alteração de marcha','rigidez de nuca'];
const locomotorSymptoms = ['trauma em membro ou articulação','dor óssea, muscular ou articular','edema, calor ou vermelhidão','deformidade ou assimetria','limitação da amplitude de movimento','incapacidade de apoiar ou caminhar','instabilidade ou bloqueio articular','fraqueza muscular','rigidez matinal','febre ou sintomas sistêmicos','dor noturna ou perda ponderal'];

const text = (id, label, placeholder = '', extra = {}) => ({id,label,type:'text',placeholder,...extra});
const textarea = (id, label, placeholder = '', extra = {}) => ({id,label,type:'textarea',placeholder,full:true,...extra});
const select = (id, label, options, extra = {}) => ({id,label,type:'select',options,...extra});
const checklist = (id, label, options) => ({id,label,type:'checklist',options,full:true});
const q = (id, section, title, hint, fields, when) => ({id,section,title,hint,fields,when});

const yesNo = [{value:'',label:'Não selecionar'},{value:'sim',label:'Sim'},{value:'nao',label:'Não'}];
const statusOptions = [{value:'',label:'Sem resposta'},{value:'Nega',label:'Nega'},{value:'Sim',label:'Sim'}];
const triState = [{value:'',label:'Pular este item'},{value:'sim',label:'Sim'},{value:'nao',label:'Não'}];
const cervicalTriState = [{value:'',label:'Não informado'},{value:'sim',label:'Sim'},{value:'nao',label:'Não'}];

const symptomGroups = Object.freeze({
  general: [
    ['activeReactive','A criança está ativa e reativa?','mantém-se ativa e reativa','não se mostrou ativa e reativa'],
    ['usualBehavior','O comportamento habitual está preservado?','mantém o comportamento habitual','apresentou mudança do comportamento habitual'],
    ['painPresent','Houve dor?','houve relato de dor','não houve relato de dor'],
    ['moaning','Houve gemência?','houve gemência','não houve gemência'],
    ['persistentCry','Houve choro persistente?','houve choro persistente','não houve choro persistente']
  ],
  ocular: [
    ['redEye','Houve olho vermelho?','houve hiperemia ocular','não houve olho vermelho'],
    ['eyeDischarge','Houve secreção ocular?','houve secreção ocular','não houve secreção ocular'],
    ['eyePain','Houve dor ocular?','houve dor ocular','não houve dor ocular'],
    ['eyeItchingTearing','Houve prurido ou lacrimejamento?','houve prurido ou lacrimejamento ocular','não houve prurido nem lacrimejamento ocular'],
    ['photophobia','Houve fotofobia?','houve fotofobia','não houve fotofobia'],
    ['visualChange','Houve alteração visual?','houve alteração visual','não houve alteração visual']
  ],
  oral: [
    ['oralLesions','Houve lesões orais?','houve lesões orais','não houve lesões orais'],
    ['oralPain','Houve dor oral?','houve dor oral','não houve dor oral'],
    ['odynophagia','Houve dor ao engolir?','houve odinofagia','não houve dor ao engolir']
  ],
  cervical: [
    ['neckLymphadenopathy','Houve linfadenomegalia?','houve linfadenomegalia','não houve linfadenomegalia'],
    ['neckOtherMasses','Houve outras massas cervicais?','houve outras massas cervicais','não houve outras massas cervicais'],
    ['neckPainful','A alteração era dolorosa?','a alteração cervical era dolorosa','a alteração cervical não era dolorosa'],
    ['neckFibroelastic','Era fibroelástica?','a alteração cervical era fibroelástica','a alteração cervical não era fibroelástica'],
    ['neckUnder5cm','Era menor que 5 cm?','a alteração cervical media menos de 5 cm','a alteração cervical não media menos de 5 cm'],
    ['neckNotFixed','Não era aderida a planos profundos?','a alteração cervical não era aderida a planos profundos','a alteração cervical era aderida a planos profundos'],
    ['neckIsolated','Era isolada?','a alteração cervical era isolada','a alteração cervical não era isolada']
  ],
  otologic: [
    ['otalgia','Houve dor de ouvido?','houve otalgia','não houve otalgia'],
    ['otorrhea','Houve secreção no ouvido?','houve otorreia','não houve otorreia'],
    ['earItching','Houve prurido no ouvido?','houve prurido otológico','não houve prurido otológico'],
    ['hearingChange','Houve alteração auditiva?','houve alteração auditiva','não houve alteração auditiva'],
    ['tinnitus','Houve zumbido?','houve zumbido','não houve zumbido'],
    ['vertigo','Houve vertigem?','houve vertigem','não houve vertigem']
  ],
  nasal: [
    ['runnyNose','Houve coriza?','houve coriza','não houve coriza'],
    ['nasalCongestion','Houve congestão nasal?','houve congestão nasal','não houve congestão nasal'],
    ['mouthBreathing','Houve respiração bucal?','houve respiração bucal','não houve respiração bucal'],
    ['nasalBreathing','A respiração nasal está mantida?','a respiração nasal permaneceu mantida','houve prejuízo da respiração nasal'],
    ['upperAirwayRhonchi','Houve roncos de vias aéreas superiores?','houve roncos de vias aéreas superiores','não houve roncos de vias aéreas superiores']
  ],
  respiratory: [
    ['panting','Houve respiração ofegante?','houve respiração ofegante','não houve respiração ofegante'],
    ['productiveCough','Houve tosse com secreção?','houve tosse produtiva','não houve tosse produtiva'],
    ['dryCough','Houve tosse seca?','houve tosse seca','não houve tosse seca'],
    ['dyspnea','Houve falta de ar?','houve dispneia','não houve dispneia'],
    ['wheezing','Houve chiado?','houve sibilância','não houve sibilância'],
    ['rhonchi','Houve roncos pulmonares?','houve roncos pulmonares','não houve roncos pulmonares'],
    ['nightWorsening','Houve piora noturna?','houve piora noturna dos sintomas respiratórios','não houve piora noturna dos sintomas respiratórios'],
    ['otherLowerResp','Houve outro sintoma respiratório baixo?','houve outros sintomas respiratórios baixos','não houve outros sintomas respiratórios baixos']
  ],
  cardiovascular: [
    ['chestPain','Houve dor no peito?','houve dor torácica','não houve dor torácica'],
    ['palpitations','Houve palpitações?','houve palpitações','não houve palpitações'],
    ['cyanosis','Houve cianose?','houve cianose','não houve cianose'],
    ['abruptSyncope','Houve síncope abrupta?','houve síncope de início abrupto','não houve síncope abrupta']
  ],
  gastrointestinal: [
    ['diarrhea','Houve diarreia?','houve diarreia','não houve diarreia'],
    ['bowelMovements','Houve evacuações durante o quadro?','houve evacuações durante o quadro','não houve evacuações durante o quadro'],
    ['constipation','Houve constipação?','houve constipação','não houve constipação'],
    ['spontaneousVomiting','Houve vômitos espontâneos?','houve vômitos espontâneos','não houve vômitos espontâneos'],
    ['postCoughVomiting','Houve vômitos após tosse?','houve vômitos pós-tosse','não houve vômitos após tosse'],
    ['mucusVomiting','Houve vômitos com catarro?','houve vômitos com secreção','não houve vômitos com secreção'],
    ['postprandialVomiting','Houve vômitos após alimentação?','houve vômitos pós-prandiais','não houve vômitos após alimentação']
  ],
  skin: [
    ['skinMucosalLesions','Houve lesões de pele ou mucosas?','houve lesões em pele ou mucosas','não houve lesões em pele ou mucosas'],
    ['itchyLesions','As lesões coçam?','as lesões apresentaram prurido','as lesões não apresentaram prurido'],
    ['painfulLesions','As lesões doem?','as lesões eram dolorosas','as lesões não eram dolorosas'],
    ['lesionDischarge','Houve secreção nas lesões?','houve secreção nas lesões','não houve secreção nas lesões'],
    ['lesionSpread','As lesões se disseminaram?','houve disseminação das lesões','não houve disseminação das lesões'],
    ['skinBleeding','Houve sangramento na pele?','houve sangramento cutâneo','não houve sangramento cutâneo']
  ],
  neurological: [
    ['conscious','Permaneceu consciente?','permaneceu consciente','não permaneceu consciente'],
    ['oriented','Permaneceu orientada?','permaneceu orientada','apresentou desorientação'],
    ['alert','Permaneceu alerta?','permaneceu alerta','apresentou redução do estado de alerta'],
    ['followsCommands','Interage e atende a comandos?','interagiu e atendeu a comandos','não interagiu ou não atendeu a comandos'],
    ['abnormalMovements','Houve movimentos anormais?','houve movimentos anormais','não houve movimentos anormais'],
    ['syncope','Houve síncope?','houve síncope','não houve síncope'],
    ['seizures','Houve convulsões?','houve convulsões','não houve convulsões'],
    ['excessiveSleepiness','Houve sonolência excessiva?','houve sonolência excessiva','não houve sonolência excessiva'],
    ['inconsolableCry','Houve choro inconsolável?','houve choro inconsolável','não houve choro inconsolável'],
    ['abnormalBehavior','Houve comportamento anormal?','houve alteração do comportamento','não houve alteração do comportamento'],
    ['projectileVomiting','Houve vômito em jato?','houve vômito em jato','não houve vômito em jato'],
    ['intractableHeadache','Houve cefaleia intratável?','houve cefaleia intratável','não houve cefaleia intratável'],
    ['subgalealHematoma','Houve hematoma subgaleal?','houve hematoma subgaleal','não houve hematoma subgaleal'],
    ['headTrauma','Bateu a cabeça?','houve traumatismo craniano','não houve traumatismo craniano']
  ],
  locomotor: [
    ['traumaHistory','Houve trauma?','houve história de trauma','não houve história de trauma'],
    ['bruisesHematomas','Houve equimoses ou hematomas?','houve equimoses ou hematomas','não houve equimoses nem hematomas'],
    ['movesLimb','Movimenta o membro acometido?','movimenta o membro acometido','não movimenta adequadamente o membro acometido'],
    ['mechanicalPain','A dor tem padrão mecânico?','a dor apresentou padrão mecânico','a dor não apresentou padrão mecânico'],
    ['inflammatoryPain','A dor tem padrão inflamatório?','a dor apresentou padrão inflamatório','a dor não apresentou padrão inflamatório'],
    ['arthritisSigns','Houve sinais de artrite?','houve sinais de artrite','não houve sinais de artrite'],
    ['misalignment','Houve desalinhamento?','houve desalinhamento','não houve desalinhamento'],
    ['extremitiesMove','As extremidades se movimentam?','as extremidades movimentam-se','as extremidades não se movimentam adequadamente'],
    ['sensationPreserved','A sensibilidade está preservada?','a sensibilidade foi relatada como preservada','houve alteração da sensibilidade']
  ]
});

const triQuestions = (section, specs) => specs.map(([id,title])=>q(`history-${id}`,section,title,'Selecione somente conforme o relato; deixe em branco para omitir do texto final.',[select(id,'Resposta',triState,{full:true})]));

export const defaultConduct = [
  'Prescrevo sintomáticos como medidas suportivas devido à condição de base.',
  'Oriento ao acompanhante sinais e sintomas de alarme.',
  'Acompanhante ciente e concordante com plano terapêutico proposto.',
  'Deixo-me à disposição para esclarecimento de dúvidas ou eventuais ocorrências.',
  'Alta para tratamento domiciliar e acompanhamento ambulatorial.'
].join('\n');

const groupedSymptoms = (id, section, title, specs, detailId, detailLabel) => q(id,section,title,'Preencha apenas o que foi perguntado e relatado.',[
  ...specs.map(([fieldId,label])=>select(fieldId,label,triState)),
  textarea(detailId,detailLabel,'Lateralidade, aspecto, início, evolução e outros dados pertinentes')
]);

const fieldGroup = (title, hint, fields) => ({title,hint,fields});
const page = (id, title, hint, groups) => ({id,section:title,title,hint,groups,fields:groups.flatMap(group=>group.fields)});
const triFields = (specs, options = triState) => specs.map(([id,label])=>select(id,label,options));

export const questions = [
  page('identification','Identificação','',[
    fieldGroup('Idade','',[text('ageValue','Idade','Ex.: 3a, 6m ou 20d')]),
    fieldGroup('Peso','',[text('weight','Peso','Ex.: 3kg')]),
    fieldGroup('Alergias','',[text('allergyDetails','Alergias','Nega ou fármaco / reação')]),
    fieldGroup('Comorbidades','',[text('comorbidityDetails','Comorbidades','Nega ou condição')]),
    fieldGroup('MUC','',[text('continuousMeds','Medicações de uso contínuo','Nega ou medicamento')]),
    fieldGroup('HPP','',[text('personalHistoryDetails','História pessoal pregressa','Nega ou antecedentes')]),
    fieldGroup('HF','',[text('familyHistoryDetails','História familiar','Nega ou antecedentes')])
  ]),
  page('hma','História da Moléstia Atual','Queixa, evolução, contexto e sinais de alerta.',[
    fieldGroup('Queixa principal','Registre nas palavras do responsável ou do paciente.',[textarea('chiefComplaint','Queixa principal','Febre e tosse; dor abdominal; TCE; trauma em membro…')]),
    fieldGroup('Início ou tempo de evolução','Informe o início ou a duração dos sintomas.',[text('onset','Início / tempo de evolução','Ex.: há 2 dias',{full:true})]),
    fieldGroup('Padrão de evolução','Selecione o padrão relatado.',[select('evolution','Evolução',[{value:'',label:'Pular item'},...['Súbita','Progressiva','Flutuante','Recorrente','Em melhora','Sem mudança relevante'].map(value=>({value,label:value}))],{full:true})]),
    fieldGroup('Sintomas associados','Descreva a sequência dos sintomas.',[textarea('associated','História detalhada','Cronologia, intensidade e sintomas associados')]),
    fieldGroup('Fatores de melhora','Registre o que melhorou o quadro.',[textarea('improvementFactors','Fatores de melhora','Medidas, posições, repouso ou outras circunstâncias')]),
    fieldGroup('Fatores de piora','Registre o que piorou o quadro.',[textarea('worseningFactors','Fatores de piora','Atividades, horários, alimentação ou outras circunstâncias')]),
    fieldGroup('Exposições e contexto','Contactantes, traumas, tratamentos, vacinação, gestação e período perinatal.',[textarea('context','Contexto e exposições','Inclua também viagens, animais e contexto psicossocial quando pertinentes.')])
  ]),
  page('general-state','Estado geral','',[
    fieldGroup('Estado geral','',[
      {id:'clinicalState',label:'Prostração?',type:'radio',options:[{value:'prostracao',label:'Sim'},{value:'sem-prostracao',label:'Não'},{value:'',label:'Pular item'}]},
      {id:'irritabilityState',label:'Irritabilidade?',type:'radio',options:[{value:'irritavel',label:'Sim'},{value:'normal',label:'Não'},{value:'',label:'Pular item'}]},
      {id:'oralIntake',label:'Via oral preservada?',type:'radio',options:[{value:'sim',label:'Sim'},{value:'liquidos',label:'Apenas para líquidos'},{value:'hiporexia',label:'Hiporexia'},{value:'anorexia',label:'Anorexia'},{value:'',label:'Pular item'}]},
      {id:'sialorrhea',label:'Sialorreia?',type:'radio',options:[{value:'sim',label:'Sim'},{value:'nao',label:'Não'},{value:'',label:'Pular item'}]}
    ])
  ]),
  page('coong','Cabeça e pescoço','',[
    fieldGroup('Sintomas nasais / VAS','',[textarea('nasalDetails','Sintomas nasais e de vias aéreas superiores')]),
    fieldGroup('Sintomas cervicais','',[textarea('neckOtherChanges','Sintomas cervicais')]),
    fieldGroup('Sintomas oculares','',[textarea('ocularDetails','Sintomas oculares')]),
    fieldGroup('Sintomas otológicos','',[textarea('otologicDetails','Sintomas otológicos')]),
    fieldGroup('Sintomas intraorais','',[textarea('oralHistory','Sintomas intraorais')])
  ]),
  page('pulmonary','Respiratório e cardiovascular','',[
    fieldGroup('Sintomas pulmonares','Preencha apenas o que foi perguntado e relatado.',[...triFields(symptomGroups.respiratory.slice(0,1)),select('coughType','Tosse?',[{value:'nega',label:'Nega'},{value:'seca',label:'Seca'},{value:'oligossecretiva',label:'Oligossecretiva'},{value:'secretiva',label:'Secretiva'},{value:'nao_informado',label:'Não informado'},{value:'',label:'Pular este item'}]),...triFields(symptomGroups.respiratory.slice(3).filter(([id])=>id!=='otherLowerResp')),select('dyspneicSymptoms','Sintomas dispneicos?',[{value:'sim',label:'Sim'},{value:'nao',label:'Não'},{value:'relato_incerto',label:'Sem relato claro'},{value:'nao_informado',label:'Não informado'},{value:'esforco_toracico',label:'Esforço respiratório torácico informado'},{value:'',label:'Pular este item'}])])
,
    fieldGroup('Sintomas cardiovasculares','Selecione somente conforme o relato.',[...triFields(symptomGroups.cardiovascular.slice(0,3)),textarea('cyanosisLocation','Localização da cianose','Perioral, extremidades ou outra distribuição'),...triFields(symptomGroups.cardiovascular.slice(3))])
  ]),
  page('gastrointestinal','Sintomas gastrointestinais, genitourinários e pele','Vômitos, diurese, períneo, vulva, evacuações e pele.',[
    fieldGroup('Vômitos, diurese, períneo e evacuações','Registre as respostas na sequência abaixo.',[textarea('vomitingHistory','Apresentou vômitos?','Se sim: pós-prandiais, espontâneos ou pós-tosse? Secreção catarral em permeio?'),textarea('urinaryHistory','Diurese presente?','Aumentada ou reduzida? Algum sintoma urinário? Aspecto da urina?'),textarea('perinealHistory','Queixas em região do períneo ou vulva?','Dor, prurido, lesões, secreções, sangramento ou outras alterações relatadas.'),textarea('bowelHistory','Evacuação preservada?','Diarreia líquida? Sangue ou muco? Constipação? Tempo sem evacuar? Sintomas durante a evacuação? Aspecto das fezes?')]),
    fieldGroup('Sintomas referentes à pele e anexos','Descreva apenas os achados relatados.',[textarea('skinHistory','Lesões de pele?','Como são? Onde se iniciaram? Disseminaram? Sangramento ou outras secreções? Coçam? Doem? Algum outro sintoma na lesão?')])
  ]),
  page('neurological','Sintomas neurológicos','História neurológica e traumatismo cranioencefálico.',[
    fieldGroup('Sintomas neurológicos','Registre os achados na ordem abaixo, considerando a idade.',[select('headTrauma','Houve trauma cranioencefálico?',triState),text('headTraumaLocation','Onde bateu?','Local do impacto',{full:true}),text('timeSinceHeadTrauma','Há quanto tempo?','Tempo decorrido',{full:true}),textarea('neuroTceMechanism','Mecanismo do trauma e altura, se queda','Como ocorreu? Altura, superfície, proteção e mecanismo.'),textarea('neuroConsciousnessHistory','Consciência, alerta e comportamento','Permaneceu orientada e acordada? Alerta ou sonolenta? Comportamento habitual mantido?'),textarea('neurologicalAssociated','Vômitos, síncope e tontura','Vômitos em jato ou em piora? Síncope ou pré-síncope? Tontura ou vertigem?'),textarea('neuroHeadacheHistory','Cefaleia','Localização, início, intensidade e evolução.'),textarea('neuroSeizureHistory','Movimentos anormais ou convulsivos','Semiologia, duração, lateralidade, recuperação e febre.'),textarea('neuroScalpHistory','Pele, face e escalpo','Lesões, hematomas, feridas e sangramento.'),textarea('neuroOtherHistory','Outros sintomas neurológicos e estado basal','Déficit focal, sensibilidade, marcha, visão, meningismo e desenvolvimento.')])
  ]),
  page('osteoarticular','Sintomas osteoarticulares','Trauma, articulações e repercussão funcional.',[
    fieldGroup('Sintomas osteoarticulares','Reúna o evento, sintomas e repercussão funcional sem repetir informações.',[checklist('locomotorSymptoms','Sintomas osteoarticulares direcionados',locomotorSymptoms),textarea('locomotorEvent','Evento ou trauma','O que aconteceu? Onde e quando? Membro ou articulação, lado e mecanismo.'),textarea('locomotorPainHistory','Dor, função e sinais associados','Intensidade, padrão, edema, hematoma, calor, febre, mobilidade, apoio, marcha, força e sensibilidade.'),textarea('locomotorPreviousHistory','Antecedentes osteoarticulares','Fraturas, luxações, cirurgias, doenças ortopédicas ou reumatológicas e tratamento prévio.')])
  ]),
  page('other-symptoms','Outros sintomas e sinais de alarme','',[
    fieldGroup('Sinais de alerta relatados','Marque apenas os sinais efetivamente relatados.',[checklist('redFlags','Sinais relatados',redFlags)]),
    fieldGroup('Outros sintomas não questionados?','',[textarea('otherSymptoms','Outros sintomas não questionados?','Descreva outros relatos ou queixas')])
  ]),
  page('physical-exam','Exame físico','Sinais vitais e achados examinados.',[
    fieldGroup('Sinais vitais','Informe somente os valores medidos.',[text('saturation','SatO₂','Ex.: 98',{inputType:'number',min:'0',max:'100',step:'1',suffix:'%'}),select('saturationContext','Condição da medida',[{value:'',label:'Não especificar'},{value:'ar ambiente',label:'Ar ambiente'},{value:'O₂ suplementar',label:'O₂ suplementar'}]),text('heartRate','FC','Ex.: 110',{inputType:'number',min:'0',step:'1',suffix:'bpm'}),text('respRate','FR','Ex.: 28',{inputType:'number',min:'0',step:'1',suffix:'irpm'}),text('capillaryRefill','TEC','Ex.: 2',{inputType:'number',min:'0',step:'0.1',suffix:'s'}),text('temperature','Temperatura','Ex.: 37,2',{inputType:'number',step:'0.1',suffix:'°C'}),text('neuroGcs','ECGp / Glasgow pediátrico','Valor e componentes avaliados'),text('bloodPressure','Pressão arterial','Ex.: 100/60',{suffix:'mmHg'}),text('glucose','Glicemia','Ex.: 92',{inputType:'number',min:'0',step:'1',suffix:'mg/dL'}),text('ecg','Eletrocardiograma, se realizado','Ritmo, FC e alterações',{full:true})]),
    fieldGroup('Alterações do exame físico','Digite as alterações encontradas por sistema (sistema respiratório, sistema digestório, etc) e inclua também o que não está alterado dentro do mesmo sistema. Modelo opcional, mediante confirmação abaixo. Sinais vitais: somente valores preenchidos.',[textarea('physicalExamChanges','Alterações do exame físico','Ex.: SR: sibilos bilaterais; oroscopia: hiperemia e exsudato.\nRinoscopia com alterações? Hipertrofia de cornetos? Hiperemia? Muco em permeio — qual aspecto?\nLinfonodomegalias palpáveis? Reativas ou dolorosas? Seguem a drenagem do foco infeccioso? Sinais de gravidade ou malignidade — quais?\nFácies atípicas ou sindrômicas? Assimetria facial? Abaulamento ou retração craniofacial? Outros achados à ectoscopia?'),{id:'examTemplateConfirmed',label:'Exame físico padrão',type:'examTemplate',full:true}])
  ]),
  page('diagnostic-hypotheses','Hipóteses Diagnósticas','Registre apenas as hipóteses consideradas.',[
    fieldGroup('Hipóteses Diagnósticas','Deixe em branco para omitir o conteúdo.',[textarea('diagnosticHypotheses','Hipóteses Diagnósticas','Deixe em branco para omitir')])
  ]),
  page('conduct','Condutas adotadas','Registre somente as condutas definidas.',[
    fieldGroup('Condutas adotadas','Edite o modelo conforme as condutas adotadas.',[textarea('conduct','Condutas adotadas','')])
  ])
];

export function getActiveQuestions(state = {}) {
  return questions.filter(question => !question.when || question.when(state));
}

const clean = value => String(value ?? '').trim();
const sentence = value => {
  const result = clean(value);
  return result && !/[.!?]$/.test(result) ? `${result}.` : result;
};
const listText = items => items.length < 2 ? (items[0] || '') : `${items.slice(0,-1).join(', ')} e ${items.at(-1)}`;
const formatDate = value => {
  const match = clean(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}/${match[2]}/${match[1]}` : clean(value);
};

const labeled = (label, value, suffix = '') => clean(value) ? `${label}: ${clean(value)}${suffix}` : '';
const selected = value => Array.isArray(value) ? value.filter(Boolean) : [];

const lowerFirst = value => /^[A-ZÀ-Ý]{2,}(?:\b|$)/u.test(clean(value))?clean(value):clean(value).replace(/^./u,char=>char.toLocaleLowerCase('pt-BR'));
const upperFirst = value => clean(value).replace(/^./u,char=>char.toLocaleUpperCase('pt-BR'));
const withoutTerminal = value => clean(value).replace(/[.!]+$/u,'');
const flowing = (lead, clauses) => {
  const available = clauses.map(withoutTerminal).filter(Boolean);
  if (!available.length) return '';
  if (!lead) return available.map(item=>sentence(upperFirst(item))).join(' ');
  return `${lead}, ${lowerFirst(available[0])}. ${available.slice(1).map(item=>sentence(upperFirst(item))).join(' ')}`.trim();
};
const triClauses = (specs,state) => specs.flatMap(([id,,positive,negative])=>state[id]==='sim'?[positive]:state[id]==='nao'?[negative]:[]);
const semanticText = value => clean(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').replace(/\b0+(\d+)\b/g,'$1').replace(/[^a-z0-9]+/g,' ').trim();
const clinicalStopwords = new Set(['a','ao','aos','as','com','como','da','das','de','do','dos','e','em','foi','foram','ha','houve','na','nas','no','nos','o','os','para','por','que','relato','segundo','sem','sob','sobre','um','uma']);
const contentTokens = value => semanticText(value).split(' ').filter(token=>token && !clinicalStopwords.has(token));
const clauseCovered = (corpus,clause) => {
  const target=narrativeKey(clause);
  const negative=target.startsWith('negativa ');
  return narrativeSentences(corpus).some(part=>{
    if(uncertainNarrative(part)) return false;
    const source=narrativeKey(part);
    if(source===target) return true;
    if(source.startsWith('negativa ')!==negative) return false;
    if(/\b(?:nega|nao|sem|negou|ausencia)\b/u.test(source.replace(/^negativa /u,''))) return false;
    return (` ${source} `).includes(` ${target.replace(/^negativa /u,'')} `);
  });
};

const uniqueClauses = clauses => {
  const seen=new Set();
  return clauses.map(withoutTerminal).filter(Boolean).filter(clause=>{
    const key=(uncertainNarrative(clause)?'incerta ':'')+semanticText(clause);
    if(!key || seen.has(key)) return false;
    seen.add(key);return true;
  });
};
const groupedClinicalClauses = clauses => {
  const positives=[];const negatives=[];const others=[];
  for(const clause of uniqueClauses(clauses)) {
    const lower=lowerFirst(clause);
    if(/^houve\s+/iu.test(lower)) positives.push(lower.replace(/^houve\s+/iu,''));
    else if(/^(?:conforme (?:o )?relato,?\s*)?não houve\s+/iu.test(lower)) negatives.push(lower.replace(/^(?:conforme (?:o )?relato,?\s*)?não houve\s+/iu,''));
    else others.push(clause);
  }
  return [
    positives.length?`Houve ${listText(positives)}`:'',
    negatives.length?`Nega ${listText(negatives)}`:'',
    ...others
  ].filter(Boolean);
};
const fluidFlow = (lead,clauses) => flowing(lead,groupedClinicalClauses(clauses));
const directReport = value => {
  const text=clean(value);
  if(!text) return '';
  if(/^(?:(?:a |o )?(?:criança|paciente|acompanhante|mãe|pai)\b|nega\b|sem\b|há\b|houve\b|apresenta\b|mantém\b|está\b|permanece\b)/iu.test(text)) return sentence(upperFirst(text));
  if(/^(?:diarreia|tosse|dor|febre|vômitos|hiporexia|anorexia)\b/iu.test(text)) return sentence(`Apresenta ${lowerFirst(text)}`);
  if(/^relata\b/iu.test(text)) return sentence(`Acompanhante ${lowerFirst(text)}`);
  return sentence(`Relato de ${lowerFirst(text)}`);
};
const detailClause = (prefix,value) => clean(value) ? `${prefix} ${withoutTerminal(value)}` : '';
const conflictingDenial = (kind,status,details) => ['Nega','nao'].includes(status) && clean(details)
  ? `há divergência no relato sobre ${kind}, pois foi selecionada uma negativa e também foram descritos ${clean(details)}` : '';
const statusClause = (kind,status,details) => {
  const d=clean(details);
  if (conflictingDenial(kind,status,d)) return conflictingDenial(kind,status,d);
  if (d) return kind==='alergias medicamentosas' ? `foram relatadas alergias medicamentosas a ${d}` : `há antecedentes de ${d}`;
  if (status==='Nega') return kind==='alergias medicamentosas' ? 'não foram relatadas alergias medicamentosas' : 'não foram relatadas comorbidades';
  if (status==='Sim') return kind==='alergias medicamentosas' ? 'foram referidas alergias medicamentosas' : 'foram referidas comorbidades';
  return '';
};

export const examLabels = Object.freeze({general:'Estado geral',neurological:'SN',skull:'Crânio',otoscopy:'Otoscopia',oroscopy:'Oroscopia',rhinoscopy:'Rinoscopia anterior',neck:'Linfonodos/pescoço',respiratory:'SR',cardiovascular:'SCV',abdomen:'SD',skin:'Pele e fâneros',locomotor:'Aparelho locomotor'});
const normalized = value => clean(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const compactAge = state => {
  const raw=clean(state.ageValue);
  const match=raw.match(/^(\d+(?:[.,]\d+)?)\s*(a|anos?|m|mes(?:es)?|d|dias?)$/i);
  if(!match) return {value:raw,unit:clean(state.ageUnit)};
  const unit=match[2].toLowerCase();
  return {value:match[1],unit:unit.startsWith('a')?'anos':unit.startsWith('m')?'meses':'dias'};
};
const ageInMonths = state => {
  const age=compactAge(state);
  state={...state,ageValue:age.value,ageUnit:age.unit};
  const value=Number(clean(state.ageValue).replace(',','.'));
  if(!clean(state.ageValue) || !Number.isFinite(value) || value<0) return null;
  return state.ageUnit==='anos'?value*12:state.ageUnit==='meses'?value:state.ageUnit==='dias'?value/30.4375:null;
};
const isTce = state => /\btce\b|trauma(?:tismo)?\s+(?:cranio|craniano|de cranio)|bateu (?:a )?cabeca/.test(normalized(state.chiefComplaint));
const isOrthopedic = state => /trauma (?:em |de |no |na )?(?:membro|articulacao)|fratura|entorse|luxacao|dor articular|artrite|claudicacao|dor (?:no|na|em) (?:joelho|cotovelo|punho|tornozelo|ombro|quadril)/.test(normalized(state.chiefComplaint)) || selected(state.locomotorSymptoms).some(item=>['trauma em membro ou articulação','dor óssea, muscular ou articular'].includes(item));

export function getExamTemplate(state = {}) {
  const model={...normalTemplate};
  const months=ageInMonths(state);
  if(months===null || months<24) model.neurological=model.neurological.replace('Força muscular 5/5 globalmente, com tônus preservado. ','Tônus preservado. ');
  if(isTce(state)) {
    const neuro=[
      'Criança acordada, alerta, em bom contato, com respostas adequadas para a idade.',
      'Pupilas isocóricas e fotorreagentes bilateralmente. Movimentos oculares extrínsecos completos, sem nistagmo. Mímica facial simétrica.',
      months!==null && months>=24?'Fala e deglutição preservadas, sem disartria ou engasgos. Língua sem desvio à protrusão.':'',
      'Movimenta ativamente e de forma simétrica os quatro membros, contra a gravidade, sem paresias evidentes. Tônus preservado, sem posturas anormais ou movimentos involuntários.',
      'Sensibilidade superficial avaliada com respostas simétricas aos estímulos.',
      months!==null && months>=24?'Quando aplicáveis e avaliadas, sensibilidade palestésica e provas cerebelares preservadas, sem dismetria, disdiadococinesia ou tremores. Marcha avaliada estável, sem ataxia ou desvios. Reflexos osteotendíneos presentes e simétricos; resposta cutâneo-plantar flexora bilateral.':'',
      'Sem déficit neurológico focal evidente. Sem rigidez de nuca ou outros sinais meníngeos.',
      months!==null && months<9?'Fontanela anterior normopalpável, sem retrações ou abaulamentos. Reflexos primitivos examinados compatíveis com a faixa etária.':''
    ].filter(Boolean);
    model.neurological=neuro.join(' ');
    model.skull='Crânio sem deformidades ou afundamentos palpáveis. Ausência de sinais clínicos de fratura de base do crânio. Sem dor difusa à palpação do escalpo.';
  }
  if(isOrthopedic(state)) model.locomotor='Marcha, quando aplicável, e postura preservadas, alinhamento corporal adequado e simetria bilateral dos membros. Ausência de deformidades, edema, sinais inflamatórios, dor à palpação, limitação da amplitude de movimento ou instabilidade articular. Movimentos ativos e passivos avaliados completos e indolores. Avaliações sensitiva, motora e vascular preservadas, com pulsos periféricos palpáveis e simétricos. Sem alterações nos testes especiais efetivamente realizados.';
  const gcs=Number(clean(state.neuroGcs).match(/^\d+(?:[.,]\d+)?/)?.[0]?.replace(',','.'));
  if(clean(state.neuroGcs) && Number.isFinite(gcs) && gcs<15) {delete model.neurological;delete model.general;}
  const saturation=Number(clean(state.saturation).replace(',','.'));
  if((clean(state.saturation) && saturation<95) || state.saturationContext==='O₂ suplementar') {delete model.respiratory;delete model.general;}
  const temperature=Number(clean(state.temperature).replace(',','.'));
  if(clean(state.temperature) && (temperature>=38 || temperature<36)) delete model.general;
  return model;
}

const systemAliases = {
  general:/^(?:estado geral|ectoscopia geral|geral|eg)\b/,
  neurological:/^(?:sn|sistema nervoso|sistema neurologico|exame neurologico|neurologico|neuro)\b/,
  skull:/^(?:cranio|craniofacial|facies|face|escalpo)\b/,
  otoscopy:/^(?:otoscopia|otologico|ouvidos?)\b/,
  oroscopy:/^(?:oroscopia|orofaringe|intraoral|boca|oral)\b/,
  rhinoscopy:/^(?:rinoscopia(?: anterior)?|nasal|nariz)\b/,
  neck:/^(?:linfonodos(?:\/pescoco)?|linfonodomegalias?|linfadenomegalias?|pescoco|cervical)\b/,
  respiratory:/^(?:sr|sistema respiratorio|aparelho respiratorio|respiratorio|pulmoes|ausculta pulmonar)\b/,
  cardiovascular:/^(?:scv|sistema cardiovascular|cardiovascular|cardiaco|coracao)\b/,
  abdomen:/^(?:sd|sistema digestorio|digestorio|abdome|abdomen|abdominal)\b/,
  skin:/^(?:pele(?: e faneros)?|cutaneo|faneros)\b/,
  locomotor:/^(?:aparelho locomotor|sistema locomotor|locomotor|musculoesqueletico|articulacoes?|ortopedico)\b/
};
const systemKeywords = {
  general:/\b(?:prostracao|prostrad\w*|desidrat\w*|palidez|ictericia|estado geral|toxemi\w*|cianose)\b/,
  neurological:/\b(?:pupila\w*|anisocoria|glasgow|convuls\w*|paresia|plegia|hiporresponsiv\w*|sonolenc\w*|mening\w*|fontanela|ataxia|dismetria|reflexos?)\b/,
  skull:/\b(?:cranio\w*|facies|sindrom\w*|assimetria facial|cefalo.?hematoma|escalpo|afundamento)\b/,
  otoscopy:/\b(?:timpanic\w*|otoscop\w*|ouvido\w*|otorr\w*|conduto auditivo)\b/,
  oroscopy:/\b(?:amigdal\w*|orofaring\w*|oroscop\w*|oral|boca|palato|lingua|odont\w*)\b/,
  rhinoscopy:/\b(?:nasal|nasais|nariz|cornetos?|rinoscop\w*|coriza|vestibulos nasais)\b/,
  neck:/\b(?:linfono\w*|linfadeno\w*|pescoco|tireoide|massa cervical|cadeias cervicais)\b/,
  respiratory:/\b(?:sibil\w*|estertor\w*|roncos? (?:pulmonares?|de vias aereas inferiores)|murmurio vesicular|mv|tirage\w*|taquipne\w*|dispne\w*|crepitacoes|pulmon\w*|apneia|bronco\w*)\b/,
  cardiovascular:/\b(?:sopros?|bulhas?|cardiac\w*|cardiovascul\w*|pulsos?|perfusao|extremidades frias|taquicardi\w*|bradicardi\w*)\b/,
  abdomen:/\b(?:abdom\w*|abdome|blumberg|giordano|visceromega\w*|hepatomega\w*|esplenomega\w*|ruidos hidroaereos|lojas renais)\b/,
  skin:/\b(?:pele|cutane\w*|exantem\w*|petequi\w*|purpura|equimos\w*|faneros?|urticaria|dermat\w*|edema\w*)\b/,
  locomotor:/\b(?:membro\w*|articul\w*|muscul\w*|locomot\w*|claudic\w*|joelh\w*|cotovel\w*|punh\w*|tornozel\w*|ombro\w*|quadril|deformidade ossea|amplitude|fratura|luxacao)\b/
};

export function parsePhysicalExamChanges(value) {
  const chunks=clean(value).replace(/\r/g,'').split(/\n+|;+|(?<=[.!?])\s+(?=[A-ZÀ-Ý])|\s+e\s+(?=(?:oroscopia|otoscopia|rinoscopia|abdome|pele|linfonodos|SN|SR|SCV)\b)/iu).map(clean).filter(Boolean);
  const records=[];
  let previousSystem=null;
  for(const chunk of chunks) {
    const norm=normalized(chunk);
    const explicit=Object.entries(systemAliases).find(([,pattern])=>pattern.test(norm));
    let systems=explicit?[explicit[0]]:Object.entries(systemKeywords).filter(([,pattern])=>pattern.test(norm)).map(([id])=>id);
    if(!systems.length && previousSystem && !/[:—]/u.test(chunk)) systems=[previousSystem];
    previousSystem=systems.length===1?systems[0]:null;
    const finding=explicit?chunk.replace(/^[^:—–]+\s*[:—–]\s*/u,''):chunk;
    records.push({systems,text:sentence(finding)});
  }
  return records;
}

export function createPhysicalExam(state = {}) {
  const vitals=[
    labeled(`SatO₂${state.saturationContext==='ar ambiente'?' aa':state.saturationContext==='O₂ suplementar'?' em O₂ suplementar':''}`,state.saturation,'%'),
    labeled('FC',state.heartRate,' bpm'),labeled('FR',state.respRate,' irpm'),labeled('TEC',state.capillaryRefill,' segundos'),
    labeled('Temperatura',state.temperature,' °C'),labeled('ECGp',state.neuroGcs),labeled('PA',state.bloodPressure,' mmHg'),
    labeled('Glicemia',state.glucose,' mg/dL'),labeled('ECG',state.ecg)
  ].filter(Boolean);
  const manual=parsePhysicalExamChanges(state.physicalExamChanges);
  const model=state.examTemplateConfirmed==='sim'?getExamTemplate(state):{};
  // Preserve caller-supplied exam findings; no old per-system inputs remain in the UI.
  const explicit={};
  for(const id of Object.keys(examLabels)) if(clean(state[id])) explicit[id]=clean(state[id]);
  for(const record of manual) for(const id of record.systems) delete model[id];
  // A free finding that cannot be assigned safely still accompanies the model,
  // but suppresses the broad "bom estado geral" sentence to avoid contradiction.
  if(manual.some(record=>!record.systems.length)) delete model.general;
  for(const id of Object.keys(explicit)) delete model[id];
  if(explicit.respiratory===normalTemplate.respiratory && !Object.hasOwn(getExamTemplate(state),'respiratory')) delete explicit.respiratory;
  if(manual.some(record=>record.systems.includes('neurological') && /sonol|hiporrespons|coma|convuls|paresia|plegia/.test(normalized(record.text)))) delete model.general;
  const directedNeuro=[['neuroPupils','as pupilas apresentaram'],['neuroOcular','os movimentos oculares apresentaram'],['neuroCranial','os pares cranianos e a face apresentaram'],['neuroMotor','a força e a motricidade apresentaram'],['neuroTone','o tônus e os movimentos apresentaram'],['neuroSensory','a sensibilidade apresentou'],['neuroCerebellar','a coordenação apresentou'],['neuroGait','a marcha e o equilíbrio apresentaram'],['neuroReflexes','os reflexos apresentaram'],['neuroMeningeal','quanto a foco e meningismo, observou-se'],['neuroSkull','no crânio e escalpo, observou-se'],['neuroFontanelle','a fontanela apresentou'],['neuroPrimitive','os reflexos primitivos apresentaram'],['neuroOther','adicionalmente, observou-se']].map(([id,prefix])=>detailClause(prefix,state[id])).filter(Boolean);
  if(directedNeuro.length) {explicit.neurological=directedNeuro.map(sentence).join(' ');delete model.neurological;}
  if(clean(state.neuroGcs) && Number.parseFloat(state.neuroGcs)<15) {
    if(explicit.neurological===normalTemplate.neurological) delete explicit.neurological;
  }
  const body=[];
  if(vitals.length) body.push(`- DADOS VITAIS: ${vitals.join(' | ')}`);
  for(const id of Object.keys(examLabels)) {
    const finding=explicit[id] || model[id];
    const systemFindings=[finding?sentence(finding):'',...manual.filter(record=>record.systems.length===1 && record.systems[0]===id).map(record=>record.text)].filter(Boolean);
    if(systemFindings.length) body.push(`- ${examLabels[id]}: ${systemFindings.join(' ').replace(/\s*\n\s*/g,' ')}`);
    for(const record of manual.filter(record=>record.systems[0]===id && record.systems.length>1)) body.push(`- Achados: ${record.text}`);
  }
  for(const record of manual.filter(record=>!record.systems.length)) body.push(`- Achados: ${record.text}`);
  if(clean(state.otherFindings)) body.push(`- Outros achados: ${sentence(state.otherFindings)}`);
  return body.join('\n');
}

const narrativeSentences = value => clean(value).split(/(?<=[.!?])\s+(?=[A-ZÀ-Ý])|\n+/u).map(clean).filter(Boolean);
const narrativeKey = value => semanticText(value)
  .replace(/^(?:conforme o relato |quanto aos vomitos |quanto as evacuacoes )/u,'')
  .replace(/^(?:crianca com |paciente com |associam se ao quadro |acompanhante relata |relato de |foram relatados |ha relato de |apresenta |houve )/u,'')
  .replace(/^(?:nao houve |nega |sem )/u,'negativa ');
const simpleSymptoms = ['tosse seca','tosse secretiva','tosse oligossecretiva','tosse produtiva','tosse','febre','prostração','irritabilidade','hiporexia','anorexia','coriza','congestão nasal','dispneia','sialorreia','vômitos','diarreia'];
const simpleSymptomKeys = new Set(simpleSymptoms.map(semanticText));
const uncertainNarrative = value => /\?/u.test(value) || /\b(?:talvez|possivel|suspeita|incert|nao sabe|nao soube|nao confirma|sem relato claro|se houver|se apresentar)\b/u.test(semanticText(value));
export function deduplicateHistory(value) {
  const kept=[];const seen=new Set();
  for(const text of narrativeSentences(value)) {
    const key=(uncertainNarrative(text)?'incerta ':'')+narrativeKey(text);
    if(seen.has(key)) continue;
    const negative=key.startsWith('negativa ');
    const terms=key.replace(/^negativa /u,'').split(/,\s*|\s+e\s+/u);
    // Only reduce bare symptom lists. Keep dates, severity, uncertainty,
    // attribution and other qualifiers as additional clinical information.
    if(terms.length && terms.every(term=>simpleSymptomKeys.has(term))) {
      const remaining=terms.filter(term=>!kept.some(previous=>{
        if(uncertainNarrative(previous)) return false;
        const prev=narrativeKey(previous);
        const prevNegative=prev.startsWith('negativa ');
        // Mixed positive/negative sentences cannot be classified globally.
        if(/\b(?:nega|nao|sem|negou|ausencia)\b/u.test(prev.replace(/^negativa /u,''))) return false;
        if(prevNegative!==negative) return false;
        return (` ${prev} `).includes(` ${term} `);
      }));
      if(!remaining.length) {seen.add(key);continue;}
      if(remaining.length!==terms.length) {
        const labels=remaining.map(term=>simpleSymptoms.find(label=>semanticText(label)===term));
        kept.push(sentence(`${negative?'Nega':'Apresenta'} ${listText(labels)}`));
        seen.add(key);continue;
      }
    }
    kept.push(text);seen.add(key);
  }
  return kept.filter((text,index)=>{
    if(uncertainNarrative(text)) return true;
    const key=narrativeKey(text);
    if(!simpleSymptomKeys.has(key)) return true;
    return !kept.some((other,otherIndex)=>{
      if(index===otherIndex || uncertainNarrative(other)) return false;
      const detail=narrativeKey(other);
      return detail!==key && detail.startsWith(`${key} `) && !/\b(?:nega|nao|sem|negou|ausencia|negativa)\b/u.test(detail);
    });
  }).join(' ');
};

export function linearProse(value) {
  return String(value ?? '').split(/\r?\n/u)
    .map(line=>line.trim().replace(/^(?:[-–—•]\s+|\d+[.)]\s+)/u,''))
    .filter(line=>line && !/^[-_=]{3,}$/u.test(line))
    .map(line=>sentence(line.replace(/\s+/gu,' '))).join(' ');
}


export function createSummary(state = {}) {
  state={...state};
  const ageEntry=compactAge(state);
  state.ageValue=ageEntry.value; state.ageUnit=ageEntry.unit;
  state.weight=clean(state.weight).replace(/\s*kg$/i,'');
  const denies=value=>/^nega[.!]?$/i.test(clean(value));
  for(const [detail,status] of [['allergyDetails','allergyStatus'],['comorbidityDetails','comorbidityStatus'],['familyHistoryDetails','familyHistoryStatus'],['personalHistoryDetails','personalHistoryStatus']]) {
    if(!state[status] && denies(state[detail])) {
      state[status]=status==='allergyStatus'||status==='comorbidityStatus'?'Nega':'nao';
      state[detail]='';
    }
  }
  const age = clean(state.ageValue) ? `${clean(state.ageValue)}${clean(state.ageUnit) ? ` ${clean(state.ageUnit)}` : ''}` : '';
  const identityClauses = [];
  if (age) identityClauses.push(`com ${age}`);
  if (clean(state.weight)) identityClauses.push(`peso de ${clean(state.weight)} kg`);
  if (clean(state.sex)) identityClauses.push(`sexo ${lowerFirst(state.sex)}`);

  const antecedents = [
    statusClause('alergias medicamentosas',state.allergyStatus,state.allergyDetails),
    statusClause('comorbidades',state.comorbidityStatus,state.comorbidityDetails),
    denies(state.continuousMeds) ? 'nega medicações de uso contínuo' : clean(state.continuousMeds) ? `faz uso contínuo de ${withoutTerminal(state.continuousMeds)}` : '',
    conflictingDenial('antecedentes familiares',state.familyHistoryStatus,state.familyHistoryDetails) || (state.familyHistoryStatus==='nao' ? 'não foram relatados antecedentes familiares relevantes' : state.familyHistoryStatus==='sim' && !clean(state.familyHistoryDetails) ? 'há antecedentes familiares relevantes' : clean(state.familyHistoryDetails) ? `na história familiar, foram relatados ${withoutTerminal(state.familyHistoryDetails)}` : ''),
    conflictingDenial('antecedentes pessoais',state.personalHistoryStatus,state.personalHistoryDetails) || (state.personalHistoryStatus==='nao' ? 'não foram relatados antecedentes pessoais relevantes' : state.personalHistoryStatus==='sim' && !clean(state.personalHistoryDetails) ? 'há antecedentes pessoais relevantes' : clean(state.personalHistoryDetails) ? `na história patológica pregressa, constam ${withoutTerminal(state.personalHistoryDetails)}` : '')
  ].filter(Boolean);
  const identification = [
    identityClauses.length ? sentence(`Criança ${identityClauses.join(', ')}`) : '',
    flowing('Quanto aos antecedentes',antecedents)
  ].filter(Boolean).join(' ');

  const history = [];
  const hma = [];
  const chief=clean(state.chiefComplaint);
  const narrativeSource=[chief,state.associated,state.context].map(clean).filter(Boolean)
    .map(value=>sentence(upperFirst(value))).join(' ');
  const onset=clean(state.onset);
  const chronologySource=semanticText(chief).split(/\b(?:nega|nao|sem|negou|ausencia)\b/u)[0];
  const sameNight=/^(?:esta|nessa|na ultima|ultima) noite$/.test(semanticText(onset))
    && clauseCovered(chronologySource.replace(/\b(?:esta|nessa|na ultima|ultima) noite\b/gu,'noite atual'),'noite atual');
  let opening=chief ? (/^(?:(?:a |o )?(?:criança|paciente|acompanhante|mãe|pai)\b|nega\b|sem\b|não\b|apresenta\b|relata\b)/iu.test(chief)?withoutTerminal(upperFirst(chief)):`Criança com ${withoutTerminal(lowerFirst(chief))}`) : '';
  if(onset && !clauseCovered(chronologySource,onset) && !sameNight) {
    if(opening && !/inici|comec|ha \d|desde/.test(semanticText(chief))) opening+=`, com início ${withoutTerminal(lowerFirst(onset))}`;
    else hma.push(`O quadro teve início ${sentence(lowerFirst(onset))}`);
  }
  if(clean(state.evolution) && !clauseCovered(chief,state.evolution)) {
    if(opening) opening+=`, de evolução ${withoutTerminal(lowerFirst(state.evolution))}`;
    else hma.push(`O quadro apresenta evolução ${sentence(lowerFirst(state.evolution))}`);
  }
  if(opening) hma.unshift(sentence(opening));
  const feverType=['termometrada','referida'].includes(state.feverType)?` ${state.feverType}`:'';
  const feverAlreadyDescribed=clauseCovered(narrativeSource,`Houve febre${feverType}`);
  const feverDenial=state.feverType==='termometrada'?'Nega febre termometrada.':'Nega febre.';
  if(state.fever==='sim' && !clean(state.feverPeak) && !feverAlreadyDescribed) hma.push(state.feverType==='termometrada'?'Houve febre termometrada.':state.feverType==='referida'?'Houve febre referida, sem medida informada.':'Houve relato de febre.');
  else if(state.fever==='nao' && !clauseCovered(narrativeSource,feverDenial)) hma.push(feverDenial);
  const feverMeasurement=clean(state.feverPeak)?`Temperatura máxima de ${clean(state.feverPeak)} °C.`:'';
  if(feverMeasurement && !clauseCovered(narrativeSource,feverMeasurement)) hma.push(feverMeasurement);

  const painTerms=['dor','otalgia','odinofagia','cefaleia'];
  const painInChief=painTerms.some(term=>clauseCovered(chief,`Apresenta ${term}`));
  if (clean(state.improvementFactors)) hma.push(`Melhora${painInChief?' da dor':''} com ${sentence(lowerFirst(state.improvementFactors).replace(/\bvo\b/gi,'VO'))}`);
  if (clean(state.worseningFactors)) hma.push(`Piora com ${sentence(lowerFirst(state.worseningFactors))}`);
  if (clean(state.associated)) hma.push(/^(?:nega|sem|não|criança|paciente|acompanhante|mãe|pai)\b/iu.test(clean(state.associated))?sentence(upperFirst(state.associated)):`Associam-se ao quadro ${sentence(lowerFirst(state.associated))}`);
  if (clean(state.context)) hma.push(directReport(state.context));
  if (selected(state.redFlags).length) hma.push(`Foram relatados como sinais de alerta ${sentence(listText(selected(state.redFlags)))}`);
  if (state.symptomaticMedication==='sim') hma.push(clean(state.symptomaticDetails)?`Foi utilizada ${sentence(lowerFirst(state.symptomaticDetails))}`:'Foi utilizada medicação sintomática.');
  if (state.symptomaticMedication==='nao') hma.push('Não foi utilizada medicação sintomática.');
  if (hma.length) history.push(uniqueClauses(hma).map(sentence).join(' '));

  const general=[];
  if(state.activeReactive==='sim' && state.usualBehavior==='sim') general.push(`${state.clinicalState==='normal'?'Estado geral preservado: encontra-se':'Encontra-se'} ativa e reativa e mantém o comportamento habitual.`);
  else if(state.activeReactive==='sim') general.push('Mantém-se ativa e reativa.');
  else if(state.activeReactive==='nao') general.push('Não se mostrou ativa e reativa.');
  if(state.usualBehavior==='sim' && state.activeReactive!=='sim') general.push('Mantém o comportamento habitual.');
  else if(state.usualBehavior==='nao') general.push('Apresentou mudança do comportamento habitual.');
  const reported=[];const denied=[];
  if(state.painPresent==='sim' && !painTerms.some(term=>clauseCovered(narrativeSource,`Apresenta ${term}`))) reported.push('dor');
  if(state.painPresent==='nao') denied.push('dor');
  if(state.moaning==='sim') reported.push('gemência'); else if(state.moaning==='nao') denied.push('gemência');
  if(state.persistentCry==='sim') reported.push('choro persistente'); else if(state.persistentCry==='nao') denied.push('choro persistente');
  if(reported.length) general.push(`${general.length?'Entretanto, h':'H'}á relato de ${listText(reported)}.`);
  if(denied.length) general.push(`Nega ${listText(denied)}.`);
  const locationCovered=clauseCovered(chief,state.painLocation);
  if(clean(state.painLocation) && !locationCovered) general.push(`Quanto à localização da dor, ${sentence(lowerFirst(state.painLocation))}`);
  if(Object.hasOwn(state,'oralIntake')) {
    const oralClauses={sim:'Mantém a via oral preservada.',liquidos:'Mantém a via oral apenas para líquidos.',hiporexia:'Apresenta hiporexia.',anorexia:'Apresenta anorexia.'};
    if(oralClauses[state.oralIntake]) general.push(oralClauses[state.oralIntake]);
  } else {
    if(state.appetite==='alterado') general.push('Relata alteração do apetite.');
    const appetiteAlready=['hiporexia','apetite reduzido','apetite diminuído'].some(term=>clauseCovered(narrativeSource,`Apresenta ${term}`));
    if(state.appetite==='hiporexia' && state.liquidIntake==='sim') general.push(`${appetiteAlready?'Apesar disso':'Apesar da hiporexia'}, mantém a ingestão de líquidos.`);
    else {
      if(state.appetite==='preservado') general.push('Mantém o apetite preservado.');
      else if(state.appetite==='hiporexia' && !appetiteAlready) general.push('Apresenta hiporexia.');
      if(state.liquidIntake==='sim') general.push('Mantém a ingestão de líquidos.');
      else if(state.liquidIntake==='nao') general.push('Não mantém ingestão adequada de líquidos.');
    }
  }
  if(state.sialorrhea==='sim') general.push('Apresenta sialorreia.'); else if(state.sialorrhea==='nao') general.push('Nega sialorreia.');
  if(state.clinicalState==='sem-prostracao') general.push('Nega prostração.');
  if(state.clinicalState==='normal' && !(state.activeReactive==='sim' && state.usualBehavior==='sim')) general.push('O estado clínico foi descrito como habitual.');
  else if(state.clinicalState==='prostracao' && !clauseCovered(narrativeSource,'Apresenta prostração')) general.push('Apresenta prostração.');
  if(state.irritabilityState==='normal') general.push('Nega irritabilidade.');
  else if(state.irritabilityState==='irritavel' && !clauseCovered(narrativeSource,'Apresenta irritabilidade')) general.push('Apresenta irritabilidade.');
  if(general.length) {
    const generalText=uniqueClauses(general).map(sentence).join(' ');
    history.push(generalText.replace(/^Estado geral preservado: encontra-se/,'Encontra-se'));
  }

  const coong=[];
  const subsystem=(specs,detail)=>{
    const clauses=triClauses(specs,state).filter(clause=>!clauseCovered(narrativeSource,clause));
    if(clean(detail)) clauses.push(directReport(detail));
    return fluidFlow('',clauses);
  };
  const nasal=triClauses(symptomGroups.nasal,state).filter(clause=>!clauseCovered(narrativeSource,clause));
  if(clean(state.nasalDetails)) nasal.push(directReport(state.nasalDetails));
  if(nasal.length) coong.push(fluidFlow('',nasal));
  coong.push(subsystem(symptomGroups.cervical,state.neckOtherChanges));
  coong.push(subsystem(symptomGroups.oral,state.oralHistory));
  coong.push(subsystem(symptomGroups.otologic,state.otologicDetails));
  coong.push(subsystem(symptomGroups.ocular,state.ocularDetails));
  if(coong.filter(Boolean).length) history.push(coong.filter(Boolean).map(sentence).join(' '));

  const respiratorySpecs=Object.hasOwn(state,'coughType')?symptomGroups.respiratory.filter(([id])=>!['productiveCough','dryCough'].includes(id)):symptomGroups.respiratory;
  const respiratory=triClauses(Object.hasOwn(state,'dyspneicSymptoms')?respiratorySpecs.filter(([id])=>id!=='otherLowerResp'):respiratorySpecs,state).filter(clause=>!clauseCovered(narrativeSource,clause));
  const coughClauses={nega:'Nega tosse.',seca:'Apresenta tosse seca.',oligossecretiva:'Apresenta tosse oligossecretiva.',secretiva:'Apresenta tosse secretiva.'};
  if(coughClauses[state.coughType] && !clauseCovered(narrativeSource,coughClauses[state.coughType])) respiratory.push(coughClauses[state.coughType]);
  const dyspneicClauses={sim:'Relata sintomas dispneicos.',nao:'Nega sintomas dispneicos.',relato_incerto:'Sem relato claro sobre sintomas dispneicos.',esforco_toracico:'Foi informado esforço respiratório torácico.'};
  if(dyspneicClauses[state.dyspneicSymptoms]) respiratory.push(dyspneicClauses[state.dyspneicSymptoms]);
  if(!Object.hasOwn(state,'dyspneicSymptoms') && clean(state.respiratorySecretions)) respiratory.push(detailClause('as secreções e os sinais de gravidade foram descritos como',state.respiratorySecretions));
  if(respiratory.length) history.push(fluidFlow('',respiratory));

  const cardiovascular=triClauses(symptomGroups.cardiovascular,state).filter(clause=>!clauseCovered(narrativeSource,clause));
  if(clean(state.cyanosisLocation)) cardiovascular.push(detailClause('a cianose foi localizada em',state.cyanosisLocation));
  if(cardiovascular.length) history.push(fluidFlow('',cardiovascular));

  const gastrointestinal=[];
  const vomiting=clean(state.vomitingHistory);const bowel=clean(state.bowelHistory);
  const vomitingDenied=/^(?:sem|nega)\s+vômitos?[.!]?$/iu.test(vomiting);
  const bowelDiarrheaDenied=/^(?:sem|nega)\s+diarreia[.!]?$/iu.test(bowel);
  if(vomitingDenied && bowelDiarrheaDenied) gastrointestinal.push('Nega vômitos ou diarreia.');
  else {
    if(vomiting) gastrointestinal.push(vomitingDenied?'Nega vômitos.':`Quanto aos vômitos, ${sentence(/^(?:cerca de|\d+|um|uma|dois|duas|três|quatro|cinco)\b/iu.test(vomiting)?`acompanhante informa ${lowerFirst(vomiting).replace(/\.\s+geralmente\b/iu,', geralmente')}`:lowerFirst(vomiting))}`);
    if(bowel) gastrointestinal.push(/^(?:diarreia|fezes|evacuações)\b/iu.test(bowel)?directReport(bowel):`Quanto às evacuações, ${sentence(lowerFirst(bowel))}`);
  }
  if(gastrointestinal.length) history.push(uniqueClauses(gastrointestinal).map(sentence).join(' '));

  const genitourinary=[];
  if(clean(state.urinaryHistory)) genitourinary.push(/^diurese\b/iu.test(clean(state.urinaryHistory))?sentence(upperFirst(state.urinaryHistory)):`Quanto à diurese, ${sentence(lowerFirst(state.urinaryHistory))}`);
  if(clean(state.diuresis)) genitourinary.push(`A diurese foi descrita como ${sentence(lowerFirst(state.diuresis))}`);
  if(clean(state.urinaryComplaints)) genitourinary.push(`Foram relatadas ${sentence(lowerFirst(state.urinaryComplaints))}`);
  if(clean(state.perinealHistory)) genitourinary.push(`Quanto à região do períneo ou vulva, ${sentence(lowerFirst(state.perinealHistory))}`);
  if(genitourinary.length) history.push(uniqueClauses(genitourinary).map(sentence).join(' '));

  const skin=[];
  if(clean(state.skinHistory)) skin.push(sentence(state.skinHistory));
  if(clean(state.lesionLocationAspect)) skin.push(sentence(`As lesões foram descritas como ${lowerFirst(state.lesionLocationAspect)}`));
  if(clean(state.lesionDischargeAspect)) skin.push(sentence(`A secreção foi descrita como ${lowerFirst(state.lesionDischargeAspect)}`));
  if(clean(state.lesionInitialLocation)) skin.push(sentence(`As lesões iniciaram-se em ${lowerFirst(state.lesionInitialLocation)}`));
  if(skin.length) history.push(uniqueClauses(skin).map(sentence).join(' '));

  const neurological=triClauses(symptomGroups.neurological,state);
  neurological.push(detailClause('o impacto ocorreu em',state.headTraumaLocation),detailClause('o traumatismo craniano ocorreu',state.timeSinceHeadTrauma),detailClause('o mecanismo do trauma foi',state.neuroTceMechanism),clean(state.neuroConsciousnessHistory),clean(state.neurologicalAssociated),detailClause('a cefaleia foi descrita como',state.neuroHeadacheHistory),detailClause('quanto a movimentos anormais ou convulsivos,',state.neuroSeizureHistory),detailClause('na face e no escalpo, foram relatados',state.neuroScalpHistory),clean(state.neuroOtherHistory));
  if(neurological.filter(Boolean).length) history.push(fluidFlow('',neurological.filter(Boolean)));

  const locomotor=triClauses(symptomGroups.locomotor,state);
  locomotor.push(detailClause('o evento foi descrito como',state.locomotorEvent),selected(state.locomotorSymptoms).length?`foram relatados ${listText(selected(state.locomotorSymptoms))}`:'',detailClause('a dor e sua repercussão funcional foram descritas como',state.locomotorPainHistory),detailClause('nos antecedentes osteoarticulares, constam',state.locomotorPreviousHistory));
  if(locomotor.filter(Boolean).length) history.push(fluidFlow('',locomotor.filter(Boolean)));

  if(clean(state.otherSymptoms)) history.push(directReport(state.otherSymptoms));
  else if(Object.hasOwn(state,'otherSymptoms') || state.otherSymptomsStatus==='nao') history.push('Sem outros relatos ou queixas clínicas.');
  else if(state.otherSymptomsStatus==='sim') history.push('Foram referidos outros sintomas.');
  if (clean(state.intake)) history.push(`Sobre hidratação e eliminações, ${sentence(lowerFirst(state.intake))}`);
  const examination = createPhysicalExam(state);

  const hypotheses = String(state.diagnosticHypotheses ?? '');
  const conduct = String(state.conduct ?? '');

  return [
    {title:'1. Identificação do paciente',text:linearProse(identification)},
    {title:'2. Anamnese pediátrica',text:linearProse(deduplicateHistory(history.filter(Boolean).join(' ')))},
    {title:'3. Exame físico',text:examination},
    {title:'4. Hipóteses Diagnósticas',text:hypotheses},
    {title:'5. Condutas adotadas',text:conduct}
  ];
}

export function blockToCopyText(block) {
  return block.text.replace(/^História da Moléstia Atual:\n/u,'');
}
export function summaryToText(blocks) {
  return blocks.filter(block=>clean(block.text)).map(blockToCopyText).join('\n\n');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function fieldHtml(field, state) {
  const full = field.full ? ' full' : '';
  const value = state[field.id] ?? field.defaultValue ?? (field.type === 'checklist' ? [] : '');
  if (field.type === 'radio') {
    return `<fieldset class="field choice-field"><legend>${escapeHtml(field.label)}</legend><div class="radio-options">${field.options.map((option,index)=>`<label><input type="radio" id="${field.id}-${index}" name="${field.id}" value="${escapeHtml(option.value)}" ${clean(value)===option.value?'checked':''}> ${escapeHtml(option.label)}</label>`).join('')}</div></fieldset>`;
  }
  if (field.type === 'checklist') {
    return `<fieldset class="field${full}"><legend>${escapeHtml(field.label)}</legend><div class="check-grid">${field.options.map(option=>`<label class="check"><input type="checkbox" name="${escapeHtml(field.id)}" value="${escapeHtml(option)}" ${selected(value).includes(option)?'checked':''}> <span>${escapeHtml(option)}</span></label>`).join('')}</div></fieldset>`;
  }
  if (field.type === 'select') {
    const binary = field.options.some(option=>option.value==='sim') && field.options.some(option=>option.value==='nao');
    return `<div class="field${full}${binary?' binary-field':''}"><label for="${escapeHtml(field.id)}">${escapeHtml(field.label)}</label><select id="${escapeHtml(field.id)}" name="${escapeHtml(field.id)}">${field.options.map(option=>`<option value="${escapeHtml(option.value)}" ${clean(value)===option.value?'selected':''}>${escapeHtml(option.label)}</option>`).join('')}</select></div>`;
  }
  if (field.type === 'textarea') {
    const questionsHelp=field.placeholder?.includes('?');

    return `<div class="field${full}"><label for="${escapeHtml(field.id)}">${escapeHtml(field.label)}</label>${questionsHelp?`<small class="field-help" id="${field.id}-help">${escapeHtml(field.placeholder)}</small>`:''}<textarea id="${escapeHtml(field.id)}" name="${escapeHtml(field.id)}" ${questionsHelp?`aria-describedby="${field.id}-help"`:''} placeholder="${escapeHtml(questionsHelp?'Registre as respostas e os achados pertinentes.':field.placeholder)}">${escapeHtml(value)}</textarea></div>`;
  }
  if (field.type === 'examTemplate') {
    const model=getExamTemplate(state);
    const preview=Object.entries(model).map(([id,value])=>`- ${examLabels[id]}: ${value}`).join('\n');
    const reflexReference=`<details class="reflex-reference"><summary>Reflexos primitivos — referência para lactentes</summary><p>Faixas aproximadas para interpretar o exame; registrar somente os reflexos efetivamente avaliados e considerar a idade corrigida nos prematuros.</p><table><thead><tr><th scope="col">Reflexo</th><th scope="col">Integração / evolução habitual</th></tr></thead><tbody><tr><td>Moro</td><td>Diminui a partir de cerca de 2 meses; habitualmente integrado até 6 meses.</td></tr><tr><td>Preensão palmar</td><td>Cerca de 5–6 meses.</td></tr><tr><td>Preensão plantar</td><td>Cerca de 9–12 meses.</td></tr><tr><td>Tônico-cervical assimétrico</td><td>Cerca de 5–7 meses.</td></tr><tr><td>Busca</td><td>Cerca de 4 meses.</td></tr><tr><td>Sucção reflexa</td><td>O componente primitivo se integra no primeiro semestre; a sucção funcional permanece.</td></tr><tr><td>Marcha automática</td><td>Cerca de 2 meses.</td></tr><tr><td>Resposta plantar extensora (Babinski)</td><td>Pode ser fisiológica até 24 meses, com transição frequentemente entre 12 e 24 meses.</td></tr></tbody></table><p class="reflex-sources">Referências: <a href="https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx" target="_blank" rel="noopener noreferrer">AAP</a> · <a href="https://www.saude.pr.gov.br/sites/default/arquivos_restritos/files/documento/2020-04/neurodesenvolvimentoaulasesa.pdf" target="_blank" rel="noopener noreferrer">SESA-PR / Sociedade Paranaense de Pediatria</a> · <a href="https://medlineplus.gov/ency/article/003294.htm" target="_blank" rel="noopener noreferrer">MedlinePlus</a></p></details>`;
    return `<div class="field full"><details class="normal-model" open><summary>Modelo completo do exame físico</summary><pre>${escapeHtml(preview)}</pre><label class="check"><input type="checkbox" name="${field.id}" value="sim" ${value==='sim'?'checked':''}><span>Examinei e conferi os achados do modelo aplicáveis à idade. Aplicar o modelo confirmado ao resumo; valores preenchidos e alterações registradas têm prioridade. Sinais vitais ausentes não são preenchidos automaticamente.</span></label>${reflexReference}</details></div>`;
  }
  const attributes = [['type',field.inputType||'text'],['min',field.min],['max',field.max],['step',field.step]].filter(([,v])=>v!==undefined).map(([k,v])=>`${k}="${escapeHtml(v)}"`).join(' ');
  return `<div class="field${full}"><label for="${escapeHtml(field.id)}">${escapeHtml(field.label)}${field.suffix?` (${escapeHtml(field.suffix)})`:''}</label><input id="${escapeHtml(field.id)}" name="${escapeHtml(field.id)}" ${attributes} value="${escapeHtml(value)}" placeholder="${escapeHtml(field.placeholder)}" autocomplete="off"></div>`;
}

const examInstruction = 'Digite as alterações encontradas por sistema (sistema respiratório, sistema digestório, etc) e inclua também o que não está alterado dentro do mesmo sistema.';
const groupHintHtml = hint => escapeHtml(hint).replace(examInstruction, `<strong class="exam-instruction">${examInstruction}</strong>`);

export function questionHtml(question,state={},index=0) {
  const body=question.groups
    ? `<div class="question-groups page-${escapeHtml(question.id)}">${question.groups.map(group=>`<section class="field-group"><div class="field-group-head"><h4>${escapeHtml(group.title)}</h4>${group.hint && !['hma','coong','identification'].includes(question.id)?`<p>${groupHintHtml(group.hint)}</p>`:''}</div><div class="field-grid">${group.fields.map(field=>fieldHtml(['hma','coong'].includes(question.id)?{...field,placeholder:''}:field,state)).join('')}</div></section>`).join('')}</div>`
    : `<div class="field-grid">${question.fields.map(field=>fieldHtml(field,state)).join('')}</div>`;
  return `<div class="question-number">${escapeHtml(question.section)} · etapa ${index+1}</div><h3>${escapeHtml(question.title)}</h3>${question.hint && question.id!=='hma'?`<p class="question-hint">${escapeHtml(question.hint)}</p>`:''}${body}`;
}

function startWizard() {
  if (typeof document === 'undefined') return;
  const $ = id => document.getElementById(id);
  const state = {conduct:defaultConduct};
  let currentId = getActiveQuestions(state)[0].id;
  let completed = false;
  let latestText = '';
  let latestBlocks = [];

  function fieldsFor(question) {
    return question.fields ?? question.groups?.flatMap(group => group.fields) ?? [];
  }

  function activeAndIndex() {
    const active = getActiveQuestions(state);
    let index = active.findIndex(question=>question.id===currentId);
    if (index < 0) { index = Math.max(0, active.length-1); currentId = active[index].id; }
    return {active,index};
  }

  function saveCurrent() {
    const {active,index} = activeAndIndex();
    const question = active[index];
    const formData = new FormData($('anamnesisForm'));
    fieldsFor(question).forEach(field=>{
      state[field.id] = field.type === 'checklist' ? formData.getAll(field.id).map(String) : ['conduct','diagnosticHypotheses'].includes(field.id) ? String(formData.get(field.id) ?? '') : clean(formData.get(field.id));
    });
  }

  function renderQuestion() {
    const {active,index} = activeAndIndex();
    const question = active[index];
    $('sectionLabel').textContent = question.section;
    $('stepTitle').textContent = question.title;
    $('stepCount').textContent = `Etapa ${index+1} de ${active.length}`;
    $('progressBar').style.width = `${((index+1)/active.length)*100}%`;
    const progress = document.querySelector('.progress');
    progress.setAttribute('aria-valuemax',String(active.length));
    progress.setAttribute('aria-valuenow',String(index+1));
    $('questionCard').innerHTML = questionHtml(question,state,index);
    $('prev').disabled = index === 0;
    $('prevTop').disabled = $('prev').disabled;
    $('next').disabled = false;
    $('next').textContent = index === active.length-1 ? 'Finalizar atendimento' : 'Próxima etapa →';
    $('nextTop').disabled = $('next').disabled;
    $('nextTop').textContent = $('next').textContent;
    for(const id of ['next','nextTop']) {
      if(index === active.length-1) $(id).classList.add('finish-attendance');
      else $(id).classList.remove('finish-attendance');
    }
    requestAnimationFrame(()=>$('questionCard').querySelector('input,select,textarea')?.focus());
  }

  function renderSummary() {
    const blocks = createSummary(state);
    latestBlocks = blocks;
    latestText = summaryToText(blocks);
    $('summaryContent').innerHTML = blocks.map((block,index)=>clean(block.text)?`<section class="summary-block"><div class="summary-block-head"><h3>${escapeHtml(block.title)}</h3><button class="ghost copy-block" type="button" data-copy-block="${index}" aria-label="Copiar ${escapeHtml(block.title)}">Copiar tópico</button></div><p>${escapeHtml(block.text)}</p></section>`:'').join('') + '<p class="summary-note">Revise o resumo e a conduta antes do uso. Somente achados informados ou explicitamente confirmados entram no exame físico. Campos vazios não confirmam normalidade nem medidas. Revise todos os achados antes de copiar.</p>';
    $('summaryEmpty').style.display = 'none';
    $('summaryContent').classList.add('visible');
    $('copy').disabled = false;
    $('print').disabled = false;
    $('copyState').textContent = '';
  }

  function clearSummary() {
    latestText = '';
    latestBlocks = [];
    $('summaryContent').innerHTML = '';
    $('summaryContent').classList.remove('visible');
    $('summaryEmpty').style.display = 'block';
    $('copy').disabled = true;
    $('print').disabled = true;
    $('copyState').textContent = '';
  }

  function generateSummary() {
    saveCurrent();
    renderSummary();
    completed = true;
    $('next').textContent = 'Finalizar atendimento';
    $('next').disabled = false;
    $('nextTop').disabled = false;
    $('nextTop').textContent = 'Finalizar atendimento';
    $('summaryTitle').scrollIntoView({behavior:'smooth',block:'start'});
  }

  const advanceStep = event=>{
    event.preventDefault();
    saveCurrent();
    const {active,index} = activeAndIndex();
    if (index < active.length-1) {
      currentId = active[index+1].id;
      completed = false;
      renderQuestion();
      return;
    }
    generateSummary();
  };
  $('next').addEventListener('click',advanceStep);
  $('nextTop').addEventListener('click',advanceStep);

  const retreatStep = ()=>{
    saveCurrent();
    const {active,index} = activeAndIndex();
    if (index > 0) currentId = active[index-1].id;
    completed = false;
    clearSummary();
    renderQuestion();
  };
  $('prev').addEventListener('click',retreatStep);
  $('prevTop').addEventListener('click',retreatStep);

  $('anamnesisForm').addEventListener('input',()=>{
    saveCurrent();
    if (completed) renderSummary();
  });
  $('anamnesisForm').addEventListener('change',()=>{
    saveCurrent();
    if (completed) renderSummary();
  });

  $('anamnesisForm').addEventListener('submit',event=>event.preventDefault());
  $('copy').addEventListener('click',async()=>{
    try { await navigator.clipboard.writeText(latestText); $('copyState').textContent='Resumo copiado.'; }
    catch { $('copyState').textContent='Não foi possível copiar automaticamente; selecione o texto do resumo.'; }
  });
  $('summaryContent').addEventListener('click',async event=>{
    const button=event.target.closest('[data-copy-block]');
    if(!button) return;
    const block=latestBlocks[Number(button.dataset.copyBlock)];
    if(!block) return;
    try {
      await navigator.clipboard.writeText(blockToCopyText(block));
      $('copyState').textContent=`${block.title} copiado.`;
    } catch {
      $('copyState').textContent='Não foi possível copiar automaticamente; selecione o texto deste tópico.';
    }
  });
  $('print').addEventListener('click',()=>window.print());
  $('newPatient').addEventListener('click',()=>{
    for (const key of Object.keys(state)) delete state[key];
    state.conduct = defaultConduct;
    currentId = getActiveQuestions(state)[0].id;
    completed = false;
    clearSummary();
    renderQuestion();
  });

  renderQuestion();
}

startWizard();
