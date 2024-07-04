/* 闪电 */
import { checkColor } from './unit'

export const lightning = (color) => {
  const lightningColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : [0.964705884457, 0.658823549747, 0.137254908681, 1]
  const lightningFill = color && checkColor(color)
    ? {
        ty: 'fl',
        c: {
          a: 0,
          k: lightningColor,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 6,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }
    : {
        ty: 'gf',
        o: {
          a: 0,
          k: 100,
          ix: 10
        },
        r: 1,
        bm: 0,
        g: {
          p: 5,
          k: {
            a: 0,
            k: [
              0,
              0.969,
              0.698,
              0.231,
              0.225,
              0.969,
              0.698,
              0.231,
              0.45,
              0.969,
              0.698,
              0.231,
              0.725,
              0.965,
              0.659,
              0.137,
              1,
              0.961,
              0.62,
              0.043
            ],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [
            -42.556,
            -73.372
          ],
          ix: 5
        },
        e: {
          a: 0,
          k: [
            29.654,
            51.699
          ],
          ix: 6
        },
        t: 1,
        hd: false
      }
  return {
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: 'lightning-bolt',
    sr: 1,
    ks: {
      o: {
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
              100
            ]
          },
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
            t: 30,
            s: [
              100
            ]
          },
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
            t: 40,
            s: [
              0
            ]
          },
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
            t: 50,
            s: [
              100
            ]
          },
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
            t: 60,
            s: [
              0
            ]
          },
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
            t: 70,
            s: [
              100
            ]
          },
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
            t: 75,
            s: [
              0
            ]
          },
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
            t: 80,
            s: [
              100
            ]
          },
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
            t: 120,
            s: [
              100
            ]
          },
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
            t: 150,
            s: [
              100
            ]
          },
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
            t: 160,
            s: [
              0
            ]
          },
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
            t: 170,
            s: [
              100
            ]
          },
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
            t: 180,
            s: [
              0
            ]
          },
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
            t: 190,
            s: [
              100
            ]
          },
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
            t: 195,
            s: [
              0
            ]
          },
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
            t: 200,
            s: [
              100
            ]
          },
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
            t: 240,
            s: [
              100
            ]
          },
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
            t: 270,
            s: [
              100
            ]
          },
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
            t: 280,
            s: [
              0
            ]
          },
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
            t: 290,
            s: [
              100
            ]
          },
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
            t: 300,
            s: [
              0
            ]
          },
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
            t: 310,
            s: [
              100
            ]
          },
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
            t: 315,
            s: [
              0
            ]
          },
          {
            t: 320,
            s: [
              100
            ]
          }
        ],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          256.556,
          351.372,
          0
        ],
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
        ty: 'gr',
        it: [
          {
            ind: 0,
            ty: 'sh',
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
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
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
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
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -16,
                    -88
                  ],
                  [
                    -48,
                    8
                  ],
                  [
                    -16,
                    8
                  ],
                  [
                    -32,
                    88
                  ],
                  [
                    48,
                    -24
                  ],
                  [
                    0,
                    -24
                  ],
                  [
                    32,
                    -88
                  ]
                ],
                c: true
              },
              ix: 2
            },
            hd: false
          },
          {
            ty: 'st',
            c: {
              a: 0,
              k: lightningColor,
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 4,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 10,
            bm: 0,
            hd: false
          },
          lightningFill,
          {
            ty: 'tr',
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            }
          }
        ],
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        hd: false
      }
    ],
    ip: 0,
    op: 360,
    st: 0,
    bm: 0
  }
}
