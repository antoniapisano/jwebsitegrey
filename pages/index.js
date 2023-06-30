import Head from 'next/head'
import styles from '../styles/Home.module.css'
import YoutubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>James Evans Official Website UK Blues Artist</title>
      </Head>

     <div className={styles.gridcontainer}>
        <div className={styles.headcontainer}>
          <h1 className={styles.thistitle}>James<br />Evans</h1>
        </div>
      <div className={styles.youtubecontainer}>
        <YoutubeEmbed embedId="Hy4qV0tpI8M" />
          </div>

      </div>
    
      
      


      
    </div>
    
  )
}
