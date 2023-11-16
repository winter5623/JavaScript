// 데이터 -> svg
// 행단위 작업

let Style = {
  column: 'DISC    / TOT     / ACT      / REM     / PRO     ',
  width:  '60      / 80      / 80       / 80      / 200     ',
  tColor: '#757575 / #757575 / #757575  / #757575 / #757575 ',
  tA:  'start  / start  / start   / start  / start  ',
  bColor: '#757575 / #757575 / #757575  / #757575 / #757575 ',
}

// aaa.replace(/\s/g, '').split('/').map(Number)

let DATA = [
  {DISC: 'ELE',   TOT: 200, ACT: 60,  REM: 140, PRO: 30,},
  {DISC: 'HVAC',  TOT: 250, ACT: 125, REM: 125, PRO: 50,},
  {DISC: 'INST',  TOT: 200, ACT: 70,  REM: 140, PRO: 35,},
  {DISC: 'ROT',   TOT: 100, ACT: 15,  REM: 85,  PRO: 15,},
  {DISC: 'PRO',   TOT: 100, ACT: 5,   REM: 95,  PRO: 5, },
]

let styles = {
  col: Style.column.replace(/\s/g, '').split('/'),
  wid: Style.width.replace(/\s/g, '').split('/').map(Number),
  tC: Style.tColor.replace(/\s/g, '').split('/'),
  tA: Style.align.replace(/\s/g, '').split('/'),
  bC: Style.bColor.replace(/\s/g, '').split('/'),
  x: []
}

let x_ = 0

styles.wid.forEach((d, i) => {
  switch (styles.tA[i]) {
    case 'start' :
      styles.x.push(x_)
      break
    case 'middle' :
      styles.x.push(x_ + d / 2)
      break
    case 'end' :
      styles.x.push(x_ + d)
      break
  }
  x_ += d
})

let Table = this.svg
.append('g')
.attr('id','TABLE').attr('transform', 'translate(200, 200)')
.attr('font-family', 'Roboto')

let Header = Table
.append('g')
.attr('id','HEADER').attr('transform', 'translate(0,0)')

styles.col.forEach((d, i) => {
  Header
  .append('text')
  .attr('transform', `translate(${styles.x[i]}, 0)`).attr('fiil', styles.tC[i])
  .attr('text-anchor', styles.tA[i]).text(d)
})

let y_ = 30
DATA.forEach((d, j) => {
  let line = Table
  .append('g')
  .attr('id', `line-${j}`).attr('transform', `translate(0, ${y_})`)
  styles.col.forEach((s, i) => {
    if (s !== 'PRO') {
      line
      .append('text')
      .attr('x', styles.x[i]).attr('fill', styles.tC[i])
      .attr('text-anchor', styles.tA[i]).text(d[s])
    } else {
      let bar = line
      .append('g')
      .attr('id', `bar-${j}`).attr('transform', `translate(${styles.x[i]}, 0)`).attr('text-anchor', styles.ali[i])

      bar
      .append('rect').attr('fill', 'gray')
      .attr('y', -12).attr('width', styles.wid[i]).attr('height', 15)

      bar
      .append('rect').attr('fill', styles.bC)
      .attr('y', -12).attr('width', styles.wid[i] * (d.PRO / 100)).attr('height', 15)

      bar
      .append('text').attr('fill', styles.tC[i]).attr('x', styles.wid[i] * (d.PRO / 100))
      .attr('text-anchor', styles.tA[i]).text(d[s])
    }
  })

  y_ += 25
})




// 열단위 작업

let Style = {
  column: 'DISC    / TOT     / ACT      / REM     / PRO     ',
  width:  '60      / 80      / 80       / 80      / 200     ',
  tColor: '#757575 / #757575 / #757575  / #757575 / #757575 ',
  tA:  'start  / start  / start   / start  / start  ',
  bColor: '#757575 / #757575 / #757575  / #757575 / #757575 ',
}

// aaa.replace(/\s/g, '').split('/').map(Number)

let DATA = [
  {DISC: 'ELE',   TOT: 200, ACT: 60,  REM: 140, PRO: 30,},
  {DISC: 'HVAC',  TOT: 250, ACT: 125, REM: 125, PRO: 50,},
  {DISC: 'INST',  TOT: 200, ACT: 70,  REM: 140, PRO: 35,},
  {DISC: 'ROT',   TOT: 100, ACT: 15,  REM: 85,  PRO: 15,},
  {DISC: 'PRO',   TOT: 100, ACT: 5,   REM: 95,  PRO: 5, },
]

let styles = {
  col: Style.column.replace(/\s/g, '').split('/'),
  wid: Style.width.replace(/\s/g, '').split('/').map(Number),
  tC: Style.tColor.replace(/\s/g, '').split('/'),
  tA: Style.align.replace(/\s/g, '').split('/'),
  bC: Style.bColor.replace(/\s/g, '').split('/'),
  x: []
}

let x_ = 0

styles.wid.forEach((d, i) => {
  switch (styles.tA[i]) {
    case 'start' :
      styles.x.push(x_)
      break
    case 'middle' :
      styles.x.push(x_ + d / 2)
      break
    case 'end' :
      styles.x.push(x_ + d)
      break
  }
  x_ += d
})

let Table = this.svg
.append('g')
.attr('id','TABLE').attr('transform', 'translate(200, 200)')
.attr('font-family', 'Roboto')

let Header = Table
.append('g')
.attr('id','HEADER').attr('transform', 'translate(0,0)')

styles.col.forEach((s, i) => {
  Header
  .append('text')
  .attr('transform', `translate(${styles.x[i]}, 0)`).attr('fiil', styles.tC[i])
  .attr('text-anchor', styles.tA[i]).text(s)
})

styles.col.forEach((s, j) => {
  let line = Table
  .append('g')
  .attr('id', `line-${j}`).attr('transform', `translate(${styles.x[j]}, 0)`)

  let y_ = 30
  DATA.forEach((d, i) => {
    if (s !== 'PRO') {
      line
      .append('text')
      .attr('y', y_).attr('fill', styles.tC[i])
      .attr('text-anchor', styles.tA[i]).text(d[s])
    } else {
      let bar = line
      .append('g')
      .attr('id', `bar-${i}`).attr('transform', `translate(0, ${y_})`).attr('text-anchor', styles.ali[i])

      bar
      .append('rect').attr('fill', 'gray')
      .attr('y', -12).attr('width', styles.wid[j]).attr('height', 15)

      bar
      .append('rect').attr('fill', styles.bC[i])
      .attr('y', -12).attr('width', styles.wid[j] * (d.PRO / 100)).attr('height', 15)

      bar
      .append('text').attr('fill', styles.tC[i]).attr('x', styles.wid[j] * (d.PRO / 100))
      .attr('text-anchor', styles.tA[i]).text(d[s])
    }
    y_ += 25
  })
})
