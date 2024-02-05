export function identity<T, Z>(var1: T, var2: Z): any {
  return alert(`Var 1 is ${var1} and var2 is ${var2}`);
}

interface FullName {
  name: string;
  family: string;
  age: number;
}

function M_info(F: FullName): {} {
  return `Your teacher is ${F.name} ${F.family} and your Age is ${F.age} ***`;
}

export function courses(
  Course: string,
  Teacher: string,
  student: { name: string; family: string; age: number }
) {
  return `${Course} ${Teacher} ${M_info(student)}`;
}

class shop {
  productID: number;
  productName: string;

  constructor(productId1: number, productName1: string) {
    this.productID = productId1;
    this.productName = productName1;
  }

  public yourShop(): string {
    return `Your ShopId is ${this.productID} and Your ProductName is ${this.productName}`;
  }
}

export class Factor extends shop implements FullName {
  factorId: number;
  age = 27;
  name = "mahdi";
  family = "modiri";
  constructor(productId1: number, productName1: string, factorID1: number) {
    super(productId1, productName1);
    this.factorId = factorID1;
  }

  public displayFactor(): string {
    return `FactorId: ${
      this.factorId
    }, ${this.yourShop()} and this app directed by ${this.name} ${
      this.family
    } ${this.age} from Mashhad `;
  }
}
