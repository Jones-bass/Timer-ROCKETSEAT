# Timer

#### Projeto Timer - Rocketseat

Projeto baseando um Cronômentro construido pela Rocketseat

Apesar de serem poucas funcionalidades, você vai precisar relembrar conceitos como:

- Estados
- Imutabilidade do estado
- Propriedades
- Componentização
- Context
- Reducer

useReducer Uma alternativa para useState. Aceita um reducer do tipo (state, action) => newState e retorna o estado atual, junto com um método dispatch. (Se você está familiarizado com o Redux, você já sabe como isso funciona.)

useReducer é geralmente preferível em relação ao useState quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior. useReducer também possibilita a otimização da performance de componentes que disparam atualizações profundas porque é possível passar o dispatch para baixo, ao invés de callbacks.

<br />
  <p align="center"> <img src="src/assets/illustration.gif"  width ="80%"> </p>
<br />

---

##  *VITE*

Vite é uma ferramenta  de construção que visa fornecer uma experiência de <br/>
desenvolvimento mais rápida e enxuta para projetos web modernos. É composto<br/>
 por duas partes principais:

Um servidor de desenvolvimento que fornece aprimoramentos de recursos avançados<br/>
 em módulos ES nativos , por exemplo, Hot Module Replacement (HMR) extremamente rápido.

Um comando de compilação que agrupa seu código com Rollup , pré-configurado para <br/>
gerar ativos estáticos altamente otimizados para produção.

O Vite é opinativo e vem com padrões sensatos prontos para uso, mas também é altamente<br/>
extensível por meio de sua API de plug -in e API JavaScript com suporte total à digitação.

Você pode aprender mais sobre a lógica por trás do projeto na seção Por que Vite .



---