function toggleDropdown(contentId) {
  const content = document.getElementById(contentId);

  // Close other dropdowns
  document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
    if (dropdown.id !== contentId) {
      dropdown.style.display = 'none';
    }
  });

  // Toggle the current dropdown
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
};


// Causes Data
document.addEventListener("DOMContentLoaded", () => {
  // Tab data for content population
  const tabData = {
    tab1: [
      {
        img: "eld.png",
        title: "iCareForElderly",
        text: `<span>iCareForElderly</span> provides  basic amenities, food, and loan offsetting for elders in the society.`,
        aim: "1.5M",
        status: "Ongoing",
        link: "https://dynaraise.com/elderly-care-ramadan-46",
      },
      {
        img: "feeds.png",
        title: "FEED A FASTING MUSLIM",
        text: "<span>FEED A FASTING MUSLIM</span> provides food for faithful Muslims fasting during the month of Ramadan.",
        aim: "NA",
        status: "Ended",
        link: "#",
      },
      {
        img: "feed-stud.png",
        title: "FEED A FASTING STUDENT II",
        text: "<span>FEED A FASTING STUDENT II</span> provides food for fasting Muslim students.",
        aim: "NA",
        status: "Ended",
        link: "#",
      },
      {
        img: "feed-stud.png",
        title: "FEED A FASTING STUDENT I",
        text: "<span>FEED A FASTING STUDENT I</span> provides food for fasting Muslim students.",
        aim: "NA",
        status: "Ended",
        link: "#",
      },
    ],
    tab2: [
      {
        img: "techie.png",
        title: "Nurture A Muslim Techie/Entrepreneur",
        text: "<span>Nurture A Muslim Techie</span> provides laptops, mentorship, and job placement for Muslims transitioning into tech/launching a startup.",
        aim: "NA",
        status: "Upcoming",
        link: "#",
      },
      {
        img: "widow.png",
        title: "Empower A Widow",
        text: "<span>Empower A Widow</span> provides basic amenities and business programs for widows.",
        aim: "NA",
        status: "Upcoming",
        link: "#",
      },
      {
        img: "orphan.png",
        title: "Educate An Orphan",
        text: "<span>Educate An Orphan</span> provides vital educational support to orphaned children such as school fees and hostel accommodations, empowering them to reach their full potential.",
        aim: "NA",
        status: "Upcoming",
        link: "#",
      },
    ],
  };

  // Populate tab content dynamically
  const populateTabContent = (tabId, data) => {
    const tabContentElement = document.getElementById(tabId);
    tabContentElement.innerHTML = data
      .map(
        (card) => `
      <div class="box">
        <img src="${card.img}" alt="${card.title}">
        <h3>${card.title}</h3>
        <p class="p5">${card.text}</p>
        <div class="box-flex">
          <div class="flex1">
            <p>Aim: <span>${card.aim}</span></p>
            <p>Status: ${card.status}</p>
          </div>
          <div class="flex2">
            <a href="${card.link}" class="btnd" target="_blank">Donate to Cause</a>
          </div>
        </div>
      </div>`
      )
      .join("");
  };

  // Initial population of tab content
  populateTabContent("tab1", tabData.tab1);
  populateTabContent("tab2", tabData.tab2);

  // Hide all tabs except tab1 by default
  const setInitialTab = () => {
    document.getElementById("tab1").classList.add("active");
    document.getElementById("tab2").classList.remove("active");
  };

  setInitialTab(); // Ensure only tab1 is displayed initially

  // Tab switching logic
  document.getElementById("tab1-btn").addEventListener("click", () => {
    document.getElementById("tab1").classList.add("active");
    document.getElementById("tab2").classList.remove("active");
  });

  document.getElementById("tab2-btn").addEventListener("click", () => {
    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab2").classList.add("active");
  });
});


/*const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 90)
});


let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlinks.classList.toggle('open');
} 
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlinks.classList.remove('open')
};
*/
