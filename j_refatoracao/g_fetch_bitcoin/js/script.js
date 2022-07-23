import ScrollSuave from "./modules/scroll_suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown_menu.js";
import initMenuMobile from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch_animais.js";
import fetchBitcoin from "./modules/fetch_bitcoin.js";
import initAnimacaoScroll from "./modules/scroll_animacao.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();

fetchAnimais("../../animalapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
