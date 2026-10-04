const trips = [
  {
    id:'zanzibar', name:'Zanzibar', tag:'Best 5-night island feel', filters:['five','luxury','adventure'],
    nights:5, dates:'1–6 Mar 2027', total:2021, flights:1100, hotelPrice:921,
    hotel:'Nungwi Dreams by Mantis', stars:'5-star · 8.2/10',
    mood:'White sand · dhow sunsets · Stone Town',
    hotelPhotos:[1,2,3,4,5].map(n=>`./assets/hotels/zanzibar/0${n}.jpg`),
    activities:[
      {name:'Sunset dhow',src:'./assets/activities/zanzibar-dhow.jpg'},
      {name:'Beach quad bikes',src:'./assets/activities/zanzibar-quad.jpg'},
      {name:'Stone Town + islands',src:'./assets/activities/zanzibar-stonetown.jpg'}
    ],
    entry:'Visa + mandatory local inbound insurance.',
    flightUrl:'https://skyscanner.net/g/referrals/v1/flights/day-view?mediaPartnerId=2850210&utm_term=skyscanner_chatgpt_mcp_app&origin=LON&destination=ZNZ&outboundDate=2027-03-01&cabinclass=economy&inboundDate=2027-03-06&locale=en-GB&currency=GBP&market=UK',
    hotelUrl:'https://www.booking.com/hotel/tz/nungwi-dreams.html?aid=2438770&checkin=2027-03-01&checkout=2027-03-06&no_rooms=1&group_adults=2&selected_currency=GBP'
  },
  {
    id:'mauritius', name:'Mauritius', tag:'Best overall fit', filters:['luxury','adventure'],
    nights:6, dates:'14–20 Apr 2027', total:2384, flights:1086, hotelPrice:1298,
    hotel:'Veranda Grand Baie Hotel & Spa', stars:'4-star · 8.4/10',
    mood:'Grand Baie · catamaran · waterfalls',
    hotelPhotos:[1,2,3,4,5].map(n=>`./assets/hotels/mauritius/0${n}.webp`),
    activities:[
      {name:'Catamaran + waterfall',src:'./assets/activities/mauritius-catamaran.jpg'},
      {name:'Quad adventure',src:'./assets/activities/mauritius-quad.jpg'},
      {name:'Waterfalls',src:'./assets/activities/mauritius-waterfall.jpg'}
    ],
    entry:'Visa-free up to 60 days + online travel form.',
    flightUrl:'https://skyscanner.net/g/referrals/v1/flights/day-view?mediaPartnerId=2850210&utm_term=skyscanner_chatgpt_mcp_app&origin=LON&destination=MRU&outboundDate=2027-04-14&cabinclass=economy&inboundDate=2027-04-20&locale=en-GB&currency=GBP&market=UK',
    hotelUrl:'https://www.booking.com/hotel/mu/veranda-grand-baie-amp-spa.html?aid=2438770&checkin=2027-04-14&checkout=2027-04-20&no_rooms=1&group_adults=2&selected_currency=GBP'
  },
  {
    id:'phuket', name:'Phuket', tag:'Most to do', filters:['adventure','value'],
    nights:7, dates:'20–27 Apr 2027', total:1702, flights:1002, hotelPrice:700,
    hotel:'The Marin Phuket Kamala Beach', stars:'5-star · 8.7/10',
    mood:'Pool days · Phi Phi · Old Town nights',
    hotelPhotos:[1,2,3,4,5].map(n=>`./assets/hotels/phuket/0${n}.jpg`),
    activities:[
      {name:'Phi Phi islands',src:'./assets/activities/phuket-phi-phi.jpg'},
      {name:'ATV tour',src:'./assets/activities/phuket-atv.jpg'},
      {name:'Old Town nights',src:'./assets/activities/phuket-old-town.jpg'}
    ],
    entry:'Visa-exempt up to 30 days + digital arrival card.',
    flightUrl:'https://skyscanner.net/g/referrals/v1/flights/day-view?mediaPartnerId=2850210&utm_term=skyscanner_chatgpt_mcp_app&origin=LON&destination=HKT&outboundDate=2027-04-20&cabinclass=economy&inboundDate=2027-04-27&locale=en-GB&currency=GBP&market=UK',
    hotelUrl:'https://www.booking.com/hotel/th/the-marin-kamala-phuket.html?aid=2438770&checkin=2027-04-20&checkout=2027-04-27&no_rooms=1&group_adults=2&selected_currency=GBP'
  },
  {
    id:'sal', name:'Sal', tag:'Best value', filters:['five','value','adventure'],
    nights:5, dates:'10–15 Mar 2027', total:1464, flights:290, hotelPrice:1174,
    hotel:'Riu Cabo Verde Adults Only', stars:'5-star · all-inclusive',
    mood:'All-inclusive · dunes · quad bikes',
    hotelPhotos:[1,2,3,4,5].map(n=>`./assets/hotels/sal/0${n}.jpg`),
    activities:[
      {name:'Dune quad bikes',src:'./assets/activities/sal-quad.jpg'},
      {name:'Salt lake',src:'./assets/activities/sal-salt-lake.jpg'},
      {name:'Shark Bay',src:'./assets/activities/sal-shark-bay.jpg'}
    ],
    entry:'Visa-free up to 30 days + advance registration.',
    flightUrl:'https://skyscanner.net/g/referrals/v1/flights/day-view?mediaPartnerId=2850210&utm_term=skyscanner_chatgpt_mcp_app&origin=LON&destination=SID&outboundDate=2027-03-10&cabinclass=economy&inboundDate=2027-03-15&locale=en-GB&currency=GBP&market=UK',
    hotelUrl:'https://www.booking.com/hotel/cv/riu-palace-cabo-verde.html?aid=2438770&checkin=2027-03-10&checkout=2027-03-15&no_rooms=1&group_adults=2&selected_currency=GBP'
  }
];

