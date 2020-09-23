export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  warning: boolean = false;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
  };

  shouldShowWarning(): boolean {
    let debris: string = "Space Debris";

    if (this.type = debris.toLowerCase()) {
      this.warning = true;
    }
    return this.warning;
  }
}
