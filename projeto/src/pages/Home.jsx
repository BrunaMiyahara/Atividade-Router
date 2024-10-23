import img8 from "../assets/8.webp"
import img7 from "../assets/7.webp"
import img6 from "../assets/6.webp"
import img5 from "../assets/5.webp"
import img4 from "../assets/4.webp"
import img3 from "../assets/3.webp"
import img2 from "../assets/2.webp"
import img1 from "../assets/1.webp"

const Home = () => {
  return (
    <>
      <h1>8 Cachorros "mais feios do mundo"</h1>
      <ol reversed className="cachorros">
        <li><figure><figcaption>Freddie Mercury</figcaption><img src={img8} alt="Oitavo Cachorro"/></figure></li>
        <li><figure><figcaption>Tiny Twiggy</figcaption><img src={img7} alt="Sétimo Cachorro"/></figure></li>
        <li><figure><figcaption>Ozzy</figcaption><img src={img6} alt="Sexto Cachorro"/></figure></li>
        <li><figure><figcaption>Poppy</figcaption><img src={img5} alt="Quinto Cachorro"/></figure></li>
        <li><figure><figcaption>Mochi</figcaption><img src={img4} alt="Quarto Cachorro"/></figure></li>
        <li><figure><figcaption>Daisy Mae</figcaption><img src={img3} alt="Terceiro Cachorro"/></figure></li>
        <li><figure><figcaption>Rome</figcaption><img src={img2} alt="Segundo Cachorro"/></figure></li>
        <li><figure><figcaption>Wild Thang</figcaption><img src={img1} alt="Primeiro Cachorro"/></figure></li>
      </ol>
    </>
  )
};

export default Home;