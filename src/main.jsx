import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Phone, MapPin, Sparkles, Palette, Boxes, PenTool, Wand2, BadgeCheck, Send } from 'lucide-react';
import './styles.css';
import ScrollFloat from './components/ScrollFloat';
import BipenggouPage from './BipenggouPage';
import WoodblockPage from './WoodblockPage';
import TypeDesignPage from './TypeDesignPage';
import AigcVisualPage from './AigcVisualPage';
import AigcHubPage from './AigcHubPage';
import ContentDesignPage from './ContentDesignPage';
import IpDesignPage from './IpDesignPage';
import portrait from './assets/portrait-new.png';
import projectOne from './assets/project-1.jpg';
import projectThree from './assets/project-3.jpg';
import projectFour from './assets/project-4.jpg';
import heroLoop from './assets/hero-loop.mp4';
import brandMascot from './assets/brand-mascot.png';
import heroArt from './assets/hero-art.png';
import bipenggouCover from './assets/bipenggou-cover.png';
import bipenggouProjectBg from './assets/bipenggou-project-bg.webp';
import projectBookDesign from './assets/project-book-design.webp';

const projects = [
  {
    title: '毕棚沟品牌全案设计',
    meta: 'Brand Identity / VI Manual',
    image: bipenggouProjectBg,
    desc: '独立完成 42P VI 手册，覆盖办公用品、外卖包装、员工制服等多场景应用。',
    tag: '42P VI',
    href: '/bipenggou',
    variant: 'bipenggou'
  },
  {
    title: '《非遗木版年画》书籍设计',
    meta: 'Editorial Design / Culture',
    image: projectBookDesign,
    desc: '入选学院艺术书籍优秀作品展，并入选两岸新锐设计竞赛华灿奖。',
    tag: '华灿奖',
    href: '/woodblock',
    variant: 'book'
  },
  {
    title: '中文字体设计精选',
    meta: 'Type Design / Lettering',
    image: '/type-design/type-08.png',
    desc: '围绕中文标题字、手写笔触和商业视觉标题展开，探索更有记忆点的字形表达。',
    tag: 'Type',
    href: '/typedesign',
    variant: 'type'
  },
  {
    title: 'AIGC 商业视觉探索',
    meta: 'AI Design / Campaign Visual',
    image: '/aigc-visual/cover.webp',
    desc: '结合 AIGC 工具、品牌视觉体系、包装设计与商业插画，提高概念验证效率。',
    tag: 'AIGC',
    href: '/aigc',
    variant: 'aigc'
  },
  {
    title: '详情页推文与海报',
    meta: 'Content Design / Poster System',
    image: '/content-design/posters/poster-01.webp',
    desc: '覆盖电商详情页、社交推文长图与商业海报，强调信息层级、产品卖点和内容转化。',
    tag: 'Content',
    href: '/contentdesign',
    variant: 'content'
  },
  {
    title: '潮流熊猫 IP 设计',
    meta: 'Character IP / Trendy Culture',
    image: '/ip-design/ip-13.webp',
    desc: '以成都潮流文化为背景，完成熊猫角色设定、表情包和周边应用延展。',
    tag: 'IP Design',
    href: '/ipdesign',
    variant: 'ip'
  }
];

const stats = [
  { value: '42P', label: '品牌 VI 手册' },
  { value: '30+', label: '客户订单' },
  { value: '2W+', label: '作品浏览量' },
  { value: '85+', label: '核心课程均分' }
];

const strengths = [
  {
    icon: Palette,
    title: '品牌视觉系统',
    text: '能从标志、字体、色彩到延展物料搭建完整品牌识别，兼顾可爱感与商业落地。'
  },
  {
    icon: Wand2,
    title: 'AI 设计工作流',
    text: '熟练使用 AIGC 工具进行创意生成、视觉提案和效率增强，适合快速探索多风格方向。'
  },
  {
    icon: Boxes,
    title: '包装与电商视觉',
    text: '具备包装设计、电商主图、活动物料与广告视觉经验，能处理多场景输出。'
  },
  {
    icon: PenTool,
    title: '书籍与文化创意',
    text: '有艺术书籍、非遗主题设计与展览入选经历，擅长把文化内容转成视觉叙事。'
  }
];

