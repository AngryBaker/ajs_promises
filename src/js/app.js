// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((savingObj) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(savingObj);
        }, 10)
    })
  }, (error) => {
      console.log(error);
  });