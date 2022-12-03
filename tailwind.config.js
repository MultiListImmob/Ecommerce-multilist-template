/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./*html"
  ],
  darkMode:"class", //class,media
  theme: {
    screens:{

        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl':'1800px'
       
        

    },
    container:{
       center:true,
       padding: '1rem' //16px
    },
     extend:{
        fontFamily: {
            "catamaran": ['Catamaran'],
            'fjall':['Fjalla One'],
            'poiret':['Poiret One']
        },

        colors:{

             primary : '#4cc6d6ff',
             text_color:'##373736ff',
             booklist:'#b52483ff',
             primelist:'#f3be2eff',
             officelist:'#00537dff',
             landlist:"#54c21bff",
             homelist:'#f64d4bff',
             text_white:"#F7F7F7"

           
        },
     },
  },
  plugins: [],
}
