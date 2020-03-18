# Lista Paginada
Projeto desenvolvido para a Órulo.
Interface conectada a uma API, coletando informações de imóveis para serem exibidas em tela, com a possibilidade do usuário poder favoritar e "desfavoritar" quaisquer imóvel

# Como Executar o Projeto
- Inicialmente é necessário que o Node.js esteja devidamente instalado.

1 - Após a clonagem do projeto, abra o arquivo ./listapaginada/keys/headers.js e no final da variável, onde tem "COLOCAR_A_KEY_AQUI", você deve substituir pelo token passado pela Órulo para este desenvolvimento. Você salva o arquivo e fecha.

2 - Você deve abrir o prompt de comando do Node na pasta ./listapaginada/express-api/ e executar o comando npm install;

3 - Na mesma janela do prompt do express, após todas as dependências instaladas, execute o comando npm start e mantenha a janela aberta;

3 - Abra uma nova janela do prompt na pasta ./listapaginada/ e execute também os mesmos comandos utilizados no segundo item, primeiro o npm install e após conclusão, npm start.

4 - Deve abrir uma página em seu navegador e você pode visualizar o projeto desenvolvido

#######################################################################################

# Ajustes, Melhorias e Acréscimos não implementados

1 - Cards dos Imóveis Responsivos;

2 - Re-criação de Todos os Ícones;

3 - Maior organização nas informações e iconografia;

4 - Em vez de exibir a data ao qual foi a última atualização, informar a quantos dias foi feita essa atualização;

5 - Ficar um curto período de tempo com o mouse sobre alguma das informações ou botões, surgiria uma legenda informando o que aquele elemento representava;

6 - Loading melhorado incluindo a estética da Órulo;

7 - Acréscimo da informação: Lançamento ou Remanescente, onde o usuário poderá visualizar se o imóvel já foi construído ou não

8 - Acréscimo da informação: Valor promocional. Um valor ao lado do valor principal, informando qual o valor anterior e qual o valor atual, para expressar que o imóvel estava em promoção;

9 - Caso houvesse nos dados que nos foram passados todas as fotografias do imóvel, seria implementado um slide, sem a necessidade do usuário entrar na página do imóvel para poder visualizar todas as fotografias;

10 - Melhorar as animações após passar o mouse pelos botões

11 - Após Favoritar, ao contrário de uma janela surgir informando que foi favoritado, iria aparecer um card ao lado direito da interface, dando feedback que foi favoritado


