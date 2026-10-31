import skullIcon from '../icons/skull.svg';
import batIcon from '../icons/bat.svg';
import tonicIcon from '../icons/bottle-tonic-skull.svg';

export default function menuPage() {

    const menu = document.createElement('div');
          menu.id = "menu";
          menu.innerHTML = `
    <img src="${skullIcon}">
    <h2>Huevos Estrellados</h2>
    <p>Our signature dish. Eggs, smashed and beaten. Served with your choice of sides.
    
    <span class="menu-price">Price: 1 Soul.<span></p>

    <img src="${batIcon}">
    <h2>Eye of Newt Soup</h2>
    <p>With Carrot and Leek.
    
    <span class="menu-price">Price: Guest's favorite memory. Nonrefundable.</span></p>

    <img src="${tonicIcon}">
    <h2>Toil and Trouble</h2>
    <p>A double serving.
    
    <span class="menu-price">Price: Finger bones of an enemy to the establishment.</span></p>
    
    
    `;

    return menu;

}