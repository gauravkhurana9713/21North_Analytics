import _pt from "prop-types";
import React from 'react';
import { BoxPlotSeries, XYChart } from '@data-ui/xy-chart';
import { chartTheme } from '@data-ui/theme';
import { WithLegend } from '@superset-ui/core';
import { isFieldDef } from 'encodable';
import DefaultTooltipRenderer from './DefaultTooltipRenderer';
import { boxPlotEncoderFactory } from './Encoder';
import createMarginSelector, { DEFAULT_MARGIN } from '../../utils/createMarginSelector';
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
export default class BoxPlot extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.createEncoder = boxPlotEncoderFactory.createSelector();
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
      const isHorizontal = isFieldDef(channels.y.definition) && channels.y.definition.type === 'nominal';
      encoder.setDomainFromDataset(data);
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
        ariaLabel: "BoxPlot",
        margin: layout.margin,
        renderTooltip: ({
          datum,
          color
        }) => /*#__PURE__*/React.createElement(TooltipRenderer, {
          datum: datum,
          color: color,
          encoder: encoder
        }),
        theme: theme // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ,
        xScale: convertScaleToDataUIScale(channels.x.definition.scale) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ,
        yScale: convertScaleToDataUIScale(channels.y.definition.scale)
      }, layout.renderXAxis(), layout.renderYAxis(), /*#__PURE__*/React.createElement(BoxPlotSeries, {
        key: isFieldDef(channels.x.definition) ? channels.x.definition.field : '',
        animated: true,
        data: isHorizontal ? data.map(row => ({ ...row,
          y: channels.y.getValueFromDatum(row)
        })) : data.map(row => ({ ...row,
          x: channels.x.getValueFromDatum(row)
        })),
        fill: datum => channels.color.encodeDatum(datum, '#55acee'),
        fillOpacity: 0.4,
        stroke: datum => channels.color.encodeDatum(datum),
        strokeWidth: 1,
        widthRatio: 0.6,
        horizontal: isHorizontal
      })));
    };
  }

  render() {
    const {
      className,
      data,
      encoding,
      width,
      height
    } = this.props;
    return /*#__PURE__*/React.createElement(WithLegend, {
      className: `superset-chart-box-plot ${className}`,
      width: width,
      height: height,
      position: "top",
      renderLegend: createRenderLegend(this.createEncoder(encoding), data, this.props),
      renderChart: this.renderChart
    });
  }

}
BoxPlot.propTypes = {
  className: _pt.string,
  width: _pt.oneOfType([_pt.string, _pt.number]).isRequired,
  height: _pt.oneOfType([_pt.string, _pt.number]).isRequired,
  TooltipRenderer: _pt.elementType
};
BoxPlot.defaultProps = defaultProps;