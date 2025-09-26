const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "I am first child"),
  React.createElement("h1", { id: "child" }, " I am a second child"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
