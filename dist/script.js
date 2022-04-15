const clips = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



function App() {
  const [volume, setVolume] = React.useState(0.5);
  const [display, setDisplay] = React.useState("");

  const playRecording = () => {
    let index = 0;
    let recordArray = display.split(" ");
    const interval = setInterval(() => {
      const audio = document.getElementById(recordArray[index]);
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      index++;
    }, 400);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("h1", null, "Drum Machine"),
    clips.map((clip) => /*#__PURE__*/
    React.createElement(Pad, {
      key: clip.id,
      clip: clip,
      volume: volume,
      setDisplay: setDisplay })), /*#__PURE__*/


    React.createElement("h1", null, display)), /*#__PURE__*/

    React.createElement("div", { className: "record" },
    display && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("button", { className: "btn play", onClick: playRecording }, "Play"), /*#__PURE__*/


    React.createElement("button", { className: "btn clear", onClick: () => setDisplay("") }, "Clear"))), /*#__PURE__*/





    React.createElement("input", {
      type: "range",
      step: "0.01",
      value: volume,
      max: "1",
      min: "0",
      onChange: e => setVolume(e.target.value),
      className: "vol form-range" }), /*#__PURE__*/

    React.createElement("p", null, "Volume: ", Math.round(volume * 100))));


}

function Pad({ clip, volume, setDisplay }) {
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = e => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audio = document.getElementById(clip.keyTrigger);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
    setDisplay(prev => prev + clip.keyTrigger + " ");
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "btn btn-secondary drum-pad", onClick: playSound }, /*#__PURE__*/
    React.createElement("audio", { id: clip.keyTrigger, src: clip.url, className: "clip" }),
    clip.keyTrigger));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));