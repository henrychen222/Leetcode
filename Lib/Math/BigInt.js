// 11.7 night

const bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);

const bigIntMin = (...args) => args.reduce((m, e) => e < m ? e : m);