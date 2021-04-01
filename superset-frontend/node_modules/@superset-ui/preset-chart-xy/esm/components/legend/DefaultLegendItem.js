import React from 'react';
import { LegendItem, LegendLabel } from '@vx/legend';
const MARK_SIZE = 8;
const MARK_STYLE = {
  display: 'inline-block'
};
export default function DefaultLegendItem({
  group,
  item,
  MarkRenderer,
  LabelRenderer
}) {
  var _ref, _ref2, _item$output$color, _item$output$stroke;

  return /*#__PURE__*/React.createElement(LegendItem, {
    key: `legend-item-${group.field}-${item.input}`,
    margin: "0 5px"
  }, typeof MarkRenderer === 'undefined' ? /*#__PURE__*/React.createElement("svg", {
    width: MARK_SIZE,
    height: MARK_SIZE,
    style: MARK_STYLE
  }, /*#__PURE__*/React.createElement("circle", {
    fill: // @ts-ignore
    (_ref = (_ref2 = (_item$output$color = item.output.color) != null ? _item$output$color : // @ts-ignore
    item.output.fill) != null ? _ref2 : // @ts-ignore
    item.output.stroke) != null ? _ref : '#ccc',
    stroke: // @ts-ignore
    (_item$output$stroke = item.output.stroke) != null ? _item$output$stroke : 'none',
    r: MARK_SIZE / 2,
    cx: MARK_SIZE / 2,
    cy: MARK_SIZE / 2
  })) : /*#__PURE__*/React.createElement(MarkRenderer, {
    group: group,
    item: item
  }), typeof LabelRenderer === 'undefined' ? /*#__PURE__*/React.createElement(LegendLabel, {
    align: "left",
    margin: "0 0 0 4px"
  }, item.input) : /*#__PURE__*/React.createElement(LabelRenderer, {
    group: group,
    item: item
  }));
}