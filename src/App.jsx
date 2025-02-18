import styles from "./style";
import { Business, Clients, CTA, Footer, NavBar, Stats, Testimonials, Hero, WhatsAppButton } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Testimonials />
        <Clients />
        <CTA />
        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;