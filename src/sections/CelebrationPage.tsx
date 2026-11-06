import { wedding } from '../receptionData';
import { CalendarControls } from '../components/GuestControls';
import { ScheduleBlock } from '../components/ScheduleBlock';

/** Reception retains the approved celebration artwork and scrolling layout. */
export function CelebrationPage({ id }: { id: 'reception' }) {
  const event = wedding.events[0];
  const venue = wedding.venues[0];
  const date = event.date.replace(/^(\w+), (\w+) (\d+), (\d+)$/, '$1, $3 $2 $4');
  return <article className={'book-event-page book-event-'+id}>
    <header><p className="book-label">Our Wedding Reception</p><div className="book-chapter-divider" aria-hidden="true">✦</div><h2>Reception</h2></header>
    <ScheduleBlock date={date} time="6:00 PM" timeNote="Onwards · IST" extra="Followed by dinner"/>
    <img className="celebration-art" src="/images/celebration-reception.webp" alt="Watercolor illustration for Reception" width="900" height="1125" loading="eager" decoding="async"/>
    <div className="celebration-details"><div className="celebration-venues" data-venue-details><section className="celebration-venue"><h3 tabIndex={-1}>Nova Banquet Hall</h3><p>Building No. 4</p><p>Mira Road East, Thane</p><a className="book-direction celebration-direction" href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(venue.query)} target="_blank" rel="noreferrer">Get directions ↗</a></section></div><CalendarControls index={0}/></div>
  </article>;
}
