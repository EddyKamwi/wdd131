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

// Array of realistic political news posts with revised summaries
const politicalNews = [
  {
    id: 2,
    title: "Global Leaders Meet for Climate Summit",
    content:
      "World leaders convened at an international climate summit to discuss strategies for combating climate change. Key issues included carbon reduction targets, renewable energy investments, and climate finance for developing nations. While some nations pledged to strengthen commitments, others raised concerns about economic feasibility, highlighting ongoing global challenges in tackling climate change.",
    author: "John Smith",
    date: "2024-06-16",tag:"political"
  },
  {
    id: 3,
    title: "Government Announces New Economic Stimulus Plan",
    content:
      "In an effort to revitalize the economy, the government has announced a $500 billion economic stimulus plan. The package includes direct payments to citizens, tax breaks for small businesses, and increased funding for public infrastructure projects. The plan aims to boost consumer spending, create jobs, and stimulate growth, with widespread support from the business community.",
    author: "Sarah Johnson",
    date: "2024-06-15",tag:"political"
  },
  {
    id: 4,
    title: "Presidential Debate Highlights Key Issues",
    content:
      "The latest presidential debate brought to light key issues that will shape the upcoming election. Candidates discussed their positions on healthcare reform, tax policy, and national security. Tensions ran high as opposing sides clashed over their approaches, and the debate is expected to have a significant impact on voter opinions in the weeks leading up to the election.",
    author: "Michael Lee",
    date: "2024-06-14",tag:"political"
  },
  {
    id: 5,
    title: "Major Political Shakeup in Parliament",
    content:
      "A significant political shakeup has occurred in Parliament as several high-ranking officials resigned following an ongoing corruption investigation. The resignations have raised concerns about the integrity of the government and could lead to a reshuffling of key positions. The investigation is expected to continue as authorities seek to uncover the full extent of the alleged misconduct.",
    author: "Emily Davis",
    date: "2024-06-13",tag:"political"
  },
  {
    id: 6,
    title: "New Voting Laws Spark Controversy",
    content:
      "A set of new voting laws recently passed by Congress has sparked controversy across the country. Supporters argue that the laws are necessary to protect election integrity, while opponents claim they could disenfranchise vulnerable populations. Legal challenges are already underway, and the debate over voting rights is expected to intensify as the next election cycle approaches.",
    author: "Daniel Martinez",
    date: "2024-06-12",tag:"political"
  },
  {
    id: 7,
    title: "Supreme Court Rules on Key Free Speech Case",
    content:
      "In a landmark decision, the U.S. Supreme Court ruled in favor of upholding free speech protections. The case, which centered around the right to protest and express dissent, has major implications for future legal challenges involving free speech. While advocates for civil liberties celebrated the ruling, critics warn that it may embolden extremist groups.",
    author: "Laura Brown",
    date: "2024-06-11",tag:"political"
  },
  {
    id: 8,
    title: "Military Budget Sees Record Increase",
    content:
      "The national defense budget has seen a record increase of 10%, sparking a debate over the country's military spending priorities. Proponents argue that the increase is necessary to maintain national security in an increasingly volatile global environment, while critics contend that the funds should be redirected toward domestic issues like healthcare and education.",
    author: "Chris Wilson",
    date: "2024-06-10",tag:"political"
  },
  {
    id: 9,
    title: "Trade Talks Resume Between US and China",
    content:
      "After months of stalled negotiations, trade talks between the United States and China have resumed. Key issues on the table include tariffs, intellectual property protection, and access to Chinese markets for American companies. Both sides have expressed optimism that progress can be made, but disagreements remain on several critical points.",
    author: "Anna White",
    date: "2024-06-09",tag:"political"
  },
  {
    id: 10,
    title: "Local Elections See Record Turnout",
    content:
      "The local elections this year saw a record-breaking turnout, with over 75% of eligible voters participating. Many cities saw a wave of new candidates running on progressive platforms, focusing on issues such as affordable housing and climate action. Experts predict that this high level of engagement could signal a shift in political dynamics at the local level.",
    author: "Brian Harris",
    date: "2024-06-08",tag:"political"
  },
  {
    id: 11,
    title: "Prime Minister Visits Flood-Affected Regions",
    content:
      "In response to widespread flooding, the Prime Minister visited affected regions to assess the damage and announce emergency relief efforts. Thousands of people have been displaced by the floods, which have caused significant damage to infrastructure. The government has pledged millions in aid, and teams are working to restore essential services to the hardest-hit areas.",
    author: "Samantha Green",
    date: "2024-06-07",tag:"political"
  },
  {
    id: 12,
    title: "Anti-Corruption Bill Introduced in Congress",
    content:
      "A new anti-corruption bill has been introduced in Congress, aiming to increase transparency and accountability in government operations. The bill includes measures to address lobbying practices, campaign finance reform, and the use of government contracts. Proponents believe it will restore public trust, while critics argue that it doesn’t go far enough to address systemic issues.",
    author: "Kyle Moore",
    date: "2024-06-06",tag:"political"
  },
  {
    id: 13,
    title: "Tax Reforms to Benefit Small Businesses",
    content:
      "The government has proposed a set of tax reforms aimed at supporting small businesses. The reforms include tax cuts for startups, credits for businesses that hire new employees, and incentives for businesses investing in technology. Small business owners are hopeful that these measures will provide much-needed relief and stimulate growth in a challenging economic climate.",
    author: "Olivia Clark",
    date: "2024-06-05",tag:"political"
  },
  {
    id: 14,
    title: "Protests Erupt Over Pension Reforms",
    content:
      "Protests erupted across the country in response to proposed pension reforms that would raise the retirement age and reduce benefits for some workers. Demonstrators argue that the changes disproportionately affect lower-income and older citizens. The government has defended the reforms as necessary for the long-term sustainability of the pension system.",
    author: "James Lewis",
    date: "2024-06-04",tag:"political"
  },
  {
    id: 15,
    title: "President Announces Infrastructure Plan",
    content:
      "The President has unveiled a $2 trillion infrastructure plan, which includes funding for roads, bridges, and public transport systems. The plan aims to create jobs, stimulate economic growth, and modernize the country’s infrastructure to meet future demands. However, critics are concerned about the long-term fiscal impact and the feasibility of completing such ambitious projects.",
    author: "Rachel Adams",
    date: "2024-06-03",tag:"political"
  },
  {
    id: 16,
    title: "Foreign Policy Shift Sparks Debate",
    content:
      "The government has announced a major shift in foreign policy, pivoting towards strengthening alliances with Asian countries and reducing reliance on European partnerships. This shift has sparked debate among experts, with some praising the move as a necessary adaptation to a changing global landscape, while others warn that it could isolate traditional allies.",
    author: "Jacob King",
    date: "2024-06-02",tag:"political"
  },
  {
    id: 17,
    title: "State Budget Faces Opposition",
    content:
      "The newly proposed state budget has faced fierce opposition from minority parties, who argue that it cuts vital services in healthcare and education. Supporters of the budget claim that the cuts are necessary to address a growing deficit, but the debate over fiscal priorities is expected to continue in the coming weeks as lawmakers work toward a compromise.",
    author: "Sophia Allen",
    date: "2024-06-01",tag:"political"
  },
  {
    id: 18,
    title: "Election Watchdog Flags Irregularities",
    content:
      "An election watchdog has flagged several irregularities in recent local elections, including discrepancies in voter rolls and reports of polling station issues. While the electoral commission has downplayed these concerns, opposition parties are calling for an investigation into potential fraud. The findings could have significant implications for future election security.",
    author: "Nathan Scott",
    date: "2024-05-31",tag:"political"
  },
  {
    id: 19,
    title: "Immigration Policies Under Review",
    content:
      "The government has announced that it will review immigration policies to streamline processes and address backlogs. Proposed changes include simplifying visa applications, creating pathways for skilled workers, and offering more support for refugees. The review has sparked debates on how to balance national security concerns with the need for skilled labor in key industries.",
    author: "Grace Turner",
    date: "2024-05-30",tag:"political"
  },
  {
    id: 20,
    title: "New Political Alliance Announced",
    content:
      "Two major political parties have announced a new political alliance ahead of the upcoming election. The alliance aims to present a united front on key issues such as healthcare, education reform, and climate change. While some see this as a positive step toward bipartisan cooperation, others are skeptical of the long-term stability of the coalition.",
    author: "Ethan Perez",
    date: "2024-05-29",tag:"political"
  },
];

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
const container = document.querySelector(".main");
var limit = 3;
sportsNews.forEach((sportNews) => {
    if (limit > 0) {
        const div = document.createElement("div");
        div.setAttribute("class", "card")
        div.innerHTML = `
            <h3 class="title">${sportNews.title}<span class="tag">${sportNews.tag}</span></h3>
            <p class="body">
            ${sportNews.content.slice(0,60)}...<a href="./sports.html">read more</a>
            </p>
            <div class="footer">author: ${sportNews.author} date: ${sportNews.date}</div>
          `;
        container.appendChild(div);
        limit--;
    }
});

limit = 3;
politicalNews.forEach((news) => {
    if (limit > 0) {
        const div = document.createElement("div");
        div.setAttribute("class", "card")
        div.innerHTML = `
            <h3 class="title">${news.title}<span class="tag">${news.tag}</span></h3>
            <p class="body">
            ${news.content.slice(0,60)}... <a href="./political.html">read more</a>
            </p>
            <div class="footer">author: ${news.author} date: ${news.date}</div>
          `;
        container.appendChild(div);
        limit--;
    }
})
