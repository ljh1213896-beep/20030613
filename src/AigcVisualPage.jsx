import { ArrowLeft, Film, Sparkles, Wand2 } from 'lucide-react';

const roles = [
  {
    name: 'Father',
    title: '探险爸爸',
    image: '/aigc-visual/father.webp',
    text: '温暖、可靠的陪伴型角色，负责建立家庭出游的安全感。'
  },
  {
    name: 'Mother',
    title: '记录妈妈',
    image: '/aigc-visual/mother.webp',
    text: '以相机和轻户外造型强化记录感，让画面更有生活方式属性。'
  },
  {
    name: 'Son',
    title: '寻宝小队长',
    image: '/aigc-visual/son.webp',
    text: '作为视觉中心承接故事情绪，用表情和动作带出亲子探索主题。'
  }
];

const process = [
  '角色设定：统一亲子探险主题、服装色彩和三维软萌比例。',
  '视频生成：围绕“春日寻宝记”构建轻剧情节奏和镜头氛围。',
  '商业封面：用明亮天空、草地和手绘辅助图形增强传播记忆点。'
];

function AigcVisualPage() {
  return (
    <main className="aigc-page">
      <header className="case-nav shell aigc-nav">
        <a href="/aigc" className="case-back">
          <ArrowLeft size={18} />
          返回 AIGC 探索
        </a>
        <span className="case-jump">AIGC Campaign</span>
      </header>

      <section className="aigc-hero shell">
        <div className="aigc-copy">
          <p className="section-kicker">AI Design / Campaign Visual</p>
          <h1>
            AIGC 商业视觉探索
            <span>春日寻宝记</span>
          </h1>
          <p>
            以亲子户外探险为主题，结合 AIGC 视频生成、角色设定和商业封面设计，
            构建一组适合活动传播、短视频开屏和品牌内容营销的视觉样片。
          </p>
          <div className="aigc-tags">
            <span><Wand2 size={16} /> AI Video</span>
            <span><Film size={16} /> Campaign Visual</span>
            <span><Sparkles size={16} /> Character Cover</span>
          </div>
        </div>
        <div className="aigc-video-frame">
          <video src="/aigc-visual/spring-family.mp4" poster="/aigc-visual/cover.webp" autoPlay muted loop playsInline />
        </div>
      </section>

      <section className="aigc-cover-show shell">
        <img src="/aigc-visual/cover.webp" alt="春日寻宝记 AIGC 商业视觉封面" />
        <div>
          <span>Campaign Cover</span>
          <h2>用角色、场景和手绘线索建立完整活动氛围。</h2>
          <p>封面以一家三口为主视觉，结合地图、指南针、背包和宝箱等线索图形，形成轻松、明亮、适合亲子品牌传播的视觉入口。</p>
        </div>
      </section>

      <section className="aigc-role-section shell">
        <div className="type-section-title">
          <Sparkles size={22} />
          <span>角色封面设定</span>
        </div>
        <div className="aigc-role-grid">
          {roles.map((role) => (
            <article className="aigc-role-card" key={role.name}>
              <img src={role.image} alt={role.title} />
              <div>
                <span>{role.name}</span>
                <h2>{role.title}</h2>
                <p>{role.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="aigc-process shell">
        <div className="type-section-title">
          <Wand2 size={22} />
          <span>创作流程</span>
        </div>
        <div className="aigc-process-grid">
          {process.map((item, index) => (
            <article key={item}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AigcVisualPage;
