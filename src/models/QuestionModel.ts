import { t } from 'mobx-state-tree';

export const QuestionModel = t.model('QuestionModel', {
  id: t.number,
  type: t.enumeration('string', ['radio', 'checkbox', 'input', 'area']),
  question: t.string,
  answers: t.maybe(t.array(t.string)),
  correctAnswer: t.maybe(t.array(t.string)),
});
