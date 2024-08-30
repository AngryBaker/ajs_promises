import json from './parser';
import read from './reader';
import GameSave from './GameSave';

export default class GameSavingLoader {
  static load() {
    const value = read()
      .then((result) => {
        return json(result);
      })
      .then((string) => {
        const obj = JSON.parse(string);
        const saveObj = new GameSave(obj);
        return new Promise(resolve => {
          resolve(saveObj);
        });
      });
    return value;
  }
}
