const getRules = () => 'Find the greatest common divisor of given numbers';

const findGreatestCommonDivisor = (n1, n2) => {
  const big = n1 >= n2 ? n1 : n2;
  const small = big === n1 ? n2 : n1;
  if (big % small === 0) {
    return small;
  }

  return findGreatestCommonDivisor(small, big % small);
};

const getQuestionAnswer = () => {
  const maxNumber = 100;
  const shiftToNonZero = 1;
  const n1 = Math.floor(Math.random() * (maxNumber - shiftToNonZero)) + shiftToNonZero;
  const n2 = Math.floor(Math.random() * (maxNumber - shiftToNonZero)) + shiftToNonZero;
  const question = `${n1} ${n2}`;
  const answer = findGreatestCommonDivisor(n1, n2);
  return { question, answer };
};

export default { getRules, getQuestionAnswer };