import { useEffect, useState } from 'react';
import { ArrowLeft, FileText, Image, Layers, Sparkles, X } from 'lucide-react';

const posters = Array.from({ length: 13 }, (_, index) => `/content-design/posters/poster-${String(index + 1).padStart(2, '0')}.webp`);
const posts = Array.from({ length: 2 }, (_, index) => `/content-design/posts/post-${String(index + 1).padStart(2, '0')}.webp`);
const details = Array.from({ length: 4 }, (_, index) => `/content-design/details/detail-${String(index + 1).padStart(2, '0')}.webp`);

const contentCategories = [
  {
    title: '详情页设计',
    count: '4P',
    icon: Layers,
    text: '围绕产品卖点、促销节奏和转化路径组织长图信息，适合电商详情页展示。'
  },
  {
    title: '推文长图',
    count: '2组',
    icon: FileText,
    text: '以社交平台阅读节奏为核心，兼顾封面吸引力、内容层级和浏览连续性。'
  },
  {
    title: '商业海报',
    count: '13张',
    icon: Image,
    text: '食品、活动与促销主题视觉，强调标题冲击力、产品主体和营销氛围。'
  }
];

function ContentDesignPage() {
  const [viewerImage, setViewerImage] = useState(null);

  useEffect(() => {
    if (!viewerImage) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setViewerImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [viewerImage]);

  return (
    <main className="content-page">
      <header className="case-nav shell content-nav">
        <a href="/#projects" className="case-back">
          <ArrowLeft size={18} />
          返回作品集
        </a>
        <span className="case-jump">Content / Poster</span>
      </header>

      <section className="content-hero shell">
        <div className="content-copy">
          <p className="section-kicker">Content Design / Poster System</p>
          <h1>
            详情页推文与海报
            <span>把卖点做成有节奏的视觉内容</span>
          </h1>
          <p>
            这一组作品聚焦商业内容设计，包含电商详情页、社交推文长图和活动海报。
            通过清晰的信息层级、强产品主体和高识别标题，让视觉既能吸引点击，也能承接转化。
          </p>
        </div>
        <div className="content-hero-stack" aria-hidden="true">
          <img src={posters[0]} alt="" />
          <img src={posters[7]} alt="" />
          <img src={details[0]} alt="" />
        </div>
      </section>

      <section className="content-category shell">
        {contentCategories.map(({ title, count, icon: Icon, text }, index) => (
          <article className="content-category-card" key={title} style={{ '--delay': `${0.18 + index * 0.12}s`, '--start-rotate': `${index % 2 === 0 ? -5 : 5}deg` }}>
            <Icon size={28} />
            <span>{count}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="content-showcase shell">
        <div className="type-section-title">
          <Sparkles size={22} />
          <span>详情页长图</span>
        </div>
        <div className="content-detail-grid">
          {details.map((image, index) => (
            <button
              className="content-detail-card"
              key={image}
              type="button"
              onClick={() => setViewerImage({ image, label: `详情页设计 ${index + 1}` })}
            >
              <img src={image} alt={`详情页设计 ${index + 1}`} />
              <span>Detail Page {String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="content-showcase shell">
        <div className="type-section-title">
          <FileText size={22} />
          <span>推文长图</span>
        </div>
        <div className="content-post-grid">
          {posts.map((image, index) => (
            <button
              className="content-post-card"
              key={image}
              type="button"
              onClick={() => setViewerImage({ image, label: `推文长图 ${index + 1}` })}
            >
              <img src={image} alt={`推文长图 ${index + 1}`} />
              <span>Article Visual {String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="content-showcase shell content-poster-section">
        <div className="type-section-title">
          <Image size={22} />
          <span>海报精选</span>
        </div>
        <div className="content-poster-grid">
          {posters.map((image, index) => (
            <article className="content-poster-card" key={image}>
              <img src={image} alt={`商业海报 ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>

      {viewerImage && (
        <div className="content-long-viewer" role="dialog" aria-modal="true" aria-label="完整长图预览" onClick={() => setViewerImage(null)}>
          <button className="content-viewer-close" type="button" onClick={() => setViewerImage(null)} aria-label="关闭完整长图">
            <X size={22} />
          </button>
          <div className="content-viewer-panel" onClick={(event) => event.stopPropagation()}>
            <div className="content-viewer-head">
              <span>{viewerImage.label}</span>
              <strong>完整长图预览</strong>
            </div>
            <img src={viewerImage.image} alt={viewerImage.label} />
          </div>
        </div>
      )}
    </main>
  );
}

export default ContentDesignPage;
