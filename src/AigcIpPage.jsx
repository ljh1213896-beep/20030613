import { ArrowLeft, BadgeCheck, Boxes, Sparkles, Wand2 } from 'lucide-react';

const characters = [
  { name: '桃桃兔', role: 'Peach Bloom', image: '/aigc-ip/ip-01.webp', color: '#f5a7aa', text: '蜜桃与花瓣图案建立甜感记忆点，适合春季、礼盒和少女向视觉延展。' },
  { name: '薄荷可可', role: 'Mint Cookie', image: '/aigc-ip/ip-02.webp', color: '#90d7bd', text: '薄荷绿与巧克力滴落形成反差，可用于甜品、饮品和轻潮玩联名。' },
  { name: '星露露', role: 'Star Luloo', image: '/aigc-ip/ip-03.webp', color: '#b9b8ff', text: '星球、魔法棒和珠光渐变强化梦幻属性，适合夜光、盲盒隐藏款和主题海报。' },
  { name: '莓莓酱', role: 'Berry Jam', image: '/aigc-ip/ip-04.webp', color: '#f49abd', text: '莓果色和奶油质感突出柔软亲和力，让角色更适合社交表情和礼品卡面。' },
  { name: '奶盖泡泡', role: 'Cream Bubble', image: '/aigc-ip/ip-05.webp', color: '#f6d89f', text: '奶盖色底和泡泡装饰传递轻盈感，可延展为饮品包装与活动陈列。' },
  { name: '青柠豆豆', role: 'Lime Bean', image: '/aigc-ip/ip-06.webp', color: '#a9ddb0', text: '青柠色与豆豆图形形成清新辨识度，适合户外、市集和夏季视觉。' },
  { name: '樱花米米', role: 'Sakura Mimi', image: '/aigc-ip/ip-07.webp', color: '#f2a6c2', text: '樱花符号和柔粉色调增强温柔气质，适合节日限定和文创周边。' },
  { name: '月光糖', role: 'Moon Candy', image: '/aigc-ip/ip-08.webp', color: '#d8ccff', text: '月亮、星点与透明糖果质感组合，形成夜间主题的幻想系角色。' },
  { name: '焦糖比', role: 'Caramel Bee', image: '/aigc-ip/ip-09.webp', color: '#d8a46e', text: '焦糖色和小蜜蜂元素提升活泼感，适合亲子活动和甜品品牌衍生。' },
  { name: '蓝莓啵', role: 'Blueberry Pop', image: '/aigc-ip/ip-10.webp', color: '#8fc4f1', text: '蓝莓色、星眼和圆润体块组合，让角色更有收藏玩具的展示感。' },
  { name: '棉花云', role: 'Cotton Cloud', image: '/aigc-ip/ip-11.webp', color: '#f3dfef', text: '云朵纹样和柔软白色主体突出治愈属性，适合睡眠、香氛和生活方式视觉。' },
  { name: '芝士丸', role: 'Cheese Ball', image: '/aigc-ip/ip-12.webp', color: '#f3cf70', text: '奶黄色与圆角造型建立温暖食物联想，适合食品包装和主题快闪。' },
  { name: '葡萄冻', role: 'Grape Jelly', image: '/aigc-ip/ip-13.webp', color: '#b79be8', text: '紫色果冻感和透明高光营造收藏质感，适合盲盒系列中的梦幻款。' },
  { name: '杏仁萌', role: 'Almond Momo', image: '/aigc-ip/ip-14.webp', color: '#efd7bd', text: '杏仁奶油色让角色更温和，可作为系列中的基础款和品牌吉祥物。' },
  { name: '抹茶绒', role: 'Matcha Plush', image: '/aigc-ip/ip-15.webp', color: '#93c98a', text: '抹茶色与绒感质地适合做毛绒、贴纸和生活杂货方向的延展。' },
  { name: '柠檬啾', role: 'Lemon Chu', image: '/aigc-ip/ip-16.webp', color: '#f4dc6a', text: '明亮黄和小表情强调元气感，适合节庆、校园和轻运动场景。' },
  { name: '海盐贝贝', role: 'Sea Salt Baby', image: '/aigc-ip/ip-17.webp', color: '#94d4df', text: '海盐蓝和贝壳感高光带来清凉气质，可延展到夏季主题和旅行纪念品。' },
  { name: '奶油团', role: 'Creamy Tuan', image: '/aigc-ip/ip-18.webp', color: '#f4c9d2', text: '奶油粉与圆润体态强化亲和力，是系列中最适合做主视觉陪伴角色的基础形象。' }
];

