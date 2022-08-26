export class countThousandPrimes {
  constructor() {
    this.iterator = 1;
    this.limit = 1000;
    this.cont = 1;
    this.order = 2;
    this.square = 9;
    this.square = 9;
    this.prime = Array(this.limit + 1).fill(0);
    this.prime[1] = 2;
    this.loopBreaker = false;

    this.N = 0;
    this.pageNumber = 1;
    this.organizer = 4;
    this.mult = Array(30 + 1).fill(0);
    this.rows = 0;
    this.pages = 1;
  }
  //Esse método conta printa cada número primo até o "this.limit". This.limit vale 1000 por default
  //Salvando em uma matriz.
  count() {
    while (this.iterator < this.limit) {
      do {
        this.cont += 2;
        if (this.cont == this.square) {
          this.order++;
          this.square = this.prime[this.order] * this.prime[this.order];
          this.mult[this.order - 1] = this.cont;
        }
        this.N = 2;
        this.loopBreaker = true;
        while (this.N < this.order && this.loopBreaker) {
          while (this.mult[this.N] < this.cont) {
            this.mult[this.N] += this.prime[this.N] + this.prime[this.N];
          }
          if (this.mult[this.N] == this.cont) {
            this.loopBreaker = false;
          }
          this.N++;
        }
      } while (!this.loopBreaker);
      this.iterator++;
      this.prime[this.iterator] = this.cont;
    }
    this.organize(
      this.rows,
      this.pages,
      this.limit,
      this.prime,
      this.organizer,
      this.pageNumber
    );
  }
  //Este método organiza como serão printado os números.
  //Dispostos em ordem vertical e separados por um pipe "|"
  organize(rows, pages, limit, prime, organizer, pageNumber) {
    while (pages <= limit) {
      console.log(`Page ${pageNumber}`);

      for (rows = pages; rows <= pages + 50 - 1; rows++) {
        let aux = [];
        for (let i = 0; i <= organizer - 1; i++) {
          // if (rows + i * 50 <= limit) {
          aux.push(prime[rows + i * 50]);
          // }
        }
        console.log(aux.join("|"));
      }
      pageNumber++;
      pages += 50 * organizer;
    }
  }
}
