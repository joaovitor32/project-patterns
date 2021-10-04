export interface Target {
  request(): string;
}

export interface Adaptee {
  specificRequest(): string;
}
