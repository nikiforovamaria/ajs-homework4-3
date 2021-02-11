import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once 1', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 'ok' });
  const result = 'Ваш текущий уровень: ok';
  const response = getLevel(1);
  expect(response).toEqual(result);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should call getLevel once 2', () => {
  fetchData.mockReturnValue({ status: 'error', level: 'ok' });
  const result = 'Информация об уровне временно недоступна';
  const response = getLevel(2);
  expect(response).toEqual(result);
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
