import { useMemo, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import projectBookDesign from './assets/project-book-design.webp';

const pageCount = 29;

const designNotes = [
  {
    title: '传统题材的现代编排',
    text: '以木版年画的民俗图像、刻印肌理和地域叙事为内容基础，通过错位版式、留白和高对比色块，让传统文化以更当代的方式被阅读。'
  },
  {
    title: '粉黑视觉记忆点',
    text: '洋红色作为主视觉情绪，黑白刻痕强化木版印刷的力度，使整本书在展览环境中拥有更强的识别度和视觉冲击。'
  },
  {
    title: '像展墙一样翻阅',
    text: '页面内容被组织成连续的图像流，读者可以从封面、工艺、图像资料到章节排版逐步进入木版年画的历史与美学语境。'
  }
];

function WoodblockPage() {
  const [readerOpen, setReaderOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const bookPages = useMemo(
    () => Array.from({ length: pageCount }, (_, index) => `/book-pages/page-${String(index + 1).padStart(2, '0')}.webp`),
    []
  );

  const flowingPages = useMemo(() => [...bookPages, ...bookPages.slice(0, 12)], [bookPages]);
  const cornerPages = useMemo(() => [...bookPages.slice(3, 11), ...bookPages.slice(16, 23)], [bookPages]);

  return (
    <main className="woodblock-page">
      <header className="case-nav shell">
        <a href="/#projects" className="case-back">
          <ArrowLeft size={18} />
          返回作品集
        </a>
        <span className="case-jump">Book Design</span>
      </header>

      <section className="woodblock-hero shell">
        <div className="woodblock-copy">
          <span>Editorial Design / Culture</span>
          <h1>《非遗木版年画》书籍设计</h1>
          <p>
            以中国非物质文化遗产木版年画为研究对象，将传统图像资料、手工刻印质感与当代书籍编排结合，
            形成一本兼具资料性、展览感和视觉实验性的文化书籍。
          </p>
          <div className="woodblock-notes">
            {designNotes.map((note, index) => (
              <article key={note.title}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="woodblock-book-section shell">
        <div className="woodblock-book-copy">
          <span>Click To View</span>
          <h2>点击书籍，展开真实内页</h2>
          <p>书页将以斜向流动的方式铺开，中心区域放大展示当前页面。</p>
        </div>
        <button className="woodblock-showcase" type="button" onClick={() => setReaderOpen(true)}>
          <img src={projectBookDesign} alt="非遗木版年画书籍设计封面" />
        </button>
      </section>

      {readerOpen && (
        <div className="book-reader-overlay" role="dialog" aria-modal="true" aria-label="非遗木版年画书籍内页浏览">
          <div className="book-flow" aria-hidden="true">
            <div className="book-flow-track">
              {flowingPages.map((page, index) => (
                <img src={page} alt="" key={`${page}-${index}`} />
              ))}
            </div>
          </div>
          <div className="book-corner-flow book-corner-flow-left" aria-hidden="true">
            {cornerPages.map((page, index) => (
              <img src={page} alt="" key={`left-${page}-${index}`} />
            ))}
          </div>
          <div className="book-corner-flow book-corner-flow-right" aria-hidden="true">
            {cornerPages.map((page, index) => (
              <img src={page} alt="" key={`right-${page}-${index}`} />
            ))}
          </div>

          <button className="book-reader-close" type="button" onClick={() => setReaderOpen(false)} aria-label="关闭书籍浏览">
            <X size={22} />
          </button>

          <div className="book-reader-stage">
            <div className="book-reader-main">
              <img src={bookPages[activePage]} alt={`非遗木版年画书籍内页 ${activePage + 1}`} />
            </div>
            <div className="book-reader-meta">
              <span>
                {String(activePage + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}
              </span>
              <strong>《非遗木版年画》真实书籍内页</strong>
              <p>以粉色版画笔触串联历史资料、民俗图像与版式实验，呈现传统木版语言在当代书籍设计中的再组织。</p>
            </div>
          </div>

          <div className="book-reader-strip" aria-label="书籍页面缩略图">
            {bookPages.map((page, index) => (
              <button
                className={activePage === index ? 'is-active' : ''}
                type="button"
                key={page}
                onClick={() => setActivePage(index)}
              >
                <img src={page} alt={`第 ${index + 1} 页`} />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default WoodblockPage;
