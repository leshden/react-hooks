import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import RenderEffect from './RenderEffect';

describe('RenderEffect component', ()=>{
  test('render', ()=>{
    render(<RenderEffect isOneCall = {true} />);
    const text = screen.queryByText(/Отрисовали/i);
    expect(text).not.toBeInTheDocument();
  })

  test ("click btn", () => {
    render(<RenderEffect isOneCall = {true} msec = {100} />);
    const firstAttemptText = screen.queryByText(/Отрисовали/i);
    expect(firstAttemptText).not.toBeInTheDocument();

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const secondAttemptText = screen.queryByText(/Отрисовали/i);
    expect(secondAttemptText).toBeInTheDocument();
  })

  test('one call useEffect', async () => {
    render(<RenderEffect isOneCall = {true} msec = {100} />);
    const btn = screen.getByRole('button');
    userEvent.click(btn);

    await waitFor(() => expect(screen.getByText(/Вызвали/i)).toBeInTheDocument(), {timeout: 200});
    userEvent.click(btn);

    await waitFor(() => expect(screen.getAllByText(/Вызвали/i).length).toBe(1), {timeout: 200});
  })

  test('every time call useEffect', async () => {
    render(<RenderEffect isOneCall = {false} msec = {100} />);
    const btn = screen.getByRole('button');
    userEvent.click(btn);

    await waitFor(() => expect(screen.getByText(/Вызвали/i)).toBeInTheDocument(), {timeout: 200});
    userEvent.click(btn);

    await waitFor(() => expect(screen.getAllByText(/Вызвали/i).length).toBe(2), {timeout: 200});
  })

});
