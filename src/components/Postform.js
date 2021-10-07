import React, { Component } from 'react';

class PostForm extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      title: '',
      body: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <lable> Title: </lable>
            <br />
            <input
              type='text'
              name='title'
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <lable> Body: </lable>
            <br />
            <textarea
              type='body'
              name='body'
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
