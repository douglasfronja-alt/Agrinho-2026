/**
 * ==========================================
 * AGRINHO 2026 - SIMULADOR DE FAZENDA
 * ==========================================
 * Arquivo: js/script.js
 * Descrição: Lógica interativa do simulador de fazenda sustentável
 * ==========================================
 */

/**
 * Calcula o nível de sustentabilidade da fazenda
 * baseado nas tecnologias selecionadas
 */
function simular() {
  let pontos = 0;

  // Contar pontos baseado em tecnologias selecionadas
  if (document.getElementById('robo').checked) {
    pontos += 20;
  }
  if (document.getElementById('drone').checked) {
    pontos += 20;
  }
  if (document.getElementById('ia').checked) {
    pontos += 20;
  }
  if (document.getElementById('agua').checked) {
    pontos += 20;
  }
  if (document.getElementById('solar').checked) {
    pontos += 20;
  }

  // Gerar resultado baseado em pontos
  let resultado = '';

  if (pontos === 0) {
    resultado = `
      <h2>⚠️ Fazenda Tradicional</h2>
      <p>Sua fazenda ainda utiliza poucos recursos tecnológicos. Embora seja possível produzir alimentos, o desperdício de recursos tende a ser maior e a eficiência menor.</p>
      <p><strong>Recomendação:</strong> Comece a adotar tecnologias modernas para aumentar a produtividade e reduzir custos operacionais.</p>
      <p><strong>Economia esperada:</strong> Até 10%</p>
    `;
  } else if (pontos <= 40) {
    resultado = `
      <h2>🌱 Fazenda em Desenvolvimento</h2>
      <p>Sua propriedade já começou a adotar algumas tecnologias importantes. Isso contribui para melhorar a produtividade e reduzir impactos ambientais.</p>
      <p><strong>Estimativa de economia de recursos:</strong> Aproximadamente <strong>35%</strong></p>
      <p><strong>Próximos passos:</strong> Implemente mais tecnologias para potencializar os resultados.</p>
      <p><strong>Benefícios:</strong> Redução de custos e impacto ambiental moderado.</p>
    `;
  } else if (pontos <= 80) {
    resultado = `
      <h2>🚜 Fazenda Inteligente</h2>
      <p>Sua fazenda utiliza diversas tecnologias modernas. A combinação de inovação e sustentabilidade aumenta significativamente a eficiência da produção.</p>
      <p><strong>Estimativa de economia de recursos:</strong> Aproximadamente <strong>65%</strong></p>
      <p><strong>Produtividade esperada:</strong> Aumento de até <strong>45%</strong></p>
      <p><strong>Benefícios:</strong> Produção eficiente com menor impacto ambiental.</p>
    `;
  } else {
    resultado = `
      <h2>🏆 Fazenda Sustentável do Futuro</h2>
      <p>Parabéns! Sua propriedade utiliza robótica, drones, inteligência artificial, irrigação inteligente e energia solar.</p>
      <p>Esse modelo representa um exemplo de agricultura moderna e sustentável, capaz de produzir mais alimentos preservando os recursos naturais.</p>
      <p><strong>Redução estimada de desperdícios:</strong> Até <strong>80%</strong></p>
      <p><strong>Aumento estimado da produtividade:</strong> Até <strong>60%</strong></p>
      <p><strong>Benefícios ambientais:</strong> Redução significativa de emissões de carbono e preservação de recursos naturais.</p>
      <p><strong>Conclusão:</strong> Você alcançou o máximo nível de sustentabilidade agrícola!</p>
    `;
  }

  // Exibir resultado com animação
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = resultado;
  resultadoDiv.classList.add('ativo');

  // Animar transição
  resultadoDiv.style.animation = 'none';
  setTimeout(() => {
    resultadoDiv.style.animation = '';
  }, 10);

  // Scroll suave para o resultado
  resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Limpa o resultado quando qualquer checkbox é alterado
 */
function limparResultado() {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.classList.remove('ativo');
  resultadoDiv.innerHTML = '';
}

/**
 * Resetar todos os checkboxes e resultado
 */
function resetarSimulador() {
  document.getElementById('robo').checked = false;
  document.getElementById('drone').checked = false;
  document.getElementById('ia').checked = false;
  document.getElementById('agua').checked = false;
  document.getElementById('solar').checked = false;
  limparResultado();
}

/**
 * Event listeners para melhor experiência do usuário
 */
document.addEventListener('DOMContentLoaded', function () {
  // Obter referências dos elementos
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const botaoSimular = document.querySelector('.simulador-btn');

  // Adicionar event listener em cada checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', limparResultado);
  });

  // Permitir simular com Enter
  document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const resultadoDiv = document.getElementById('resultado');
      if (resultadoDiv && !resultadoDiv.classList.contains('ativo')) {
        simular();
      }
    }
  });

  // Log de inicialização (para debug)
  console.log('✅ Simulador Agrinho 2026 carregado com sucesso!');
});

/**
 * Função auxiliar para logging
 */
function log(mensagem) {
  console.log(`[Agrinho 2026] ${mensagem}`);
}

// Inicializar ao carregar
log('Sistema de simulação inicializado');