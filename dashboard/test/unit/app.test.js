import App from "../../src/components/App";

describe('<App />', () => {
  it('Render without crashing', () => {
    expect(() => render(<App />)).not.toThrowError();
  });
});