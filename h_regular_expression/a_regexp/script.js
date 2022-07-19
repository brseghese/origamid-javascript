const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp1 = /ul/g;
const regexp2 = /(?<=<\/?)\w+/g;
const regexp3 = /<li/g;

const resultSubUl = tags.replace(regexp1, "div");
console.log(resultSubUl);

const resultSubTag = tags.replace(regexp2, "div");
console.log(resultSubTag);

const resultAddClass = tags.replace(regexp3, "$& class='ativo'");
console.log(resultAddClass);

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp4 = /(\w+@)[\w.]+/g;

const resultEmail = emails.replace(regexp4, "$1gmail");
console.log(resultEmail);
