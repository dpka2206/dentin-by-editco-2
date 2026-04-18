export const BRAND = {
  name: "Dentin Oral Experts",
  tagline: "Providing exceptional dental care with advanced technology and compassionate service since 2010.",
  phoneDisplay: "95150 84487",
  phoneTel: "+919515084487",
  emailInfo: "info@dentinoralexperts.com",
  emailAppointments: "appointments@dentinoralexperts.com",
  addressFull:
    "Opp. Jayabheri The Nirvana and Art Boutique Hotel, Gowlidoddy, Hyderabad, Telangana — 500075",
  addressShort: "Gowlidoddy, Hyderabad, Telangana — 500075",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Dentin+Oral+Experts+Gowlidoddy+Hyderabad",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dentin+Oral+Experts+Gowlidoddy+Hyderabad+reviews",
};

export const TRUST_STATS = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Happy Patients", value: "20,000+" },
  { label: "Dental Specialists", value: "50+" },
  { label: "Dental Services", value: "30+" },
];

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  full: string;
  benefit: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "dental-scaling-polishing",
    title: "Dental Scaling & Polishing",
    summary:
      "Removes calculus, plaque, and stains with an ultrasonic scaler — finished with polishing for a smooth, clean feel.",
    full: `Also known as teeth cleaning, this simple painless procedure removes calculus (the hard yellow-brown deposits), plaque, and stains from your teeth using an ultrasonic scaler — followed by polishing for that smooth, clean finish.

Why it matters: Plaque and tartar buildup is a leading cause of gum bleeding, bad breath, and gum disease. A professional clean every 6 months keeps your gums firm and healthy.`,
    benefit: "Healthier gums, fresher breath — professional care every 6 months.",
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment (RCT)",
    summary:
      "Saves infected teeth under local anaesthesia — we disinfect the canal thoroughly and seal it to stop re-infection.",
    full: `When a tooth gets deeply infected or its nerve is damaged, a root canal saves the tooth. We remove the infected pulp, disinfect the canal thoroughly, and seal it to stop re-infection — all under local anaesthesia.

Our edge: We use hypo activation with a sonic activator and laser disinfection for a more thorough clean and significantly reduced pain. In most cases, no antibiotics are needed post-procedure.`,
    benefit: "Thorough disinfection with less post-procedure discomfort.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    summary:
      "Titanium root + natural-looking crown — the gold standard when you want a tooth that looks, feels, and functions like the real thing.",
    full: `The gold standard for replacing missing teeth. A titanium post is surgically placed into the jawbone, acting as an artificial root — onto which a natural-looking crown is fixed. The result: a tooth that looks, feels, and functions just like a real one.

Best for: Single missing tooth, multiple teeth, or full-mouth restoration.`,
    benefit: "Stable, long-lasting replacement that mimics natural teeth.",
  },
  {
    slug: "dental-extractions",
    title: "Dental Extractions",
    summary:
      "Safe removal under local anaesthesia when a tooth can’t be saved — gentle technique to minimise bleeding and discomfort.",
    full: `When a tooth is too severely damaged, decayed, or broken to be saved, we remove it safely under local anaesthesia. Our gentle technique minimises bleeding and discomfort. For permanent teeth (except wisdom teeth), we always recommend a replacement option after extraction.`,
    benefit: "Comfort-focused extraction with clear next steps for replacement.",
  },
  {
    slug: "wisdom-teeth",
    title: "Wisdom Teeth Complaints",
    summary:
      "Assessment and removal when impacted teeth cause pain, swelling, or risk to neighbouring teeth.",
    full: `Wisdom teeth are the last to erupt — and often don't have enough room to come in properly. Impacted wisdom teeth cause pain, swollen gums, food trapping, decay in adjacent teeth, and jaw stiffness. We assess each case individually and remove them when needed for lasting relief.`,
    benefit: "Relief from pain and protection for adjacent healthy teeth.",
  },
  {
    slug: "dental-braces",
    title: "Dental Braces",
    summary:
      "Metal, ceramic, or self-ligating braces — customised plans with monthly adjustments. Most cases finish in 12–24 months.",
    full: `Straighten crowded, gapped, or misaligned teeth using metal, ceramic, or self-ligating braces. Our orthodontist customises your treatment plan, and you visit once a month for adjustments. Most treatments are completed in 12–24 months.`,
    benefit: "Predictable alignment with a plan tailored to your bite.",
  },
  {
    slug: "invisible-aligners",
    title: "Invisible Aligners",
    summary:
      "Clear, removable aligners — nearly invisible. OPG assessment first to check bone strength and plan movement.",
    full: `Clear, removable plastic aligners custom-made to fit your teeth — nearly invisible and comfortable. Each set gently moves your teeth into the right position. Suitable for teens and adults. We take an OPG X-ray first to assess bone strength and design your treatment plan.`,
    benefit: "Discreet orthodontics with digital treatment planning.",
  },
  {
    slug: "dental-opg-xray",
    title: "Dental OPG X-Ray",
    summary:
      "Full-mouth panoramic imaging for implants, orthodontics, wisdom teeth, and routine health checks.",
    full: `An OPG (Orthopantomogram) is a full-mouth panoramic X-ray that captures your upper and lower teeth, jawbone, sinuses, and surrounding structures in a single image. Essential for implant planning, orthodontic assessments, wisdom tooth evaluation, and routine health checks.`,
    benefit: "Complete overview in one image for safer, precise planning.",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    summary:
      "Clinically supervised whitening that lifts shade safely — internal and external stains addressed in a controlled setting.",
    full: `A safe, clinically supervised whitening procedure using approved bleaching agents that break down both internal and external stains. We can lift your tooth shade by several degrees in a single session — safely, without damaging your enamel.`,
    benefit: "Brighter smile with professional-grade safety and results.",
  },
  {
    slug: "cavity-fillings",
    title: "Cavity Fillings",
    summary:
      "Tooth-coloured composite restores shape and function — treat decay early before it needs a root canal.",
    full: `Tooth decay is removed and the space is filled with tooth-coloured composite resin or other materials — restoring the tooth's shape, function, and appearance. Treating cavities early with fillings prevents deeper infection that would otherwise require a root canal.`,
    benefit: "Natural-looking repair that stops decay from spreading.",
  },
  {
    slug: "lost-tooth-bridges",
    title: "Lost Tooth Replacement (Bridges)",
    summary:
      "Fixed bridge when implants aren’t suitable — adjacent teeth support a natural-looking replacement.",
    full: `A dental bridge is an effective alternative when implants aren't suitable due to insufficient bone density or certain medical conditions. Adjacent healthy teeth serve as anchor supports, and the missing tooth (or teeth) is replaced with a fixed prosthetic that restores your bite and smile.`,
    benefit: "Restored bite and aesthetics without surgery in select cases.",
  },
  {
    slug: "gum-surgeries",
    title: "Gum Surgeries",
    summary:
      "Grafts, flap surgery, and regeneration for advanced gum disease — health and aesthetics together.",
    full: `Advanced gum disease or recession sometimes requires surgical intervention. We perform gum grafts, flap surgery, and tissue regeneration procedures to stop disease progression, restore gum tissue, and protect the underlying bone. Both oral health and aesthetics are addressed.`,
    benefit: "Protect bone and tissue while improving gum appearance.",
  },
  {
    slug: "broken-teeth-management",
    title: "Broken Teeth Management",
    summary:
      "From composite repairs to veneers, crowns, or re-bonding — matched to how much tooth structure is lost.",
    full: `How we manage a broken tooth depends on how much structure is lost. Minor chips and fractures (under 3mm) are repaired with tooth-coloured composite filling. More significant damage is restored with a veneer or crown. In some cases, a detached fragment can even be re-bonded if you bring it in promptly.`,
    benefit: "Right-sized restoration for every level of damage.",
  },
  {
    slug: "paediatric-dentistry",
    title: "Paediatric Dentistry",
    summary:
      "Child-friendly care — fillings, pulp therapy, extractions, and cleft support in a calm environment.",
    full: `Gentle, child-friendly dental care covering everything from routine fillings and pulp therapy to extractions and cleft lip/palate management. We create a calm, friendly environment so children build a positive relationship with dental visits from an early age.`,
    benefit: "Positive early experiences that protect lifelong oral health.",
  },
  {
    slug: "dental-laser-treatment",
    title: "Dental Laser Treatment",
    summary:
      "Less cutting, less bleeding, faster healing — lasers for soft tissue, RCT disinfection, sensitivity, and more.",
    full: `Dental lasers are used across multiple treatments — soft tissue surgeries, root canal disinfection, treating tooth hypersensitivity, teeth whitening, and stimulating healing after surgical procedures. Lasers mean less cutting, less bleeding, minimal anaesthesia, and faster recovery.`,
    benefit: "Minimally invasive care with quicker recovery.",
  },
  {
    slug: "intra-oral-3d-scanner",
    title: "Intra Oral 3D Scanner",
    summary:
      "Digital impressions without messy putty — precise models for crowns, aligners, and implant planning.",
    full: `High-precision digital models of teeth and gums — replacing messy impression putty. Used for designing zirconia crowns (CAD/CAM), planning orthodontic treatment, and implant placement. Faster, cleaner, and more accurate than traditional methods.`,
    benefit: "Comfortable scans with superior accuracy for restorations and aligners.",
  },
];

