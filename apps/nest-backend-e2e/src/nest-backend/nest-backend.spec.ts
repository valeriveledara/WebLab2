import axios from 'axios';

describe('GET /api', () => {

  it('get gith without params', async () => {
    const res = await axios.get(`/currency/exchangeCurrency/`);

    expect(res.status).toBe(200);
    expect(res.data).toContain("https://media");
  });

  it('get gith with params, base=USD, symbols=RUB', async () => {
    const res = await axios.get(`/currency/exchangeCurrency/USD/RUB`);

    expect(res.status).toBe(200);
    expect(res.data).toContain("https://media");
  });

  it('get gith with params, base=USD, symbols=EUR', async () => {
    const res = await axios.get(`/currency/exchangeCurrency/USD/EUR`);

    expect(res.status).toBe(200);
    expect(res.data).toContain("https://media");
  });

  it('get gith with params, base=USD, symbols=KZT', async () => {
    const res = await axios.get(`/currency/exchangeCurrency/USD/KZT`);

    expect(res.status).toBe(200);
    expect(res.data).toContain("https://media");
  });

  it('get gith with params, base=USD, symbols=JPY', async () => {
    const res = await axios.get(`/currency/exchangeCurrency/USD/JPY`);

    expect(res.status).toBe(200);
    expect(res.data).toContain("https://media");
  });

  it('should throw exception with base!=USD', async () => {
    async function er(base) {
      try {
      await axios.get(`/currency/exchangeCurrency/${base}/JPY`);
      }
      catch {

      };
    }

    expect(await er("RUB")).toThrow;
    expect(await er("JPY")).toThrow;
    expect(await er("EUR")).toThrow;
    expect(await er("KZT")).toThrow;
  });

});
