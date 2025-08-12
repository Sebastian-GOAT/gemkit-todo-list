import { mountApp } from 'gemkit/hooks';
import TodoList from './components/TodoList.ts';
import './index.css';

mountApp(document.getElementById('root') as HTMLDivElement, TodoList);