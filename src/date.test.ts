import { date } from './date';

describe('date helper', () => {
  it('{{ date "now" "YYYY" }} should return the current year', () => {
    // given
    const currentYear = new Date().getUTCFullYear().toString();

    // when
    expect(date.date('now', 'YYYY')).toBe(currentYear);
  })
})