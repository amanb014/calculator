const ONE_MONTH = 2629800000;
export const withinLastMonth = (date: Date) => new Date().valueOf() - date.valueOf() < ONE_MONTH