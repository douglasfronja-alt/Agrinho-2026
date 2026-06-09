/**
 * Simulador de Fazenda Sustentável
 * Calcula o nível de sustentabilidade baseado nas tecnologias selecionadas
 */

function simular() {
  let pontos = 0;

  // Contar tecnologias selecionadas
  if (document.getElementById('robo').checked) pontos += 20;
  if (document.getElementById('drone').checked) pontos += 20;
  if (document.getElementById('ia').checked) pontos += 20;
  if (document.getElementById('agua').checked) pontos += 20;
  if (document.getElementById('solar').checked) pontos += 20;

  let resultado = '';

  // Gerar resultado baseado em pontos
  if (pontos === 0) {
    resultado = `
      <h2>⚠️ Fazenda Tradicional</h2>
      <p>Sua fazenda ainda utiliza poucos recursos tecnológicos. Embora seja possível produzir alimentos, o desperdício de recursos tende a ser maior e a eficiência menor.</p>
      <p><strong>Recomendação:</strong> Comece a adotar tecnologias modernas para aumentar a produtividade e reduzir custos.</p>
    `;
  } else if (pontos <= 40) {
    resultado = `
      <h2>🌱 Fazenda em Desenvolvimento</h2>
      <p>Sua propriedade já começou a adotar algumas tecnologias importantes. Isso contribui para melhorar a produtividade e reduzir impactos ambientais.</p>
      <p><strong>Estimativa de economia de recursos:</strong> aproximadamente <strong>35%</strong>.</p>
      <p><strong>Próximos passos:</strong> Implemente mais tecnologias para potencializar os resultados.</p>
    `;
  } else if (pontos <= 80) {
    resultado = `
      <h2>🚜 Fazenda Inteligente</h2>
      <p>Sua fazenda utiliza diversas tecnologias modernas. A combinação de inovação e sustentabilidade aumenta significativamente a eficiência da produção.</p>
      <p><strong>Estimativa de economia de recursos:</strong> aproximadamente <strong>65%</strong>.</p>
      <p><strong>Produtividade esperada:</strong> aumento de até <strong>45%</strong>.</p>
    `;
  } else {
    resultado = `
      <h2>🏆 Fazenda Sustentável do Futuro</h2>
      <p>Parabéns! Sua propriedade utiliza robótica, drones, inteligência artificial, irrigação inteligente e energia solar.</p>
      <p>Esse modelo representa um exemplo de agricultura moderna e sustentável, capaz de produzir mais alimentos preservando os recursos naturais.</p>
      <p><strong>Redução estimada de desperdícios:</strong> até <strong>80%</strong>.</p>
      <p><strong>Aumento estimado da produtividade:</strong> até <strong>60%</strong>.</p>
      <p><strong>Benefícios ambientais:</strong> Redução significativa de emissões de carbono e preservação de recursos naturais.</p>
    `;
  }

  // Exibir resultado com animação
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = resultado;
  resultadoDiv.classList.add('ativo');

  // Scroll para o resultado
  resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Event listeners para melhor experiência do usuário
 */
document.addEventListener('DOMContentLoaded', function () {
  // Adicionar enter para submeter o simulador
  document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && event.ctrlKey) {
      simular();
    }
  });

  // Limpar resultado quando um checkbox é mudado
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.classList.remove('ativo');
    });
  });
});