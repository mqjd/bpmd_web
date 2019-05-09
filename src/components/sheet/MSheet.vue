<template>
  <el-container class="m-sheet">
    <el-header class="sheet-title" height="31px">
      <el-container>
        <el-aside width="31px"></el-aside>
        <el-main
          class="title-container"
          ref="sheetTitle"
        >
          <m-table :options="sheetTitle"></m-table>
        </el-main>
      </el-container>
    </el-header>
    <el-main class="sheet-body">
      <el-container>
        <el-aside
          width="31px"
          class="ordinal-container"
          ref="sheetOrdinal"
        >
          <m-table :options="sheetOrdinal"></m-table>
        </el-aside>
        <el-main
          class="body-container"
          @scroll.native="scroll($event)"
        >
          <m-table :options="sheetBody"></m-table>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
import MTable from './MTable'
export default {
  name: 'm-sheet',
  components: {
    MTable
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      sheetTitle: null,
      sheetOrdinal: null,
      sheetBody: null,
      titleHeight: 40,
      ordinalWidth: 50,
      rowHeight: 30,
      rowWidth: 70
    }
  },
  created () {
    this.initSheet()
  },
  methods: {
    initSheet () {
      let rowHeights = new Array(this.options.rows).fill().map((item, index) => this.rowHeight)
      let rowWidths = new Array(this.options.cols).fill().map((item, index) => this.rowWidth)
      this.initSheetTitle(rowWidths)
      this.initSheetOrdinal(rowHeights)
      this.initSheetBody(rowHeights, rowWidths)
    },
    initSheetTitle (rowWidths) {
      const cols = this.options.cols
      const sheetTitle = {}
      sheetTitle.data = [new Array(cols).fill().map((item, index) => {
        return {
          text: this.numberToletter(index)
        }
      })]
      sheetTitle.rowWidths = rowWidths
      sheetTitle.rowHeights = [this.titleHeight]
      this.sheetTitle = sheetTitle
    },
    initSheetOrdinal (rowHeights) {
      const rows = this.options.rows
      const sheetOrdinal = {}
      sheetOrdinal.data = new Array(rows).fill().map((item, index) => [{
        text: index + 1
      }])
      sheetOrdinal.rowWidths = [this.ordinalWidth]
      sheetOrdinal.rowHeights = rowHeights
      this.sheetOrdinal = sheetOrdinal
    },
    initSheetBody (rowHeights, rowWidths) {
      const rows = this.options.rows
      const cols = this.options.cols
      const sheetBody = {}
      sheetBody.data = new Array(rows).fill().map((item, row) => {
        return new Array(cols).fill().map((item, col) => {
          return {
            text: `${row}-${col}`
          }
        })
      })
      sheetOrdinal.rowWidths = rowWidths
      sheetOrdinal.rowHeights = rowHeights
      this.sheetOrdinal = sheetOrdinal
    },
    scroll (event) {
      this.$refs.sheetOrdinal.$el.scrollTop = event.target.scrollTop
      this.$refs.sheetTitle.$el.scrollLeft = event.target.scrollLeft
    },
    numberToletter (num, str) {
      let str_ = String.fromCharCode(65 + num % 26) + (str || '')
      let unm_ = parseInt(num / 26)
      if (unm_ > 0) {
        str_ = this.numberToletter(unm_ - 1, str_)
      }
      return str_
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  @include full;
}
.m-sheet{
  .sheet-title{
    .title-container{
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .ordinal-container{
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .body-container{
    overflow: scroll
  }
}
</style>
