import { renderHook, act } from "@testing-library/react-hooks";
import useFetch from "./useFetch";
import { fetchData } from "../services/apiService";

jest.mock("../services/apiService");

describe("useFetch", () => {
  it("fetches data and updates the state correctly", async () => {
    const mockData = { title: "Test data" };
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("test-endpoint")
    );

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it("handles error correctly", async () => {
    const mockError = new Error("Test error");
    (fetchData as jest.Mock).mockRejectedValue(mockError);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("test-endpoint")
    );

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(mockError);
  });
});
