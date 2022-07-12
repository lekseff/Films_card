import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Star from './Star';

function Stars(props) {
  const {count} = props;
  if (count <= 0 || count > 5) return;

  const stars =  [];
  for(let i = 1; i <= count; i++) {
    stars.push(<Star key={v4()}/>)
  }

  return (
    <ul className="card__rating">
      {stars}
    </ul>
  )
}

export default Stars

Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  const: PropTypes.number
}