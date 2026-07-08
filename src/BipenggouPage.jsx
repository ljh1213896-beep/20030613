import React from 'react';
import { ArrowLeft, ArrowUpRight, Leaf, Mountain, Package, Palette, Sparkles } from 'lucide-react';
import ScrollFloat from './components/ScrollFloat';
import cover from './assets/bipenggou/cover.jpg';
import fullLogo from './assets/bipenggou/bipenggou-logo-full-transparent.png';
import fullWhiteLogo from './assets/bipenggou/bipenggou-logo-full-white.png';
import logoElements from './assets/bipenggou/logo-elements-custom.png';
import logoVariants from './assets/bipenggou/logo-variants-custom.png';
import ip2d from './assets/bipenggou/ip-2d-new.webp';
import ip3d from './assets/bipenggou/ip-3d-new.webp';
import appBus from './assets/bipenggou/applications/app-bus.webp';
import appStationAd from './assets/bipenggou/applications/app-station-ad.webp';
import appCards from './assets/bipenggou/applications/app-cards.webp';
import appCardWall from './assets/bipenggou/applications/app-card-wall.webp';
import appCups from './assets/bipenggou/applications/app-cups.webp';
import appTissue from './assets/bipenggou/applications/app-tissue.webp';
import appShirt from './assets/bipenggou/applications/app-shirt.webp';

const overview = [
  { label: '项目类型', value: '景区 VIS', icon: Mountain },
  { label: '设计方向', value: '文旅品牌 / 视觉识别', icon: Leaf },
  { label: '项目内容', value: 'Logo / 色彩 / IP / 应用', icon: Palette },
  { label: '关键词', value: '自然 / 生态 / 治愈', icon: Sparkles }
];

const logoCards = [
  {
    title: '主标识',
    image: fullLogo,
    text: '以山形笔触、手写中文和橙色圆点建立第一识别点，形成自然、松弛但有记忆度的景区标志。'
  },
  {
    title: '元素提取',
    image: logoElements,
    text: '将山峰、溪流、中文笔画和英文标准字拆解后重新组合，让标志推导过程更清晰。'
  },
  {
    title: '组合规范',
    image: logoVariants,
    text: '通过标准组合、墨稿和反白稿验证标识在不同背景与物料上的适配能力。'
  }
];

const logoAuditItems = [
  {
    type: 'mountain',
    title: '山形符号',
    text: '提取毕棚沟雪山轮廓，用连续折线形成标志上半部分的第一视觉识别。'
  },
  {
    type: 'valley',
    title: '溪谷弧线',
    text: '用弧线表现峡谷、水流和游客动线，让图形不只是山，也有景区空间感。'
  },
  {
    type: 'brush',
    title: '笔触肌理',
    text: '保留手写与飞白质感，强化自然、地域和文旅品牌的手作温度。'
  },
  {
    type: 'wordmark',
    title: '中英文字标',
    text: '中文“毕棚沟”和英文 Bipenggou Valley 形成完整名称组合，方便不同场景使用。'
  },
  {
    type: 'dot',
    title: '橙色记忆点',
    text: '橙色圆点作为视觉锚点，平衡绿色系统，也让标志在远看时更容易被记住。'
  }
];

function LogoAuditGraphic({ type }) {
  if (type === 'mountain') {
    return (
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path d="M14 58 42 30l14 14 20-24 30 38" />
        <path d="M42 30 61 49 76 20" />
      </svg>
    );
  }

  if (type === 'valley') {
    return (
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path d="M18 47c15 22 65 30 84 2" />
        <path d="M26 52c18 12 47 18 68 2" />
      </svg>
    );
  }

  if (type === 'brush') {
    return (
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path d="M58 20c-8 18-9 32-4 54" />
        <path d="M38 41c16 5 32 4 48-4" />
        <path d="M57 58c9 0 17 6 22 16" />
      </svg>
    );
  }

  if (type === 'wordmark') {
    return (
      <div className="audit-wordmark">
        <strong>毕棚沟</strong>
        <span>Bipenggou Valley</span>
      </div>
    );
  }

  return (
    <svg viewBox="0 0 120 92" aria-hidden="true" className="audit-dot-svg">
      <circle cx="60" cy="46" r="17" />
      <path d="M22 72c20-8 53-8 76 0" />
    </svg>
  );
}

const typeRows = [
  { label: '品牌常用中文字体', sample: '毕棚沟景区', note: 'Microsoft YaHei UI / 正文字体' },
  { label: '品牌常用英文字体', sample: 'Bipenggou Valley', note: 'Arial Rounded MT Bold / 标题组合' },
  { label: '品牌口号基础形态', sample: '山水有灵，四季予诗。', note: '用于宣传语、导视标题和延展物料' }
];

