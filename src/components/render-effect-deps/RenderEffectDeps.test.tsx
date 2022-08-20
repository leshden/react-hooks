import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import RenderEffectDeps from './RenderEffectDeps';

describe('RenderEffectDeps component', ()=>{
  test('render', ()=>{
    render(<RenderEffectDeps />);
    const text = screen.queryByText(/Отрисовали/i);
    expect(text).not.toBeInTheDocument();
  })

  test ("click btn", () => {
    render(<RenderEffectDeps msec = {100} />);
    const firstAttemptText = screen.queryByText(/Отрисовали/i);
    expect(firstAttemptText).not.toBeInTheDocument();

    const btn = screen.getAllByRole('button')[0];
    userEvent.click(btn);

    const secondAttemptText = screen.queryByText(/Отрисовали/i);
    expect(secondAttemptText).toBeInTheDocument();
  })

  test('one call useEffect', async () => {
    render(<RenderEffectDeps msec = {100} />);
    const btn = screen.getAllByRole('button')[0];
    userEvent.click(btn);

    await waitFor(() => expect(screen.getByText(/Вызвали/i)).toBeInTheDocument(), {timeout: 200});
    userEvent.click(btn);

    await waitFor(() => expect(screen.getAllByText(/Вызвали/i).length).toBe(1), {timeout: 200});
  })

  test('change deps useEffect', async () => {
    render(<RenderEffectDeps msec = {100} />);
    const btns = screen.getAllByRole('button');
    const btn = btns[0]
    const minus_btn = btns[2];

    userEvent.click(btn);
    await waitFor(() => expect(screen.getByText(/Вызвали/i)).toBeInTheDocument(),  {timeout: 200});
    userEvent.click(minus_btn);
    await waitFor(() => userEvent.click(btn),  {timeout: 200});
    await waitFor(() => expect(screen.getAllByText(/Вызвали/i).length).toBe(2), {timeout: 200});
  })

  test ("click and reset btn", async () => {
    render(<RenderEffectDeps msec = {100} />);
    const firstAttemptText = screen.queryByText(/Отрисовали/i);
    expect(firstAttemptText).not.toBeInTheDocument();

    const btn = screen.getAllByRole('button')[0];
    userEvent.click(btn);

    const secondAttemptText = screen.queryByText(/Отрисовали/i);
    expect(secondAttemptText).toBeInTheDocument();

    await waitFor(() => {
      const btnReset = screen.getAllByRole('button')[1];
      userEvent.click(btnReset)
      const thirdAttemptText = screen.queryByText(/Отрисовали/i);
      expect(thirdAttemptText).not.toBeInTheDocument();
    }, {timeout: 200});
  })
});
