// ─────────────────────────────────────────────────────────────────────────────
//  DATOS DEL PORTAFOLIO (MOCK)
//  Todo el contenido personal vive aquí. Cambia estos valores para
//  personalizar el portafolio sin tocar los componentes.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alex Moreno',
  shortName: 'Alex',
  greeting: 'Hola, soy',
  role: 'Full Stack Developer & Automation Specialist',
  tagline: 'Construyo aplicaciones modernas, automatizo procesos y convierto ideas en productos reales.',
  avatar: '/avatar.svg',
  location: 'Ciudad Ejemplo, País',
  year: 2026,
}

// Texto que gira en la curva al final del hero
export const marquee = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Flutter', 'Python', 'Docker', 'MongoDB']

export const about = {
  eyebrow: 'Mi historia',
  title: 'Sobre mí & Tech Stack',
  headline: 'Ingeniería, Producto & Automatización',
  bio:
    'Desarrollador de software enfocado en crear productos útiles y automatizar procesos repetitivos. ' +
    'Combino desarrollo frontend y móvil con flujos de automatización e inteligencia artificial. ' +
    'Me gusta transformar problemas complejos en soluciones simples que generan valor para el negocio. ' +
    '(Texto de ejemplo: reemplázalo con tu propia historia.)',
  stacks: {
    frontend: {
      title: 'Frontend & Móvil',
      icon: '🖥️',
      items: ['React', 'Tailwind CSS', 'TypeScript', 'Flutter', 'JavaScript', 'HTML', 'CSS'],
    },
    automation: {
      title: 'Automatización & IA',
      icon: '⚡',
      description: 'Diseño de flujos inteligentes y bases vectoriales para optimizar el acceso al conocimiento.',
      items: ['n8n', 'OpenAI', 'Pinecone', 'Slack Bots', 'Make', 'Zapier', 'LangChain'],
    },
    backend: {
      title: 'Backend & Datos',
      icon: '🗄️',
      items: ['Python', 'Java', 'Node.js', 'Supabase', 'PostgreSQL', 'APIs REST'],
    },
  },
}

// Recuadros que se animan en la transición "Mis Proyectos"
export const projectPreviews = [
  { id: 1, title: 'Soporte IA', subtitle: 'Agente IA', icon: '⚡', color: '#fb973f' },
  { id: 2, title: 'Recetario', subtitle: 'App IA', icon: '✦', color: '#a4d30e' },
  { id: 3, title: 'Tienda Demo', subtitle: 'Web App', icon: '◈', color: '#07408b' },
  { id: 4, title: 'Reservas', subtitle: 'Plataforma', icon: '◉', color: '#7c3aed' },
  { id: 5, title: 'Portafolio', subtitle: 'Personal', icon: '✦', color: '#fb973f' },
  { id: 6, title: 'n8n Automation', subtitle: 'Workflows', icon: '⚙️', color: '#22c55e' },
  { id: 7, title: 'Supabase API', subtitle: 'Backend', icon: '🔗', color: '#3b82f6' },
  { id: 8, title: 'Slack Bots', subtitle: 'Integración', icon: '💬', color: '#f97316' },
  { id: 9, title: 'OpenAI GPT', subtitle: 'IA Generativa', icon: '🤖', color: '#ec4899' },
  { id: 10, title: 'Pinecone DB', subtitle: 'Vectors', icon: '🔍', color: '#14b8a6' },
  { id: 11, title: 'Dashboard', subtitle: 'Analítica', icon: '📊', color: '#6366f1' },
  { id: 12, title: 'Make.com', subtitle: 'Automatización', icon: '🔄', color: '#f43f5e' },
  { id: 13, title: 'Flutter App', subtitle: 'Móvil', icon: '📱', color: '#0ea5e9' },
  { id: 14, title: 'React Web', subtitle: 'Frontend', icon: '⚛️', color: '#06b6d4' },
]

export const projectsSection = {
  eyebrow: 'Mi trabajo',
  title: 'Proyectos Destacados',
  subtitle: 'Del código a la solución real.',
}

export const projects = [
  {
    id: 1,
    title: 'Agente de IA para Soporte (Empresa Demo)',
    description:
      'Asistente que responde preguntas internas usando una base de conocimiento vectorial y se integra con el chat del equipo. ' +
      'Redujo el tiempo de respuesta en un 60% (cifra de ejemplo).',
    stack: ['n8n', 'OpenAI', 'Pinecone', 'Slack Bots'],
    accent: '#fb973f',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #2e1500 50%, #1a0a00 100%)',
    icon: '✦',
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'Recetario - App móvil con IA',
    description:
      'Aplicación móvil que sugiere recetas a partir de los ingredientes que tienes en casa, con generación de listas de compra.',
    stack: ['Flutter', 'IA Generativa', 'Node.js'],
    accent: '#a4d30e',
    gradient: 'linear-gradient(135deg, #0d1a00 0%, #1a2e00 50%, #0d1a00 100%)',
    icon: '⬡',
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'Tienda Demo - E-Commerce',
    description:
      'Tienda online enfocada en conversión: catálogo rápido, carrito persistente y checkout en pocos pasos.',
    stack: ['React', 'Tailwind CSS', 'Stripe'],
    accent: '#07408b',
    gradient: 'linear-gradient(135deg, #00091a 0%, #001433 50%, #00091a 100%)',
    icon: '◈',
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    title: 'Plataforma de Reservas',
    description:
      'Sistema web para agendar citas con recordatorios automáticos por correo y panel de administración.',
    stack: ['React', 'n8n', 'Supabase'],
    accent: '#7c3aed',
    gradient: 'linear-gradient(135deg, #0d0014 0%, #1a0029 50%, #0d0014 100%)',
    icon: '◉',
    demo: '#',
    code: '#',
  },
]

export const contact = {
  eyebrow: 'Contacto',
  title: ['¿Listo para escalar', 'tu proyecto?'],
  subtitle: 'Hablemos sobre código, automatización y cómo mejorar la eficiencia de tu negocio.',
  successTitle: '¡Mensaje enviado!',
  successText: 'Te responderé lo antes posible.',
  socials: [
    { label: 'Email', icon: '✉', href: 'mailto:hola@ejemplo.com' },
    { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/usuario-ejemplo' },
    { label: 'GitHub', icon: '⌥', href: 'https://github.com/usuario-ejemplo' },
  ],
}
