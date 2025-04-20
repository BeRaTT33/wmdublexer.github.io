console.log("Script yüklendi.");

const translations = {
    "tr": {
      "welcome": "Merhaba, hoş geldiniz!",
      "home": "Ana Sayfa",
      "about": "Hakkımızda",
      "rooms": "Odalar",
      "contact": "İletişim",
      "about_title": "Hakkımızda",
      "about_text": "Misyonumuz; Misafirlerimize unutulmaz bir konaklama deneyimi sunarak, onların her anını özel hissettirmek için buradayız. Doğal çevreye ve yerel kültüre saygılı, sürdürülebilir uygulamalarla; konforu, güveni ve samimiyeti bir araya getiriyoruz.",
      "about_feature1": "Misafir odaklı yaklaşımımızla ihtiyaçlarını öngörüyor, kişiye özel hizmetler sunuyoruz.",
      "about_feature2": "Çevre dostu politikalarımızla gelecek nesillere temiz bir dünya bırakmayı hedefliyoruz.",
      "about_feature3": "Yetkin ve mutlu ekibimizle sektörde örnek bir duruş sergiliyor, sürekli yenilikçi çözümler üretiyoruz.",
      "services_title": "Hizmetlerimiz",
    "service_title1": "KLİMA Sistemleri",
    "service_desc1": "Her Odamızda iki klima bulunmaktadır.",
    "service_title2": "Güvenlik Hizmetleri",
    "service_desc2": "7/24 Güvenlik Hizmeti Sunuyoruz rahatça kalabilirsiniz.",
    "service_title3": "Temizlik Hizmetleri",
    "service_desc3": "Odalarımız her kullanımdan sonra temizlenmektedir.",
    "service_title4": "İnternet Hizmetlerimiz",
    "service_desc4": "Her odamıza 7/24 internet hizmeti sunuyoruz.",
    "service_title5": "Sıcak Su Sistemleri",
    "service_desc5": "Sıcak su sistemleriyle rahatınızı koruyoruz.",
"neden_title": "Neden Biz",
"neden_text": "Her bütçeye uygun hizmet veren firmamızın ilk önceliği müşteri memnuniyetidir. Günlük ve Kısa Konaklamalarınızda güler yüzlü personellerimiz ile sizi evinizde gibi hissettirmek tek temennimizdir. Personellerimizle veya Günlük Dairelerimiz ile alakalı şikayetlerinizi yönetime bildirmenizi önemle rica ediyoruz.",
"neden_subtitle": "VM Dubleks Günlük Konaklama",
"neden_desc": "VM Dubleks konaklama tüm ruhsat ve belgelere sahip olup kişisel verilerinizin gizliliği ve konforlu konaklamanız için yanınızdadır.",
"neden_list1": "✅ Her bütçeye uygun <strong>en iyi fiyat garantisi</strong>.",
"neden_list2": "✅ 7/24 kesintisiz hizmet.",
"neden_list3": "✅ Sınırsız Wi-Fi",
"neden_list4": "✅ Her Dairede Klima & Televizyon",
"neden_list5": "✅ Temizlik & Dezenfekte Hizmeti",
"neden_call": "HEMEN ARAYIN",
"istatistikler_title": "İstatistiklerimiz",
"istatistikler_years": "Sektörde Bulunduğumuz süre",
"istatistikler_customers": "Müşteri",
"istatistikler_apartments": "Daire",
"istatistikler_satisfaction": "Memnuniyet (%)",
"rooms_title": "Odalarımız",
"room_desc": "Modern ve responsive web tasarım çözümleri",
"see_details": "Detayları Gör",
"get_offer": "Teklif Al",
"close": "Kapat",

"room1_title": "1+1 Villa",
"room1_detail1": "✔ 1 Yatak Odası",
"room1_detail2": "✔ Klima Sistemleri",
"room1_detail3": "✔ 1 Salon",
"room1_detail4": "✔ Mutfak Eşyaları",
"room1_detail5": "✔ Sıcak Su Sistemleri",

"room2_title": "Süper Dublex Villa",
"room2_detail1": "✔ 2 yatak odası. Daha fazla yatak. 6 kişilik grup veya aile için önerilir.",
"room2_detail2": "✔ Klima Sistemleri",
"room2_detail3": "✔ 1 Salon",
"room2_detail4": "✔ Mutfak Eşyaları",
"room2_detail5": "✔ Sıcak Su Sistemleri",

"room3_title": "2+1 Villa",
"room3_detail1": "✔ 2 Yatak Odası",
"room3_detail2": "✔ Klima Sistemleri",
"room3_detail3": "✔ 1 Salon",
"room3_detail4": "✔ Mutfak Eşyaları",
"room3_detail5": "✔ Sıcak Su Sistemleri",

"testimonials_title": "Müşteri Yorumları",
"testimonial_1_name": "Elif Yılmaz",
"testimonial_1_location": "Mersin, Türkiye",
"testimonial_1_comment": "“Merhaba Şehri Su Villaların da 1 gün konaklama yapdım hijyen açısından otelerden daha temiz ve çok iyi çalışanları var bi arzumuz oldunda telefon acmamız yetiyor arkadaşımla çok memnun kaldık herkese tavsiye ediyorum”",

"testimonial_2_name": "İsmail Gedük",
"testimonial_2_location": "Adana, Türkiye",
"testimonial_2_comment": "“Gerçekten mükemmel bir yer çalışanları çok ilgili ve güler yüzlü mutlaka tercih edin pişman olmayacaksınız”",

"testimonial_3_name": "Ayşe Korkmaz",
"testimonial_3_location": "İzmir, Türkiye",
"testimonial_3_comment": "“Verilen hizmetten menmunuz konaklamak isteyen arkadaşlara tavsiye ederim”",

"faq_title": "Sıkça Sorulan Sorular",
"faq_1_question": "Haftaiçi ve Haftasonu Fiyatlarınız Fark Ediyormu?",
"faq_1_answer": "Hayır hafta içi veya hafta sonu fiyatlarımız değişmiyor.",
"faq_2_question": "Daireleriniz Düzenli Olarak Temizleniyor Mu?",
"faq_2_answer": "Dairelerimiz misafirlere teslim edilmeden önce tamamen profesyonel ekibimiz tarafından temizlenir, havlu, çarşaf, yastık, nevresim vb. ekstra hijyen gerektiren eşyalar günlük olarak değiştirilir. Dairede uzun süre kalınması durumunda, önceden daireye ekstra nevresim, yastık, havlu, çarşaf vb. eşyalar dahil edilir. Her bir daire yılda en az 2 defa boyanır, zarar gören veya kalıcı kirlenen mobilyalar varsa daire kiralanmadan önce yenisiyle değiştirilir.",
"faq_3_question": "Kiraladığım Daireye Misafir Alabilirmiyim?",
"faq_3_answer": "Daireyi kiralamadan önce, daireyi kiralayan haricinde başkalarının da konaklayacağı bildirildiği takdirde misafirlerinizi kimlik bildirimi şartıyla ağırlayabilirsiniz. Misafirlerinizin daire içinde yapacağı yasal olmayan, can ve mal güvenliğini tehlikeye atan veya daireye zarar verecek her durumda daireyi kiralayan kişi sorumlu tutulur.",
"faq_4_question": "Dairelerinizi Ne Kadar Süreyle Kiralayabiliriz?",
"faq_4_answer": "Günlük daire veya evlerimizi haftalık ya da aylık olarak kiralayabilirsiniz. 7 günden uzun kiralamalarda, talebiniz olmasa bile haftada en az 1 defa, ekibimiz tarafından önceden haber verilerek ve izin alınarak daire kontrol ve temizlik amacıyla ziyaret edilir.",
"footer_logo": "Med10",
"footer_description": "Şirketlerin kendilerini web'te tanıtma istekleri alanında danışmanlık hizmeti veriyoruz ve şirketlerin en üst seviyeye ulaşmalarına yardımcı oluyoruz. İş süreçlerini optimize ederek kolaylaştırıyoruz.",
"footer_quick_links": "Hızlı Bağlantılar",
"footer_home": "Ana Sayfa",
"footer_about": "Hakkımızda",
"footer_rooms": "Odalar",
"footer_contact": "İletişim",
"footer_contact_title": "İletişim",
"footer_address": "Adres",
"footer_phone": "numara",
"footer_social": "Sosyal Medya",
"footer_rights_reserved": "Tüm Hakları Saklıdır."

    },

    "en": {
      "welcome": "Hello, welcome!",
      "home": "Home",
      "about": "About Us",
      "rooms": "Rooms",
      "contact": "Contact",
      "about_title": "About Us",
      "about_text": "Our mission is to provide guests with an unforgettable accommodation experience, making every moment feel special. We combine comfort, trust, and sincerity with environmentally friendly and sustainable practices that respect nature and local culture.",
      "about_feature1": "We anticipate guests' needs with a guest-focused approach and offer personalized services.",
      "about_feature2": "We aim to leave a clean world for future generations with our eco-friendly policies.",
      "about_feature3": "With our competent and happy team, we set an example in the sector and constantly produce innovative solutions.",
      "services_title": "Our Services",
    "service_title1": "Air Conditioning Systems",
    "service_desc1": "Each of our rooms has two air conditioners.",
    "service_title2": "Security Services",
    "service_desc2": "We provide 24/7 security so you can stay comfortably.",
    "service_title3": "Cleaning Services",
    "service_desc3": "Rooms are cleaned after each use.",
    "service_title4": "Internet Services",
    "service_desc4": "We provide 24/7 internet service to every room.",
    "service_title5": "Hot Water Systems",
    "service_desc5": "We ensure your comfort with hot water systems.",
    "neden_title": "Why Us",
"neden_text": "Our company offers services for every budget, with customer satisfaction as the top priority. For your daily and short stays, our friendly staff aim to make you feel at home. Please report any complaints about our staff or our daily apartments to management.",
"neden_subtitle": "VM Duplex Daily Stay",
"neden_desc": "VM Dubleks is fully licensed and certified, ensuring the privacy of your personal data and a comfortable stay.",
"neden_list1": "✅ Best price guarantee for every budget.",
"neden_list2": "✅ 24/7 uninterrupted service.",
"neden_list3": "✅ Unlimited Wi-Fi",
"neden_list4": "✅ Air Conditioning & TV in Every Room",
"neden_list5": "✅ Cleaning & Disinfection Services",
"neden_call": "CALL NOW",
"istatistikler_title": "Our Statistics",
"istatistikler_years": "Years in the Industry",
"istatistikler_customers": "Customers",
"istatistikler_apartments": "Apartments",
"istatistikler_satisfaction": "Satisfaction (%)",
"rooms_title": "Our Rooms",
    "room_desc": "Modern and responsive web design solutions",
    "see_details": "See Details",
    "get_offer": "Get a Quote",
    "close": "Close",

    "room1_title": "1+1 Villa",
    "room1_detail1": "✔ 1 Bedroom",
    "room1_detail2": "✔ Air Conditioning Systems",
    "room1_detail3": "✔ 1 Living Room",
    "room1_detail4": "✔ Kitchenware",
    "room1_detail5": "✔ Hot Water Systems",

    "room2_title": "Super Duplex Villa",
    "room2_detail1": "✔ 2 bedrooms. Extra beds. Recommended for groups or families of 6.",
    "room2_detail2": "✔ Air Conditioning Systems",
    "room2_detail3": "✔ 1 Living Room",
    "room2_detail4": "✔ Kitchenware",
    "room2_detail5": "✔ Hot Water Systems",

    "room3_title": "2+1 Villa",
    "room3_detail1": "✔ 2 Bedrooms",
    "room3_detail2": "✔ Air Conditioning Systems",
    "room3_detail3": "✔ 1 Living Room",
    "room3_detail4": "✔ Kitchenware",
    "room3_detail5": "✔ Hot Water Systems",

    "istatistikler_title": "Our Statistics",
    "istatistikler_years": "Years in the Industry",
    "istatistikler_customers": "Customers",
    "istatistikler_apartments": "Apartments",
    "istatistikler_satisfaction": "Satisfaction (%)",
"testimonials_title": "Customer Reviews",
  "testimonial_1_name": "Elif Yılmaz",
  "testimonial_1_location": "Mersin, Türkiye",
  "testimonial_1_comment": "“Hello, I stayed at Şehri Su Villas for 1 day. It was cleaner than hotels in terms of hygiene, and the staff were excellent. Whenever we had a request, just a phone call was enough. My friend and I were very satisfied. I recommend it to everyone.”",

  "testimonial_2_name": "İsmail Gedük",
  "testimonial_2_location": "Adana, Türkiye",
  "testimonial_2_comment": "“Truly an amazing place. The staff are very attentive and friendly. You must try it — you won’t regret it.”",

  "testimonial_3_name": "Ayşe Korkmaz",
  "testimonial_3_location": "Izmir, Türkiye",
  "testimonial_3_comment": "“We are satisfied with the service. I recommend it to friends who want to stay.”",
  "faq_title": "Frequently Asked Questions",
  "faq_1_question": "Do Your Weekday and Weekend Prices Differ?",
  "faq_1_answer": "No, our prices remain the same on weekdays and weekends.",
  "faq_2_question": "Are Your Apartments Regularly Cleaned?",
  "faq_2_answer": "Before delivering to guests, our apartments are thoroughly cleaned by a professional team. Towels, sheets, pillows, bed linens, and other hygiene-sensitive items are changed daily. For long stays, additional linens and towels are provided in advance. Each apartment is repainted at least twice a year, and damaged or permanently soiled furniture is replaced before being rented.",
  "faq_3_question": "Can I Invite Guests to the Apartment I Rented?",
  "faq_3_answer": "If you inform us in advance that others will also be staying besides the renter, you may host guests provided that ID information is shared. The renter is responsible for any illegal activity, security issues, or damage caused by guests.",
  "faq_4_question": "How Long Can We Rent Your Apartments?",
  "faq_4_answer": "You can rent our apartments daily, weekly, or monthly. If you rent for more than 7 days, our team will visit at least once a week for inspection and cleaning, after prior notice and approval.",
  "footer_logo": "Med10",
  "footer_description": "We provide consultancy services for companies wishing to promote themselves on the web and help them reach the highest level. We simplify business processes by optimizing them.",
  "footer_quick_links": "Quick Links",
  "footer_home": "Home",
  "footer_about": "About Us",
  "footer_rooms": "Rooms",
  "footer_contact": "Contact",
  "footer_contact_title": "Contact",
  "footer_address": "Address",
  "footer_phone": "Phone",
  "footer_social": "Social Media",
  "footer_rights_reserved": "All Rights Reserved."
    
    },
    "de": {
      "welcome": "Hallo, willkommen!",
      "home": "Startseite",
      "about": "Über uns",
      "rooms": "Zimmer",
      "contact": "Kontakt",
      "about_title": "Über uns",
     "about_text": "Unsere Mission ist es, unseren Gästen ein unvergessliches Aufenthaltserlebnis zu bieten und jeden Moment besonders zu gestalten. Mit umweltfreundlichen und nachhaltigen Praktiken, die Natur und Kultur respektieren, vereinen wir Komfort, Vertrauen und Herzlichkeit.",
      "about_feature1": "Mit unserem gastorientierten Ansatz erkennen wir Bedürfnisse im Voraus und bieten individuelle Dienstleistungen.",
      "about_feature2": "Mit umweltfreundlichen Richtlinien wollen wir eine saubere Welt für zukünftige Generationen hinterlassen.",
      "about_feature3": "Mit unserem kompetenten und zufriedenen Team setzen wir Maßstäbe in der Branche und entwickeln kontinuierlich innovative Lösungen.",
      "services_title": "Unsere Dienstleistungen",
      "service_title1": "Klimaanlagensysteme",
      "service_desc1": "Jedes unserer Zimmer verfügt über zwei Klimaanlagen.",
      "service_title2": "Sicherheitsdienste",
      "service_desc2": "Wir bieten 24/7 Sicherheitsdienste an, damit Sie sich sicher fühlen können.",
      "service_title3": "Reinigungsdienste",
      "service_desc3": "Unsere Zimmer werden nach jeder Nutzung gereinigt.",
      "service_title4": "Internetdienste",
      "service_desc4": "Wir bieten in jedem Zimmer rund um die Uhr Internetdienstleistungen an.",
      "service_title5": "Warmwassersysteme",
      "service_desc5": "Wir sorgen mit unseren Warmwassersystemen für Ihren Komfort.",
      "neden_title": "Warum wir",
"neden_text": "Unser Unternehmen bietet Dienstleistungen für jedes Budget und legt größten Wert auf Kundenzufriedenheit.Für Ihre täglichen und kurzen Aufenthalte möchten wir mit unserem freundlichen Personal, dass Sie sich wie zu Hause fühlen. Bitte melden Sie Beschwerden über unser Personal oder unsere Tageswohnungen  der Verwaltung.",
"neden_subtitle": "VM Duplex Tagesunterkunft",
"neden_desc": "VM Dubleks verfügt über alle Lizenzen und sorgt für den Schutz Ihrer persönlichen Daten und einen komfortablen Aufenthalt.",
"neden_list1": "✅ Bestpreisgarantie für jedes Budget.",
"neden_list2": "✅ Rund um die Uhr Service.",
"neden_list3": "✅ Unbegrenztes WLAN",
"neden_list4": "✅ Klimaanlage & Fernseher in jedem Apartment",
"neden_list5": "✅ Reinigungs- & Desinfektionsservice",
"neden_call": "JETZT ANRUFEN",
"istatistikler_title": "Unsere Statistiken",
"istatistikler_years": "Jahre in der Branche",
"istatistikler_customers": "Kunden",
"istatistikler_apartments": "Wohnungen",
"istatistikler_satisfaction": "Zufriedenheit (%)",
"rooms_title": "Unsere Zimmer",
"room_desc": "Moderne und responsive Webdesign-Lösungen",
"see_details": "Details ansehen",
"get_offer": "Angebot einholen",
"close": "Schließen",

"room1_title": "1+1 Villa",
"room1_detail1": "✔ 1 Schlafzimmer",
"room1_detail2": "✔ Klimaanlagen",
"room1_detail3": "✔ 1 Wohnzimmer",
"room1_detail4": "✔ Küchengeräte",
"room1_detail5": "✔ Warmwassersysteme",

"room2_title": "Super-Duplex-Villa",
"room2_detail1": "✔ 2 Schlafzimmer. Mehr Betten. Empfohlen für 6-köpfige Gruppen oder Familien.",
"room2_detail2": "✔ Klimaanlagen",
"room2_detail3": "✔ 1 Wohnzimmer",
"room2_detail4": "✔ Küchengeräte",
"room2_detail5": "✔ Warmwassersysteme",

"room3_title": "2+1 Villa",
"room3_detail1": "✔ 2 Schlafzimmer",
"room3_detail2": "✔ Klimaanlagen",
"room3_detail3": "✔ 1 Wohnzimmer",
"room3_detail4": "✔ Küchengeräte",
"room3_detail5": "✔ Warmwassersysteme",

"istatistikler_title": "Unsere Statistiken",
"istatistikler_years": "Jahre in der Branche",
"istatistikler_customers": "Kunden",
"istatistikler_apartments": "Wohnungen",
"istatistikler_satisfaction": "Zufriedenheit (%)",
"testimonials_title": "Kundenbewertungen",
  "testimonial_1_name": "Elif Yılmaz",
  "testimonial_1_location": "Mersin, Türkei",
  "testimonial_1_comment": "„Hallo, ich habe 1 Nacht in den Şehri Su Villen übernachtet. Sie sind hygienischer als Hotels und haben sehr gutes Personal. Wenn wir etwas brauchten, reichte ein Anruf. Meine Freundin und ich waren sehr zufrieden. Ich empfehle es jedem.“",

  "testimonial_2_name": "İsmail Gedük",
  "testimonial_2_location": "Adana, Türkei",
  "testimonial_2_comment": "„Wirklich ein großartiger Ort. Das Personal ist sehr hilfsbereit und freundlich. Unbedingt ausprobieren – Sie werden es nicht bereuen.“",

  "testimonial_3_name": "Ayşe Korkmaz",
  "testimonial_3_location": "Izmir, Türkei",
  "testimonial_3_comment": "„Wir sind mit dem Service zufrieden. Ich empfehle es Freunden, die übernachten möchten.“",
  "faq_title": "Häufig Gestellte Fragen",
  "faq_1_question": "Unterscheiden sich Ihre Preise unter der Woche und am Wochenende?",
  "faq_1_answer": "Nein, unsere Preise bleiben sowohl unter der Woche als auch am Wochenende gleich.",
  "faq_2_question": "Werden Ihre Apartments regelmäßig gereinigt?",
  "faq_2_answer": "Unsere Apartments werden vor der Übergabe an die Gäste von einem professionellen Team gründlich gereinigt. Handtücher, Bettlaken, Kissen, Bezüge und ähnliche hygienische Artikel werden täglich gewechselt. Bei längeren Aufenthalten wird zusätzliches Bettzeug im Voraus bereitgestellt. Jedes Apartment wird mindestens zweimal im Jahr gestrichen, und beschädigte oder dauerhaft verschmutzte Möbel werden vor der Vermietung ersetzt.",
  "faq_3_question": "Darf ich Gäste in das gemietete Apartment einladen?",
  "faq_3_answer": "Wenn Sie uns im Voraus informieren, dass auch andere Personen übernachten werden, dürfen Sie Gäste empfangen, sofern deren Ausweise gemeldet werden. Für illegale Aktivitäten, Sicherheitsrisiken oder Schäden durch Gäste haftet der Mieter.",
  "faq_4_question": "Wie lange kann man Ihre Apartments mieten?",
  "faq_4_answer": "Unsere Apartments können täglich, wöchentlich oder monatlich gemietet werden. Bei einer Mietdauer von mehr als 7 Tagen besucht unser Team mindestens einmal pro Woche das Apartment zur Kontrolle und Reinigung – nach vorheriger Ankündigung und Zustimmung.",
  "footer_logo": "Med10",
  "footer_description": "Wir bieten Beratungsdienste für Unternehmen an, die sich im Internet präsentieren möchten, und helfen ihnen, das höchste Niveau zu erreichen. Wir optimieren Geschäftsprozesse, um sie zu vereinfachen.",
  "footer_quick_links": "Schnellzugriffe",
  "footer_home": "Startseite",
  "footer_about": "Über uns",
  "footer_rooms": "Zimmer",
  "footer_contact": "Kontakt",
  "footer_contact_title": "Kontakt",
  "footer_address": "Adresse",
  "footer_phone": "Telefon",
  "footer_social": "Soziale Medien",
  "footer_rights_reserved": "Alle Rechte vorbehalten."


    },
    "fr": {
      "welcome": "Bonjour, bienvenue!",
      "home": "Accueil",
      "about": "À propos",
      "rooms": "Chambres",
      "contact": "Contact",
      "about_title": "À propos de nous",
      "about_text": "Notre mission est d'offrir à nos clients une expérience d'hébergement inoubliable en rendant chaque moment spécial. En respectant l'environnement et la culture locale, nous combinons confort, confiance et sincérité avec des pratiques durables.",
      "about_feature1": "Nous anticipons les besoins de nos clients grâce à notre approche centrée sur le client et offrons des services personnalisés.",
      "about_feature2": "Nous visons à laisser un monde propre aux générations futures grâce à nos politiques écologiques.",
      "about_feature3": "Avec notre équipe compétente et heureuse, nous servons d'exemple dans le secteur et proposons continuellement des solutions innovantes.",
      "services_title": "Nos Services",
      "service_title1": "Systèmes de climatisation",
      "service_desc1": "Chaque chambre est équipée de deux climatiseurs.",
      "service_title2": "Services de sécurité",
      "service_desc2": "Nous offrons des services de sécurité 24h/24 pour que vous puissiez séjourner en toute tranquillité.",
      "service_title3": "Services de nettoyage",
      "service_desc3": "Les chambres sont nettoyées après chaque utilisation.",
      "service_title4": "Services Internet",
      "service_desc4": "Nous proposons un accès Internet 24h/24 dans chaque chambre.",
      "service_title5": "Systèmes d'eau chaude",
      "service_desc5": "Nous assurons votre confort avec des systèmes d'eau chaude.",
      "neden_title": "Pourquoi nous choisir",
"neden_text": "Notre entreprise propose des services pour tous les budgets, la satisfaction du client étant notre priorité. Pour vos séjours courts ou à la journée, notre personnel souriant fera tout pour que vous vous sentiez comme chez vous. Veuillez signaler toute plainte concernant notre personnel ou nos appartements journaliers à la direction.",
"neden_subtitle": "Séjour Journalier VM Duplex",
"neden_desc": "VM Dubleks possède toutes les licences et certifications nécessaires, assurant la confidentialité de vos données personnelles et un séjour confortable.",
"neden_list1": "✅ Meilleur prix garanti pour tous les budgets.",
"neden_list2": "✅ Service ininterrompu 24h/24.",
"neden_list3": "✅ Wi-Fi illimité",
"neden_list4": "✅ Climatisation & Télévision dans chaque appartement",
"neden_list5": "✅ Service de nettoyage et de désinfection",
"neden_call": "APPELEZ MAINTENANT",
"istatistikler_title": "Nos Statistiques",
"istatistikler_years": "Années dans le secteur",
"istatistikler_customers": "Clients",
"istatistikler_apartments": "Appartements",
"istatistikler_satisfaction": "Satisfaction (%)",
"rooms_title": "Nos Chambres",
    "room_desc": "Solutions de design web modernes et réactives",
    "see_details": "Voir les détails",
    "get_offer": "Obtenir un devis",
    "close": "Fermer",

    "room1_title": "Villa 1+1",
    "room1_detail1": "✔ 1 Chambre",
    "room1_detail2": "✔ Systèmes de climatisation",
    "room1_detail3": "✔ 1 Salon",
    "room1_detail4": "✔ Ustensiles de cuisine",
    "room1_detail5": "✔ Systèmes d'eau chaude",

    "room2_title": "Villa Super Duplex",
    "room2_detail1": "✔ 2 chambres. Plus de lits. Recommandé pour les groupes ou familles de 6 personnes.",
    "room2_detail2": "✔ Systèmes de climatisation",
    "room2_detail3": "✔ 1 Salon",
    "room2_detail4": "✔ Ustensiles de cuisine",
    "room2_detail5": "✔ Systèmes d'eau chaude",

    "room3_title": "Villa 2+1",
    "room3_detail1": "✔ 2 Chambres",
    "room3_detail2": "✔ Systèmes de climatisation",
    "room3_detail3": "✔ 1 Salon",
    "room3_detail4": "✔ Ustensiles de cuisine",
    "room3_detail5": "✔ Systèmes d'eau chaude",

    "istatistikler_title": "Nos Statistiques",
    "istatistikler_years": "Années dans le secteur",
    "istatistikler_customers": "Clients",
    "istatistikler_apartments": "Appartements",
    "istatistikler_satisfaction": "Satisfaction (%)",
    "testimonials_title": "Avis des Clients",
  "testimonial_1_name": "Elif Yılmaz",
  "testimonial_1_location": "Mersin, Turquie",
  "testimonial_1_comment": "« Bonjour, j'ai séjourné 1 nuit dans les villas Şehri Su. C’est plus propre que les hôtels en termes d’hygiène, et le personnel est très bon. Quand on a besoin de quelque chose, un simple appel téléphonique suffit. Mon amie et moi avons été très satisfaites. Je recommande à tout le monde. »",

  "testimonial_2_name": "İsmail Gedük",
  "testimonial_2_location": "Adana, Turquie",
  "testimonial_2_comment": "« Vraiment un endroit merveilleux. Le personnel est très attentionné et souriant. Essayez-le absolument, vous ne le regretterez pas. »",

  "testimonial_3_name": "Ayşe Korkmaz",
  "testimonial_3_location": "Izmir, Turquie",
  "testimonial_3_comment": "« Nous sommes satisfaits du service. Je le recommande aux amis qui souhaitent y séjourner. »",
  "faq_title": "Foire Aux Questions",
  "faq_1_question": "Les prix sont-ils différents en semaine et le week-end ?",
  "faq_1_answer": "Non, nos prix sont les mêmes en semaine et le week-end.",
  "faq_2_question": "Vos appartements sont-ils nettoyés régulièrement ?",
  "faq_2_answer": "Nos appartements sont entièrement nettoyés par notre équipe professionnelle avant d'être remis aux clients. Les serviettes, draps, oreillers, housses et autres articles nécessitant une hygiène particulière sont changés quotidiennement. En cas de séjour prolongé, du linge supplémentaire est fourni à l’avance. Chaque appartement est repeint au moins deux fois par an et les meubles endommagés ou tachés de manière permanente sont remplacés avant toute nouvelle location.",
  "faq_3_question": "Puis-je recevoir des invités dans l’appartement que j’ai loué ?",
  "faq_3_answer": "Si vous nous informez à l'avance que d'autres personnes séjourneront également, vous pouvez recevoir des invités à condition de fournir leur pièce d'identité. Le locataire est responsable de tout acte illégal, problème de sécurité ou dommage causé par ses invités.",
  "faq_4_question": "Quelle est la durée possible de location de vos appartements ?",
  "faq_4_answer": "Vous pouvez louer nos appartements à la journée, à la semaine ou au mois. Pour les séjours de plus de 7 jours, notre équipe visitera l’appartement au moins une fois par semaine, après vous en avoir informé et avoir obtenu votre accord, pour effectuer un contrôle et un nettoyage.",
  "footer_logo": "Med10",
  "footer_description": "Nous fournissons des services de conseil aux entreprises souhaitant se présenter sur le web et les aidons à atteindre le plus haut niveau. Nous simplifions les processus en les optimisant.",
  "footer_quick_links": "Liens rapides",
  "footer_home": "Accueil",
  "footer_about": "À propos",
  "footer_rooms": "Chambres",
  "footer_contact": "Contact",
  "footer_contact_title": "Contact",
  "footer_address": "Adresse",
  "footer_phone": "Téléphone",
  "footer_social": "Réseaux sociaux",
  "footer_rights_reserved": "Tous droits réservés."
    },

    "ru" : {
  "welcome": "Здравствуйте, добро пожаловать!",
  "home": "Главная",
  "about": "О нас",
  "rooms": "Номера",
  "contact": "Контакты",
  "about_title": "О нас",
  "about_text": "Наша миссия — предоставить нашим гостям незабываемый опыт проживания, делая каждый момент особенным. Мы объединяем комфорт, безопасность и искренность, уважая окружающую среду и местную культуру с помощью устойчивых практик.",
  "about_feature1": "Благодаря нашему ориентированному на гостей подходу, мы предвидим их потребности и предлагаем персонализированные услуги.",
  "about_feature2": "С нашей экологически чистой политикой мы стремимся оставить чистую планету будущим поколениям.",
  "about_feature3": "С нашей квалифицированной и довольной командой мы подаём пример в отрасли, постоянно предлагая инновационные решения.",
  "services_title": "Наши услуги",
  "service_title1": "Системы кондиционирования",
  "service_desc1": "В каждой комнате установлены два кондиционера.",
  "service_title2": "Служба безопасности",
  "service_desc2": "Мы предоставляем круглосуточную охрану, чтобы вы могли чувствовать себя в безопасности.",
  "service_title3": "Услуги по уборке",
  "service_desc3": "Наши номера убираются после каждого использования.",
  "service_title4": "Интернет-услуги",
  "service_desc4": "Мы предоставляем круглосуточный интернет в каждой комнате.",
  "service_title5": "Системы горячей воды",
  "service_desc5": "Мы обеспечиваем ваш комфорт благодаря системе горячего водоснабжения.",
  "neden_title": "Почему мы",
  "neden_text": "Наша компания предоставляет услуги, соответствующие любому бюджету, с приоритетом на удовлетворенность клиентов. Наша цель — чтобы вы чувствовали себя как дома с нашими улыбчивыми сотрудниками во время краткосрочного или ежедневного проживания. Пожалуйста, сообщайте администрации о любых жалобах на наших сотрудников или апартаменты.",
  "neden_subtitle": "VM Dubleks Ежедневное Проживание",
  "neden_desc": "VM Dubleks имеет все лицензии и документы, гарантирует конфиденциальность ваших личных данных и обеспечивает комфортное проживание.",
  "neden_list1": "✅ <strong>Гарантия лучшей цены</strong> для любого бюджета.",
  "neden_list2": "✅ Круглосуточное обслуживание.",
  "neden_list3": "✅ Неограниченный Wi-Fi",
  "neden_list4": "✅ Кондиционер и телевизор в каждом номере",
  "neden_list5": "✅ Услуги по уборке и дезинфекции",
  "neden_call": "ПОЗВОНИТЕ СЕЙЧАС",
  "istatistikler_title": "Наша статистика",
  "istatistikler_years": "Лет в отрасли",
  "istatistikler_customers": "Клиенты",
  "istatistikler_apartments": "Апартаменты",
  "istatistikler_satisfaction": "Удовлетворённость (%)",
  "rooms_title": "Наши номера",
  "room_desc": "Современные и адаптивные веб-дизайн решения",
  "see_details": "Посмотреть детали",
  "get_offer": "Получить предложение",
  "close": "Закрыть",
  "room1_title": "Вилла 1+1",
  "room1_detail1": "✔ 1 спальня",
  "room1_detail2": "✔ Системы кондиционирования",
  "room1_detail3": "✔ 1 гостиная",
  "room1_detail4": "✔ Кухонная утварь",
  "room1_detail5": "✔ Система горячего водоснабжения",
  "room2_title": "Супер Двухуровневая Вилла",
  "room2_detail1": "✔ 2 спальни. Рекомендуется для группы или семьи до 6 человек.",
  "room2_detail2": "✔ Системы кондиционирования",
  "room2_detail3": "✔ 1 гостиная",
  "room2_detail4": "✔ Кухонная утварь",
  "room2_detail5": "✔ Система горячего водоснабжения",
  "room3_title": "Вилла 2+1",
  "room3_detail1": "✔ 2 спальни",
  "room3_detail2": "✔ Системы кондиционирования",
  "room3_detail3": "✔ 1 гостиная",
  "room3_detail4": "✔ Кухонная утварь",
  "room3_detail5": "✔ Система горячего водоснабжения",
  "testimonials_title": "Отзывы клиентов",
  "testimonial_1_name": "Элиф Йылмаз",
  "testimonial_1_location": "Мерсин, Турция",
  "testimonial_1_comment": "“Я остановилась на 1 день в Şehri Su Villaları. В плане гигиены — чище, чем в отелях, и персонал очень отзывчивый. Достаточно одного звонка, чтобы решить любую проблему. Мы с подругой остались очень довольны. Рекомендую всем.”",
  "testimonial_2_name": "Исмаил Гедюк",
  "testimonial_2_location": "Адана, Турция",
  "testimonial_2_comment": "“Действительно отличное место. Персонал очень внимательный и доброжелательный. Обязательно приезжайте, не пожалеете.”",
  "testimonial_3_name": "Айше Коркмаз",
  "testimonial_3_location": "Измир, Турция",
  "testimonial_3_comment": "“Мы довольны предоставленным сервисом. Рекомендую тем, кто хочет остановиться.”",
  "faq_title": "Часто задаваемые вопросы",
  "faq_1_question": "Цены в будние и выходные дни разные?",
  "faq_1_answer": "Нет, наши цены одинаковы как в будние, так и в выходные дни.",
  "faq_2_question": "Ваши апартаменты регулярно убираются?",
  "faq_2_answer": "Перед заселением гостей, апартаменты полностью убираются нашей профессиональной командой. Полотенца, простыни, подушки, постельное бельё и другие гигиенические принадлежности ежедневно меняются. При длительном проживании предоставляются дополнительные комплекты. Каждая квартира красится минимум 2 раза в год, а повреждённая или сильно загрязнённая мебель заменяется новой до сдачи в аренду.",
  "faq_3_question": "Могу ли я принимать гостей в арендованной квартире?",
  "faq_3_answer": "Если до аренды сообщено, что кроме арендатора будут проживать и другие лица, вы можете принимать гостей при условии регистрации их удостоверений личности. За любые незаконные действия, угрозу жизни и имуществу, а также причинённый ущерб несёт ответственность арендатор.",
  "faq_4_question": "На какой срок можно арендовать квартиры?",
  "faq_4_answer": "Наши квартиры можно арендовать на сутки, неделю или месяц. При аренде более 7 дней, даже без запроса, мы посещаем квартиру минимум 1 раз в неделю для осмотра и уборки, предварительно уведомив вас и получив ваше согласие.",
  "footer_logo": "Med10",
  "footer_description": "Мы предоставляем консультационные услуги компаниям, желающим заявить о себе в интернете, и помогаем им достичь наивысшего уровня. Мы оптимизируем и упрощаем бизнес-процессы.",
  "footer_quick_links": "Быстрые ссылки",
  "footer_home": "Главная",
  "footer_about": "О нас",
  "footer_rooms": "Номера",
  "footer_contact": "Контакты",
  "footer_contact_title": "Контакты",
  "footer_address": "Адрес",
  "footer_phone": "номер",
  "footer_social": "Социальные сети",
  "footer_rights_reserved": "Все права защищены."
}


  };

  const htmlEl = document.documentElement;
  const toggleButton = document.getElementById("toggleTheme");

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-bs-theme", newTheme);
    toggleButton.textContent = newTheme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", newTheme);
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlEl.setAttribute("data-bs-theme", savedTheme);
    toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  function updateLanguage(langCode) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[langCode] && translations[langCode][key]) {
        el.textContent = translations[langCode][key];
      }
    });
    localStorage.setItem("selectedLanguage", langCode);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Tema işlemleri
    initializeTheme();
    toggleButton.addEventListener("click", toggleTheme);

    // Dil işlemleri
    const langOptions = document.querySelectorAll(".language-option");
    const selectedFlagImg = document.getElementById("selectedLangFlag");

    let savedLang = localStorage.getItem("selectedLanguage") || "tr";
    selectedFlagImg.src = "img/" + savedLang + ".png";
    updateLanguage(savedLang);

    langOptions.forEach(option => {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        const newFlag = this.getAttribute("data-flag");
        const langCode = newFlag.split("/").pop().split(".")[0];
        selectedFlagImg.src = newFlag;
        updateLanguage(langCode);
      });
    });
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".yorum-kart", {
    scrollTrigger: {
      trigger: "#referanslar",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".accordion-item", {
    scrollTrigger: {
      trigger: "#sss",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

// istatistik
 // Sayı Animasyonu
 document.querySelectorAll('.stat-box h3').forEach(el => {
    const finalNumber = parseInt(el.textContent);
    let current = 0;
    
    const animate = () => {
        if(current < finalNumber) {
            current += Math.ceil(finalNumber/50);
            el.textContent = current + (el.textContent.includes('%') ? '%' : '+');
            requestAnimationFrame(animate);
        }
    }
    
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animate();
            observer.disconnect();
        }
    });
    
    observer.observe(el.parentElement);
});