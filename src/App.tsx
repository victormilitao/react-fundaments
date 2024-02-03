import { Post } from './components/Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/390036?v=4',
      name: 'Victor Miltão',
      role: 'Dev',
    },
    content: [
      'Fala galera!',
      'Acabei de postar um conteúdo massa!',
      'Curte ai e compartilha!',
    ],
    publishedAt: new Date('2020-01-31 20:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/edivandecastro.png',
      name: 'Edivan de Castro',
      role: 'Analyst',
    },
    content: [
      'Fala pessoal!',
      'Acabei de postar um conteúdo massa!',
      'Curte ai e compartilha por favor!',
    ],
    publishedAt: new Date('2021-01-20 20:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
