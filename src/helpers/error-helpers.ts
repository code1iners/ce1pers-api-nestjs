export const failure = (message: string, code: string) => {
  console.log(`[${code}] ${message}`);
  return {
    ok: false,
    error: { message, code },
  };
};

export class OutputError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super();
    this.message = message;
    this.code = code;
  }
}
