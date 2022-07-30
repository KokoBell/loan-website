import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import FlatCard from '../components/flat_card'
import Heading from '../components/heading'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar logo="Loans" />
      <main className={styles.main}>
        <Hero
          source="/hands.png"
          main_text="Earn 6% interest on your FD &amp;"
          sub_text="Get a lifetime free Step Up Credit Card"
        />
        <Heading text="Cards &amp; loans" />
        <div className={styles.card_section}>
          <Card
            heading="Credit Cards"
            text="Choose a card matching your lifestyle needs"
            url="/"
            link_text="Get a Card"
          />
          <Card
            heading="Personal Loans"
            text="Select the best offer curated just for you"
            url="/"
            link_text="Check Eligibility"
          />
          <Card
            heading="Micro Loans"
            text="Instant small ticket loands to meet your cash needs"
            url="/"
            link_text="Get Instant Loan"
          />
          <Card
            heading="Business Loan"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Check Eligibility"
          />
          <Card
            heading="Transfer Personal Loan"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Reduce Your EMI"
          />
          <Card
            heading="New Home Loan"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Check Eligibility"
          />
          <Card
            heading="Loan Against Collateral"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Check Eligibility"
          />
          <Card
            heading="Transfer Home Loan"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Reduce Your EMI"
          />
          <Card
            heading="Step Up Credit Card"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Learn More"
          />
        </div>
        <Heading text="Insurance &amp; Investment" />
        <div className={styles.card_section}>
          <Card
            heading="Term Life Insurance"
            text="Choose a card matching your lifestyle needs"
            url="/"
            link_text="Secure The Future"
          />
          <Card
            heading="Health Insurance"
            text="Select the best offer curated just for you"
            url="/"
            link_text="Cover Your Health"
          />
          <Card
            heading="Direct Mutual Funds"
            text="Instant small ticket loands to meet your cash needs"
            url="/"
            link_text="Check Your Investment"
          />
          <Card
            heading="Gauranteed Return Plan"
            text="Expand your business with loans at a low rate"
            url="/"
            link_text="Invest Now"
          />
        </div>

        <Heading text="Our Achievements" />
        <div className={styles.achievements}>
          <FlatCard text="This is some text" source="/appreciation.svg" />
          <FlatCard text="This is some text" source="/gift.svg" />
          <FlatCard text="This is some text" source="/rain.svg" url="/" />
        </div>

        
          <h2 className={styles.headline}>
            Tailor Made Products <br /> Exclusively for LOANS Customers
          </h2>
          <span className={styles.bar}>&nbsp;</span>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
