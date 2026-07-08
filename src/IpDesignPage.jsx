import { useState } from 'react';
import { ArrowLeft, BadgeCheck, Boxes, MessageCircle, Sparkles, Sticker } from 'lucide-react';

const turnarounds = ['/ip-design/ip-01.webp', '/ip-design/ip-02.webp'];
const merch = [
  { image: '/ip-design/ip-03.webp', title: '潮流鞋履贴图', text: '将 IP 视觉转化为可穿戴单品，保留滑板文化里的速度感和街头气质。' },
  { image: '/ip-design/ip-04.webp', title: 'T 恤延展', text: '用高识别头像与大色块形成服装正面视觉，适合活动周边和社群售卖。' },
  { image: '/ip-design/ip-05.webp', title: '帽子周边', text: '把角色符号压缩到更小面积，测试 IP 在低信息载体上的可识别性。' },
  { image: '/ip-design/ip-06.webp', title: '杯具应用', text: '用橙色与深蓝建立街头感，强化日常用品里的品牌陪伴感。' },
  { image: '/ip-design/ip-10.webp', title: '手环物料', text: '适合活动入场、潮流展会或城市打卡场景，增强参与感。' },
  { image: '/ip-design/ip-11.webp', title: '滑板应用', text: '回到角色的核心道具，让图形、故事和物料场景形成闭环。' }
];

const expressions = Array.from({ length: 6 }, (_, index) => `/ip-design/ip-${String(index + 14).padStart(2, '0')}.webp`);

const notes = [
  {
    icon: Sparkles,
    title: '角色关键词',
    text: '以“成都潮流文化”为背景，融合熊猫、滑板、耳机、街头服饰等元素，塑造外表可爱但性格张扬的城市潮流 IP。'
  },
  {
    icon: BadgeCheck,
    title: '识别策略',
    text: '深蓝外套、粉橙滑板、青色描边和夸张笑容形成第一记忆点，让角色在静态海报、表情包和周边中都能快速被识别。'
  },
  {
    icon: Boxes,
    title: '商业延展',
    text: '从角色设定到周边应用，重点验证 IP 在服装、杯具、滑板、贴纸等载体上的适配度，具备活动传播和文创售卖潜力。'
  }
];

function IpDesignPage() {
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const handleHeroMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setHeroTilt({ x: Number((x * 10).toFixed(2)), y: Number((-y * 8).toFixed(2)) });
  };

  return (
    <main className="ip-page">
      <header className="case-nav shell ip-nav">
        <a href="/#projects" className="case-back">
          <ArrowLeft size={18} />
          返回作品集
        </a>
        <span className="case-jump">IP Design</span>
      </header>

      <section className="ip-hero shell">
        <div className="ip-hero-copy">
          <p className="section-kicker">Character IP / Trendy Culture</p>
          <h1>
            潮流熊猫 IP 设计
            <span>Chengdu Trendy Culture</span>
          </h1>
          <p>
            这是一组以成都城市潮流文化为灵感的熊猫 IP 形象设计。角色保留熊猫的亲和力，
            同时加入滑板、耳机、宽松外套和夸张表情，让它更像一个会出现在街头、展会和社交表情里的年轻角色。
          </p>
          <div className="ip-tags">
            <span>Street Panda</span>
            <span>Skateboard</span>
            <span>Sticker Mood</span>
          </div>
        </div>
        <div
          className="ip-hero-visual"
          aria-label="潮流熊猫主形象"
          onMouseMove={handleHeroMove}
          onMouseLeave={() => setHeroTilt({ x: 0, y: 0 })}
          style={{ '--tilt-x': `${heroTilt.y}deg`, '--tilt-y': `${heroTilt.x}deg` }}
        >
          <span className="ip-skate-line" />
          <img src="/ip-design/ip-13.webp" alt="潮流熊猫 IP 主形象" />
        </div>
      </section>

      <nav className="ip-section-nav shell" aria-label="IP 页面分区导航">
        <a href="#ip-setting">设定</a>
        <a href="#ip-blueprint">三视图</a>
        <a href="#ip-expression">表情包</a>
        <a href="#ip-merch">周边</a>
      </nav>

      <section className="ip-notes shell" id="ip-setting">
        {notes.map(({ icon: Icon, title, text }, index) => (
          <article key={title} style={{ '--delay': `${0.18 + index * 0.12}s` }}>
            <Icon size={26} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="ip-turnaround shell" id="ip-blueprint">
        <div className="type-section-title">
          <Sticker size={22} />
          <span>角色设定与线稿</span>
        </div>
        <div className="ip-blueprint-grid">
          {turnarounds.map((image, index) => (
            <article key={image}>
              <img src={image} alt={`IP 三视图与线稿 ${index + 1}`} />
              <div>
                <strong>{index === 0 ? '三视图设定' : '线稿结构'}</strong>
                <p>{index === 0 ? '通过正面、侧面和背面统一服装廓形、耳机比例与角色体块，为后续动态和衍生物料提供标准。' : '用单色线稿提炼角色结构，让外套、耳机、面部和肢体比例在不同载体中保持稳定。'}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ip-expression shell" id="ip-expression">
        <div className="type-section-title">
          <MessageCircle size={22} />
          <span>表情包延展</span>
        </div>
        <div className="ip-expression-grid">
          {expressions.map((image, index) => (
            <article key={image} style={{ '--delay': `${0.14 + index * 0.08}s` }}>
              <img src={image} alt={`IP 表情包 ${index + 1}`} />
              <span>{['得意', '酷酷', '打招呼', '惊喜', '开心', '搞怪'][index]}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ip-merch shell" id="ip-merch">
        <div className="type-section-title">
          <Boxes size={22} />
          <span>周边应用系统</span>
        </div>
        <div className="ip-merch-grid">
          {merch.map(({ image, title, text }, index) => (
            <article key={title} style={{ '--delay': `${0.16 + index * 0.08}s`, '--start-rotate': `${index % 2 === 0 ? -4 : 4}deg` }}>
              <img src={image} alt={title} />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default IpDesignPage;
