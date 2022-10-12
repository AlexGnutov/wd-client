import PropTypes from "prop-types";

function Chair(props) {
    const { type, onClick } = props;

    const string = function (type) {
        switch (type) {
            case 'd':
                return 'disabled';
            case 's':
                return 'standart';
            case 't':
                return 'taken';
            case 'v':
                return 'vip';
            case 'sl':
                return 'selected';
            default:
                return null;
        }
    }(type);

    return (
        <span
            onClick={onClick}
            className={`buying-scheme__chair buying-scheme__chair_${string}`}
        ></span>
    )
}

Chair.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
}

export default Chair;