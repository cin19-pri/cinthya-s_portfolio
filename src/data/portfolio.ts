import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Cable,
  ChartColumn,
  Code,
  Languages,
  Medal,
  ShieldCheck,
  Trophy,
} from 'lucide-react';

export type PortfolioDocument = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  /** Ruta del archivo: imagen (.jpg/.png) o PDF. Reemplazar por tu archivo real en /public/assets */
  src: string;
  kind: 'image' | 'pdf';
  icon: LucideIcon;
};

// Reemplaza estos valores con tus datos reales
export const profile = {
  name: 'Cinthya Guadalupe Prieto Prieto',
  role: 'Estudiante de Ingeniería en Desarrollo de Software e Instructora de Tecnología',
  // Foto de perfil: coloca tu imagen en public/assets/mi-foto.jpg
  avatarSrc: '/assets/mi-foto.jpg',
  cvSrc: '/assets/cv-cinthya-prieto.pdf',
  email: 'cinthyaprieto720@gmail.com',
  phone: '+52 464 169 3622',
  whatsapp: 'https://wa.me/524641693622',
};

export const metrics = [
  { value: '+200', label: 'Estudiantes capacitadas', icon: Trophy },
  { value: '100%', label: 'Proyectos guiados', icon: ChartColumn },
  { value: '14', label: 'Cursos impartidos', icon: Code },
  { value: '140', label: 'Horas de mentoría', icon: Medal },
];

// Fotografías de talleres: reemplaza src por tus fotos en public/assets/talleres
export const workshops = [
  { id: 'scratch', src: '/assets/talleres/taller-scratch.jpg', title: 'Creación de videojuegos con Scratch', date: 'Junio 2026' },
  { id: 'chatbot', src: '/assets/talleres/taller-chatbot.jpg', title: 'Mi primer chatbot', date: 'Julio 2026' },
  { id: 'python', src: '/assets/talleres/taller-codea-un-bot.jpg', title: 'Codea un bot', date: 'Junio 2026' },
  { id: 'electrolab', src: '/assets/talleres/taller-electrolab.jpg', title: 'Electrolab', date: 'Agosto 2026' },
  { id: 'disfraz', src: '/assets/talleres/taller-construye-tu-disfraz.jpg', title: 'Construye tu disfraz', date: 'Julio 2026' },
];

export const recognitions: PortfolioDocument[] = [
  {
    id: 'beca-excelencia',
    title: 'Beca de Excelencia Académica',
    issuer: 'Universidad Tecnológica de Salamanca',
    date: 'Diciembre 2025',
    src: '/assets/evidencia-beca.jpg',
    kind: 'image',
    icon: Award,
  },
  {
    id: 'english-challenge-1',
    title: '1er Lugar en Inglés / English Challenge',
    issuer: 'UTS · Centro de Lenguas (CELE)',
    date: 'Octubre 2026',
    src: '/assets/evidencia-ingles-1er-lugar.jpg',
    kind: 'image',
    icon: Languages,
  },
  {
    id: 'reconocimiento-tecnolochicas',
    title: 'Instructora Tecnolochicas',
    issuer: 'Fundación Televisa · TECNOLOchicas México',
    date: 'Segundo cuatrimestre 2026',
    src: '/assets/evidencia-tecnolochicas.jpg',
    kind: 'image',
    icon: Trophy,
  },
  {
    id: 'reconocimiento-conalep',
    title: 'Exposición del proyecto KeiryMed Gestor Clínico',
    issuer: 'Conalep Plantel Salamanca',
    date: 'Marzo 2025',
    src: '/assets/evidencia-conalep.jpg',
    kind: 'image',
    icon: Medal,
  },
];

export const credentials: PortfolioDocument[] = [
  {
    id: 'cisco-ciberseguridad',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Octubre 2024',
    src: '/assets/certificado-ciberseguridad-cisco.jpg',
    kind: 'image',
    icon: ShieldCheck,
  },
  {
    id: 'uts-ciberseguridad',
    title: 'Ciberseguridad y Técnicas de Recuperación de Datos',
    issuer: 'Universidad Tecnológica de Salamanca',
    date: 'Octubre 2024',
    src: '/assets/constancia-ciberseguridad-uts.jpg',
    kind: 'image',
    icon: Cable,
  },
  {
    id: 'becalos-english',
    title: 'Bécalos English Challenge · Nivel B2',
    issuer: 'Bécalos English Challenge',
    date: 'Septiembre 2025',
    src: '/assets/constancia-becalos-b2.jpg',
    kind: 'image',
    icon: Languages,
  },
  {
    id: 'trepcamp-brain-hack',
    title: 'Brain Hack: Transforma tu mentalidad',
    issuer: 'TrepCamp · Iberoamerican Technology Foundation',
    date: 'Septiembre 2025',
    src: '/assets/certificado-brain-hack.jpg',
    kind: 'image',
    icon: Award,
  },
];
