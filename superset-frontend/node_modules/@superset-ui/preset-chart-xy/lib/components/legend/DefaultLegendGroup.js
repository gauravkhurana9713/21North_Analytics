"use strict";

exports.__esModule = true;
exports.default = DefaultLegendGroupRenderer;

var _react = _interopRequireDefault(require("react"));

var _DefaultLegendItem = _interopRequireDefault(require("./DefaultLegendItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LEGEND_GROUP_STYLE = {
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'row',
  flexGrow: 1,
  flexShrink: 1,
  flexWrap: 'wrap',
  fontSize: '0.8em',
  justifyContent: 'flex-end',
  padding: 8
};

function DefaultLegendGroupRenderer({
  group,
  ItemRenderer = _DefaultLegendItem.default,
  ItemMarkRenderer,
  ItemLabelRenderer,
  style
}) {
  const combinedStyle = typeof style === 'undefined' ? LEGEND_GROUP_STYLE : { ...LEGEND_GROUP_STYLE,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: combinedStyle
  }, 'items' in group && group.items.map(item => /*#__PURE__*/_react.default.createElement(ItemRenderer, {
    key: `legend-item-${group.field}-${item.input}`,
    group: group,
    item: item,
    MarkRenderer: ItemMarkRenderer,
    LabelRenderer: ItemLabelRenderer
  })));
}