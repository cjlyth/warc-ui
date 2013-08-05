basePath = './';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/**/angular.js',
  'bower_components/**/angular-*.js',
  'app/src/scripts/**/*.js',
  'test/**/*.js'
];

autoWatch = true;

colors = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
