import styles from '../styles/home.module.css'
import linkedin from '../assets/Li-In-Bug.png'
import github from '../assets/GitHub-Mark-120px-plus.png'
import Image from 'next/image'
export default function Home() { //eventually add itch.io (after I publish)
  return (
    <div className = {styles.main}>
      <h1>Marsden Jacques' Site</h1>
      <section alt='socials' id='socials'>
      <a href='https://github.com/MarsdenJacques' target = '_blank'><Image src={github}></Image></a>
      <a href='https://www.linkedin.com/in/marsdenjacques/' target = '_blank'><Image src={linkedin}></Image></a>
      </section>
      <h2>Currently hosted projects</h2>
      <ul>
        <h3>Games/oddities</h3>
        <li><a href='https://marsdenjacques.github.io/2d-game-of-life/'>2d Conway's Game of Life</a></li>
        <h3>Personal or commissioned websites</h3>
        <li><a href='https://marsdensqlnotesapp.netlify.app'>https://marsdensqlnotesapp.netlify.app</a><p>Todo list and notes web app</p></li>
        <li><a href='https://hiroshimaartcenter.netlify.app/'>https://hiroshimaartcenter.netlify.app/</a><p>Hiroshima Art Center home page</p></li>
        <li><a href='https://marsdenjacques.github.io/'>https://marsdenjacques.github.io/</a><p>A small site I use as a playground</p></li>
      </ul>
      <h2>Publications</h2>
      <ul>
        <li><a href='https://www.sciencedirect.com/science/article/pii/S0012365X20301783?via%3Dihub'>Generating Gray codes for weak orders in constant amortized time</a><p>Publication: Discrete Mathematics</p></li>
        <li><a href='https://drive.google.com/file/d/1nZP3B6fD0kmuakXtf6rMIdP8ZzX9VdqV/view?usp=sharing'>Greedy universal cycle constructions for weak orders</a><p>Publication: Caldam 2020</p></li>
      </ul>
      <h2>About Me</h2>
      <p>Developer of games, websites, and other various sundries wandering at ease in Kyoto.</p>
      <p>“It's not the sort of night for bed, anyhow.” <br/>
      ― Kenneth Grahame, The Wind in the Willows</p>
      imgs
    </div>
  )
}
