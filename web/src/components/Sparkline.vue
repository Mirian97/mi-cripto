<template>
  <h5 class="text-subtitle-1 font-weight-bold text-center">Gráfico de las últimas 24 horas</h5>
  <svg :id="id" viewBox="0 0 200 40">
    <path d="M 0 20 H 200" fill="none" stroke-width="2" :stroke="color" />
  </svg>
  <div class="d-flex justify-space-between">
    <span class="text-caption">Hace 24 horas</span>
    <span class="text-caption">Ahora</span>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { nanoid } from 'nanoid'

export default {
  name: 'Sparkline',
  props: {
    data: {
      type: Array,
      default() {
        return [0, 0]
      }
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      id: `chart-${nanoid()}`
    }
  },
  watch: {
    data() {
      this.plot()
    }
  },
  methods: {
    plot() {
      this.x.domain([0, this.data.length - 1])
      this.y.domain(d3.extent(this.data))
      this.chart.select('path').attr('d', this.line(this.data))
    }
  },
  mounted() {
    this.chart = d3.select(`#${this.id}`)
    this.x = d3.scaleLinear().range([0, 200])
    this.y = d3.scaleLinear().range([40, 0])
    this.line = d3
      .line()
      .x((d, i) => this.x(i))
      .y((d) => this.y(d))
    this.x.domain([0, this.data.length - 1])
    this.y.domain(d3.extent(this.data))
    this.chart
      .selectAll('.grid-line')
      .data(this.data)
      .enter()
      .append('line')
      .attr('class', 'grid-line')
      .attr('x1', (d, i) => this.x(i))
      .attr('y1', 0)
      .attr('x2', (d, i) => this.x(i))
      .attr('y2', 40)
      .attr('stroke', '#ccc')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '2,2')
    this.chart.select('path').attr('d', this.line(this.data))
  }
}
</script>
