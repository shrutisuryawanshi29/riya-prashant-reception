import { wedding as w } from '../receptionData';
import { moments } from '../data/moments';
import { WeddingCountdown } from '../components/WeddingCountdown';
import { ScheduleBlock } from '../components/ScheduleBlock';

function ChapterHeading({ number, title, subtitle }: {number:string; title:string; subtitle?:string}) {
  return <header className="book-new-heading"><p className="book-label">{number}</p><div className="book-chapter-divider" aria-hidden="true">✦</div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</header>;
}

export function PlacesChapter() {
 const cities = [ ['Mumbai','Riya’s beginnings','mumbai'], ['Nagpur','Prashant’s beginnings','nagpur'], ['San Francisco','Our next chapter','california'] ];
 return <article className="book-new-chapter book-places"><ChapterHeading number="Bonus chapter two" title="Three Places, One Forever" subtitle="Different cities. Shared dreams. A lifetime together."/><div className="book-city-list">{cities.map(([name, caption, image]) => <figure key={name}><img src={'/images/three-places-'+image+'.webp'} loading="lazy" width="500" height="500" alt={'Watercolor illustration of '+name}/><figcaption><h3>{name}</h3><p>{caption}</p></figcaption></figure>)}</div></article>;
}

export function MomentsChapter() {
 const [featured, first, second, third, ...more] = moments;
 return <article className="book-new-chapter book-moments scrapbook">
   <svg className="scrapbook-botanical" viewBox="0 0 80 135" aria-hidden="true" fill="none"><path d="M6 130Q23 85 57 9M17 98Q3 87 8 74Q24 79 22 90M28 76Q17 62 24 51Q38 59 33 68M38 55Q31 41 39 30Q49 39 44 47M49 33Q45 20 54 12Q61 20 55 28" stroke="currentColor" strokeWidth="1.2"/><circle cx="57" cy="9" r="3" fill="currentColor"/><circle cx="25" cy="51" r="2.5" fill="currentColor"/><circle cx="8" cy="74" r="2.5" fill="currentColor"/></svg>
   <ChapterHeading number="Chapter one" title="Our Moments" subtitle="A few frames from our story."/>
   <div className="scrapbook-composition">
     <figure className="scrapbook-featured"><div className="scrapbook-paper"><img src={featured.src} alt={featured.alt} width={featured.width} height={featured.height} decoding="async" /></div><figcaption className="scrapbook-note">Some moments say everything without a word.<span aria-hidden="true"> ♡</span></figcaption></figure>
     <div className="scrapbook-collage">
       <figure className="scrapbook-memory scrapbook-memory-a"><img src={first.src} alt={first.alt} width={first.width} height={first.height} loading="lazy" decoding="async"/><figcaption>A little moment,<br/>a lot of love. <span aria-hidden="true">♡</span></figcaption></figure>
       <figure className="scrapbook-memory scrapbook-memory-b"><img src={second.src} alt={second.alt} width={second.width} height={second.height} loading="lazy" decoding="async"/><figcaption>Different places,<br/>same us. <span aria-hidden="true">♡</span></figcaption></figure>
       <figure className="scrapbook-memory scrapbook-memory-c"><img src={third.src} alt={third.alt} width={third.width} height={third.height} loading="lazy" decoding="async"/><figcaption>A memory to hold close.</figcaption></figure>
     </div>
     <div className="scrapbook-continued" aria-label="More photographs">{more.map((photo,i)=><figure className={'scrapbook-extra scrapbook-extra-'+i} key={photo.src}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/>{i===2 && <figcaption>A little more of our story. <span aria-hidden="true">♡</span></figcaption>}</figure>)}</div>
   </div>
 </article>;
}

export function ReceptionInvitationChapter() {
 return <article className="book-new-chapter book-invitation"><ChapterHeading number="Chapter two" title="Our Invitation" subtitle="A celebration of love and togetherness"/><div className="book-family"><p>{w.invocations[0]}<br/>{w.invocations[1]}</p><p>With the blessings of<br/><strong>{w.grandparents}</strong></p><p>Together with our families, we joyfully invite you to celebrate our <strong>wedding reception</strong>.</p><h3>{w.couple.bride}</h3><p>Daughter of<br/><strong>{w.parents.bride}</strong></p><h3>{w.couple.groom}</h3><p>Son of<br/><strong>{w.parents.groom}</strong></p></div></article>;
}
export function InvitationChapter() {
 return <article className="book-new-chapter book-invitation"><ChapterHeading number="Chapter three" title="Until We Celebrate" subtitle="A moment we have been waiting for"/><WeddingCountdown/><ScheduleBlock date="Sunday, 6 December 2026" time="6:00 PM" timeNote="Onwards · IST" extra="Followed by dinner"/><p>With the love and blessings of our families, we joyfully invite you to celebrate our <strong>wedding reception</strong>.</p><img className="book-invitation-logo" src="/images/wedding-logo-blended.webp" alt="Prashant and Riya wedding logo" width="768" height="768" loading="lazy" decoding="async"/></article>;
}

export function EpilogueChapter() {
 return <article className="book-new-chapter book-epilogue unified-epilogue">
  <ChapterHeading number="Epilogue" title="Our Story, Our Forever" subtitle="The little things, the places that matter, and all that lies ahead."/>
  <img className="epilogue-moments-art" src="/images/epilogue-interests.webp" alt="Watercolor of badminton, chai, books, music and the moon" width="900" height="900" loading="lazy" decoding="async"/>
  <p className="epilogue-story-copy">From badminton rallies to chai, books, music, and moonlight, the little things have made our story uniquely ours.</p>
  <img className="epilogue-places-art" src="/images/epilogue-places.webp" alt="Watercolor landmarks representing Mumbai, Nagpur and San Francisco" width="1400" height="467" loading="lazy" decoding="async"/>
  <div className="epilogue-places-caption"><p>Mumbai <span aria-hidden="true">·</span> Nagpur <span aria-hidden="true">·</span> San Francisco</p><p>Three Cities. One Forever.</p></div>
  <img className="book-epilogue-art" src="/images/epilogue-california-watercolor.webp" alt="Watercolor of a couple looking toward the Golden Gate Bridge at sunset" width="890" height="527" loading="lazy" decoding="async"/>
  <p className="book-signature">Riya <span>&amp;</span> Prashant</p><div className="book-epilogue-divider" aria-hidden="true">✦</div><p className="book-blessing">With Love &amp; Blessings</p><p>Kalburgi &amp; Mahant Families</p><p className="book-gifts">Presents Only in Blessings</p>
 </article>;
}
