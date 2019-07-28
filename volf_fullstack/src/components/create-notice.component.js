import React, {Component} from 'react';

export default class CreateNotice extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeArticle = this.onChangeArticle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      article: '',
      author: '',
      notices: [],
    };
  }

  componentDidMount() {
    this.setState({
      notices: ['test notice'],
      title: 'test title',
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeArticle(e) {
    this.setState({
      article: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const notice = {
      title: this.state.title,
      article: this.state.article,
      author: this.state.author,
    };
    console.log(notice);

    window.location = '/';
  }
  render() {
    return (
      <div>
        <h3>Create New Notice Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <select
              ref="titleInput"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}>
              {this.state.notices.map(function(title) {
                return (
                  <option key={title} value={title}>
                    {title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Article: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.article}
              onChange={this.onChangeArticle}
            />
          </div>
          <div className="form-group">
            <label>Author : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Notice Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
