import React from 'react';
import { TooltipFrame, TooltipTable } from '@superset-ui/core';
import { isFieldDef } from 'encodable';
export default function DefaultTooltipRenderer({
  datum,
  encoder
}) {
  const {
    channels
  } = encoder;
  const {
    x,
    y,
    size,
    fill,
    stroke
  } = channels;
  const tooltipRows = [{
    key: 'x',
    keyColumn: x.getTitle(),
    valueColumn: x.formatDatum(datum)
  }, {
    key: 'y',
    keyColumn: y.getTitle(),
    valueColumn: y.formatDatum(datum)
  }];

  if (isFieldDef(fill.definition)) {
    tooltipRows.push({
      key: 'fill',
      keyColumn: fill.getTitle(),
      valueColumn: fill.formatDatum(datum)
    });
  }

  if (isFieldDef(stroke.definition)) {
    tooltipRows.push({
      key: 'stroke',
      keyColumn: stroke.getTitle(),
      valueColumn: stroke.formatDatum(datum)
    });
  }

  if (isFieldDef(size.definition)) {
    tooltipRows.push({
      key: 'size',
      keyColumn: size.getTitle(),
      valueColumn: size.formatDatum(datum)
    });
  }

  channels.group.forEach(g => {
    tooltipRows.push({
      key: `${g.name}`,
      keyColumn: g.getTitle(),
      valueColumn: g.formatDatum(datum)
    });
  });
  channels.tooltip.forEach(g => {
    tooltipRows.push({
      key: `${g.name}`,
      keyColumn: g.getTitle(),
      valueColumn: g.formatDatum(datum)
    });
  });
  return /*#__PURE__*/React.createElement(TooltipFrame, null, /*#__PURE__*/React.createElement(TooltipTable, {
    data: tooltipRows
  }));
}