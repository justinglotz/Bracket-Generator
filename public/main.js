// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    
    <div class="matchup-boxes">
    <h1 class="regions">EAST</h1>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    </div>
    <div class="matchup-boxes">
    <h1 class="regions">EAST</h1>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    <div class="matchup-box"></div>
    </div>
  `;
};

init();
