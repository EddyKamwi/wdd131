document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

var clicked = true;
const bars = document.getElementById("menuBar");
const menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  if (clicked) {
    bars.innerText = "⨉";
    clicked = false;
    menu.style.display = "flex";
  } else {
    bars.innerText = "≡";
    clicked = true;
    menu.style.display = "none";
  }
});

// Array of realistic sports news posts with revised summaries
const sportsNews = [
  {
    id: 1,
    title: "National Team Wins Championship",
    content:
      "The national soccer team triumphed in the championship final, securing a 3-1 victory over their rivals. A last-minute goal sealed the win, and the team celebrated their first major international trophy in over two decades. Fans flooded the streets in celebration, while players praised their coach for the tactical approach that led them to success.",
    author: "David Lopez",
    date: "2024-06-17",tag:"sports"
  },
  {
    id: 2,
    title: "Star Athlete Breaks World Record",
    content:
      "A world record was shattered in the 100-meter sprint as an athlete posted an incredible time of 9.54 seconds. The performance stunned spectators and experts alike, who hailed it as one of the greatest achievements in the history of track and field. The athlete now holds the title for the fastest sprinter in history, surpassing previous records by a wide margin.",
    author: "Jessica Taylor",
    date: "2024-06-16",tag:"sports"
  },
  {
    id: 3,
    title: "NBA Finals: Game 7 Showdown",
    content:
      "The NBA Finals are heading to a thrilling Game 7 after an intense battle in Game 6. The two teams have been neck-and-neck throughout the series, with high-scoring games and dramatic moments. Fans are eagerly awaiting the final showdown to determine which team will take home the championship trophy after an electrifying season.",
    author: "Ryan Carter",
    date: "2024-06-15",tag:"sports"
  },
  {
    id: 4,
    title: "Tennis Legend Retires After Final Match",
    content:
      "In an emotional farewell, a tennis legend announced their retirement after a career-defining final match. The player, who won 20 Grand Slam titles, had a lasting impact on the sport. Fans packed the arena to witness the last match, where the legend bid farewell to an illustrious career filled with historic moments and unforgettable victories.",
    author: "Megan Hall",
    date: "2024-06-14",tag:"sports"
  },
  {
    id: 5,
    title: "Local Marathon Sees Record Participation",
    content:
      "Over 50,000 runners participated in the city's annual marathon, setting a new participation record. Runners from around the world competed for top honors in various categories, with local athletes securing several medals. The event raised millions of dollars for charity, contributing to the city's efforts to improve health and wellness programs.",
    author: "Kevin Wright",
    date: "2024-06-13",tag:"sports"
  },
  {
    id: 6,
    title: "Underdog Team Stuns Champions in Playoffs",
    content:
      "In a stunning upset, the underdog team eliminated last year’s champions in the playoffs. Despite entering the series as heavy underdogs, the team displayed remarkable teamwork and determination, securing victory in a dramatic overtime finish. Fans are calling it one of the greatest playoff upsets in recent memory, with the underdog team advancing to the finals.",
    author: "Chris Turner",
    date: "2024-06-12",tag:"sports"
  },
  {
    id: 7,
    title: "Boxing Title Match Ends in Split Decision",
    content:
      "The highly anticipated boxing title match ended in a controversial split decision. After 12 intense rounds, the judges awarded the victory to the reigning champion, sparking debate among fans and commentators. The challenger’s team has already called for a rematch, claiming their fighter dominated several key rounds. Fans eagerly await the next showdown between the two rivals.",
    author: "Olivia Parker",
    date: "2024-06-11",tag:"sports"
  },
  {
    id: 8,
    title: "Olympic Committee Adds New Sports for 2028",
    content:
      "The Olympic Committee has announced the addition of new sports for the 2028 Games, including skateboarding, esports, and mixed martial arts. The move aims to attract younger audiences and expand global interest. Critics argue that some traditional sports are being sidelined, while supporters praise the inclusivity and modern appeal of the new additions.",
    author: "Daniel Scott",
    date: "2024-06-10",tag:"sports"
  },
  {
    id: 9,
    title: "Star Quarterback Signs Historic Contract",
    content:
      "A star quarterback has signed a historic $300 million contract extension, the largest in league history. The five-year deal ensures the player will remain with the team as they aim for future championships. Analysts are praising the team’s investment in their franchise player, who has consistently delivered top performances over the past seasons.",
    author: "Rachel Simmons",
    date: "2024-06-09",tag:"sports"
  },
  {
    id: 10,
    title: "Cyclist Wins Prestigious Tour de France",
    content:
      "A world-class cyclist has claimed victory in the prestigious Tour de France, securing the yellow jersey after three grueling weeks of racing. The win marks the rider's second consecutive title and solidifies their place as one of the sport’s all-time greats. Fans and analysts alike are applauding the cyclist’s impressive endurance and tactical skills.",
    author: "Laura Bennett",
    date: "2024-06-08",tag:"sports"
  },
  {
    id: 11,
    title: "Rookie Sets Record in Major League Debut",
    content:
      "A rookie baseball player made headlines after setting a new record in their major league debut, hitting three home runs in a single game. The performance has sparked excitement among fans, with many predicting a promising career ahead for the young athlete. Teammates praised the rookie's confidence and composure under pressure.",
    author: "James Nolan",
    date: "2024-06-07",tag:"sports"
  },
  {
    id: 12,
    title: "Formula 1 Driver Dominates Grand Prix",
    content:
      "A dominant performance by a leading Formula 1 driver secured victory in the latest Grand Prix, extending their championship lead. The driver’s flawless execution and strategic pit stops left rivals far behind. Fans hailed the race as a masterclass in driving, with the champion edging closer to securing the season title.",
    author: "Sophie Evans",
    date: "2024-06-06",tag:"sports"
  },
  {
    id: 13,
    title: "Women’s Team Makes History in Basketball Final",
    content:
      "A women’s basketball team made history by winning the national championship for the first time. The team delivered a standout performance in the finals, showcasing exceptional shooting and defense. Fans and analysts are celebrating this historic achievement as a milestone for women’s basketball, inspiring a new generation of athletes.",
    author: "Emma Clarke",
    date: "2024-06-05",tag:"sports"
  },
  {
    id: 14,
    title: "Soccer Star Announces Retirement Plans",
    content:
      "One of the greatest soccer players of the generation has announced plans to retire at the end of the current season. With over 500 career goals and countless awards, the player leaves behind a legacy of excellence. Fans around the world have been paying tribute, celebrating the player’s contributions to the sport.",
    author: "Nathan Grant",
    date: "2024-06-04",tag:"sports"
  },
  {
    id: 15,
    title: "Golf Champion Wins Major Tournament",
    content:
      "A veteran golfer clinched victory in a major tournament, overcoming fierce competition and challenging weather conditions. This marks their third major title and solidifies their comeback after struggling with injuries in recent years. The win has been praised as one of the most inspiring stories of the season, with fans celebrating the golfer’s resilience.",
    author: "Brian Hughes",
    date: "2024-06-03",tag:"sports"
  },
  {
    id: 16,
    title: "Swimming Records Broken at Nationals",
    content:
      "Multiple records were shattered at the national swimming championships, with young swimmers dominating the event. A rising star emerged as the standout performer, breaking two national records in freestyle events. Experts predict a bright future for the athlete, with hopes high for their performance at upcoming international competitions.",
    author: "Claire Foster",
    date: "2024-06-02",tag:"sports"
  },
  {
    id: 17,
    title: "Cricket Team Secures Series Victory",
    content:
      "The national cricket team secured a series victory against their rivals, winning three out of four matches. Key performances by both bowlers and batsmen led to the triumph, earning praise from fans and analysts. The team’s consistent form this season has raised expectations for their performance in the upcoming World Cup.",
    author: "Liam Carter",
    date: "2024-06-01",tag:"sports"
  },
  {
    id: 18,
    title: "Ice Hockey Final Ends in Overtime Thriller",
    content:
      "The ice hockey finals concluded in dramatic fashion as the winning team scored the decisive goal in overtime. The game featured exceptional performances from both goalkeepers and high-paced action throughout. Fans celebrated the thrilling victory, with analysts calling it one of the most exciting finals in recent memory.",
    author: "Ashley Morgan",
    date: "2024-05-31",tag:"sports"
  },
  {
    id: 19,
    title: "Track Star Qualifies for Olympics",
    content:
      "A promising track star has qualified for the upcoming Olympics after a dominant performance at the trials. The athlete excelled in both sprint and relay events, earning praise for their speed and composure. Coaches and analysts are hopeful that the athlete will bring home medals and elevate their performance on the world stage.",
    author: "Mia Patterson",
    date: "2024-05-30",tag:"sports"
  },
  {
    id: 20,
    title: "Young Gymnast Shines at International Competition",
    content:
      "A young gymnast stunned the crowd with a gold-medal performance at an international competition. The athlete’s flawless routines on the beam and floor earned perfect scores from judges. This victory marks a major breakthrough, with experts calling the gymnast a rising star poised for future Olympic success.",
    author: "Zoe Adams",
    date: "2024-05-29",tag:"sports"
  },
];

const container = document.querySelector(".main-p");
// container = document.querySelector(".main");
const sec = document.querySelector("aside");

var form = `<h2>Subscrip to News-Letter</h2>
<form method="get" action="./index.html">
            
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="firstname@gmail.com" required>
            <span>Note: By activating your subscription you give us consent to send emails to you of our latest news.</span>
            <button type="submit">Activate My Subscription</button>
          </form>  <hr>`
var limit = 3;
sportsNews.forEach((news) => {
  sec.innerHTML = form;

  if (limit > 0) {
    var shortContent = news.content
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("data-id", news.id);
    div.innerHTML = `
            <h3 class="title">${news.title}</h3>

            <p class="body" id="button">
            ${shortContent}
            </p>
            <div class="footer">author: ${news.author} date: ${news.date}</div>
          `;

    const btn = document.querySelector("#button");
    container.appendChild(div);
    limit--;
  }
})

document.querySelector("button").addEventListener("submit", () => alert("Thank you for subscriping with us."))