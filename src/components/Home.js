import saturn from '../assets/imgs/giphy.gif'
export default function Home() {
  return (
    <div class='home'>
      <div>
        {/* About US */}
        <div class='about_main'>
          <h1>Why "Saturn SkyLine"?</h1>
          <p class='about_info'>What makes Saturn Saturn? His extraordinarily beautiful rings. Our company acts as the planet itself, and our customers are the very asteroids that form the rings.</p>
          <span class='saturn_con'>
            <img class='saturn' width={200} src={saturn} alt='saturn' />
          </span>
        </div>
      </div>
    </div>
  );
}