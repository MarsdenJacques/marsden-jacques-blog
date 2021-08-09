import styles from '../styles/home.module.css'
import Image from 'next/image'
import meOne from '../assets/me1.jpg'
import meTwo from '../assets/me2.jpg'
import meGoats from '../assets/megoats.jpg'
/*          <p>“It's not the sort of night for bed, anyhow.” <br/>
          ― Kenneth Grahame, The Wind in the Willows</p>*/
export default function Home() { //eventually add itch.io (after I publish)
  return (
    <div className = {styles.main}>
      <section className = {styles.transparent}>
        <div className = {styles.blurb}>
        <p>&ldquo;It&apos;s a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there&apos;s no knowing where you might be swept off to.&rdquo;
          <br/>
          ― J.R.R. Tolkien, The Lord of the Rings
        </p>
        <p>Marsden Jacques is a developer of games, websites, and various sundries who was swept off to Kyoto.</p>
        </div>
      </section>
      <section className={styles.portfolio}>
        <div className = {styles.section + ' ' + styles.projects}>
          <h2 className = {styles.sectionHeader}>Hosted Projects and Commisions</h2>
          <ul className = {styles.portfolioList}>
            <h3>Games/oddities</h3>
            <li><a href='https://marsdenjacques.github.io/2d-game-of-life/' className = {styles.siteLink}>2d Conway's Game of Life</a></li>
            <h3>Personal or commissioned websites</h3>
            <li><a href='https://marsdensqlnotesapp.netlify.app' className = {styles.siteLink}>https://marsdensqlnotesapp.netlify.app</a><p>Todo list and notes web app</p></li>
            <li><a href='https://hiroshimaartcenter.netlify.app/' className = {styles.siteLink}>https://hiroshimaartcenter.netlify.app/</a><p>Hiroshima Art Center home page</p></li>
            <li><a href='https://marsdenjacques.github.io/' className = {styles.siteLink}>https://marsdenjacques.github.io/</a><p>A small site I use as a playground</p></li>
          </ul>
        </div>
        <div className = {styles.section + ' ' + styles.publications}>
          <h2 className = {styles.sectionHeader}>Publications</h2>
          <ul className = {styles.portfolioList}>
            <li><a href='https://www.sciencedirect.com/science/article/pii/S0012365X20301783?via%3Dihub' className = {styles.siteLink}>Generating Gray codes for weak orders in constant amortized time</a><p>Publication: Discrete Mathematics</p></li>
            <li><a href='https://drive.google.com/file/d/1nZP3B6fD0kmuakXtf6rMIdP8ZzX9VdqV/view?usp=sharing' className = {styles.siteLink}>Greedy universal cycle constructions for weak orders</a><p>Publication: Caldam 2020</p></li>
          </ul>
        </div>
      </section>
      <section className = {styles.transparent + ' ' + styles.about}>
        <div className = {styles.transparentSection + ' ' + styles.aboutMe}>
          <h2 className = {styles.sectionHeader}>About Me</h2>
        </div>
        <div className = {styles.transparentSection}>
          <h2 className = {styles.sectionHeader}>Developer</h2>
          <p>
            I develop games, websites, and a variety of other things.......... looking for freelance opportunities, and I am always open to 
            collaboration with others on interesting projects!
          </p>
        </div>
        <div className = {styles.transparentSection}>
          <h2 className = {styles.sectionHeader}>Researcher</h2>
          <p>
            I&apos;m a published researcher focusing on algorithms and combinatorics in Computer Science....
          </p>
        </div>
        <div className = {styles.transparentSection}>
          <h2 className = {styles.sectionHeader}>Creative</h2>
          <p>
            I have a love for creation, and grew up being inspired by an internet filled with tons of wacky and wild creations, 
            and games made as labors of love out of a desire to create. I hope I can bring some sense of that experience through to others with my work. 
          </p>
        </div>
        <div className = {styles.transparentSection + ' ' + styles.meImage}>
          <Image src = {meOne} alt = 'Me with a bucket hat on.'/>
        </div>
        <div className = {styles.transparentSection + ' ' + styles.meImage}>
          <Image src = {meTwo} alt = 'Me with a different hat on.'/>
        </div>
        <div className = {styles.transparentSection + ' ' + styles.meImage}>
          <Image src = {meGoats} alt = 'Me feeding goats.'/>
        </div>
      </section>
    </div>
  )
}
