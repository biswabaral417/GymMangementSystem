import React from 'react'
import map from './map.png'
import gymImg from './gymImg.png'
import barbell from './barbell.jpg'
import motive from './motive.jpg'
export default function About() {
  return (
    <div>
      <a href='#blogs'>
        <button>goto blogs</button>
      </a>
      <h1 style={{ color: 'white', textAlign: 'center' }}>BARBEL FITNESS GYM</h1>
      <h3 style={{ color: 'white', textAlign: 'center' }}>The Best Gym In Kathmandu</h3>
      <section>
        <img src={gymImg} alt="" />
        <article>
          <p style={{ color: 'white', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in cum fuga a debitis consequuntur qui ipsam et aspernatur iure rerum atque odit, dignissimos praesentium soluta? Ab porro nisi tempore perferendis ullam veritatis quod facilis ut mollitia, necessitatibus vero iure incidunt, suscipit assumenda fugiat iste eaque provident veniam consectetur magnam voluptate ducimus.<br /> esse laborum id. Cum atque, doloremque magni nesciunt iusto dignissimos? Officiis, animi harum vitae esse nulla laborum? Corporis natus vitae mollitia doloremque repellendus minus officiis nobis corrupti neque exercitationem, fugiat, nesciunt perspiciatis consectetur in illo odio cum asperiores at? Esse architecto veritatis tempore minima impedit itaque blanditiis sunt.
          </p>
        </article>

      </section>
      <section className='d_flx'>
        <img src={barbell} alt="" style={{ width: '100%', padding: '50px' }} />
        <article style={{ padding: "50px 20px" }}>
          <h4 style={{ color: 'white' }}>
            Why Barbel Fitness
          </h4>
          <p style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam natus officiis doloremque vel? Commodi doloribus nisi cupiditate. Error, cum magni. Excepturi eveniet laudantium quas illum pariatur obcaecati cum, fugiat recusandae nesciunt debitis. Voluptate, minus beatae? Excepturi totam architecto suscipit repellendus ipsum, eum error voluptatum distinctio,<br /> fuga eligendi maiores itaque animi magnam quasi ad. Voluptate unde dolore illum ipsa cum nam esse iste animi, accusantium quasi fugit at error ipsum deleniti quaerat facilis aliquam quas nemo quo quos velit! Vero nam distinctio cum harum quae non quidem corrupti tempore sapiente veniam et facilis exercitationem accusamus voluptatem odit, mollitia aspernatur adipisci ea ab amet dolorum dolor. Perspiciatis nihil et esse quo dolores reprehenderit minus mollitia at nesciunt in harum pariatur architecto,<br /> aliquam, maiores quibusdam officiis animi facere ducimus fugiat corporis molestiae cupiditate maxime? Reiciendis earum doloribus eveniet libero iusto iure! Nulla sequi, eligendi incidunt dolor ratione tempore voluptatem cum soluta similiques sit porro. Explicabo, doloribus? Inventore enim pariatur rerum fuga soluta explicabo minus aspernatur.
          </p>
        </article>
      </section>
      <section>
        <img src={motive} alt="" />
        <article>
          <h4 style={{ color: 'white', textAlign: 'center' }}>Our Motive</h4>
          <p style={{ color: 'white', textAlign: 'center' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, praesentium. Dicta, accusantium! Odit hic error cum saepe nihil alias vitae, doloremque, eum esse velit necessitatibus soluta incidunt atque ratione dolorem quam omnis labore iusto laudantium deleniti laboriosam asperiores? Unde dolor aperiam aut ea saepe a corrupti quibusdam minus recusandae, ipsum pariatur eos modi blanditiis esse officia hic tempore, possimus aliquid in autem ut reprehenderit fuga sapiente? Ipsam magnam blanditiis error perferendis, vitae velit animi praesentium nessumenda earum vero, soluta magni dicta magnam minima, ad animi a doloribus expedita dolore fugit itaque natus autem nobis nesciunt cum?</p>
        </article>
      </section>
      <section>
        <h2 style={{ color: "white", textAlign: "center" }}>VISIT BARBEL FITNESS</h2>
        <h2 style={{ color: "white", textAlign: "center" }}>CLick on map to get direction</h2>
        <a href="https://maps.app.goo.gl/SbNNXHm2wKMrqbhQ9" style={{margin:"auto"}}>
          <img id='gymLocImg'
            src={`${map}`} alt="here" />
        </a>
      </section>
    </div>
  )
}
