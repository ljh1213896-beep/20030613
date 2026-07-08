import { useMemo } from 'react';
import { ArrowLeft, PenTool, Sparkles } from 'lucide-react';

const typeCount = 10;

const typeNotes = [
  {
    title: '手写笔触',
    text: '保留毛笔与手绘线条的速度感，让字体不只是信息载体，也成为画面里的情绪主体。'
  },
  {
    title: '字形节奏',
    text: '通过粗细对比、重心错落和笔画延展，建立更有识别度的标题字结构。'
  },
  {
    title: '商业适配',
    text: '字体可以延展到海报、包装、社交传播与品牌活动标题中，形成统一但不呆板的视觉记忆。'
  }
];

function TypeDesignPage() {
  const typeImages = useMemo(
    () => Array.from({ length: typeCount }, (_, index) => `/type-design/type-${String(index + 1).padStart(2, '0')}.png`),
    []
  );

  return (
    <main className="type-page">
      <header className="case-nav shell type-nav">
        <a href="/#projects" className="case-back">
          <ArrowLeft size={18} />
          返回作品集
        </a>
        <span className="case-jump">Type Design</span>
      </header>

      <section className="type-hero shell">
        <div className="type-hero-copy">
          <p className="section-kicker">Selected Type Works</p>
          <h1>
            字体设计
            <span>Type Design</span>
          </h1>
          <p>
            一组围绕中文标题字、手写笔触和商业视觉延展展开的字体设计练习。用更有性格的字形，
            为作品建立第一眼就能被记住的视觉入口。
          </p>
        </div>
        <div className="type-hero-board" aria-hidden="true">
          <img src={typeImages[7]} alt="" />
          <img src={typeImages[4]} alt="" />
          <img src={typeImages[9]} alt="" />
        </div>
      </section>

      <section className="type-marquee" aria-label="字体设计横向展示">
        <div className="type-marquee-track">
          {[...typeImages, ...typeImages].map((image, index) => (
            <img src={image} alt="" key={`${image}-${index}`} />
          ))}
        </div>
      </section>

      <section className="type-gallery shell">
        <div className="type-section-title">
          <Sparkles size={22} />
          <span>字形精选</span>
        </div>
        <div className="type-grid">
          {typeImages.map((image, index) => (
            <article className="type-work-card" key={image}>
              <img src={image} alt={`字体设计作品 ${index + 1}`} />
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{index % 2 === 0 ? '标题字实验' : '手写字形探索'}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="type-process shell">
        <div className="type-section-title">
          <PenTool size={22} />
          <span>设计语言</span>
        </div>
        <div className="type-note-grid">
          {typeNotes.map((note, index) => (
            <article key={note.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{note.title}</h2>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TypeDesignPage;
