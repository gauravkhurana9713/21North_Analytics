import React from 'react';
import { TooltipFrame, TooltipTable } from '@superset-ui/core';
import { chartTheme } from '@data-ui/theme';
const MARK_STYLE = {
  marginRight: 4
};
export default function DefaultTooltipRenderer({
  allSeries,
  datum,
  encoder,
  series = {},
  theme = chartTheme
}) {
  return /*#__PURE__*/React.createElement(TooltipFrame, null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: theme.labelStyles.fontFamily
    }
  }, /*#__PURE__*/React.createElement("strong", null, encoder.channels.x.formatValue(datum.x))), /*#__PURE__*/React.createElement("br", null), series && /*#__PURE__*/React.createElement(TooltipTable, {
    data: allSeries.filter(({
      key
    }) => series[key]).concat().sort((a, b) => series[b.key].y - series[a.key].y).map(({
      key,
      stroke,
      strokeDasharray,
      strokeWidth
    }) => ({
      key,
      keyColumn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
        width: "12",
        height: "8",
        style: MARK_STYLE
      }, /*#__PURE__*/React.createElement("line", {
        x2: "12",
        y1: "3",
        y2: "3",
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray
      })), series[key] === datum ? /*#__PURE__*/React.createElement("b", null, key) : key),
      valueColumn: encoder.channels.y.formatValue(series[key].y)
    }))
  })));
}