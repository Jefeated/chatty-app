import React from 'react';

class Chatbar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     Chatbar: this.props.initialText
  //   };
  // }
  // handleButtonClick() {
  //   this.setState({
  //     Chatbar: this.props.replacementText
  //   });
  // }
  render() {
  return (
    <footer class="chatbar">
      <input class="chatbar-username" placeholder="Your Name (Optional)" />
      <input class="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
  )}
}

export default Chatbar;