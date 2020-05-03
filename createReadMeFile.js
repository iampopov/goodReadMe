
function getLicense(license, color) {
    if (license !== 'None') {
        return `
    ## License

    License is ${license} standard license.`
    } else {
        return ``
    }
}


function createReadMeFile(data) {
    return `## Description

    ${data.description}
    
    ## Table of Contents 
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contributing](#contributing)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    ## Installation
    
    To install necessary dependencies, run the following command:
    
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    
    ${data.usage}

    ${getLicense(data.license, data.color)}
        
    ## Contributing
    
    ${data.contributing}
    
    ## Tests
    
    To run tests, run the following command:
    
    \`\`\`
    ${data.test}
    \`\`\`
    
    ## Questions
    
    If you have any questions about the repo, open an issue or contact [${data.GH}](${data.URL}) directly at ${data.email}.`;
  }
  
  module.exports = createReadMeFile;
  