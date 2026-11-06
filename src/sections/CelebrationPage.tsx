import { wedding } from '../receptionData';
import { CalendarControls } from '../components/GuestControls';
import { ScheduleBlock } from '../components/ScheduleBlock';

/** Reception combines the celebration and venue details into one continuous chapter. */
export function CelebrationPage({ id }: { id: 'reception' }) {
  const event = wedding.events[0];
  const venue = wedding.venues[0];
  const date = event.date.replace(/^(\w+), (\w+) (\d+), (\d+)$/, '$1, $3 $2 $4');
  return <article className={'book-event-page book-event-' + id + ' book-reception-chapter'}>
    <header><p className="book-label">The Reception</p><div className="book-chapter-divider" aria-hidden="true">✦</div><h2>An Evening to Celebrate</h2></header>
    <img className="reception-portrait-art" src="/images/celebration-reception.webp" alt="Watercolor portrait of Riya and Prashant in their reception outfits" width="900" height="1125" loading="eager" decoding="async"/>
    <ScheduleBlock date={date} time="6:00 PM" timeNote="Onwards · IST" extra="Followed by dinner"/>
    <section className="reception-venue" data-venue-details>
      <h3 tabIndex={-1}>{venue.name}</h3>
      <p className="reception-venue-city">Mira Road East, Thane</p>
      <img className="reception-venue-art" src="/images/venue-thane-watercolor.webp" alt="Watercolor illustration of Nova Banquet Hall" width="887" height="887" loading="lazy" decoding="async"/>
      <address data-scroll-detail>{venue.lines.map(line => <span key={line}>{line}<br/></span>)}</address>
      <div className="venue-actions">
        <a className="book-direction" href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(venue.query)} target="_blank" rel="noreferrer">Get directions ↗</a>
        <CalendarControls index={0}/>
      </div>
    </section>
  </article>;
}
