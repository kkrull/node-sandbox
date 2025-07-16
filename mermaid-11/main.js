const graphDefinition = `
  graph LR
    A[Start] --> B(Process );
    B --> C{Condition};
    C -- Yes --> D[Result 1];
    C -- No --> E[Result 2];
`;

const mermaid = require('mermaid');
mermaid.default.render('graphDiv', graphDefinition).then((svgCode) => {
  console.log(svgCode);
});
