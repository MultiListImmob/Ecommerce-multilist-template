// On page load or when changing themes, best to add inline in `head` to avoid FOUC

const button = document.querySelector('#dark');
const lightButton = document.querySelector('#light');


const useTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
     lightButton.classList.toggle('display-none');
     button.classList.toggle('display-none');
};

const themeCheck = () => {

       if(useTheme === "dark" || (!useTheme && systemTheme)){

          document.documentElement.classList.add('dark');
          button.classList.add('display-none');
          return;
       }

            lightButton.classList.add('display-none');
    
}

const themeSwitch = () => {

    if(document.documentElement.classList.contains('dark')){
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme',"light");
          iconToggle();
          return;
    }
   
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme',"dark");
        iconToggle(); 
}


button.addEventListener('click', () => {
     themeSwitch();
});

lightButton.addEventListener('click', () => {
    themeSwitch();
});

themeCheck();