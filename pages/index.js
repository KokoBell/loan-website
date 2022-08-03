import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Button from '../components/button'
import Card from '../components/card'
import FlatCard from '../components/flat_card'
import Heading from '../components/heading'
import IconCard from '../components/icon_card '
import ListSection from '../components/list_section'
import styles from '../styles/Home.module.css'

export default function Home() {
  const hero_items = ['Card Limit is 100% of FD Amount', 'Instant Virtual Card']
  const first_section_list = ['Credit Card on Fixed Deposit', 'Card Limit Equal to FD Amount', 'Helps Build Credit Score']
  useEffect(() => {

  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div id="nav" className={styles.nav}>
          <h1 className={styles.nav_logo}> LOANS </h1>
          <div id="navbar" className={styles.nav_bar}>
            <div className={styles.nav_links} >
              <p className={styles.nav_link}> All Products </p>
              <p className={styles.nav_link}> Learn </p>
              <p className={styles.nav_link}> Resources </p>
              <p className={styles.nav_link}> Contact </p>
            </div>
            <p className={styles.signup}> Sign Up </p>
          </div>
        </div>
        <div id="hamburger" className={styles.hamburger} onClick={(e) => {
          const hamburger = document.getElementById("hamburger")
          hamburger.classList.toggle("active")
          const navbar = document.getElementById("navbar")
          const navigation = document.getElementById("nav")
          const bar1 = document.getElementById("bar1")
          const bar2 = document.getElementById("bar2")
          const bar3 = document.getElementById("bar3")
          if (hamburger.classList.contains("active")) {
            navigation.style.display = "flex"
            navigation.style.flexDirection = "column"
            hamburger.style.alignSelf = "flex-start"
            hamburger.style.marginTop = "1rem"
            navbar.style.display = "flex"
            navbar.style.flexDirection = "column"
            bar1.style.transform = "translateY(6px) rotate(45deg)"
            bar2.style.display = "none"
            bar3.style.transform = "translateY(-8px) rotate(-45deg)"
          } else {
            navigation.style.display = "flex"
            navigation.style.flexDirection = "row"
            navbar.style.display = "none"
            hamburger.style.marginTop = "1rem"
            bar1.style.transform = "translateY(0) rotate(0deg)"
            bar2.style.display = "block"
            bar3.style.transform = "translateY(0) rotate(0deg)"
          }
        }
        }>
          <span className={styles.bar} id="bar1"></span>
          <span className={styles.bar} id="bar2"></span>
          <span className={styles.bar} id="bar3"></span>
        </div>
      </nav>

      <main className={styles.main}>

        <div className={styles.hero}>
          <Image
            height={500}
            width={500}
            src={"/hands.png"}
          />

          <div className={styles.text_wrapper}>
            <p className={styles.main_text}>
              Earn 6% interest on your FD &amp;
            </p>
            <p className={styles.sub_text}>
              Get a lifetime free Step Up Credit Card
            </p>
            <ul className={styles.list_items}>
              {hero_items.map((list_item) => {
                return <li key={list_item} className={styles.list_item}>
                  {list_item}
                </li>
              })}
            </ul>
            <Button text="Get a Loan" />
          </div>
        </div>

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
          <FlatCard text="Winner of the Oustanding Finance Crisis Innovation 2020 Award" source="/appreciation.svg" />
          <FlatCard text="Proudly made in India, for Indains around the world" source="/gift.svg" />
          <FlatCard text="Beware of fraustsers" source="/rain.svg" url="/" link_text="Check Fraud Detection" />
        </div>


        <h2 className={styles.center_headline}>
          Tailor Made Products <br /> Exclusively for LOANS Customers
        </h2>
        <span className={styles.center_bar}>&nbsp;</span>

        <ListSection
          source="/small-bank-card.png"
          headline="Step Up Credit Card"
          list_items={first_section_list}
          right
        />

        <ListSection
          source="/pod-card.png"
          headline="Step Up Credit Card"
          list_items={first_section_list}
        />

        <div className={styles.attributes_wrapper}>
          <div className={styles.headline_wrapper}>
            <span className={styles.left_bar}>&nbsp;</span>
            <h2 className={styles.left_headline}>
              Compare, Choose and Apply for personal credit products on LOANS
            </h2>
          </div>

          <div className={styles.attributes}>
            <IconCard
              heading="Safe &amp; Secure"
              text="Our algorithm-based technology provides access to multiple credit offers, ease of comparison and unbiased advice"
              source="/secure.svg"
            />
            <IconCard
              heading="Easy Access to Credit"
              text="We have partnerships with large banks, NBFCs and fintech lenders who offer a wide choice of products on our platform"
              source="/trustworthy.svg"
            />
            <IconCard
              heading="Wide Range"
              text="Our algorithm-based technology provides access to multiple credit offers, ease of comparison and unbiased advice"
              source="/credible.svg"
            />
            <IconCard
              heading="Customer First"
              text="We have a dedicated and highly trained team of experts who work hard every day to help you take the best financial decisions"
              source="/helpful.svg"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