const money=n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:0}).format(n);
let budget=2700, filter='all';
const grid=document.querySelector('#destination-grid');

function renderCards(){
  grid.innerHTML=trips.filter(t=>filter==='all'||t.filters.includes(filter)).map(t=>{
    const remaining=budget-t.total;
    return `<article class="card" data-open="${t.id}" tabindex="0" role="button" aria-label="Open ${t.name} photos">
      <img src="${t.hotelPhotos[0]}" alt="${t.hotel}" loading="lazy">
      <div class="card-top"><span class="pill">Actual hotel</span><span class="budget-pill">${remaining>=0?money(remaining)+' left':money(Math.abs(remaining))+' over'}</span></div>
      <div class="card-bottom"><div><span class="card-tag">${t.tag}</span><h3>${t.name}</h3><p class="card-meta">${t.hotel}</p></div>
      <div class="card-price"><strong>${money(t.total)}</strong><span>${t.nights} NIGHTS · FOR TWO</span></div></div>
    </article>`;
  }).join('');
}

function renderComparison(){
  document.querySelector('#compare-head-row').innerHTML='<th></th>'+trips.map(t=>`<th data-open="${t.id}">${t.name}</th>`).join('');
  const rows=[['Dates',t=>t.dates],['Nights',t=>t.nights],['Total',t=>money(t.total)],['Hotel',t=>t.hotel]];
  document.querySelector('#compare-body').innerHTML=rows.map(([label,fn])=>`<tr><td>${label}</td>${trips.map(t=>`<td>${fn(t)}</td>`).join('')}</tr>`).join('');
}

function openTrip(id){
  const t=trips.find(x=>x.id===id); if(!t)return;
  const remaining=budget-t.total;
  document.querySelector('#dialog-content').innerHTML=`
    <div class="dialog-hero"><img src="${t.hotelPhotos[0]}" alt="${t.hotel}"><div class="dialog-title"><p class="eyebrow">Actual hotel</p><h2 id="dialog-title">${t.name}</h2><p>${t.hotel}</p></div></div>
    <div class="dialog-body">
      <div class="visual-heading"><div><small>THE HOTEL</small><h3>Rooms, pool & grounds</h3></div><span>Swipe →</span></div>
      <div class="hotel-scroll">${t.hotelPhotos.map((src,i)=>`<img src="${src}" alt="${t.hotel} photo ${i+1}" loading="lazy">`).join('')}</div>
      <div class="trip-stats">
        <div class="trip-stat"><span>Dates</span><strong>${t.dates}</strong></div>
        <div class="trip-stat"><span>Total for two</span><strong>${money(t.total)}</strong></div>
        <div class="trip-stat"><span>Budget left</span><strong>${remaining>=0?money(remaining):money(Math.abs(remaining))+' over'}</strong></div>
        <div class="trip-stat"><span>Stay</span><strong>${t.stars}</strong></div>
      </div>
      <div class="visual-heading"><div><small>WHAT THEY CAN DO</small><h3>${t.mood}</h3></div></div>
      <div class="activity-grid">${t.activities.map(a=>`<figure><img src="${a.src}" alt="${a.name}" loading="lazy"><figcaption>${a.name}</figcaption></figure>`).join('')}</div>
      <div class="compact-detail"><span>Flights ${money(t.flights)}</span><span>Hotel ${money(t.hotelPrice)}</span><span>${t.entry}</span></div>
      <div class="booking-row"><a href="${t.flightUrl}" target="_blank" rel="noopener">Check flights</a><a href="${t.hotelUrl}" target="_blank" rel="noopener">Check exact room</a></div>
      <p class="fineprint">Hotel gallery images show the named property. Activity photos show the listed experiences; operators can vary. Prices can change.</p>
    </div>`;
  document.querySelector('#trip-dialog').showModal();
}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;renderCards();
}));
document.querySelector('#budget').addEventListener('input',e=>{budget=Number(e.target.value);document.querySelector('#budget-output').value=money(budget);renderCards()});
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-open]');if(trigger)openTrip(trigger.dataset.open)});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.card'))openTrip(e.target.dataset.open)});
document.querySelector('.dialog-close').addEventListener('click',()=>document.querySelector('#trip-dialog').close());
document.querySelector('#trip-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
renderCards();renderComparison();