function BubbleField() {
  return (
    <div className="bubble-field" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}

function App() {
  const [isNavFloating, setIsNavFloating] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  const scrollToHomeSection = (hash) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ block: 'start' });
        }
      });
    });
  };

  useEffect(() => {
    const updateNav = () => {
      setIsNavFloating(window.scrollY > window.innerHeight * 0.82);
    };

    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);

    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, []);

  useEffect(() => {
    const updatePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });

    return () => window.removeEventListener('pointermove', updatePointer);
  }, []);

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', updatePath);

    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  useEffect(() => {
    const handleHomeAnchorClick = (event) => {
      const link = event.target.closest('a[href^="/#"]');
      if (!link) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || !url.hash) return;

      event.preventDefault();
      window.history.pushState({}, '', `${url.pathname}${url.hash}`);
      setPathname(url.pathname);
      scrollToHomeSection(url.hash);
    };

    document.addEventListener('click', handleHomeAnchorClick);

    return () => document.removeEventListener('click', handleHomeAnchorClick);
  }, []);

  useEffect(() => {
    if (pathname !== '/' || !window.location.hash) return undefined;

    const scrollToHash = () => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    };

    const frame = window.requestAnimationFrame(scrollToHash);
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [pathname]);

  if (pathname === '/bipenggou') {
    return <BipenggouPage />;
  }

  if (pathname === '/woodblock') {
    return <WoodblockPage />;
  }

  if (pathname === '/typedesign') {
    return <TypeDesignPage />;
  }

  if (pathname === '/aigcvisual') {
    return <AigcVisualPage />;
  }

  if (pathname === '/aigc') {
    return <AigcHubPage />;
  }

  if (pathname === '/contentdesign') {
    return <ContentDesignPage />;
  }

  if (pathname === '/ipdesign') {
    return <IpDesignPage />;
  }

  return (
    <main>
      <section className="hero" id="home">
        <img className="hero-art" src={heroArt} alt="" aria-hidden="true" />
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={heroLoop} type="video/mp4" />
        </video>
        <BubbleField />
        <div className="hero-glaze" />
        <nav className={`nav shell ${isNavFloating ? 'is-floating' : ''}`} aria-label="主导航">
          <a className="brand" href="#home" aria-label="回到首页">
            <img src={brandMascot} alt="" />
          </a>
          <div className="nav-links">
            <a href="#about">经历</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
            <a href="#contact">联系</a>
          </div>
          <a className="nav-cta" href="mailto:15503595248@163.com">
            <Mail size={18} />
            联系我
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={18} /> Visual / AI / Brand Designer</p>
            <h1>
              <span className="portfolio-word" aria-label="Portfolio">
                {['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((letter, index) => (
                  <span key={`${letter}-${index}`}>{letter}</span>
                ))}
              </span>
              <span>视觉与 AI 设计师</span>
            </h1>
            <p className="hero-title">用奶油感、低饱和糖果色与清晰品牌逻辑，做可爱但不幼稚的商业视觉。</p>
            <p className="hero-title-en">Creating soft, memorable brand visuals with AI-driven design thinking.</p>
            <div className="hero-showcase" aria-label="精选项目预览">
              <a className="showcase-card cover-card tilt-left" href="#projects" aria-label="跳转到精选项目">
                <img src={bipenggouCover} alt="" />
                <span className="cover-label">品牌全案手册</span>
                <strong className="cover-count">42P</strong>
              </a>
              <a className="showcase-card image-card tilt-soft" href="#projects">
                <img src={projectBookDesign} alt="" />
                <span>
                  <em>Book Design</em>
                  书籍设计
                </span>
              </a>
              <a className="showcase-card chart-card" href="#projects">
                <span>Type Design</span>
                <strong>字形</strong>
                <i />
              </a>
              <a className="showcase-card dark-card tilt-right" href="#projects">
                <span>AIGC</span>
                <strong>AI Design</strong>
                <small>Brand / Visual / C4D</small>
              </a>
              <a className="showcase-card dot-card" href="#projects">
                <Sparkles size={24} />
                <span>Portfolio</span>
              </a>
              <a className="showcase-card slim tilt-soft" href="tel:15503595248">
                <span>Contact</span>
                <strong>30+</strong>
                <small>客户订单</small>
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#about">Scroll Down</a>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell">
          <div className="about-panel about-editorial">
            <div className="about-grid">
              <div className="portrait-wrap">
                <div className="lanyard" aria-hidden="true" />
                <div className="portrait-frame">
                  <img src={portrait} alt="王智申头像" />
                </div>
                <div className="portrait-note">
                  <BadgeCheck size={20} />
                  <strong>王智申</strong>
                  <span>Wang Zhishen</span>
                </div>
                <div className="profile-lines">
                  <p><strong>视觉设计师</strong></p>
                  <p>Brand / AI / Visual</p>
                  <p>Chengdu, China</p>
                </div>
              </div>
              <div className="about-copy">
                <p className="section-kicker">/ 关于我</p>
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=45%"
                  scrollEnd="bottom bottom-=35%"
                  stagger={0.035}
                >
                  品牌、视觉、AI 设计，都是解决问题的方式。
                </ScrollFloat>
                <p>
                  我喜欢从真实需求出发做设计，把可爱的视觉语言和清晰的品牌逻辑结合起来。无论是品牌全案、电商视觉、文化创意，还是 AIGC 生成探索，我都希望作品不只是好看，而是能被记住、能被使用、能推动项目落地。
                </p>
                <p>
                  本科就读于四川工商学院视觉传达设计专业，熟练使用 Adobe Photoshop、Illustrator、C4D 与 AIGC 工具，能够完成品牌视觉体系、包装设计、电商主视觉、商业插画和三维建模等工作。
                </p>
                <div className="contact-list">
                  <a href="mailto:15503595248@163.com"><Mail size={18} />15503595248@163.com</a>
                  <a href="tel:15503595248"><Phone size={18} />15503595248</a>
                  <span><MapPin size={18} />成都</span>
                </div>
                <div className="about-timeline">
                  <div>
                    <strong>四川工商学院</strong>
                    <span>视觉传达设计 · 2022 - 2026</span>
                  </div>
                  <div>
                    <strong>成都悠乐玩星文化传播有限公司</strong>
                    <span>平面设计师 · 2025 - 至今</span>
                  </div>
                </div>
                <div className="stats-grid">
                  {stats.map((item) => (
                    <div className="stat-card" key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="section-heading">
            <p className="section-kicker">Selected Works</p>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=45%"
              scrollEnd="bottom bottom-=35%"
              stagger={0.045}
            >
              精选项目
            </ScrollFloat>
            <p>先用基础视觉占位搭出作品集节奏，后续可直接替换为真实项目截图、封面或动态展示。</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const CardTag = project.href ? 'a' : 'article';
              return (
              <CardTag className={`project-card ${project.variant ? `project-card-${project.variant}` : ''}`} key={project.title} href={project.href || undefined} aria-label={project.href ? `查看${project.title}` : undefined}>
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <span>{project.tag}</span>
                  <p>{project.meta}</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="shell">
          <div className="section-heading compact">
            <p className="section-kicker">Strengths</p>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=45%"
              scrollEnd="bottom bottom-=35%"
              stagger={0.045}
            >
              个人优势
            </ScrollFloat>
          </div>
          <div className="strength-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="strength-card" key={title}>
                <div className="icon-bubble"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-finale" id="contact">
        <BubbleField />
        <div className="shell finale-inner">
          <p className="section-kicker">Contact</p>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=45%"
            scrollEnd="bottom bottom-=35%"
            stagger={0.035}
          >
            一起做有记忆点的可爱品牌视觉。
          </ScrollFloat>
          <p>目前可沟通视觉设计师、AI 设计师、品牌设计师相关机会。</p>
          <div className="finale-actions">
            <a className="primary-button" href="mailto:15503595248@163.com">
              <Send size={20} />
              发送邮件
            </a>
            <a className="secondary-button light" href="tel:15503595248">
              <Phone size={18} />
              电话联系
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
