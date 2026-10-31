import silverware from '../icons/silverware-variant.svg';

export default function aboutPage() {

    const about = document.createElement('div');
          about.id = "about";
          about.innerHTML = `
            <img src="${silverware}">
            <p>
                Toppling civilization is hard work, and that requires a balanced breakfast. The Cauldron<sup>TM</sup> was founded to make sure that Steimling Technologies employees can focus on world domination instead of counting macros. Evil is a full time job, and we are here to support it!
            </p>
          `;
    
    return about;

}