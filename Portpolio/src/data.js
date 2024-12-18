import project1 from './assets/images/project-1.jpeg';
import project2 from './assets/images/project-2.jpeg';
import project3 from './assets/images/project-3.jpeg';
import project4 from './assets/images/project-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#project', text: 'project' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'insta' },
];

export const services = [
  {
    id: 1,
    icon: 'htmlIcon',
    title: 'html',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'cssIcon',
    title: 'css',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'JsIcon',
    title: 'javascript',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const project = [
  {
    id: 1,
    image: project1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
 
  },
  {
    id: 2,
    image: project2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
   
  },
  {
    id: 3,
    image: project3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
  
  },
  {
    id: 4,
    image: project4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
  
  },
];
