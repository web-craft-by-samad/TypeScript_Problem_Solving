function formatValue (value: string|number|boolean) {
    if(typeof value==='string'){
        console.log(value.toUpperCase())
    }
    else if(typeof value==="number"){
        console.log(value*10)
    }
    else if(typeof value==='boolean'){
        if(value===true){
            console.log(false)
        }
        if(value===false){
            console.log(true)
        }
    }
}

// 

function getLength(value : any) {
    if (typeof value === "string") {
        return value.length
    }
    else if (Array.isArray(value)){
        return value.length
    }
}

// 

function GetDetails (name:string,age:number) {
    return `Name : ${name}, Age : ${age}`
}

// 

interface Product {
  title: string;
  rating: number;
}

function filterByRating(newProduct: Product[]): Product[] {
  return newProduct.filter((item) => item.rating >= 4);
}

// 

interface Users {
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

function filterActiveUsers (users: Users[]): Users[] {
  return users.filter((user) => user.isActive === true);
}

// 

interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

function printBookDetails(book: Book) {
    if (book.isAvailable === true) {
        console.log(`Title: ${book.title} Author: ${book.author} Published: ${book.publishedYear}$ Available: Yes`)
    }

    else if (book.isAvailable === false) {
        console.log( `Title: ${book.title} Author: ${book.author} Published: ${book.publishedYear} Available: No`)
    }

}

// 

function getUniqueValues<T extends string | number>(a: T[], b: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    if (value === undefined) continue;

    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = value;
    }
  }

  for (let i = 0; i < b.length; i++) {
    const value = b[i];
    if (value === undefined) continue; 

    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = value;
    }
  }

  return result;
}

// 

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = total * (product.discount / 100);
        return total - discountAmount;
      }

      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}


