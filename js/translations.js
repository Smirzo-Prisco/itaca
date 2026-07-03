/**
 * translations.js — Contenuti multilingua Itaca Villa
 * Lingue: it (default) | en | fr | de
 */
const TRANSLATIONS = {

  /* ── ITALIANO ─────────────────────────────────────────────────────── */
  it: {
    meta: {
      title: 'Itaca Villa — Villa vacanze a Conca Verde, Sardegna',
      description: 'Villa vacanze con vista sull\'Arcipelago della Maddalena a Conca Verde, Sardegna. Prenota su Airbnb o Booking.com.',
    },
    nav: {
      villa: 'La Villa', guida: 'Guida Ospiti', dintorni: 'Dintorni',
      arrivo: 'Come Arrivare', contatti: 'Contatti',
    },
    hero: {
      tag: 'Conca Verde · Sardegna · Italia',
      h1: 'Dove il mare<br><em>incontra il silenzio</em>',
      sub: 'Una villa immersa nel verde sardo, con vista sull\'arcipelago. Svegliarsi con l\'alba e addormentarsi con il suono delle onde.',
      btn: 'Scopri la villa',
      scroll: 'Scorri',
    },
    villa: {
      tag: 'La Villa',
      title: 'Un rifugio a <em>Conca Verde</em>',
      text: 'Itaca Villa sorge in una delle location più belle della Sardegna: una conca naturale immersa nel verde, affacciata sull\'arcipelago. Il giardino è sempre fresco e ventilato, le albe sono mozzafiato e le serate si concludono con il suono delle onde del mare.',
      f1_title: 'Vista mare', f1_text: 'Panorama sull\'Arcipelago della Maddalena e le Bocche di Bonifacio, visibile dall\'alba al tramonto.',
      f2_title: 'Giardino verde', f2_text: 'Ombra naturale, brezza costante, profumo di macchia mediterranea.',
      f3_title: 'Alba spettacolare', f3_text: 'Ogni mattina è un\'emozione unica, direttamente dalla terrazza.',
      f4_title: 'Silenzio totale', f4_text: 'Solo la natura. Nessun rumore se non quello del mare.',
    },
    gallery: {
      tag: 'Fotografie',
      title: 'La villa, <em>in immagini</em>',
    },
    guida: {
      tag: 'Guida Ospiti',
      title: 'Tutto quello che<br><em>devi sapere</em>',
      text: 'Abbiamo preparato una guida completa per rendere il tuo soggiorno perfetto. Clicca su ogni sezione per scoprire istruzioni, consigli e informazioni utili.',
      acqua_title: 'Acqua', acqua_teaser: 'Informazioni sull\'acqua potabile, la cisterna e il suo utilizzo corretto.',
      brace_title: 'Brace e fuoco', brace_teaser: 'Informazioni importanti sul divieto di brace, fuochi e barbecue all\'interno della proprietà.',
      elettricita_title: 'Elettricità', elettricita_teaser: 'Quadro elettrico, interruttori, sovraccarichi.',
      wifi_title: 'WiFi & connettività', wifi_teaser: 'Password rete, copertura in giardino, alternativa dati mobili.',
      rifiuti_title: 'Raccolta rifiuti', rifiuti_teaser: 'Differenziata, giorni di raccolta, dove trovare i contenitori.',
      emergenza_title: 'Emergenze', emergenza_teaser: 'Numeri utili, pronto soccorso più vicino, cosa fare in caso di necessità.',
      accortezze_title: 'Accortezze & natura', accortezze_teaser: 'Rispetto del verde, animali selvatici, protezione solare e vento.',
      partenza_title: 'Check-out', partenza_teaser: 'Come lasciare la villa, dove depositare le chiavi, orari di partenza.',
      qr_title: 'Hai il QR Code?',
      qr_text: 'Inquadra il codice che trovi all\'interno della villa per accedere direttamente a questa guida dal tuo smartphone.',
    },
    regole: {
      tag: 'Regole della Casa',
      title: 'Per un soggiorno<br><em>sereno per tutti</em>',
      text: 'Piccole accortezze che ci permettono di mantenere Itaca Villa nel suo stato migliore per ogni ospite.',
      r1: 'Check-in dalle 15:00, check-out entro le 10:00. Orari diversi su richiesta e disponibilità.',
      r2: 'Non si fuma all\'interno della villa. Il giardino è a disposizione per fumatori.',
      r3: 'Rispettare il silenzio notturno dalle 23:00 alle 8:00 in considerazione della natura circostante.',
      r4: 'Animali ammessi previo accordo. Vi chiediamo di mantenerli lontano dai mobili interni.',
      r5: 'È vietato accendere fuochi, brace o barbecue in qualsiasi area della proprietà. Per cucinare all\'aperto sono disponibili i fornelli a induzione.',
      r6: 'Raccolta differenziata obbligatoria. Trovate i contenitori e le istruzioni nella guida ospiti.',
      r7: 'In caso di problemi contattare direttamente il proprietario. Troverete il numero in bacheca.',
    },
    dintorni: {
      tag: 'Dintorni',
      title: 'Cosa fare<br><em>nei dintorni</em>',
      text: 'Conca Verde è il punto di partenza perfetto per scoprire il meglio della Sardegna settentrionale.',
      spiagge_title: 'Spiagge', spiagge_sub: 'Le più belle spiagge dell\'isola a pochi minuti',
      luoghi_title: 'Luoghi imperdibili', luoghi_sub: 'Paesini sardi autentici, mercati e tradizioni',
      gastro_title: 'Gastronomia', gastro_sub: 'Ristoranti tipici, vini locali e prodotti dell\'isola',
    },
    arrivo: {
      tag: 'Come Arrivare',
      title: 'Trovare<br><em>Itaca Villa</em>',
      text: 'Conca Verde si trova in una posizione privilegiata, facilmente raggiungibile dagli aeroporti della Sardegna settentrionale.',
      airport_label: 'Aeroporto più vicino', airport_text: 'Olbia Costa Smeralda — circa 40 minuti in auto',
      car_label: 'In auto', car_text: 'Da Olbia seguire le indicazioni per Palau, poi per Santa Teresa di Gallura. Le coordinate GPS precise vengono inviate a prenotazione confermata.',
      ferry_label: 'In traghetto', ferry_text: 'Porto di Olbia o Golfo Aranci.',
      checkin_label: 'Check-in', checkin_text: 'Le istruzioni dettagliate per l\'accesso vengono inviate 48h prima dell\'arrivo.',
    },
    contatti: {
      tag: 'Contatti & Prenotazioni',
      title: 'Prenota il tuo<br><em>soggiorno a Itaca</em>',
      text: 'Per informazioni, disponibilità e prenotazioni dirette siamo a tua disposizione. Puoi anche prenotare direttamente sulle piattaforme.',
      phone_label: 'Telefono', email_label: 'Email',
      whatsapp_label: 'WhatsApp', whatsapp_value: 'Scrivi subito',
      airbnb_btn: 'Prenota su Airbnb', booking_btn: 'Prenota su Booking.com',
    },
    footer: { copy: 'Conca Verde, Sardegna · © 2026' },
    modals: {
      acqua: {
        title: 'Acqua',
        body: `<h4>Acqua non potabile</h4>
<p>L'acqua del rubinetto <strong>non è potabile</strong>. Per bere e cucinare utilizzare esclusivamente acqua in bottiglia, disponibile nei supermercati locali.</p>
<h4>La cisterna</h4>
<p>La villa è dotata di una cisterna di raccolta in caso di emergenza a causa dell'assenza del flusso ordinario. Non utilizzare quest'acqua per bere o cucinare. È possibile utilizzare i rubinetti esterni presenti in giardino.</p>
<h4>Risparmio idrico</h4>
<p>In estate l'acqua è una risorsa preziosa in Sardegna. Ti chiediamo di usarla con attenzione: docce brevi, rubinetti chiusi durante l'insaponatura, niente irrigazione nelle ore calde. <strong>È vietato lavare l'auto o altri veicoli con l'acqua della villa.</strong></p>`
      },
      brace: {
        title: 'Brace e fuoco',
        body: `<h4>Divieto assoluto</h4>
<p>È <strong>vietato accendere brace, barbecue o qualsiasi tipo di fuoco</strong> all'interno della proprietà, sia in giardino che nelle aree esterne.</p>
<h4>Perché questo divieto</h4>
<p>La Sardegna è una delle regioni a più alto rischio incendio d'Italia. La macchia mediterranea circostante è estremamente infiammabile, specialmente nei mesi estivi. Il rispetto di questo divieto protegge la villa, il territorio e tutti gli ospiti.</p>
<h4>Per cucinare all'aperto</h4>
<p>La villa è dotata di fornelli a induzione. Vi chiediamo di non portare in villa carbonella, legna da ardere o accendifuoco.</p>`
      },
      elettricita: {
        title: 'Elettricità',
        body: `<h4>Quadro elettrico</h4>
<p>Il quadro elettrico si trova tra la porta di ingresso e il frigorifero, dietro ad un piccolo quadro. È accessibile a tutti gli ospiti.</p>
<h4>In caso di blackout</h4>
<p>Se si spegne improvvisamente la corrente, controlla prima il quadro: probabilmente è scattato un interruttore differenziale. Riportalo su (verso l'alto). Se si ripete, evita di usare più elettrodomestici grandi contemporaneamente.</p>
<h4>Attenzione</h4>
<p>Non usare ciabatte elettriche sovraccariche.</p>
<p><strong><u>— Non utilizzare tutti i fornelli a induzione contemporaneamente alla massima potenza per un periodo prolungato.</u></strong><br>
<strong><u>— Evitare di avviare più di due lavatrici consecutive.</u></strong></p>`
      },
      wifi: {
        title: 'WiFi & Connettività',
        body: `<h4>Rete WiFi</h4>
<p>Nome rete: <strong>itacawifi</strong><br>Password: disponibile in loco.</p>
<h4>Copertura</h4>
<p>Il segnale copre tutta la villa e la veranda. In giardino il segnale potrebbe essere debole: in quel caso usa i dati mobili.</p>
<h4>Connessione dati</h4>
<p>In zona la copertura 4G di TIM e Vodafone è buona. Wind/3 ha copertura limitata. Consigliamo una SIM TIM per la massima affidabilità.</p>`
      },
      rifiuti: {
        title: 'Raccolta Differenziata',
        body: `<h4>Come funziona</h4>
<p>A Conca Verde (Santa Teresa di Gallura), la raccolta differenziata segue il sistema porta a porta con calendari specifici per le "Zone a Mare". I mastelli/sacchi vanno esposti sulla via pubblica dalle 20:00 del giorno precedente alle 05:00 del giorno di raccolta.</p>
<h4>Regole per il conferimento</h4>
<p>— Esposizione: il contenitore va posto davanti al proprio numero civico/cancello ed essere ben visibile.<br>
— Se non puoi rispettare gli orari del porta a porta, puoi portare i rifiuti all'Isola Ecologica subito dopo la spiaggia, sulla destra, posta in uno spiazzo sterrato. L'isola ecologica è disponibile h24.</p>
<h4>Link utili</h4>
<p><a href="https://www.santateresagalluraturismo.com/wp-content/uploads/2026/07/UTENZE-PORTA-A-PORTA-ALTA-STAGIONE.LUGLIO-1.pdf" target="_blank" rel="noopener">Consulta il calendario</a><br>
<a href="https://municipium-images-production.s3-eu-west-1.amazonaws.com/s3/6523/allegati/guida-alal-raccolta-comuni-alta-gallura-2022.pdf" target="_blank" rel="noopener">Guida raccolta differenziata</a></p>`
      },
      emergenza: {
        title: 'Emergenze',
        body: `<h4>Numeri di emergenza</h4>
<p>🚑 Emergenze generali: <strong>112</strong><br>
🚒 Vigili del Fuoco: <strong>115</strong><br>
🚓 Carabinieri: <strong>112</strong><br>
🏥 Guardia Medica locale: via Carlo Alberto 6 (tel. 0789 552867) - Santa Teresa di Gallura.</p>
<h4>Pronto Soccorso più vicino</h4>
<p>La Guardia Medica (Continuità Assistenziale) a Santa Teresa Gallura si trova temporaneamente in via Carlo Alberto 6 (tel. 0789 552867). È attiva negli orari notturni, nei festivi e prefestivi. Per le emergenze gravi, chiama sempre il 112.</p>
<h4>Proprietario</h4>
<p>Per qualsiasi urgenza non medica (problemi alla casa, chiavi, ecc.) contattate direttamente il proprietario al numero indicato in bacheca. Siamo sempre disponibili.</p>
<h4>Incendi</h4>
<p>In caso di principio di incendio: allontanarsi, chiamare il 115 e avvertire il proprietario. Non tentare di spegnere autonomamente incendi che si estendono alla vegetazione.</p>`
      },
      accortezze: {
        title: 'Accortezze & Natura',
        body: `<h4>Il vento</h4>
<p>Conca Verde è rinomata per la brezza costante — è ciò che la rende fresca anche d'estate. In caso di vento forte, assicurate i cuscini dei lettini e chiudete le finestre esposte a nord.</p>
<h4>Fauna locale</h4>
<p>Potreste incontrare lucertole, uccelli e raramente qualche cinghiale nei dintorni. Non alimentarli. I cinghiali non sono pericolosi ma vanno tenuti a distanza.</p>
<h4>Protezione solare</h4>
<p>In Sardegna il sole è intenso anche in primavera. Consigliamo protezione minima 50 e di evitare esposizioni prolungate nelle ore centrali (12-16).</p>
<h4>Rispetto del verde</h4>
<p>La macchia mediterranea è un ecosistema fragile. Non raccogliere piante o fiori selvatici, non accendere fuochi all'esterno delle aree predisposte, specialmente da giugno ad agosto.</p>`
      },
      partenza: {
        title: 'Check-out',
        body: `<h4>Orario di partenza</h4>
<p>Il check-out è previsto entro le 10:00. Per richieste di late check-out contattateci con anticipo: cercheremo di venirvi incontro.</p>
<h4>Prima di partire</h4>
<p>— Svuotare il frigorifero dagli alimenti deperibili<br>
— Raccogliere i rifiuti nei sacchetti appositi<br>
— Chiudere tutte le finestre<br>
— Spegnere tutte le luci</p>
<h4>Le chiavi</h4>
<p>Depositare le chiavi nella cassettina a combinazione all'ingresso. Il codice vi verrà comunicato al check-in.</p>
<h4>Grazie</h4>
<p>Speriamo che il vostro soggiorno a Itaca Villa sia stato indimenticabile. Saremo felici di accogliervi di nuovo. Una recensione su Airbnb o Booking.com è per noi molto preziosa 🙏</p>`
      },
    },
    sliders: {
      spiagge: {
        title: 'Spiagge',
        slides: [
          { caption: 'Spiaggia di Conca Verde raggiungibile a piedi in 5 minuti' },
          { caption: 'La spiaggia di Santa Teresa di Gallura a 10 minuti di macchina' },
          { caption: 'La spiaggia di Valle dell\'Erica è un gioiello a 5 minuti di macchina' },
          { caption: 'La spiaggia della Marmorata si trova a 5 minuti di macchina' },
          { caption: 'La spiaggia di Costa Paradiso si trova a meno di un\'ora di macchina ed è una delle spiagge più belle dell\'isola raggiungibile solamente attraverso un breve percorso a piedi all\'interno della macchia e lungo la costa' },
        ]
      },
      luoghi: {
        title: 'Luoghi imperdibili',
        slides: [
          { caption: 'Il tramonto più suggestivo al mondo' },
          { caption: 'Santa Teresa di Gallura — il borgo più vicino, con il caratteristico centro storico affacciato sullo Stretto di Bonifacio' },
          { caption: 'La Maddalena — l\'isola principale dell\'arcipelago, raggiungibile in traghetto da Palau in 15 minuti' },
          { caption: 'Aggius — piccolo paese nell\'entroterra gallurese, famoso per i tappeti sardi e il Museo Etnografico' },
        ]
      },
      gastronomia: {
        title: 'Gastronomia',
        slides: [
          { caption: 'I ristoranti di Santa Teresa — pesce freschissimo, aragosta gallurese e antipasti di mare' },
          { caption: 'Culurgiones e pasta fresca — i primi piatti della tradizione gallurese, da provare nei ristoranti tipici' },
          { caption: 'Cannonau e Vermentino — i vini sardi da abbinare ai prodotti locali: formaggi, salumi e miele di corbezzolo' },
        ]
      },
    },
  },

  /* ── ENGLISH ──────────────────────────────────────────────────────── */
  en: {
    meta: {
      title: 'Itaca Villa — Holiday villa at Conca Verde, Sardinia',
      description: 'Holiday villa with views of the La Maddalena Archipelago at Conca Verde, Sardinia. Book on Airbnb or Booking.com.',
    },
    nav: {
      villa: 'The Villa', guida: 'Guest Guide', dintorni: 'Surroundings',
      arrivo: 'Getting Here', contatti: 'Contact',
    },
    hero: {
      tag: 'Conca Verde · Sardinia · Italy',
      h1: 'Where the sea<br><em>meets the silence</em>',
      sub: 'A villa nestled in the Sardinian countryside, with views over the archipelago. Wake up to the sunrise and fall asleep to the sound of the waves.',
      btn: 'Discover the villa',
      scroll: 'Scroll',
    },
    villa: {
      tag: 'The Villa',
      title: 'A retreat at <em>Conca Verde</em>',
      text: 'Itaca Villa stands in one of the most beautiful locations in Sardinia: a natural hollow surrounded by greenery, overlooking the archipelago. The garden is always cool and breezy, the dawns are breathtaking, and evenings end with the sound of the sea.',
      f1_title: 'Sea views', f1_text: 'Panoramic views of the La Maddalena Archipelago and the Strait of Bonifacio, from sunrise to sunset.',
      f2_title: 'Lush garden', f2_text: 'Natural shade, constant breeze, scent of Mediterranean scrubland.',
      f3_title: 'Spectacular sunrise', f3_text: 'Every morning is a unique experience, right from the terrace.',
      f4_title: 'Perfect silence', f4_text: 'Only nature. No noise except the sound of the sea.',
    },
    gallery: {
      tag: 'Photography',
      title: 'The villa, <em>in pictures</em>',
    },
    guida: {
      tag: 'Guest Guide',
      title: 'Everything you<br><em>need to know</em>',
      text: 'We have prepared a complete guide to make your stay perfect. Click on each section to discover instructions, tips and useful information.',
      acqua_title: 'Water', acqua_teaser: 'Information about drinking water, the cistern and its correct use.',
      brace_title: 'Fire & BBQ', brace_teaser: 'Important information about the prohibition of fire, barbecues and grills on the property.',
      elettricita_title: 'Electricity', elettricita_teaser: 'Electrical panel, switches, overloads.',
      wifi_title: 'WiFi & Connectivity', wifi_teaser: 'Network password, garden coverage, mobile data alternative.',
      rifiuti_title: 'Waste Collection', rifiuti_teaser: 'Recycling, collection days, where to find the containers.',
      emergenza_title: 'Emergencies', emergenza_teaser: 'Useful numbers, nearest emergency room, what to do if needed.',
      accortezze_title: 'Tips & Nature', accortezze_teaser: 'Respecting the greenery, wildlife, sun protection and wind.',
      partenza_title: 'Check-out', partenza_teaser: 'How to leave the villa, where to leave the keys, departure times.',
      qr_title: 'Got the QR Code?',
      qr_text: 'Scan the code you find inside the villa to access this guide directly from your smartphone.',
    },
    regole: {
      tag: 'House Rules',
      title: 'For a stay<br><em>pleasant for everyone</em>',
      text: 'Small courtesies that allow us to keep Itaca Villa at its best for every guest.',
      r1: 'Check-in from 3:00 PM, check-out by 10:00 AM. Different times on request and availability.',
      r2: 'No smoking inside the villa. The garden is available for smokers.',
      r3: 'Please respect quiet hours from 11:00 PM to 8:00 AM, in consideration of the surrounding nature.',
      r4: 'Pets allowed by prior agreement. Please keep them away from indoor furniture.',
      r5: 'Lighting fires, barbecues or grills is strictly prohibited in any area of the property. Induction hobs are available for outdoor cooking.',
      r6: 'Recycling is mandatory. Containers and instructions are in the guest guide.',
      r7: 'In case of problems, contact the owner directly. You will find the number on the notice board.',
    },
    dintorni: {
      tag: 'Surroundings',
      title: 'Things to do<br><em>nearby</em>',
      text: 'Conca Verde is the perfect starting point to explore the best of northern Sardinia.',
      spiagge_title: 'Beaches', spiagge_sub: 'The most beautiful beaches on the island, just minutes away',
      luoghi_title: 'Must-see places', luoghi_sub: 'Authentic Sardinian villages, markets and traditions',
      gastro_title: 'Gastronomy', gastro_sub: 'Traditional restaurants, local wines and island products',
    },
    arrivo: {
      tag: 'Getting Here',
      title: 'Finding<br><em>Itaca Villa</em>',
      text: 'Conca Verde is in a privileged location, easily reachable from northern Sardinia\'s airports.',
      airport_label: 'Nearest airport', airport_text: 'Olbia Costa Smeralda — about 40 minutes by car',
      car_label: 'By car', car_text: 'From Olbia follow signs for Palau, then Santa Teresa di Gallura. Precise GPS coordinates are sent upon confirmed booking.',
      ferry_label: 'By ferry', ferry_text: 'Port of Olbia or Golfo Aranci.',
      checkin_label: 'Check-in', checkin_text: 'Detailed access instructions are sent 48 hours before arrival.',
    },
    contatti: {
      tag: 'Contact & Bookings',
      title: 'Book your<br><em>stay at Itaca</em>',
      text: 'For information, availability and direct bookings we are at your disposal. You can also book directly on the platforms.',
      phone_label: 'Phone', email_label: 'Email',
      whatsapp_label: 'WhatsApp', whatsapp_value: 'Message us now',
      airbnb_btn: 'Book on Airbnb', booking_btn: 'Book on Booking.com',
    },
    footer: { copy: 'Conca Verde, Sardinia · © 2026' },
    modals: {
      acqua: {
        title: 'Water',
        body: `<h4>Non-potable water</h4>
<p>Tap water is <strong>not safe to drink</strong>. For drinking and cooking, use only bottled water, available at local supermarkets.</p>
<h4>The cistern</h4>
<p>The villa has an emergency collection cistern in case the regular water supply is interrupted. Do not use this water for drinking or cooking. You can use the outdoor taps in the garden.</p>
<h4>Water conservation</h4>
<p>In summer, water is a precious resource in Sardinia. Please use it carefully: short showers, close taps while soaping up, no irrigation during hot hours. <strong>Washing cars or other vehicles with the villa's water is prohibited.</strong></p>`
      },
      brace: {
        title: 'Fire & BBQ',
        body: `<h4>Absolute prohibition</h4>
<p>It is <strong>strictly forbidden to light barbecues, grills or any type of fire</strong> anywhere on the property, both in the garden and outdoor areas.</p>
<h4>Why this prohibition</h4>
<p>Sardinia is one of Italy's highest fire-risk regions. The surrounding Mediterranean scrubland is extremely flammable, especially in summer. Respecting this rule protects the villa, the land and all guests.</p>
<h4>For outdoor cooking</h4>
<p>The villa is equipped with induction hobs. Please do not bring charcoal, firewood or lighter fluid to the villa.</p>`
      },
      elettricita: {
        title: 'Electricity',
        body: `<h4>Electrical panel</h4>
<p>The electrical panel is located between the front door and the fridge, behind a small panel cover. It is accessible to all guests.</p>
<h4>In case of blackout</h4>
<p>If the power suddenly goes out, check the panel first: a circuit breaker has probably tripped. Reset it (push up). If it happens again, avoid using several large appliances simultaneously.</p>
<h4>Important</h4>
<p>Do not use overloaded extension cords.</p>
<p><strong><u>— Do not run all the induction hobs at maximum power at the same time for a prolonged period.</u></strong><br>
<strong><u>— Avoid running more than two washing machine cycles in a row.</u></strong></p>`
      },
      wifi: {
        title: 'WiFi & Connectivity',
        body: `<h4>WiFi network</h4>
<p>Network name: <strong>itacawifi</strong><br>Password: available on site.</p>
<h4>Coverage</h4>
<p>The signal covers the entire villa and the veranda. The signal may be weak in the garden — use mobile data in that case.</p>
<h4>Mobile data</h4>
<p>TIM and Vodafone have good 4G coverage in the area. Wind/3 coverage is limited. We recommend a TIM SIM for maximum reliability.</p>`
      },
      rifiuti: {
        title: 'Waste Collection',
        body: `<h4>How it works</h4>
<p>In Conca Verde (Santa Teresa di Gallura), waste collection follows a door-to-door system with schedules specific to the "Seaside Zones". Bins/bags must be put out on the public road from 8:00 PM the day before to 5:00 AM on collection day.</p>
<h4>Rules for disposal</h4>
<p>— Placement: the bin must be placed in front of your house number/gate and be clearly visible.<br>
— If you can't keep up with the door-to-door schedule, you can take the waste to the Recycling Centre right after the beach, on the right, in a gravel area. The recycling centre is available 24/7.</p>
<h4>Useful links</h4>
<p><a href="https://www.santateresagalluraturismo.com/wp-content/uploads/2026/07/UTENZE-PORTA-A-PORTA-ALTA-STAGIONE.LUGLIO-1.pdf" target="_blank" rel="noopener">See the calendar</a><br>
<a href="https://municipium-images-production.s3-eu-west-1.amazonaws.com/s3/6523/allegati/guida-alal-raccolta-comuni-alta-gallura-2022.pdf" target="_blank" rel="noopener">Waste sorting guide</a></p>`
      },
      emergenza: {
        title: 'Emergencies',
        body: `<h4>Emergency numbers</h4>
<p>🚑 General emergencies: <strong>112</strong><br>
🚒 Fire brigade: <strong>115</strong><br>
🚓 Carabinieri: <strong>112</strong><br>
🏥 Local medical service: Via Carlo Alberto 6 (tel. 0789 552867) - Santa Teresa di Gallura.</p>
<h4>Nearest emergency room</h4>
<p>The local medical service (out-of-hours care) in Santa Teresa Gallura is temporarily located at Via Carlo Alberto 6 (tel. 0789 552867). It is open at night, on Sundays and public holidays. For serious emergencies, always call 112.</p>
<h4>Owner</h4>
<p>For any non-medical emergency (house problems, keys, etc.) contact the owner directly at the number on the notice board. We are always available.</p>
<h4>Fires</h4>
<p>In case of a fire: evacuate, call 115 and notify the owner. Do not attempt to extinguish fires that have spread to the vegetation.</p>`
      },
      accortezze: {
        title: 'Tips & Nature',
        body: `<h4>The wind</h4>
<p>Conca Verde is renowned for its constant breeze — it is what keeps it cool even in summer. In case of strong wind, secure the cushions on the sun loungers and close the north-facing windows.</p>
<h4>Local wildlife</h4>
<p>You may encounter lizards, birds and occasionally wild boar in the surroundings. Do not feed them. Wild boar are not dangerous but should be kept at a distance.</p>
<h4>Sun protection</h4>
<p>The Sardinian sun is intense even in spring. We recommend at least SPF 50 and avoiding prolonged exposure during the hottest hours (12–4 PM).</p>
<h4>Respecting nature</h4>
<p>The Mediterranean scrubland is a fragile ecosystem. Do not pick wild plants or flowers, do not light fires outside designated areas, especially from June to August.</p>`
      },
      partenza: {
        title: 'Check-out',
        body: `<h4>Departure time</h4>
<p>Check-out is by 10:00 AM. For late check-out requests, contact us in advance — we will do our best to accommodate you.</p>
<h4>Before you leave</h4>
<p>— Empty the fridge of perishable items<br>
— Collect rubbish in the appropriate bags<br>
— Close all windows<br>
— Turn off all the lights</p>
<h4>Keys</h4>
<p>Leave the keys in the combination lock box at the entrance. The code will be given to you at check-in.</p>
<h4>Thank you</h4>
<p>We hope your stay at Itaca Villa has been unforgettable. We would love to welcome you again. A review on Airbnb or Booking.com means a great deal to us 🙏</p>`
      },
    },
    sliders: {
      spiagge: {
        title: 'Beaches',
        slides: [
          { caption: 'Conca Verde beach, reachable on foot in 5 minutes' },
          { caption: 'Santa Teresa di Gallura beach, 10 minutes by car' },
          { caption: 'Valle dell\'Erica beach — a gem just 5 minutes by car' },
          { caption: 'La Marmorata beach, 5 minutes by car' },
          { caption: 'Costa Paradiso beach — less than an hour by car, one of the most beautiful beaches on the island, accessible via a short walk through the scrubland along the coast' },
        ]
      },
      luoghi: {
        title: 'Must-see places',
        slides: [
          { caption: 'The most stunning sunset in the world' },
          { caption: 'Santa Teresa di Gallura — the nearest village, with its picturesque old town overlooking the Strait of Bonifacio' },
          { caption: 'La Maddalena — the main island of the archipelago, reachable by ferry from Palau in 15 minutes' },
          { caption: 'Aggius — a small inland Gallurese village, famous for Sardinian carpets and the Ethnographic Museum' },
        ]
      },
      gastronomia: {
        title: 'Gastronomy',
        slides: [
          { caption: 'Santa Teresa\'s restaurants — ultra-fresh fish, Gallurese lobster and seafood starters' },
          { caption: 'Culurgiones and fresh pasta — traditional Gallurese first courses, a must-try in local restaurants' },
          { caption: 'Cannonau and Vermentino — Sardinian wines to pair with local products: cheeses, cured meats and corbezzolo honey' },
        ]
      },
    },
  },

  /* ── FRANÇAIS ─────────────────────────────────────────────────────── */
  fr: {
    meta: {
      title: 'Itaca Villa — Villa de vacances à Conca Verde, Sardaigne',
      description: 'Villa de vacances avec vue sur l\'Archipel de La Maddalena à Conca Verde, Sardaigne. Réservez sur Airbnb ou Booking.com.',
    },
    nav: {
      villa: 'La Villa', guida: 'Guide des Hôtes', dintorni: 'Environs',
      arrivo: 'Comment Arriver', contatti: 'Contact',
    },
    hero: {
      tag: 'Conca Verde · Sardaigne · Italie',
      h1: 'Là où la mer<br><em>rencontre le silence</em>',
      sub: 'Une villa nichée dans la verdure sarde, avec vue sur l\'archipel. Se réveiller au lever du soleil et s\'endormir au son des vagues.',
      btn: 'Découvrir la villa',
      scroll: 'Défiler',
    },
    villa: {
      tag: 'La Villa',
      title: 'Un refuge à <em>Conca Verde</em>',
      text: 'Itaca Villa se dresse dans l\'un des plus beaux endroits de Sardaigne : un creux naturel entouré de verdure, donnant sur l\'archipel. Le jardin est toujours frais et ventilé, les aubes sont époustouflantes et les soirées se terminent au son des vagues.',
      f1_title: 'Vue sur la mer', f1_text: 'Panorama sur l\'Archipel de La Maddalena et les Bouches de Bonifacio, visible du lever au coucher du soleil.',
      f2_title: 'Jardin verdoyant', f2_text: 'Ombre naturelle, brise constante, parfum de maquis méditerranéen.',
      f3_title: 'Lever de soleil spectaculaire', f3_text: 'Chaque matin est une émotion unique, directement depuis la terrasse.',
      f4_title: 'Silence total', f4_text: 'Seulement la nature. Aucun bruit si ce n\'est celui de la mer.',
    },
    gallery: {
      tag: 'Photographies',
      title: 'La villa, <em>en images</em>',
    },
    guida: {
      tag: 'Guide des Hôtes',
      title: 'Tout ce que<br><em>vous devez savoir</em>',
      text: 'Nous avons préparé un guide complet pour rendre votre séjour parfait. Cliquez sur chaque section pour découvrir les instructions, conseils et informations utiles.',
      acqua_title: 'Eau', acqua_teaser: 'Informations sur l\'eau potable, la citerne et son utilisation correcte.',
      brace_title: 'Feu & Barbecue', brace_teaser: 'Informations importantes sur l\'interdiction de feux, barbecues et grils dans la propriété.',
      elettricita_title: 'Électricité', elettricita_teaser: 'Tableau électrique, disjoncteurs, surcharges.',
      wifi_title: 'WiFi & Connectivité', wifi_teaser: 'Mot de passe réseau, couverture du jardin, alternative données mobiles.',
      rifiuti_title: 'Collecte des déchets', rifiuti_teaser: 'Tri sélectif, jours de collecte, où trouver les conteneurs.',
      emergenza_title: 'Urgences', emergenza_teaser: 'Numéros utiles, urgences les plus proches, que faire si nécessaire.',
      accortezze_title: 'Conseils & Nature', accortezze_teaser: 'Respect de la nature, faune locale, protection solaire et vent.',
      partenza_title: 'Check-out', partenza_teaser: 'Comment quitter la villa, où déposer les clés, horaires de départ.',
      qr_title: 'Vous avez le QR Code ?',
      qr_text: 'Scannez le code que vous trouverez à l\'intérieur de la villa pour accéder directement à ce guide depuis votre smartphone.',
    },
    regole: {
      tag: 'Règles de la Maison',
      title: 'Pour un séjour<br><em>agréable pour tous</em>',
      text: 'Petites attentions qui nous permettent de maintenir Itaca Villa dans son meilleur état pour chaque hôte.',
      r1: 'Check-in à partir de 15h00, check-out avant 10h00. Horaires différents sur demande et disponibilité.',
      r2: 'Il est interdit de fumer à l\'intérieur de la villa. Le jardin est disponible pour les fumeurs.',
      r3: 'Respecter le calme nocturne de 23h00 à 8h00 en considération de la nature environnante.',
      r4: 'Animaux acceptés sous accord préalable. Veuillez les maintenir loin des meubles intérieurs.',
      r5: 'Il est strictement interdit d\'allumer des feux, barbecues ou grils dans tout espace de la propriété. Des plaques à induction sont disponibles pour cuisiner en plein air.',
      r6: 'Le tri sélectif est obligatoire. Vous trouverez les conteneurs et les instructions dans le guide des hôtes.',
      r7: 'En cas de problème, contactez directement le propriétaire. Vous trouverez le numéro sur le tableau d\'affichage.',
    },
    dintorni: {
      tag: 'Environs',
      title: 'Que faire<br><em>aux alentours</em>',
      text: 'Conca Verde est le point de départ idéal pour découvrir le meilleur de la Sardaigne septentrionale.',
      spiagge_title: 'Plages', spiagge_sub: 'Les plus belles plages de l\'île à quelques minutes',
      luoghi_title: 'Lieux incontournables', luoghi_sub: 'Authentiques villages sardes, marchés et traditions',
      gastro_title: 'Gastronomie', gastro_sub: 'Restaurants typiques, vins locaux et produits de l\'île',
    },
    arrivo: {
      tag: 'Comment Arriver',
      title: 'Trouver<br><em>Itaca Villa</em>',
      text: 'Conca Verde est dans une position privilégiée, facilement accessible depuis les aéroports du nord de la Sardaigne.',
      airport_label: 'Aéroport le plus proche', airport_text: 'Olbia Costa Smeralda — environ 40 minutes en voiture',
      car_label: 'En voiture', car_text: 'Depuis Olbia suivre les indications pour Palau, puis Santa Teresa di Gallura. Les coordonnées GPS précises sont envoyées à la confirmation de réservation.',
      ferry_label: 'En ferry', ferry_text: 'Port d\'Olbia ou Golfo Aranci.',
      checkin_label: 'Check-in', checkin_text: 'Les instructions détaillées d\'accès sont envoyées 48h avant l\'arrivée.',
    },
    contatti: {
      tag: 'Contact & Réservations',
      title: 'Réservez votre<br><em>séjour à Itaca</em>',
      text: 'Pour informations, disponibilités et réservations directes, nous sommes à votre disposition. Vous pouvez aussi réserver directement sur les plateformes.',
      phone_label: 'Téléphone', email_label: 'E-mail',
      whatsapp_label: 'WhatsApp', whatsapp_value: 'Écrivez-nous',
      airbnb_btn: 'Réserver sur Airbnb', booking_btn: 'Réserver sur Booking.com',
    },
    footer: { copy: 'Conca Verde, Sardaigne · © 2026' },
    modals: {
      acqua: {
        title: 'Eau',
        body: `<h4>Eau non potable</h4>
<p>L'eau du robinet <strong>n'est pas potable</strong>. Pour boire et cuisiner, utiliser exclusivement de l'eau en bouteille, disponible dans les supermarchés locaux.</p>
<h4>La citerne</h4>
<p>La villa dispose d'une citerne de récupération en cas d'urgence, en l'absence du flux d'eau habituel. Ne pas utiliser cette eau pour boire ou cuisiner. Vous pouvez utiliser les robinets extérieurs présents dans le jardin.</p>
<h4>Économies d'eau</h4>
<p>En été, l'eau est une ressource précieuse en Sardaigne. Nous vous demandons de l'utiliser avec soin : douches courtes, robinets fermés pendant le savonnage, pas d'arrosage aux heures chaudes. <strong>Il est interdit de laver la voiture ou d'autres véhicules avec l'eau de la villa.</strong></p>`
      },
      brace: {
        title: 'Feu & Barbecue',
        body: `<h4>Interdiction absolue</h4>
<p>Il est <strong>strictement interdit d'allumer des barbecues, grils ou tout type de feu</strong> dans la propriété, aussi bien dans le jardin que dans les espaces extérieurs.</p>
<h4>Pourquoi cette interdiction</h4>
<p>La Sardaigne est l'une des régions les plus à risque d'incendie en Italie. Le maquis méditerranéen environnant est extrêmement inflammable, surtout en été. Le respect de cette règle protège la villa, le territoire et tous les hôtes.</p>
<h4>Pour cuisiner en plein air</h4>
<p>La villa est équipée de plaques à induction. Veuillez ne pas apporter de charbon de bois, de bois de chauffage ni d'allume-feux.</p>`
      },
      elettricita: {
        title: 'Électricité',
        body: `<h4>Tableau électrique</h4>
<p>Le tableau électrique se trouve entre la porte d'entrée et le réfrigérateur, derrière un petit panneau. Il est accessible à tous les hôtes.</p>
<h4>En cas de panne de courant</h4>
<p>Si le courant se coupe soudainement, vérifiez d'abord le tableau : un disjoncteur différentiel a probablement sauté. Remettez-le en position haute. Si le problème se répète, évitez d'utiliser plusieurs gros appareils simultanément.</p>
<h4>Attention</h4>
<p>Ne pas utiliser de multiprises surchargées.</p>
<p><strong><u>— Ne pas utiliser toutes les plaques à induction simultanément à pleine puissance pendant une période prolongée.</u></strong><br>
<strong><u>— Éviter de faire fonctionner plus de deux cycles de lave-linge consécutifs.</u></strong></p>`
      },
      wifi: {
        title: 'WiFi & Connectivité',
        body: `<h4>Réseau WiFi</h4>
<p>Nom du réseau : <strong>itacawifi</strong><br>Mot de passe : disponible sur place.</p>
<h4>Couverture</h4>
<p>Le signal couvre toute la villa et la véranda. Dans le jardin, le signal peut être faible : utilisez alors les données mobiles.</p>
<h4>Données mobiles</h4>
<p>TIM et Vodafone ont une bonne couverture 4G dans la zone. Wind/3 a une couverture limitée. Nous recommandons une SIM TIM pour une fiabilité maximale.</p>`
      },
      rifiuti: {
        title: 'Collecte des déchets',
        body: `<h4>Comment ça marche</h4>
<p>À Conca Verde (Santa Teresa di Gallura), la collecte des déchets suit le système du porte-à-porte avec des calendriers spécifiques pour les "Zones en bord de mer". Les bacs/sacs doivent être déposés sur la voie publique de 20h00 la veille à 5h00 le jour de la collecte.</p>
<h4>Règles pour le dépôt</h4>
<p>— Dépôt : le contenant doit être placé devant votre numéro civique/portail et bien visible.<br>
— Si vous ne pouvez pas respecter les horaires du porte-à-porte, vous pouvez apporter les déchets à l'Île Écologique juste après la plage, sur la droite, dans un espace en terre battue. L'île écologique est disponible 24h/24.</p>
<h4>Liens utiles</h4>
<p><a href="https://www.santateresagalluraturismo.com/wp-content/uploads/2026/07/UTENZE-PORTA-A-PORTA-ALTA-STAGIONE.LUGLIO-1.pdf" target="_blank" rel="noopener">Consulter le calendrier</a><br>
<a href="https://municipium-images-production.s3-eu-west-1.amazonaws.com/s3/6523/allegati/guida-alal-raccolta-comuni-alta-gallura-2022.pdf" target="_blank" rel="noopener">Guide de tri des déchets</a></p>`
      },
      emergenza: {
        title: 'Urgences',
        body: `<h4>Numéros d'urgence</h4>
<p>🚑 Urgences générales : <strong>112</strong><br>
🚒 Pompiers : <strong>115</strong><br>
🚓 Carabiniers : <strong>112</strong><br>
🏥 Médecin de garde local : Via Carlo Alberto 6 (tél. 0789 552867) - Santa Teresa di Gallura.</p>
<h4>Urgences les plus proches</h4>
<p>Le médecin de garde (continuité des soins) à Santa Teresa Gallura se trouve temporairement Via Carlo Alberto 6 (tél. 0789 552867). Il est actif la nuit, les dimanches et jours fériés. Pour les urgences graves, appelez toujours le 112.</p>
<h4>Propriétaire</h4>
<p>Pour toute urgence non médicale (problèmes de maison, clés, etc.) contactez directement le propriétaire au numéro indiqué sur le tableau. Nous sommes toujours disponibles.</p>
<h4>Incendies</h4>
<p>En cas d'incendie : évacuer, appeler le 115 et prévenir le propriétaire. Ne pas tenter d'éteindre seul un incendie qui s'étend à la végétation.</p>`
      },
      accortezze: {
        title: 'Conseils & Nature',
        body: `<h4>Le vent</h4>
<p>Conca Verde est réputée pour sa brise constante — c'est ce qui la maintient fraîche même en été. Par grand vent, sécurisez les coussins des transats et fermez les fenêtres exposées au nord.</p>
<h4>Faune locale</h4>
<p>Vous pourrez rencontrer des lézards, des oiseaux et occasionnellement des sangliers aux alentours. Ne pas les nourrir. Les sangliers ne sont pas dangereux mais doivent être gardés à distance.</p>
<h4>Protection solaire</h4>
<p>Le soleil sarde est intense même au printemps. Nous recommandons un indice minimum 50 et d'éviter les expositions prolongées pendant les heures les plus chaudes (12h–16h).</p>
<h4>Respect de la nature</h4>
<p>Le maquis méditerranéen est un écosystème fragile. Ne cueillez pas de plantes ou fleurs sauvages, n'allumez pas de feux hors des zones prévues, surtout de juin à août.</p>`
      },
      partenza: {
        title: 'Check-out',
        body: `<h4>Heure de départ</h4>
<p>Le check-out est prévu avant 10h00. Pour les demandes de late check-out, contactez-nous à l'avance : nous ferons de notre mieux pour vous accommoder.</p>
<h4>Avant de partir</h4>
<p>— Vider le réfrigérateur des aliments périssables<br>
— Rassembler les déchets dans les sacs appropriés<br>
— Fermer toutes les fenêtres<br>
— Éteindre toutes les lumières</p>
<h4>Les clés</h4>
<p>Déposez les clés dans la boîte à combinaison à l'entrée. Le code vous sera communiqué au check-in.</p>
<h4>Merci</h4>
<p>Nous espérons que votre séjour à Itaca Villa a été inoubliable. Nous serons ravis de vous accueillir à nouveau. Un avis sur Airbnb ou Booking.com nous est très précieux 🙏</p>`
      },
    },
    sliders: {
      spiagge: {
        title: 'Plages',
        slides: [
          { caption: 'La plage de Conca Verde, accessible à pied en 5 minutes' },
          { caption: 'La plage de Santa Teresa di Gallura à 10 minutes en voiture' },
          { caption: 'La plage de Valle dell\'Erica, un joyau à 5 minutes en voiture' },
          { caption: 'La plage de La Marmorata à 5 minutes en voiture' },
          { caption: 'La plage de Costa Paradiso — à moins d\'une heure en voiture, l\'une des plus belles de l\'île, accessible via un court sentier dans le maquis le long de la côte' },
        ]
      },
      luoghi: {
        title: 'Lieux incontournables',
        slides: [
          { caption: 'Le coucher de soleil le plus envoûtant du monde' },
          { caption: 'Santa Teresa di Gallura — le village le plus proche, avec son pittoresque centre historique surplombant le Détroit de Bonifacio' },
          { caption: 'La Maddalena — l\'île principale de l\'archipel, accessible en ferry depuis Palau en 15 minutes' },
          { caption: 'Aggius — petit village de l\'arrière-pays gallurais, célèbre pour ses tapis sardes et son Musée Ethnographique' },
        ]
      },
      gastronomia: {
        title: 'Gastronomie',
        slides: [
          { caption: 'Les restaurants de Santa Teresa — poissons ultra-frais, langouste galluraise et antipasti de mer' },
          { caption: 'Culurgiones et pâtes fraîches — les premiers plats de la tradition galluraise, à goûter dans les restaurants typiques' },
          { caption: 'Cannonau et Vermentino — les vins sardes à marier avec les produits locaux : fromages, charcuteries et miel de corbezzolo' },
        ]
      },
    },
  },

  /* ── DEUTSCH ──────────────────────────────────────────────────────── */
  de: {
    meta: {
      title: 'Itaca Villa — Ferienhaus in Conca Verde, Sardinien',
      description: 'Ferienhaus mit Blick auf den La-Maddalena-Archipel in Conca Verde, Sardinien. Buchen Sie auf Airbnb oder Booking.com.',
    },
    nav: {
      villa: 'Die Villa', guida: 'Gästeleitfaden', dintorni: 'Umgebung',
      arrivo: 'Anreise', contatti: 'Kontakt',
    },
    hero: {
      tag: 'Conca Verde · Sardinien · Italien',
      h1: 'Wo das Meer<br><em>die Stille trifft</em>',
      sub: 'Eine Villa inmitten des sardischen Grüns, mit Blick auf den Archipel. Im Morgengrauen aufwachen und beim Rauschen der Wellen einschlafen.',
      btn: 'Die Villa entdecken',
      scroll: 'Scrollen',
    },
    villa: {
      tag: 'Die Villa',
      title: 'Ein Rückzugsort in <em>Conca Verde</em>',
      text: 'Itaca Villa liegt an einem der schönsten Orte Sardiniens: einer natürlichen Mulde, umgeben von Grün, mit Blick auf den Archipel. Der Garten ist stets kühl und von einer Brise durchweht, die Morgendämmerungen sind atemberaubend und die Abende enden im Klang der Meereswellen.',
      f1_title: 'Meerblick', f1_text: 'Panoramablick auf den La-Maddalena-Archipel und die Straße von Bonifacio, von der Morgendämmerung bis zum Sonnenuntergang.',
      f2_title: 'Üppiger Garten', f2_text: 'Natürlicher Schatten, beständige Brise, Duft des mediterranen Macchias.',
      f3_title: 'Spektakulärer Sonnenaufgang', f3_text: 'Jeder Morgen ist ein einzigartiges Erlebnis, direkt von der Terrasse aus.',
      f4_title: 'Totale Stille', f4_text: 'Nur die Natur. Kein Lärm außer dem Rauschen des Meeres.',
    },
    gallery: {
      tag: 'Fotografie',
      title: 'Die Villa, <em>in Bildern</em>',
    },
    guida: {
      tag: 'Gästeleitfaden',
      title: 'Alles, was Sie<br><em>wissen müssen</em>',
      text: 'Wir haben einen vollständigen Leitfaden vorbereitet, um Ihren Aufenthalt perfekt zu machen. Klicken Sie auf jeden Abschnitt, um Anweisungen, Tipps und nützliche Informationen zu entdecken.',
      acqua_title: 'Wasser', acqua_teaser: 'Informationen über Trinkwasser, die Zisterne und deren korrekten Gebrauch.',
      brace_title: 'Feuer & Grill', brace_teaser: 'Wichtige Informationen über das Verbot von Feuer, Grills und Barbecues auf dem Grundstück.',
      elettricita_title: 'Elektrizität', elettricita_teaser: 'Sicherungskasten, Schalter, Überlastungen.',
      wifi_title: 'WLAN & Konnektivität', wifi_teaser: 'Netzwerkpasswort, Gartenabdeckung, mobile Daten als Alternative.',
      rifiuti_title: 'Müllentsorgung', rifiuti_teaser: 'Mülltrennung, Abfuhrtage, wo die Container zu finden sind.',
      emergenza_title: 'Notfälle', emergenza_teaser: 'Notrufnummern, nächste Notaufnahme, was im Bedarfsfall zu tun ist.',
      accortezze_title: 'Tipps & Natur', accortezze_teaser: 'Respekt für die Natur, Wildtiere, Sonnenschutz und Wind.',
      partenza_title: 'Check-out', partenza_teaser: 'Wie die Villa zu verlassen ist, wo die Schlüssel abzugeben sind, Abfahrtszeiten.',
      qr_title: 'Haben Sie den QR-Code?',
      qr_text: 'Scannen Sie den Code, den Sie in der Villa finden, um direkt von Ihrem Smartphone auf diesen Leitfaden zuzugreifen.',
    },
    regole: {
      tag: 'Hausregeln',
      title: 'Für einen Aufenthalt,<br><em>der alle erfreut</em>',
      text: 'Kleine Aufmerksamkeiten, die uns helfen, Itaca Villa für jeden Gast im besten Zustand zu erhalten.',
      r1: 'Check-in ab 15:00 Uhr, Check-out bis 10:00 Uhr. Andere Zeiten auf Anfrage und Verfügbarkeit.',
      r2: 'Rauchen innerhalb der Villa ist nicht gestattet. Der Garten steht Rauchern zur Verfügung.',
      r3: 'Bitte die Nachtruhe von 23:00 bis 8:00 Uhr einhalten, in Rücksicht auf die umgebende Natur.',
      r4: 'Haustiere nach vorheriger Absprache erlaubt. Bitte halten Sie sie von den Inneneinrichtungen fern.',
      r5: 'Das Entzünden von Feuern, Grills oder Barbecues ist in allen Bereichen des Grundstücks streng verboten. Für das Kochen im Freien stehen Induktionskochplatten zur Verfügung.',
      r6: 'Mülltrennung ist Pflicht. Container und Anweisungen finden Sie im Gästeleitfaden.',
      r7: 'Im Problemfall direkt den Eigentümer kontaktieren. Die Nummer finden Sie am schwarzen Brett.',
    },
    dintorni: {
      tag: 'Umgebung',
      title: 'Was Sie in der<br><em>Umgebung erleben können</em>',
      text: 'Conca Verde ist der perfekte Ausgangspunkt, um das Beste des nördlichen Sardiniens zu entdecken.',
      spiagge_title: 'Strände', spiagge_sub: 'Die schönsten Strände der Insel, nur wenige Minuten entfernt',
      luoghi_title: 'Sehenswürdigkeiten', luoghi_sub: 'Authentische sardische Dörfer, Märkte und Traditionen',
      gastro_title: 'Gastronomie', gastro_sub: 'Typische Restaurants, lokale Weine und Inselprodukte',
    },
    arrivo: {
      tag: 'Anreise',
      title: 'Itaca Villa<br><em>finden</em>',
      text: 'Conca Verde liegt in einer privilegierten Lage, leicht erreichbar von den Flughäfen Nordsardiniens.',
      airport_label: 'Nächster Flughafen', airport_text: 'Olbia Costa Smeralda — etwa 40 Minuten mit dem Auto',
      car_label: 'Mit dem Auto', car_text: 'Von Olbia den Schildern nach Palau folgen, dann nach Santa Teresa di Gallura. Genaue GPS-Koordinaten werden nach Buchungsbestätigung übermittelt.',
      ferry_label: 'Mit der Fähre', ferry_text: 'Hafen von Olbia oder Golfo Aranci.',
      checkin_label: 'Check-in', checkin_text: 'Detaillierte Zugangsanweisungen werden 48 Stunden vor der Ankunft übersandt.',
    },
    contatti: {
      tag: 'Kontakt & Buchungen',
      title: 'Buchen Sie Ihren<br><em>Aufenthalt in Itaca</em>',
      text: 'Für Informationen, Verfügbarkeit und Direktbuchungen stehen wir Ihnen zur Verfügung. Sie können auch direkt über die Plattformen buchen.',
      phone_label: 'Telefon', email_label: 'E-Mail',
      whatsapp_label: 'WhatsApp', whatsapp_value: 'Jetzt schreiben',
      airbnb_btn: 'Auf Airbnb buchen', booking_btn: 'Auf Booking.com buchen',
    },
    footer: { copy: 'Conca Verde, Sardinien · © 2026' },
    modals: {
      acqua: {
        title: 'Wasser',
        body: `<h4>Kein Trinkwasser</h4>
<p>Das Leitungswasser ist <strong>nicht trinkbar</strong>. Zum Trinken und Kochen ausschließlich Flaschenwasser verwenden, das in den lokalen Supermärkten erhältlich ist.</p>
<h4>Die Zisterne</h4>
<p>Die Villa verfügt über eine Notfall-Sammelzisterne für den Fall, dass die normale Wasserversorgung ausfällt. Dieses Wasser nicht zum Trinken oder Kochen verwenden. Sie können die Außenhähne im Garten benutzen.</p>
<h4>Wassersparen</h4>
<p>Im Sommer ist Wasser auf Sardinien eine wertvolle Ressource. Bitte gehen Sie damit sorgfältig um: kurze Duschen, Hähne beim Einseifen schließen, kein Bewässern in den heißen Stunden. <strong>Das Waschen von Fahrzeugen mit dem Wasser der Villa ist verboten.</strong></p>`
      },
      brace: {
        title: 'Feuer & Grill',
        body: `<h4>Absolutes Verbot</h4>
<p>Es ist <strong>strengstens verboten, Grills, Barbecues oder jegliche Art von Feuer</strong> auf dem Grundstück zu entzünden, sowohl im Garten als auch in den Außenbereichen.</p>
<h4>Warum dieses Verbot</h4>
<p>Sardinien ist eine der brandgefährlichsten Regionen Italiens. Das umliegende Mittelmeer-Macchia ist äußerst entzündlich, besonders im Sommer. Die Einhaltung dieser Regel schützt die Villa, das Gebiet und alle Gäste.</p>
<h4>Für das Kochen im Freien</h4>
<p>Die Villa ist mit Induktionskochplatten ausgestattet. Bitte bringen Sie keine Holzkohle, Brennholz oder Feuerzeugflüssigkeit mit.</p>`
      },
      elettricita: {
        title: 'Elektrizität',
        body: `<h4>Sicherungskasten</h4>
<p>Der Sicherungskasten befindet sich zwischen der Eingangstür und dem Kühlschrank, hinter einer kleinen Abdeckung. Er ist für alle Gäste zugänglich.</p>
<h4>Bei Stromausfall</h4>
<p>Wenn der Strom plötzlich ausfällt, kontrollieren Sie zuerst den Sicherungskasten: wahrscheinlich ist ein Fehlerstromschutzschalter ausgelöst. Schalten Sie ihn wieder ein (nach oben drücken). Bei Wiederholung vermeiden Sie es, mehrere große Geräte gleichzeitig zu betreiben.</p>
<h4>Wichtig</h4>
<p>Keine überlasteten Mehrfachsteckdosen verwenden.</p>
<p><strong><u>— Nicht alle Induktionskochplatten gleichzeitig über einen längeren Zeitraum mit voller Leistung betreiben.</u></strong><br>
<strong><u>— Vermeiden Sie es, mehr als zwei Waschmaschinenläufe hintereinander laufen zu lassen.</u></strong></p>`
      },
      wifi: {
        title: 'WLAN & Konnektivität',
        body: `<h4>WLAN-Netzwerk</h4>
<p>Netzwerkname: <strong>itacawifi</strong><br>Passwort: vor Ort verfügbar.</p>
<h4>Abdeckung</h4>
<p>Das Signal deckt die gesamte Villa und die Veranda ab. Im Garten kann das Signal schwach sein — nutzen Sie in diesem Fall mobile Daten.</p>
<h4>Mobile Daten</h4>
<p>TIM und Vodafone haben gute 4G-Abdeckung in der Gegend. Wind/3 hat begrenzte Abdeckung. Wir empfehlen eine TIM-SIM für maximale Zuverlässigkeit.</p>`
      },
      rifiuti: {
        title: 'Müllentsorgung',
        body: `<h4>Wie es funktioniert</h4>
<p>In Conca Verde (Santa Teresa di Gallura) erfolgt die Mülltrennung nach dem Haustürsystem mit spezifischen Kalendern für die "Küstenzonen". Behälter/Säcke müssen von 20:00 Uhr am Vortag bis 5:00 Uhr am Abholtag auf der öffentlichen Straße bereitgestellt werden.</p>
<h4>Regeln für die Bereitstellung</h4>
<p>— Aufstellung: Der Behälter muss vor der eigenen Hausnummer/dem Tor stehen und gut sichtbar sein.<br>
— Wenn Sie die Haustür-Zeiten nicht einhalten können, können Sie den Müll zum Wertstoffhof bringen, gleich nach dem Strand, rechts, auf einem unbefestigten Platz. Der Wertstoffhof ist rund um die Uhr verfügbar.</p>
<h4>Nützliche Links</h4>
<p><a href="https://www.santateresagalluraturismo.com/wp-content/uploads/2026/07/UTENZE-PORTA-A-PORTA-ALTA-STAGIONE.LUGLIO-1.pdf" target="_blank" rel="noopener">Kalender ansehen</a><br>
<a href="https://municipium-images-production.s3-eu-west-1.amazonaws.com/s3/6523/allegati/guida-alal-raccolta-comuni-alta-gallura-2022.pdf" target="_blank" rel="noopener">Leitfaden zur Mülltrennung</a></p>`
      },
      emergenza: {
        title: 'Notfälle',
        body: `<h4>Notrufnummern</h4>
<p>🚑 Allgemeine Notfälle: <strong>112</strong><br>
🚒 Feuerwehr: <strong>115</strong><br>
🚓 Carabinieri: <strong>112</strong><br>
🏥 Lokaler ärztlicher Bereitschaftsdienst: Via Carlo Alberto 6 (Tel. 0789 552867) - Santa Teresa di Gallura.</p>
<h4>Nächste Notaufnahme</h4>
<p>Der ärztliche Bereitschaftsdienst in Santa Teresa Gallura befindet sich vorübergehend in der Via Carlo Alberto 6 (Tel. 0789 552867). Er ist nachts, an Sonn- und Feiertagen geöffnet. Bei schweren Notfällen wählen Sie immer die 112.</p>
<h4>Eigentümer</h4>
<p>Bei nicht-medizinischen Notfällen (Hausschäden, Schlüssel etc.) wenden Sie sich direkt an den Eigentümer unter der am schwarzen Brett angegebenen Nummer. Wir sind immer erreichbar.</p>
<h4>Brände</h4>
<p>Bei einem Brandausbruch: evakuieren, 115 anrufen und den Eigentümer benachrichtigen. Versuchen Sie nicht, Brände, die sich auf die Vegetation ausbreiten, selbst zu löschen.</p>`
      },
      accortezze: {
        title: 'Tipps & Natur',
        body: `<h4>Der Wind</h4>
<p>Conca Verde ist für seine beständige Brise bekannt — sie sorgt dafür, dass es selbst im Sommer kühl bleibt. Bei starkem Wind sichern Sie die Kissen der Sonnenliegen und schließen Sie die nordseitigen Fenster.</p>
<h4>Lokale Tierwelt</h4>
<p>In der Umgebung können Sie Eidechsen, Vögel und gelegentlich Wildschweine begegnen. Bitte nicht füttern. Wildschweine sind nicht gefährlich, sollten aber auf Abstand gehalten werden.</p>
<h4>Sonnenschutz</h4>
<p>Die sardische Sonne ist selbst im Frühling intensiv. Wir empfehlen mindestens LSF 50 und längere Sonnenbäder in den heißen Stunden (12–16 Uhr) zu vermeiden.</p>
<h4>Respekt vor der Natur</h4>
<p>Das Mittelmeer-Macchia ist ein fragiles Ökosystem. Keine Wildpflanzen oder -blumen pflücken, keine Feuer außerhalb der vorgesehenen Bereiche entzünden, besonders von Juni bis August.</p>`
      },
      partenza: {
        title: 'Check-out',
        body: `<h4>Abfahrtszeit</h4>
<p>Der Check-out ist bis 10:00 Uhr vorgesehen. Für Late-Check-out-Anfragen kontaktieren Sie uns im Voraus — wir werden unser Bestes tun, um Ihnen entgegenzukommen.</p>
<h4>Vor der Abreise</h4>
<p>— Kühlschrank von verderblichen Lebensmitteln leeren<br>
— Abfall in die entsprechenden Säcke sammeln<br>
— Alle Fenster schließen<br>
— Alle Lichter ausschalten</p>
<h4>Schlüssel</h4>
<p>Die Schlüssel in der Zahlenschloss-Box am Eingang hinterlegen. Der Code wird Ihnen beim Check-in mitgeteilt.</p>
<h4>Danke</h4>
<p>Wir hoffen, dass Ihr Aufenthalt in Itaca Villa unvergesslich war. Wir würden uns freuen, Sie wieder begrüßen zu dürfen. Eine Bewertung auf Airbnb oder Booking.com ist uns sehr wertvoll 🙏</p>`
      },
    },
    sliders: {
      spiagge: {
        title: 'Strände',
        slides: [
          { caption: 'Der Strand von Conca Verde, in 5 Minuten zu Fuß erreichbar' },
          { caption: 'Der Strand von Santa Teresa di Gallura, 10 Minuten mit dem Auto' },
          { caption: 'Der Strand von Valle dell\'Erica — ein Juwel, 5 Minuten mit dem Auto' },
          { caption: 'Der Strand La Marmorata, 5 Minuten mit dem Auto' },
          { caption: 'Der Strand Costa Paradiso — weniger als eine Stunde mit dem Auto, einer der schönsten Strände der Insel, erreichbar nur über einen kurzen Weg durch das Macchia entlang der Küste' },
        ]
      },
      luoghi: {
        title: 'Sehenswürdigkeiten',
        slides: [
          { caption: 'Der atemberaubendste Sonnenuntergang der Welt' },
          { caption: 'Santa Teresa di Gallura — das nächste Dorf, mit seiner malerischen Altstadt mit Blick auf die Straße von Bonifacio' },
          { caption: 'La Maddalena — die Hauptinsel des Archipels, in 15 Minuten per Fähre von Palau erreichbar' },
          { caption: 'Aggius — ein kleines Dorf im galluresischen Hinterland, bekannt für sardische Teppiche und das Ethnografische Museum' },
        ]
      },
      gastronomia: {
        title: 'Gastronomie',
        slides: [
          { caption: 'Die Restaurants in Santa Teresa — ultrafrischer Fisch, galluresischer Hummer und Meeresfrüchte-Antipasti' },
          { caption: 'Culurgiones und frische Pasta — traditionelle galluresische Erstgänge, ein Muss in den typischen Restaurants' },
          { caption: 'Cannonau und Vermentino — sardische Weine zu lokalen Produkten: Käse, Wurstwaren und Erdbeerbaumhonig' },
        ]
      },
    },
  },
};

/* ── Image sources (language-independent) ─────────────────────────── */
const SLIDER_SRCS = {
  spiagge: [
    'img/spiaggia.jpeg',
    'img/renabianca.jpg',
    'img/valledellerica.jpg',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=85',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85',
  ],
  luoghi: [
    'img/capotesta.jpg',
    'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1400&q=85',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1400&q=85',
    'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1400&q=85',
  ],
  gastronomia: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=85',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1400&q=85',
  ],
};

/* ── Guide icons (language-independent) ──────────────────────────── */
const GUIDE_ICONS = {
  acqua: '💧', brace: '🚫', elettricita: '⚡', wifi: '📶',
  rifiuti: '♻️', emergenza: '🚨', accortezze: '🌿', partenza: '🗝️',
};
