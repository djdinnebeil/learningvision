class Tutorial {
  constructor(id, title, category, level, tags, url) {
    this.id = id; // Unique identifier
    this.title = title; // Tutorial title
    this.category = category; // Category (e.g., "Programming")
    this.level = level; // Difficulty level (e.g., "Beginner", "Intermediate")
    this.tags = tags; // Array of tags
    this.url = url; // URL to the tutorial content
  }

  // Optional: Method to check if the tutorial matches a keyword
  matchesKeyword(keyword) {
    const keywordLower = keyword.toLowerCase();
    return (
      this.title.toLowerCase().includes(keywordLower) ||
      this.tags.some(tag => tag.toLowerCase().includes(keywordLower))
    );
  }
}

class TutorialLibrary {
  constructor() {
    this.tutorials = []; // Array to store Tutorial instances
  }

  // Method to add a tutorial to the library
  addTutorial(tutorial) {
    if (tutorial instanceof Tutorial) {
      this.tutorials.push(tutorial);
    } else {
      throw new Error("Only instances of the Tutorial class can be added.");
    }
  }

  // Method to search tutorials by keyword and optional level
  search(keyword, level = null) {
    const keywordLower = keyword.toLowerCase();

    // Step 1: Search by keyword
    let results = this.tutorials.filter(tutorial =>
      tutorial.matchesKeyword(keywordLower)
    );

    // Step 2: Filter by level if provided
    if (level) {
      results = results.filter(tutorial => tutorial.level.toLowerCase() === level.toLowerCase());
    }

    return results;
  }
}

const library = new TutorialLibrary();

// Seed data
const seedData = [
  new Tutorial(
    1,
    'Introduction to JavaScript',
    'Programming',
    'Beginner',
    ['JavaScript', 'Programming', 'Variables', 'Functions'],
    'www.javascript.com/js'
  ),
  new Tutorial(
    2,
    'Advanced React Techniques',
    'Programming',
    'Advanced',
    ['React', 'Web Development', 'Hooks', 'Context API'],
    'www.js.com/24'
  ),
  new Tutorial(
    3,
    'CSS Grid Layout Basics',
    'Web Design',
    'Beginner',
    ['CSS', 'Web Design', 'Grid', 'Layout'],
    'www.cssgrid.com/basics'
  ),
  new Tutorial(
    4,
    'Mastering Flexbox',
    'Web Design',
    'Intermediate',
    ['CSS', 'Web Design', 'Flexbox', 'Responsive'],
    'www.flexboxguide.com'
  ),
  new Tutorial(
    5,
    'Node.js for Beginners',
    'Programming',
    'Beginner',
    ['Node.js', 'Backend', 'JavaScript', 'Programming'],
    'www.nodejs.org/start'
  ),
  new Tutorial(
    6,
    'Understanding Promises in JavaScript',
    'Programming',
    'Intermediate',
    ['JavaScript', 'Promises', 'Asynchronous'],
    'www.jsdocs.com/promises'
  ),
  new Tutorial(
    7,
    'Python for Data Science',
    'Data Science',
    'Beginner',
    ['Python', 'Data Science', 'Pandas', 'Numpy'],
    'www.datascience.com/python'
  ),
  new Tutorial(
    8,
    'Deep Dive into Python Functions',
    'Programming',
    'Advanced',
    ['Python', 'Functions', 'Programming'],
    'www.python.org/functions'
  ),
  new Tutorial(
    9,
    'Getting Started with SQL',
    'Databases',
    'Beginner',
    ['SQL', 'Databases', 'Queries'],
    'www.sqlstart.com'
  ),
  new Tutorial(
    10,
    'Advanced SQL Joins',
    'Databases',
    'Advanced',
    ['SQL', 'Databases', 'Joins', 'Optimization'],
    'www.sqladvanced.com/joins'
  ),
  new Tutorial(
    11,
    'Responsive Web Design Principles',
    'Web Design',
    'Beginner',
    ['Responsive Design', 'CSS', 'HTML'],
    'www.webdesign.com/responsive'
  ),
  new Tutorial(
    12,
    'Building REST APIs with Express',
    'Programming',
    'Intermediate',
    ['Express', 'Node.js', 'REST', 'APIs'],
    'www.expressapi.com/build'
  ),
  new Tutorial(
    13,
    'Git and GitHub Essentials',
    'Version Control',
    'Beginner',
    ['Git', 'GitHub', 'Version Control'],
    'www.github.com/essentials'
  ),
  new Tutorial(
    14,
    'Advanced Git Workflows',
    'Version Control',
    'Advanced',
    ['Git', 'Workflows', 'Collaboration'],
    'www.gitworkflows.com'
  ),
  new Tutorial(
    15,
    'JavaScript ES6 Features',
    'Programming',
    'Intermediate',
    ['JavaScript', 'ES6', 'Features'],
    'www.jsdocs.com/es6'
  ),
  new Tutorial(
    16,
    'Kubernetes Basics',
    'DevOps',
    'Beginner',
    ['Kubernetes', 'Containers', 'DevOps'],
    'www.k8sbasics.com'
  ),
  new Tutorial(
    17,
    'Docker for Beginners',
    'DevOps',
    'Beginner',
    ['Docker', 'Containers', 'DevOps'],
    'www.docker.com/beginners'
  ),
  new Tutorial(
    18,
    'Securing REST APIs',
    'Programming',
    'Advanced',
    ['APIs', 'Security', 'Authentication'],
    'www.restapisecurity.com'
  ),
  new Tutorial(
    19,
    'Introduction to Machine Learning',
    'Data Science',
    'Beginner',
    ['Machine Learning', 'Python', 'Data Science'],
    'www.mlbasics.com'
  ),
  new Tutorial(
    20,
    'React State Management with Redux',
    'Programming',
    'Intermediate',
    ['React', 'Redux', 'State Management'],
    'www.reactredux.com'
  ),
  new Tutorial(
    21,
    'CSS Animations',
    'Web Design',
    'Intermediate',
    ['CSS', 'Animations', 'Web Design'],
    'www.cssanimations.com'
  ),
  new Tutorial(
    22,
    'Web Accessibility Best Practices',
    'Web Design',
    'Beginner',
    ['Accessibility', 'Web Design', 'HTML'],
    'www.accessibilityweb.com'
  ),
  new Tutorial(
    23,
    'JavaScript Design Patterns',
    'Programming',
    'Advanced',
    ['JavaScript', 'Design Patterns', 'Programming'],
    'www.jsdesignpatterns.com'
  ),
  new Tutorial(
    24,
    'Testing in Python with pytest',
    'Programming',
    'Intermediate',
    ['Python', 'Testing', 'pytest'],
    'www.pytestguide.com'
  ),
  new Tutorial(
    25,
    'Building Web Applications with Django',
    'Programming',
    'Intermediate',
    ['Django', 'Web Development', 'Python'],
    'www.djangoweb.com'
  )
];

