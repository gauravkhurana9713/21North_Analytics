import React, { PureComponent } from 'react';
import DefaultLegendGroup from './DefaultLegendGroup';
const LEGEND_CONTAINER_STYLE = {
  display: 'flex',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  maxHeight: 100,
  overflowY: 'auto',
  position: 'relative'
};
export default class DefaultLegend extends PureComponent {
  render() {
    const {
      groups,
      LegendGroupRenderer = DefaultLegendGroup,
      LegendItemRenderer,
      LegendItemMarkRenderer,
      LegendItemLabelRenderer,
      style
    } = this.props;
    const combinedStyle = typeof style === 'undefined' ? LEGEND_CONTAINER_STYLE : { ...LEGEND_CONTAINER_STYLE,
      ...style
    };
    return /*#__PURE__*/React.createElement("div", {
      style: combinedStyle
    }, groups.filter(group => 'items' in group && group.items.length > 0).map(group => /*#__PURE__*/React.createElement(LegendGroupRenderer, {
      key: group.field,
      group: group,
      ItemRenderer: LegendItemRenderer,
      ItemMarkRenderer: LegendItemMarkRenderer,
      ItemLabelRenderer: LegendItemLabelRenderer
    })));
  }

}