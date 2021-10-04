import { Adaptee as AdapteeInterface } from "./types";

/**
 * Instance that needs to be to be adapted
 */
class Adaptee implements AdapteeInterface {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

export default Adaptee;
