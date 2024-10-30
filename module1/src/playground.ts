{
  const isAuthenticated = '';
  const result1 = isAuthenticated ?? "guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result1 }, { result2 });

  const throwError  = (msg: string):never => {
    throw new Error(msg)
  }
  throwError('dhur teri')
}