/** First six services shown on the homepage grid (per blueprint). */
export const HOME_SERVICE_SLUGS = SERVICES.slice(0, 6).map((s) => s.slug);

export const TECHNOLOGY_ITEMS = [
  {
    title: "Intra Oral 3D Scanner",
    text: "Digital impressions with no messy putty. Used for zirconia crowns, aligners, and implant planning.",
  },
  {
    title: "Dental OPG X-Ray",
    text: "Full panoramic jaw and bone imaging for complete, accurate diagnosis.",
  },
  {
    title: "Dental Laser",
    text: "Minimally invasive soft tissue surgery, disinfection, whitening, and healing support.",
  },
  {
    title: "Sonic Activator / Hypo Activation",
    text: "Used during RCT for deeper canal cleaning and reduced post-procedure pain.",
  },
  {
    title: "CAD/CAM Zirconia Crowns",
    text: "Computer-designed and milled crowns for a precise fit and natural appearance.",
  },
  {
    title: "Advanced Sedation Options",
    text: "Safe, monitored sedation for anxious patients — so everyone can get the care they need.",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Suryanarayan Sharma",
    qualification: "MDS",
    designation: "Chief Dental Surgeon · Oral & Maxillofacial Pathologist & Implantologist",
    experience: "15+ years",
    specialises:
      "Dental implants, root canal treatment, full-mouth rehabilitation, orthodontics",
    note: "Calm, reassuring approach — patients consistently say he explains every step clearly and makes them feel completely at ease.",
    personalNote: `Dr. Surya is known for his calm, patient, and explanatory approach. Multiple patients have noted that he explains every step of the treatment clearly, never rushes, and makes even complex procedures feel manageable and pain-free.`,
  },
  {
    name: "Dr. Rekha Talpa",
    qualification: "MDS",
    designation: "Cosmetic Dental Surgeon",
    experience: "10+ years",
    specialises: "Smile makeovers, veneers, teeth whitening, aesthetic and restorative dentistry",
    note: "",
    personalNote: "",
  },
  {
    name: "Dr. Sreeja",
    qualification: "MDS",
    designation: "Cosmetic Dental Surgeon",
    experience: "15+ years",
    specialises: "Dental implants, wisdom tooth extraction, complex oral surgeries",
    note: "",
    personalNote: "",
  },
  {
    name: "Dr. Sandeep Adiga",
    qualification: "MDS",
    designation: "Orthodontist",
    experience: "8+ years",
    specialises:
      "Braces, invisible aligners, painless root canal, dental pulp therapies, dental emergencies",
    note: "",
    personalNote: "",
  },
];

