import React from 'react';

class CreatePlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      userId: this.props.userId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearPlaylistErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postPlaylist(this.state).then(() => this.props.onClose());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul className='playlist-errors'>
        {errors.map((error, i) => (
          <li className='' key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div
        className={`modal ${this.props.show ? 'show' : ''}`}
        onClick={this.props.onClose}
      >
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <label className='session-label'>
            Ввести название
            <br />
            <input
              type='text'
              placeholder='Название'
              value={this.state.title}
              onChange={this.update('title')}
              className='session-input-text'
            />
          </label>
          <br />
          <button
            onClick={this.handleSubmit}
            className='session-form-btn cyan-btn'
          >
            Создать плейлист
          </button>
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}

export default CreatePlaylistModal;
