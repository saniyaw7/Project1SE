import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import useFetchData from '../components/RestApi';

// Enable fetch mocks
fetchMock.enableMocks();

describe('useFetchData', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches data successfully', async () => {
    const mockData = { results: [{ id: 1, name: 'Test Exercise' }] };
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const { result, waitForNextUpdate } = renderHook(() => useFetchData('exercise', ''));

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData.results);
    expect(result.current.loading).toBe(false);
  });

  it('handles fetch error', async () => {
    fetch.mockReject(new Error('Failed to fetch'));

    const { result, waitForNextUpdate } = renderHook(() => useFetchData('exercise', ''));

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});
