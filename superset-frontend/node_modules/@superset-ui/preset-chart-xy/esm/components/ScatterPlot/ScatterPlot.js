import _pt from "prop-types";
import React, { PureComponent } from 'react';
import { XYChart, PointSeries } from '@data-ui/xy-chart';
import { chartTheme } from '@data-ui/theme';
import { WithLegend } from '@superset-ui/core';
import { isFieldDef } from 'encodable';
import { scatterPlotEncoderFactory } from './Encoder';
import createMarginSelector, { DEFAULT_MARGIN } from '../../utils/createMarginSelector';
import DefaultTooltipRenderer from './DefaultTooltipRenderer';
import convertScaleToDataUIScale from '../../utils/convertScaleToDataUIScaleShape';
import createXYChartLayoutWithTheme from '../../utils/createXYChartLayoutWithTheme';
import createRenderLegend from '../legend/createRenderLegend';
const defaultProps = {
  className: '',
  margin: DEFAULT_MARGIN,
  encoding: {},
  theme: chartTheme,
  TooltipRenderer: DefaultTooltipRenderer
};
export default class ScatterPlot extends PureComponent {
  constructor(...args) {
    super(...args);
    this.createEncoder = scatterPlotEncoderFactory.createSelector();
    this.createMargin = createMarginSelector();

    this.renderChart = dim => {
      const {
        width,
        height
      } = dim;
      const {
        data,
        margin,
        theme,
        TooltipRenderer,
        encoding
      } = this.props;
      const encoder = this.createEncoder(encoding);
      const {
        channels
      } = encoder;
      encoder.setDomainFromDataset(data);
      const encodedData = data.map(d => ({
        x: channels.x.getValueFromDatum(d),
        y: channels.y.getValueFromDatum(d),
        ...d
      }));
      const layout = createXYChartLayoutWithTheme({
        width,
        height,
        margin: this.createMargin(margin),
        theme,
        xEncoder: channels.x,
        yEncoder: channels.y
      });
      return layout.renderChartWithFrame(chartDim => /*#__PURE__*/React.createElement(XYChart, {
        showYGrid: true,
        width: chartDim.width,
        height: chartDim.height,
        ariaLabel: "ScatterPlot",
        margin: layout.margin,
        renderTooltip: ({
          datum
        }) => /*#__PURE__*/React.createElement(TooltipRenderer, {
          datum: datum,
          encoder: encoder
        }),
        theme: theme // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ,
        xScale: convertScaleToDataUIScale(channels.x.definition.scale) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ,
        yScale: convertScaleToDataUIScale(channels.y.definition.scale)
      }, layout.renderXAxis(), layout.renderYAxis(), /*#__PURE__*/React.createElement(PointSeries, {
        key: isFieldDef(channels.x.definition) ? channels.x.definition.field : '',
        data: encodedData,
        fill: d => channels.fill.encodeDatum(d),
        fillOpacity: 0.5,
        stroke: d => channels.stroke.encodeDatum(d),
        size: d => channels.size.encodeDatum(d)
      })));
    };
  }

  render() {
    const {
      className,
      data,
      width,
      height,
      encoding
    } = this.props;
    return /*#__PURE__*/React.createElement(WithLegend, {
      className: `superset-chart-scatter-plot ${className}`,
      width: width,
      height: height,
      position: "top",
      renderLegend: createRenderLegend(this.createEncoder(encoding), data, this.props),
      renderChart: this.renderChart
    });
  }

}
ScatterPlot.propTypes = {
  className: _pt.string,
  width: _pt.oneOfType([_pt.string, _pt.number]).isRequired,
  height: _pt.oneOfType([_pt.string, _pt.number]).isRequired,
  TooltipRenderer: _pt.elementType
};
ScatterPlot.defaultProps = defaultProps;