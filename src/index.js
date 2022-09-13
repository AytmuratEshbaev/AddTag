import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }
  handleClick(e) {
    if (e.key === "Enter") {
      let tags = this.state.tags;
      tags.push(e.target.value)
      this.setState({
        tags: tags
      })
      e.target.value = "";
    }
  }
  removeTag(e) {
    let tags = this.state.tags;
    let val = e.target.textContent;
    tags = tags.filter(tag => tag !== val);
    e.target.closest('li').remove()
    this.setState({
      tags: tags
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <ul className='tag-list'>
          {this.state.tags.map((tag, index) =>
            <li key={index}>{tag} <span onClick={this.removeTag}>x</span></li>
          )}
        </ul>
        <input type="text" onKeyPress={this.handleClick} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Block />
  </React.StrictMode>
);

