# Dashboard
UI backend dashboard, all commands from sandboxes execute from dashboard folder.
## Requirements
1) node.js v8.X.X
2) npm v6.X.X
## Installation guide
Preferred IDE - WebStorm, or any other JetBrains IDEA with plugins for ts, tslint, scss, editorconfig. 
```
// for fixing code *.ts, *.tsx files style from CLI
(OPTIONAL) npm i tslint typescript -g 
npm i
```
In IDEA enable typescript, tslint, editorconfig plugins for current project. It pick up configuration files and 
highlight problems.  
Optional, for better IDEA integration you could install additional types for express, chai, sinon, mocha, enzyme in Languages & Frameworks -> JavaScript -> Libraries
### Run project
```
// develop mode
npm run start:dev
```
### Tasks
- [X] Setup unit tests
- [ ] Setup integration tests with puppeteer
- [ ] Configure production js and css builds. Separate vendor and core scripts
- [ ] Select package for side effects thunk/saga
- [ ] Install express.js for server