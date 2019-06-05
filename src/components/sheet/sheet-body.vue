<template>
  <el-container class="msheet-body">
    <el-header class="sheet-title" :height="titleHeight + 1 + 'px'">
      <el-container>
        <el-aside :width="ordinalWidth + 1 + 'px'" class="table-corner"></el-aside>
        <el-main
          class="title-container"
          ref="sheetTitle"
        >
          <m-table :options="sheetTitle" :style="{width: width + 'px'}"></m-table>
        </el-main>
      </el-container>
    </el-header>
    <el-main class="sheet-body">
      <el-container>
        <el-aside
          :width="ordinalWidth + 1 + 'px'"
          class="ordinal-container"
          ref="sheetOrdinal"
        >
          <m-table :options="sheetOrdinal"></m-table>
        </el-aside>
        <el-main
          class="body-container"
          @dblclick.native="startEdit($event)"
          @scroll.native="scroll($event)"
        >
          <div
            ref="body"
            class="body"
            @mousedown.left="mousedown($event)"
          >
            <div class="select-area"
              @contextmenu.prevent="blankFunc"
              :style="selectAreaStyle">
                <textarea
                  v-if="editCell"
                  v-model="editCell.text"
                  :style="editCell.style"
                  ref="cellValue"
                  @mousedown.stop="blankFunc"
                >
                </textarea>
            </div>
            <m-table :options="sheetBody" class="body-table" :width="width"></m-table>
          </div>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
