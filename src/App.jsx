//Jiovana Libong Foundattion : Home page
//Imports
import Nav from './components/Nav.jsx';
import { Foundation, SuperQuality, PopularPro, Services, SpecialOffer, LastEvent, Subscribe, Footer} from './index.js';

const App = () => (
  <main className="relative">
    {/* Nav bar*/}
    <Nav />
    <section className="xl:padding-1 wide:padding-l padding-b">
      <Foundation />
    </section>
    <section className="padding">
      <PopularPro />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    {/* <section className="padding">
      <SpecialOffer />
    </section> */}
    <section className="bg-blue-100 padding">
      <LastEvent />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;