const heroCharacters = characters.slice(0, 10);

const notes = [
  {
    icon: Sparkles,
    title: 'AIGC 衍生方式',
    text: '以已有 IP 形象作为参考原型，使用 AIGC 进行潮玩化风格转译，统一大头比例、透明釉面、高光质感和低饱和糖果色。'
  },
  {
    icon: BadgeCheck,
    title: '系列识别策略',
    text: '每个角色保留相同的兔耳轮廓和圆润体块，再用水果、星球、花瓣、奶油等局部符号区分性格，形成可扩展的系列系统。'
  },
  {
    icon: Boxes,
    title: '商业应用方向',
    text: '角色适合延展为盲盒、钥匙扣、贴纸、社交头像、活动海报和礼盒包装，用低成本视觉验证提高 IP 衍生开发效率。'
  }
];

function AigcIpPage() {
  return (
    <main className="aigc-ip-page">
      <header className="case-nav shell aigc-ip-nav">
        <a href="/aigc" className="case-back">
          <ArrowLeft size={18} />
          返回 AIGC 探索
        </a>
        <span className="case-jump">AIGC Toy IP</span>
      </header>

      <section className="aigc-ip-hero shell">
        <div className="aigc-ip-counter">1 / 18</div>
        <div className="aigc-ip-title">
          <p className="section-kicker">AIGC IP Derivative Design</p>
          <h1>AIGC 潮玩 IP 形象</h1>
          <p>
            以既有 IP 形象为参考基础，通过 AIGC 生成进行潮玩化、奶油化和系列化衍生，
            将单一角色语言扩展为可收藏、可传播、可商业落地的角色家族。
          </p>
        </div>

        <div className="aigc-ip-stage" aria-label="AIGC 潮玩角色集合">
          {heroCharacters.map((item, index) => (
            <img
              key={item.name}
              src={item.image}
              alt={item.name}
              loading={index < 6 ? 'eager' : 'lazy'}
              decoding="async"
              style={{ '--i': index, '--accent': item.color }}
            />
          ))}
        </div>

        <div className="aigc-ip-caption">
          <strong>AIGC IP DESIGN</strong>
          <span>/ DERIVATIVE TOY CHARACTER SYSTEM /</span>
          <small>FROM EXISTING IP REFERENCES TO COLLECTIBLE VISUAL VARIANTS</small>
        </div>
      </section>

      <section className="aigc-ip-notes shell">
        {notes.map(({ icon: Icon, title, text }, index) => (
          <article key={title} style={{ '--delay': `${0.18 + index * 0.12}s` }}>
            <Icon size={26} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="aigc-ip-gallery shell">
        <div className="type-section-title">
          <Wand2 size={22} />
          <span>角色命名与性格设定</span>
        </div>
        <div className="aigc-ip-grid">
          {characters.map((item, index) => (
            <article
              className="aigc-ip-card"
              key={item.name}
              style={{ '--accent': item.color, '--delay': `${0.16 + (index % 6) * 0.08}s`, '--start-rotate': `${index % 2 === 0 ? -4 : 4}deg` }}
            >
              <div className="aigc-ip-card-image">
                <img src={item.image.replace('.webp', '-sm.webp')} alt={item.name} loading="lazy" decoding="async" />
              </div>
              <div className="aigc-ip-card-copy">
                <span>{item.role}</span>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AigcIpPage;
