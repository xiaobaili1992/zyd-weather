/* eslint-disable */
/* 风 */
import { checkColor } from './unit'

/* 风-全 */
export const windFill = (color) => {
  const windColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : null
  return windTemplate(fillTemplate('fill', windColor))
}
/* 风-线 */
export const windLine = (color) => {
  const windColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : null
  return windTemplate(fillTemplate('line', windColor))
}
/* 风-填充方式-单色描边/渐变描边 */
const fillTemplate = (type, color) => {
  return color
    ? {
        ty: 'st',
        c: {
          a: 0,
          k: color,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 20,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }
    : (type === 'line'
        ? {
            ty: 'st',
            c: {
              a: 0,
              k: [
                0.886274516582,
                0.909803926945,
                0.941176474094,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 18,
              ix: 5
            },
            lc: 2,
            lj: 1,
            ml: 10,
            bm: 0,
            d: [
              {
                n: 'd',
                nm: '虚线',
                v: {
                  a: 0,
                  k: 148,
                  ix: 1
                }
              },
              {
                n: 'o',
                nm: '偏移',
                v: {
                  a: 1,
                  k: [
                    {
                      i: {
                        x: [
                          0.833
                        ],
                        y: [
                          0.833
                        ]
                      },
                      o: {
                        x: [
                          0.167
                        ],
                        y: [
                          0.167
                        ]
                      },
                      t: 0,
                      s: [
                        0
                      ]
                    },
                    {
                      t: 359,
                      s: [
                        2960
                      ]
                    }
                  ],
                  ix: 7
                }
              }
            ],
            hd: false
          }
        : {
            ty: 'gs',
            o: {
              a: 0,
              k: 100,
              ix: 9
            },
            w: {
              a: 0,
              k: 24,
              ix: 10
            },
            g: {
              p: 5,
              k: {
                a: 0,
                k: [
                  0,
                  0.831,
                  0.843,
                  0.867,
                  0.225,
                  0.831,
                  0.843,
                  0.867,
                  0.45,
                  0.831,
                  0.843,
                  0.867,
                  0.725,
                  0.788,
                  0.8,
                  0.822,
                  1,
                  0.745,
                  0.757,
                  0.776
                ],
                ix: 8
              }
            },
            s: {
              a: 0,
              k: [
                -34.517,
                -46.871
              ],
              ix: 4
            },
            e: {
              a: 0,
              k: [
                51.166,
                101.536
              ],
              ix: 5
            },
            t: 1,
            lc: 2,
            lj: 1,
            ml: 10,
            ml2: {
              a: 0,
              k: 10,
              ix: 13
            },
            bm: 0,
            d: [
              {
                n: 'd',
                nm: 'dash',
                v: {
                  a: 0,
                  k: 148,
                  ix: 1
                }
              },
              {
                n: 'o',
                nm: 'offset',
                v: {
                  a: 1,
                  k: [
                    {
                      i: {
                        x: [
                          0.833
                        ],
                        y: [
                          0.833
                        ]
                      },
                      o: {
                        x: [
                          0.167
                        ],
                        y: [
                          0.167
                        ]
                      },
                      t: 0,
                      s: [
                        0
                      ]
                    },
                    {
                      t: 359,
                      s: [
                        2960
                      ]
                    }
                  ],
                  ix: 7
                }
              }
            ],
            hd: false
          })
}
/* 风-模板 */
const windTemplate = (fill) => {
  const wind_ks_p_k = [
    [256, 188, 0],
    [198, 324, 0]
  ]
  const wind_shapes_0_ks_k = [
    {
      i: [
        [
          0,
          0
        ],
        [
          -11.333,
          0
        ],
        [
          0,
          -22.091
        ],
        [
          22.091,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ],
      o: [
        [
          7.278,
          -7.573
        ],
        [
          22.091,
          0
        ],
        [
          0,
          22.091
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ],
      v: [
        [
          93.157,
          -27.714
        ],
        [
          122,
          -40
        ],
        [
          162,
          0
        ],
        [
          122,
          40
        ],
        [
          102,
          40
        ],
        [
          -162,
          40
        ]
      ],
      c: false
    }, {
      i: [
        [
          0,
          0
        ],
        [
          -11.333,
          0
        ],
        [
          0,
          22.091
        ],
        [
          22.091,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ],
      o: [
        [
          7.278,
          7.573
        ],
        [
          22.091,
          0
        ],
        [
          0,
          -22.091
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ],
      v: [
        [
          35.157,
          27.714
        ],
        [
          64,
          40
        ],
        [
          104,
          0
        ],
        [
          64,
          -40
        ],
        [
          44,
          -40
        ],
        [
          -104,
          -40
        ]
      ],
      c: false
    }
  ]
  return wind_ks_p_k.map((item, index) => {
    return {
      ddd: 0,
      ind: index + 1,
      ty: 4,
      nm: 'blow',
      sr: 1,
      ks: {
        o: {
          a: 0,
          k: 100,
          ix: 11
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        p: {
          a: 0,
          k: item,
          ix: 2
        },
        a: {
          a: 0,
          k: [
            0,
            0,
            0
          ],
          ix: 1
        },
        s: {
          a: 0,
          k: [
            100,
            100,
            100
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: wind_shapes_0_ks_k[index],
            ix: 2
          },
          hd: false
        },
        fill
      ],
      ip: 0,
      op: 360,
      st: 0,
      bm: 0
    }
  })
}