export const REVIEWS = [
  {
    author: "Amsal Khan",
    rating: 4,
    text: `Dr. Surya is one of the best doctors I've met so far. He was very calm and reassuring, which made me feel comfortable throughout the entire process. I recently had a deep cavity filling, and since it was close to the nerve, I was quite hesitant. But he handled it very smoothly and explained everything step by step. He also suggested a complete teeth cleaning (scaling) due to plaque buildup and shared useful tips to maintain better dental hygiene. He even explained the RCT process, mentioning that it usually doesn't require antibiotics and involves minimal pain, even in a single sitting. I'll definitely visit again for any future dental issues. He's my go-to dentist in Hyderabad now.`,
  },
  {
    author: "Vihari Gv",
    rating: 5,
    text: `Dr. Surya is a very reassuring person and helped me feel at ease throughout the process. He performed the procedure smoothly and explained everything clearly. I recently had a wisdom tooth extraction. I wouldn't say it was completely painless, but it was manageable. He also recommended a complete teeth cleaning (scaling), which was helpful.`,
  },
  {
    author: "Aditya Sayam",
    rating: 5,
    text: `I visited with a broken tooth due to an injury. Dr. Suryanarayana Sarma advised a root canal and an implant, both of which turned out very well and looked natural. The procedure was smooth and painless. The doctor is very friendly and informative, explaining everything clearly. We are very satisfied with the treatment and would definitely recommend others to visit.`,
  },
  {
    author: "Ravi Justice",
    rating: 5,
    text: `I had a great experience at Dentin clinic. The clinic is clean, modern, and very well maintained. The dentists take time to explain the issue clearly and don't rush into treatment, which builds trust. Highly recommend this place if you're looking for quality dental care in TNGO colony.`,
  },
  {
    author: "Rajni Singh",
    rating: 5,
    text: `I recently visited Dr. Surya for a re-root canal treatment, and I'm very happy with the experience. From the first consultation, everything was explained clearly and they made sure I was comfortable. The procedure was smooth and surprisingly painless. The staff was warm and professional. I truly appreciate their care and would highly recommend them.`,
  },
];

