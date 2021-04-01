import React from 'react';
import { isDefined, TooltipFrame, TooltipTable } from '@superset-ui/core';
export default function DefaultTooltipRenderer({
  datum,
  color,
  encoder
}) {
  const {
    label,
    min,
    max,
    median,
    firstQuartile,
    thirdQuartile,
    outliers
  } = datum;
  const {
    channels
  } = encoder;
  const {
    formatValue
  } = channels.y;
  const data = [];

  if (isDefined(min)) {
    data.push({
      key: 'Min',
      valueColumn: formatValue(min)
    });
  }

  if (isDefined(max)) {
    data.push({
      key: 'Max',
      valueColumn: formatValue(max)
    });
  }

  if (isDefined(median)) {
    data.push({
      key: 'Median',
      valueColumn: formatValue(median)
    });
  }

  if (isDefined(firstQuartile)) {
    data.push({
      key: '1st Quartile',
      valueColumn: formatValue(firstQuartile)
    });
  }

  if (isDefined(thirdQuartile)) {
    data.push({
      key: '3rd Quartile',
      valueColumn: formatValue(thirdQuartile)
    });
  }

  if (isDefined(outliers) && outliers.length > 0) {
    data.push({
      key: '# Outliers',
      valueColumn: outliers.length
    });
  }

  return /*#__PURE__*/React.createElement(TooltipFrame, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color
    }
  }, label)), data.length > 0 && /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(TooltipTable, {
    data: data
  }));
}