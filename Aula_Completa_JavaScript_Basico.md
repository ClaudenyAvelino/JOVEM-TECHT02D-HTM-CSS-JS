# 📘 **Aula Completa – JavaScript Básico**  
📅 **Data:** 08/10/2025  
👨‍🏫 **Instrutor:** Claudeny Avelino  

---

## 🟡 **1. O que é JavaScript?**
JavaScript (JS) é uma linguagem de programação usada principalmente no **Front-End** para criar interatividade em páginas web.  
Ele trabalha em conjunto com:
- **HTML:** estrutura da página  
- **CSS:** aparência e estilo  

### 💡 **Exemplos de uso:**
- Criar menus dinâmicos  
- Validar formulários  
- Mostrar/ocultar elementos  
- Fazer animações  
- Atualizar conteúdo sem recarregar a página  

---

## 🟡 **2. Inserindo JavaScript no HTML**
### 🔸 **Interno**
```html
<script>
  alert("Olá, mundo!");
</script>
```

### 🔸 **Externo (boa prática)**
```html
<script src="script.js"></script>
```
📌 **Dica:** Coloque o `<script>` **antes do fechamento da tag `</body>`** para evitar erros de carregamento.

---

## 🟡 **3. Console e `console.log()`**
O **console** é uma ferramenta para visualizar mensagens e depurar o código.

Acesse com: **F12 → Aba “Console”**

Exemplo:
```js
console.log("Bem-vindo ao JavaScript!");
```

---

## 🟡 **4. Variáveis e Tipos Primitivos**
As variáveis armazenam valores na memória.

```js
var nome = "João";   // forma antiga (evitar)
let idade = 25;      // recomendada
const pi = 3.14;     // constante
```

| Tipo | Exemplo |
|------|----------|
| String | `"texto"` |
| Number | `10`, `3.14` |
| Boolean | `true`, `false` |
| Undefined | `let x;` |
| Null | `let x = null;` |

---

## 🟡 **5. Operadores Matemáticos e Lógicos**
### ➤ **Matemáticos**
```js
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

### ➤ **Comparação**
```js
a == b   // igualdade (valor)
a === b  // igualdade (valor e tipo)
a != b   // diferente
a > b
a < b
```

### ➤ **Lógicos**
```js
true && false   // false (E)
true || false   // true  (OU)
!true           // false (NÃO)
```

---

## 🟡 **6. Estruturas Condicionais**
```js
let idade = 18;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
```

---

## 🟡 **7. Comentários**
```js
// Comentário de uma linha

/*
  Comentário
  de várias linhas
*/
```

---

## 🧪 **8. Atividade Prática**
Crie um arquivo `index.html` e `script.js`.  
No `script.js`:
1. Declare variáveis (`string`, `number`, `boolean`)  
2. Exiba os valores no console  
3. Realize uma operação matemática  
4. Crie uma condição com `if`

---

# 💻 **Atividade Final – Meu Primeiro Site Comercial**

## 🎯 **Objetivo**
Aplicar os conhecimentos de **HTML, CSS e JavaScript** desenvolvendo um **site completo e funcional** para um **comércio local**.

---

## 🧱 **Descrição da Atividade**
Os grupos (máximo **5 integrantes**) deverão **prospectar um cliente real** (comércio local ou de artesanato), realizando uma breve entrevista para compreender:
- O que o negócio oferece (produtos ou serviços);  
- Quais informações devem estar no site (nome, contato, endereço, redes sociais, etc.);  
- Qual estilo visual desejado (cores, imagens, logotipo, identidade visual).  

---

## 💡 **Requisitos Técnicos**
- **HTML:** Estrutura semântica com `header`, `main`, `section`, `footer`  
- **CSS:** Layout personalizado com cores e design atrativo  
- **JavaScript:** Ao menos uma funcionalidade interativa  
  - Exemplo: alterar cor de fundo, alerta, validação ou mensagem automática  
- **Responsividade:** Ajuste do site para diferentes telas  

---

## 📌 **Boas Práticas**
- Utilize **HTML semântico**  
- Mantenha **CSS organizado e reutilizável**  
- Coloque o **JavaScript em arquivo externo** (`script.js`)  
- Use **nomes de classes e IDs** claros e coerentes  
- Teste o site em diferentes **navegadores e resoluções**  
- Inclua **comentários explicativos** no código  
- Escolha **cores e fontes legíveis**  

---

## 🧠 **Critérios de Avaliação**
| Critério | Descrição | Pontos |
|-----------|------------|--------|
| Estrutura HTML | Uso correto das tags e organização do conteúdo | 2,0 |
| Estilo CSS | Aplicação de layout e design coerente | 2,0 |
| Interatividade JS | Funcionalidade implementada corretamente | 2,0 |
| Criatividade e identidade visual | Originalidade e adequação ao tema | 2,0 |
| Entrevista e compreensão do cliente | Clareza nas informações coletadas | 2,0 |
| **Total** |  | **10,0** |

---

## 📁 **Estrutura de Pastas Sugerida**
```
meu-site-comercial/
│
├── index.html
├── style.css
└── script.js
```

---

## 📚 **Conclusão**
Esta atividade permite ao aluno aplicar seus conhecimentos de **HTML, CSS e JavaScript** de forma prática e contextualizada, desenvolvendo habilidades essenciais em **prototipagem, lógica e design web**.