export const FAQS = [
  {
    q: "Is dental treatment really painless at Dentin?",
    a: "Yes. We use modern local anaesthesia, sedation options, and laser-assisted techniques to make your treatment as comfortable as possible. Most patients are genuinely surprised at how smooth the experience is.",
  },
  {
    q: "How long does a dental implant take?",
    a: "The implant placement surgery takes around 30–60 minutes. After that, the implant needs 3–6 months to fuse with the jawbone. Once that's done, the permanent crown is placed. We give you a clear, personalised timeline at your consultation.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Absolutely — when done by professionals. We use clinically approved agents that safely dissolve both internal and external stains without harming your enamel. Over-the-counter kits can't achieve the same results or safety level.",
  },
  {
    q: "When should my child first visit the dentist?",
    a: "We recommend bringing your child in by the time their first tooth appears — or no later than their first birthday. Early visits help us spot any issues early and help children feel comfortable with dental care from the start.",
  },
  {
    q: "How often should I come for a check-up?",
    a: "Once every 6 months is ideal for most people. Regular check-ups and cleaning help us catch problems early — saving you time, money, and discomfort down the line.",
  },
  {
    q: "Are invisible aligners as effective as braces?",
    a: "For mild to moderate cases, yes — and they're far more comfortable and discreet. For more complex alignment issues, traditional braces may work better. Our doctors will assess your OPG X-ray and recommend the best option for your specific case.",
  },
  {
    q: "What if I'm scared of dental visits?",
    a: "You're not alone — dental anxiety is very common. We have sedation options, a calm environment, and a team trained to take things at your pace. Just let us know when you book and we'll make sure your experience is comfortable.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We have a dedicated paediatric dentistry service covering fillings, pulp therapy, extractions, and more. Our team is experienced in making children feel safe and relaxed.",
  },
  {
    q: "Are you open on weekends?",
    a: "Yes. Monday to Saturday: 9:00 AM – 9:00 PM. Sunday: 9:00 AM – 6:00 PM.",
  },
  {
    q: "What is an Intra Oral 3D Scanner?",
    a: "It's a small handheld device we use to create highly accurate digital 3D models of your teeth and gums — replacing the old messy impression putty. It's used for designing crowns, planning aligners, and implant preparation. Faster, more comfortable, and more precise.",
  },
];

export const WORKING_HOURS_LINES = [
  "Monday, Tuesday, Thursday, Friday, Saturday: 9:00 AM – 9:00 PM",
  "Wednesday: 9:30 AM – 9:00 PM",
  "Sunday: 9:00 AM – 6:00 PM",
];

export const FOOTER_SERVICE_LINKS = [
  { title: "Dental Scaling & Polishing", slug: "dental-scaling-polishing" },
  { title: "Root Canal Treatment", slug: "root-canal-treatment" },
  { title: "Dental Implants", slug: "dental-implants" },
  { title: "Dental Extractions", slug: "dental-extractions" },
  { title: "Cavity Fillings", slug: "cavity-fillings" },
  { title: "Lost Tooth Replacement (Bridges)", slug: "lost-tooth-bridges" },
  { title: "Invisible Aligners", slug: "invisible-aligners" },
  { title: "Teeth Whitening", slug: "teeth-whitening" },
  { title: "Paediatric Dentistry", slug: "paediatric-dentistry" },
  { title: "Dental Laser Treatment", slug: "dental-laser-treatment" },
  { title: "Intra Oral 3D Scanner", slug: "intra-oral-3d-scanner" },
];

