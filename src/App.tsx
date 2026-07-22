import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight, BatteryFull, Check, ChevronDown, CreditCard, Heart, Instagram,
  MapPin, Menu, Phone, RefreshCcw, Search, Send, ShieldCheck, ShoppingBag,
  Signal, Sparkles, Trash2, Wifi, X
} from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { categories, products, type Product } from "./products";

const WHATSAPP = "5515996007266";
const STORAGE_KEY = "tecnoshop-react-lista";
const whatsappUrl = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const money = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: .72, ease: [.16, 1, .3, 1] as const } }
};

function StartupIphone({ onFinished }: { onFinished: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinished, 3300);
    return () => window.clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div className="startup" initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(14px)" }} transition={{ duration: .8 }}>
      <div className="startup-grid" />
      <motion.div className="startup-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .7 }}>
        <span>TECNOLOGIA QUE SE MOVE COM VOCÊ</span>
        <p>Preparando seu próximo upgrade</p>
      </motion.div>

      <motion.div
        className="iphone-stage"
        initial={{ y: 90, scale: .7, rotateY: -18, opacity: 0 }}
        animate={{ y: [90, 0, 0, -12], scale: [.7, 1, 1, 1.04], rotateY: [-18, 0, 0, 2], opacity: 1 }}
        transition={{ duration: 2.6, times: [0, .35, .75, 1], ease: [.16, 1, .3, 1] }}
      >
        <div className="iphone-side iphone-volume"><i /><i /><i /></div>
        <div className="iphone-side iphone-power"><i /></div>
        <div className="iphone-shell">
          <div className="iphone-screen">
            <div className="iphone-wallpaper"><span /><span /><span /></div>
            <div className="iphone-status"><b>9:41</b><div><Signal size={11} fill="currentColor" /><Wifi size={12} /><BatteryFull size={16} /></div></div>
            <motion.div className="dynamic-island" initial={{ width: 86 }} animate={{ width: [86, 118, 86] }} transition={{ delay: 1.05, duration: 1.3 }}>
              <span /><i />
            </motion.div>
            <motion.div className="startup-logo" initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .75, duration: .7, ease: [.16, 1, .3, 1] }}>
              <img src="./assets/tecnoshop-logo.png" alt="" />
              <motion.div className="logo-ring" animate={{ rotate: 360 }} transition={{ duration: 5, ease: "linear", repeat: Infinity }} />
            </motion.div>
            <motion.div className="startup-phone-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25 }}>
              <strong>TECNO<span>SHOP</span></strong>
              <small>CERQUILHO</small>
            </motion.div>
            <div className="iphone-loader"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.1, duration: 1.55, ease: "easeInOut" }} /></div>
            <div className="home-indicator" />
          </div>
        </div>
      </motion.div>

      <motion.button className="skip-intro" onClick={onFinished} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>Pular introdução</motion.button>
    </motion.div>
  );
}

function Brand() {
  return <a className="brand" href="#inicio"><img src="./assets/tecnoshop-logo.png" alt="TecnoShop" /><span><strong>TECNO</strong><b>SHOP</b><small>CERQUILHO</small></span></a>;
}

