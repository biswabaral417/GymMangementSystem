import React from 'react'
import './services.css'
import pt from './images/personal-trainer.jpg'
import nutrio from './images/Nutritionist.jpg'
import groupFitness from './images/groupFitness.webp'
import cardio from './images/cardio.webp'
import stz from './images/STZ.jpg'
import yogaClass from './images/yogaClasses.webp'
import cunsultation from './images/cunsultation.webp'
import sauna from './images/sauna.jpeg'

export default function Services() {
  return (
    <div className='servicesGridContainer'>
      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${pt}`} loading='lazy' alt="" />
        <h3>Personal Trainers</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.</p>
      </article>

      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${nutrio}`} loading='lazy' alt="" />
        <h3>Nutritunist</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.

        </p>
      </article>
      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${groupFitness}`} loading='lazy' alt="" />
        <h3>Group Fitness</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.
        </p>
      </article>
      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${cardio}`} loading='lazy' alt="" />
        <h3>Cardiovascular Zone</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.
        </p>
      </article>
      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${stz}`} alt=""  loading='lazy'/>
        <h3>Strength Training Zone</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.
        </p>
      </article>
      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${yogaClass}`}  alt=""  loading='lazy'/>
        <h3>Yoga Classes</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.
        </p>
      </article>
      <article className="serviceArticle">
        <img className='servicesArticleImage'src={`${cunsultation}`} alt="" loading='lazy' />
        <h3>Cunsultation</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.
        </p>
      </article>
      <article className="serviceArticle">
        <img className='servicesArticleImage' src={`${sauna}`} alt="" loading='lazy' />
        <h3>Steam & Sauna</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam nulla totam nostrum! Suscipit, officiis numquam! Tempore pariatur soluta nam rerum quam quaerat possimus laborum veniam ea consectetur quod omnis impedit ullam tenetur vero eius hic repellat consequuntur quas ab excepturi ex, nesciunt voluptas.
        </p>
      </article>

    </div>
  )
}
