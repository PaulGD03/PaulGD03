const fs = require('fs');
const path = require('path');

// Your birthdate
const birthdate = new Date('2003-06-21');

// Function to calculate age
function getAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

// Generate the new README content
const readmeContent = `# About Me

I am currently ${getAge(birthdate)} years old. I am a Mechatronics Student (B.Eng.) and the lead for mechatronics at TheContrappostoShop, and part of the leadership of the Open Resin Alliance. I am a huge open-source advocate and have been involved with 3D printing since 2018.

## Proficient in
- Flutter
- Dart
- C
- Java
- C#
- C++
- JavaScript

## Connect with Me
- **Twitter**: [Paul_GD03](https://twitter.com/Paul_GD03)
- **Discord**: [@paulgd](https://discord.com/)
- **Email**: [paul@openresin.org](mailto:paul@openresin.org)

## GitHub Stats
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=PaulGD03&theme=dark&hide_border=true&include_all_commits=true&count_private=true)
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=PaulGD03&theme=dark&hide_border=true)

## Support Me
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/paul_gd)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
`;

// Write the new README content to the README.md file
fs.writeFileSync(path.join(__dirname, 'README.md'), readmeContent);