import MTable from './table'
import _ from 'lodash'
const abs = Math.abs
const min = Math.min
const max = Math.max
export default {
  name: 'msheet-body',
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
      titleHeight: 28,
      ordinalWidth: 40,
      rowHeight: 30,
      rowWidth: 100,
      width: 0,
      scrollTop: 0,
      scrollLeft: 0,
      selectArea: null,
      selectArea_: null,
      selectAreaAbs: null,
      editCell: null
    }
  },
  created () {
    this.initSheet()
  },
  watch: {
    scrollLeft (val) {
      this.$refs.sheetTitle.$el.scrollLeft = val
    },
    scrollTop (val) {
      this.$refs.sheetOrdinal.$el.scrollTop = val
    },
    selectAreaAbs (val, oldVal) {
      if (oldVal) {
        for (let i = oldVal.x1; i <= oldVal.x2; i++) {
          this.sheetTitle.data[0][i].style['background-color'] = '#eeeeee'
        }
        for (let i = oldVal.y1; i <= oldVal.y2; i++) {
          this.sheetOrdinal.data[i][0].style['background-color'] = '#eeeeee'
        }
      }
      for (let i = val.x1; i <= val.x2; i++) {
        this.sheetTitle.data[0][i].style['background-color'] = '#b0bec5'
      }
      for (let i = val.y1; i <= val.y2; i++) {
        this.sheetOrdinal.data[i][0].style['background-color'] = '#b0bec5'
      }
    }
  },
  computed: {
    selectAreaStyle () {
      if (this.selectArea_ === null) {
        return {
          display: 'none'
        }
      } else {
        const { start, end } = this.selectArea_
        const trs = this.$refs.body.querySelector('tbody').children
        const startClientRect = trs[start.y].children[start.x + 1].getBoundingClientRect()
        const endClientRect = trs[end.y].children[end.x + 1].getBoundingClientRect()
        const width = abs(endClientRect.left - startClientRect.left) + endClientRect.width - 1
        const height = abs(endClientRect.top - startClientRect.top) + endClientRect.height - 1
        const baseClientRect = this.$refs.body.getBoundingClientRect()
        const top = min(startClientRect.top, endClientRect.top) - baseClientRect.top
        const left = min(startClientRect.left, endClientRect.left) - baseClientRect.left
        return {
          width: `${width}px`,
          height: `${height}px`,
          top: `${top}px`,
          left: `${left}px`
        }
      }
    }
  },
  methods: {
    initSheet () {
      let rowHeights = new Array(this.options.rows).fill().map((item, index) => this.rowHeight)
      let rowWidths = new Array(this.options.cols).fill().map((item, index) => this.rowWidth)
      this.initSheetTitle(rowWidths)
      this.initSheetOrdinal(rowHeights)
      this.initSheetBody(rowHeights, rowWidths)
      this.width = this.options.cols * this.rowWidth
    },
    initSheetTitle (rowWidths) {
      const cols = this.options.cols
      const sheetTitle = {}
      sheetTitle.data = [new Array(cols).fill().map((item, index) => {
        return {
          text: this.numberToletter(index),
          colspan: 1,
          rowspan: 1,
          visible: true,
          style: {
            'text-align': 'center',
            'vertical-align': 'middle',
            'background-color': '#eeeeee'
          }
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
        text: index + 1,
        colspan: 1,
        rowspan: 1,
        visible: true,
        style: {
          'text-align': 'center',
          'vertical-align': 'middle',
          'background-color': '#eeeeee'
        }
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
          return this.getCell(row, col)
        })
      })
      sheetBody.rowWidths = rowWidths
      sheetBody.rowHeights = rowHeights
      this.sheetBody = sheetBody
    },
    getCell (row, col) {
      return {
        text: `${row}-${col}`,
        row: row,
        col: col,
        colspan: 1,
        rowspan: 1,
        visible: true,
        style: {
          'text-align': 'left',
          'vertical-align': 'top',
          'border-left': col !== 0 ? 'none' : '',
          'border-top': row !== 0 ? 'none' : ''
        }
      }
    },
    scroll (event) {
      this.scrollTop = event.target.scrollTop
      this.scrollLeft = event.target.scrollLeft
    },
    numberToletter (num, str) {
      let str_ = String.fromCharCode(65 + num % 26) + (str || '')
      let unm_ = parseInt(num / 26)
      if (unm_ > 0) {
        str_ = this.numberToletter(unm_ - 1, str_)
      }
      return str_
    },
    mousedown (event) {
      this.editCell = null
      const rect = this.$refs.body.getBoundingClientRect()
      const x = this.getPositionX(event.clientX - rect.x)
      const y = this.getPositionY(event.clientY - rect.y)
      const cell = this.findLeftTopCell(x, y)
      this.selectArea_ = this.selectArea = {
        start: { x: cell.col, y: cell.row },
        end: { x: cell.col, y: cell.row }
      }
      this.selectAreaAbs = this.parseSelectArea()
      document.body.addEventListener('mousemove', this.selecting)
      document.body.addEventListener('mouseup', this.selectEnd)
    },
    selecting (event) {
      const rect = this.$refs.body.getBoundingClientRect()
      const x_ = this.getPositionX(event.clientX - rect.x)
      const y_ = this.getPositionY(event.clientY - rect.y)
      let { x, y } = this.selectArea.end
      if (x !== x_ || y !== y_) {
        this.selectArea.end = { x: x_, y: y_ }
        const area = this.parseSelectArea()
        this.selectAreaAbs = area
        const cell = this.findLeftTopCell(area.x2, area.y2)
        this.selectArea_ = {
          start: {
            x: area.x1,
            y: area.y1
          },
          end: {
            x: cell.col,
            y: cell.row
          }
        }
      }
    },
    parseSelectArea () {
      const { start, end } = this.selectArea
      let x1 = min(start.x, end.x)
      let x2 = max(start.x, end.x)
      let y1 = min(start.y, end.y)
      let y2 = max(start.y, end.y)
      const startCell = this.findLeftTopCell(x1, y1)
      const endCell = this.findLeftTopCell(x2, y2)
      return this.calcSelectArea(startCell.col, startCell.row, endCell.col + endCell.colspan - 1, endCell.row + endCell.rowspan - 1)
    },
    calcSelectArea (x1, y1, x2, y2) {
      let cell = null
      for (let i = x1; i <= x2;) {
        cell = this.sheetBody.data[y1][i]
        if (cell.visible !== false) {
          i += cell.colspan
        } else {
          cell = this.findLeftTopCell(i, y1)
          return this.calcSelectArea(min(x1, cell.col), cell.row, x2, y2)
        }
      }
      for (let i = x1; i <= x2;) {
        cell = this.findLeftTopCell(i, y2)
        let y2_ = cell.row + cell.rowspan - 1
        if (y2_ === y2) {
          i += cell.colspan
        } else {
          return this.calcSelectArea(x1, y1, x2, y2_)
        }
      }
      for (let i = y1; i <= y2;) {
        cell = this.sheetBody.data[i][x1]
        if (cell.visible !== false) {
          i += cell.rowspan
        } else {
          cell = this.findLeftTopCell(x1, i)
          return this.calcSelectArea(cell.col, min(y1, cell.row), x2, y2)
        }
      }
      for (let i = y1; i <= y2;) {
        cell = this.findLeftTopCell(x2, i)
        let x2_ = cell.col + cell.colspan - 1
        if (x2_ === x2) {
          i += cell.rowspan
        } else {
          return this.calcSelectArea(x1, y1, x2_, y2)
        }
      }
      return { x1, y1, x2, y2 }
    },
    findLeftTopCell (x, y) {
      let cell = this.sheetBody.data[y][x]
      if (cell.visible) return cell
      for (let i = y; i >= 0; i--) {
        for (let j = x; j >= 0; j--) {
          let cell_ = this.sheetBody.data[i][j]
          if (cell_.visible === false) continue
          if (cell_.col <= x && cell_.col + cell_.colspan > x) {
            return cell_
          }
          break
        }
      }
    },
    selectEnd (event) {
      document.body.removeEventListener('mousemove', this.selecting)
      document.body.removeEventListener('mouseup', this.selectEnd)
    },
    getPositionX (offsetX) {
      let length = 0
      const widths = this.sheetTitle.rowWidths
      for (let i = 0; i < widths.length; i++) {
        length += widths[i]
        if (length >= offsetX) {
          return i
        }
      }
    },
    getPositionY (offsetY) {
      let length = 0
      const heights = this.sheetOrdinal.rowHeights
      for (let i = 0; i < heights.length; i++) {
        length += heights[i]
        if (length >= offsetY) {
          return i
        }
      }
    },
    startEdit (event) {
      const rect = this.$refs.body.getBoundingClientRect()
      const x = this.getPositionX(event.clientX - rect.x)
      const y = this.getPositionY(event.clientY - rect.y)
      this.editCell = this.findLeftTopCell(x, y)
    },
    blankFunc () {
      return false
    },
    operate (type, data) {
      if (this.hasOwnProperty(type)) {
        this[type](data)
      }
    },
    style (data) {
      if (this.selectArea_) {
        const { start, end } = this.selectArea_
        let endCell = this.sheetBody.data[end.y][end.x]
        for (let i = start.y; i < end.y + endCell.rowspan; i++) {
          for (let j = start.x; j < end.x + endCell.colspan; j++) {
            let cell = this.sheetBody.data[i][j]
            cell.style = {
              ...cell.style,
              ...data
            }
          }
        }
      }
    },
    merge () {
      if (this.selectArea_) {
        const { start, end } = this.selectArea_
        if (!_.isEqual(start, end)) {
          let startCell = this.sheetBody.data[start.y][start.x]
          let endCell = this.sheetBody.data[end.y][end.x]
          startCell.colspan = endCell.col - startCell.col + endCell.colspan
          startCell.rowspan = endCell.row - startCell.row + endCell.rowspan
          for (let i = 0; i < startCell.rowspan; i++) {
            for (let j = 0; j < startCell.colspan; j++) {
              let cell = this.sheetBody.data[startCell.row + i][startCell.col + j]
              if (cell !== startCell) {
                cell.visible = false
                cell.rowspan = 1
                cell.colspan = 1
              }
            }
          }
          this.$nextTick(function () {
            this.selectArea_.end = start
          })
        }
      }
    },
    split () {
      if (this.selectArea_) {
        const { start, end } = this.selectArea_
        if (_.isEqual(start, end)) {
          let startCell = this.sheetBody.data[start.y][start.x]
          const { rowspan, colspan } = startCell
          for (let i = 0; i < rowspan; i++) {
            for (let j = 0; j < colspan; j++) {
              let cell = this.getCell(startCell.row + i, startCell.col + j)
              this.sheetBody.data[cell.row].splice(cell.col, 1, cell)
            }
          }
          this.$nextTick(function () {
            this.selectArea_.end = {
              x: start.x + colspan - 1,
              y: start.y + rowspan - 1
            }
          })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  @include full;
}
.msheet-body{
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
    overflow: scroll;
    .body{
      position: relative;
      .select-area{
        position: absolute;
        border: 1px solid #4caf50;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 1;
        textarea{
          height: 100%;
          width: 100%;
          outline: none;
          box-sizing: border-box;
          border: none;
          resize: none;
        }
      }
    }
  }
  .table-corner{
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    background-color: #eeeeee;
  }
  .body-table{
    cursor: cell;
  }
}
</style>