function Header({ count, openList, openMenu }: { count: number; openList: () => void; openMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <>
    <div className="top-strip"><div className="container"><span><CreditCard size={15} /> Parcelamento em até 18x</span><span><RefreshCcw size={15} /> Aceitamos seu iPhone na troca</span><a href={whatsappUrl("Olá! Vim pelo site da TecnoShop Cerquilho.")} target="_blank">Número oficial: (15) 99600-7266</a></div></div>
    <header className={scrolled ? "site-header scrolled" : "site-header"}><div className="container header-inner">
      <Brand />
      <nav><a href="#inicio">Início</a><a href="#produtos">Produtos</a><a href="#troca">Seu usado</a><a href="#loja">A loja</a></nav>
      <div className="header-actions">
        <button className="list-button" onClick={openList}><ShoppingBag size={18} /><span>Minha lista</span><b>{count}</b></button>
        <a className="header-cta" href={whatsappUrl("Olá! Vim pelo site da TecnoShop Cerquilho.")} target="_blank">Falar no WhatsApp <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={openMenu} aria-label="Abrir menu"><Menu /></button>
      </div>
    </div></header>
  </>;
}

function Hero() {
  const x = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const move = (event: MouseEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - box.left) / box.width - .5) * 16);
    y.set(((event.clientY - box.top) / box.height - .5) * 12);
  };
  return <section className="hero" id="inicio" onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}>
    <div className="hero-grid-bg" /><div className="hero-glow" />
    <div className="container hero-grid">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
        <div className="eyebrow"><i /> TECNOLOGIA EM CERQUILHO</div>
        <h1>Seu próximo <em>upgrade</em> começa aqui.</h1>
        <p>iPhones, Android, iPad, MacBook, smartwatches, acessórios e mobilidade elétrica com atendimento de verdade.</p>
        <div className="hero-actions">
          <a className="button primary" href="#produtos">Explorar produtos <ArrowRight size={18} /></a>
          <a className="button ghost" href={whatsappUrl("Olá! Gostaria de saber quais ofertas estão disponíveis hoje.")} target="_blank">Ver ofertas no WhatsApp</a>
        </div>
        <div className="hero-proof"><span><Check size={15} /> Loja física no Centro</span><span><Check size={15} /> Novos e seminovos</span><span><Check size={15} /> Troca facilitada</span></div>
      </motion.div>
      <motion.div className="hero-visual hero-showcase" style={{ x, y }} initial={{ opacity: 0, x: 70, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: .15, duration: 1.05, ease: [.16, 1, .3, 1] }}>
        <div className="showcase-ambient" /><div className="showcase-scan" />
        <img className="hero-products" src="./assets/hero-premium-v2.webp" alt="Seleção premium de smartphone, notebook, smartwatch, fones e scooter elétrica" />
        <motion.div className="hero-brand-seal" animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ duration: 5, repeat: Infinity }}><img src="./assets/tecnoshop-logo.png" alt="" /></motion.div>
        <motion.div className="finance-pill" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.8, repeat: Infinity }}><CreditCard size={18} /><span><b>Até 18x</b><small>consulte condições</small></span></motion.div>
        <motion.div className="showcase-tag" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.6, repeat: Infinity }}><Sparkles size={18} /><span><small>SELEÇÃO TECNOSHOP</small><strong>Tecnologia premium</strong><b>Novos • Seminovos • Mobilidade</b></span></motion.div>
        <div className="showcase-index"><span>01</span><i /><small>EXPERIÊNCIA TECNOSHOP</small></div>
      </motion.div>
    </div>
    <div className="container footnote">Estoque, valores e condições sujeitos à confirmação pelo WhatsApp oficial.</div>
  </section>;
}

const benefits = [
  [RefreshCcw, "Seu iPhone vale na troca", "Faça uma avaliação do seu aparelho"],
  [CreditCard, "Condições em até 18x", "Consulte as opções disponíveis"],
  [ShieldCheck, "Seminovos selecionados", "Revisados e com procedência"],
  [MapPin, "Atendimento em Cerquilho", "Rua Ângelo Luvizotto, 401"]
] as const;

function Benefits() {
  return <section className="benefits"><div className="container benefits-grid">{benefits.map(([Icon, title, text], index) => <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .4 }} variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { delay: index * .08 } } }}><i><Icon /></i><p><strong>{title}</strong><small>{text}</small></p></motion.div>)}</div></section>;
}

function ProductCard({ product, selected, toggle, details }: { product: Product; selected: boolean; toggle: () => void; details: () => void }) {
  return <motion.article className="product-card" layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .92 }} whileHover={{ y: -9 }}>
    <button className="product-image" onClick={details} aria-label={`Ver ${product.name}`}>
      <span className={`accent accent-${product.accent}`} /><span className="visual-word">{product.visualLabel}</span>
      <img src={product.image} alt={product.name} loading="lazy" /><span className="condition">{product.condition}</span>
      {product.publishedPrice && <span className="verified"><Check size={12} /> preço publicado</span>}
    </button>
    <div className="product-content"><small>{product.category}</small><h3>{product.name}</h3><p>{product.subtitle}</p>
      <div className="product-price"><span>{product.priceLabel || "valor atualizado"}</span><strong>{product.price ? money(product.price) : "Consulte"}</strong></div>
      <div className="product-actions"><button onClick={details}>Ver detalhes</button><button className={selected ? "selected" : ""} onClick={toggle} aria-label="Adicionar à lista">{selected ? <Check /> : <ShoppingBag />}</button></div>
    </div>
  </motion.article>;
}

