document.addEventListener('DOMContentLoaded',postData);
console.log(document.location.search);


const data = document.location.search;
const params = new URLSearchParams(data);

const name= params.get('fname');
const amount= params.get('amount');
const personality= params.getAll('personality');
const motivation= params.get('motivation');
const roles= params.get('roles')
const mistake= params.get('mistake');
const lies=params.get('lies');



let character;
if (personality.includes("leadership") || personality.includes("smart")&& (motivation && motivation.includes("intellect"))&&(roles && roles.includes("leader"))&&(mistake && mistake.includes("ownup"))&&(lies && lies.includes("reconcile"))){
    character = "Courtney";
} else if (personality && personality.includes("strength")&&(roles &&roles.includes("physical"))&&(lies && lies.includes("focus"))&&(motivation && motivation.includes("whoknows"))&&(mistake && mistake.includes("ownup"))){
    character = "Geoff";   
} else if (personality && personality.includes("kindness")&&(motivation && motivation.includes("connection"))&&(roles &&roles.includes("support"))&&(mistake && mistake.includes(apologize))&&(lies && lies.includes("reconcile"))){
    character = "DJ";
} else if (personality && personality.includes("silly")&&(motivation.includes("money"))&&(roles &&roles.includes("support"))&&(mistake && mistake.includes(apologize))&&(lies && lies.includes("reconcile"))){
    character = "Owen";
} else if (personality && personality.includes("creative")&&(motivation && motivation.includes("whoknows"))&&(roles &&roles.includes("strategy"))&&(mistake && mistake.includes("solution"))&&(lies && lies.includes("reconcile"))){
    character = "Gwen";
} else if(personality && personality.includes("wildcard")&&(motivation && motivation.includes("whoknows"))|| (motivation && motivation.includes("intellect"))&&(roles &&roles.includes("physical"))&&(mistake && mistake.includes("solution"))&&(lies && lies.includes("outsmart"))){
    character = "Izzy";
}else if (motivation && motivation.includes("success") || motivation.includes("money")&&(personality.includes("leadership")) ||(personality.includes("smart")) &&(roles &&roles.includes("strategy"))&&(mistake && mistake.includes("focus"))&&(lies && lies.includes("outsmart"))) {
    character= "Heather";
}else if(motivation && motivation.includes("challenge") || (motivation.includes("money"))&&(roles &&roles.includes("strategy"))&&(personality && personality.includes("strength"))&&(mistake && mistake.includes("focus"))&&(lies && lies.includes("outsmart"))){
    character= "Duncan";
}else if(lies && lies.includes("confront")&& (mistake && mistake.includes("focus"))&&(personality && personality.includes("silly"))&&(roles &&roles.includes("strategy"))&&(mistake && mistake.includes(apologize))){
    character= "Leshawna";
}else 
    character = "Gwen";


function postData(){
  const container = document.getElementById('results');
  let paragraph= "";
  switch (character) {
      case 'Courtney':
          image = "images/Court_TDI.jpg";
          paragraph = "Courtney is known for her strong leadership skills and sharp intellect. She often takes charge and strives for success.  No one cares that you were a CTI in training.";
          break;
      case 'Geoff':
          image = "images/G_TDI.jpg";
          paragraph = "If you got Geoff and found yourself not remembering who this character is...don't worry. Me too.";
          break;
      case 'DJ':
          image = "images/Dj_TDI.jpg";
          paragraph = "DJ is kind-hearted and compassionate, always looking out for others and forming strong connections. You are a chicken though.";
          break;
      case 'Owen':
          image = "images/Ow_TDI.jpg";
          paragraph = "Owen is known for his silly and carefree nature, always bringing laughter and joy to the group. Stay away from me if you need to fart...";
          break;
      case 'Gwen':
          image = "images/Gwen_TDI.jpg";
          paragraph = "Gwen is creative and independent, often coming up with innovative solutions to challenges. You probably think you're misunderstood by the world and have the most esoteric music taste ever.";
          break;
      case 'Izzy':
          image = "images/Iz_TDI.jpg";
          paragraph = "Izzy is a wildcard with a unique and unpredictable personality. She keeps things interesting with her unconventional approach. You scare me a little!";
          break;
      case 'Heather':
          image = "images/Heath_TDI.jpg";
          paragraph = "Heather is driven by success and ambition, always strategizing and aiming for the top. We get it you move in silence and are always plotting. Leave us alone!";
          break;
      case 'Duncan':
          image = "images/Dunc_TDI.jpg";
          paragraph = "Duncan is a challenge-seeker with a tough exterior, but he also values strategy and intellect. Try not to talk about juvie challenge FAILED!";
          break;
      case 'Leshawna':
          image = "images/Les_TDI.jpg";
          paragraph = "Leshawna is confident and assertive, never afraid to confront challenges head-on. Elite character! Nothing bad to say!";
          break;
      default:
          image = "images/Gwen_TDI.jpg";
          paragraph = "Gwen is creative and independent, often coming up with innovative solutions to challenges. You probably think you're misunderstood by the world and have the most esoteric music taste ever.";
          break;
  }
  container.innerHTML= `<h1>Hello, ${name}! You are ${character}!</h1>
                        <img class="character-image" src="${image}" alt= "${character}!">
                        <p>${paragraph}</p>
                        <button class="back-button" onclick="goBack()">Back</button>`;
}
function goBack() {
    window.history.back()
}
