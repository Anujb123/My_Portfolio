/** Portfolio copy — aligned with resume & LinkedIn (Anuj Bansal) */

export const profile = {
  name: 'Anuj Bansal',
  role: 'Electronics & Communication Engineer',
  tagline:
    'VLSI, embedded systems, and digital design — from RTL and FPGA to PCB and IoT prototypes.',
  email: 'bansalanuj254@gmail.com',
  phone: '+91 9837147453',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/anujbansal18/',
  github: 'https://github.com/repos?q=owner%3A%40me',
  resumePath: '/resume.pdf',
  /** Full-length portrait — hero “cutout” (CSS drop shadow on dark bg) */
  heroImage: '/hero-cutout.png',
  /** Head-and-shoulders style — About section */
  aboutImage: '/about-profile.png',
}

export const about = {
  paragraphs: [
    'Electronics and Communication Engineering graduate (Diploma + ongoing B.Tech) with a strong base in digital electronics, VLSI flow, and hands-on embedded work.',
    'I enjoy taking designs from RTL and simulation to FPGA and hardware — ALU blocks on Spartan-6, low-power CMOS study in LTspice, and traffic systems on Arduino with sensors.',
    'Currently building real-world experience in PCB design (Altium), STM32-based automation, and multi-display LED control while aiming at roles in semiconductor design, embedded product development, and test.',
  ],
}

/** Skill categories — resume-aligned; includes web stack used for this portfolio */
export const skillCategories = [
  {
    id: 'hdl',
    title: 'HDL & digital design',
    description: 'RTL, synthesis, and FPGA bring-up',
    items: [
      { name: 'Verilog / VHDL', level: 92 },
      { name: 'RTL & ALU design', level: 88 },
      { name: 'Xilinx Vivado / FPGA', level: 85 },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & IoT',
    description: 'MCU firmware, sensors, prototypes',
    items: [
      { name: 'Arduino / ESP', level: 90 },
      { name: 'STM32 (CubeIDE)', level: 78 },
      { name: 'IR sensors & automation', level: 82 },
    ],
  },
  {
    id: 'sim',
    title: 'Simulation & EDA',
    description: 'SPICE, timing, and lab verification',
    items: [
      { name: 'ModelSim', level: 86 },
      { name: 'LTspice / CMOS', level: 84 },
      { name: 'MATLAB & Virtuoso (basic)', level: 72 },
    ],
  },
  {
    id: 'web',
    title: 'Web & tools',
    description: 'This site — React, Vite, Tailwind',
    items: [
      { name: 'React & Vite', level: 80 },
      { name: 'HTML / CSS / Tailwind', level: 85 },
      { name: 'Git, KiCad, Proteus, Altium', level: 80 },
    ],
  },
]

/** Filter tags must match project.tags values */
export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'vlsi', label: 'VLSI / FPGA' },
  { id: 'embedded', label: 'Embedded' },
  { id: 'web', label: 'Web' },
]

export const projects = [
  {
    id: 'alu-fpga',
    title: 'Arithmetic Logic Unit (ALU) — Verilog & FPGA',
    description:
      'Designed an ALU in Verilog, simulated in ModelSim, and deployed on Xilinx Spartan-6 using Vivado with exposure to logic synthesis and RTL flow.',
    stack: ['Verilog', 'ModelSim', 'Vivado', 'Spartan-6'],
    tags: ['vlsi'],
    github: 'https://github.com/anujbansal18',
    live: null,
  },
  {
    id: 'cmos-inverter',
    title: 'Low-power CMOS inverter (LTspice)',
    description:
      'Modeled a CMOS inverter in LTspice, analyzed power and delay, and explored low-power techniques relevant to VLSI design.',
    stack: ['LTspice', 'CMOS', 'Power analysis'],
    tags: ['vlsi'],
    github: 'https://github.com/anujbansal18',
    live: null,
  },
  {
    id: 'alu-4bit',
    title: '4-bit ALU — design & simulation (FPGA-based)',
    description:
      'End-to-end digital design and simulation of a 4-bit ALU with FPGA-oriented implementation goals.',
    stack: ['Verilog', 'FPGA', 'Digital design'],
    tags: ['vlsi'],
    github: 'https://github.com/anujbansal18',
    live: null,
  },
  {
    id: 'traffic',
    title: 'Smart traffic light control system',
    description:
      'Prototype with Arduino and IR sensors; real-time flow adjustment and timing logic aimed at reducing congestion.',
    stack: ['Arduino', 'IR sensors', 'Embedded C'],
    tags: ['embedded'],
    github: 'https://github.com/anujbansal18',
    live: null,
  },
  {
    id: 'portfolio',
    title: 'Personal portfolio website',
    description:
      'Responsive developer portfolio with dark/light theme, animations, project filters, and contact form — built with React and Tailwind.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    tags: ['web'],
    github: 'https://github.com/anujbansal18',
    live: null,
  },
]

export const timeline = [
  {
    type: 'work',
    title: 'Project Intern',
    org: 'APT Electronics Pvt. Ltd.',
    location: 'On-site',
    period: 'Aug 2025 — Oct 2025',
    details: [
      'STM32CubeIDE firmware for automation and multi-display LED control.',
      'PCB design in Altium for wireless motor drivers and charging systems — layout, clearance, and DRC.',
      'Embedded programming and hardware–software integration for real-world electronics.',
    ],
  },
  {
    type: 'work',
    title: 'Digital Electronics & VLSI Intern',
    org: 'Codec Technologies',
    location: 'Remote',
    period: 'Jun 2025 — Jul 2025',
    details: [
      'Digital electronics fundamentals; combinational & sequential logic with HDL.',
      'Hands-on Arduino UNO/Nano, ESP8266, and IoT components.',
      'VLSI topics including low-power digital design and FPGA-based implementation.',
    ],
  },
  {
    type: 'education',
    title: 'B.Tech — Electronics & Communication Engineering',
    org: 'B.S.A College of Engineering and Technology',
    location: '',
    period: 'Sep 2023 — Jul 2026',
    details: ['Pursuing degree with focus on VLSI, embedded systems, and digital design.'],
  },
  {
    type: 'education',
    title: 'Diploma — Electronics & Communication Engineering',
    org: 'B.S.A College of Engineering and Technology',
    location: '',
    period: 'Sep 2020 — Jul 2023',
    details: ['Foundation in circuits, microcontrollers, and practical electronics projects.'],
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
