import './footer.css'

export default function Footer () {
   return (
      <div className='Footer'>
         <footer>
               <div class="footer__info">
                  <h2>КОНТАКТИ</h2>
                  <p>Доставка: +380 00 111 5535</p>
                  <p>Бронювання: +380 00 111 5555</p>
                  <p>м.Дніпро острів Зелений</p>
                  <p>ПН-ВС: 10:00-23:00</p>
                  <button><a href="tel:+380 00 111 5555">Забронювати</a></button>
               </div>
               <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3236.942450341489!2d35.03585770644176!3d48.4863551703551!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x40dbe30cac790141%3A0x6dc9b0f5430a539c!2z0J7RgdGC0YDQvtCyINCX0LXQu9C10L3Ri9C5LCDQlNC90ZbQv9GA0L4sINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!3m2!1d48.485861799999995!2d35.0380846!5e0!3m2!1sru!2sua!4v1680022241363!5m2!1sru!2sua" width="1000" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
         </footer>
      </div>
   )
}