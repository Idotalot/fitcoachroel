import React, { useState, useEffect } from 'react';
import { images } from '../ultils/importImages';

function Homepage() {
  const [openModal, setOpenModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  

  const programDetails = {
    personal: {
      title: 'Personal Training',
      description: 'Individuele begeleiding waarbij we focussen op jouw specifieke doelen. Perfect voor beginners en gevorderden die persoonlijke aandacht willen.',
      features: [
        '1-op-1 training sessies met volledige aandacht',
        'Op maat gemaakt programma afgestemd op jouw doelen',
        'Techniek correctie en veilige uitvoering',
        'Voortgang tracking en periodieke evaluaties',
        'Flexibele planning die past bij jouw agenda',
        'Persoonlijke motivatie en begeleiding',
        'Inbody metingen om voortgang te meten',
        'Voedingsadvies op maat'
      ],
      pricing: [
        {
          item: 'Kennismakingssessie',
          price: '€30,00',
          additionalInfo: 'Eénmalige introductie sessie van 60 minuten'
        },
        {
          item: 'Pakket van 10 sessies',
          price: '€599,00',
          additionalInfo: '€59,90 per sessie'
        }
      ],
      duration: 'Sessies van 60 minuten'
    },
    groep: {
      title: 'Groepstraining',
      description: 'Train samen met anderen in kleine groepen. Motiverend, gezellig en effectief. Perfect voor mensen die graag in groepsverband trainen. De lessen vinden plaats op locatie bij Maas en Waalfit.',
      features: [
        'Kleine groepen (max 4-6 personen) voor persoonlijke aandacht',
        'Gezellige en motiverende sfeer',
        'Groepsdynamiek die je extra motiveert',
        'Diverse trainingen: kracht, cardio, HIIT',
        'Flexibele planning met verschillende tijdstippen',
        'Voor alle niveaus, van beginner tot gevorderd',
        'Sociale aspect: train samen, bereik meer'
      ],
      pricing: [
        {
          item: 'Losse sessie',
          price: '€20,00',
          additionalInfo: 'Per sessie van 60 minuten'
        },
        {
          item: 'Strippenkaart 15 sessies',
          price: '€225,00',
          additionalInfo: '€15 per groepssessie'
        },
      ],
      duration: 'Sessies van 60 minuten'
    },
    duo: {
      title: 'Duo Training',
      description: 'Train samen met een vriend of familielid. Motiverend, gezellig en effectief. Perfect voor mensen die graag samen trainen. De lessen vinden plaats op locatie bij Maas en Waalfit.',
      features: [
        'Training in duo met een vriend of familielid',
        'Aandacht voor jullie doelen',
        'Dubbele motivatie, dubbel resultaat',
        'Uitdagende duo-oefeningen die je samen doet',
        'Techniek correctie',
        'Voortgang tracking en periodieke evaluaties',
        'Betaalbaar tarief'
      ],
      pricing: [
        {
          item: 'Losse sessie',
          price: '€40,00',
          additionalInfo: 'Per sessie van 60 minuten (per persoon)'
        },
        {
          item: 'Pakket van 10 sessies',
          price: '€450,00',
          additionalInfo: '30 per sessie'
        }
      ],
      duration: 'Sessies van 60 minuten'
    }
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you send it to EmailJS or your backend
    console.log("Form submitted:", formData);

    alert("Bericht verstuurd!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  }; 

  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal(null);
        document.body.style.overflow = 'auto';
      }
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (openModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else if (!openModal) {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (!openModal) {
        document.body.style.overflow = 'auto';
        console.log("overflow")
      }
    };
  }, [openModal, isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#1a181b] h-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="md:flex-shrink-0">
              <img src={images['logo.jpg']} alt="FitCoachRoel" className="h-20" />
            </div>
            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center">
              <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">Over FitCoachRoel</a>
              <a href="#programs" className="text-gray-300 hover:text-white transition">Programma's</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
            {/* Desktop Button */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ba974d] hover:bg-[#99742c] text-white px-6 py-2 rounded-lg transition"
              >
                Neem contact op
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#1a181b] border-t border-gray-700 shadow-lg z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition py-2"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition py-2"
                >
                  Over FitCoachRoel
                </a>
                <a 
                  href="#programs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition py-2"
                >
                  Programma's
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Home Section - Home */}
      <section 
        id="home" 
        className="w-full px-6 py-20 scroll-mt-20npm s relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${images['background2.jpg']})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            FitCoachRoel: 
            <span className="text-[#ba974d]"> Het behalen van jouw doel.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Als Personal trainer help ik jou graag om jou doelstelling wel te behalen. We zien vaak dat mensen een doelstelling hebben, maar niet weten hoe en waar moet ik beginnen. Op welk gewicht moet ik nu trainen? Hoeveel sets moet ik herhalen? Zit ik wel goed op het toestel? Door jou met een flinke portie motivatie, positieve energie en tevens ook nog fanatiek aan te moedigen gaan wij er samen voor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ba974d] hover:bg-[#99742c] text-white py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105">
              <a href="#contact" className='px-8 py-4'>
                Begin vandaag nog
              </a>  
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-lg font-semibold transition border border-gray-300">
              <a href="#about" className='px-8 py-4'>
                Meer info
              </a>              
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Waarom FitCoachRoel?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition border border-gray-200">
            <div className="w-16 h-16 bg-[#ba974d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gepersonaliseerde plannen</h3>
            <p className="text-gray-600">
              Aangepaste training en voeding plannen aangepast aan jouw specifieke doelen, 
              niveau en levensstijl.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition border border-gray-200">
            <div className="w-16 h-16 bg-[#ba974d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Ondersteuning</h3>
            <p className="text-gray-600">
              Krijg richting en motivatie wanneer je het nodig hebt. 
              Ik ben hier om jouw vragen te beantwoorden en je op de juiste weg te houden.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition border border-gray-200">
            <div className="w-16 h-16 bg-[#ba974d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gegarandeerde Resultaten</h3>
            <p className="text-gray-600">
              
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 scroll-mt-20">
              Over FitCoachRoel
          </h2>
          {/* <div className="max-w-4xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Wie ben ik?
                </h3>
                <p className="text-gray-600 mb-4">
                  Mijn naam is Roel Arts, ik ben 35 jaar en ik kom uit Beneden-Leeuwen.  
                  Ik sta aan het begin van een nieuw avontuur als personal trainer onder de naam FitCoachRoel.                 
                </p>
                <p className="text-gray-600 mb-4">
                  Om te laten zien wat structuur, training en voeding écht met je lichaam kan doen, start ik mijn eigen 6-weken traject.  
                  Mijn doel? Focus op spieropbouw, balans en duurzaamheid.
                </p>
                <p className="text-gray-600 mb-4">
                  Maar dit gaat niet alleen over mij. Ik wil jou inspireren om ook stappen te zetten richting jouw doelen — of dat nu afvallen is, sterker worden of simpelweg fitter leven.
                </p>
                <p className="text-gray-600">
                  Samen gaan we ervoor!
                  Met focus, begeleiding en toewijding bouwen we aan de beste versie van jezelf.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Mijn Aanpak</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Intake gesprek met Inbody meting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Persoonlijk trainingsplan op maat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Begeleiding tijdens de training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Voortgang monitoren en bijstellen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Motivatie en support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Wie ben ik?
                </h3>
                <p className="text-gray-600 mb-4">
                  Mijn naam is Roel Arts, ik ben 35 jaar en ik kom uit Beneden-Leeuwen.  
                  Ik sta aan het begin van een nieuw avontuur als personal trainer onder de naam FitCoachRoel.                 
                </p>
                <p className="text-gray-600 mb-4">
                  Om te laten zien wat structuur, training en voeding écht met je lichaam kan doen, start ik mijn eigen 6-weken traject.  
                  Mijn doel? Focus op spieropbouw, balans en duurzaamheid.
                </p>
                <p className="text-gray-600 mb-4">
                  Maar dit gaat niet alleen over mij. Ik wil jou inspireren om ook stappen te zetten richting jouw doelen — of dat nu afvallen is, sterker worden of simpelweg fitter leven.
                </p>
                <p className="text-gray-600">
                  Samen gaan we ervoor!
                  Met focus, begeleiding en toewijding bouwen we aan de beste versie van jezelf.
                </p>
              </div>
              {/* <div className="bg-white p-8 rounded-lg shadow-lg"> */}
              <div className="order-1 md:order-2">
                <img src={images['aboutme2.jpg']} alt="Roel Arts" className="w-full md:w-96 h-96 object-cover object-top rounded-lg" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={images['aboutme5.jpg']} alt="Roel Arts" className="w-full md:w-96 h-96 object-cover rounded-lg" />
              </div>
              <div className="rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mijn Aanpak</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Intake gesprek met Inbody meting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Persoonlijk trainingsplan op maat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Begeleiding tijdens de training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Voortgang monitoren en bijstellen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ccb521] mr-2">✓</span>
                    <span>Motivatie en support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="container mx-auto px-6 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Mijn Programma's
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#ba974d] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Training</h3>
              <p className="text-gray-600 mb-4">
                Individuele begeleiding waarbij we focussen op jouw specifieke doelen. Perfect voor beginners en gevorderden die persoonlijke aandacht willen.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 1-op-1 training sessies</li>
                <li>• Op maat gemaakt programma</li>
                <li>• Techniek correctie</li>
                <li>• Voortgang tracking</li>
              </ul>
              <button 
                onClick={() => setOpenModal('personal')}
                className="w-full bg-[#ba974d] hover:bg-[#99742c] text-white px-6 py-3 rounded-lg transition"
              >
                Meer Info
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#ba974d] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Two people side by side - Duo Training */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Duo Training</h3>
              <p className="text-gray-600 mb-4">
                Train samen met een vriend of familielid. Motiverend, gezellig en effectief. Perfect voor mensen die graag samen trainen.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Training in duo met een vriend of familielid</li>
                <li>• Aandacht voor jullie doelen</li>
                <li>• Dubbele motivatie, dubbel resultaat</li>
                <li>• Uitdagende duo-oefeningen </li>
              </ul>
              <button 
                onClick={() => setOpenModal('duo')}
                className="w-full bg-[#ba974d] hover:bg-[#99742c] text-white px-6 py-3 rounded-lg transition"
              >
                Meer Info
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#ba974d] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Groepstraining</h3>
              <p className="text-gray-600 mb-4">
                Train samen met anderen in kleine groepen. Motiverend, gezellig en effectief. Perfect voor mensen die graag in groepsverband trainen.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Kleine groepen (max 4 personen)</li>
                <li>• Gezellige sfeer</li>
                <li>• Motiverende omgeving</li>
                <li>• Betaalbaar tarief</li>
              </ul>
              <button 
                onClick={() => setOpenModal('groep')}
                className="w-full bg-[#ba974d] hover:bg-[#99742c] text-white px-6 py-3 rounded-lg transition"
              >
                Meer Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Neem Contact Op
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Laat een bericht achter
                </h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="jouw@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="06-12345678"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                      placeholder="Vertel me over jouw doelen..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ba974d] hover:bg-[#99742c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
                  >
                    Verstuur Bericht
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Informatie
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#ba974d] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@fitcoachroel.nl</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#ba974d] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefoon</h4>
                      <p className="text-gray-600">06-12345678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#ba974d] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Locatie</h4>
                      <p className="text-gray-600">Nederland</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Beschikbaarheid
                  </h4>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Maandag - Vrijdag:</span> 06:00 - 22:00
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Zaterdag:</span> 08:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Zondag:</span> Gesloten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="home" 
        className="w-full px-6 py-20 scroll-mt-20npm s relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${images['background1.jpg']})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-gradient-to-r from-[#ba974d] to-[#99742c] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Klaar om te Beginnen?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Neem vandaag nog contact op en krijg een gratis intake gesprek. 
              Laten we samen werken aan jouw fitness doelen.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-[#99742c] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Neem Nu Contact Op
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 mb-4 md:mb-0">
            © 2025 FitCoachRoel. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#ccb521] transition">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-[#ccb521] transition">Terms</a>
            <a href="#contact" className="text-gray-600 hover:text-[#ccb521] transition">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#ba974d] text-white p-6 rounded-t-lg flex justify-between items-center">
              <h2 className="text-3xl font-bold">{programDetails[openModal].title}</h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition text-2xl font-bold"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-lg mb-6">
                {programDetails[openModal].description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Wat krijg je?</h3>
                <ul className="space-y-3">
                  {programDetails[openModal].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#ba974d] mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prijzen & Pakketten</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-[#ba974d] text-white">
                        <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Pakket</th>
                        <th className="px-4 py-3 text-left font-semibold">Prijs</th>
                        <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Extra Informatie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {programDetails[openModal].pricing.map((option, index) => (
                        <tr 
                          key={index} 
                          className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                            index === programDetails[openModal].pricing.length - 1 ? 'border-b-0' : ''
                          }`}
                        >
                          <td className="px-4 py-3 text-gray-900 font-medium">{option.item}</td>
                          <td className="px-4 py-3 text-[#ba974d] font-bold text-lg">{option.price}</td>
                          <td className="px-4 py-3 text-gray-600 text-sm">{option.additionalInfo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  <span className="font-semibold">Duur:</span> {programDetails[openModal].duration}
                </p>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                *Disclaimer: Om PT, Duo Training of SGT te volgen dient u een <a href="https://maasenwaalfit.nl/tarieven/" className='text-[#ba974d] hover:text-[#99742c] transition underline'> FIT 12 abonnement</a> af te nemen bij Maas en Waalfit. U kunt dan naast uw training onbeperkt aan uw doelen werken.*
              </p>
              
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    closeModal();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 bg-[#ba974d] hover:bg-[#99742c] text-white px-6 py-3 rounded-lg transition font-semibold"
                >
                  Neem Contact Op
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition font-semibold"
                >
                  Sluiten
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;

