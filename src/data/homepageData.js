import uuid from "react-uuid";
import firstImage from "../assets/images/01pick.png";
import secondImage from "../assets/images/02pick.png";
import thirdImage from "../assets/images/03pick.png";
import fourthImage from "../assets/images/07pick.png";
import fifthImage from "../assets/images/05pick.png";
import sixthImage from "../assets/images/06pick.png";
import seventhImage from "../assets/images/04pick.png";
import eighthImage from "../assets/images/08pick.png";
import ninethImage from "../assets/images/09pick.png";
import tenthImage from "../assets/images/10pick.png";
import eleventhImage from "../assets/images/11pick.png";
import twelfthImage from "../assets/images/12pick.png";
import thirteenthImage from "../assets/images/13pick.png";
import fourteenthImage from "../assets/images/14pick.png";
import fifteenthImage from "../assets/images/15pick.png";
import sixteenthImage from "../assets/images/16pick.png";
import seventeenthImage from "../assets/images/17pick.png";
import eighteenthImage from "../assets/images/18pick.png";
import nineteenthImage from "../assets/images/19pick.png";
import twentiethImage from "../assets/images/20pick.png";
import firstEvent from "../assets/images/01event.png";
import secondEvent from "../assets/images/02event.png";
import thirdEvent from "../assets/images/03event.png";
import fourthEvent from "../assets/images/04event.png";
import fifthEvent from "../assets/images/05event.png";
import sixthEvent from "../assets/images/06event.png";
import seventhEvent from "../assets/images/07event.png";
import eighthEvent from "../assets/images/08event.png";
import ninethEvent from "../assets/images/09event.png";
import tenthEvent from "../assets/images/10event.png";
import eleventhEvent from "../assets/images/11event.png";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const picksImages = [
  {
    id: uuid(),
    url: firstImage,
    title: "SHIGEO SEKITO",
    subtitle: "Special Sound Series Vol.2 - The Word Vinyl LP",
    description:
      "Barely known to the international public, the Electone pioneer and virtuoso Shigeo Sekito is the man behind four LP volumes titled Special Sound Series published by Nippon Columbia between 1975 and 1977. Originally released in 1975, Shigeo Sekito’s 'Special Sound Series Vol. 2' is one of the best examples of his Electone works as a composer and pioneer",
    genre: "Electronic",
  },
  {
    id: uuid(),
    url: secondImage,
    title: "MOBY",
    subtitle: "Play (Import) Vinyl 2LP",
    description:
      "Double vinyl LP pressing. Play is the fifth studio album by electronic musician Moby, originally released in 1999. Moby's goal for Play was to return to this style of music, blending downtempo with blues and roots music samples. Originally intended to be his final record, the album was recorded at Moby's home studio in Manhattan, New York. Play eventually became the biggest-selling electronica album of all time, with over 12 million copies sold worldwide.",
    genre: "Electronic",
  },
  {
    id: uuid(),
    url: thirdImage,
    title: "FATBOY SLIM",
    subtitle: "You've Come A Long Way Baby (180g, Import) Vinyl 2LP",
    description:
      "1998 SMASH FROM FATBOY SLIM! You've come a Long Way, Baby is a benchmark big beat album that played a significant role for the genre's success in the mainstream, and here is the 20th anniversary pressing of the 11-tracker. The Rockafeller Skank, Right Here, Right Now, and Praise You are the obvious picks, but Norman Cook's signature recipe of crunchy drum breaks and ear-worm hooks keep the energy high through the rest of the LP, peep Love Island and the amusingly repetitive In Heaven.",
    genre: "Electronic",
  },
  {
    id: uuid(),
    url: fourthImage,
    title: "KOKOROKO",
    subtitle: "Kokoroko Vinyl LP",
    description:
      "The afrobeat-inspired eight-piece drop their hotly-anticipated debut. A horn-fuelled, soul-shaking introduction to the young collective. Their first solo release after featuring on london jazz primer We Out Here. Kokoroko are part of the thriving scene that’s grown out of london’s young, jazz-influenced musical circles. Across the EP’s four tracks, the eight-piece deliver on the promise of that memorable introduction, offering a bigger vision of their afrobeat-influenced, soulfully-imbued sound, west african roots shaded with inner London hues.",
    genre: "Afrobeat",
  },
  {
    id: uuid(),
    url: fifthImage,
    title: "STAN GETZ & JOAO GILBERTO",
    subtitle: "Getz / Gilberto Vinyl LP",
    description:
      "CLASSIC ALBUM THAT BROUGHT TOGETHER AMERICAN JAZZ AND BRAZILIAN BOSS NOVA. Getz / Gilberto is a collaboration between American saxophonist Stan Getz and Brazilian guitarist João Gilberto, and features composer and pianist Antônio Carlos Jobim. It helped to fuel the bossa nova craze of the 1960s and brought international attention to Astrud Gilberto who sang on the album's most celebrated songs. ",
    genre: "Bossa Nova",
  },
  {
    id: uuid(),
    url: sixthImage,
    title: "EL MICHELS AFFAIR & BLACK THOUGHT",
    subtitle: "Glorious Game Vinyl LP",
    description:
      "When Leon Michels and El Michels Affair released their first record, Sounding Out The City in 2005, it was hard to guess what was next for Michels and his then-introduced, now-patented 'cinematic soul' sound. Now, four EMA studio albums and scores of tribute and remix projects later, Michels takes his golden touch into the realm of hip-hop laying down a musical bed for one of the greatest to ever rhyme into a microphone: Black Thought of The Roots crew. On some tracks he took a more traditional hip-hop approach, starting from samples of other people’s music but then adding live instrumentation on top. But for the most part, it's him reinterpreting his own compositions into something new. The result is an organic feel of loop-based tracks that breathe and fluctuate enough for Black Thought to ex on. ",
    genre: "Funk & Soul",
  },

  {
    id: uuid(),
    url: seventhImage,
    title: "APHEX TWIN",
    subtitle: "I Care Because You Do (180g) Vinyl 2LP",
    description:
      "ORIGINALLY RELEASED IN 1995 BY APHEX TWIN, I CARE BECAUSE YOU DO was his third full length effort. It was the first of his albums to break away from being a solely ambient affair and featured a wider variety of material. Preceded by the single Ventolin, which was released on its own with multiple mixes, the record serves as the first sign post of Aphex Twin's particular sense of humor. I Care Because You Do is one of the essential records in any true head's collection.",
    genre: "IDM",
  },
  {
    id: uuid(),
    url: eighthImage,
    title: "SPITTLE RECORDS",
    subtitle: "Italia New Wave & Post Punk Vinyl LP",
    description:
      "C`EST DISCO! Finally got our hands on some copies of this excellent comp of Italian new wave, cold wave, minimal wave, et al on Spittle Records. It’s a nice companion piece to Ecstatic’s Trax Test compilation released last year, but much more concise and easier to penetrate. In the 1980s, jaded Italian punks were looking to the US and UK for inspiration, taking up synthesizers and drum machines and putting their own spin on the sound ",
    genre: "Italian Wave",
  },
  {
    id: uuid(),
    url: ninethImage,
    title: "KHRUANGBIN",
    subtitle: "Live at Stubb's Vinyl LP",
    description:
      "It`s only fitting that Khruangbin`s first-ever official live releases would be albums paired with their tourmates: artists whose music they love and admire, friends who’ve become family along the way. Khruangbin’s series of live LPs traces just one small slice of the band’s flight plan through the years: it’s a taste of some of their most beloved cities, stages and nights. Live at Stubbs features performances by Kelly Doyle, Ruben Moreno, The Suffers and Robert Ellis and Khruangbin.",
    genre: "Indie",
  },
  {
    id: uuid(),
    url: tenthImage,
    title: "LEBANON HANOVER",
    subtitle: "Tomb For Two (Colored Vinyl) Vinyl LP",
    description:
      "Lebanon Hanover's third studio outing is an iconic record that marks the end of a trilogy of albums released in little more than a year's time, book ended a period of prolific songwriting and DIY production, that effectively captures a sound reminiscent of the underground music heard circa 1981. Tomb for Tomb also features some of the band's most famous songs. With this record, the band cemented their legacy of creating anthems for the disenchanted, defying gender stereotypes and roles, and uniting in solidarity with their fellow outcasts who, together, defy normalcy even in the wake of ostracisation.",
    genre: "Dark Wave",
  },
  {
    id: uuid(),
    url: eleventhImage,
    title: "RUPA",
    subtitle: "Moja Bhari Moja / East West Shuffle (Colored Vinyl) Vinyl 7",
    description:
      "HIGHLY SOUGHT AFTER '82 INDIAN DISCO/FUSION ON 45 FOR THE 1ST TIME! The fiendishly elusive and addicting Disco Jazz LP has been harder and harder to come by as original copies have topped out at upwards of $750 USD. Thanks to the power of the algorithm, the album reached a wider audience, pushing the demand for the LP - and thus a proper reissue - through the roof. ",
    genre: "Disco Jazz",
  },
  {
    id: uuid(),
    url: twelfthImage,
    title: "SOUNDWAY",
    subtitle: "Doing It In Lagos - 1980s Nigeria Vinyl",
    description:
      "Eager to sound as American as possible with no hint of the fervour for afro-beat, afro-rock and afrocentric thinking that the 1970s had thrown up, a new generation of young Nigerian artists and performers turned their backs on their cultural roots in music and sought a new kind of stardom and fame firmly connected to the glossy, snazzy world of the 1980s that was erupting in the USA and Europe.",
    genre: "Disco",
  },
  {
    id: uuid(),
    url: thirteenthImage,
    title: "MORT GARSON",
    subtitle: "Mother Earth's Plantasia Vinyl LP",
    description:
      "Originally released in 1976, Mort Garson's Mother Earth's Plantasia has been labeled `warm earth music for plants . . . and the people who love them` and has gained a cult following in recent years despite its long-standing rare status. Built from Garson's warm Moog melodies, the album runs the gamut of moods, from charming and serene, haunting and sinister, to playful and surreal - the perfect soundtrack to hanging out (stoned or not) with your photosynthesizing pals. ",
    genre: "Ambient & Experimental",
  },
  {
    id: uuid(),
    url: fourteenthImage,
    title: "KIKAGAKU MOYO",
    subtitle: "Kikigaku Moyo (Indie Exclusive) Vinyl LP",
    description:
      "Kikagaku Moyo's debut album exerts an elemental power. Enlivening their sound with sitars, percussive drums, theremins, wind instruments and ethereal vocals, the band manages to sound powerfully spacious and lazily serene all at once. Their songs can be light as air, or heavy as earth. Many evolve out of intense experiences of engagement with the natural world. Their music is about freedom of the mind and body and building a bridge between the supernatural and the present. Improvisation is a key element to their sound.",
    genre: "Psy Rock",
  },
  {
    id: uuid(),
    url: fifteenthImage,
    title: "THE CHEMICAL BROTHERS",
    subtitle: "Dig Your Own Hole Vinyl 2LP",
    description:
      "SOPHOMORE STUDIO ALBUM FROM MANCHESTER'S THE CHEMICAL BROTHERS. Dig Your Own Hole was originally recorded between 1995 and 1997, and was the duo's first UK number one album. After the success of their debut, Exit Planet Dust, Tom Rowlands and Ed Simons further developed their psychedelic breakbeat sound. Using more rock elements, they were able to reach a larger audience. It's electronic music that rocks hard with just enough style and innovation thrown into the mix.",
    genre: "Dance/Electronic",
  },
  {
    id: uuid(),
    url: sixteenthImage,
    title: "MASSIVE ATTACK",
    subtitle: "Protection (Import) Vinyl LP",
    description:
      "Massive Attack were able to use the studio to great effect and the instrumental tracks, especially the piano driven `Weather Storm,` stand on equal footing with the rest of the album. In fact there does not seem to be a bit of filler on the record. Depending on who you ask though the live cover of The Doors' `Light My Fire,` again featuring Horace Andy, is the one love it or leave it moment on the record. Protection is a classic album that helped to define the then burgeoning trip hop and downtempo sound.",
    genre: "Trip-hop",
  },
  {
    id: uuid(),
    url: seventeenthImage,
    title: "AUTECHRE",
    subtitle: "Draft 7.30 Vinyl 2LP",
    description: "",
    genre: "IDM",
  },
  {
    id: uuid(),
    url: eighteenthImage,
    title: "MDOU MOCTAR",
    subtitle: "Niger EP Vol.2 Vinyl 12",
    description:
      "Early Mdou recordings were contained on cassettes, though the humble tape was soon replaced by the quick and easy facility of cell phone technology. Long bus rides are common in West Africa. On one of these rides, you might be seated next to a stranger and ask ‘what are you listening to?’, then a song exchange would begin over Bluetooth. This is a very real way artists found their music distributed far from home. In that vein, the Niger EP series features solely recordings taped in Mdou Moctar’s home country of Niger. Volume 1 begins the series with a mix of recordings from 2017- 2020, documenting the band at weddings, picnics, rehearsals, and even impromptu house concerts. A must have for any Mdou Moctar fan!",
    genre: "Rock",
  },
  {
    id: uuid(),
    url: nineteenthImage,
    title: "KING GIZZARD AND THE LIZARD WIZARD",
    subtitle: "Nonagon Infinity Vinyl LP",
    description:
      "Conceptually, not much specific Lizard Wizard mythology to be gleaned from this but we now know that a nonagon is a nine-sided polygon (that’s it on the cover, and yeah there’s nine songs). And despite the heavy-handed arrangement, the songs are actually quite diverse. Highlights include “Big Fig Wasp,” “Gamma Knife,” “Invisible Face” and “Wah Wah.” Triple color marble variant, housed in gatefold jacket with full color printed insert.",
    genre: "Psy Rock",
  },
  {
    id: uuid(),
    url: twentiethImage,
    title: "THE PRODIGY",
    subtitle: "Their Law Vinyl 2LP",
    description:
      "This collection is gonna be a trip down memory lane for a lot of y'all, and just a plain trip for some. Every single that the group released from the moment they signed to XL in 1990 is here, from the Jilted Generation cuts (`Their Law,` `Poison`) to the Fat of the Land hits (`Smack My Bitch Up,` `Firestarter`) to the totally overlooked current shit. 15 tracks in all, un-chronologically spread over two LPs.",
    genre: "Dance/Electonic",
  },
];