function Catalog({ quote, toggle, showDetails }: { quote: string[]; toggle: (id: string) => void; showDetails: (product: Product) => void }) {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => products.filter(product => (category === "Todos" || product.category === category) && `${product.name} ${product.subtitle} ${product.condition}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <section className="catalog" id="produtos"><div className="catalog-watermark">SHOP</div><div className="container">
    <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><div><span>CATÁLOGO TECNOSHOP</span><h2>Encontre o que combina com você.</h2><p>Explore os produtos e confirme estoque, valores e condições em tempo real pelo WhatsApp.</p></div><label className="search-box"><Search /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar iPhone, MacBook..." />{query && <button onClick={() => setQuery("")}><X size={17} /></button>}</label></motion.div>
    <div className="categories">{categories.map(item => <button key={item} className={item === category ? "active" : ""} onClick={() => setCategory(item)}>{item}{item !== "Todos" && <small>{products.filter(p => p.category === item).length}</small>}</button>)}</div>
    <motion.div className="product-grid" layout>{<AnimatePresence mode="popLayout">{filtered.map(product => <ProductCard key={product.id} product={product} selected={quote.includes(product.id)} toggle={() => toggle(product.id)} details={() => showDetails(product)} />)}</AnimatePresence>}</motion.div>
    {!filtered.length && <div className="empty"><Search /><h3>Nenhum produto encontrado</h3><p>Tente outro termo ou categoria.</p></div>}
    <div className="catalog-note"><Phone /><p><strong>Não encontrou o modelo que procura?</strong><span>Envie o nome do aparelho e a equipe confirma as opções disponíveis.</span></p><a href={whatsappUrl("Olá! Não encontrei o modelo que procuro. Podem me ajudar?")} target="_blank">Consultar outro modelo <ArrowRight /></a></div>
  </div></section>;
}

function Trade() {
  return <section className="trade" id="troca"><div className="container trade-grid">
    <motion.div className="trade-art trade-showcase" initial={{ opacity: 0, x: -60, scale: .95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }}>
      <div className="trade-image-frame"><img src="./assets/trade-upgrade-v2.webp" alt="Comparação entre um smartphone usado e um smartphone novo" /><div className="trade-light-sweep" /></div>
      <motion.div className="trade-label trade-label-old" animate={{ y: [0, 6, 0] }} transition={{ duration: 4.2, repeat: Infinity }}><small>SEU APARELHO</small><strong>Usado avaliado</strong><span>Modelo • Estado • Capacidade</span></motion.div>
      <motion.div className="trade-label trade-label-new" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.6, repeat: Infinity }}><small>SEU PRÓXIMO</small><strong>Upgrade premium</strong><span>Novos e seminovos</span></motion.div>
      <motion.div className="trade-value-badge" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 3.2, repeat: Infinity }}><RefreshCcw size={19} /><span><small>AVALIAÇÃO</small><strong>Seu usado vale na troca</strong></span></motion.div>
    </motion.div>
    <motion.div className="trade-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><span>TROCA FACILITADA</span><h2>Seu iPhone atual pode ajudar no próximo.</h2><p>Envie as informações do seu aparelho, receba uma avaliação inicial e use o valor aprovado na negociação.</p><ol>{[["01","Conte qual é o aparelho","Modelo, capacidade e conservação."],["02","Receba uma avaliação","A confirmação acontece após a análise."],["03","Escolha seu upgrade","Use o valor aprovado na negociação."]].map(([n,t,d]) => <li key={n}><b>{n}</b><span><strong>{t}</strong><small>{d}</small></span></li>)}</ol><a className="button primary" href={whatsappUrl("Olá! Quero avaliar meu iPhone para usar na troca. Meu modelo é: ")} target="_blank">Avaliar meu iPhone <ArrowRight /></a></motion.div>
  </div></section>;
}

function Experience() {
  const cards = [[Search,"Explore","Busque por categoria e abra os detalhes de cada item."],[Heart,"Monte sua lista","Salve seus favoritos sem precisar criar uma conta."],[Send,"Confirme no WhatsApp","Envie sua seleção pronta e receba valores atualizados."]] as const;
  return <section className="experience"><div className="container"><div className="section-heading centered"><div><span>MAIS QUE UM CATÁLOGO</span><h2>Um caminho simples até a melhor escolha.</h2><p>O site organiza as opções; a equipe confirma os detalhes com você.</p></div></div><div className="experience-grid">{cards.map(([Icon,title,text], index) => <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}><span>0{index + 1}</span><i><Icon /></i><h3>{title}</h3><p>{text}</p></motion.article>)}</div></div></section>;
}

function Store() {
  return <section className="store" id="loja"><div className="container store-grid"><motion.div className="store-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><span>VENHA CONHECER</span><h2>TecnoShop no Centro de Cerquilho.</h2><p>Veja os aparelhos de perto, tire suas dúvidas e converse com a equipe antes de escolher.</p><div className="store-details"><div><i><MapPin /></i><p><small>Endereço</small><strong>Rua Ângelo Luvizotto, 401</strong><span>Centro • Cerquilho — SP</span></p></div><div><i><Phone /></i><p><small>WhatsApp oficial</small><strong>(15) 99600-7266</strong><span>Confirme sempre por este número</span></p></div><div><i><Instagram /></i><p><small>Instagram</small><strong>@tecnoshopcerquilho</strong><span>Novidades e ofertas da loja</span></p></div></div><div className="store-actions"><a className="button primary" href="https://www.google.com/maps/search/?api=1&query=Rua%20%C3%82ngelo%20Luvizotto%2C%20401%2C%20Cerquilho%20SP" target="_blank">Como chegar <ArrowRight /></a><a className="button ghost" href="https://www.instagram.com/tecnoshopcerquilho/" target="_blank"><Instagram /> Ver Instagram</a></div></motion.div><motion.div className="map-card" initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}><div className="map-lines" /><div className="road road-1" /><div className="road road-2" /><div className="road road-3" /><motion.div className="map-pin" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><i><MapPin /></i><span><strong>TECNO SHOP</strong><small>Rua Ângelo Luvizotto, 401</small></span></motion.div><b className="map-label one">Centro</b><b className="map-label two">Cerquilho</b></motion.div></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [["Os preços do site são atualizados?","Como estoque e condições podem mudar, confirme sempre o preço final pelo WhatsApp antes da compra."],["Posso usar meu iPhone como parte do pagamento?","Sim. O valor depende do modelo, capacidade e estado do aparelho após avaliação."],["É possível parcelar?","A TecnoShop divulga parcelamento em até 18x. As condições variam conforme o produto."],["O site realiza pagamento online?","Esta versão funciona como catálogo. Pagamento, retirada ou entrega são combinados diretamente com a loja."]];
  return <section className="faq"><div className="container faq-grid"><div className="faq-copy"><span>DÚVIDAS RÁPIDAS</span><h2>Antes de escolher, vale saber.</h2><p>Se ainda ficar alguma dúvida, fale diretamente com a equipe pelo número oficial.</p><a href={whatsappUrl("Olá! Tenho uma dúvida sobre os produtos da TecnoShop.")} target="_blank">Tirar uma dúvida <ArrowRight /></a></div><div className="faq-list">{items.map(([question, answer], index) => <article key={question} className={open === index ? "open" : ""}><button onClick={() => setOpen(open === index ? -1 : index)}>{question}<motion.i animate={{ rotate: open === index ? 180 : 0 }}><ChevronDown /></motion.i></button><AnimatePresence>{open === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{answer}</motion.p>}</AnimatePresence></article>)}</div></div></section>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><Brand /><p>Tecnologia, atendimento e oportunidades para o seu próximo upgrade.</p></div><div><h3>Navegue</h3><a href="#produtos">Produtos</a><a href="#troca">Seu iPhone na troca</a><a href="#loja">Endereço</a></div><div><h3>Categorias</h3><a href="#produtos">iPhones</a><a href="#produtos">Android</a><a href="#produtos">Apple</a></div><div><h3>Atendimento</h3><a href={whatsappUrl("Olá! Vim pelo site.")}>(15) 99600-7266</a><a href="https://www.instagram.com/tecnoshopcerquilho/">@tecnoshopcerquilho</a><span>Rua Ângelo Luvizotto, 401</span></div></div><div className="container footer-bottom"><span>© 2026 TecnoShop Cerquilho.</span><span>Valores e estoque sujeitos à confirmação.</span></div></footer>;
}

function Drawer({ quote, close, remove }: { quote: Product[]; close: () => void; remove: (id: string) => void }) {
  const message = `Olá! Montei uma lista no site da TecnoShop Cerquilho:\n\n${quote.map((p, i) => `${i + 1}. ${p.name} — ${p.condition}`).join("\n")}\n\nPode me ajudar?`;
  return <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={event => event.target === event.currentTarget && close()}><motion.aside className="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [.16, 1, .3, 1] }}><div className="drawer-head"><div><strong>Minha lista</strong><small>{quote.length} {quote.length === 1 ? "produto" : "produtos"}</small></div><button onClick={close}><X /></button></div><div className="drawer-body">{quote.length ? quote.map(product => <div className="quote-item" key={product.id}><img src={product.image} alt="" /><div><small>{product.condition}</small><strong>{product.name}</strong><span>{product.price ? money(product.price) : "Valor sob consulta"}</span></div><button onClick={() => remove(product.id)}><Trash2 /></button></div>) : <div className="quote-empty"><i><ShoppingBag /></i><h3>Sua lista está vazia</h3><p>Adicione produtos para enviar tudo de uma vez à loja.</p></div>}</div><div className="drawer-footer"><p><ShieldCheck /> A loja confirma todos os detalhes com você.</p><a className={quote.length ? "button primary" : "button primary disabled"} href={quote.length ? whatsappUrl(message) : undefined} target="_blank">Enviar lista no WhatsApp <Send /></a></div></motion.aside></motion.div>;
}

function ProductModal({ product, selected, close, toggle }: { product: Product; selected: boolean; close: () => void; toggle: () => void }) {
  return <motion.div className="overlay modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={event => event.target === event.currentTarget && close()}><motion.section className="product-modal" initial={{ opacity: 0, y: 35, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}><button className="modal-close" onClick={close}><X /></button><div className="modal-image"><span className={`accent accent-${product.accent}`} /><img src={product.image} alt={product.name} /><b>{product.visualLabel}</b></div><div className="modal-copy"><span>{product.category} • {product.condition}</span><h2>{product.name}</h2><p>{product.description}</p><ul>{product.specs.map(spec => <li key={spec}><Check /> {spec}</li>)}</ul><div className="modal-price"><small>{product.priceLabel || "valor atualizado"}</small><strong>{product.price ? money(product.price) : "Consulte no WhatsApp"}</strong><span>Estoque, valor e condições sujeitos à confirmação.</span></div><div className="modal-actions"><a className="button primary" href={whatsappUrl(`Olá! Vi o ${product.name} no site e gostaria de confirmar valor e disponibilidade.`)} target="_blank">Quero este produto <ArrowRight /></a><button className={selected ? "selected" : ""} onClick={toggle}>{selected ? <Check /> : <ShoppingBag />} {selected ? "Adicionado à lista" : "Adicionar à lista"}</button></div></div></motion.section></motion.div>;
}

function MobileMenu({ close }: { close: () => void }) {
  return <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={event => event.target === event.currentTarget && close()}><motion.aside className="mobile-menu" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}><div className="drawer-head"><strong>Menu</strong><button onClick={close}><X /></button></div><nav>{[["Início","#inicio"],["Produtos","#produtos"],["Seu usado na troca","#troca"],["A loja","#loja"]].map(([label,href]) => <a key={href} href={href} onClick={close}>{label}<ArrowRight /></a>)}</nav><a className="button primary" href={whatsappUrl("Olá! Vim pelo site.")} target="_blank">Falar no WhatsApp <ArrowRight /></a></motion.aside></motion.div>;
}

export default function App() {
  const [intro, setIntro] = useState(true);
  const [quoteIds, setQuoteIds] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; } });
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(quoteIds)); }, [quoteIds]);
  useEffect(() => { document.body.classList.toggle("locked", drawer || menu || !!selected || intro); }, [drawer, menu, selected, intro]);
  const toggle = (id: string) => setQuoteIds(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const quote = products.filter(product => quoteIds.includes(product.id));

  return <>
    <motion.div className="scroll-line" style={{ scaleX: progress }} />
    <AnimatePresence>{intro && <StartupIphone onFinished={() => setIntro(false)} />}</AnimatePresence>
    <Header count={quoteIds.length} openList={() => setDrawer(true)} openMenu={() => setMenu(true)} />
    <main><Hero /><Benefits /><div className="marquee"><div><span>IPHONES • ANDROID • MACBOOK • IPAD • SMARTWATCH • MOBILIDADE ELÉTRICA •</span><span>IPHONES • ANDROID • MACBOOK • IPAD • SMARTWATCH • MOBILIDADE ELÉTRICA •</span></div></div><Catalog quote={quoteIds} toggle={toggle} showDetails={setSelected} /><Trade /><Experience /><Store /><FAQ /></main>
    <Footer />
    <a className="floating-whatsapp" href={whatsappUrl("Olá! Vim pelo site da TecnoShop Cerquilho.")} target="_blank"><Phone /><span>WhatsApp</span></a>
    <div className="mobile-bar"><a href="#produtos"><Search /><span>Produtos</span></a><button onClick={() => setDrawer(true)}><i><ShoppingBag />{quoteIds.length > 0 && <b>{quoteIds.length}</b>}</i><span>Minha lista</span></button><a href={whatsappUrl("Olá! Vim pelo site.")} target="_blank"><Phone /><span>WhatsApp</span></a></div>
    <AnimatePresence>{drawer && <Drawer quote={quote} close={() => setDrawer(false)} remove={toggle} />}{menu && <MobileMenu close={() => setMenu(false)} />}{selected && <ProductModal product={selected} selected={quoteIds.includes(selected.id)} close={() => setSelected(null)} toggle={() => toggle(selected.id)} />}</AnimatePresence>
  </>;
}
