import { createRoot } from 'react-dom/client';
import { StoryBook } from './sections/StoryBook';
import './style.css';
document.documentElement.classList.add('storybook-document');
createRoot(document.getElementById('root')!).render(<main className="storybook-preview"><StoryBook /></main>);
