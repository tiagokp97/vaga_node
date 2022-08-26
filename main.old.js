export class DoSomething {
  static main(args) {
    let M = 1000;
    let RR = 50;
    let CC = 4;
    let ORDMAX = 30;
    let p = Array(M + 1).fill(0);
    let PAGEOFFSET = 0;
    let ROWOFFSET = 0;
    let C = 0;
    let J = 0;
    let K = 0;
    let ITIS = false;
    let ORD = 0;
    let SQUARE = 0;
    let N = 0;
    let MULT = Array(ORDMAX + 1).fill(0);
    J = 1;
    K = 1;
    p[1] = 2;
    ORD = 2;
    SQUARE = 9;

    while (K < M) {
      do {
        J += 2;
        if (J == SQUARE) {
          ORD++;
          SQUARE = p[ORD] * p[ORD];
          MULT[ORD - 1] = J;
        }
        N = 2;
        ITIS = true;
        while (N < ORD && ITIS) {
          while (MULT[N] < J) {
            MULT[N] += p[N] + p[N];
          }
          if (MULT[N] == J) {
            ITIS = false;
          }
          N++;
        }
      } while (!ITIS);
      K++;
      p[K] = J;
    }

    PAGENUMBER = 1;
    PAGEOFFSET = 1;

    while (PAGEOFFSET <= M) {
      console.log("Page ", PAGENUMBER);
      for (
        ROWOFFSET = PAGEOFFSET;
        ROWOFFSET <= PAGEOFFSET + RR - 1;
        ROWOFFSET++
      ) {
        let aux = [];
        for (C = 0; C <= CC - 1; C++) {
          if (ROWOFFSET + C * RR <= M) {
            aux.push(p[ROWOFFSET + C * RR]);
          }
        }
        console.log(aux.join("|"));
      }
      PAGENUMBER++;
      PAGEOFFSET += RR * CC;
    }
  }
}

DoSomething.main([]);
