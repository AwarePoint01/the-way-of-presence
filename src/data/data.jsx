import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import MailIcon from '@mui/icons-material/Mail';
import healingEnergyImg from "../assets/img/healingEnergy.jpg";
import meditationImg from "../assets/img/meditation.jpg";
import readingImg from "../assets/img/reading.jpg";
import awarenessImg from "../assets/img/awareness.png";
import "flag-icons/css/flag-icons.min.css";
import { eventsInfo } from "./events";

export default {
	settings: {
		languages: {
			label: "Language",
			options: [
				{ value: "gb", name: "English" },
				{ value: "it", name: "Italiano" },
				{ value: "de", name: "Deutsch" },
			],
		},
	},
	gb: {
		appBar: {
			tab: [
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Who We Are", id: "who-we-are", icon: <GroupIcon /> },
				{ label: "Events", id: "events", icon: <EventIcon /> },
				{ label: "Contact", id: "contact", icon: <MailIcon /> },
			],
			language: {
				label: "Select Language",
				icon: <span className="fi fi-gb" style={{
					width: "100%",
					height: "100%",
					display: "block",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}} />,
			},
		},
		home: {
			title: "What do I really want?",
		},
		whoWeAre: {
			title: "Who we are",
			description: "We share ideas about growth and inner well-being, placing self-awareness at the center of every meeting. We offer events to help you discover your inner world, give the right value to life and people, address the big questions inherent in humanity, and recognize beauty and harmony.",
		},
		events: {
			title: "Events",
			subtitle: "Next events",
			description: "Check out our upcoming events.",
			noEvents: "No events are currently scheduled. Stay tuned for future meetings.",
			moreInfo: "Discover more",
			days: {
				sunday: "Every Sunday",
			},
			join: {
				title: "Join",
				name: "Name",
				email: "Email",
				message: "Hi, I would like to join the event: {event} scheduled on {date} at {time}, {location}. Please provide me with more details. Thank you!",
				send: "Send",
				sending: "Sending...",
				success: "Thank you!",
				successMessage: "Your message has been sent successfully.",
				error: "Something went wrong. Please try again.",
				cancel: "Cancel",
			},
			details: [
				{
					title: "Healing energy",
					subtitle: "Rebalance your inner energy thanks to an extraordinary technique.",
					description: "Healing energy is a unique and natural approach to restoring balance and harmony, both within ourselves and in our relationships with others. This method is based on a fundamental principle: health is the natural expression of a deep balance between body, mind, and spirit. \n\nAchieving this state means learning to love ourselves authentically and to respect our natural energy flow.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Conferences",
					subtitle: "Discover a system of ideas for the harmonious development of human being.",
					description: "<i>\"Every morning, when I wake up and look in the mirror, how many times out of 365 days do I notice myself? How many times am I 'present': not only do I look at myself, comb my hair, and perform all the actions of daily life, but do I realize, as I do them, that they have depth and substance?\" \n<span style=\"display: block; padding-top: 1em; font-size: 0.8em;\">(Ararat - The Way of Presence)</span></i> \n\nWe share ideas and tools for the harmonious development of the human being, exploring what he currently is and what he can become.",
					route: "reading",
					info: eventsInfo["reading"],
					image: readingImg,
				},
				{
					title: "Meditation",
					subtitle: "Stop now. Think for a moment that breathing is what allows you to live.",
					description: "Have you ever felt tense, carried away by emotions, dragged left and right by thoughts, in a word: absent?\n Have you ever tried to simply close your eyes and take a step inside yourself?\n\n It is precisely this step inward that allows you to distance yourself from the solicitations of life, experiencing a place of silence where you have space and time to choose what you truly want.\n\n Meditation is a practice that allows you to discover this place, practice it, and carry it with you in your daily life.",
					route: "meditation",
					info: eventsInfo["meditation"],
					image: meditationImg,
				},
				{
					title: "Awareness",
					subtitle: "Two live online days to cultivate awareness and the inner competencies needed to navigate moments of choice, complexity and change.",
					description: "",
					route: null,
					redirect: "https://awareness.ipazia-hei.com/",
					info: null,
					image: awarenessImg,
				},
			]
		},
		contact: {
			title: "Contact",
			description: "Send us a message.",
			name: "Name",
			email: "Email",
			message: "Message",
			send: "Send",
			sending: "Sending...",
			success: "Thank you!",
			successMessage: "Your message has been sent successfully.",
			error: "Something went wrong. Please try again.",
		},
	},

	it: {
		appBar: {
			tab: [
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Chi Siamo", id: "who-we-are", icon: <GroupIcon /> },
				{ label: "Eventi", id: "events", icon: <EventIcon /> },
				{ label: "Contatti", id: "contact", icon: <MailIcon /> },
			],
			language: {
				label: "Seleziona lingua",
				icon: <span class="fi fi-it" style={{
					width: "100%",
					height: "100%",
					display: "block",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}} />,
			},
		},
		home: {
			title: "Cosa voglio davvero?",
		},
		whoWeAre: {
			title: "Chi siamo",
			description: "Condividiamo idee riguardanti la crescita e il benessere interiore, mettendo al centro di ogni incontro la consapevolezza di sé. \n\nProponiamo eventi per scoprire il proprio mondo interiore, dare il giusto valore alla vita e alle persone, occuparsi delle grandi domande insite nell’uomo, riconoscere bellezza e armonia.",
		},
		events: {
			title: "Eventi",
			subtitle: "Prossimi eventi",
			description: "Scopri i nostri eventi in programma.",
			noEvents: "Al momento non sono previsti eventi. Resta aggiornato per i prossimi incontri.",
			moreInfo: "Scopri di più",
			days: {
				sunday: "Ogni domenica",
			},
			join: {
				title: "Iscriviti",
				name: "Nome",
				email: "Email",
				message: "Ciao, vorrei iscrivermi all'evento: {event} programmato il {date} alle {time}, {location}. Per favore, forniscimi maggiori dettagli. Grazie!",
				send: "Invia",
				sending: "Invio...",
				success: "Grazie!",
				successMessage: "Il tuo messaggio è stato inviato con successo.",
				error: "Qualcosa è andato storto. Per favore, riprova.",
				cancel: "Annulla",
			},
			details: [
				{
					title: "Energia risanante",
					subtitle: "Riequilibria la tua energia interiore grazie ad una tecnica straordinaria.",
					description: "Energia risanante è un approccio unico e naturale per ristabilire equilibrio e armonia, sia dentro di noi che nelle relazioni con gli altri. Questo metodo si fonda su un principio fondamentale: la salute è l’espressione naturale di un equilibrio profondo tra corpo, mente e spirito. \n\nRaggiungere questo stato significa imparare ad amarci autenticamente e a rispettare il nostro naturale flusso energetico.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Conferenze",
					subtitle: "Scopri un sistema di idee per lo sviluppo armonico dell'uomo.",
					description: "<i>\"Tutte le mattine, quando mi sveglio e mi guardo allo specchio, quante volte su 365 giorni mi accorgo di me? Quante volte 'ci sono': non solo mi guardo, mi pettino, faccio dunque tutte le azioni del quotidiano, ma mi accorgo, nel farle, che hanno spessore, profondità?\" \n<span style=\"display: block; padding-top: 1em; font-size: 0.8em;\">(Ararat - La via della presenza)</span></i> \n\nCondividiamo insieme idee e strumenti per lo sviluppo armonico dell'essere umano, indagando ciò che egli è attualmente e ciò che può divenire.",
					route: "reading",
					info: eventsInfo["reading"],
					image: readingImg,
				},
				{
					title: "Meditazione",
					subtitle: "Fermati ora. Pensa per un momento che il respiro è proprio ciò che ti consente di vivere.",
					description: "Ti sei mai sentito teso, rapito dalle emozioni, trascinato a destra e a sinistra dai pensieri, in una parola: assente?\n Hai mai provato a chiudere semplicemente gli occhi e fare un passo dentro di te?\n\n È proprio questo passo in dentro che ti permette di prendere distanza dalle sollecitazioni della vita, sperimentando un luogo di silenzio, dove tu hai uno spazio e un tempo per scegliere ciò che vuoi veramente.\n\n La meditazione è un allenamento che ti permette di scoprire questo luogo, praticarlo e portarlo con te nella vita quotidiana.",
					route: "meditation",
					info: eventsInfo["meditation"],
					image: meditationImg,
				},
				{
					title: "Awareness",
					subtitle: "Due giorni live per coltivare la consapevolezza e le competenze interiori per attraversare momenti di scelta, complessità e cambiamento",
					description: "",
					route: null,
					redirect: "https://awareness.ipazia-hei.com/",
					info: null,
					image: awarenessImg,
				},

			],
		},
		contact: {
			title: "Contatti",
			description: "Inviaci un messaggio.",
			name: "Nome",
			email: "Email",
			message: "Messaggio",
			send: "Invia",
			sending: "Invio...",
			success: "Grazie!",
			successMessage: "Il tuo messaggio è stato inviato con successo.",
			error: "Qualcosa è andato storto. Per favore, riprova.",
		},
	},
	de: {
		appBar: {
			tab: [
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Wer wir sind", id: "who-we-are", icon: <GroupIcon /> },
				{ label: "Veranstaltungen", id: "events", icon: <EventIcon /> },
				{ label: "Kontakt", id: "contact", icon: <MailIcon /> },
			],
			language: {
				label: "Sprache auswählen",
				icon: <span class="fi fi-de" style={{
					width: "100%",
					height: "100%",
					display: "block",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}} />,
			},

		},
		home: {
			title: "Was will ich wirklich?",
		},
		whoWeAre: {
			title: "Wer wir sind",
			description: "Wir teilen Ideen über Wachstum und inneres Wohlbefinden, wobei wir die Selbstwahrnehmung in den Mittelpunkt jedes Treffens stellen. Wir bieten Veranstaltungen an, die Ihnen helfen, Ihre innere Welt zu entdecken, dem Leben und den Menschen den richtigen Wert zu geben, sich mit den großen Fragen der Menschheit zu beschäftigen und Schönheit und Harmonie zu erkennen.",
		},
		events: {
			title: "Events",
			subtitle: "Nächste Events",
			description: "Entdecke unsere kommenden Veranstaltungen.",
			noEvents: "Derzeit sind keine Veranstaltungen geplant. Bleib dran für unsere nächsten Treffen.",
			moreInfo: "Mehr erfahren",
			days: {
				sunday: "Jeden Sonntag",
			},
			join: {
				title: "Teilnehmen",
				name: "Name",
				email: "E-Mail",
				message: "Hallo, ich möchte gerne am Event {event} teilnehmen, das am {date} um {time} in {location} stattfindet. Ich würde mich über weitere Informationen freuen. Vielen Dank!",
				send: "Senden",
				sending: "Wird gesendet...",
				success: "Danke!",
				successMessage: "Deine Nachricht wurde erfolgreich gesendet.",
				error: "Etwas ist schiefgelaufen. Bitte versuche es noch einmal.",
				cancel: "Abbrechen",
			},
			details: [
				{
					title: "Energieheilung",
					subtitle: "Bringe deine innere Energie mit einer besonderen Technik wieder ins Gleichgewicht.",
					description: "Energieheilung ist ein einzigartiger und natürlicher Ansatz, um Gleichgewicht und Harmonie wiederherzustellen, sowohl in uns selbst als auch in unseren Beziehungen zu anderen. Diese Methode basiert auf einem grundlegenden Prinzip: Gesundheit ist der natürliche Ausdruck eines tiefen Gleichgewichts zwischen Körper, Geist und Seele. \n\nDieses Gleichgewicht zu erreichen bedeutet, zu lernen, uns selbst authentisch zu lieben und unseren natürlichen Energiefluss zu respektieren.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Konferenzen",
					subtitle: "Entdecke ein System von Ideen für die harmonische Entwicklung des Menschen.",
					description: "<i>\"Jeden Morgen, wenn ich aufwache und in den Spiegel schaue, wie oft von 365 Tagen bemerke ich mich selbst? Wie oft bin ich 'anwesend': Ich schaue mich nicht nur an, kämme meine Haare und führe alle Handlungen des täglichen Lebens aus, sondern merke ich, während ich sie tue, dass sie Tiefe und Substanz haben?\" \n<span style=\"display: block; padding-top: 1em; font-size: 0.8em;\">(Ararat - The Way of Presence)</span></i> \n\nWir teilen Ideen und Werkzeuge für die harmonische Entwicklung des Menschen und erforschen, was er derzeit ist und was er werden kann.",
					route: "reading",
					info: eventsInfo["reading"],
					image: readingImg,
				},
				{
					title: "Meditation",
					subtitle: "Halte einen Moment inne und denke daran, dass dein Atem dir das Leben ermöglicht.",
					description: "Hast du jemals das Gefühl gehabt, angespannt zu sein, von Emotionen mitgerissen zu werden, von Gedanken hin und her geschleudert zu werden, mit anderen Worten: abwesend?\n Hast du jemals versucht, einfach die Augen zu schließen und einen Schritt in dich hinein zu tun?\n\n Es ist genau dieser Schritt nach innen, der es dir ermöglicht, dich von den Forderungen des Lebens zu entfernen und einen Ort der Stille zu finden, wo du Platz und Zeit hast, um zu wählen, was du wirklich willst.\n\n Meditation ist eine Praxis, die es dir erlaubt, diesen Ort zu entdecken, ihn zu praktizieren und ihn in deinem täglichen Leben mitzunehmen.",
					route: "meditation",
					info: eventsInfo["meditation"],
					image: meditationImg,
				},
				{
					title: "Awareness",
					subtitle: "Zwei Live-Online Tage, um Bewusstsein und die inneren Kompetenzen zu entwickeln, die erforderlich sind, um Momente der Wahl, Komplexität und Veränderung zu bewältigen.",
					description: "",
					route: null,
					redirect: "https://awareness.ipazia-hei.com/",
					info: null,
					image: awarenessImg,
				},
			],
		},
		contact: {
			title: "Kontakte",
			description: "Senden Sie uns eine Nachricht.",
			name: "Name",
			email: "Email",
			message: "Nachricht",
			send: "Senden",
			sending: "Wird gesendet...",
			success: "Vielen Dank!",
			successMessage: "Ihre Nachricht wurde erfolgreich gesendet.",
			error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
		},
	},
};