class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Building is an abstract class and cannot be instantiated directly");
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

class OfficeBuilding extends Building {
  constructor(sqft, name) {
    super(sqft);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  evacuationWarningMessage() {
    return `Evacuate the ${this._name} building immediately!`;
  }
}