function TypeSpecGraphic() {
  return (
    <svg className="type-spec-vector" viewBox="0 0 560 330" aria-hidden="true">
      <path className="type-mountain" d="M42 80 88 34l26 28 36-42 58 60" />
      <path className="type-valley" d="M60 104c35 48 146 50 184 0" />
      <path className="type-brush" d="M132 85c-13 36-14 72-5 124" />
      <circle className="type-dot" cx="218" cy="145" r="15" />
      <text x="302" y="86" className="type-en-main">Bipenggou</text>
      <text x="302" y="123" className="type-en-main">Valley</text>
      <text x="302" y="205" className="type-cn-main">毕棚沟</text>
      <text x="42" y="282" className="type-slogan">山水有灵，四季予诗。</text>
      <text x="42" y="306" className="type-slogan-en">Mountains Breathe, Waters Pulse - Seasons Rhyme with Time.</text>
    </svg>
  );
}

function ColorSystemVector() {
  return (
    <div className="color-system-vector" aria-label="毕棚沟标准色与撞色搭配示意">
      <div className="color-chart-block">
        <svg className="color-donut" viewBox="0 0 320 260" role="img">
          <circle className="donut-base" cx="130" cy="130" r="78" />
          <circle className="donut-segment segment-main" cx="130" cy="130" r="92" />
          <circle className="donut-segment segment-light" cx="130" cy="130" r="92" />
          <circle className="donut-segment segment-deep" cx="130" cy="130" r="92" />
          <circle className="donut-hole" cx="130" cy="130" r="58" />
          <path className="color-guide" d="M214 70h18" />
          <path className="color-guide" d="M216 132h16" />
          <path className="color-guide" d="M196 205h36" />
          <rect className="color-chip chip-main" x="240" y="53" width="15" height="15" rx="4" />
          <rect className="color-chip chip-deep" x="240" y="115" width="15" height="15" rx="4" />
          <rect className="color-chip chip-light" x="240" y="188" width="15" height="15" rx="4" />
          <text className="color-label" x="263" y="60">标准绿</text>
          <text className="color-value" x="263" y="77">C70 M19 Y100 K0</text>
          <text className="color-value" x="263" y="91">#47A136</text>
          <text className="color-label" x="263" y="122">深绿</text>
          <text className="color-value" x="263" y="139">C77 M37 Y100 K32</text>
          <text className="color-value" x="263" y="153">#0B6E10</text>
          <text className="color-label" x="263" y="195">浅绿</text>
          <text className="color-value" x="263" y="212">C31 M9 Y38 K0</text>
          <text className="color-value" x="263" y="226">#B9D9AE</text>
        </svg>
        <span>标准色及辅助色</span>
      </div>
      <div className="color-chart-block">
        <svg className="color-collision" viewBox="0 0 320 260" role="img">
          <clipPath id="collision-left">
            <rect x="30" y="30" width="100" height="200" />
          </clipPath>
          <clipPath id="collision-right">
            <rect x="130" y="30" width="100" height="200" />
          </clipPath>
          <circle cx="130" cy="130" r="100" fill="#47A136" clipPath="url(#collision-left)" />
          <circle cx="130" cy="130" r="100" fill="#EB6946" clipPath="url(#collision-right)" />
          <line x1="130" y1="30" x2="130" y2="230" />
          <path className="color-guide" d="M212 88h20" />
          <path className="color-guide" d="M212 172h20" />
          <rect className="color-chip chip-main" x="240" y="72" width="15" height="15" rx="4" />
          <rect className="color-chip chip-orange" x="240" y="156" width="15" height="15" rx="4" />
          <text className="color-label" x="263" y="79">主色</text>
          <text className="color-value" x="263" y="96">C70 M19 Y100 K0</text>
          <text className="color-value" x="263" y="110">#47A136</text>
          <text className="color-label" x="263" y="163">点睛色</text>
          <text className="color-value" x="263" y="180">C9 M72 Y71 K0</text>
          <text className="color-value" x="263" y="194">#EB6946</text>
        </svg>
        <span>撞色搭配</span>
      </div>
    </div>
  );
}