export const MILESTONES = [
  {
    year: "2010",
    title: "Founded",
    text: "Dr. Suryanarayan Sharma opens Dentin Oral Experts in Gowlidoddy, Hyderabad, with a focus on pain-free, patient-first dental care.",
  },
  {
    year: "2013",
    title: "Advanced Implant Technology",
    text: "Became one of the first clinics in Hyderabad to offer computer-guided implant placement.",
  },
  {
    year: "2015",
    title: "Clinic Expansion",
    text: "Expanded into a larger, multi-department facility with dedicated spaces for orthodontics, cosmetic dentistry, and paediatric care.",
  },
  {
    year: "2017",
    title: "Recognition for Excellence",
    text: "Received the 'Best Dental Clinic in Telangana' recognition from the Indian Dental Association for clinical quality and patient care.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    text: "Celebrated 10 years and went fully digital — introducing 3D intraoral scanning, CAD/CAM crown design, and digital X-ray workflows.",
  },
  {
    year: "2023",
    title: "Advanced Pain-Free Dentistry Centre",
    text: "Launched a specialised centre focused on sedation dentistry and anxiety management, making dental care accessible even for the most nervous patients.",
  },
];

export const MISSION_POINTS = [
  "Provide exceptional, pain-free dental treatments",
  "Make advanced dental care accessible to all",
  "Educate patients on preventive oral hygiene",
  "Create a calm, anxiety-free environment for every visit",
];

export const VISION_POINTS = [
  "Pioneer advancements in pain-free and minimally invasive dentistry",
  "Continuously integrate the latest dental technology",
  "Train and build the next generation of compassionate dental professionals",
  "Serve our community — inside and outside the clinic",
];

export const AWARDS = [
  "Best Dental Clinic in Telangana — Indian Dental Association, 2017",
  "Excellence in Dental Implantology — Association of Dental Implantologists, 2019",
  "Patient Comfort Innovation Award — International Congress of Oral Implantologists, 2021",
  "Healthcare Facility Design Excellence — Healthcare Design Forum, 2022",
  "Outstanding Patient Service — Hyderabad Medical Association, 2023",
  "Community Service Excellence — Rotary Club of Hyderabad, 2023",
];

export const PAIN_FREE_ITEMS = [
  {
    title: "Advanced Local Anaesthesia",
    text: "Computer-controlled delivery systems and buffered anaesthetics ensure the injection itself is barely felt — and numbing is thorough and effective.",
  },
  {
    title: "Sedation Dentistry",
    text: "From mild nitrous oxide (laughing gas) to oral sedation and IV sedation — we offer options tailored to your anxiety level and the complexity of your procedure.",
  },
  {
    title: "Laser-Assisted Treatments",
    text: "Dental lasers replace or reduce the need for cutting and drilling in many procedures — meaning less discomfort, less bleeding, and faster healing.",
  },
  {
    title: "Sonic Activation in RCT",
    text: "Hypo activation with a sonic activator ensures deeper, more effective canal disinfection during root canal treatment — reducing both the chance of re-infection and post-procedure pain.",
  },
  {
    title: "A Calming Environment",
    text: "Soothing interiors, warm lighting, and a friendly team designed to make you feel at ease the moment you walk through the door.",
  },
];

export const FACILITY_BULLETS = [
  "Welcoming Reception — Comfortable, warm space that puts you at ease from the moment you arrive.",
  "Modern Treatment Rooms — Advanced dental chairs, digital screens, and the latest equipment.",
  "Advanced Imaging Centre — Digital OPG X-rays and 3D intraoral scanning for precise, detailed diagnosis.",
  "Sterilisation Centre — Strict sterilisation protocols across all instruments and surfaces.",
  "Patient Lounge — A relaxed waiting area for you and accompanying family members.",
  "Consultation Rooms — Private, comfortable spaces for treatment discussions and planning.",
];

export const COMMUNITY_ITEMS = [
  "Free Dental Camps — Quarterly free check-up and treatment camps in areas around Hyderabad.",
  "School Dental Programmes — Regular visits to local schools for check-ups and oral hygiene education for children.",
  "Charity Treatments — Free and subsidised treatments for patients from economically disadvantaged backgrounds.",
];
