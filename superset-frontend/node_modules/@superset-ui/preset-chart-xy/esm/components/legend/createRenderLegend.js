import React from 'react';
import DefaultLegend from './DefaultLegend';
export default function createRenderLegend(encoder, data, props) {
  if (encoder.hasLegend()) {
    const {
      LegendRenderer = DefaultLegend,
      LegendGroupRenderer,
      LegendItemRenderer,
      LegendItemLabelRenderer,
      LegendItemMarkRenderer
    } = props;
    return () => /*#__PURE__*/React.createElement(LegendRenderer, {
      groups: encoder.getLegendInformation(data),
      LegendGroupRenderer: LegendGroupRenderer,
      LegendItemRenderer: LegendItemRenderer,
      LegendItemMarkRenderer: LegendItemMarkRenderer,
      LegendItemLabelRenderer: LegendItemLabelRenderer
    });
  }

  return undefined;
}