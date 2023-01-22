import './app.css'
import "@fontsource/montserrat/cyrillic.css" //"/src/assets/index_montser.css"; //Загрузка шрифтов
import "@fontsource/montserrat/latin.css"
import App from './App.svelte'

const app=new App( {
    target: document.getElementById('app'),
  }

);

export default app