module.exports = {
  Homework: [{
    _id: '587f0f2586653d19297d40c2',
    title: 'React',
    stack: 'JavaScript'
  }, {
    _id: '587f0f2586653d19297d40c3',
    title: 'jersey',
    stack: 'java'
  }],
  Section: [{
    _id: '587f0f2586653d19297d40c6',
    type: 'logicPuzzle',
    homeworks: [{
      _id: '587f0f2586653d19297d40c35',
      homework: '587f0f2586653d19297d40c2',
      count: 1
    }]
  }, {
    _id: '587f0f2586653d19297d40c7',
    type: 'homeworkQuiz',
    homeworks: [{
      _id: '587f0f2586653d19297d40c36',
      homework: '587f0f2586653d19297d40c3',
      count: 2
    }]
  }],
  Paper: [{
    _id: '587f0f2586653d19297d40c8',
    sections: [{
      _id: '587f0f2586653d19297d40c37',
      section: '587f0f2586653d19297d40c6'
    }]
  }]
};