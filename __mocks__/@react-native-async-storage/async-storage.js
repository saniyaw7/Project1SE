const mockAsyncStorage = {
  getItem: jest.fn(async (key) => {
    return null;
  }),
  setItem: jest.fn(async (key, value) => {
    return null;
  }),
  removeItem: jest.fn(async (key) => {
    return null;
  }),
  clear: jest.fn(async () => {
    return null;
  }),
  getAllKeys: jest.fn(async () => {
    return [];
  })
};

export default mockAsyncStorage;
