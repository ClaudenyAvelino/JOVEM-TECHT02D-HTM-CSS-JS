# 📘 Conteúdo Detalhado – Dia 1 (JavaScript Básico)

## 🟡 1. O que é JavaScript? Onde é usado (Front-End)?

**JavaScript (JS)** é uma linguagem de programação voltada principalmente para o **desenvolvimento web**. Ele é responsável por dar **interatividade às páginas**, funcionando junto com:

- **HTML** (estrutura)
- **CSS** (estilo)

### Exemplos de uso no Front-End:
- Criar menus interativos
- Validar formulários
- Mostrar ou esconder elementos na tela
- Fazer animações simples
- Atualizar conteúdo sem recarregar a página

### 💡 Demonstração:
Use uma página estática (HTML + CSS) e outra com um botão que muda a cor de fundo ou exibe um alerta. Explique que o JS é o responsável por essa "magia".

---

## 🟡 2. Inserção do JS no HTML (`<script>`)

### Formas de usar JavaScript em uma página:

#### 🔸 JS Interno:
```html
<script>
  alert("Olá, mundo!");
</script>
```
🔸 JS Externo (melhor prática):
```
<!-- HTML -->
<script src="script.js"></script>
```

✅ Boa prática:

Coloque a tag 
```
<script> antes do </body> para garantir que o HTML seja carregado primeiro, evitando erros ao acessar elementos da página.
```

🟡 3. Console e console.log()
O que é o Console?

Ferramenta dos navegadores para visualizar mensagens de depuração.

Acesse com F12 > Aba "Console" (Chrome, Firefox, Edge).

Uso básico:
```
console.log("Bem-vindo ao JavaScript!");

```
💡 Demonstração:

Alunos para abrirem o console do navegador e usarem console.log() para exibir mensagens e variáveis.

🟡 4. Variáveis e Tipos Primitivos
O que são variáveis?

Espaços de memória para armazenar informações.

🧾 Declarações em JS:

```
var nome = "João";      // forma antiga (evitar)
let idade = 25;         // recomendado
const pi = 3.14;        // constante (não muda)
```

🧠 Tipos primitivos:

```
| Tipo      | Exemplo              |
| --------- | -------------------- |
| String    | `"texto"`            |
| Number    | `10`, `3.14`         |
| Boolean   | `true`, `false`      |
| Undefined | `let x;` (sem valor) |
| Null      | `let x = null;`      |
```

👨‍💻 Demonstração:
```
let nome = "Maria";       // string
let idade = 30;           // number
let estudante = true;     // boolean

console.log(nome);
console.log(typeof idade);       // number
console.log(typeof estudante);   // boolean
console.log(typeof nome);        // string
console.log(typeof idade);       // number
console.log(typeof estudante);   // boolean
```

🟡 5. Operadores Matemáticos e Lógicos
➤ Matemáticos:

```
let a = 10;
let b = 5;

console.log(a + b);  // 15
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0 (resto da divisão)
```
➤ Atribuição com operadores:

```
a += 2; // equivalente a: a = a + 2

```

➤ Comparação:

```
a == b     // igualdade (valor)
a === b    // igualdade (valor e tipo)
a != b     // diferente
a > b
a < b
```

➤ Lógicos:

```
true && false   // false (E)
true || false   // true  (OU)
!true           // false (NÃO)
```

💡 Exemplo prático:

```
let idade = 18;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
```

🟡 6. Comentários

Comentário de uma linha:

```
// Isso é um comentário
```

Comentário de múltiplas linhas:

```
/*
  Este é um comentário
  de várias linhas
*/
```
---
💡 Dica:

Os alunos a usarem comentários para explicar partes do código.

---

🧪 7. Atividade prática

Crie um arquivo HTML com um script JS externo. No JS, os alunos devem:

Declarar variáveis dos tipos: string, number e boolean

Exibir essas variáveis no console usando console.log

Fazer uma conta simples (ex: soma de dois números)

Usar uma estrutura condicional if para verificar uma condição e exibir uma mensagem
----
📁 8. Estrutura de pastas sugerida:

```
aula01-js/
│
├── index.html
└── script.js
```
