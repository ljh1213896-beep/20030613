import { ArrowLeft, Film, Image, Sparkles, Wand2 } from 'lucide-react';

const aigcCategories = [
  {
    title: 'AI 视频',
    meta: 'AI Video / Campaign Film',
    desc: '以“春日寻宝记”为主题，将角色设定、场景氛围和动态镜头结合成完整短片视觉。',
    image: '/aigc-visual/cover.webp',
    href: '/aigcvisual',
    icon: Film,
    status: '已完成'
  },
  {
    title: 'AI 插画',
    meta: 'AI Illustration / Key Visual',
    desc: '用于活动海报、社交传播和商业主视觉的插画方向探索，强调情绪、构图与品牌调性。',
    image: '/aigc-visual/mother.webp',
    icon: Image,
    status: '整理中'
  },
  {
    title: 'AIGC IP 形象',
    meta: 'Character Cover / IP Visual',
    desc: '围绕角色性格、服装色彩、三维比例与表情气质，建立可用于封面、活动与传播延展的 AIGC IP 形象。',
    image: '/aigc-visual/son.webp',
    icon: Sparkles,
    status: '精选'
  },
  {
    title: '正在探索',
    meta: 'Campaign Visual / Brand Content',
    desc: '持续尝试将 AIGC 生成结果转译为封面、短视频开屏、活动物料和品牌传播图，探索更稳定的商业落地方式。',
    image: '/aigc-visual/father.webp',
    icon: Wand2,
    status: '持续更新'
  }
];

function AigcHubPage() {
  return (
    <main className="aigc-hub-page">
      <header className="case-nav shell aigc-nav">
        <a href="/#projects" className="case-back">
          <ArrowLeft size={18} />
          返回作品集
        </a>
        <span className="case-jump">AIGC Works</span>
      </header>

      <section className="aigc-hub-hero shell">
        <div className="aigc-hub-copy">
          <p className="section-kicker">AI Design Collection</p>
          <h1>
            AIGC 项目合集
            <span>从视频、插画到商业视觉落地</span>
          </h1>
          <p>
            这里集中展示 AIGC 相关设计项目。不同类目对应不同使用场景：动态视频适合传播，
            AI 插画适合主视觉探索，角色封面适合 IP 与活动内容延展。
          </p>
        </div>
      </section>

      <section className="aigc-category-section shell">
        <div className="type-section-title">
          <Wand2 size={22} />
          <span>AI 设计类目</span>
        </div>
        <div className="aigc-category-grid">
          {aigcCategories.map(({ title, meta, desc, image, href, icon: Icon, status }, index) => {
            const CardTag = href ? 'a' : 'article';
            return (
              <CardTag
                className="aigc-category-card"
                href={href || undefined}
                key={title}
                style={{ '--delay': `${0.18 + index * 0.12}s`, '--start-rotate': `${index % 2 === 0 ? -7 : 7}deg` }}
              >
                <img src={image} alt={title} />
                <div className="aigc-category-body">
                  <div className="aigc-category-top">
                    <span><Icon size={18} /> {status}</span>
                    <small>{meta}</small>
                  </div>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
              </CardTag>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AigcHubPage;
