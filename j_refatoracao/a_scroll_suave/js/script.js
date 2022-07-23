import ScrollSuave from "./modules/scroll_suave.js";
import initAnimacaoScroll from "./modules/scroll_animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown_menu.js";
import initMenuMobile from "./modules/menu_mobile.js";

import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch_animais.js";
import initFetchBitcoin from "./modules/fetch_bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();

initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
