import { Sparkles, Headphones, HandPlatter, Pickaxe } from 'lucide-react';

export const projects = [
  {
    title: "Servify App",
    description: "Aplicación web que conecta profesionales de servicios técnicos con clientes en Bogotá. Plataforma completa con gestión de proveedores, solicitudes y seguimiento de servicios.",
    tech: ["React", "Firebase", "TypeScript", "TailwindCSS"],
    link: "https://app-servify.web.app/",
    color: "from-blue-200 to-cyan-200",
    bgColor: "bg-blue-50",
    icon: HandPlatter,
    iconColor: "text-blue-400"
  },
  {
    title: "Minecraft Tree",
    description: "Aplicación interactiva que permite explorar visualmente los logros de Minecraft a través de un árbol dinámico. Cada logro se muestra como un nodo conectado a sus dependencias, creando una experiencia visual fluida y fácil de navegar.",
    tech: ["React", "TypeScript", "MUI", "@xyflow/react", "Normalizr"],
    link: "https://minecraft-tree.netlify.app/",
    color: "from-green-200 to-emerald-200",
    bgColor: "bg-green-50",
    icon: Pickaxe,
    iconColor: "text-green-400"
  },
  {
    title: "Spotifind",
    description: "Aplicación que consume el API de Spotify, en la cual se pueden buscar todos los artistas y además redirige a su perfil de Spotify.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://dalejrg.github.io/soundtracker/",
    color: "from-purple-200 to-pink-200",
    bgColor: "bg-purple-50",
    icon: Headphones,
    iconColor: "text-purple-400"
  },
  {
    title: "Pokédex",
    description: "Aplicación web que permite explorar, filtrar y ordenar información de Pokémon. Proyecto del bootcamp de Laboratoria con búsqueda avanzada por tipo, generación y nombre.",
    tech: ["JavaScript", "HTML", "CSS", "API"],
    link: "https://dalejrg.github.io/BOG002-data-lovers/",
    color: "from-rose-200 to-orange-200",
    bgColor: "bg-rose-50",
    icon: Sparkles,
    iconColor: "text-rose-400"
  }
];