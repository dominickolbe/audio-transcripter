import { fetchData } from './apiService';

global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('fetches data successfully', async () => {
    const mockData = { title: 'Test data' };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const data = await fetchData('test-endpoint');

    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_TRANSCRIPT_URL}test-endpoint`, {
      method: "GET",
    });
  });

  it('throws an error when the response is not ok', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchData('test-endpoint')).rejects.toThrow('Network response was not ok');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_TRANSCRIPT_URL}test-endpoint`, {
      method: "GET",
    });
  });

  it('throws an error when the fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Fetch failed'));

    await expect(fetchData('test-endpoint')).rejects.toThrow('Fetch failed');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_TRANSCRIPT_URL}test-endpoint`, {
      method: "GET",
    });
  });
});