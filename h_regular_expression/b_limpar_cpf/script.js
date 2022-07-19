const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const clearCpf = (cpf) => cpf.replace(/\D/g, "");

const createCpf = (cpf) =>
  cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

const formatCpfs = (cpfs) => cpfs.map(clearCpf).map(createCpf);

const subCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormat = formatCpfs(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormat[index];
  });
};

subCpfs(cpfsList);
