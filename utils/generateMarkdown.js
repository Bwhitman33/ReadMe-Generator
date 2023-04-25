// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <br>
  ## Description
  ${data.description}
  <br>
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Languages Used](#languages)
  6. [Questions](#questions)
  <br>

  ## Installation
  See below for any of this project's dependencies - 
  ${data.installation}
  <br>

  ## Usage
  ${data.usage}
  <br>

  ## Contributing
  ${data.contributing}
  <br>

  ## Tests
  ${data.tests}
  <br>

  ## Languages Used
  ${data.languages}
  <br>

  ## Questions
  Any questions can be asked at ${data.email}. 
  <br> 
  The github repository for this project can be found at [${data.gitUser}](${data.gitRepo})
`;
}

module.exports = generateMarkdown;
