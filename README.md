# weather-web-app
O objetivo do projeto é criar um app climático baseado na localização inserida pelo usuário.

Link para o [Projeto Weather Web App](https://roadmap.sh/projects/weather-app)

## Requisitos
 - Permitir que o usuário insira uma localização em um campo de entrada.
 - Mostrar temperatura, velocidade do vento, probabilidade de chuva e condição geral do tempo (ensolarado, chuvoso, nublado, etc.) para a localização inserida.
 - Exibir as condições climáticas relacionados às 24 horas: de um dia atrás; e do dia atual.
 - O usuário pode atualizar as informações climáticas manualmente.
 - Opcional: Usar bibliotecas de animação, como Framer, para tornar a atualização dos dados climáticos visualmente atraentes.

## Ferramentas utilizadas no desenvolvimento

- HTML
- [Tailwind CSS](https://tailwindcss.com/): Framework
- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
    - Framework: [Nextjs](https://nextjs.org/)
    - Servidor: [Descrito abaixo](#getting-started)
- [VS Code Studio](https://code.visualstudio.com/)

## Observações
Para realizar uma requisição para o [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) é necessário inserir 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY', sendo location a localização; date1 e date2 as datas desejadas para a pesquisa; e YOUR_API_KEY é sua chave particular, obtida após cadastro no site em sua "Account".
Quando a chave for obtida, deve ser criado e configurado o arquivo .env na raiz do projeto, inserido internamente a declaração "REACT_APP_WEATHER_API_KEY=YOUR_API_KEY".