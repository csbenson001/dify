const translation = {
  common: {
    undo: 'Desfazer',
    redo: 'Refazer',
    editing: 'Editando',
    autoSaved: 'Salvo automaticamente',
    unpublished: 'Não publicado',
    published: 'Publicado',
    publish: 'Publicar',
    update: 'Atualizar',
    run: 'Executar',
    running: 'Executando',
    inRunMode: 'No modo de execução',
    inPreview: 'Em visualização',
    inPreviewMode: 'No modo de visualização',
    preview: 'Visualizar',
    viewRunHistory: 'Ver histórico de execução',
    runHistory: 'Histórico de execução',
    goBackToEdit: 'Voltar para o editor',
    conversationLog: 'Registro de conversa',
    features: 'Recursos',
    debugAndPreview: 'Visualizar',
    restart: 'Reiniciar',
    currentDraft: 'Rascunho atual',
    currentDraftUnpublished: 'Rascunho atual não publicado',
    latestPublished: 'Último publicado',
    publishedAt: 'Publicado em',
    restore: 'Restaurar',
    runApp: 'Executar aplicativo',
    batchRunApp: 'Executar aplicativo em lote',
    accessAPIReference: 'Acessar referência da API',
    embedIntoSite: 'Incorporar ao site',
    addTitle: 'Adicionar título...',
    addDescription: 'Adicionar descrição...',
    noVar: 'Sem variável',
    searchVar: 'Buscar variável',
    variableNamePlaceholder: 'Nome da variável',
    setVarValuePlaceholder: 'Definir valor da variável',
    needConnectTip: 'Este passo não está conectado a nada',
    maxTreeDepth: 'Limite máximo de {{depth}} nós por ramo',
    needEndNode: 'O bloco de fim deve ser adicionado',
    needAnswerNode: 'O bloco de resposta deve ser adicionado',
    workflowProcess: 'Processo de fluxo de trabalho',
    notRunning: 'Ainda não está em execução',
    previewPlaceholder: 'Digite o conteúdo na caixa abaixo para começar a depurar o Chatbot',
    effectVarConfirm: {
      title: 'Remover variável',
      content: 'A variável é usada em outros nós. Você ainda deseja removê-la?',
    },
    insertVarTip: 'Pressione a tecla \'/\' para inserir rapidamente',
    processData: 'Processar dados',
    input: 'Entrada',
    output: 'Saída',
    jinjaEditorPlaceholder: 'Digite \'/\' ou \'{\' para inserir variável',
    viewOnly: 'Apenas visualização',
    showRunHistory: 'Mostrar histórico de execução',
    enableJinja: 'Ativar suporte ao template Jinja',
    learnMore: 'Saiba mais',
    copy: 'Copiar',
    duplicate: 'Duplicar',
    addBlock: 'Adicionar bloco',
    pasteHere: 'Colar aqui',
    pointerMode: 'Modo ponteiro',
    handMode: 'Modo mão',
    model: 'Modelo',
    workflowAsTool: 'Fluxo de trabalho como ferramenta',
    configureRequired: 'Configuração necessária',
    configure: 'Configurar',
    manageInTools: 'Gerenciar nas ferramentas',
    workflowAsToolTip: 'É necessária a reconfiguração da ferramenta após a atualização do fluxo de trabalho.',
    viewDetailInTracingPanel: 'Ver detalhes',
    importSuccess: 'Sucesso da importação',
    chooseDSL: 'Escolha o arquivo DSL(yml)',
    importFailure: 'Falha na importação',
    syncingData: 'Sincronizando dados, apenas alguns segundos.',
    overwriteAndImport: 'Substituir e importar',
    importDSLTip: 'O rascunho atual será substituído. Exporte o fluxo de trabalho como backup antes de importar.',
    backupCurrentDraft: 'Fazer backup do rascunho atual',
    importDSL: 'Importar DSL',
    parallelTip: {
      click: {
        title: 'Clique',
        desc: 'para adicionar',
      },
      drag: {
        title: 'Arrastar',
        desc: 'para conectar',
      },
      limit: 'O paralelismo é limitado a {{num}} ramificações.',
      depthLimit: 'Limite de camada de aninhamento paralelo de {{num}} camadas',
    },
    parallelRun: 'Execução paralela',
    disconnect: 'Desligar',
    jumpToNode: 'Ir para este nó',
    addParallelNode: 'Adicionar nó paralelo',
    parallel: 'PARALELO',
    branch: 'RAMIFICAÇÃO',
    featuresDocLink: 'Saiba Mais',
    featuresDescription: 'Melhore a experiência do usuário do aplicativo Web',
    ImageUploadLegacyTip: 'Agora você pode criar variáveis de tipo de arquivo no formulário inicial. Não daremos mais suporte ao recurso de upload de imagens no futuro.',
    fileUploadTip: 'Os recursos de upload de imagens foram atualizados para upload de arquivos.',
    importWarning: 'Cuidado',
    importWarningDetails: 'A diferença de versão DSL pode afetar determinados recursos',
    openInExplore: 'Abrir no Explore',
    onFailure: 'Em caso de falha',
    addFailureBranch: 'Adicionar ramificação com falha',
  },
  env: {
    envPanelTitle: 'Variáveis de Ambiente',
    envDescription: 'Variáveis de ambiente podem ser usadas para armazenar informações privadas e credenciais. Elas são somente leitura e podem ser separadas do arquivo DSL durante a exportação.',
    envPanelButton: 'Adicionar Variável',
    modal: {
      title: 'Adicionar Variável de Ambiente',
      editTitle: 'Editar Variável de Ambiente',
      type: 'Tipo',
      name: 'Nome',
      namePlaceholder: 'nome da env',
      value: 'Valor',
      valuePlaceholder: 'valor da env',
      secretTip: 'Usado para definir informações ou dados sensíveis, com configurações DSL configuradas para prevenção de vazamentos.',
    },
    export: {
      title: 'Exportar variáveis de ambiente secretas?',
      checkbox: 'Exportar valores secretos',
      ignore: 'Exportar DSL',
      export: 'Exportar DSL com valores secretos',
    },
  },
  chatVariable: {
    panelTitle: 'Variáveis de Conversação',
    panelDescription: 'As Variáveis de Conversação são usadas para armazenar informações interativas que o LLM precisa lembrar, incluindo histórico de conversas, arquivos carregados, preferências do usuário. Elas são de leitura e escrita.',
    docLink: 'Visite nossa documentação para saber mais.',
    button: 'Adicionar Variável',
    modal: {
      title: 'Adicionar Variável de Conversação',
      editTitle: 'Editar Variável de Conversação',
      name: 'Nome',
      namePlaceholder: 'Nome da variável',
      type: 'Tipo',
      value: 'Valor Padrão',
      valuePlaceholder: 'Valor padrão, deixe em branco para não definir',
      description: 'Descrição',
      descriptionPlaceholder: 'Descreva a variável',
      editInJSON: 'Editar em JSON',
      oneByOne: 'Adicionar um por um',
      editInForm: 'Editar no Formulário',
      arrayValue: 'Valor',
      addArrayValue: 'Adicionar Valor',
      objectKey: 'Chave',
      objectType: 'Tipo',
      objectValue: 'Valor Padrão',
    },
    storedContent: 'Conteúdo armazenado',
    updatedAt: 'Atualizado em ',
  },
  changeHistory: {
    title: 'Histórico de alterações',
    placeholder: 'Você ainda não alterou nada',
    clearHistory: 'Limpar histórico',
    hint: 'Dica',
    hintText: 'As ações de edição são rastreadas em um histórico de alterações, que é armazenado em seu dispositivo para a duração desta sessão. Este histórico será apagado quando você sair do editor.',
    stepBackward_one: '{{count}} passo para trás',
    stepBackward_other: '{{count}} passos para trás',
    stepForward_one: '{{count}} passo para frente',
    stepForward_other: '{{count}} passos para frente',
    sessionStart: 'Início da sessão',
    currentState: 'Estado atual',
    nodeTitleChange: 'Título do bloco alterado',
    nodeDescriptionChange: 'Descrição do bloco alterada',
    nodeDragStop: 'Bloco movido',
    nodeChange: 'Bloco alterado',
    nodeConnect: 'Bloco conectado',
    nodePaste: 'Bloco colado',
    nodeDelete: 'Bloco excluído',
    nodeAdd: 'Bloco adicionado',
    nodeResize: 'Nota redimensionada',
    noteAdd: 'Nota adicionada',
    noteChange: 'Nota alterada',
    noteDelete: 'Conexão excluída',
    edgeDelete: 'Bloco desconectado',
  },
  errorMsg: {
    fieldRequired: '{{field}} é obrigatório',
    authRequired: 'Autorização é necessária',
    invalidJson: '{{field}} é um JSON inválido',
    fields: {
      variable: 'Nome da variável',
      variableValue: 'Valor da variável',
      code: 'Código',
      model: 'Modelo',
      rerankModel: 'Modelo de reordenação',
      visionVariable: 'Variável de visão',
    },
    invalidVariable: 'Variável inválida',
    rerankModelRequired: 'Antes de ativar o modelo de reclassificação, confirme se o modelo foi configurado com sucesso nas configurações.',
  },
  singleRun: {
    testRun: 'Execução de teste ',
    startRun: 'Iniciar execução',
    running: 'Executando',
    testRunIteration: 'Iteração de execução de teste',
    back: 'Voltar',
    iteration: 'Iteração',
  },
  tabs: {
    'searchBlock': 'Buscar bloco',
    'blocks': 'Blocos',
    'tools': 'Ferramentas',
    'allTool': 'Todos',
    'builtInTool': 'Integrado',
    'customTool': 'Personalizado',
    'workflowTool': 'Fluxo de trabalho',
    'question-understand': 'Compreensão de perguntas',
    'logic': 'Lógica',
    'transform': 'Transformar',
    'utilities': 'Utilitários',
    'noResult': 'Nenhum resultado encontrado',
    'searchTool': 'Ferramenta de pesquisa',
  },
  blocks: {
    'start': 'Iniciar',
    'end': 'Fim',
    'answer': 'Resposta',
    'llm': 'LLM',
    'knowledge-retrieval': 'Recuperação de conhecimento',
    'question-classifier': 'Classificador de perguntas',
    'if-else': 'SE/SENÃO',
    'code': 'Código',
    'template-transform': 'Modelo',
    'http-request': 'Requisição HTTP',
    'variable-assigner': 'Atribuidor de variáveis',
    'variable-aggregator': 'Agregador de variáveis',
    'assigner': 'Atribuidor de Variáveis',
    'iteration-start': 'Início de iteração',
    'iteration': 'Iteração',
    'parameter-extractor': 'Extrator de parâmetros',
    'list-operator': 'Operador de lista',
    'document-extractor': 'Extrator de documentos',
  },
  blocksAbout: {
    'start': 'Definir os parâmetros iniciais para iniciar um fluxo de trabalho',
    'end': 'Definir o fim e o tipo de resultado de um fluxo de trabalho',
    'answer': 'Definir o conteúdo da resposta de uma conversa',
    'llm': 'Invocar grandes modelos de linguagem para responder perguntas ou processar linguagem natural',
    'knowledge-retrieval': 'Permite consultar conteúdo de texto relacionado a perguntas do usuário a partir da base de conhecimento',
    'question-classifier': 'Definir as condições de classificação das perguntas dos usuários, LLM pode definir como a conversa progride com base na descrição da classificação',
    'if-else': 'Permite dividir o fluxo de trabalho em dois ramos com base nas condições if/else',
    'code': 'Executar um pedaço de código Python ou NodeJS para implementar lógica personalizada',
    'template-transform': 'Converter dados em string usando a sintaxe de template Jinja',
    'http-request': 'Permitir que solicitações de servidor sejam enviadas pelo protocolo HTTP',
    'variable-assigner': 'Agregue variáveis de vários ramos em uma única variável para configuração unificada dos nós finais.',
    'assigner': 'O nó de atribuição de variáveis é usado para atribuir valores a variáveis graváveis (como variáveis de conversação).',
    'variable-aggregator': 'Agregue variáveis de vários ramos em uma única variável para configuração unificada dos nós finais.',
    'iteration': 'Execute múltiplos passos em um objeto lista até que todos os resultados sejam produzidos.',
    'parameter-extractor': 'Use LLM para extrair parâmetros estruturados da linguagem natural para invocações de ferramentas ou requisições HTTP.',
    'document-extractor': 'Usado para analisar documentos carregados em conteúdo de texto que é facilmente compreensível pelo LLM.',
    'list-operator': 'Usado para filtrar ou classificar o conteúdo da matriz.',
  },
  operator: {
    zoomIn: 'Aproximar',
    zoomOut: 'Afastar',
    zoomTo50: 'Aproximar para 50%',
    zoomTo100: 'Aproximar para 100%',
    zoomToFit: 'Aproximar para ajustar',
  },
  panel: {
    userInputField: 'Campo de entrada do usuário',
    changeBlock: 'Mudar bloco',
    helpLink: 'Link de ajuda',
    about: 'Sobre',
    createdBy: 'Criado por ',
    nextStep: 'Próximo passo',
    addNextStep: 'Adicionar o próximo bloco neste fluxo de trabalho',
    selectNextStep: 'Selecionar próximo bloco',
    runThisStep: 'Executar este passo',
    checklist: 'Lista de verificação',
    checklistTip: 'Certifique-se de que todos os problemas foram resolvidos antes de publicar',
    checklistResolved: 'Todos os problemas foram resolvidos',
    organizeBlocks: 'Organizar blocos',
    change: 'Mudar',
    optional: '(opcional)',
  },
  nodes: {
    common: {
      outputVars: 'Variáveis de saída',
      insertVarTip: 'Inserir variável',
      memory: {
        memory: 'Memória',
        memoryTip: 'Configurações de memória de conversa',
        windowSize: 'Tamanho da janela',
        conversationRoleName: 'Nome do papel na conversa',
        user: 'Prefixo do usuário',
        assistant: 'Prefixo do assistente',
      },
      memories: {
        title: 'Memórias',
        tip: 'Memória de conversa',
        builtIn: 'Integrado',
      },
      errorHandle: {
        none: {
          title: 'Nenhum',
          desc: 'O nó deixará de ser executado se ocorrer uma exceção e não for tratada',
        },
        defaultValue: {
          title: 'Valor padrão',
          desc: 'Quando ocorrer um erro, especifique um conteúdo de saída estático.',
          tip: 'Em caso de erro, retornará o valor abaixo.',
          inLog: 'Exceção de nó, saída de acordo com os valores padrão.',
          output: 'Valor padrão de saída',
        },
        failBranch: {
          title: 'Ramificação com falha',
          desc: 'Quando ocorrer um erro, ele executará a ramificação de exceção',
          customize: 'Vá para a tela para personalizar a lógica do branch de falha.',
          customizeTip: 'Quando a ramificação de falha é ativada, as exceções geradas pelos nós não encerram o processo. Em vez disso, ele executará automaticamente a ramificação de falha predefinida, permitindo que você forneça mensagens de erro, relatórios, correções ou ações de salto com flexibilidade.',
          inLog: 'Node exception, executará automaticamente a ramificação de falha. A saída do nó retornará um tipo de erro e uma mensagem de erro e os passará para o downstream.',
        },
        partialSucceeded: {
          tip: 'Existem {{num}} nós no processo em execução anormal, vá para rastreamento para verificar os logs.',
        },
        title: 'Tratamento de erros',
        tip: 'Estratégia de tratamento de exceções, disparada quando um nó encontra uma exceção.',
      },
      retry: {
        retry: 'Repetir',
        retryOnFailure: 'Tentar novamente em caso de falha',
        maxRetries: 'Máximo de tentativas',
        retryInterval: 'Intervalo de repetição',
        retryTimes: 'Tente novamente {{times}} vezes em caso de falha',
        retrying: 'Repetindo...',
        retrySuccessful: 'Repetição bem-sucedida',
        retryFailed: 'Falha na nova tentativa',
        retryFailedTimes: '{{times}} tentativas falharam',
        times: 'vezes',
        ms: 'ms',
        retries: '{{num}} Tentativas',
      },
    },
    start: {
      required: 'requerido',
      inputField: 'Campo de entrada',
      builtInVar: 'Variáveis integradas',
      outputVars: {
        query: 'Entrada do usuário',
        memories: {
          des: 'Histórico da conversa',
          type: 'tipo de mensagem',
          content: 'conteúdo da mensagem',
        },
        files: 'Lista de arquivos',
      },
      noVarTip: 'Defina as entradas que podem ser usadas no Fluxo de Trabalho',
    },
    end: {
      outputs: 'Saídas',
      output: {
        type: 'tipo de saída',
        variable: 'variável de saída',
      },
      type: {
        'none': 'Nenhum',
        'plain-text': 'Texto simples',
        'structured': 'Estruturado',
      },
    },
    answer: {
      answer: 'Resposta',
      outputVars: 'Variáveis de saída',
    },
    llm: {
      model: 'modelo',
      variables: 'variáveis',
      context: 'contexto',
      contextTooltip: 'Você pode importar Conhecimento como contexto',
      notSetContextInPromptTip: 'Para ativar o recurso de contexto, preencha a variável de contexto no PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Dar instruções de alto nível para a conversa',
        user: 'Fornecer instruções, consultas ou qualquer entrada baseada em texto para o modelo',
        assistant: 'As respostas do modelo baseadas nas mensagens do usuário',
      },
      addMessage: 'Adicionar mensagem',
      vision: 'visão',
      files: 'Arquivos',
      resolution: {
        name: 'Resolução',
        high: 'Alta',
        low: 'Baixa',
      },
      outputVars: {
        output: 'Conteúdo gerado',
        usage: 'Informações de uso do modelo',
      },
      singleRun: {
        variable: 'Variável',
      },
      sysQueryInUser: 'sys.query na mensagem do usuário é necessário',
    },
    knowledgeRetrieval: {
      queryVariable: 'Variável de consulta',
      knowledge: 'Conhecimento',
      outputVars: {
        output: 'Dados segmentados recuperados',
        content: 'Conteúdo segmentado',
        title: 'Título segmentado',
        icon: 'Ícone segmentado',
        url: 'URL segmentado',
        metadata: 'Outros metadados',
      },
    },
    http: {
      inputVars: 'Variáveis de entrada',
      api: 'API',
      apiPlaceholder: 'Digite a URL, digite ‘/’ para inserir variável',
      notStartWithHttp: 'API deve começar com http:// ou https://',
      key: 'Chave',
      value: 'Valor',
      bulkEdit: 'Edição em massa',
      keyValueEdit: 'Edição chave-valor',
      headers: 'Cabeçalhos',
      params: 'Parâmetros',
      body: 'Corpo',
      outputVars: {
        body: 'Conteúdo da resposta',
        statusCode: 'Código de status da resposta',
        headers: 'Lista de cabeçalhos da resposta em JSON',
        files: 'Lista de arquivos',
      },
      authorization: {
        'authorization': 'Autorização',
        'authorizationType': 'Tipo de autorização',
        'no-auth': 'Nenhuma',
        'api-key': 'Chave API',
        'auth-type': 'Tipo de autorização',
        'basic': 'Básica',
        'bearer': 'Bearer',
        'custom': 'Personalizada',
        'api-key-title': 'Chave API',
        'header': 'Cabeçalho',
      },
      insertVarPlaceholder: 'digite \'/\' para inserir variável',
      timeout: {
        title: 'Timeout',
        connectLabel: 'Timeout de conexão',
        connectPlaceholder: 'Digite o timeout de conexão em segundos',
        readLabel: 'Timeout de leitura',
        readPlaceholder: 'Digite o timeout de leitura em segundos',
        writeLabel: 'Timeout de escrita',
        writePlaceholder: 'Digite o timeout de escrita em segundos',
      },
      type: 'Tipo',
      binaryFileVariable: 'Variável de arquivo binário',
      extractListPlaceholder: 'Insira o índice do item da lista, digite \'/\' inserir variável',
      curl: {
        placeholder: 'Cole a string cURL aqui',
        title: 'Importar do cURL',
      },
    },
    code: {
      inputVars: 'Variáveis de entrada',
      outputVars: 'Variáveis de saída',
      advancedDependencies: 'Dependências avançadas',
      advancedDependenciesTip: 'Adicione algumas dependências pré-carregadas que levam mais tempo para consumir ou não são padrão aqui',
      searchDependencies: 'Buscar dependências',
    },
    templateTransform: {
      inputVars: 'Variáveis de entrada',
      code: 'Código',
      codeSupportTip: 'Suporta apenas Jinja2',
      outputVars: {
        output: 'Conteúdo transformado',
      },
    },
    ifElse: {
      if: 'Se',
      else: 'Senão',
      elseDescription: 'Usado para definir a lógica que deve ser executada quando a condição if não é atendida.',
      and: 'e',
      or: 'ou',
      operator: 'Operador',
      notSetVariable: 'Por favor, defina a variável primeiro',
      comparisonOperator: {
        'contains': 'contém',
        'not contains': 'não contém',
        'start with': 'começa com',
        'end with': 'termina com',
        'is': 'é',
        'is not': 'não é',
        'empty': 'está vazio',
        'not empty': 'não está vazio',
        'null': 'é nulo',
        'not null': 'não é nulo',
        'regex match': 'partida regex',
        'in': 'em',
        'not in': 'não em',
        'exists': 'Existe',
        'not exists': 'não existe',
        'all of': 'todos os',
      },
      enterValue: 'Digite o valor',
      addCondition: 'Adicionar condição',
      conditionNotSetup: 'Condição NÃO configurada',
      selectVariable: 'Selecione a variável...',
      optionName: {
        image: 'Imagem',
        doc: 'Doc',
        url: 'URL',
        audio: 'Áudio',
        video: 'Vídeo',
        localUpload: 'Local Upload',
      },
      addSubVariable: 'Subvariável',
      select: 'Selecionar',
    },
    variableAssigner: {
      title: 'Atribuir variáveis',
      outputType: 'Tipo de saída',
      varNotSet: 'Variável não definida',
      noVarTip: 'Adicione as variáveis a serem atribuídas',
      type: {
        string: 'String',
        number: 'Número',
        object: 'Objeto',
        array: 'Array',
      },
      aggregationGroup: 'Grupo de agregação',
      aggregationGroupTip: 'Habilitar este recurso permite que o agregador de variáveis agregue múltiplos conjuntos de variáveis.',
      addGroup: 'Adicionar grupo',
      outputVars: {
        varDescribe: 'Saída de {{groupName}}',
      },
      setAssignVariable: 'Definir variável atribuída',
    },
    assigner: {
      'assignedVariable': 'Variável Atribuída',
      'writeMode': 'Modo de Escrita',
      'writeModeTip': 'Quando a VARIÁVEL ATRIBUÍDA é um array, o modo de anexar adiciona ao final.',
      'over-write': 'Sobrescrever',
      'append': 'Anexar',
      'plus': 'Mais',
      'clear': 'Limpar',
      'setVariable': 'Definir Variável',
      'variable': 'Variável',
      'operations': {
        'clear': 'Claro',
        'title': 'Operação',
        'over-write': 'Sobrescrever',
        '-=': '-=',
        '/=': '/=',
        '*=': '*=',
        'extend': 'Estender',
        'append': 'Acrescentar',
        '+=': '+=',
        'set': 'Pôr',
        'overwrite': 'Sobrescrever',
      },
      'selectAssignedVariable': 'Selecione a variável atribuída...',
      'setParameter': 'Definir parâmetro...',
      'noVarTip': 'Clique no botão "+" para adicionar variáveis',
      'assignedVarsDescription': 'As variáveis atribuídas devem ser variáveis graváveis, como variáveis de conversação.',
      'varNotSet': 'Variável NÃO definida',
      'noAssignedVars': 'Nenhuma variável atribuída disponível',
      'variables': 'Variáveis',
    },
    tool: {
      toAuthorize: 'Autorizar',
      inputVars: 'Variáveis de entrada',
      outputVars: {
        text: 'conteúdo gerado pela ferramenta',
        files: {
          title: 'arquivos gerados pela ferramenta',
          type: 'Tipo de suporte. Agora suporta apenas imagem',
          transfer_method: 'Método de transferência. O valor é remote_url ou local_file',
          url: 'URL da imagem',
          upload_file_id: 'ID do arquivo enviado',
        },
        json: 'JSON gerado por ferramenta',
      },
    },
    questionClassifiers: {
      model: 'modelo',
      inputVars: 'Variáveis de entrada',
      outputVars: {
        className: 'Nome da classe',
      },
      class: 'Classe',
      classNamePlaceholder: 'Escreva o nome da sua classe',
      advancedSetting: 'Configuração avançada',
      topicName: 'Nome do tópico',
      topicPlaceholder: 'Escreva o nome do seu tópico',
      addClass: 'Adicionar classe',
      instruction: 'Instrução',
      instructionTip: 'Insira instruções adicionais para ajudar o classificador de perguntas a entender melhor como categorizar perguntas.',
      instructionPlaceholder: 'Escreva sua instrução',
    },
    parameterExtractor: {
      inputVar: 'Variável de entrada',
      extractParameters: 'Extrair parâmetros',
      importFromTool: 'Importar das ferramentas',
      addExtractParameter: 'Adicionar parâmetro de extração',
      addExtractParameterContent: {
        name: 'Nome',
        namePlaceholder: 'Nome do parâmetro de extração',
        type: 'Tipo',
        typePlaceholder: 'Tipo de parâmetro de extração',
        description: 'Descrição',
        descriptionPlaceholder: 'Descrição do parâmetro de extração',
        required: 'Obrigatório',
        requiredContent: 'Obrigatório é usado apenas como referência para inferência do modelo, e não para validação obrigatória da saída do parâmetro.',
      },
      extractParametersNotSet: 'Parâmetros de extração não configurados',
      instruction: 'Instrução',
      instructionTip: 'Insira instruções adicionais para ajudar o extrator de parâmetros a entender como extrair parâmetros.',
      advancedSetting: 'Configuração avançada',
      reasoningMode: 'Modo de raciocínio',
      reasoningModeTip: 'Você pode escolher o modo de raciocínio apropriado com base na capacidade do modelo de responder a instruções para chamadas de função ou prompts.',
      isSuccess: 'É sucesso. Em caso de sucesso, o valor é 1, em caso de falha, o valor é 0.',
      errorReason: 'Motivo do erro',
    },
    iteration: {
      deleteTitle: 'Excluir nó de iteração?',
      deleteDesc: 'Excluir o nó de iteração excluirá todos os nós filhos',
      input: 'Entrada',
      output: 'Variáveis de saída',
      iteration_one: '{{count}} Iteração',
      iteration_other: '{{count}} Iterações',
      currentIteration: 'Iteração atual',
      ErrorMethod: {
        continueOnError: 'continuar em erro',
        removeAbnormalOutput: 'saída anormal de remoção',
        operationTerminated: 'Terminada',
      },
      MaxParallelismTitle: 'Paralelismo máximo',
      parallelModeEnableTitle: 'Modo paralelo ativado',
      errorResponseMethod: 'Método de resposta de erro',
      error_other: '{{contagem}} Erros',
      parallelMode: 'Modo paralelo',
      parallelModeUpper: 'MODO PARALELO',
      error_one: '{{contagem}} Erro',
      parallelModeEnableDesc: 'No modo paralelo, as tarefas dentro das iterações dão suporte à execução paralela. Você pode configurar isso no painel de propriedades à direita.',
      comma: ',',
      MaxParallelismDesc: 'O paralelismo máximo é usado para controlar o número de tarefas executadas simultaneamente em uma única iteração.',
      answerNodeWarningDesc: 'Aviso de modo paralelo: nós de resposta, atribuições de variáveis de conversação e operações persistentes de leitura/gravação em iterações podem causar exceções.',
      parallelPanelDesc: 'No modo paralelo, as tarefas na iteração dão suporte à execução paralela.',
    },
    note: {
      editor: {
        small: 'Pequeno',
        bold: 'Ousado',
        openLink: 'Abrir',
        strikethrough: 'Tachado',
        italic: 'Itálico',
        invalidUrl: 'URL inválido',
        placeholder: 'Escreva sua nota...',
        bulletList: 'Lista de marcadores',
        link: 'Link',
        enterUrl: 'Digite o URL...',
        medium: 'Média',
        large: 'Grande',
        unlink: 'Desvincular',
        showAuthor: 'Autor do programa',
      },
      addNote: 'Adicionar nota',
    },
    docExtractor: {
      outputVars: {
        text: 'Texto extraído',
      },
      inputVar: 'Variável de entrada',
      learnMore: 'Saiba Mais',
      supportFileTypes: 'Tipos de arquivo de suporte: {{types}}.',
    },
    listFilter: {
      outputVars: {
        result: 'Resultado do filtro',
        last_record: 'Último recorde',
        first_record: 'Primeiro registro',
      },
      desc: 'DESC',
      inputVar: 'Variável de entrada',
      selectVariableKeyPlaceholder: 'Selecione a chave da subvariável',
      limit: 'Topo N',
      orderBy: 'Ordenar por',
      filterCondition: 'Condição do filtro',
      asc: 'ASC',
      filterConditionKey: 'Chave de condição do filtro',
      filterConditionComparisonOperator: 'Operador de comparação de condição de filtro',
      filterConditionComparisonValue: 'Valor da condição do filtro',
      extractsCondition: 'Extraia o item N',
    },
  },
  tracing: {
    stopBy: 'Parado por {{user}}',
  },
  variableReference: {
    noAssignedVars: 'Nenhuma variável atribuída disponível',
    noVarsForOperation: 'Não há variáveis disponíveis para atribuição com a operação selecionada.',
    conversationVars: 'variáveis de conversação',
    assignedVarsDescription: 'As variáveis atribuídas devem ser variáveis graváveis, como',
    noAvailableVars: 'Nenhuma variável disponível',
  },
}

export default translation
