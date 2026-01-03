# Primeiros Passos – API com Node.js, TypeScript e Express

## Visão Geral

Este projeto é uma **API backend básica** desenvolvida com **Node.js**, **TypeScript** e **Express**, voltada para estudo e primeiros passos na criação de servidores HTTP. Ele demonstra uma configuração mínima, clara e funcional, focada em boas práticas iniciais de organização e tipagem.

O objetivo do projeto **não é complexidade**, mas entendimento: como subir um servidor, configurar TypeScript corretamente e responder a requisições HTTP.

---

## Tecnologias Utilizadas

* **Node.js** – Ambiente de execução JavaScript
* **TypeScript** – Superset do JavaScript com tipagem estática
* **Express** – Framework web minimalista
* **ts-node-dev** – Execução e reload automático em desenvolvimento

---

## Estrutura do Projeto

```
primeiros_passos/
├── package.json
├── package-lock.json
├── tsconfig.json
└── src/
    └── server.ts
```

### Descrição dos Arquivos

#### `server.ts`

Arquivo principal da aplicação. Responsável por:

* Inicializar o Express
* Definir uma rota básica (`GET /`)
* Subir o servidor em uma porta definida

#### `tsconfig.json`

Configuração do TypeScript. Define:

* Target do JavaScript
* Padrão de módulos
* Diretório raiz do código
* Ativação de tipagem estrita

#### `package.json`

Gerencia:

* Dependências do projeto
* Scripts de execução
* Metadados da aplicação

---

## Funcionamento da Aplicação

Ao iniciar o projeto:

1. O Express é instanciado
2. Uma rota HTTP básica é registrada
3. O servidor passa a escutar requisições na porta configurada

Exemplo de rota existente:

* `GET /` → Retorna uma resposta simples em texto, confirmando que o servidor está ativo

Isso é proposital: o foco aqui é **entender o ciclo básico de uma API**, não implementar regras de negócio.

---

## Instalação

### Pré-requisitos

* Node.js instalado (versão 18+ recomendada)
* Gerenciador de pacotes npm

### Passos

```bash
# instalar dependências
npm install

# iniciar o servidor em modo desenvolvimento
npm run dev
```

---

## Scripts Disponíveis

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```

* **dev**: inicia o servidor com reload automático ao alterar arquivos

---

## Acesso à API

Após iniciar o servidor:

```
http://localhost:3333
```

(ou a porta definida no código)

---

## Objetivo Educacional

Este projeto serve para:

* Entender a base de uma API Node.js
* Aprender a configurar TypeScript do zero
* Compreender como o Express funciona
* Criar um ponto de partida sólido para projetos maiores

Não há abstrações desnecessárias, ORMs ou camadas complexas. Tudo é direto e explícito.
