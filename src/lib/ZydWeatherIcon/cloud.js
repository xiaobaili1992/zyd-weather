/* eslint-disable */
/* 云 */
import { checkColor } from './unit'

/* 单片的云-全 */
export const cloudFill = (color) => {
  return cloudTemplate('fill', color)
}
/* 单片的云-线 */
export const cloudLine = (color) => {
  return cloudTemplate('line', color)
}
/* 双片的云-全 */
export const cloudyFill = (lightColor, darkColor) => {
  return cloudyTemplate('fill', lightColor, darkColor)
}
/* 双片的云-线 */
export const cloudyLine = (lightColor, darkColor) => {
  return cloudyTemplate('line', lightColor, darkColor)
}
/* 斜的云-全 */
export const obliqueCloudFill = (color) => {
  return obliqueCloudTemplate('fill', color)
}
/* 斜的云-线 */
export const obliqueCloudLine = (color) => {
  return obliqueCloudTemplate('line', color)
}
/* 单片的云-模板 */
const cloudTemplate = (type, color) => {
  const shapes_0_ks_k = type === 'line'
    ? {
        i: [
          [
            0,
            0
          ],
          [
            0,
            30.928
          ],
          [
            30.928,
            0
          ],
          [
            0.844,
            -0.038
          ],
          [
            0,
            6.951
          ],
          [
            46.392,
            0
          ],
          [
            14.803,
            -23.924
          ],
          [
            10.461,
            0
          ],
          [
            0,
            -30.928
          ],
          [
            -0.484,
            -2.963
          ],
          [
            0,
            -29.306
          ],
          [
            -33.137,
            0
          ]
        ],
        o: [
          [
            30.928,
            0
          ],
          [
            0,
            -30.928
          ],
          [
            -0.854,
            0
          ],
          [
            1.592,
            -6.459
          ],
          [
            0,
            -46.392
          ],
          [
            -30.201,
            0
          ],
          [
            -8.378,
            -4.994
          ],
          [
            -30.928,
            0
          ],
          [
            0,
            3.1
          ],
          [
            -27.779,
            5.25
          ],
          [
            0,
            33.137
          ],
          [
            0,
            0
          ]
        ],
        v: [
          [
            116,
            108
          ],
          [
            172,
            52
          ],
          [
            116,
            -4
          ],
          [
            113.471,
            -3.873
          ],
          [
            116,
            -24
          ],
          [
            32,
            -108
          ],
          [
            -39.404,
            -68.085
          ],
          [
            -68,
            -76
          ],
          [
            -124,
            -20
          ],
          [
            -123.199,
            -10.917
          ],
          [
            -172,
            48
          ],
          [
            -112,
            108
          ]
        ],
        c: false
      }
    : {
        i: [
          [
            30.928,
            0
          ],
          [
            0.844,
            -0.038
          ],
          [
            0,
            6.951
          ],
          [
            46.392,
            0
          ],
          [
            14.803,
            -23.924
          ],
          [
            10.461,
            0
          ],
          [
            0,
            -30.928
          ],
          [
            -0.484,
            -2.963
          ],
          [
            0,
            -29.306
          ],
          [
            -33.137,
            0
          ],
          [
            -1.328,
            0.088
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
            30.928
          ]
        ],
        o: [
          [
            -0.854,
            0
          ],
          [
            1.592,
            -6.459
          ],
          [
            0,
            -46.392
          ],
          [
            -30.201,
            0
          ],
          [
            -8.378,
            -4.994
          ],
          [
            -30.928,
            0
          ],
          [
            0,
            3.1
          ],
          [
            -27.779,
            5.25
          ],
          [
            0,
            33.137
          ],
          [
            1.351,
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
            30.928,
            0
          ],
          [
            0,
            -30.928
          ]
        ],
        v: [
          [
            116,
            -8.875
          ],
          [
            113.471,
            -8.748
          ],
          [
            116,
            -28.875
          ],
          [
            32,
            -112.875
          ],
          [
            -39.404,
            -72.96
          ],
          [
            -68,
            -80.875
          ],
          [
            -124,
            -24.875
          ],
          [
            -123.199,
            -15.792
          ],
          [
            -172,
            43.125
          ],
          [
            -112,
            103.125
          ],
          [
            -108,
            102.923
          ],
          [
            -108,
            103.125
          ],
          [
            116,
            103.125
          ],
          [
            172,
            47.125
          ]
        ],
        c: true
      }
  const cloudFill = cloudFillTemplate(type, color)
  return [
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: 'cloud',
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
          k: [
            256,
            226,
            0
          ],
          ix: 2,
          l: 2
        },
        a: {
          a: 0,
          k: [
            0,
            0,
            0
          ],
          ix: 1,
          l: 2
        },
        s: {
          a: 0,
          k: [
            100,
            100,
            100
          ],
          ix: 6,
          l: 2
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
            k: shapes_0_ks_k,
            ix: 2
          },
          hd: false
        },
        ...cloudFill
      ],
      ip: 0,
      op: 360,
      st: 0,
      ct: 1,
      bm: 0
    }
  ]
}
/* 单片的云-填充方式-单色描边/渐变填充/单色填充 */
const cloudFillTemplate = (type, color) => {
  const cloudStrokeWidth = type === 'line' ? 15 : 6
  const cloudColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : (type === 'line' ? [0.886274516582, 0.909803926945, 0.941176474094, 1] : [0.901960790157, 0.937254905701, 0.988235294819, 1])
  if (type === 'line') {
    return [strokeTemplate(cloudColor, cloudStrokeWidth)]
  } else {
    if (color && checkColor(color)) {
      return [strokeTemplate(cloudColor, cloudStrokeWidth), {
        ty: 'fl',
        c: {
          a: 0,
          k: cloudColor,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 12,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }]
    } else {
      return [strokeTemplate(cloudColor, cloudStrokeWidth), {
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
              0.953,
              0.969,
              0.996,
              0.225,
              0.953,
              0.969,
              0.996,
              0.45,
              0.953,
              0.969,
              0.996,
              0.725,
              0.912,
              0.943,
              0.99,
              1,
              0.871,
              0.918,
              0.984
            ],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [
            -75.517,
            -84.871
          ],
          ix: 5
        },
        e: {
          a: 0,
          k: [
            57.669,
            145.814
          ],
          ix: 6
        },
        t: 1,
        nm: 'Gradient Fill 1',
        mn: 'ADBE Vector Graphic - G-Fill',
        hd: false
      }]
    }
  }
}
/* 单色描边 */
const strokeTemplate = (color, width) => {
  return {
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
      k: width,
      ix: 5
    },
    lc: 1,
    lj: 1,
    bm: 0,
    hd: false
  }
}
/* 双片的云-模板 */
const cloudyTemplate = (type, lightColor, darkColor) => {
  const template = [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'cloud',
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
          a: 1,
          k: [
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 0,
              s: [
                238,
                256,
                0
              ],
              to: [
                0,
                0,
                0
              ],
              ti: [
                0,
                0,
                0
              ]
            },
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 180,
              s: [
                274,
                256,
                0
              ],
              to: [
                0,
                0,
                0
              ],
              ti: [
                0,
                0,
                0
              ]
            },
            {
              t: 359,
              s: [
                238,
                256,
                0
              ]
            }
          ],
          ix: 2,
          l: 2
        },
        a: {
          a: 0,
          k: [
            0,
            0,
            0
          ],
          ix: 1,
          l: 2
        },
        s: {
          a: 0,
          k: [
            100,
            100,
            100
          ],
          ix: 6,
          l: 2
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
            k: {
              i: [
                [
                  46.392,
                  0
                ],
                [
                  14.803,
                  -23.924
                ],
                [
                  10.461,
                  0
                ],
                [
                  0,
                  -30.928
                ],
                [
                  -0.484,
                  -2.963
                ],
                [
                  0,
                  -29.306
                ],
                [
                  -33.137,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  30.928
                ],
                [
                  30.928,
                  0
                ],
                [
                  0.844,
                  -0.038
                ],
                [
                  0,
                  6.951
                ]
              ],
              o: [
                [
                  -30.201,
                  0
                ],
                [
                  -8.378,
                  -4.994
                ],
                [
                  -30.928,
                  0
                ],
                [
                  0,
                  3.1
                ],
                [
                  -27.779,
                  5.25
                ],
                [
                  0,
                  33.137
                ],
                [
                  0,
                  0
                ],
                [
                  30.928,
                  0
                ],
                [
                  0,
                  -30.928
                ],
                [
                  -0.854,
                  0
                ],
                [
                  1.592,
                  -6.459
                ],
                [
                  0,
                  -46.392
                ]
              ],
              v: [
                [
                  32,
                  -108
                ],
                [
                  -39.404,
                  -68.085
                ],
                [
                  -68,
                  -76
                ],
                [
                  -124,
                  -20
                ],
                [
                  -123.199,
                  -10.917
                ],
                [
                  -172,
                  48
                ],
                [
                  -112,
                  108
                ],
                [
                  116,
                  108
                ],
                [
                  172,
                  52
                ],
                [
                  116,
                  -4
                ],
                [
                  113.471,
                  -3.873
                ],
                [
                  116,
                  -24
                ]
              ],
              c: true
            },
            ix: 2
          },
          hd: false
        },
        ...cloudyLightCloudFillTemplate(type, lightColor)
      ],
      ip: 0,
      op: 360,
      st: 0,
      ct: 1,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'dark-cloud',
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
          a: 1,
          k: [
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 0,
              s: [
                247,
                256,
                0
              ],
              to: [
                0,
                0,
                0
              ],
              ti: [
                0,
                0,
                0
              ]
            },
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 180,
              s: [
                265,
                256,
                0
              ],
              to: [
                0,
                0,
                0
              ],
              ti: [
                0,
                0,
                0
              ]
            },
            {
              t: 359,
              s: [
                247,
                256,
                0
              ]
            }
          ],
          ix: 2,
          l: 2
        },
        a: {
          a: 0,
          k: [
            0,
            0,
            0
          ],
          ix: 1,
          l: 2
        },
        s: {
          a: 0,
          k: [
            100,
            100,
            100
          ],
          ix: 6,
          l: 2
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
            k: {
              i: [
                [
                  0,
                  -17.898
                ],
                [
                  -17.891,
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
                  -0.781,
                  0
                ],
                [
                  0,
                  19.177
                ],
                [
                  16.07,
                  3.038
                ],
                [
                  0,
                  1.794
                ],
                [
                  17.891,
                  0
                ],
                [
                  4.847,
                  -2.89
                ],
                [
                  17.471,
                  0
                ],
                [
                  0,
                  -26.848
                ],
                [
                  -0.921,
                  -3.738
                ],
                [
                  0.494,
                  0
                ]
              ],
              o: [
                [
                  0,
                  17.898
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
                  0.768,
                  0.051
                ],
                [
                  19.17,
                  0
                ],
                [
                  0,
                  -16.959
                ],
                [
                  0.28,
                  -1.715
                ],
                [
                  0,
                  -17.898
                ],
                [
                  -6.052,
                  0
                ],
                [
                  -8.564,
                  -13.845
                ],
                [
                  -26.837,
                  0
                ],
                [
                  0,
                  4.023
                ],
                [
                  -0.488,
                  -0.022
                ],
                [
                  -17.891,
                  0
                ]
              ],
              v: [
                [
                  1.499,
                  9.093
                ],
                [
                  33.895,
                  41.501
                ],
                [
                  163.477,
                  41.501
                ],
                [
                  163.477,
                  41.384
                ],
                [
                  165.791,
                  41.501
                ],
                [
                  200.501,
                  6.778
                ],
                [
                  172.269,
                  -27.318
                ],
                [
                  172.733,
                  -32.574
                ],
                [
                  140.337,
                  -64.982
                ],
                [
                  123.795,
                  -60.401
                ],
                [
                  82.488,
                  -83.501
                ],
                [
                  33.895,
                  -34.889
                ],
                [
                  35.358,
                  -23.241
                ],
                [
                  33.895,
                  -23.315
                ]
              ],
              c: true
            },
            ix: 2
          },
          hd: false
        },
        ...cloudyDarkCloudFillTemplate(type, darkColor)
      ],
      ip: 0,
      op: 360,
      st: 0,
      bm: 0
    }
  ]
  if (type === 'line') {
    template[1].hasMask = true
    template[1].masksProperties = [
      {
        inv: false,
        mode: 'a',
        pt: {
          a: 1,
          k: [
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 0,
              s: [
                {
                  i: [
                    [
                      0,
                      0
                    ],
                    [
                      30.928,
                      0
                    ],
                    [
                      0.844,
                      -0.038
                    ],
                    [
                      0,
                      6.951
                    ],
                    [
                      46.392,
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
                      -30.928
                    ],
                    [
                      -0.854,
                      0
                    ],
                    [
                      1.592,
                      -6.459
                    ],
                    [
                      0,
                      -46.392
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
                      162.42,
                      51.5
                    ],
                    [
                      106.42,
                      -4.5
                    ],
                    [
                      103.891,
                      -4.373
                    ],
                    [
                      106.42,
                      -24.5
                    ],
                    [
                      22.42,
                      -108.5
                    ],
                    [
                      22.42,
                      -256.5
                    ],
                    [
                      258.58,
                      -256.5
                    ],
                    [
                      258.58,
                      51.5
                    ]
                  ],
                  c: true
                }
              ]
            },
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 180,
              s: [
                {
                  i: [
                    [
                      0,
                      0
                    ],
                    [
                      30.928,
                      0
                    ],
                    [
                      0.844,
                      -0.038
                    ],
                    [
                      0,
                      6.951
                    ],
                    [
                      46.392,
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
                      -30.928
                    ],
                    [
                      -0.854,
                      0
                    ],
                    [
                      1.592,
                      -6.459
                    ],
                    [
                      0,
                      -46.392
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
                      181.42,
                      51.5
                    ],
                    [
                      125.42,
                      -4.5
                    ],
                    [
                      122.891,
                      -4.373
                    ],
                    [
                      125.42,
                      -24.5
                    ],
                    [
                      41.42,
                      -108.5
                    ],
                    [
                      41.42,
                      -256.5
                    ],
                    [
                      277.58,
                      -256.5
                    ],
                    [
                      277.58,
                      51.5
                    ]
                  ],
                  c: true
                }
              ]
            },
            {
              t: 359,
              s: [
                {
                  i: [
                    [
                      0,
                      0
                    ],
                    [
                      30.928,
                      0
                    ],
                    [
                      0.844,
                      -0.038
                    ],
                    [
                      0,
                      6.951
                    ],
                    [
                      46.392,
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
                      -30.928
                    ],
                    [
                      -0.854,
                      0
                    ],
                    [
                      1.592,
                      -6.459
                    ],
                    [
                      0,
                      -46.392
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
                      162.42,
                      51.5
                    ],
                    [
                      106.42,
                      -4.5
                    ],
                    [
                      103.891,
                      -4.373
                    ],
                    [
                      106.42,
                      -24.5
                    ],
                    [
                      22.42,
                      -108.5
                    ],
                    [
                      22.42,
                      -256.5
                    ],
                    [
                      258.58,
                      -256.5
                    ],
                    [
                      258.58,
                      51.5
                    ]
                  ],
                  c: true
                }
              ]
            }
          ],
          ix: 1
        },
        o: {
          a: 0,
          k: 100,
          ix: 3
        },
        x: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Mask 1'
      }
    ]
  }
  return template
}
/* 双片云中靠前的那片云-填充方式-单色描边/渐变填充/单色填充 */
const cloudyLightCloudFillTemplate = (type, color) => {
  const cloudyLightCloudStrokeWidth = type === 'line' ? 15 : 6
  const cloudyLightCloudColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : (type === 'line' ? [0.886274516582, 0.909803926945, 0.941176474094, 1] : [0.901960790157, 0.937254905701, 0.988235294819, 1])
  if (type === 'line') {
    return [strokeTemplate(cloudyLightCloudColor, cloudyLightCloudStrokeWidth)]
  } else {
    if (color && checkColor(color)) {
      return [strokeTemplate(cloudyLightCloudColor, cloudyLightCloudStrokeWidth), {
        ty: 'fl',
        c: {
          a: 0,
          k: cloudyLightCloudColor,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 12,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }]
    } else {
      return [strokeTemplate(cloudyLightCloudColor, cloudyLightCloudStrokeWidth), {
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
              0.953,
              0.969,
              0.996,
              0.225,
              0.953,
              0.969,
              0.996,
              0.45,
              0.953,
              0.969,
              0.996,
              0.725,
              0.912,
              0.943,
              0.99,
              1,
              0.871,
              0.918,
              0.984
            ],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [
            -76,
            -81
          ],
          ix: 5
        },
        e: {
          a: 0,
          k: [
            57.186,
            149.685
          ],
          ix: 6
        },
        t: 1,
        hd: false
      }]
    }
  }
}
/* 双片云中靠后的那片云-填充方式-单色描边/渐变填充/单色填充 */
const cloudyDarkCloudFillTemplate = (type, color) => {
  const cloudyDarkCloudStrokeWidth = type === 'line' ? 15 : 1
  const cloudyDarkCloudColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : (type === 'line' ? [0.580392181873, 0.639215707779, 0.721568644047, 1] : [0.517647087574, 0.54509806633, 0.596078455448, 1])
  if (type === 'line') {
    return [strokeTemplate(cloudyDarkCloudColor, cloudyDarkCloudStrokeWidth)]
  } else {
    if (color && checkColor(color)) {
      return [strokeTemplate(cloudyDarkCloudColor, cloudyDarkCloudStrokeWidth), {
        ty: 'fl',
        c: {
          a: 0,
          k: cloudyDarkCloudColor,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 12,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }]
    } else {
      return [strokeTemplate(cloudyDarkCloudColor, cloudyDarkCloudStrokeWidth), {
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
              0.612,
              0.639,
              0.686,
              0.225,
              0.612,
              0.639,
              0.686,
              0.45,
              0.612,
              0.639,
              0.686,
              0.725,
              0.516,
              0.543,
              0.594,
              1,
              0.42,
              0.447,
              0.502
            ],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [
            75,
            -75
          ],
          ix: 5
        },
        e: {
          a: 0,
          k: [
            155.624,
            64.645
          ],
          ix: 6
        },
        t: 1,
        hd: false
      }]
    }
  }
}
/* 斜的云-模板 */
const obliqueCloudTemplate = (type, color) => {
  return [
    {
      ddd: 0,
      ind: 13,
      ty: 4,
      nm: 'cloud',
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
          k: [
            256,
            256,
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
      hasMask: true,
      masksProperties: [
        {
          inv: false,
          mode: 'a',
          pt: {
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
                ]
              ],
              v: [
                [
                  -255.5,
                  -255.5
                ],
                [
                  256.5,
                  -255.5
                ],
                [
                  -255.5,
                  256.5
                ]
              ],
              c: true
            },
            ix: 1
          },
          o: {
            a: 0,
            k: 100,
            ix: 3
          },
          x: {
            a: 0,
            k: 0,
            ix: 4
          }
        }
      ],
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  30.928,
                  0
                ],
                [
                  0.844,
                  -0.038
                ],
                [
                  0,
                  6.951
                ],
                [
                  46.392,
                  0
                ],
                [
                  14.803,
                  -23.924
                ],
                [
                  10.461,
                  0
                ],
                [
                  0,
                  -30.928
                ],
                [
                  -0.484,
                  -2.963
                ],
                [
                  0,
                  -29.306
                ],
                [
                  -33.137,
                  0
                ],
                [
                  -1.328,
                  0.088
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
                  30.928
                ]
              ],
              o: [
                [
                  -0.854,
                  0
                ],
                [
                  1.592,
                  -6.459
                ],
                [
                  0,
                  -46.392
                ],
                [
                  -30.201,
                  0
                ],
                [
                  -8.378,
                  -4.994
                ],
                [
                  -30.928,
                  0
                ],
                [
                  0,
                  3.1
                ],
                [
                  -27.779,
                  5.25
                ],
                [
                  0,
                  33.137
                ],
                [
                  1.351,
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
                  30.928,
                  0
                ],
                [
                  0,
                  -30.928
                ]
              ],
              v: [
                [
                  116,
                  -4
                ],
                [
                  113.471,
                  -3.873
                ],
                [
                  116,
                  -24
                ],
                [
                  32,
                  -108
                ],
                [
                  -39.404,
                  -68.085
                ],
                [
                  -68,
                  -76
                ],
                [
                  -124,
                  -20
                ],
                [
                  -123.199,
                  -10.917
                ],
                [
                  -172,
                  48
                ],
                [
                  -112,
                  108
                ],
                [
                  -108,
                  107.798
                ],
                [
                  -108,
                  108
                ],
                [
                  116,
                  108
                ],
                [
                  172,
                  52
                ]
              ],
              c: true
            },
            ix: 2
          },
          hd: false
        },
        ...obliqueCloudFillTemplate(type, color)
      ],
      ip: 0,
      op: 360,
      st: 0,
      bm: 0
    }
  ]
}
/* 斜的云-填充方式-单色描边/渐变填充/单色填充 */
const obliqueCloudFillTemplate = (type, color) => {
  const obliqueCloudStrokeWidth = type === 'line' ? 12 : 6
  const obliqueCloudColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : (type === 'line' ? [0.901960790157, 0.937254905701, 0.988235294819, 1] : [0.901960790157, 0.937254905701, 0.988235294819, 1])
  if (type === 'line') {
    return [strokeTemplate(obliqueCloudColor, obliqueCloudStrokeWidth)]
  } else {
    if (color && checkColor(color)) {
      return [strokeTemplate(obliqueCloudColor, obliqueCloudStrokeWidth), {
        ty: 'fl',
        c: {
          a: 0,
          k: obliqueCloudColor,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 12,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }]
    } else {
      return [strokeTemplate(obliqueCloudColor, obliqueCloudStrokeWidth), {
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
              0.953,
              0.969,
              0.996,
              0.225,
              0.953,
              0.969,
              0.996,
              0.45,
              0.953,
              0.969,
              0.996,
              0.725,
              0.912,
              0.943,
              0.99,
              1,
              0.871,
              0.918,
              0.984
            ],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [
            -76,
            -81
          ],
          ix: 5
        },
        e: {
          a: 0,
          k: [
            57.186,
            149.685
          ],
          ix: 6
        },
        t: 1,
        nm: 'cloud-fill',
        mn: 'ADBE Vector Graphic - G-Fill',
        hd: false
      }]
    }
  }
}
