function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}

export default isLetter