export const events = [
  {
    id: uuid(),
    url: firstEvent,
    name: "DiscoDisco",
    date: "01.02.2023",
    description:
      "Summer's officially here, and our lovely community is ready to boogie. Plus, to top it off, Zapata is turning 30 years old! What better way to celebrate than by bringing the party home? Join us for this special birthday bash edition of DiscoDisco, featuring b2b2b2b sets by our residents and some of our favorite friends who we've had the pleasure of playing with over the years (plus a few surprise guests). Arrive early, stay late, and as always, expect a fantastic mix of disco, house, jazz, afro, and everything in between!",
  },
  {
    id: uuid(),
    url: secondEvent,
    name: "Pattern Live",
    date: "15.04.2023",
    description:
      "Pattern Club Live is back with another showcase of cutting-edge experiments in pattern-based music and performance. Acts will include mutant live drum experiments, modular-cyborg-synth arpeggios, and an algorithmic robot dance performance, each feeding our minds with their own twist on patterned form. This will lead into live coded algorithmic bangers from Sheffield's finest algorave musicians.",
  },
  {
    id: uuid(),
    url: thirdEvent,
    name: "HOME",
    date: "14.03.2023",
    description:
      "HOME is your recurring after-hours at OHM, the smaller sibling of Tresor dedicated to forward-thinking dance music. HOME strives to be an inviting space for heartfelt eclectisms, a shelter for joyful dancers seeking challenging and uplifting listening experiences. Hosts and residents DJ Swim, Liniae, and Tina will welcome a different secret guest each time from a variety of experienced artists and compelling newcomers.",
  },
  {
    id: uuid(),
    url: fourthEvent,
    name: "Carolco(live)",
    date: "25.03.2023",
    description:
      "As the city awakens from its post-Covid lethargy, Berlin-based musicians Al Pagoda and Airaboi head into the studio. They are intent on producing a series of tracks governed by spontaneity: `Each session was limited to the number of tracks available on the mixing console,` Pagoda explains. We would mostly record first takes, with very minimal post-production. We wanted to capture the energy of the moment.",
  },
  {
    id: uuid(),
    url: fifthEvent,
    name: "RFLXN",
    date: "02.04.2023",
    description:
      "Located on the grounds of the former Bärenquell brewery factory in East Berlin. 2 converted Warehouse dancefloors with state of the art sound systems. Custom made by Kirsch Audio. 40kW, 48 channels, 153 drivers, signature horn technology cash and cashless payment. 5 min walk from Schöneweide station, 4 stops from Ostkreuz and 3 stops from Neukölln with S-Bahn. 18 minutes by Bus 165 from Schlesisches Tor",
  },
  {
    id: uuid(),
    url: sixthEvent,
    name: "Bass Down",
    date: "15.04.2023",
    description:
      "In the walls of Mensch Meier, we present a finest lineup. We start live with DiscoPunk vs.TechnoCrust, then step through the night to deep techno, industrial and rave, drum and bass and downtempo. This time, the proceeds will go to Blindspots, who do support work in bosnia, to the organization of the action camp against the planned deportation center at BER Brandenburg and, as every time, partly to individuals with costs for the right to stay.",
  },
  {
    id: uuid(),
    url: seventhEvent,
    name: "Bombaclart Bass",
    date: "27.04.2023",
    description:
      "Bombaclart Bass Dance Party Vol. 4. First Dance Party in Berlin is about to take place at Loftus Hall in Berlin Kreuzberg. The music is gonna be a blend of different styles such as breakbeats/ jungle and Trap/ Drill but also Pop and Dance music. We want you to enjoy yourself and have a good time",
  },
  {
    id: uuid(),
    url: eighthEvent,
    name: "Moonlighting",
    date: "12.05.2023",
    description:
      "An all-night reunion of three great friends serving up a nonstop blend of jackin and sensual house, techno, brainy breaks and footworks. Monty DJ, mullet lord of fragmented shiny textures and mosaic-like rhythms, both in his own productions and sets as well as in the releases of his record labels Flippen Disks and Flippen Bits ...",
  },
  {
    id: uuid(),
    url: ninethEvent,
    name: "Vulkan Dance",
    date: "19.05.2023",
    description:
      "Like with any good tradition - pausing it for some time will just make it better. This goes for the annual post - KARNEVAL DER KULTUREN PARADE - soirée at SAMEHEADS, under the banner of VULKANDANCE. The corona virus paused this tradition for a while, now - but here we are back again in true style + fashion : SAMEHEADS survivor + veteran DJ NOMAD invited 2 of his favourite selectors of tropical music to share the 1210ers (Yes, it's a vinyl session) on this special day.",
  },
  {
    id: uuid(),
    url: tenthEvent,
    name: "Baketown Berlin",
    date: "26.05.2023",
    description:
      "Afro Latin Bliss with a Psychedelic Twist! Join us as we launch Acid Baile which is Berlin's newest party collective that will be showering dancefloors with their soulful Latin electronica fused with heavy bassline beats! For our debut party we have brought together a feast full of tropical heavyweights with Kotoe & Grace Kelly joined by resident DJ's Philippo & MonoAbe.",
  },
  {
    id: uuid(),
    url: eleventhEvent,
    name: "Grounded Theory",
    date: "23.02.2023",
    description: "57th edition of Grounded Theory Berlin.",
  },
];

