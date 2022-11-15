import React from 'react';
import PropTypes from 'prop-types';
import Chair from '../chair/Chair';

function BuyingSchemeLegend(props) {
  const { hall } = props;
  const { standardPrice, vipPrice } = hall;

  return (
    <div className="buying-scheme__legend">
      <div className="col">
        <p className="buying-scheme__legend-price">
          <Chair type="s" />
          {' '}
          Свободно
          (
          <span className="buying-scheme__legend-value">{standardPrice}</span>
          руб)
        </p>
        <p className="buying-scheme__legend-price">
          <Chair type="v" />
          {' '}
          Свободно VIP
          (
          <span className="buying-scheme__legend-value">{vipPrice}</span>
          руб)
        </p>
      </div>
      <div className="col">
        <p className="buying-scheme__legend-price">
          <Chair type="t" />
          {' '}
          Занято
        </p>
        <p className="buying-scheme__legend-price">
          <Chair type="sl" />
          {' '}
          Выбрано
        </p>
      </div>
    </div>
  );
}

BuyingSchemeLegend.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  hall: PropTypes.object.isRequired,
};

export default BuyingSchemeLegend;
