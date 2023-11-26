export interface Person {
  first_name? : string;
  last_name?  : string;
  age?        : number;
  address : {
    city?      : string;
    street?    : string;
    post_code? : string;
  }
}
