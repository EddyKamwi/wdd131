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
    date: "2024-06-16",
    tag: "political",
  },
  {
    id: 3,
    title: "Government Announces New Economic Stimulus Plan",
    content:
      "In an effort to revitalize the economy, the government has announced a $500 billion economic stimulus plan. The package includes direct payments to citizens, tax breaks for small businesses, and increased funding for public infrastructure projects. The plan aims to boost consumer spending, create jobs, and stimulate growth, with widespread support from the business community.",
    author: "Sarah Johnson",
    date: "2024-06-15",
    tag: "political",
  },
  {
    id: 4,
    title: "Presidential Debate Highlights Key Issues",
    content:
      "The latest presidential debate brought to light key issues that will shape the upcoming election. Candidates discussed their positions on healthcare reform, tax policy, and national security. Tensions ran high as opposing sides clashed over their approaches, and the debate is expected to have a significant impact on voter opinions in the weeks leading up to the election.",
    author: "Michael Lee",
    date: "2024-06-14",
    tag: "political",
  },
  {
    id: 5,
    title: "Major Political Shakeup in Parliament",
    content:
      "A significant political shakeup has occurred in Parliament as several high-ranking officials resigned following an ongoing corruption investigation. The resignations have raised concerns about the integrity of the government and could lead to a reshuffling of key positions. The investigation is expected to continue as authorities seek to uncover the full extent of the alleged misconduct.",
    author: "Emily Davis",
    date: "2024-06-13",
    tag: "political",
  },
  {
    id: 6,
    title: "New Voting Laws Spark Controversy",
    content:
      "A set of new voting laws recently passed by Congress has sparked controversy across the country. Supporters argue that the laws are necessary to protect election integrity, while opponents claim they could disenfranchise vulnerable populations. Legal challenges are already underway, and the debate over voting rights is expected to intensify as the next election cycle approaches.",
    author: "Daniel Martinez",
    date: "2024-06-12",
    tag: "political",
  },
  {
    id: 7,
    title: "Supreme Court Rules on Key Free Speech Case",
    content:
      "In a landmark decision, the U.S. Supreme Court ruled in favor of upholding free speech protections. The case, which centered around the right to protest and express dissent, has major implications for future legal challenges involving free speech. While advocates for civil liberties celebrated the ruling, critics warn that it may embolden extremist groups.",
    author: "Laura Brown",
    date: "2024-06-11",
    tag: "political",
  },
  {
    id: 8,
    title: "Military Budget Sees Record Increase",
    content:
      "The national defense budget has seen a record increase of 10%, sparking a debate over the country's military spending priorities. Proponents argue that the increase is necessary to maintain national security in an increasingly volatile global environment, while critics contend that the funds should be redirected toward domestic issues like healthcare and education.",
    author: "Chris Wilson",
    date: "2024-06-10",
    tag: "political",
  },
  {
    id: 9,
    title: "Trade Talks Resume Between US and China",
    content:
      "After months of stalled negotiations, trade talks between the United States and China have resumed. Key issues on the table include tariffs, intellectual property protection, and access to Chinese markets for American companies. Both sides have expressed optimism that progress can be made, but disagreements remain on several critical points.",
    author: "Anna White",
    date: "2024-06-09",
    tag: "political",
  },
  {
    id: 10,
    title: "Local Elections See Record Turnout",
    content:
      "The local elections this year saw a record-breaking turnout, with over 75% of eligible voters participating. Many cities saw a wave of new candidates running on progressive platforms, focusing on issues such as affordable housing and climate action. Experts predict that this high level of engagement could signal a shift in political dynamics at the local level.",
    author: "Brian Harris",
    date: "2024-06-08",
    tag: "political",
  },
  {
    id: 11,
    title: "Prime Minister Visits Flood-Affected Regions",
    content:
      "In response to widespread flooding, the Prime Minister visited affected regions to assess the damage and announce emergency relief efforts. Thousands of people have been displaced by the floods, which have caused significant damage to infrastructure. The government has pledged millions in aid, and teams are working to restore essential services to the hardest-hit areas.",
    author: "Samantha Green",
    date: "2024-06-07",
    tag: "political",
  },
  {
    id: 12,
    title: "Anti-Corruption Bill Introduced in Congress",
    content:
      "A new anti-corruption bill has been introduced in Congress, aiming to increase transparency and accountability in government operations. The bill includes measures to address lobbying practices, campaign finance reform, and the use of government contracts. Proponents believe it will restore public trust, while critics argue that it doesn’t go far enough to address systemic issues.",
    author: "Kyle Moore",
    date: "2024-06-06",
    tag: "political",
  },
  {
    id: 13,
    title: "Tax Reforms to Benefit Small Businesses",
    content:
      "The government has proposed a set of tax reforms aimed at supporting small businesses. The reforms include tax cuts for startups, credits for businesses that hire new employees, and incentives for businesses investing in technology. Small business owners are hopeful that these measures will provide much-needed relief and stimulate growth in a challenging economic climate.",
    author: "Olivia Clark",
    date: "2024-06-05",
    tag: "political",
  },
  {
    id: 14,
    title: "Protests Erupt Over Pension Reforms",
    content:
      "Protests erupted across the country in response to proposed pension reforms that would raise the retirement age and reduce benefits for some workers. Demonstrators argue that the changes disproportionately affect lower-income and older citizens. The government has defended the reforms as necessary for the long-term sustainability of the pension system.",
    author: "James Lewis",
    date: "2024-06-04",
    tag: "political",
  },
  {
    id: 15,
    title: "President Announces Infrastructure Plan",
    content:
      "The President has unveiled a $2 trillion infrastructure plan, which includes funding for roads, bridges, and public transport systems. The plan aims to create jobs, stimulate economic growth, and modernize the country’s infrastructure to meet future demands. However, critics are concerned about the long-term fiscal impact and the feasibility of completing such ambitious projects.",
    author: "Rachel Adams",
    date: "2024-06-03",
    tag: "political",
  },
  {
    id: 16,
    title: "Foreign Policy Shift Sparks Debate",
    content:
      "The government has announced a major shift in foreign policy, pivoting towards strengthening alliances with Asian countries and reducing reliance on European partnerships. This shift has sparked debate among experts, with some praising the move as a necessary adaptation to a changing global landscape, while others warn that it could isolate traditional allies.",
    author: "Jacob King",
    date: "2024-06-02",
    tag: "political",
  },
  {
    id: 17,
    title: "State Budget Faces Opposition",
    content:
      "The newly proposed state budget has faced fierce opposition from minority parties, who argue that it cuts vital services in healthcare and education. Supporters of the budget claim that the cuts are necessary to address a growing deficit, but the debate over fiscal priorities is expected to continue in the coming weeks as lawmakers work toward a compromise.",
    author: "Sophia Allen",
    date: "2024-06-01",
    tag: "political",
  },
  {
    id: 18,
    title: "Election Watchdog Flags Irregularities",
    content:
      "An election watchdog has flagged several irregularities in recent local elections, including discrepancies in voter rolls and reports of polling station issues. While the electoral commission has downplayed these concerns, opposition parties are calling for an investigation into potential fraud. The findings could have significant implications for future election security.",
    author: "Nathan Scott",
    date: "2024-05-31",
    tag: "political",
  },
  {
    id: 19,
    title: "Immigration Policies Under Review",
    content:
      "The government has announced that it will review immigration policies to streamline processes and address backlogs. Proposed changes include simplifying visa applications, creating pathways for skilled workers, and offering more support for refugees. The review has sparked debates on how to balance national security concerns with the need for skilled labor in key industries.",
    author: "Grace Turner",
    date: "2024-05-30",
    tag: "political",
  },
  {
    id: 20,
    title: "New Political Alliance Announced",
    content:
      "Two major political parties have announced a new political alliance ahead of the upcoming election. The alliance aims to present a united front on key issues such as healthcare, education reform, and climate change. While some see this as a positive step toward bipartisan cooperation, others are skeptical of the long-term stability of the coalition.",
    author: "Ethan Perez",
    date: "2024-05-29",
    tag: "political",
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
politicalNews.forEach((news) => {
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
    container.appendChild(div);
    limit--;
  }
})

document.querySelector("button").addEventListener("submit", () => alert("Thank you for subscriping with us."))