// Add seed data to library
seedData.forEach(tutorial => library.addTutorial(tutorial));

document.addEventListener('DOMContentLoaded', () => {
  const keywordInput = document.getElementById('keyword-search');
  const levelFilter = document.getElementById('level-filter');
  const resultsContainer = document.getElementById('results-container');
  const resultsSection = document.querySelector('.results-section');

  // Initially hide the results section
  resultsSection.style.display = 'none';

  // Function to display search results
  function displayResults(results) {
    resultsContainer.innerHTML = ''; // Clear previous results

    // Show or hide the results section based on results
    if (results.length === 0) {
      resultsSection.style.display = 'none';
      return;
    } else {
      resultsSection.style.display = 'block';
    }

    results.forEach(tutorial => {
      const tutorialCard = document.createElement('div');
      tutorialCard.className = 'tutorial-card';

      tutorialCard.innerHTML = `
        <h3>${tutorial.title}</h3>
        <p><strong>Category:</strong> ${tutorial.category}</p>
        <p><strong>Level:</strong> ${tutorial.level}</p>
        <p><strong>Tags:</strong> ${tutorial.tags.join(', ')}</p>
        <a href="${tutorial.url}" target="_blank">View Tutorial</a>
      `;

      resultsContainer.appendChild(tutorialCard);
    });
  }

  // Function to perform search
  function performSearch() {
    const keyword = keywordInput.value.trim();
    const level = levelFilter.value;

    // Perform search and display results
    const results = library.search(keyword, level);
    displayResults(results);
  }

  // Event listener for level dropdown
  levelFilter.addEventListener('change', performSearch);

  // Event listener for keyword input (optional: search on typing)
  keywordInput.addEventListener('input', performSearch);

  // Optional: Perform initial search to show all results
  // performSearch();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  const dropdownMenu = document.querySelector("#dropdown-menu");
  const logoutBtn = document.querySelector("#logout-btn");

  // Toggle dropdown menu visibility
  hamburgerIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  // Logout functionality
  logoutBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Close the dropdown menu
    dropdownMenu.classList.add("hidden");

    // Replace main content with logout message
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = `
      <div class="logout-message" style="text-align: center; margin: 50px;">
        <h2>You have logged out</h2>
        <p>Thank you for using LearningVision.</p>
      </div>
    `;
  });

  // Close dropdown when clicking outside the menu
  document.addEventListener("click", (event) => {
    if (!dropdownMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
