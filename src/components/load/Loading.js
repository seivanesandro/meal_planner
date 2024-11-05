import styled, {
    keyframes
} from 'styled-components';
import PropTypes from 'prop-types';

const Spinner = keyframes`
0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #434343, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba( 4, 4, 4, 94%), -1.8em -1.8em 0 0em rgba(34, 34, 34, 94%);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(34, 34, 34, 94%), 1.8em -1.8em 0 0em #434343, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba( 4, 4, 4, 94%);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba( 4, 4, 4, 94%), 1.8em -1.8em 0 0em rgba(34, 34, 34, 94%), 2.5em 0em 0 0em #434343, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba( 4, 4, 4, 94%), 2.5em 0em 0 0em rgba(34, 34, 34, 94%), 1.75em 1.75em 0 0em #434343, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba( 4, 4, 4, 94%), 1.75em 1.75em 0 0em rgba(34, 34, 34, 94%), 0em 2.5em 0 0em #434343, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba( 4, 4, 4, 94%), 0em 2.5em 0 0em rgba(34, 34, 34, 94%), -1.8em 1.8em 0 0em #434343, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba( 4, 4, 4, 94%), -1.8em 1.8em 0 0em rgba(34, 34, 34, 94%), -2.6em 0em 0 0em #434343, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba( 4, 4, 4, 94%), -2.6em 0em 0 0em rgba(34, 34, 34, 94%), -1.8em -1.8em 0 0em #434343;
  }
`;

const Loading = styled.div`
    font-size: ${({ fontSize }) => fontSize}rem;
    width: ${({ size }) => size}em;
    height: ${({ size }) => size}em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: ${Spinner}
        ${({ speedborder }) => speedborder}s
        infinite ease-out;
    transform: translateZ(0);
    z-index: 100;
`;

Loading.propTypes = {
    speedborder: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};

Loading.defaultProps = {
    speedborder: '0.7',
    fontSize: '1',
    size: '1'
};

export default Loading;