const applications = [
  { title: '旅游巴士车体', image: appBus, wide: true, text: '将绿色、黄色与橙色流线应用在车身上，形成移动场景中的强识别传播面。' },
  { title: '站厅欢迎广告', image: appStationAd, wide: true, text: '以雪山湖泊风景图作为主体，搭配品牌 Logo 与欢迎语，适合入口、站厅和游客中心投放。' },
  { title: '办公卡片系统', image: appCards, text: '名片与卡片物料延续绿色主色和山形纹样，让基础办公触点保持统一。' },
  { title: '卡片阵列延展', image: appCardWall, text: '通过重复排布展示品牌系统的稳定性，适合办公用品、票卡和会员卡延展。' },
  { title: '透明水杯应用', image: appCups, text: '透明杯身突出绿色 Logo，轻量、干净，适合景区饮品与游客休闲消费场景。' },
  { title: '纸巾盒包装', image: appTissue, text: '以品牌口号和 Logo 作为包装视觉核心，形成清爽、实用的服务触点。' },
  { title: '文创 T 恤', image: appShirt, text: '深蓝衣身承载绿色标识，适合作为景区纪念品、工作人员服装或活动周边。' },
  { title: '更多效果敬请期待', pending: true, text: '后续将继续延展门票、导视、包装、社交传播和更多文旅触点。' }
];

function ApplicationTeaserGraphic() {
  return (
    <svg className="application-teaser-graphic" viewBox="0 0 320 220" aria-hidden="true">
      <path className="teaser-mountain" d="M42 82 86 38l28 31 43-49 74 72" />
      <path className="teaser-ribbon ribbon-a" d="M18 158c58-44 122-46 198-10 32 15 60 18 88 3" />
      <path className="teaser-ribbon ribbon-b" d="M26 184c72-25 132-20 190 12 30 16 55 15 82 1" />
      <circle className="teaser-dot" cx="250" cy="86" r="16" />
      <rect className="teaser-card card-a" x="62" y="108" width="72" height="46" rx="12" />
      <rect className="teaser-card card-b" x="154" y="104" width="88" height="56" rx="14" />
      <path className="teaser-spark" d="M262 132v26M249 145h26" />
      <path className="teaser-spark small" d="M108 176v18M99 185h18" />
    </svg>
  );
}

