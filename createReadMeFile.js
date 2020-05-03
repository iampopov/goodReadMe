

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
        
    ## Contributing
    
    ${data.contributing}
    
    ## Tests
    
    To run tests, run the following command:
    
    \`\`\`
    ${data.test}
    \`\`\`
    
    ## Questions
    
    If you have any questions about the repo, open an issue or contact [${data.GH}](${data.url}) directly at ${data.email}.`;
  }
  
  module.exports = createReadMeFile;
  