export const schedule = [
  { id: 1, day: "Mon", time: "12:00", artist: "RIOT" },
  { id: 2, day: "Mon", time: "14:00", artist: "SUN-DRIED" },
  { id: 3, day: "Mon", time: "15:00", artist: "Bora Bora" },
  { id: 4, day: "Mon", time: "18:00", artist: "Truck Cantine" },
  { id: 5, day: "Mon", time: "20:00", artist: "prof.amatör w/ fosil" },
  { id: 6, day: "Mon", time: "22:00", artist: "Memorie" },
  { id: 7, day: "Tue", time: "14:00", artist: "nestwork" },
  { id: 8, day: "Tue", time: "15:00", artist: "DUGA" },
  { id: 9, day: "Tue", time: "16:00", artist: "Genre-Fluid" },
  { id: 10, day: "Tue", time: "17:00", artist: "Rhizome" },
  { id: 11, day: "Tue", time: "18:00", artist: "avederparaiso" },
  { id: 12, day: "Tue", time: "19:00", artist: "Daily Maqam" },
  { id: 13, day: "Tue", time: "23:00", artist: "Self-Focused" },
  { id: 14, day: "Tue", time: "00:00", artist: "Life on Mars" },
  { id: 15, day: "Wed", time: "15:00", artist: "Mostaken" },
  { id: 16, day: "Wed", time: "16:00", artist: "Central Shock" },
  { id: 17, day: "Wed", time: "18:00", artist: "Onat Hafiz" },
  { id: 18, day: "Wed", time: "23:00", artist: "Novum Organum" },
  { id: 19, day: "Thu", time: "17:00", artist: "Kaos Feneri" },
  { id: 20, day: "Thu", time: "18:00", artist: "Cosmic Delights" },
  { id: 21, day: "Thu", time: "19:00", artist: "Widows Collective" },
  { id: 22, day: "Thu", time: "21:00", artist: "Queer Catharsis" },
  { id: 23, day: "Thu", time: "23:00", artist: "Flü" },
  { id: 24, day: "Fri", time: "14:00", artist: "nik dervis" },
  { id: 25, day: "Fri", time: "22:00", artist: "zerøstatik w/ Kodar" },
  { id: 26, day: "Sun", time: "13:00", artist: "ear catching" },
  { id: 27, day: "Sun", time: "14:00", artist: "nik dervis" },
  { id: 28, day: "Sun", time: "15:00", artist: "Amar Diwakar" },
  { id: 29, day: "Sun", time: "16:00", artist: "Sinem Tekin" },
  { id: 30, day: "Sun", time: "18:00", artist: "it's not for sale" },
  { id: 31, day: "Sun", time: "19:00", artist: "Delfi" },
  { id: 32, day: "Sun", time: "22:00", artist: "Visca Pasar" },
];
