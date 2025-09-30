function isLetter(char: string): boolean {
  return /^\w$/.test(char);
}

export default isLetter