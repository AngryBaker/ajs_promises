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
        return new GameSave(JSON.parse(string));
      });
    return value;
  }
}
