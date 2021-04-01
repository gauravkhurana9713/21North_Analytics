import React from 'react';
const MARK_WIDTH = 12;
const MARK_HEIGHT = 8;
const MARK_STYLE = {
  display: 'inline-block'
};
export default function DefaultLegendItemMarkRenderer({
  item
}) {
  var _item$output$stroke, _item$output$strokeWi, _item$output$strokeDa;

  return /*#__PURE__*/React.createElement("svg", {
    width: MARK_WIDTH,
    height: MARK_HEIGHT,
    style: MARK_STYLE
  }, /*#__PURE__*/React.createElement("line", {
    stroke: (_item$output$stroke = item.output.stroke) != null ? _item$output$stroke : 'none',
    strokeWidth: (_item$output$strokeWi = item.output.strokeWidth) != null ? _item$output$strokeWi : 2,
    strokeDasharray: (_item$output$strokeDa = item.output.strokeDasharray) != null ? _item$output$strokeDa : 'none',
    x1: 0,
    x2: MARK_WIDTH,
    y1: MARK_HEIGHT / 2,
    y2: MARK_HEIGHT / 2
  }));
}