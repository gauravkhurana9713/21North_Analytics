import React from 'react';
import DefaultLegendItem from './DefaultLegendItem';
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
export default function DefaultLegendGroupRenderer({
  group,
  ItemRenderer = DefaultLegendItem,
  ItemMarkRenderer,
  ItemLabelRenderer,
  style
}) {
  const combinedStyle = typeof style === 'undefined' ? LEGEND_GROUP_STYLE : { ...LEGEND_GROUP_STYLE,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: combinedStyle
  }, 'items' in group && group.items.map(item => /*#__PURE__*/React.createElement(ItemRenderer, {
    key: `legend-item-${group.field}-${item.input}`,
    group: group,
    item: item,
    MarkRenderer: ItemMarkRenderer,
    LabelRenderer: ItemLabelRenderer
  })));
}