function BipenggouPage() {
  return (
    <main className="case-page bipenggou-page">
      <header className="case-nav shell">
        <a href="/#projects" className="case-back">
          <ArrowLeft size={18} />
          返回作品集
        </a>
        <a href="#applications" className="case-jump">
          看应用落地
          <ArrowUpRight size={18} />
        </a>
      </header>

      <section className="case-hero">
        <div className="shell case-hero-grid">
          <div className="case-hero-copy">
            <p className="case-kicker">Bipenggou Brand Visual Identity System</p>
            <h1>毕棚沟景区品牌视觉识别系统</h1>
            <p>
              以山水生态与地域文化为灵感，构建具有自然感、识别度和延展性的景区品牌视觉系统。
            </p>
          </div>
          <div className="case-hero-media">
            <img src={cover} alt="毕棚沟 VIS 项目封面" />
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="shell overview-grid">
          {overview.map(({ label, value, icon: Icon }) => (
            <article className="overview-card" key={label}>
              <Icon size={24} />
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section concept-section">
        <div className="shell concept-grid">
          <div>
            <p className="case-kicker">Concept</p>
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=45%" scrollEnd="bottom bottom-=35%" stagger={0.035}>
              从自然山水中提取品牌记忆点
            </ScrollFloat>
            <p>
              本设计以毕棚沟的山水景观、生态文化和自然意境为灵感，提取山峰、湖泊、溪流等视觉元素，结合手写字体与笔触肌理，形成具有地域识别度和自然亲和力的品牌形象。
            </p>
          </div>
          <figure className="case-visual-card">
            <img src={fullWhiteLogo} alt="毕棚沟主 Logo 完整图形" />
            <figcaption>
              <strong>主 Logo</strong>
              <span>山形笔触、手写文字与橙色圆点组成视觉核心。</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section">
        <div className="shell">
          <div className="case-heading">
            <p className="case-kicker">Logo System</p>
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=45%" scrollEnd="bottom bottom-=35%" stagger={0.04}>
              Logo 制作逻辑
            </ScrollFloat>
            <p>从山峰、湖水、笔触、中文字体和橙色圆点拆解标志元素，让规范页转化成可阅读的视觉流程。</p>
          </div>
          <div className="logo-process-grid">
            {logoCards.map((item) => (
              <article className="explained-card" key={item.title}>
                <div className="explained-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="explained-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="logo-audit-panel">
            <div className="logo-audit-head">
              <span>5-point self check</span>
              <h3>Logo 拆解</h3>
              <p>从山形笔触、溪谷弧线、中文书写与橙色圆点中拆解视觉记忆点，呈现标志从地域意象到品牌符号的生成逻辑。</p>
            </div>
            <div className="logo-audit-grid">
              {logoAuditItems.map((item, index) => (
                <article className="logo-audit-item" key={item.title}>
                  <div className="audit-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="audit-graphic">
                    <LogoAuditGraphic type={item.type} />
                  </div>
                  <div className="audit-copy">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section typography-section">
        <div className="shell typography-grid">
          <div className="typography-showcase">
            <div className="typography-card">
              <TypeSpecGraphic />
            </div>
            <div className="typography-note">
              <strong>品牌 Logo 专用字体</strong>
              <span>以手写中文、圆角英文和自然笔触建立文旅品牌的温度感。</span>
            </div>
          </div>
          <div className="typography-copy">
            <p className="case-kicker">Typography</p>
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=45%" scrollEnd="bottom bottom-=35%" stagger={0.04}>
              标准字体与口号规范
            </ScrollFloat>
            <p>
              在 Logo 识别之外，补充品牌常用中文、英文和口号字体规范，让后续导视、宣传物料和文创延展保持统一。
            </p>
            <div className="type-rule-list">
              {typeRows.map((row) => (
                <article className="type-rule-card" key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.sample}</strong>
                  <p>{row.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section visual-rules-section">
        <div className="shell visual-rules-grid">
          <div className="color-story">
            <p className="case-kicker">Visual Rules</p>
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=45%" scrollEnd="bottom bottom-=35%" stagger={0.04}>
              色彩与字体系统
            </ScrollFloat>
            <p>
              以生态绿作为主视觉记忆，搭配深绿、浅绿和橙色点睛符号，形成清新、自然、可延展的景区品牌气质。
            </p>
            <div className="color-swatches">
              <span style={{ '--swatch': '#3f9c35' }}>生态绿</span>
              <span style={{ '--swatch': '#0f6a10' }}>深绿</span>
              <span style={{ '--swatch': '#b6d8a7' }}>浅绿</span>
              <span style={{ '--swatch': '#ef5b2f' }}>橙色点睛</span>
            </div>
          </div>
          <figure className="case-visual-card">
            <ColorSystemVector />
            <figcaption>
              <strong>色彩关系</strong>
              <span>绿色为主系统，橙色只作为局部点睛，避免画面过于嘈杂。</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section ip-section">
        <div className="shell">
          <div className="case-heading centered">
            <p className="case-kicker">IP Design</p>
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=45%" scrollEnd="bottom bottom-=35%" stagger={0.04}>
              让景区形象更有亲和力
            </ScrollFloat>
            <p>结合雪山、森林、鹿角与冰雪等自然意象，塑造具有记忆点和传播性的景区 IP 形象。</p>
          </div>
          <div className="ip-grid">
            <figure className="case-visual-card">
              <img src={ip2d} alt="毕棚沟二维 IP 形象" />
              <figcaption>
                <strong>二维形象设定</strong>
                <span>保留鹿角、冰雪和森林意象，强化亲和力。</span>
              </figcaption>
            </figure>
            <figure className="case-visual-card">
              <img src={ip3d} alt="毕棚沟三维 IP 形象" />
              <figcaption>
                <strong>三维角色延展</strong>
                <span>用于后续文创、导览、宣传和社交传播场景。</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="case-section" id="applications">
        <div className="shell">
          <div className="case-heading">
            <p className="case-kicker">Applications</p>
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=45%" scrollEnd="bottom bottom-=35%" stagger={0.04}>
              应用系统分类展示
            </ScrollFloat>
            <p>围绕交通、广告、办公物料、日用品和文创服饰展开应用延展，展示品牌视觉在真实触点中的落地效果。</p>
          </div>
          <div className="application-grid">
            {applications.map((item) => (
              <article className={`application-card ${item.wide ? 'wide' : ''} ${item.pending ? 'teaser' : ''}`} key={item.title}>
                <div className="application-visual">
                  {item.pending ? <ApplicationTeaserGraphic /> : <img src={item.image} alt={item.title} />}
                </div>
                <div className="application-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-summary">
        <div className="shell summary-inner">
          <Package size={34} />
          <h2>通过统一的视觉符号、自然色彩系统与多场景应用延展，构建具有生态感、地域感与传播性的文旅品牌系统。</h2>
          <div className="summary-actions">
            <a href="/#projects" className="case-back">返回作品集</a>
            <a href="/#projects" className="case-jump">查看其它项目</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BipenggouPage;
