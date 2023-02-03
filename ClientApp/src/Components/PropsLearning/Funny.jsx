import PropTypes from 'prop-types';

class Funny extends React.Component {
  render() {
    return (
      <h1>My name is {this.props.name}</h1>
    );
  }
}

//specify datatypes of props.
Funny.propTypes = {
  name: PropTypes.string
};

//initialize default value of props
Funny.defaultProps = {
  name: 'Kubo Nguyen*'
}

//React lifecycle.