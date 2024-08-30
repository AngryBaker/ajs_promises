import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(5000);

test('the data is saveObj', () => {
  return GameSavingLoader.load().then(data => {
    expect(data).toEqual({
          "id": 9,
          "created": 1546300800,
          "userInfo": {
            "id": 1,
            "name": "Hitman",
            "level": 10,
            "points": 2000
          }
        });
  });
});

test('the data is obj', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    "id": 9,
    "created": 1546300800,
    "userInfo": {
      "id": 1,
      "name": "Hitman",
      "level": 10,
      "points": 2000
    }
  });
});
